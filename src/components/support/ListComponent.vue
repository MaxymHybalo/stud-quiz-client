<template id="list-component">
    <div class="row">
        <div class="col-md-10">
            <strong>{{title}}:</strong>
            <div class="list-group">
                <a class="list-group-item"
                v-for="item in items"
                @click="builder(item)">
                {{item.name}}
                </a>
            </div>
        </div>
        <br>
        <div class="col-md-2" v-if="remove_item">
            <div class="list-group">
                <a class="list-group-item icon"
                v-for="item in items" @click = 'popItem(item)'>
                <span class="glyphicon glyphicon-remove"></span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'list-component',
        props: ['title', 'items', 'builder', 'remove_item'],
        methods:{
            popItem(item){
                this.items.splice(this.items.indexOf(item),1);
            }
        }
    }
</script>
<style media="screen">
    .icon {
        float: left;
    }
    div .col-md-2 {
        margin-left: -2.3em;
    }
    a {
        cursor: pointer;
    }
</style>
