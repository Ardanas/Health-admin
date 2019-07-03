<template>
	<input type="text" :placeholder="tipTxt" v-model="number"  @keyup="fixNumber" size="18">
</template>

<script>
	export default {
		props: {
			placeholder: {
				type: [String,Number,Boolean],
				default: ''
			},
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 1000
			}
		},
		data () {
			return {
				tipTxt: this.placeholder,
				number: ''
			}
		},
		methods: {
			fixNumber () {
				let fix

				/*if(typeof this.number === 'string'){
					fix = Number(this.number.replace(/\D/g, ''))
				}else{
					fix = this.number
				}*/
				if( /^\d+\.?\d{0,2}$/.test(this.number)){
					fix = this.number
				}else{
					fix = Number(this.number.replace(/\D/g, ''))
				}
				if(fix > this.max ){
					fix = this.max
				}else if(fix < this.min){
					fix = this.min	
				}
				if(this.number === ''){
					fix = ''
				}
				this.number = fix
				this.$emit('on-change', this.number)
			}
			
		}
	}
</script>

