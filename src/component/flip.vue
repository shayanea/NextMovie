<template>
    <f7-swiper-slide>
        <f7-link href="" @click="OpenSingleCard">
            <img v-lazy="posterUrl" class="movie_img_holder">
            <div class="movie_title">{{title}}</div>
            <div class="movie_lang">{{lang}}</div>
            <div class="movie_lang"> - {{FindGenres.name}}</div>
        </f7-link>
    </f7-swiper-slide>
</template>

<script>
import Genres from '../genres.js'

export default {
    name:'flipcard',
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true,
            default: ''
        },
        lang: {
            required: true,
            default: ''
        },
        genres: {
            required: true,
            default: ''
        },
        poster: {
            type: String,
            default: 'http://via.placeholder.com/120x200?text=NextMovie'
        }
    },
    data () {
        return {
            list: Genres
        }
    },
    methods: {
        OpenSingleCard: function () {
            if(this.$f7.mainView.activePage.url == "/single/"){
                return this.$f7.mainView.router.reloadPage('/single/'),
                State['single_movie_id'] = this.id;
            }else{
                return this.$f7.mainView.router.load({url: '/single/'}),
                State['single_movie_id'] = this.id;
            }
        },
        imgLoad :function(e) {
            console.log(e);
            console.log('loaded');
        }
    },
    computed: {
        posterUrl() {
            if(typeof this.poster !== "undefined" || this.poster !== null){
                return `http://image.tmdb.org/t/p/w300//${this.poster}`;
            }
        },
        FindGenres() {
            return this.list.find(item => {
                if(item.id == this.genres && typeof item !== "undefined") 
                    return item
            });
        }
    }
}
</script>

<style>

</style>
