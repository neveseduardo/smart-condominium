<template>
    <header class="home-header">
        <h1>
            <i
                @click="toggle"
                class="fa"
                :class="active ? 'fa-times' : 'fa-bars'"
            ></i
            >SMART CONDOMINIUM
        </h1>

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
