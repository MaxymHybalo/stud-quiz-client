<template id="home">
    <div class="container-fluid">
        <div class="col-md-3">
            <list-component
            title="Категорія"
            v-bind:items="items"
            v-bind:builder="tryEmit"
            :remove_item="false"
            @ems='isEms()'/>
        </div>
    </div>
</template>
<script>
    import ListComponent from './support/ListComponent.vue'
    import {getCategoriesNames} from '../utils/queries.js'
    export default {
        data:function(){
                return{
                    items:[],
                    isHomeView: true
                }

        },
        methods:{
            tryEmit(item){
                console.log("Emitt builder!", item.name);
                this.$emit('ems');
            },
            isEms(){
                console.log("Function emited!");
            }
        },
        created:function() {
            this.items = getCategoriesNames().then(response => this.items = response.data);
        },
        components:{
            ListComponent
        }
    }
</script>
