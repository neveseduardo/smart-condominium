<template>
    <header class="home-header">
        <div class="container">
            <h1>
                <button
                    title="MENU"
                    @click.prevent="toggle"
                    class="btn btn-icon btn-round btn-primary"
                >
                    <i class="fa" :class="active ? 'fa-times' : 'fa-bars'"></i>
                </button>
                <span class="screen-large">{{ app_name }}</span>
                <span class="screen-small">{{
                    `${app_name.slice(0, 10)}.`
                }}</span>
            </h1>

            <div>
                <a
                    title="Área do usuário"
                    @click.prevent="redirect('UserDashboard')"
                    class="btn btn-icon btn-primary btn-round"
                    ><i class="fa fa-user"></i
                ></a>
            </div>

            <transition name="dropdown-content">
                <nav v-if="active" v-on-clickaway="away">
                    <ul>
                        <li><a @click.prevent="scrollToElement('.home-content')" href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </transition>
        </div>
    </header>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
    name: 'Header',
    mixins: [clickaway],
    computed: {
        active() {
            return this.showNavbar;
        },
    },
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
            showNavbar: false,
        };
    },
    methods: {
        toggle() {
            this.showNavbar = !this.showNavbar;
        },
        away() {
            this.showNavbar = false;
        },
    },
};
</script>
