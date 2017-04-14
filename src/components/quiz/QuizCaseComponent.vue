<template id="quiz-case-component">
    <div class="col-md-12">
        <h2 class="col-md-offset-1">{{ condition }}</h2>
        <div class="col-md-offset-1 radio" v-for='(value, key) in options'>
            <input type="radio"/>
            <label>{{key}}</label>
        </div>
        <div class="row">
            <div class="col-md-3 col-md-offset-1 btn btn-default">
                Попередній
            </div>
            <div class="col-md-3 col-md-offset-3  btn btn-primary" @click='next'>
                Наступний
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['condition', 'options'],
        methods:{
            next(){
                this.$emit('next');
            }
        }
    }
</script>
