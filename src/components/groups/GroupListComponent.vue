<template id="group-list-component">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6">
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
				<list-component title="Групи" :items="items" :builder="replaceStudentsList"/>
			</div>
			<div class="col-md-6">
				<list-component title="Учні" :items="students"/>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
    import { getAuthorizedQuery, postAuthorizedQuery } from '../../utils/queries.js'
    import ListComponent from '../support/ListComponent.vue'
	export default {
		data: function () {
			return {
				items: null,
				students: null,
				groupName: "",
				triggered: false
			}
		},
		created: function(){
			this.items = getAuthorizedQuery("/group",this.$store.getters.getAuth)
				.then(response => this.items = response.data)
				.catch();
		},
		methods:{
			replaceStudentsList: function(item){
				console.log(item);
				//TODO for existing students build serialized to component object
				// let buffer = ite
				this.students = item.studentIds;
			},
			showGroupForm(){
				this.triggered = !this.triggered;
				this.groupName = "";
			},
			postGroup(){
				console.log("Logger");
				if (this.triggered) {
					//logic for post
					postAuthorizedQuery("/group", this.$store.getters.getAuth, {name: this.groupName})
						.then(response => console.log(response.data))
						.catch();
					this.triggered = !this.triggered;
				}
			}
		},
		components:{
			ListComponent
		}
	}

</script>
<style media="screen">
	a:hover {
		text-decoration: none;
	}
</style>
