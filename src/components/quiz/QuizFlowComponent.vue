<template id="quiz-flow-component">
    <div
    class="col-md-8 mocked">
        <div class="panel panel-success">
            <div class="panel-heading">
                Питання {{currentIndex+1}} з {{ maxIndexes }}
            </div>
            <div class="panel-body">
                <quiz-case-component
                v-if="!endpoint"
                 :condition='condition'
                 :options='options'
                 @next='iterateQuestion'
                 @before='beforeQuestion'/>

                 <quiz-finish-component
                 v-if="endpoint"
                 msg="Проходження тесту завершено"
                 :results="quizResults"
                 @finish="finishQuiz"/>
            </div>
        </div>
    </div>
</template>
<script>
    import QuizCaseComponent from './QuizCaseComponent.vue'
    import QuizFinishComponent from './QuizFinishComponent.vue'
    import { postQuery } from '../../utils/queries.js'

    var quizResultMap = {};
    var CALCULATION = "Перевірка..."
    export default {
        props: ['quiz'],
        data: function(){
            return {
                currentIndex: 0,
                maxIndexes: 0,
                condition: null,
                options: null,
                endpoint: false,
                quizResults: CALCULATION
            }
        },
        methods:{
            iterateQuestion(values){
                quizResultMap[this.currentIndex] = values;
                if(this.currentIndex != this.maxIndexes - 1){
                    this.currentIndex ++;
                    this.condition = conditionByIndex(this.currentIndex, this.quiz[0]);
                    this.options = optionsByIndex(this.currentIndex, this.quiz[0]);
                }

                if (Object.keys(quizResultMap).length == this.maxIndexes) {
                    console.log("endpoint status changed", quizResultMap);
                    this.endpoint = true;
                }
            },
            beforeQuestion(){
                if(this.currentIndex != 0){
                    this.currentIndex--;
                }
                this.condition = conditionByIndex(this.currentIndex, this.quiz[0]);
                this.options = optionsByIndex(this.currentIndex, this.quiz[0]);
            },
            finishQuiz(){
                // console.log(quizResultMap);
                let params = {}
                params['category'] = this.quiz[1];
                params['name'] = this.quiz[2];
                params['questionCase'] = this.quiz[0].name;
                console.log("Завершити event" + this.$store.getters.getProfile);
                let id = null;
                if(this.$store.getters.getProfile != null){
                    id = this.$store.getters.getProfile.id;
                }
                this.quizResults = postQuery('/quiz/results', {params: params, data: quizResultMap, user: id})
                                    .then(response => this.quizResults = response.data.gradation);

            }
        },
        created:function(){
            this.condition = conditionByIndex(this.currentIndex, this.quiz[0]);
            this.options = optionsByIndex(this.currentIndex, this.quiz[0]);
            this.maxIndexes = this.quiz[0].questions.length;
            this.quizResults = CALCULATION;
            quizResultMap = {};
            console.log("After re-creating component", quizResultMap);
        },
        components:{
            QuizCaseComponent,
            QuizFinishComponent
        }
    }

    function conditionByIndex(index, collection){
        return collection.questions[index].condition;
    }

    function optionsByIndex(index, collection){
        return collection.questions[index].options;
    }
</script>
