// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/

// Import App Custom Styles
import AppStyles from './css/app.css'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app'

import Http from 'vue-resource'

import VueLazyload from 'vue-lazyload'

import Store from './store'

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

Vue.use(Http);

Vue.use(VueLazyload, {
	preLoad: 1.3,
	attempt: 1
})

Vue.prototype.key = 'fcc3e3e91b7cc38185ef902ca797ee11';

// Init App
new Vue({
	el: '#app',
	template: '<app/>',
	// Init Framework7 by passing parameters here
	framework7: {
		root: '#app',
		/* Uncomment to enable Material theme: */
		// material: true,
		swipePanel: 'left',
		routes: Routes,
	},
	// Register App Component
	components: {
		app: App
	},

	mounted(){
		if(localStorage.getItem('favorites') == null){
			return localStorage.setItem('favorites',JSON.stringify([])),
			Store.flist = [];           
		}
	}
});

document.addEventListener('deviceready', function () {
	StatusBar.styleBlackTranslucent();
});