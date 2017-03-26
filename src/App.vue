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
                      <router-link to="/signup">Реєстрація</router-link>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  <router-link to="/category">Редактор</router-link>
  <div class="container">
      <div class="row">
          <div class="col-md-10 col-md-offset-1">
              <router-view></router-view>
          </div>
      </div>
  </div>
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
<style media="screen">
    body {
        background: url('./assets/paper_3.png');
    }
</style>
