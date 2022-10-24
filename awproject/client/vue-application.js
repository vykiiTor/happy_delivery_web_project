const Home = window.httpVueLoader('./components/Home.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const stdhome = window.httpVueLoader('./components/stdHome.vue')
const cart = window.httpVueLoader('./components/Cart.vue')


const routes = [
  { path: '/home', component: Home},
  { path: '/', component: Login },
  { path: '/stdhome', component: stdhome },
  { path: '/cart', component: cart}

]

const router = new VueRouter({
  routes
})


var app = new Vue({
  router,
  el: '#app',
  data: {
    articles: [],
    cart: []
    
  },
  async mounted () {
    const res = await axios.get('/api/articles')
    this.articles = res.data
    const res2 = await axios.get('/api/cart')
    this.cart = res2.data
  },
  methods: {
     
    async addArticle (article) {

      console.log(article)
      console.log({tittle: article.tittle,
        description: article.description,
        author: article.author,
        image: article.image})
      const res = await axios.post('/api/article', {tittle: article.tittle,
      description: article.description,
      author: article.author,
      image: article.image})
      this.articles.push(res.data)
    },

   
    async deletebook(index) {
      await axios.post('/api/delete', {
        id: index,
      })
      this.articles.splice(index, 1)
   },

   async deleteitem(index) {
    await axios.post('/api/deleteitem', {
      id: index,
    })
    this.articles.splice(index, 1)
 },
  },
  
})
