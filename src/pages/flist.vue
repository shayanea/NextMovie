<template>
    <f7-page class="main_page flist_page">
        <f7-block-title class="main_title">
            Next Movies
            <f7-link back class="back_link">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;" xml:space="preserve">
                    <path style="fill: rgb(255, 255, 255);" d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554  c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587  c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"></path>
                </svg>
            </f7-link>
        </f7-block-title>
        <f7-block-title>
          Favorites Movies
        </f7-block-title>
        <f7-grid class="movie_list">
            <card v-for="(movie, index) of list" :key="index" :id="movie.id" :genres="movie.genres[0]" :lang="movie.lang" :title="movie.title" :poster="movie.poster"></card>
        </f7-grid>
    </f7-page>
</template>

<script>
import Card from '../component/gridcard'

export default {
    name:'flist',
    data () {
        return {
            list:null,
        }
    },
    components:{
        'card': Card
    },
    created() {
        this.list = JSON.parse(localStorage.getItem('favorites'));
    },
    computed: {
        posterUrl(pic) {
            if(typeof pic !== "undefined" || pic !== null){
                return `http://image.tmdb.org/t/p/w300//${pic}`;
            }
        }
    },
    methods : {
        RemoveMovie : function(id){
            
        }
    }
}
</script>

<style scoped>
.flist_page .back_link{
    position: absolute;
    left: 0;
    height: 50px;
    width: 50px;
    text-align: left;
}

.flist_page .back_link svg{
    height: 20px;
    width: 20px;
}
</style>
