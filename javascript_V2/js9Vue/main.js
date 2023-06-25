const test = {
    text: "Привіт, в'ю працює",
    clicks: 0,
    users: [],
    articles: []
}

const FirstApp = {
    data(){
        return test
    },
    methods:{
        clicksFarm(){
            this.users++
        }
    },
    mounted(){
        db.collection('usersNew').get()
        .then((res) => {
         res.forEach((doc) => {

        this.users.push(doc.data());
        });
        })

        db.collection('articles').get()
        .then((res) => {
            res.forEach((doc) => {
   
           this.articles.push(doc.data());
           });
           })

}

}

Vue.createApp(FirstApp).mount('#vue')