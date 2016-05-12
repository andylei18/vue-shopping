<template>
	<div class="ui-app with-header">
		
		<header class="ui-head-bar">
		    <a class="arr" href="javascript:void(history.back());">
		      <i class="icon-back"></i>
		    </a>
		    <p class="title">个人中心</p>
		    <span class="badge icon-uniE810 badge-car" v-link="{name:'cart'}"></span>
		 </header>

		 <div id="views">
		 	<div class="wrap">
		 		<header class="hd">
			 		<div class="avaterbox">
				 		<div class="r r1">
					 		<div class="r r2">
						 		<div class="r r3">
							 		<div class="r r4">
							 			<img src="http://s22.mogucdn.com/p1/160511/upload_ifrdsmjqgm2wcnjxhazdambqmeyde_40x40.jpg_100x100.jpg" alt="" class="avater">
							 		</div>
						 		</div>
					 		</div>
				 		</div>
			 		</div>
			 		<div class="namecard">
				 		<h2 class="tt">aNdy200509<span class="lv lv0"></span></h2>
				 		<p class="subtt"><span class="mbean">蘑豆 0</span> <span class="coupon">现金券 0</span></p>
			 		</div>
		 		</header>
		 	</div>
		 </div>
	</div>
</template>