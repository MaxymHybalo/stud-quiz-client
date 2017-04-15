<template id="quiz-case-component">
    <div class="col-md-12">
        <h2 class="col-md-offset-1">{{ condition }}</h2>
        <div class="col-md-offset-1 radio" v-for='(value, key) in options'>
            <input type="radio" name="optionRadios"/>
            <label>{{key}}</label>
        </div>
        <div class="row">
            <div class="col-md-3 col-md-offset-1 btn btn-default" @click='before'>
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
                let resultBoxes = document.getElementsByClassName('radio');
                let resultValues = [];
                for (var i = 0; i < resultBoxes.length; i++) {
                    resultValues[i] = resultBoxes[i].firstChild.checked;
                }
                this.$emit('next', resultValues);
                uncheckRadios();
            },
            before(){
                this.$emit('before');
            }
        }
    }

    function uncheckRadios(){
        let radios = document.getElementsByClassName('radio');
        for (var i = 0; i < radios.length; i++) {
            radios[i].firstChild.checked = false;
        }
    }
</script>
