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
                            <input type="textarea" class="form-control" placeholder="Вкажіть запитання"/>
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

                        <div class="form-group" v-for="item in questions">
                            <label>Варіант відповіді {{ item }}:</label>
                            <input
                            type="text"
                            placeholder="Відповідь">
                            <label>Правильна?</label>
                            <select>
                                <option value="false">Ні</option>
                                <option value="true">Так</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-md-offset-9">
                        <div class="btn btn-info">
                            Зберегти
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default{
        name: 'add-question',
        data: function(){
            return {
                count: null,
                questions: [1]
            }
        },
        methods:{
            rebuild(){
                console.log(this.count);
                this.questions = new Array();
                for (var i = 0; i < this.count; i++) {
                    this.questions.push(i+1);
                }
            }
        }
    }

</script>
