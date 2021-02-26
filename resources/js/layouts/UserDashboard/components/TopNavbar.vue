<template>
    <navbar v-model="showNavbar">
        <div class="navbar-wrapper">
            <div class="navbar-minimize">
                <button
                    id="minimizeSidebar"
                    class="btn btn-icon btn-round"
                    @click="minimizeSidebar"
                >
                    <i
                        class="nc-icon nc-minimal-right text-center visible-on-sidebar-mini"
                    ></i>
                    <i
                        class="nc-icon nc-minimal-left text-center visible-on-sidebar-regular"
                    ></i>
                </button>
            </div>
            <div class="navbar-toggle">
                <navbar-toggle-button @click.native="toggleSidebar">
                </navbar-toggle-button>
            </div>
            <a class="navbar-brand" href="#pablo"></a>
        </div>

        <template slot="navbar-menu">
            <div class="navbar-wrapper">
                <p>Usuário teste</p>
            </div>
            <ul class="navbar-nav"></ul>
        </template>
    </navbar>
</template>
<script>
import Navbar from '@/components/Navbar';
import NavbarToggleButton from '@/components/NavbarToggleButton';

export default {
    components: {
        Navbar,
        NavbarToggleButton,
    },
    data() {
        return {
            activeNotifications: false,
            showNavbar: false,
            notificacao: [],
            notificacaoNaoLida: null,
            id_notificacao_beneficiario_array: [],
            usuario: JSON.parse(localStorage.getItem('usuario')),
        };
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toggleNotificationDropDown() {
            this.activeNotifications = !this.activeNotifications;
        },
        closeDropDown() {
            this.activeNotifications = false;
        },
        toggleSidebar() {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
        hideSidebar() {
            this.$sidebar.displaySidebar(false);
        },
        minimizeSidebar() {
            this.$sidebar.toggleMinimize();
        },
        toggleNavbar() {
            this.showNavbar = !this.showNavbar;
        },
    },
    created() {},

    watch: {},
};
</script>

