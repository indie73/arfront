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
							.model__view
								model-obj(
									:backgroundAlpha="0"
									:src="this.model")
							.model__controls
								button(type="button" v-on:click="assembleModel()" v-if="!assembleModelState") Собрать
								button(type="button" v-on:click="disassembleModel()" v-if="assembleModelState") Разобрать
					td
						.pdf
							.pdf__counter
								| {{currentPage}} / {{pageCount}}
							.pdf__view
								pdf(
									:src="this.pdfView"
									:page="currentPage"
									@num-pages="pageCount = $event"
									@page-loaded="currentPage = $event")
							.pdf__controls
								button(v-on:click="pdfPrev()" :disabled="currentPage == 1") <<
								button(v-on:click="pdfNext()" :disabled="currentPage == pageCount") >>
</template>

<script>
	import axios from 'axios';
	import {ModelObj} from 'vue-3d-model';
	import pdf from 'vue-pdf';

	let loadingTask = pdf.createLoadingTask('http://indieteam.online/uploads/stul.pdf');

	export default {
		props: ['id'],
		data() {
			return {
				details: null,
				steps: null,
				modelResponse: null,
				model: null,
				assembleModelState: true,
				pdfView: null,
				numPages: undefined,
				currentPage: 1,
				pageCount: 0,
				intersected: null,
			}
		},
		created() {
			this.getInstructions()
		},
		components: {
			ModelObj,
			pdf,
		},
		methods: {
			getInstructions() {
				axios.get(`http://indieteam.online/api/v1/instructions/${this.id}`, {})
					.then(response => {
						this.steps = response.data.steps;
						this.details = response.data.details;
						this.modelResponse = [response.data.referenceModelLink, response.data.disReferenceModelLink];
						this.model = this.modelResponse[0];
						this.pdfView = response.data.pdf;
					});
			},
			pdfPrev() {
				if(this.currentPage - 1 < 1) {
					this.currentPage = 1;
				} else {
					this.currentPage--;
				}
			},
			pdfNext() {
				if(this.currentPage + 1 > this.pageCount) {
					this.currentPage = this.pageCount;
				} else {
					this.currentPage++;
				}
			},
			assembleModel() {
				this.model = this.modelResponse[0];
				this.assembleModelState = true;
			},
			disassembleModel() {
				this.model = this.modelResponse[1];
				this.assembleModelState = false;
			},
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
		width: 100%;

		td {
			vertical-align: top;
		}
	}

	.model {
		margin-left: 25px;

		&__view {
			display: block;
			margin: 0 auto;
			width: 300px;
			height: 400px;
		}

		&__controls {
			margin-top: 10px;

			button {
				display: inline-block;
				vertical-align: middle;
				margin: 0 5px;
				outline: none;
				border: none;
				padding: 5px 15px;
				font-weight: 700;
				font-size: 18px;
				background: #fdffa0;
				cursor: pointer;

				&:disabled {
					opacity: 0.5;
				}
			}
		}
	}

	.pdf {
		margin-left: 25px;

		&__counter {
			margin-bottom: 10px;
			font-weight: 700;
			font-size: 18px;
			text-align: center;
		}

		&__view {
			> span {
				width: 500px;
			}
		}

		&__controls {
			margin-top: 10px;

			button {
				display: inline-block;
				vertical-align: middle;
				margin: 0 5px;
				outline: none;
				border: none;
				padding: 5px 15px;
				font-weight: 700;
				font-size: 18px;
				background: #fdffa0;
				cursor: pointer;

				&:disabled {
					opacity: 0.5;
				}
			}
		}
	}
</style>
