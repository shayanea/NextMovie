<template>
    <f7-page class="single">
        <loading :show="showLoading"></loading>
        <div>
            <div class="header" v-lazy:background-image="backdropUrl">
                <f7-link back class="back_link">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;" xml:space="preserve">
                        <path style="fill: rgb(255, 255, 255);" d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554  c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587  c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"></path>
                    </svg>
                </f7-link>
                <f7-link class="share_icon" @click="Share">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 58.999 58.999" style="enable-background:new 0 0 58.999 58.999;" xml:space="preserve">
                        <path d="M19.479,12.019c0.256,0,0.512-0.098,0.707-0.293l8.313-8.313v35.586c0,0.553,0.447,1,1,1s1-0.447,1-1V3.413l8.272,8.272   c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414l-9.978-9.978c-0.092-0.093-0.203-0.166-0.327-0.217   c-0.244-0.101-0.519-0.101-0.764,0c-0.123,0.051-0.234,0.125-0.326,0.217L18.772,10.312c-0.391,0.391-0.391,1.023,0,1.414   C18.967,11.922,19.223,12.019,19.479,12.019z" style="fill: rgb(255, 255, 255);"></path>
                        <path d="M36.499,15.999c-0.553,0-1,0.447-1,1s0.447,1,1,1h13v39h-40v-39h13c0.553,0,1-0.447,1-1s-0.447-1-1-1h-15v43h44v-43H36.499   z" style="fill: rgb(255, 255, 255);"></path>
                    </svg>
                </f7-link>
                <figure>
                    <img v-lazy="posterUrl" class="movie_img_holder" />
                    <favorite :movie="movie"></favorite>
                </figure>
            </div>
            <div class="movie_info" :class="{loaded_info : !loading}">
                <f7-block-title class="movie_title">
                    {{movie.original_title}}
                    <span class="movie_runtime">{{movie.runtime}} min</span>
                </f7-block-title>
                <f7-block class="genre_list">
                    <div style="display:inline-block" v-for="(item, index) in GetGenre" :key="index">
                        <p>{{item.name}}</p>
                        <span>,</span>
                    </div>
                </f7-block>
                <div class="rate">
                    <star :rate="movie.vote_average"></star>
                    <span>{{movie.vote_average}}</span> / 10
                </div>
                <f7-block class="movie_description">
                    {{movie.overview}}
                </f7-block>
                <p class="similar_title">Trailer</p>
                <f7-block>
                    <figure class="youtube_img" @click="OpenYoutube">
                        <img v-lazy="VideoPath" width="100%" height="auto"/>
                    </figure>
                </f7-block>
            </div>
            <p class="similar_title">Similar Movies</p>
            <f7-swiper class="movie_list similar_movie" v-if="SimilarLaoded" :params="options">
                <card v-for="(movie, index) of similar" :key="index" :id="movie.id" :genres="movie.genre_ids[0]" :lang="movie.original_language" :title="movie.title" :poster="movie.poster_path"></card>
            </f7-swiper>
        </div>
    </f7-page>
</template>

<script>
import Loading from '../component/loading'
import State from '../store.js'
import Genres from '../genres.js'
import Star from '../component/star'
import Favorite from '../component/favoriteButton'
import Card from '../component/card'
import favoriteButtonVue from '../component/favoriteButton.vue';

export default {
    name: 'single',
    data() {
        return {
            id: State['single_movie_id'],
            movie: {},
            similar: '',
            list: Genres,
            poster:'',
            background:'',
            video:'',
            loading: true,
            SimilarLaoded: false,
            showLoading: false,
            options:{speed:500, slidesPerView: 2.5, spaceBetween: 15, freeModeSticky: true}
        }
    },
    components: {
        'star': Star,
        'favorite': Favorite,
        'card': Card,
        'loading': Loading
    },
    created() {
        console.log(this.id)
        let device = Framework7.prototype.device;
        device.iphone ? this.options.slidesPerView = 2.5 : this.options.slidesPerView = 5.5
        return this.GetMovieInfo(),
            this.GetVideo(),
            this.GetSimilar(),
            window.f7.initImagesLazyLoad('.page');
    },
    computed: {
        posterUrl() {
            if(this.poster !== ''){
                return `http://image.tmdb.org/t/p/w185//${this.poster}`;
            }
        },
        backdropUrl() {
            if( this.background !== ""){
                return `http://image.tmdb.org/t/p/w500//${this.background}`;
            }
        },
        GetGenre() {
            // return this.movie.genres.slice(0, 3);
        },
        VideoPath() {
            return `https://img.youtube.com/vi/${this.video.key}/0.jpg`;
        }
    },
    methods : {
        OpenYoutube : function () {
            return window.open(encodeURI(`https://www.youtube.com/watch?v=${this.video.key}`), '_system')
        },
        Share :  function (){
            let options = {
                message: 'Watch ' + this.movie.original_title + ' Trailer', 
                subject: 'NextMovie app', 
                files: ['', ''],
                url: `https://www.youtube.com/watch?v=${this.video.key}`,
                chooserTitle: 'Share with friends' 
            }
            window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
        },
        GetMovieInfo : function () {
            this.$http.get(`https://api.themoviedb.org/3/movie/' + this.id + '?api_key=${this.key}&language=en-US`).then(response => {
                this.movie = response.body;
                this.poster = response.body.poster_path;
                this.background = response.body.backdrop_path;
                this.showLoading = false;
            }).catch(err => {
                console.log(err);
            })
        },
        GetSimilar : function () {
            this.$http.get(`https://api.themoviedb.org/3/movie/' + this.id + '/similar?api_key=${this.key}&language=en-US`).then(response => {
                this.similar = response.body.results;
                this.SimilarLaoded = true;
            }).catch(err => {
                console.log(err);
            })
        },
        GetVideo : function () {
            this.$http.get(`https://api.themoviedb.org/3/movie/' + this.id + '/videos?api_key=${this.key}&language=en-US`).then(response => {
                return this.video = response.body.results.find(item => {
                    return item.type == "Trailer"
                }),
                this.loading = false;
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style>
.single {
  background-color: #fff;
}

.single #Loader {
  top: 60%;
}

.single #Loader svg {
  fill: #444;
}

.movie_info {
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s ease;
}

.loaded_info {
  visibility: visible;
  opacity: 1;
  transition: all 0.4s ease;
}

.header {
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  position: relative;
  padding-top: 20px;
  background-color: #eee;
}

.header .back_link {
  position: absolute;
  left: 15px;
  top: 40px;
  z-index: 99;
  height: 50px;
  width: 50px;
  text-align: left;
}

.header .share_icon {
  position: absolute;
  right: 15px;
  top: 40px;
  z-index: 99;
  height: 50px;
  width: 50px;
  text-align: right;
}

.header .back_link svg {
  height: 20px;
  width: 20px;
}

.header .share_icon svg {
  height: 25px;
  width: 25px;
}

.header .back_link svg path,
.header .share_icon svg path {
  fill: #fff;
}

.header:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9;
}

.header:before {
  content: "";
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #fff;
  z-index: 10;
  height: 50px;
  clip-path: polygon(0 0, 0 0, 100% 100%, 0 100%);
}

.header figure {
  margin: 0;
  padding: 90px 0 0 0;
  position: relative;
  z-index: 11;
  margin-left: 15px;
}

.header .movie_img_holder {
  width: 129px;
  height: 200px;
  border-radius: 6px;
  box-shadow: 0px 3px 20px 3px rgba(0, 0, 0, 0.3);
  background-color: #eee;
}

.single .movie_title {
  color: #222;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.single .movie_runtime {
  font-size: 12px;
  background: #f54a44;
  color: #fff;
  padding: 0px 7px;
  border-radius: 10px;
}

.single .genre_list {
  margin-bottom: 5px;
}

.single .genre_list p,
.single .genre_list span {
  color: #ccc;
  font-size: 12px;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
}

.single .genre_list span {
  margin-right: 3px;
}

.single .genre_list div:last-child span {
  display: none;
}

.single .rate {
  font-size: 13px;
  color: #999;
  padding-left: 15px;
  margin-bottom: 5px;
}

.single .rate span {
  font-size: 1.8em;
  color: #f54a44;
}

.single .movie_description {
  color: #999;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 15px;
}

.single .movie_website {
  color: #444;
  font-size: 14px;
}

.single .movie_website svg {
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
}

.single .movie_website svg path {
  fill: #444;
}

.single .youtube_img {
  position: relative;
  margin: 0;
  padding: 0;
  border-radius: 6px;
  box-shadow: 0px 3px 20px 3px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.single .youtube_img img {
  display: block;
  background-color: #eee;
}

.single .youtube_img::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 100px;
  width: 100px;
  background-size: 100px;
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0NjEuMDAxIDQ2MS4wMDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ2MS4wMDEgNDYxLjAwMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiNGNjFDMEQ7IiBkPSJNMzY1LjI1Nyw2Ny4zOTNIOTUuNzQ0QzQyLjg2Niw2Ny4zOTMsMCwxMTAuMjU5LDAsMTYzLjEzN3YxMzQuNzI4ICBjMCw1Mi44NzgsNDIuODY2LDk1Ljc0NCw5NS43NDQsOTUuNzQ0aDI2OS41MTNjNTIuODc4LDAsOTUuNzQ0LTQyLjg2Niw5NS43NDQtOTUuNzQ0VjE2My4xMzcgIEM0NjEuMDAxLDExMC4yNTksNDE4LjEzNSw2Ny4zOTMsMzY1LjI1Nyw2Ny4zOTN6IE0zMDAuNTA2LDIzNy4wNTZsLTEyNi4wNiw2MC4xMjNjLTMuMzU5LDEuNjAyLTcuMjM5LTAuODQ3LTcuMjM5LTQuNTY4VjE2OC42MDcgIGMwLTMuNzc0LDMuOTgyLTYuMjIsNy4zNDgtNC41MTRsMTI2LjA2LDYzLjg4MUMzMDQuMzYzLDIyOS44NzMsMzA0LjI5OCwyMzUuMjQ4LDMwMC41MDYsMjM3LjA1NnoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}

.single .youtube_img::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 70px;
  width: 70px;
  background: #fff;
}

.single .similar_title {
  color: #222;
  padding-left: 15px;
  font-size: 1.2em;
}
</style>