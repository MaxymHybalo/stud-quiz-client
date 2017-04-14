<!-- Main component for category flow -->
<template id="category">
    <div class="container-fluid">
        <!-- TODO Needed some solution for different user roles -->
        <!-- <router-link to="/category/new">Нова категорія</router-link> -->
        <div class="col-md-10 col-md-offset-1">
            <category-list></category-list>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import CategoryList from './CategoryList.vue'

    export default {
        name: "category",
        components:{
            CategoryList
        }
    }
</script>
