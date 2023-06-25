document.addEventListener('DOMContentLoaded', async function(){
    let error = await axios.get("templates/404.html");
    let home = await axios.get("templates/home.html");
    
    const info = {
        test: 'Перевірка',
        currentPath: window.location.hash,
        phones:[]
    }

    const phone = {
        template:phone.data,
        methods: {
            getTovars(){
                db.collection('tovars').get().then(res =>{
                    res.forEach(docum => {
                        let phone = docum.data();
                        phone.id = docum.id;


                    this.$root.phones.push(phone)
                })
            })
        }
    }
    }
    const Home = {
        template: home.data
    };

    const Error = {
        template: error.data
    };

    const routes = {
        '/': Home,
        '/home': Home,
        '/not-found': Error
    }

    const aplication = {
        data(){
            return info;
        },
        methods:{

        },
        components: { },
                    computed: {
                        currentView() {
                            return routes[this.currentPath.slice(1) || '/'] || Error
                        }
                    },
                    mounted() {
                        window.addEventListener('hashchange', () => {
                            this.currentPath = window.location.hash
                        })
                    }
    }
    Vue.createApp(aplication).mount('#FIRST_SPA')
})