<template>
    <div class="auth-content">
        <div class="card card-body">
            <i class="fa fa-user auth-icon"></i>
            <h1>Área do usuário</h1>

            <el-form
                ref="loginForm"
                :model="form"
                :rules="rules"
                class="login-form"
                auto-complete="off"
                label-position="top"
                @submit.native.prevent="submitForm"
            >
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item label="E-mail" prop="email">
                            <el-input
                                placeholder="E-mail"
                                type="text"
                                v-model="form.email"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="Senha" prop="password">
                            <el-input
                                placeholder="Senha"
                                type="password"
                                v-model="form.password"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-form-item>
                    <button class="btn btn-primary btn-round btn-block">
                        <i
                            class="fa"
                            :class="loading ? 'fa-spin fa-spinner' : 'fa-lock'"
                        ></i>
                        Entrar
                    </button>
                </el-form-item>
            </el-form>

            <a href="#" @click.prevent="redirect('UserForgotPassword')"
                >Esqueceu a senha ?</a
            >
        </div>
    </div>
</template>

<script>
import Nprogress from 'nprogress';
import http from '@/http';
import { logInUser } from '@/services/authentication';

export default {
    data() {
        return {
            loading: false,
            form: {
                email: 'user@example.com',
                password: 'password',
            },
            rules: {
                email: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                return callback(new Error('Digite um email.'));
                            }
                            if (this.validate('email', value)) {
                                return callback(
                                    new Error('Digite um e-mail válido.')
                                );
                            }
                            return callback();
                        },
                    },
                ],
                password: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            if (this.validate('empty', value)) {
                                return callback(new Error('Digite uma senha.'));
                            }
                            if (this.validate('password', value)) {
                                return callback(
                                    new Error(
                                        'O campo senha deve conter pelo menos 6 caracteres.'
                                    )
                                );
                            }
                            return callback();
                        },
                    },
                ],
            },
        };
    },
    methods: {
        submitForm() {
            this.$refs.loginForm.validate(async (valid) => {
                if (valid) {
                    Nprogress.start();
                    this.loading = true;
                    const { userLogin } = http.authentication;

                    try {
                        const req = await userLogin(this.form);
                        const user = req.object;
                        logInUser(user);
                        this.redirect(this.$router, 'UserDashboard');
                    } catch (error) {
                        console.log(error);
                    }
                    Nprogress.done();
                    this.loading = false;
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped>
</style>

