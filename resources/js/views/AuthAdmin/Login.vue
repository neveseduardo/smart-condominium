<template>
    <div class="auth-content">
        <div class="card card-body">
            <i class="fa fa-user auth-icon"></i>
            <h1>Área do gerente</h1>

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
                    <button class="btn btn-primary round btn-block">
                        <i
                            class="fa"
                            :class="loading ? 'fa-spin fa-spinner' : 'fa-lock'"
                        ></i>
                        Entrar
                    </button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import Nprogress from 'nprogress';
import http from '@/http';
import { logInAdmin } from '@/services/authentication';

export default {
    data() {
        return {
            loading: false,
            form: {
                email: 'admin@example.com',
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
                if (valid && !this.loading) {
                    Nprogress.start();
                    this.loading = true;
                    const { adminLogin } = http.authentication;

                    try {
                        const req = await adminLogin(this.form);
                        const admin = req.object;
                        logInAdmin(admin);
                        this.redirect('AdminDashboard');
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

