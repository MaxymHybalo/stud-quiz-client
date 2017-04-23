<template id="ProfileComponent">
    <div class="panel panel-primary">
        <div class="panel-heading">
            Профіль користувача
        </div>
        <div class="panel-body">
            <!-- Candidate to  -->
            <div class="row">

                <div class="col-md-3">
                    <profile-menu-component/>
                </div>
                <div class="col-md-9">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ProfileMenuComponent from './ProfileMenuComponent.vue'

    export default {
        components:{
            ProfileMenuComponent
        }
    }
</script>
