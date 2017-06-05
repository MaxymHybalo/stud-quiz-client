<template id="new-student-component">
    <div>
        <div
        class="btn btn-default glyphicon glyphicon-plus"
        style="margin-left: 20px"
        @click="showStudentForm"></div>
            <div v-if="triggered" style="margin: 20px 20px 20px 20px">
                <div class="form-group">
                    <input class="form-control" placeholder="Прізвище" type="text" v-model="last"/>
                </div>
                <div class="form-group">
                    <input class="form-control" placeholder="Ім'я" type="text" v-model="first"/>
                </div>
                <span class="" @click="postStudent">
                    <a class="glyphicon glyphicon-ok"></a>
                </span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import {postAuthorizedQuery } from '../../utils/queries.js'

    export default {
        props:["group"],
        data: function () {
            return {
                triggered: false,
                last: "",
                first: ""
            }
        },
        methods:{
            showStudentForm(){
                this.first = "";
                this.last = "";
                this.triggered = !this.triggered;
            },
            postStudent(){
                if (this.triggered) {
                    console.log(this.group);
                    let student = {
                        first: this.first,
                        last: this.last
                    }
                    // ... post logic
                    postAuthorizedQuery("/user/student", this.$store.getters.getAuth, {user:student, group:this.group})
                        .then(response => console.log(response.data))
                        .catch();
                    this.triggered = false;
                    this.$emit("refresh");
                }
            }
        }
    }
</script>
<style media="screen">
    .form-group {
        margin-top: 5px;
    }
</style>
