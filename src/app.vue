<template>
	<!-- App -->
	<div id="app">
	
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>

		<f7-views>
			<f7-view id="main-view" :swipeBackPage="true" main>
				<!-- Pages -->
				<f7-pages>
					<f7-page class="main_page">
						<f7-block-title class="main_title">
							<div class="search_icon" @click="ShowSearchFrom"></div>
							Next Movies
							<div class="favorite-btn" @click="GoToFavorites"></div>
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

.favorite-btn {
	position: absolute;
    left: 0;
    top: 5px;
	width: 50px;
    height: 50px;
	background-position: top left;
    background-repeat: no-repeat;
    background-size: 20px;
	background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5Ljk0IDQ5Ljk0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OS45NCA0OS45NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxwYXRoIGQ9Ik00OC44NTYsMjIuNzNjMC45ODMtMC45NTgsMS4zMy0yLjM2NCwwLjkwNi0zLjY3MWMtMC40MjUtMS4zMDctMS41MzItMi4yNC0yLjg5Mi0yLjQzOGwtMTIuMDkyLTEuNzU3ICBjLTAuNTE1LTAuMDc1LTAuOTYtMC4zOTgtMS4xOS0wLjg2NUwyOC4xODIsMy4wNDNjLTAuNjA3LTEuMjMxLTEuODM5LTEuOTk2LTMuMjEyLTEuOTk2Yy0xLjM3MiwwLTIuNjA0LDAuNzY1LTMuMjExLDEuOTk2ICBMMTYuMzUyLDE0Yy0wLjIzLDAuNDY3LTAuNjc2LDAuNzktMS4xOTEsMC44NjVMMy4wNjksMTYuNjIyYy0xLjM1OSwwLjE5Ny0yLjQ2NywxLjEzMS0yLjg5MiwyLjQzOCAgYy0wLjQyNCwxLjMwNy0wLjA3NywyLjcxMywwLjkwNiwzLjY3MWw4Ljc0OSw4LjUyOGMwLjM3MywwLjM2NCwwLjU0NCwwLjg4OCwwLjQ1NiwxLjRMOC4yMjQsNDQuNzAxICBjLTAuMTgzLDEuMDYsMC4wOTUsMi4wOTEsMC43ODEsMi45MDRjMS4wNjYsMS4yNjcsMi45MjcsMS42NTMsNC40MTUsMC44NzFsMTAuODE0LTUuNjg2YzAuNDUyLTAuMjM3LDEuMDIxLTAuMjM1LDEuNDcyLDAgIGwxMC44MTUsNS42ODZjMC41MjYsMC4yNzcsMS4wODcsMC40MTcsMS42NjYsMC40MTdjMS4wNTcsMCwyLjA1OS0wLjQ3LDIuNzQ4LTEuMjg4YzAuNjg3LTAuODEzLDAuOTY0LTEuODQ2LDAuNzgxLTIuOTA0ICBsLTIuMDY1LTEyLjA0MmMtMC4wODgtMC41MTMsMC4wODMtMS4wMzYsMC40NTYtMS40TDQ4Ljg1NiwyMi43M3oiIGZpbGw9IiNGRkZGRkYiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}
</style>