<template>
<div class="all">
            <h3>MyBasket</h3>

  <div class="flex-container flex-start">
    <item v-for="item in cart" :key="item.id" class="card">
      <div class="article-img">
        <div :style="{ backgroundImage: 'url(' + item.image + ')' }">
        </div>
      </div>
      <div class="article-content" >
        <div class="article-title">
          <h2>{{ item.tittle }} - {{ item.author}} </h2>
          
           <p>{{ item.description }}</p>
          
        </div>
       
      </div>
       <div>
          <button v-on:click="deleteitem(item.book_id)">Remove item</button>
          </div>
      
    </item>
   
   
  </div></div>
</template>



<script>

module.exports = {
  components: {
  },
  props: {
    cart: { type: Array, default: [] },
  },
  data () {
    return {
      showForm: false,
      
    }
  },
  methods: {
   
      deleteitem (index){
        this.$emit('delete-item', index)
        this.cart.splice(index, 1)
        location.reload()
    }
    
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
   margin-right: 70%;
   border: 2px ;
  padding: 10px;
  border-radius: 50px 20px;
  padding-left: 2%;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      color: #2c3e50;
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
