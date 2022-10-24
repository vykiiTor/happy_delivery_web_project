<template>
<div class="all">
        <h3>Welcome to Happy Delivery</h3>

  <header class="search">
    <input v-model="tosearch" type="text" class="srinput" placeholder="Search here" ><br>
    <button class="search" style="margin-left: 50%; margin-top: 2%">Search</button>
  </header>
  <div  class="flex-container flex-start">
    <article v-for="article in articles" :key="article.id" class="card">
      <div class="article-img">
        <div :style="{ backgroundImage: 'url(' + article.image + ')' }" >
        </div>
      </div>
      <div class="article-content">
        <div class="article-title">
          <h2>{{ article.tittle }} - {{ article.author}} </h2>
         
        </div>
        <p>{{ article.description }}</p>
      </div>
     <div class="btn">
       <button @click="addtocart(article)">Add to cart </button>
    </div>
    </article>
   
   
  </div>
</div>
</template>

<script>
//const AddArticle = window.httpVueLoader('./components/AddArticle.vue')


module.exports = {
  components: {
    //AddArticle
  },
  props: {
    articles: { type: Array, default: [] },
    cart: { type: Array, default: [] },

      },
  data () {
    return {
      tocart: {
              tittle: '',
              description: '',
              author: '',
              image: '',
      },
      tosearch: ''
    }
  },
  methods: {
     async addtocart (article) {
       this.tittle= article.tittle, this.description= article.description, this.author= article.author, this.image= article.image,
       console.log(this.tittle),
       console.log(article.tittle),
        await axios.post('/api/bookscart', {
          tittle: this.tittle,
          description: this.description,
          author: this.author,
          image: this.image
        })
      },
  }
}
</script>

<style scoped>
h3{
    text-align: left;
    margin-left: 10%;
    margin-top: 5%;
    margin-bottom: 6%;
    text-shadow: 2px 2px #ffffff;
    font-size: 300%;
    backdrop-filter: blur(300px); 
   background-color: rgba(59, 10, 10, 0.2); 
   padding: 1rem 2rem;
   margin-right: 55%;
   border: 2px ;
  padding: 10px;
  border-radius: 50px 20px;
  padding-left: 2%;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      color: #2c3e50;

}

.srinput{
  background: transparent;
    border: none;
    border-bottom: solid;
    outline: none;
    width: 40%;
    font-size: 110%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
.all{
      background: url('https://content3.jdmagicbox.com/comp/surat/c3/0261px261.x261.150618105413.p7c3/catalogue/steam-restaurant-piplod-surat-north-indian-restaurants-1nk8jvr.jpg') no-repeat center center;;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
      display: table;
      margin-top: -27px;
      margin-left: -8px;
      

}
article {
  display: flex;
}

.search{
  text-align: center;
  margin-top: 5%;
  
}

.article-img {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article-img div {
  width: 100px;
  height: 100px;
  background-size: cover;
}

.article-content {
  flex: 3;
  display: flex;
  flex-direction: column;
}

.article-title {
  display: flex;
  justify-content: space-between;
}

textarea {
  width: 100%;
}
.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 5% 5% 5% 5%;
  
}

.btn {
  display: flex;
  flex-direction: column;
}

.flex-start { 
  justify-content: flex-start; 
}

button{
  display: block;
  text-align: center;
}
.card {
   padding: 20px;
   backdrop-filter: blur(6px); 
   background-color: rgba(255,255,255,0.2); 
   
}
p{
    display: block;
    text-align: center;
}
h2{  display: block;
text-align: center;
}
</style>
