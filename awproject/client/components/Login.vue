<template>

        <div id="app" class="all">
          

   <div class="login-page" >
     
      <h2>Welcome to Happy Delivery</h2>
      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div v-if="!registerActive && !registerAdmin && !adminuser" class="card" v-bind:class="{ error: emptyFields }">
                  <h1>Sign In</h1>
                  <p style="margin-bottom: 10%">Please use your email address</p>
                  
                  <form class="form-group">
                     <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" pattern=".+@efrei\.net" required><br>
                     <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required><br>
                     <input type="submit" class="btn btn-primary" @click="doLogin">
                    <p><a href="#" @click="registerAdmin = !registerAdmin, emptyFields = false, adminuser= !adminuser">Sign in as admin</a></p>
                     <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a>
                     </p>
                     <p><a href="#">Forgot your password?</a></p>
                  </form>
               </div>

               <div v-if="!registerActive && registerAdmin && adminuser" class="card" v-bind:class="{ error: emptyFields }">
                  <h1>Sign In</h1>
                  <p style="margin-bottom: 10%">Please use your @intervenants.efrei admin email address</p>
                  <form class="form-group">
                     <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" pattern=".+@intervenants\.efrei\.net" required><br>
                     <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required><br>
                     <input type="submit" class="btn btn-primary" @click="admindoLogin">
                    <p><a href="#" @click="registerAdmin = !registerAdmin, emptyFields = false, adminuser = !adminuser">Sign in as student</a></p>
                     <p><a href="#">Forgot your password?</a></p>
                  </form>
               </div>

               <div v-if="registerActive" class="card" v-bind:class="{ error: emptyFields }">
                  <h1>Sign Up</h1>
                  <p style="margin-bottom: 10%">Create MyEbook student account !</p>
                  <form class="form-group">
                     <input v-model="emailReg" type="email" class="form-control" placeholder="Email" pattern=".+@efrei\.net" required><br>
                     <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required><br>
                     <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required><br>
                     <input type="submit" class="btn btn-primary" @click="doRegister">
                     <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a>
                     </p>
                     <p><a>Notice: You can't create an admin account, please contact <a href="mailto: service.informatique@efrei.fr">IT department</a> for more details.</a></p>
                  </form>
               </div>
            </div>
         </div>

      </div>
      
   </div>
            
</div>



</template>





<script>
 const Home = window.httpVueLoader('./components/Home.vue')

module.exports = {

    components: {
        Home
    },

  props: {

    articles: { type: Array, default: [] },

    panier: { type: Object }

  },
   
   data() {
       return{
      adminuser: false,
      registerActive: false,
      registerAdmin: false,
      emailLogin: "",
      passwordLogin: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      profil: "",
      emptyFields: false
   }},
   
   methods: {
       async doLogin() {
         await axios.post('/api/login', {

            emailLogin: this.emailLogin,

            passwordLogin: this.passwordLogin,

            profil: this.adminuser


      }
      )

      this.$router.push('/stdhome')

    },
    
      
      
      async doRegister() {
         await axios.post('/api/user', {
           emailReg: this.emailReg,
           passwordReg: this.passwordReg,
           confirmReg: this.confirmReg,
           
         })
      },

      async admindoLogin() {
         await axios.post('/api/login', {

            emailLogin: this.emailLogin,

            passwordLogin: this.passwordLogin,

            profil: this.adminuser


      }
      )

      this.$router.push('/home')

    }
      
   }};
</script>




<style>
h1{
        font-family: Avenir, Helvetica, Arial, sans-serif;    color: #2c3e50;

}
h2{
    text-align: left;
    margin-left: 10%;
    margin-top: -3%;
    margin-bottom: 6%;
    text-shadow: 2px 2px #ffffff;
    font-size: 300%;
    backdrop-filter: blur(300px); 
   background-color: rgba(255,255,255,0.2); 
   padding: 1rem 2rem;
   margin-right: 55%;
   border: 2px ;
  padding: 10px;
  border-radius: 50px 20px;
  padding-left: 2%;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      color: #2c3e50;

}
p {
   line-height: 1rem;
   font-weight: bold;
    font-family: Avenir, Helvetica, Arial, sans-serif;    color: #2c3e50;

}

.card {
   padding: 20px;
   backdrop-filter: blur(6px); 
   background-color: rgba(255,255,255,0.2); 
   padding: 1rem 2rem;
   margin-left: 35%;
   margin-right: 35%;

}

::placeholder{
    line-height: 1rem;
   font-weight: bold;
   color: black;
}

.form-group input {
      margin-bottom: 20px;
   
}

.form-control{
    background: transparent;
    border: none;
    border-bottom: solid;
    outline: none;
    width: 60%;
    font-size: 110%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}



.login-page {
   text-align: center;
   display: table-cell;
   vertical-align: middle;
   
  
}

.login-page h1{
        margin-bottom: 1.5rem;

}

.error {
   animation-name: errorShake;
   animation-duration: 0.3s;
}

@keyframes errorShake {
   0% {
      transform: translateX(-25px);
   }
   25% {
      transform: translateX(25px);
   }
   50% {
      transform: translateX(-25px);
   }
   75% {
      transform: translateX(25px);
   }
   100% {
      transform: translateX(0);
   }
}

.all{
      background: url('efreicover.png') no-repeat center center;;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
      display: table;
      margin-top: -27px;
      margin-left: -8px;
      

}

.logo{
    width: 100%;
    height: 100%;
}


</style>