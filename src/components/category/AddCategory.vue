<template id="add-category">
    <div class="panel panel-success">
        <div class="panel-heading">
            Заповніть дані для нової категорії...
        </div>
        <div class="panel panel-label">
            <div class="container-fluid">
                <form style="padding:1em">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3">
                                <div class="form-group">
                                    <label for="name">Назва</label>
                                    <input type="text" class="form-control" id="name" v-model='name' placeholder="Назва"/>
                                </div>
                                <div class="form-group">
                                    <input type="text" v-if="isSubjectField" v-model="subject"/>
                                    <button class="btn btn-default" @click="showField">Додати предмет</button>
                                </div>
                                <ul class="list-group">
                                    <li class="list-group-item" v-for="item in subjects">{{item.name}}</li>
                                </ul>
                            </div>

                        </div>
                        <div class="row">
                            <button class="col-md-3 col-md-offset-9  btn btn-info" type="button" @click='save'>Зберегти</button>
                        </div>
                </form>
            </div>
            <p>{{msg}}</p>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default{
        name:"add-category",
        data(){
            return{
                name: '',
                msg: '',
                subject: '',
                subjects: [],
                isSubjectField: false
            }
        },
        methods:{
            save(){
                this.msg = axios.post('/category/',{name: this.name, subjects: this.subjects})
                                .then(response => this.msg = response.data)
                                .catch(error => this.msg = error);

            },
            showField(){
                this.isSubjectField = !this.isSubjectField;
                if (!this.isSubjectField && !(this.subjects === '')){
                    this.subjects.push({name:this.subject});
                    console.log(this.subjects);
                }
                this.subject = '';
            }
        }
    }
</script>
