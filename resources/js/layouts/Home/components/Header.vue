<template>
    <el-header class="home-navbar">
        <div
            @click.prevent="toggleSidebar"
            class="home-sidebar-overlay"
            :class="showSidebar ? 'show' : ''"
        ></div>
        <div class="home-sidebar" :class="showSidebar ? 'show' : ''">
			<home-sidebar />
		</div>

        <i @click.prevent="toggleSidebar" class="fa fa-bars"></i>
        <h1>SHOPPING</h1>
        <el-form ref="addressForm" :inline="true" :model="formData">
            <el-form-item prop="city">
                <el-autocomplete
                    v-model="formData.cityInput"
                    :fetch-suggestions="getCities"
                    placeholder="Pesquisar..."
                    :trigger-on-focus="false"
                    :clearable="true"
                    @select="handleSelectCity"
                    @clear="clearCity"
                >
                    <el-select
                        v-model="select"
                        slot="prepend"
                        placeholder="Categoria"
                    >
                        <el-option label="Restaurant" value="1"></el-option>
                        <el-option label="Order No." value="2"></el-option>
                        <el-option label="Tel" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-autocomplete>
            </el-form-item>
        </el-form>
        <ul>
            <li>
                <a><li class="fa fa-heart"></li></a>
            </li>
            <li>
                <a><li class="fa fa-shopping-bag"></li></a>
            </li>
            <li>
                <a><li class="fa fa-user"></li></a>
            </li>
        </ul>
    </el-header>
</template>

<script>
import HomeSidebar from './Sidebar';
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios';

export default {
    data() {
        return {
            formData: {
                cityInput: '',
                city: '',
            },
            input3: '',
            select: [],
        };
	},
	components: {
		HomeSidebar,
	},
	computed: {
		...mapGetters({ showSidebar: 'sidebar/showSidebar' }),
	},
    methods: {
		...mapActions({ setShowSidebar: 'sidebar/setShowSidebar' }),
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
        toggleSidebar() {
            this.setShowSidebar()
        },
	},
	mounted() {
	}
};
</script>

<style lang="scss">
.home-navbar {
    width: 100%;
    display: flex;
    height: 60px;
    border-bottom: 1px solid #dedede;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999 !important;
    background-color: #fff;
}
.home-navbar > i.fa {
    line-height: 60px;
    margin-right: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
}
.home-navbar > h1 {
    font-size: 1.2rem;
    line-height: 60px;
    flex: 1;
}
.home-navbar .el-form {
    padding: 10px 1rem;
    display: none;
}
@media screen and (min-width: 1200px) {
    .home-navbar .el-form {
        display: block;
    }
}
.home-navbar form,
.home-navbar .el-form .el-form-item,
.home-navbar .el-form .el-form-item__content,
.home-navbar .el-form .el-autocomplete,
.home-navbar .el-form .el-form-item .el-input {
    width: 100%;
}
.home-navbar .el-input--suffix {
    min-width: 120px;
}
.home-navbar > ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    line-height: 60px;
}
.home-navbar > ul li a {
    display: block;
    padding: 0 1rem;
}
.home-navbar > ul li a {
    color: #444;
}
.home-navbar .el-input-group__prepend,
.home-navbar .el-input-group__append {
    background-color: #fff;
}
.home-navbar .el-input-group__prepend:hover,
.home-navbar .el-input-group__append:hover {
    background-color: #dcdfe6;
}
.home-navbar .home-sidebar-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
    display: none;
    cursor: pointer;

    transition: display 300ms ease-in-out;
    -webkit-transition: display 300ms ease-in-out;
    -moz-transition: display 300ms ease-in-out;
    -ms-transition: display 300ms ease-in-out;
    -o-transition: display 300ms ease-in-out;
}
.home-navbar .home-sidebar-overlay.show {
    display: block !important;
}
.home-navbar .home-sidebar {
    width: 260px;
    height: 100%;
    position: fixed;
    left: -260px;
    top: 0;
    background-color: #fff;
    z-index: 99999999;

    transition: all 300ms ease-in-out;
    -webkit-transition: all 300ms ease-in-out;
    -moz-transition: all 300ms ease-in-out;
    -ms-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
}

.home-navbar .home-sidebar.show {
    left: 0 !important;
}
</style>