<template lang="pug">
	.container
		.block
			table.model-table
				tr
					td
						.list
							.title
								| Необходимые детали
							table
								thead
									tr
										th Код
										th Название
										th Количество
								tbody
									tr(v-for="detail in this.details"
										:key="detail.id")
										td {{detail.shortName}}
										td {{detail.name}}
										td {{detail.count}}
						.list
							.title
								| Шаги сборки
							table
								thead
									tr
										th Код
										th Описание
								tbody
									tr(v-for="detail in this.steps"
										:key="detail.id")
										td {{detail.id}}
										td {{detail.description}}
					td
						.model
							model-obj(
								:backgroundAlpha="0"
								src=this.model)
</template>

<script>
	import axios from 'axios';
	import {ModelObj} from 'vue-3d-model';

	export default {
		props: ['id'],
		data() {
			return {
				details: null,
				steps: null,
				model: null,
			}
		},
		created() {
			this.getInstructions()
		},
		components: {ModelObj},
		methods: {
			getInstructions() {
				axios.get(`http://indieteam.online/api/v1/instructions/${this.id}`, {})
					.then(response => {
						this.steps = response.data.steps;
						this.details = response.data.details;
						this.model = response.data.referenceModelLink;
					});
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.title {
		font-weight: 700;
		margin: 0 0 15px;
		text-align: left;
	}

	.list {
		text-align: left;

		+ .list {
			margin-top: 50px;
		}

		table {
			th {
				padding: 5px 15px;

				+ th {
					border-left: solid 1px #fdffa0;
				}
			}

			td {
				border-top: solid 1px #fdffa0;
				padding: 5px 15px;

				+ td {
					border-left: solid 1px #fdffa0;
				}
			}
		}
	}

	.model-table {
		td {
			vertical-align: top;
		}
	}

	.model {
		margin-left: 150px;
		width: 500px;
	}
</style>
