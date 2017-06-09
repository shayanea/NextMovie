<template>
	<form class="searchbar searchbar-active" @submit.prevent="GetSearch">
		<div class="searchbar-input">
			<input id="SearchInput" placeholder="Search in Movies" type="search" v-model="search">
			<a href="#" class="searchbar-clear"></a>
		</div>
	</form>
</template>


<script>
export default {
	name:'search',
	data () {
		return {
			search:''
		}
	},
	methods: {
		GetSearch : function () {
			document.getElementById("SearchInput").blur();
			this.$emit('search', this.search);
			this.search = '';
			console.log('clear search')
		}
	}
}
</script>
