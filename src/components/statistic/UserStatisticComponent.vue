<template lang="html" id="user-statistic-component">
  <div class="">
      <b>{{$store.getters.user.name}}</b>
      <table class="table table-striped">
          <thead>
              <tr>
                  <th>Тест</th>
                  <th>Предмет</th>
                  <th>Оцінка</th>
                  <th>Дата</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="i in results">
                  <td>{{i.params.questionCase}}</td>
                  <td>{{i.params.name}}</td>
                  <td>{{i.mark}}</td>
                  <td>{{i.dateCaption}}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import { getAuthorizedQuery } from '../../utils/queries.js'
export default {
    data: function(){
        return {
            results: null
        }
    },
    created: function(){
        getAuthorizedQuery("/quiz/results/" + this.$route.params.id + "/",
                            this.$store.getters.getAuth)
                            .then(response => {this.results = response.data;
                            console.log(this.results);})
                            .catch();
    }
}
</script>

<style lang="css">
</style>
