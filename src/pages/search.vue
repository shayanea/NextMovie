<template>
    <f7-page class="main_page">
        <f7-block-title class="main_title">
            Next Movies
            <f7-link back class="back_link">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;" xml:space="preserve">
                    <path style="fill: rgb(255, 255, 255);" d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554  c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587  c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"></path>
                </svg>
            </f7-link>
        </f7-block-title>
        <f7-block-title>
            {{search}}
        </f7-block-title>
        <loader :show="loading"></loader>
        <f7-grid v-if="!loading" class="movie_list">
            <card v-for="(movie, index) of list" :id="movie.id" :genres="movie.genre_ids[0]" :lang="movie.original_language" :title="movie.title" :poster="movie.poster_path"></card>
        </f7-grid>
    </f7-page>
</template>

<script>
import State from '../store.js'
import Card from '../component/gridcard'
import Loader from '../component/loader'

export default {
    name:'searchlist',
    data () {
        return {
            search:State['search'],
            list:'',
            loading:''
        }
    },
    components: {
        'card':Card,
        'loader': Loader
    },
    created() {
        return this.Search(),
        this.list = State[this.search];
    },
    methods: {
        Search : function () {
            this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=fcc3e3e91b7cc38185ef902ca797ee11&language=en-US&region=US&page=1&query=' + this.search).then(response => {
                this.list= response.body.results;
                this.loading = false;
            }, response => {
                console.log(response);
            });
        }
    }
}
</script>

<style>
.main_page .back_link{
    position: absolute;
    left: 0;
}

.main_page .back_link svg{
    height: 20px;
    width: 20px;
}
</style>

