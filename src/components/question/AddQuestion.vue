<template id="add-question">
    <div class="panel panel-info">
        <div class="panel-heading">
            Конструктор запитання...
        </div>
        <div class="panel panel-label">
            <div class="container-fluid" style="padding: 1em">
                <div class="row">
                </div>
                <div class="row">
                    <div class="col-md-10">
                        <div class="form-group">
                            <label>Умова:</label>
                            <input
                            type="textarea"
                            class="form-control"
                            placeholder="Вкажіть запитання"
                            v-model="condition"/>
                        </div>
                        <div class="form-group">
                            <label>Варіанти відповіді:</label>
                            <input
                            type="number"
                            placeholder="Кількість"
                            v-model="count"
                            @keyup="rebuild"
                            @click="rebuild"/>
                        </div>

                        <div class="form-group" v-for="(item, index) in questions">
                            <label>Варіант відповіді {{ index + 1 }}:</label>
                            <input
                            type="text"
                            placeholder="Відповідь"
                            v-model="item.answer">
                            <label>Правильна?</label>
                            <select v-model="item.isTruth">
                                <option value=false>Ні</option>
                                <option value=true>Так</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-md-offset-9">
                        <div class="btn btn-info" @click="save">
                            Зберегти
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        name: 'add-question',
        data: function(){
            return {
                count: null,
                questions: [{isTruth:false}],
                condition: null
            }
        },
        methods:{
            rebuild(){
                    this.questions = new Array();
                for (var i = 0; i < this.count; i++) {
                    this.questions.push({});
                }
            },
            save(){
                let caseProjection = {condition: this.condition};
                let qMap = {};
                for (var i=0; i < this.questions.length; i++) {
                    qMap[this.questions[i].answer] = this.questions[i].isTruth;
                }
                caseProjection['options'] = qMap;

                let params = {};

                for (var key in this.$route.query.before) {
                    params[key] = this.$route.query.before[key];
                }
                params['questionCase'] = this.$route.query.case;

                axios.post('/question/', {params:
                    params, data: caseProjection});

                console.log(caseProjection);
            }
        }
    }

</script>
