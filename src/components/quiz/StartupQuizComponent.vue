<template id="startup-quiz-component">
    <div class="panel panel-primary">
        <div class="panel-heading">
            {{ $route.query.name }}
        </div>
        <div class="panel-body">
            <div
            v-if="isDiplayedStartBtn"
            class="col-md-3 col-md-offset-4 btn btn-primary"
            @click="activate">
                Почати
            </div>
            <quiz-flow-component
            v-if="!isDiplayedStartBtn"
            :quiz='$route.query'/>
            <!-- Syud quiz body {{ $route.query }} -->
        </div>
    </div>
</template>
<script>
    import QuizFlowComponent from './QuizFlowComponent.vue'
    export default {
        data: function(){
            return {
                isDiplayedStartBtn: true
            }
        },
        methods:{
            activate(){
                this.isDiplayedStartBtn = !this.isDiplayedStartBtn;
                console.log("Quiz status changed", this.isDiplayedStartBtn);
            }
        },
        components:{
            QuizFlowComponent
        }
    }
</script>
