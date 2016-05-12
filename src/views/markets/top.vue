<style>
a {
    text-decoration: none;
    color: rgb(0, 0, 0);
}
.top_banner, .all_shop_list .shop_list_item {
    background: rgb(255, 255, 255);
}
.top_banner .top_banner_image {
    height: 3.8rem;
}
.top_banner_image a {
    display: block;
}
.top_banner .top_banner_image img {
    width: 100%;
    height: 100%;
}
.fadeIn {
    -webkit-animation: fadeIn .8s ease both;
    animation: fadeIn .8s ease both;
}
</style>
<template>
	<div id="love_favour" class="top_banner">
		<div class="top_banner_image">
			<a href="javascript:;" class="pushWindow">
				<img src="../../assets/images/markets/goods/top_banner_image_markets_goods.jpg" class="fadeIn"/>
			</a>
		</div>
	</div>
</template>
<script>
	export default{
		props:["list"]
	}
</script>