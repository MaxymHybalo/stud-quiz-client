<template>
    <div id="app">
  <nav class='navbar navbar-default'>
      <div class="container-fluid">
          <div class='navbar-header'>
              <router-link to="/" class="navbar-brand">StudQuiz</router-link>
          </div>
          <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                  <li>
                      <router-link to="/login">Ввійти</router-link>
                  </li>
                  <li>
                      <router-link to="/signup">Зареєструватися</router-link>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  <p>After navbar view</p>
  <button type="button" @click='log' name="button"></button>
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'app',
  data(){
      return {
          msg: 'Test message'
      }
  },

  methods:{
      log(){
         console.log(this.$store.state.ip );
      }
  }
}
</script>
