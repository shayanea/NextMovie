<template>
    <div>
        <search :class="{'show_search': searchstatus}" @search="onSearch"></search>
        <loader :show="loading"></loader>
        <f7-block-title v-if="!loading">
            Popular Movies
            <span class="more_btn" @click="FullContent('popular')">More</span>
        </f7-block-title>
        <f7-swiper class="movie_list" id="search-list" v-if="!loading" :params="options">
            <card v-for="(movie, index) of Popular" :id="movie.id" :genres="movie.genre_ids[0]" :lang="movie.original_language" :title="movie.title" :poster="movie.poster_path"></card>
        </f7-swiper>
        <f7-block-title v-if="!loading">
            Upcoming Movies
            <span class="more_btn" @click="FullContent('upcoming')">More</span>
        </f7-block-title>
        <f7-swiper class="movie_list" v-if="!loading" :params="options">
            <card v-for="(movie, index) of Upcoming" :id="movie.id" :genres="movie.genre_ids[0]" :lang="movie.original_language" :title="movie.title" :poster="movie.poster_path"></card>
        </f7-swiper>
    </div>
</template>

<script>
import Card from './card'
import Loader from './loading'
import State from '../store.js'
import Search from './search'

export default {
    name: 'list',
    props:{
        searchstatus:{
            default:false
        }
    },
    data() {
        return {
            Popular: [],
            Upcoming: [],
            loading: true,
            state: State,
            options:{speed:500, slidesPerView: 2.5, spaceBetween: 15, freeMode: true}
        }
    },
    components: {
        'card': Card,
        'loader': Loader,
        'search': Search
    },
    created() {
        let device = Framework7.prototype.device;
        if(device.iphone){
            this.options.slidesPerView = 2.5;
        }else if(device.ipad){
            this.options.slidesPerView = 5.5;
        }
        if(typeof localStorage.getItem('LastFetch') !== "undefined"){
            if(new Date().setHours(0,0,0,0) == localStorage.getItem('LastFetch')){
                return this.GetDataFromLocalDb();
            }else{
                return this.GetPopularMovies(),
                this.GetUpcomingMoives();
            }
        }else{
            return this.GetPopularMovies(),
            this.GetUpcomingMoives();
        }
    },
    methods : {
        GetPopularMovies : function () {
            this.$http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&region=US`).then(response => {
                this.Popular = response.body.results.slice(0, 8);
                this.state['popular'] = response.body.results;
                localStorage.setItem('Popular',JSON.stringify(response.body.results));
                localStorage.setItem('LastFetch',new Date().setHours(0,0,0,0));
            }, response => {
                console.log(response);
            })
        },
        GetUpcomingMoives : function () {
            this.$http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.key}&region=US`).then(response => {
                this.Upcoming = response.body.results.slice(0, 8);
                this.state['upcoming'] = response.body.results;
                localStorage.setItem('Upcoming',JSON.stringify(response.body.results));
                this.loading = false;
            }, response => {
                console.log(response);
            });
        },
        GetDataFromLocalDb : function () {
            this.Popular = JSON.parse(localStorage.getItem('Popular')).slice(0, 8);
            this.state['popular'] = JSON.parse(localStorage.getItem('Popular'));
            this.Upcoming = JSON.parse(localStorage.getItem('Upcoming')).slice(0, 8);
            this.state['upcoming'] = JSON.parse(localStorage.getItem('Upcoming'));
            
            let self = this;
            setTimeout(function(){
                self.loading = false;
            },1700);
        },
        FullContent : function (data) {
            return this.$f7.mainView.router.load({url: '/fullpage/'}),
            State['query'] = data;
        },
        onSearch : function (item){
            return this.$f7.mainView.router.load({url: '/search/'}),
            State['search'] = item;
        }
    }
}
</script>

<style>
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
    height: 0;
    opacity: 0;
    transition: height .2s ease,opacity .2s ease;
}

.show_search{
    opacity: 1;
    height: 44px;
    transition: height .2s ease,opacity .2s ease;
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