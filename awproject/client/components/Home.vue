<template>
<div class="all">
  <div >
       <button  @click="showForm = !showForm" style="margin-left: 45%; margin-top: 6%">Add an article   </button>
        <add-article :show="showForm" @create-article="addArticle" ></add-article>
    </div>
  <div class="flex-container flex-start">
    <article v-for="article in articles" :key="article.id" class="card">
      <div class="article-img">
        <div :style="{ backgroundImage: 'url(' + article.image + ')' }">
        </div>
      </div>
      <div class="article-content" >
        <div class="article-title">
          <h2>{{ article.tittle }} - {{ article.author}} </h2>
          
           <p>{{ article.description }}</p>
          
        </div>
       
      </div>
      <div>
          <button v-on:click="deletebook(article.book_id)">Delete</button>
          </div>
      
    </article>
    
   
  </div>
</div>
</template>

<script>
const AddArticle = window.httpVueLoader('./components/AddArticle.vue')

module.exports = {
  components: {
    AddArticle
  },
  props: {
    articles: { type: Array, default: [] },
  },
  data () {
    return {
      showForm: false,
      
    }
  },
  methods: {
    addArticle (article) {
      this.$emit('add-article', article)
    },
    deletebook (index){
      this.$emit('delete-book', index)
      this.articles.splice(index, 1)
      location.reload()
    }

    
  }
}
</script>

<style scoped>

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
