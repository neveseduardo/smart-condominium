<template>
    <div
        shadow="hover"
        class="product-horizontal-card"
        :body-style="{ padding: '0px' }"
    >
        <figure>
            <img :src="image" />
        </figure>
        <div style="padding: 14px">
            <h5>
                <span>{{ title }}</span>
				<a @click="toggleLiked"><i :class="liked ? 'fa fa-heart' : 'far fa-heart'"></i></a>
            </h5>
            <el-rate v-model="rate"></el-rate>
            <h2 class="text-bold">R$ {{ value }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image', 'title', 'value'],
    data: () => {
        return {
			rate: null,
			liked: false,
        };
	},
	methods: {
		toggleLiked(){
			this.liked = !this.liked
		}
	}
};
</script>

<style>
.product-horizontal-card{
	display: flex;
	flex-direction: row;
	background-color: #fbfbfb;
	margin-bottom: 1rem;
}
.product-horizontal-card figure{
	width: 120px;
	height: 120px;
	overflow: hidden;
	background-color: #333;
	margin: 0 !important;
}
.product-horizontal-card figure img{
	object-fit: cover;
	width: 120px;
	height: 120px
}
.product-horizontal-card > div{
	display: flex;
	flex-direction: column;
	flex: 1;
}
.product-horizontal-card > div h5{
	display: flex;
	flex-direction: row;
}
.product-horizontal-card > div h5 span,
.product-horizontal-card > div h5 a {
	cursor: pointer;
}
.product-horizontal-card > div h5 span {
	flex: 1
}
.product-horizontal-card > div h2{
	font-family: 'Secular One', sans-serif;
	margin-top: 0.5rem;
	font-size: 1.2rem;
}
</style>