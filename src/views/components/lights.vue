<template>
	<div class="lights-container">
		<div class="light" :class='updateLights'>
		</div>
		<span class="hint">
			{{updateHints}}
		</span>
	</div>
</template>

<script>
	export default {
		props: {
			lightsType: {
				type: String,
				default: ''
			},
			hints: {
				type: String,
				default: ''
			}
		},
		data () {
			return {
				lightType: '',
				hint: ''
			}
		},
		computed: {
			updateHints () {
				this.hint = this.hints
				return this.hint
			},
			updateLights () {
				this.lightType = this.lightsType
				return this.lightType
			}
		}
		
	}
</script>

<style>
	.lights-container{
		margin-top: 15px;
		margin-left: 50px;
	}
	.light{
		width: 50px;
		height: 136px;
		background-size: 47px;
		background-repeat: no-repeat;
		display: inline-block;
	}
	.red-light{
		background-image: url(../../../static/img/evaluation/red-light.png);
	}
	.green-light{
		background-image: url(../../../static/img/evaluation/green-light.png);
	}
	.yellow-light{
		background-image: url(../../../static/img/evaluation/yellow-light.png);
	}
	.hint{
		display: inline-block;
		width: 180px;
		font-size: 17px;
		padding-left: 20px; 
	}
</style>