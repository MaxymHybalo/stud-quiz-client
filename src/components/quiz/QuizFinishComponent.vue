<template id="quiz-finish-component">
    <div class="col-md-12">
        <h1 class="col-md-offset-1">
            {{msg}}
        </h1>
        <div
        class="col-md-3 col-md-offset-4
        btn btn-success"
        @click="finish">
            Завершити
        </div>
    </div>
</template>
<script>
    export default {
        props:['msg'],
        methods:{
            finish(){
                this.$emit("finish");
            }
        }
    }
</script>
