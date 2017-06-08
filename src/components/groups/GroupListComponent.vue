<template id="group-list-component">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6">
				<new-group-component @refresh="refresh()"/>
				<list-component title="Групи" :items="items" :builder="replaceStudentsList"/>
			</div>
			<div class="col-md-6" v-if="selected">
				<new-student-component :group="selected"/>
				<list-component :title="'Учні ' + selected.name" :items="students" :builder="pushDetails"/>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
    import { getAuthorizedQuery, postAuthorizedQuery } from '../../utils/queries.js'
    import ListComponent from '../support/ListComponent.vue'
	import NewGroupComponent from './NewGroupComponent.vue'
	import NewStudentComponent from '../user/NewStudentComponent.vue'

	export default {
		data: function () {
			return {
				items: null,
				selected: null,
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
				// this.students = item.studentIds;
				this.students = getAuthorizedQuery("/group/students/" + item.id + "/", this.$store.getters.getAuth)
					.then(response => this.students = response.data)
					.catch() // one more unhandled exception
				this.selected = item;
			},
			getGroups(){
				this.items = getAuthorizedQuery("/group",this.$store.getters.getAuth)
					.then(response => this.items = response.data)
					.catch();
			},
			refresh(){
				this.items = this.getGroups();
			},
			pushDetails: function(item){
				console.log("Students list: ", item);
				this.$store.commit('SET_USER', item);
				this.$router.push({name: "details", params:{id:item.id}});
				//push logic
			}
		},
		components:{
			ListComponent,
			NewGroupComponent,
			NewStudentComponent
		}
	}

</script>
<style media="screen">
	a:hover {
		text-decoration: none;
	}
</style>
