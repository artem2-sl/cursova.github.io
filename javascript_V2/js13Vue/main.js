document.addEventListener('DOMContentLoaded', async function(){
    let card_phone= await axios.get("templates/card_phone.html")
    console.log(card_phone.data)


    const infa = {
        test: 'Провірка',
        tovars: []
    }

    const CardProduct = {
        props: ['product'],
        template: card_phone.data
        
    }

    const dodatok = {
        data(){
            return infa
    },
    methods: {
        getTovars(){
            db.collection('tovars').get().then(res => {
                res.forEach(docum => {
                    let phone = docum.data();
                    phone.id = docum.id;
                    this.tovars.push(phone)
                })
            })
        }
            
        
    },
    components:{
        'cp':CardProduct
    },
    mounted(){
        this.getTovars()
    }
}
    Vue.createApp(dodatok).mount('#products')

})