const data = {
    test: 'Привіт',
    socials:[
        {
            name: 'Google',
            image: 'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1'
        },
        {
            name: 'Youtube',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png'
        },
        {
            name: 'TikTok',
            image: 'https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/13fefb5b6fc913bce285cf4ee6e0611d'
        },
        {
            name: 'Instagram',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg'
        },
        {
            name: 'Facebook',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png'
        }
    ],
    phones: []
}

const SocialsComponent = {
    props: ['social'],
    template: `<div class="card" style="width: 200px;
    padding: 10 px; margin: 10px;">
        <h2 class="text-center">{{social.name}}</h2>
        <img v-bind:src="social.image"
        style='width:100px; height: 100px; margin:0 auto;'>
    </div>`
}
const PhoneComponent = {
    props: ['phone'],
    template: `<div class="card" style="width: 18rem;">
    <img 
                v-bind:src="phone.img" 
                class="card-img-top" 
                alt="..."
                style="max-height: 300px; width: fit-content;margin: 0 auto;">
            <div class="card-body">
                <h5 class="card-title">{{phone.name}}</h5>
                <p class="card-text">{{phone.opus}}</p>
                <p class="d-flex justify-content-between">
                  <span>Price:</span>
                  <span>{{phone.price}} грн.</span>
                </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>`
    
}


const app = {
    data(){
        return data 
    },
    methods: {

    },
    components: {
        SocialsComponent,PhoneComponent
    },
    mounted(){
        db.collection('tovars').get().then(res => {
            res.forEach(docum => {
                let phone = docum.data();
                phone.id = docum.id;
                this.phones.push(phone)
            })
        })
    }
}

Vue.createApp(app).mount('#app');