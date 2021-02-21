<template>
    <header class="home-header">
        <h1>
            <i
                title="Menu"
                @click="toggle"
                class="fa"
                :class="active ? 'fa-times' : 'fa-bars'"
            ></i>
            <span class="screen-large">SMART CONDOMINIUM</span>
            <span class="screen-small">SMART COND.</span>
        </h1>

        <div>
            <a
                title="Área do usuário"
                @click.prevent="redirect($router, 'UserDashboard')"
                class="btn btn-info circle"
                ><i class="fa fa-user"></i
            ></a>
        </div>

        <transition name="dropdown-content">
            <nav v-if="active" v-on-clickaway="away">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </transition>
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
