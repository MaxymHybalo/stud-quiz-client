<template>
    <div id="app">
        <head-bar-component></head-bar-component>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadBarComponent from './components/header/HeadBarComponent.vue'

export default {
  name: 'app',
  components:{
      HeadBarComponent
  }
}
</script>
<style media="screen">
    body {
        background: url('./assets/paper_3.png');
    }
</style>
