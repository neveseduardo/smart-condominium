<template>
    <div>
        <div class="home-introduction d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-md-6">
                        <div class="col-container">
                            <h1>
                                Seja bem vindo ao SMART CONDOMINIUM, o mais novo
                                sistema de gestão de condomínios.
                            </h1>
                            <p>
                                Aqui você pode se cadastrar, gerar seus boletos,
                                administrar contas anteriores, fazer café da
                                manhã e servir no jantar, sem complicação. Tudo
                                rápido, fácil e acessível.
                            </p>
                            <button
                                @click.prevent="scrollToElement('.home-about')"
                                class="btn btn-round btn-default btn-large"
                            >
                                Conheça mais
                            </button>
                        </div>
                    </div>
                    <div class="col col-12 col-md-6">
                        <img src="/img/condominios.png" />
                    </div>
                </div>
            </div>
        </div>

        <div id="home-about" class="home-about d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-md-6">
                        <img src="/img/negocios.png" />
                    </div>

                    <div class="col col-12 col-md-6">
                        <div class="col-container">
                            <h1>
                                Temos acompenhado o mercado e as tecnologias de
                                gerenciamento à anos.
                            </h1>
                            <p>
                                Nos colocando nos lugar do cliente para entender
                                as reais necessidades nos sistemas de
                                gerenciamento de condoínios.
                            </p>
                            <button class="btn btn-round btn-warning btn-large">
                                Nossos planos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="home-services" class="home-services d-flex align-items-center">
            <div class="container">
                <div class="section-title">
                    <h1>Nossos serviços</h1>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nesciunt dolores reiciendis distinctio fugiat
                        repudiandae hic nemo voluptatum quisquam unde autem.
                    </p>
                </div>
                <div class="row">
                    <div
                        v-for="(item, index) in services"
                        :key="index"
                        class="col col-12 col-md-3"
                    >
                        <span><i :class="item.icon"></i></span>
                        <h5>{{ item.title }}</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum, facilis?
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="home-pricing d-flex align-items-center">
            <div class="container">
                <div class="section-title">
                    <h1>Conheça nossos planos</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Soluta deleniti quo esse quisquam pariatur! Magni
                        ullam ducimus reprehenderit quibusdam quasi deleniti
                        quam! Aspernatur repudiandae deserunt delectus soluta
                        autem placeat quaerat.
                    </p>
                </div>

                <div class="row">
                    <div
                        v-for="(item, index) in cards"
                        :key="index"
                        class="col col-12 col-md-4"
                    >
                        <div :class="`pricing-card pricing-card-${item.color}`">
                            <header>
                                <h1 class="card-title">{{ item.title }}</h1>
                                <h2 class="card-price">{{ item.pricing }}</h2>
                            </header>
                            <section>
                                <ul>
                                    <li>Geração de boletos</li>
                                    <li>Café da manhã</li>
                                    <li>Louças lavadas</li>
                                    <li>envio de torpedos</li>
                                    <li>Por ai vai</li>
                                </ul>
                            </section>
                            <footer>
                                <button
                                    :class="`btn btn-round btn-block btn-${item.color}`"
                                >
                                    Comprar agora
                                </button>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="home-contact d-flex align-items-center">
            <div class="container">
                <div class="section-title">
                    <h1>Entre em contato</h1>

                    <p>
                        Tire suas dúvidas diretamente com nossos atendentes na
                        central, enviamos um e-mail e retorno automático para
                        confirmar o contato e um email de responsta assim que
                        possível
                    </p>
                </div>

                <div class="card card-body">
                    <el-form
                        ref="loginForm"
                        :model="form"
                        :rules="formRules"
                        class="login-form"
                        auto-complete="off"
                        label-position="top"
                        @submit.native.prevent="submitForm"
                    >
                        <el-row :gutter="20">
                            <el-col :span="24" :md="12">
                                <el-form-item label="Nome" prop="name">
                                    <el-input
                                        placeholder="Nome"
                                        type="text"
                                        v-model="form.name"
                                        autocomplete="off"
                                    ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24" :md="12">
                                <el-form-item label="E-mail" prop="email">
                                    <el-input
                                        placeholder="E-mail"
                                        type="email"
                                        v-model="form.email"
                                        autocomplete="off"
                                    ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="Assunto" prop="subject">
                                    <el-input
                                        placeholder="Assunto"
                                        type="text"
                                        v-model="form.subject"
                                        autocomplete="off"
                                    ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="Mensagem" prop="message">
                                    <el-input
                                        placeholder="Mensagem"
                                        type="textarea"
                                        v-model="form.message"
                                        autocomplete="off"
                                        maxlength="250"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item>
                            <div class="d-flex justify-content-end">
                                <button class="btn btn-round btn-primary">
                                    Enviar
                                </button>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                { title: 'Basic', pricing: 'R$ 29', color: 'success' },
                { title: 'Standard', pricing: 'R$ 59', color: 'danger' },
                { title: 'Pro', pricing: 'R$ 99', color: 'info' },
            ],
            services: [
                { title: 'Tipo de serviço 1', icon: 'fa fa-user' },
                { title: 'Tipo de serviço 2', icon: 'fa fa-envelope' },
                { title: 'Tipo de serviço 3', icon: 'fa fa-chart-line' },
                { title: 'Tipo de serviço 4', icon: 'fa fa-city' },
                { title: 'Tipo de serviço 5', icon: 'fa fa-clock' },
                { title: 'Tipo de serviço 6', icon: 'fa fa-cogs' },
                {
                    title: 'Tipo de serviço 7',
                    icon: 'fa fa-file-invoice-dollar',
                },
                { title: 'Tipo de serviço 8', icon: 'fa fa-hands' },
            ],
            form: {
                name: '',
                email: '',
                subject: '',
                message: '',
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
                subject: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            const re = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
                            if (value === '') {
                                return callback(
                                    new Error('Digite um assunto.')
                                );
                            }
                            return callback();
                        },
                    },
                ],
                message: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            const re = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
                            if (value === '') {
                                return callback(
                                    new Error('Digite uma mensagem.')
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
                    return console.log('Deu');

                    this.loading = true;

                    setTimeout(() => {
                        this.loading = false;
                    }, 5000);
                } else {
                    console.log('error submit!!');
                    return false;
                }
                return console.log('não deu');
            });
        },
    },
};
</script>