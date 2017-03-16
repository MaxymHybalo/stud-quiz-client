<template id="category-view">
    <div class="panel panel-success">
        <div class="panel-heading">
            {{subject.name}}
        </div>
        <div class="panel panel-label">
            <div class="container-fluid">
                <form>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3">
                                <div class="list-group">
                                    <a class="list-group-item router-link-active" v-for="item in subject.subjects" v-bind:href="'#">Test</a>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <button class="col-md-3 col-md-offset-9 btn btn-info" type="button" @click='signIn'>Ввійти!</button>
                        </div>
                    </div>
                </form>
        </div>
    </div>
</div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'category-view',
        data: function(){
            return {
                subject:{}
            }
        },
        created: function(){
            this.subject = axios.get("/category/" + this.$route.params.id)
                                .then(response => this.subject = response.data)
                                .catch(error => console.log(error));
        }
    }
</script>
