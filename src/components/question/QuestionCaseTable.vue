<template id="question-case-table">
    <table class="table table-bordered table-hover">
        <thead>
            <tr class="info">
                <td>№</td>
                <td>Видалити</td>
                <td>Умова</td>
                <td v-for='id in maxDomens'>Відповідь {{id}}</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in questions">
                <td>{{ index + 1 }}</td>
                <td class="delete-container danger"><span class="glyphicon glyphicon-remove"></span></td>
                <td>{{ item.condition }}</td>
                <td
                 v-for="(value, key) in item.options"
                 :class="{highlight: value}">{{key}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    import axios from 'axios'

    export default {
        props: ['update'],
        data: function () {
            return {
                questions: [{}],
                maxDomens: 0
            }
        },
        beforeCreate(){
            let params = this.$route.query.before;
            params['questionCase'] = this.$route.query.case;
            this.questions = axios.get('/question/category/' +
                params.category + "/subject/" +
                params.name + "/case/" +
                params.questionCase)
                .then(response => {
                    this.questions = response.data;
                    this.maxDomens = searchMaxDomen(this.questions);
            });
        },
        computed:{
            update: function(){this.beforeCreate();}
        }
    }

function searchMaxDomen(questions){
    let max = Object.keys(questions[0].options).length;
    for (var i = 0; i < questions.length; i++) {
        let subKeysCount = Object.keys(questions[i].options).length;
        if (subKeysCount > max) {
            max = subKeysCount;
        }
    }
    return max;
}

</script>
<style media="screen">
    tr .delete-container {
        text-align: center;
    }
    .highlight{
        background-color: #a6e59b;
    }
</style>
