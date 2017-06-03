<template id="new-group-item">
    <div class="">
        <div
        class="btn btn-default glyphicon glyphicon-plus"
        style="margin-left: 20px"
        @click="showGroupForm"></div>
            <div v-if="triggered" style="margin: 20px 20px 20px 20px" class="input-group">
                <input class="form-control" type="text" v-model="groupName"/>
                <span class="input-group-addon" @click="postGroup">
                    <a class="glyphicon glyphicon-ok"></a>
                </span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import {postAuthorizedQuery } from '../../utils/queries.js'

    export default {
        data: function(){
            return {
                groupName: "",
                triggered: false
            }
        },
        methods:{
            showGroupForm(){
				this.triggered = !this.triggered;
				this.groupName = "";
			},
			postGroup(){
				console.log("Logger");
				if (this.triggered) {
					postAuthorizedQuery("/group", this.$store.getters.getAuth, {name: this.groupName})
						.then(response => console.log(response.data))
						.catch();
					this.triggered = !this.triggered;
                    this.$emit("refresh");
				}
			}
        }
    }
</script>
