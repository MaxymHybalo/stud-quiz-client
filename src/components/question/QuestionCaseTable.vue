<template id="question-case-table">
    <table class="table">
        {{questions}}
    </table>
</template>
<script>
    import axios from 'axios'

    export default {

        data: function () {
            return {
                questions: [{}],
                maxDomens: 1
            }
        },
        beforeCreate(){
            console.log(this.query);
            let params = this.$route.query.before;
            params['questionCase'] = this.$route.query.case;
            this.questions = axios.get('/question/category/' +
                params.category + "/subject/" +
                params.name + "/case/" +
                params.questionCase)
                .then(response => this.questions = response.data);
        },
        created(){
            //Search for maximal answer count and build table
        }
    }


</script>
