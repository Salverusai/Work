new Vue({
    el:'#vue-app',
    data:{
        name:'Sai',
        age:24,
        gender:'male',
        website:'https://www.youtube.com/',
        number:'100'
    },
    methods:{
        greet:function(day){
            return 'Good'+ day+ ' '+ this.name;
        }
    }
});
