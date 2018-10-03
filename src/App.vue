<template>
  <div class="container">
    <app-header></app-header>    
    <div class="row">
      <div class="col-md-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {

  components: {
    appHeader: Header
  },
  // want to  load our items when the components is created or loaded first time so we call "initStocks"
  created(){
    this.$store.dispatch('initStocks')
  }


};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
li.nav-item.router-link-exact-active.router-link-active {
    border-bottom: 1px solid #42b983;
} 
/* custom transition */
.slide-enter-active{
  animation: slide-in 200ms ease-in forwards;
}
.slide-leave-active{
  animation: slide-out 200ms ease-in forwards;
}
@keyframes slide-in{
  from{
    transform: translateY(-30px);
    opacity: 0;
  }
  to{
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from{
    transform: translateY(0px);
    opacity: 1;
  }
  to{
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
