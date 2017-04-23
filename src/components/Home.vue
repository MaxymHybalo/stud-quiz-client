<template id="home">
    <div class="row">
        <div class="col-md-3">
            <list-component
            title="Категорія"
            v-bind:items="categories"
            v-bind:builder="categoryAction"
            :remove_item="false"
            />
        </div>
        <div class="col-md-4" v-if="category">
            <list-component
            title="Предмети"
            :builder="subjectAction"
            v-bind:items="category.subjects"
            :remove_item="false"
            />
        </div>
        <div class="col-md-5" v-if="questions">
            <list-component
            title="Тести"
            :items="questions.questionCases"
            :remove_item="false"
            :builder="questionAction"
            />
        </div>
    </div>
</template>
<script>
    import ListComponent from './support/ListComponent.vue'
    import {getCategoriesNames, getQuery} from '../utils/queries.js'
    export default {
        data:function(){
                return{
                    categories:[],
                    category:null,
                    selectedCategory:null,
                    selectedSubject:null,
                    questions:null,
                    isHomeView: true
                }

        },
        methods:{
            categoryAction(item){
                console.log("Emitt category!", item.id);
                this.category = getQuery("/category/"+item.id).then(response => this.category = response.data);
                this.selectedCategory = item;  // mark selected category for serch question cases
                this.questions = null; // disable previous question cases
            },
            subjectAction(item){
                console.log("Emit subject " + item.name);
                this.questions = getQuery("/subject/", {category: this.selectedCategory.id, name: item.name}).then(response => this.questions = response.data);
                this.selectedSubject = item.name;
                console.log(this.questions);
            },
            questionAction(item){
                //push to new vue
                console.log("Question action call " + item);
                this.$router.push({
                    path: '/quiz',
                    query: [item, this.selectedCategory.id, this.selectedSubject]
                })

            }
        },
        created:function() {
            this.categories = getQuery("/category/names").then(response => this.categories = response.data);
        },
        components:{
            ListComponent
        }
    }
</script>
