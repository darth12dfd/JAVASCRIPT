Vue.createApp({
    data(){
        return{
            x: 20,
            y: 30,
            result : 0,
        }
    },
    methods:{
        submitHandler(){
            //e.preventDefault();//도큐먼트 객체 쓰는 거
            this.result= this.x + this.y;//const result = x + y;
        }
    }
}).mount('#calc-app');
