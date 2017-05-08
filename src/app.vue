<template>
	<!-- App -->
	<div id="app">
	
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
	
		<!-- Right Panel -->
		<f7-panel left reveal layout="dark">
			<f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Menu" sliding></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-block>
							<p>Favorite</p>
						</f7-block>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>
	
		<f7-views>
			<f7-view id="main-view" :swipeBackPage="true" main>
				<!-- Pages -->
				<f7-pages>
					<f7-page class="main_page">
						<f7-block-title class="main_title">
							Next Movies
								<svg version="1.1" @click="OpenPanel" class="menu_icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								viewBox="0 0 183.2 139.2" style="enable-background:new 0 0 183.2 139.2;" xml:space="preserve">
									<path d="M7,17.4h169.1c4.2,0,7-3.5,7-8.7s-2.8-8.7-7-8.7H7C2.8,0,0,3.5,0,8.7S2.8,17.4,7,17.4z"/>
									<path d="M178.3,60.9H60.7c-2.9,0-4.9,3.5-4.9,8.7s1.9,8.7,4.9,8.7h117.5c2.9,0,4.9-3.5,4.9-8.7S181.3,60.9,178.3,60.9z"/>
									<path d="M177.2,121.8H32.7c-3.6,0-6,3.5-6,8.7s2.4,8.7,6,8.7h144.5c3.6,0,6-3.5,6-8.7C183.2,125.3,180.8,121.8,177.2,121.8z"/>
								</svg>
						</f7-block-title>
						<list></list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-views>
	
	</div>
</template>

<script>
import List from './component/list'

export default {
	name: 'main',
	data() {
		return {

		}
	},
	components: {
		'list': List
	},
	methods : {
		OpenPanel : function (){
			this.$f7.openPanel('left');
		}
	}
}
</script>

<style>
.main_title {
	text-align: center;
	position: relative;
	font-size: 1.5em!important;
	margin-top: 35px!important;
}

.menu_icon{
	height: 15px;
    position: absolute;
    left: 0;
    top: 5px;
	-webkit-transform: rotate(180deg);
	-moz-transform: rotate(180deg);
	-o-transform: rotate(180deg);
	transform: rotate(180deg);
}

.menu_icon path{
	fill:#fff;
}
</style>