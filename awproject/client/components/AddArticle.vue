<template>
    <form v-show="show" @submit.prevent="addArticle" class="card">
        <h2>Add a new book</h2>
        <input type="text" v-model="newArticle.tittle" placeholder="Title" name="tittle" id="tittle" required>
        <input type="text" v-model="newArticle.description" placeholder="Description" name="description" id="description" required>
        <textarea type="text" v-model="newArticle.author" name="author" id="author" placeholder="Author" required></textarea>
        <input type="text" v-model="newArticle.image" name="image" id="image" placeholder="Link for image">
        <button type="submit">Add</button>
        <button  @click="showForm = !showForm" >Back</button>
    </form>
</template>

<script>

module.exports = {
  props: {
    show: Boolean
  },
  data () {
    return {
        newArticle: {
            tittle: '',
            description: '',
            author: '',
            image: '',
        }
    }
  },
  methods: {
    addArticle () {
      console.log('this.newArticle'  +this.newArticle)
        this.$emit('create-article', this.newArticle)
    },
  }
}
</script>


<style scoped>
.card {
   padding: 20px;
   backdrop-filter: blur(6px); 
   background-color: rgba(255,255,255,0.2); 
   padding: 1rem 2rem;
   margin-left: 35%;
   margin-right: 35%;

}
input{
  margin: 2% 2% 2% 2%;
}

</style>