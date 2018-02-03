<template>
    <div class="favorite" @click="AddToFavorite"></div>
</template>

<script>
export default {
    name: 'favorite',
    props: {
        movie: {
            required: true,
            default: ''
        }
    },
    data() {
        return {

        }
    },
    methods : {
        AddToFavorite : function(){
            let Items = JSON.parse(localStorage.getItem('favorites'));
            Items.push({
                id:this.movie.id,
                title:this.movie.title,
                lang:this.movie.original_language,
                genres:[this.movie.genres[0].id],
                poster:this.movie.poster_path
            });
            localStorage.setItem('favorites',JSON.stringify(Items));
            this.$f7.addNotification({
                title: 'Notification',
                message: `${this.movie.original_title} added to your favorite list.`,
                closeOnClick:true
            });
        }
    }
}
</script>

<style>
.favorite {
    width: 50px;
    height: 50px;
    background-color: #F54A44;
    text-align: center;
    line-height: 4;
    border-radius: 50%;
    box-shadow: 0px 3px 20px 3px rgba(0, 0, 0, 0.3);
    position: absolute;
    right: 10px;
    bottom: -8%;
    background-position: center 10px;
    background-repeat: no-repeat;
    background-size: 25px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5Ljk0IDQ5Ljk0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OS45NCA0OS45NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyNTZweCI+CjxwYXRoIGQ9Ik00OC44NTYsMjIuNzMxYzAuOTgzLTAuOTU4LDEuMzMtMi4zNjQsMC45MDYtMy42NzFjLTAuNDI1LTEuMzA3LTEuNTMyLTIuMjQtMi44OTItMi40MzhsLTEyLjA5Mi0xLjc1NyAgYy0wLjUxNS0wLjA3NS0wLjk2LTAuMzk4LTEuMTktMC44NjVMMjguMTgyLDMuMDQzYy0wLjYwNy0xLjIzMS0xLjgzOS0xLjk5Ni0zLjIxMi0xLjk5NmMtMS4zNzIsMC0yLjYwNCwwLjc2NS0zLjIxMSwxLjk5NiAgTDE2LjM1MiwxNGMtMC4yMywwLjQ2Ny0wLjY3NiwwLjc5LTEuMTkxLDAuODY1TDMuMDY5LDE2LjYyM0MxLjcxLDE2LjgyLDAuNjAzLDE3Ljc1MywwLjE3OCwxOS4wNiAgYy0wLjQyNCwxLjMwNy0wLjA3NywyLjcxMywwLjkwNiwzLjY3MWw4Ljc0OSw4LjUyOGMwLjM3MywwLjM2NCwwLjU0NCwwLjg4OCwwLjQ1NiwxLjRMOC4yMjQsNDQuNzAyICBjLTAuMjMyLDEuMzUzLDAuMzEzLDIuNjk0LDEuNDI0LDMuNTAyYzEuMTEsMC44MDksMi41NTUsMC45MTQsMy43NzIsMC4yNzNsMTAuODE0LTUuNjg2YzAuNDYxLTAuMjQyLDEuMDExLTAuMjQyLDEuNDcyLDAgIGwxMC44MTUsNS42ODZjMC41MjgsMC4yNzgsMS4xLDAuNDE1LDEuNjY5LDAuNDE1YzAuNzM5LDAsMS40NzUtMC4yMzEsMi4xMDMtMC42ODhjMS4xMTEtMC44MDgsMS42NTYtMi4xNDksMS40MjQtMy41MDIgIEwzOS42NTEsMzIuNjZjLTAuMDg4LTAuNTEzLDAuMDgzLTEuMDM2LDAuNDU2LTEuNEw0OC44NTYsMjIuNzMxeiBNMzcuNjgxLDMyLjk5OGwyLjA2NSwxMi4wNDJjMC4xMDQsMC42MDYtMC4xMzEsMS4xODUtMC42MjksMS41NDcgIGMtMC40OTksMC4zNjEtMS4xMiwwLjQwNS0xLjY2NSwwLjEyMWwtMTAuODE1LTUuNjg3Yy0wLjUyMS0wLjI3My0xLjA5NS0wLjQxMS0xLjY2Ny0wLjQxMXMtMS4xNDUsMC4xMzgtMS42NjcsMC40MTJsLTEwLjgxMyw1LjY4NiAgYy0wLjU0NywwLjI4NC0xLjE2OCwwLjI0LTEuNjY2LTAuMTIxYy0wLjQ5OC0wLjM2Mi0wLjczMi0wLjk0LTAuNjI5LTEuNTQ3bDIuMDY1LTEyLjA0MmMwLjE5OS0xLjE2Mi0wLjE4Ni0yLjM0OC0xLjAzLTMuMTcgIEwyLjQ4LDIxLjI5OWMtMC40NDEtMC40My0wLjU5MS0xLjAzNi0wLjQtMS42MjFjMC4xOS0wLjU4NiwwLjY2Ny0wLjk4OCwxLjI3Ni0xLjA3N2wxMi4wOTEtMS43NTcgIGMxLjE2Ny0wLjE2OSwyLjE3Ni0wLjkwMSwyLjY5Ny0xLjk1OWw1LjQwNy0xMC45NTdjMC4yNzItMC41NTIsMC44MDMtMC44ODEsMS40MTgtMC44ODFjMC42MTYsMCwxLjE0NiwwLjMyOSwxLjQxOSwwLjg4MSAgbDUuNDA3LDEwLjk1N2MwLjUyMSwxLjA1OCwxLjUyOSwxLjc5LDIuNjk2LDEuOTU5bDEyLjA5MiwxLjc1N2MwLjYwOSwwLjA4OSwxLjA4NiwwLjQ5MSwxLjI3NiwxLjA3NyAgYzAuMTksMC41ODUsMC4wNDEsMS4xOTEtMC40LDEuNjIxbC04Ljc0OSw4LjUyOEMzNy44NjYsMzAuNjUsMzcuNDgxLDMxLjgzNSwzNy42ODEsMzIuOTk4eiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}
</style>