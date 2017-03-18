<template id="subject-component">
    <div class="panel panel-success">
        <div class="panel-heading">
            <!-- TODO add highlight and arrow separator-->
            <a class="router-link-active previous-link" v-bind:href="'#/category/' + $route.query.category">{{$route.query.category_name}}</a>
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <strong>{{subject.name}}</strong>
        </div>
        <div class="panel panel-label">
            <div class="container-fluid" style="padding:1em">
                <div class="row">
                    <div class="col-md-2">
                        <button>Додати</button>
                    </div>
                    <div class="col-md-6 col-md-offset-2">
                        <strong>Тести:</strong>
                        <div class="list-group">
                            <a class="list-group-item" v-for="item in subject.questionCases">{{item.name}}</a>
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'subject-component',
        data: function(){
            return {
                subject: {}
            }
        },
        created: function(){
            console.log(this.$route.query);
            this.subject = axios.get('/subject/', {params: this.$route.query})
                                .then(response => this.subject = response.data)
                                .catch(error => {
                                    this.errorMsg = 'Помилка зв\'язку з серверомм';
                                    this.isError = true;});
        }
    }
</script>
<style>
    .previous-link{
        color: #3c763d;
        /*TODO add hover dependency*/
    }
</style>
