<template>
	<!-- App -->
	<div id="app">
	
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
	
		<f7-panel left reveal>
			<div class="logo"></div>
			<div class="content-block">
				<ul class="panel_menu">
					<li @click="GoToFavorites">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 49.94 49.94" style="enable-background:new 0 0 49.94 49.94;" xml:space="preserve">
							<path d="M48.856,22.731c0.983-0.958,1.33-2.364,0.906-3.671c-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757  c-0.515-0.075-0.96-0.398-1.19-0.865L28.182,3.043c-0.607-1.231-1.839-1.996-3.212-1.996c-1.372,0-2.604,0.765-3.211,1.996  L16.352,14c-0.23,0.467-0.676,0.79-1.191,0.865L3.069,16.623C1.71,16.82,0.603,17.753,0.178,19.06  c-0.424,1.307-0.077,2.713,0.906,3.671l8.749,8.528c0.373,0.364,0.544,0.888,0.456,1.4L8.224,44.702  c-0.232,1.353,0.313,2.694,1.424,3.502c1.11,0.809,2.555,0.914,3.772,0.273l10.814-5.686c0.461-0.242,1.011-0.242,1.472,0  l10.815,5.686c0.528,0.278,1.1,0.415,1.669,0.415c0.739,0,1.475-0.231,2.103-0.688c1.111-0.808,1.656-2.149,1.424-3.502  L39.651,32.66c-0.088-0.513,0.083-1.036,0.456-1.4L48.856,22.731z M37.681,32.998l2.065,12.042c0.104,0.606-0.131,1.185-0.629,1.547  c-0.499,0.361-1.12,0.405-1.665,0.121l-10.815-5.687c-0.521-0.273-1.095-0.411-1.667-0.411s-1.145,0.138-1.667,0.412l-10.813,5.686  c-0.547,0.284-1.168,0.24-1.666-0.121c-0.498-0.362-0.732-0.94-0.629-1.547l2.065-12.042c0.199-1.162-0.186-2.348-1.03-3.17  L2.48,21.299c-0.441-0.43-0.591-1.036-0.4-1.621c0.19-0.586,0.667-0.988,1.276-1.077l12.091-1.757  c1.167-0.169,2.176-0.901,2.697-1.959l5.407-10.957c0.272-0.552,0.803-0.881,1.418-0.881c0.616,0,1.146,0.329,1.419,0.881  l5.407,10.957c0.521,1.058,1.529,1.79,2.696,1.959l12.092,1.757c0.609,0.089,1.086,0.491,1.276,1.077  c0.19,0.585,0.041,1.191-0.4,1.621l-8.749,8.528C37.866,30.65,37.481,31.835,37.681,32.998z" style="fill: rgb(255, 255, 255);"></path>
						</svg>
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 478.703 478.703" style="enable-background:new 0 0 478.703 478.703;" xml:space="preserve">
							<g>
								<g>
									<path d="M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8    c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2    c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8    c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1    c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8    c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5    l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6    c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1    l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1    C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9    c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8    c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42    c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8    c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8    c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2    c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42    c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6    c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1    c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8    c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7    c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z" style="fill: rgb(255, 255, 255);"></path>
									<path d="M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001    z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z" style="fill: rgb(255, 255, 255);"></path>
								</g>
							</g>
						</svg>
					</li>
				</ul>
			</div>
			<p class="version">version 0.0.2</p>
		</f7-panel>

		<f7-views>
			<f7-view id="main-view" :swipeBackPage="true" main>
				<!-- Pages -->
				<f7-pages>
					<f7-page class="main_page">
						<f7-block-title class="main_title">
							<div class="search_icon" @click="ShowSearchFrom"></div>
							Next Movies
							<svg version="1.1" @click="OpenPanel" class="menu_icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
							viewBox="0 0 183.2 139.2" style="enable-background:new 0 0 183.2 139.2;" xml:space="preserve">
								<path d="M7,17.4h169.1c4.2,0,7-3.5,7-8.7s-2.8-8.7-7-8.7H7C2.8,0,0,3.5,0,8.7S2.8,17.4,7,17.4z"/>
								<path d="M178.3,60.9H60.7c-2.9,0-4.9,3.5-4.9,8.7s1.9,8.7,4.9,8.7h117.5c2.9,0,4.9-3.5,4.9-8.7S181.3,60.9,178.3,60.9z"/>
								<path d="M177.2,121.8H32.7c-3.6,0-6,3.5-6,8.7s2.4,8.7,6,8.7h144.5c3.6,0,6-3.5,6-8.7C183.2,125.3,180.8,121.8,177.2,121.8z"/>
							</svg>
						</f7-block-title>
						<list :searchstatus="status"></list>
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
			status:false
		}
	},
	components: {
		'list': List
	},
	methods : {
		GoToFavorites :function (){
			return this.$f7.mainView.router.load({url: '/favorites/'}),
			this.$f7.closePanel('left');
		},
		OpenPanel : function (){
			this.$f7.openPanel('left');
		},
		ShowSearchFrom : function (){
			this.status = !this.status;
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

.search_icon{
	height: 50px;
    width: 50px;
    position: absolute;
    right: 0;
    top: 5px;
    background-size: 20px;
	background-position: top right;
	background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Ik00OTUsNDY2LjJMMzc3LjIsMzQ4LjRjMjkuMi0zNS42LDQ2LjgtODEuMiw0Ni44LTEzMC45QzQyNCwxMDMuNSwzMzEuNSwxMSwyMTcuNSwxMUMxMDMuNCwxMSwxMSwxMDMuNSwxMSwyMTcuNSAgIFMxMDMuNCw0MjQsMjE3LjUsNDI0YzQ5LjcsMCw5NS4yLTE3LjUsMTMwLjgtNDYuN0w0NjYuMSw0OTVjOCw4LDIwLjksOCwyOC45LDBDNTAzLDQ4Ny4xLDUwMyw0NzQuMSw0OTUsNDY2LjJ6IE0yMTcuNSwzODIuOSAgIEMxMjYuMiwzODIuOSw1MiwzMDguNyw1MiwyMTcuNVMxMjYuMiw1MiwyMTcuNSw1MkMzMDguNyw1MiwzODMsMTI2LjMsMzgzLDIxNy41UzMwOC43LDM4Mi45LDIxNy41LDM4Mi45eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KPC9zdmc+Cg==)
}

.panel{
	width:50px;
	background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}

.panel-overlay{
	background: rgba(0, 0, 0, .5);
}

body.with-panel-left-reveal .panel-overlay,
body.with-panel-left-reveal .views{
	-webkit-transform: translate3d(50px,0,0);
    transform: translate3d(50px,0,0);
}

.panel .content-block{
	margin: 25px 0;
	padding: 0;
}

.logo{
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background: #222;
	margin: 15px auto;
}

.panel_menu{
	list-style: none;
	padding-left: 0;
}

.panel_menu li{
	text-align: center;
	height: 20px;
	padding-bottom: 10px;
	padding-top: 10px;
	border-bottom: 1px solid rgba(247, 247, 248, 0.21);
}

.panel_menu li svg{
	width: 15px;
	stroke:rgba(247, 247, 248, 0.31);
	stroke-width: 2px;
	fill:rgba(247, 247, 248, 0.31)
}

.panel_menu li a{
	font-size: 15px;
	color: rgba(247, 247, 248, 0.51);
}

.panel .version{
	position: absolute;
	bottom: 15px;
	color: rgba(247, 247, 248, 0.51);;
	font-size: 12px;
	text-align: center;
	left: 0;
	right: 0;
}
</style>