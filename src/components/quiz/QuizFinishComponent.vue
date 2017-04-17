<template id="quiz-finish-component">
    <div class="col-md-12">
        <h1 class="col-md-offset-1" v-if="results==null">
            {{msg}}
        </h1>
        <h1 class="col-md-offset-1" v-else>
            {{results.gradation}}!
        </h1>
        <div
        v-if="!results"
        class="col-md-3 col-md-offset-4
        btn btn-success"
        @click="finish">
            Завершити
        </div>
        <div
        v-else
        class="col-md-3 col-md-offset-4
        btn btn-default"
        @click="toHome">
            Далі
        </div>
    </div>
</template>
<script>
    export default {
        props:['msg','results'],
        methods:{
            finish(){
                this.$emit("finish");
            },
            toHome(){
                this.$router.push('/');
            }
        }
    }
</script>
