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
import State from '../store.js'

export default {
    name: 'card',
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
    data() {
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
        }
    },
    computed: {
        posterUrl() {
            if(typeof this.poster !== "undefined" || this.poster !== null){
                return `http://image.tmdb.org/t/p/w185//${this.poster}`;
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
.movie_list a {
    padding: 0 20px 0 0;
}

.movie_list .movie_img_holder {
    width: 119px;
    height: 190px;
    border-radius: 6px;
    box-shadow: 0px 3px 20px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 5px;
    background-color: #eee;
}

.movie_list .movie_title {
    font-size: 14px;
    color: #fff;
    display: inline-block;
    width: 130px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.similar_movie .movie_title {
    color: #777;
}

.movie_list .movie_lang {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
    text-transform: uppercase;
    display: inline-block;
}

.similar_movie .movie_lang {
    display: none;
}
</style>