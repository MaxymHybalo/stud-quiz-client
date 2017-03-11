<template id="signup-role">
    <div class="panel panel-success">
        <div class="panel-heading">
            Оберіть свою роль...
        </div>
        <div class="panel-body">
            <div class="container-fluid">
                <div class="row">
                    <button class="col-md-4 btn btn-primary" v-bind:class="{active: teacherActive}" type="button" @click="enable('teacher')">Вчитель</button>
                    <button class="col-md-4 col-md-offset-4 btn btn-primary" v-bind:class="{active: parentActive}" @click="enable('parent')" type="button">Батьки</button>
                </div>
                <div class="row" style="margin-top: 3.5em">
                    <button class="col-md-3 col-md-offset-9" type="button" @click='next'>Далі</button>
                </div>
            </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'signup-role',
    data(){
        return {
            teacherActive: false,
            parentActive: false,
            role: null

        }
    },
    methods:{
        enable(value){
            this.teacherActive = value === 'teacher' ? true : false;
            this.parentActive = value === 'parent' ? true : false;
            this.role = value.toUpperCase();
        },
        next(){
            this.$emit('next', this.role)
        }
    }
}
</script>
