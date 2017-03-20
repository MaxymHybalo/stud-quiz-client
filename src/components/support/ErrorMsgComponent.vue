<template id="error-msg-component">
    <div class="alert alert-danger" role="alert" style="text-align: center"><strong>{{msg}}</strong></div>
</template>
<script>
    export default {
        name:'error-msg-component',
        props:['msg']
    }
</script>
