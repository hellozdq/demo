<template>
	<div>
		<div id="container">
			<header>
				<div class="title">
					<Flexbox class="parenFlex" :gutter="0">
						<FlexboxItem :span="1"><i class="iconfont icon-caidan"></i></FlexboxItem>
						<FlexboxItem :span="10">
							<Flexbox class="titleCenter" justify="center" :gutter="0">
								<FlexboxItem>我</FlexboxItem>
								<FlexboxItem>听</FlexboxItem>
								<FlexboxItem>看</FlexboxItem>
								<FlexboxItem>唱</FlexboxItem>
							</Flexbox>
						</FlexboxItem>
						<FlexboxItem :span="1"><i class="iconfont icon-jia"></i></FlexboxItem>
					</Flexbox>
				</div>
				<div class="search">
					<div class="search_child"></div>
				</div>
			</header>
			<section>
				11111111111
			</section>
		</div>
		
	</div>
</template>

<script>
	import {Flexbox,FlexboxItem} from 'vux'
	export default{
		name:'Home',
		data(){
			return{
				
			}
		},
		components: {
			Flexbox,
			FlexboxItem
		},
	}
</script>

<style scoped="scoped" lang="scss">
	/* 清除浮动 */
	@mixin clearfix {
		&:after {
			content: " ";
			display: block;
			height: 0;
			clear: both;
			visibility: hidden;
		}
	}
	#container{
		padding-top: 61px;
		header{
			width: 100%;
			position: fixed;
			padding: 0 10px;
			padding-top: 30px;
			top: 0;
			background: #4995df;
			box-sizing: border-box;
			.title{
				font-size: 16px;
				color: #fff;
				.parenFlex{
					text-align: center;
					.titleCenter{
						text-align: center;
						box-sizing: border-box;
						padding: 0 10px;
						.flex-item{
							width: 60px
						}
					}
				}
			}
			.search{
				margin: 10px 0;
				.search_child{
					border-radius: 10px;
					background: #6aaff2;
					height: 20px;
				}
			}
		}
		section{
			height: 1000px;
			background: green;
		}
	}
	
</style>
