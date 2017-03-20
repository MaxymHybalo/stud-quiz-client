<template id="signup-personal">
    <div class="panel panel-success">
        <div class="panel-heading">
            Заповніть персональні дані...
        </div>
        <div class="panel panel-label">
            <div class="container-fluid">
                <form>
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <div class="form-group">
                                <label for="last">Прізвище</label>
                                <input type="text" class="form-control" id="last" v-model='last' placeholder="Прізвище"/>
                            </div>
                            <div class="form-group">
                                <label for="first">Ім'я</label>
                                <input type="text" class="form-control" id="first" v-model='first' placeholder="Ім'я"/>
                            </div>
                            <div class="form-group">
                                <label for="middle">По батькові</label>
                                <input type="middle" class="form-control" id="middle" v-model='middle' placeholder="По батькові"/>
                            </div>
                            <div class="form-group">
                                <label for="sex">Стать</label>
                                <select class="form-control" v-model='sex'>
                                    <option value="man">Чоловіча</option>
                                    <option value="woman">Жіноча</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="phone">Номер телефона</label>
                                <input type="phone" class="form-control" id="phone" v-model='phone' placeholder="Телефон"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <button class="col-md-3 col-md-offset-9  btn btn-info" type="button" @click='next'>Реєструватися</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'signup-personal',
        data(){
            return{
                first: null,
                last: null,
                middle: null,
                sex: null,
                phone: null
            }
        },
        methods:{
            next(){
                this.$emit('next', this.first, this.last, this.middle, this.sex, this.phone);
            }
        }
    }
</script>
