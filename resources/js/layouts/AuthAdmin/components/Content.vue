<template>
    <div class="home-content">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.home-content{
	min-height: calc(100vh - 60px - 60px - 40px);
}
</style>
