<template id="list-counter-component">
    <div class="form-group">
        <input type="text" v-if="isFieldOn" v-model="field"/>
        <button class="btn btn-default" @click="showField">{{label}}</button>
    </div>
</template>
<script>
    export default{
        name: 'list-counter-component',
        props: ['label'],
        data: function () {
            return{
                field:'',
                isFieldOn: false
            }
        },
        methods:{
            showField(){
                this.isFieldOn = !this.isFieldOn;
                if (!this.isFieldOn && !(this.field === '')){
                    this.$emit('added', this.field);
                    this.field = '';
                }
            }
        }
    }
</script>
