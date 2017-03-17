<template id="subject-component">
    <div class="panel panel-success">
        <div class="panel-heading">
            <!-- TODO add highlight and arrow separator-->
            {{$route.query.category_name}}
        </div>
        <div class="panel panel-label">
            <div class="container-fluid" style="padding:1em">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
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
