
new Vue({
    el: '#vue-app',
    data: {
      message: 'Hello Vue.js!',
      bio: 'exited',
      website: 'https://jsfiddle.net/chrisvfritz/50wL7mdz/',
      tag: '<a href="https://jsfiddle.net/chrisvfritz/50wL7mdz/">The link</a>'

    },
    methods:{
        greet: function(time){

            return 'Good '+this.bio+' '+time;

        }
    }
  })