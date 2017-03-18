<template id="list-counter-component">
    <div class="form-group">
        <input type="text" v-if="isFieldOn" v-model="field" v-bind:placeholder="placeholder"/>
        <button class="btn btn-default" @click="showField">{{label}}</button>
    </div>
</template>
<script>
    export default{
        name: 'list-counter-component',
        props: ['label','placeholder'],
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
