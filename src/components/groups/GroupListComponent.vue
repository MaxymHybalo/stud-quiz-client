<template id="group-list-component">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6">
				<new-group-component @refresh="refresh()"/>
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
	import NewGroupComponent from './NewGroupComponent.vue'

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
			this.getGroups();
		},
		methods:{
			replaceStudentsList: function(item){
				this.students = item.studentIds;
			},
			getGroups(){
				this.items = getAuthorizedQuery("/group",this.$store.getters.getAuth)
					.then(response => this.items = response.data)
					.catch();
			},
			refresh(){
				this.items = this.getGroups();
			}
		},
		components:{
			ListComponent,
			NewGroupComponent
		}
	}

</script>
<style media="screen">
	a:hover {
		text-decoration: none;
	}
</style>
