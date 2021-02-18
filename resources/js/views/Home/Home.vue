<template>
    <div>
        <h1>Página inicial</h1>

        <el-form
            ref="loginForm"
            :model="form"
            :rules="formRules"
            class="login-form"
            auto-complete="off"
            label-position="left"
        >
            <el-form-item prop="name">
                <label>Nome</label>
                <el-input v-model="form.name" placeholder="Nome">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item prop="email">
                <label>Email</label>
                <el-input v-model="form.email" placeholder="E-mail">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button
                    :loading="loading"
                    type="primary"
                    style="width: 100%"
                    icon="el-icon-right"
                    @click.native.prevent="submitForm"
                    :disabled="loading"
                    >ENTRAR</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel';
import ProductCard from '@/components/ProductCard';
import HorizontalCard from '@/components/ProductHorizontalCard';
import CategoryCard from '@/components/CategoryCard';
import products from '@/database/products.js';
import categories from '@/database/categories.js';
import axios from 'axios';

export default {
    components: {
        Carousel,
        ProductCard,
        CategoryCard,
        HorizontalCard,
    },
    data: () => {
        return {
            loading: false,
            form: {
                name: '',
                email: '',
            },
            formRules: {
                name: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            const re = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
                            if (value === '') {
                                callback(new Error('Digite um nome válido.'));
                            } else if (!re.test(value)) {
                                callback(
                                    new Error('Formato de nome inválido.')
                                );
                            } else {
                                callback();
                            }
                        },
                    },
                ],
                email: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (value === '') {
                                callback(new Error('Digite um email.'));
                            } else if (!re.test(value)) {
                                callback(new Error('Digite um e-mail válido.'));
                            } else {
                                callback();
                            }
                        },
                    },
                ],
            },
            data: products,
            categories: categories,
            bestselers: products.slice(0, 4),
            inHigh: products.slice(0, 3),
            recents: products.slice(0, 3),
            formData: {
                cityInput: '',
                city: '',
            },
            input3: '',
            select: [],
            tableColumns: [
                { prop: 'title', minWidth: '200', label: 'Título' },
                { prop: 'value', minWidth: '200', label: 'Valor' },
            ],
        };
    },
    methods: {
        submitForm() {
            this.$refs.loginForm.validate(async (valid) => {
                if (valid) {
                    this.loading = true;

                    setTimeout(() => {
                        this.loading = false;
                    }, 5000);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        onClick(props) {
            console.log(props);
        },
        onSubmit() {
            console.log('submeteu');
        },
        getCities(query, callback) {
            this.clearCity();
            axios
                .get('/cities', {
                    query: query,
                })
                .then((response) => {
                    callback(response.data);
                });
        },
        handleSelectCity(item) {
            this.formData.city = item.value;
        },
        clearCity() {
            this.formData.city = '';
        },
    },
    mounted() {
        const { data } = this;
        data.map((item, index) => {
            item.value = `R$ ${item.value}`;
        });
    },
};
</script>

<style lang="scss" scoped>
.section-title {
    text-align: center;
    margin: 3rem 0;
}
.section-title h1 {
    font-family: 'Secular One', sans-serif;
    font-size: 2.1rem !important;
}
.section-title h5 {
    color: #666;
}
.section-button {
    padding: 2rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.see-more {
    display: block;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    background-color: #333;
    padding: 1rem 3rem;
    cursor: pointer;
}
.paralax {
    width: 100%;
    min-height: 400px;
    padding: 2rem 0;
    background-color: #333;
    background-image: url('https://cdn.dooca.store/1671/files/background-jaime-shop-preto.png?v=1605121539&webp=0');
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
}
.paralax div a {
    display: inline-block;
    background-color: #fff;
    padding: 1rem 3rem;
    color: #333;
    text-transform: uppercase;
    font-weight: bold;
}
.paralax div a:hover {
    color: #333;
}
.paralax div h1 {
    font-size: 3.3rem !important;
    margin: 1rem 0 2rem;
    text-transform: uppercase;
    font-family: 'Secular One', sans-serif;
}
</style>

