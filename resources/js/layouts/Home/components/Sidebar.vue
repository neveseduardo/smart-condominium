<template>
    <div class="sidebar-wrapper" ref="sidebarScrollArea">
        <h1 @click.prevent="toggleSidebar"><span>SHOPPING</span><i class="fa fa-arrow-left"></i></h1>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#ffffff"
            text-color="#666"
            active-text-color="#09f"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>Navigator Four</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>Navigator Four</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>Navigator Four</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import 'perfect-scrollbar/dist/css/perfect-scrollbar.css';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Sidebar',
    computed: {
        ...mapGetters({ showSidebar: 'sidebar/showSidebar' }),
    },
    methods: {
		...mapActions({ setShowSidebar: 'sidebar/setShowSidebar' }),
        handleOpen(key, keyPath) {
            //
        },
        handleClose(key, keyPath) {
            //
        },
        async initScrollBarAsync() {
            let isWindows = navigator.platform.startsWith('Win');
            if (!isWindows) {
                return;
            }
            const PerfectScroll = await import('perfect-scrollbar');
            PerfectScroll.initialize(this.$refs.sidebarScrollArea);
		},
		toggleSidebar(){
			this.setShowSidebar()
		}
    },
    mounted() {
		this.initScrollBarAsync();
		console.log(this.showSidebar)
    },
};
</script>

<style>
.sidebar-wrapper {
    height: calc(100vh - 75px) !important;
}
.sidebar-wrapper > h1 {
    font-size: 1.2rem;
    padding: 0 20px;
    line-height: 60px;
    height: 60px;
    color: #333;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
	cursor: pointer;
}
.sidebar-wrapper > h1 span {
    flex: 1;
}
</style>