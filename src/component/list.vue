<template>
    <div>
        <f7-searchbar cancel-link="" placeholder="Search in Movies" :clear-button="true" @searchbar:search="onSearch"></f7-searchbar>
        <loader :show="loading"></loader>
        <f7-block-title v-if="!loading">
            Popular Movies
            <span class="more_btn" @click="FullContent('popular')">More</span>
        </f7-block-title>
        <f7-swiper class="movie_list" id="search-list" v-if="!loading" :params="{speed:500, slidesPerView: 2.5, spaceBetween: 15, freeModeSticky: true}">
            <card v-for="(movie, index) of Popular" :id="movie.id" :genres="movie.genre_ids[0]" :lang="movie.original_language" :title="movie.title" :poster="movie.poster_path"></card>
        </f7-swiper>
        <f7-block-title v-if="!loading">
            Upcoming Movies
            <span class="more_btn" @click="FullContent('upcoming')">More</span>
        </f7-block-title>
        <f7-swiper class="movie_list" v-if="!loading" :params="{speed:500, slidesPerView: 2.5, spaceBetween: 15}">
            <card v-for="(movie, index) of Upcoming" :id="movie.id" :genres="movie.genre_ids[0]" :lang="movie.original_language" :title="movie.title" :poster="movie.poster_path"></card>
        </f7-swiper>
    </div>
</template>

<script>
import Card from './card'
import Loader from './loader'
import State from '../store.js'

export default {
    name: 'list',
    data() {
        return {
            Popular: [],
            Upcoming: [],
            loading: true,
            state: State
        }
    },
    components: {
        'card': Card,
        'loader': Loader
    },
    created() {
        return this.$http.get('https://api.themoviedb.org/3/movie/popular?api_key=fcc3e3e91b7cc38185ef902ca797ee11').then(response => {
            this.Popular = _.slice(response.body.results, 0, 8);
            this.state['popular'] = response.body.results;
        }, response => {
            console.log(response);
        }),
        this.$http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=fcc3e3e91b7cc38185ef902ca797ee11').then(response => {
            this.Upcoming = _.slice(response.body.results, 0, 8);
            this.state['upcoming'] = response.body.results;
            this.loading = false;
        }, response => {
            console.log(response);
        });
    },
    methods : {
        FullContent : function (data) {
            return this.$f7.mainView.router.load({url: '/fullpage/'}),
            State['query'] = data;
        },
        onSearch : function (query){
            console.log(query);
        }
    }
}
</script>

<style scope>
.movie_list {
    list-style: none;
    margin-bottom: 15px;
}

.swiper-wrapper {
    padding-left: 15px;
    padding-top: 15px;
}

.content-block-title {
    color: #fff;
    margin-bottom: 0;
    text-transform: capitalize;
    line-height: 1.2;
    font-size: 16px;
    margin-top: 25px;
}

.content-block-title .more_btn {
    font-size: 13px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.69);
    float: right;
}

.searchbar {
    background: transparent;
    width: 80%;
    margin: 10px auto;
}

.searchbar:after {
    background-color: transparent;
}

.searchbar input[type=search] {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    color: #fff;
    font-size: 15px;
    background-image: none;
    text-align: left;
}

.searchbar input[type=search]::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.45);
    text-align: center;
}

.searchbar input[type=search]::-moz-placeholder {
    color: rgba(255, 255, 255, 0.45);
    text-align: center;
}

.searchbar input[type=search]:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.45);
    text-align: center;
}

.searchbar input[type=search]:-moz-placeholder {
    color: rgba(255, 255, 255, 0.45);
    text-align: center;
}
</style>