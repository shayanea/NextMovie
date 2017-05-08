<template>
	<!-- App -->
	<div id="app">
	
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
	
		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" :swipeBackPage="true" main>
				<!-- Pages -->
				<f7-pages>
					<f7-page class="main_page">
						<f7-block-title class="main_title">
							Next Movies
							<filterbtn></filterbtn>
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
import FilterBtn from './component/filter'

export default {
	name: 'main',
	data() {
		return {

		}
	},
	components: {
		'list': List,
		'filterbtn': FilterBtn
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
</style>