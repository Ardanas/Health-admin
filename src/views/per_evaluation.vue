<template>
	<div class="evaluation animated fadeIn">
		<div class="goal-form">
			<div class="goal-line">
				<h1 style="text-align:center; margin-bottom: 10px;">首次评估</h1>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<strong>★输入用户id</strong>
				</div>
				<div class="goal-right">
					<Input placeholder="Enter User Id..." v-model="userId" @on-blur="checkUserId(userId)"/>
				</div>
				<div class="goal-right">
					<div class="goal-right" v-if="isUidError">
						<Alert type="error" show-icon >
					        An error prompt
					        <span slot="desc">
					        	{{uidErrorTxt}}
					        </span>
					    </Alert>
					</div>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>1.平常运动吗:</span>
				</div>
				<div class="goal-right">
					<v-selection :selections="isList" @on-change="onParamChange('isSport', $event)"></v-selection>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>2.平时做什么活动:</span>
				</div>
				<div class="goal-right">
					<v-multiplay-chooser :selections="sportTargetList" @on-change="onParamChange('sports', $event)"></v-multiplay-chooser>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>3.一般一周活动多少次</span>
				</div>
				<div class="goal-right">
					<v-selection :selections="sportNumList" @on-change="onParamChange('sportTimes', $event)"></v-selection>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					4.剧烈程度怎样
				</div>
				<div class="goal-right">
					<v-selection :selections="sportDegreeList" @on-change="onParamChange('sportDegree', $event)"></v-selection>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					5.不运动的原因
				</div>
				<div class="goal-right">
					<v-selection :selections="sportReasonList" @on-change="onParamChange('sportReason', $event)"></v-selection>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					6.您的6分钟步行试验结果:<strong>{{stepNumber}} m</strong>    
				</div>
				<div class="goal-right">
					<v-num-input :min="0" :max="20000" :placeholder="'默认单位为米(m)'" @on-change="getStepNumber"></v-num-input>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					7.Borg 评分        
				</div>
				<div class="goal-right">
					<v-selection :selections="scores" @on-change="onParamChange('borgScore', $event)"></v-selection>
				</div>
				<div class="goal-left">
					胸痛评分       
				</div>
				<div class="goal-right">
					<v-selection :selections="scores" @on-change="onParamChange('chestPainScore', $event)"></v-selection>
				</div>
				<div class="goal-left">
					呼吸评分       
				</div>
				<div class="goal-right">
					<v-selection :selections="scores" @on-change="onParamChange('breathScore', $event)"></v-selection>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					8.跌倒风险     
				</div>
				<div class="goal-right">
					<v-selection :selections="scores" @on-change="onParamChange('riskScore', $event)"></v-selection>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>9.运动前血压高压 : <strong>{{beforeHighPressure}} mmHg</strong></span>     
				</div>
				<div class="goal-right">
					<v-num-input :min="0" :max="200" :placeholder="'默认单位为毫摩尔每升(mmol/L)'" @on-change="getBeforeHighPressure"></v-num-input>
				</div>
				<div class="goal-left">
					<span>运动前血压低压 : <strong>{{beforeLowPressure}}mmHg</strong></span>     
				</div>
				<div class="goal-right">
					<v-num-input :min="0" :max="200" :placeholder="'默认单位为毫摩尔每升(mmol/L)'" @on-change="getBeforeLowPressure"></v-num-input>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>10.运动后血压高压 : <strong>{{afterHighPressure}}mmHg</strong></span>     
				</div>
				<div class="goal-right">
					<v-num-input :min="0" :max="200" :placeholder="'默认单位为毫摩尔每升(mmol/L)'" @on-change="getAfterHighPressure"></v-num-input>
				</div>
				<div class="goal-left">
					<span>运动后血压低压 : <strong>{{afterLowPressure}}mmHg</strong></span>     
				</div>
				<div class="goal-right">
					<v-num-input :min="0" :max="200" :placeholder="'默认单位为毫摩尔每升(mmol/L)'" @on-change="getAfterLowPressure"></v-num-input>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>11.运动前心率 : <strong>{{beforeHeartRate}}次/分钟</strong></span>     
				</div>
				<div class="goal-right">
					<v-num-input :min="0" :max="200" :placeholder="'默认单位为次/分钟'" @on-change="getBeforeHeartRate"></v-num-input>
				</div>
				<div class="goal-left">
					<span>运动后心率 : <strong>{{afterHeartRate}}次/分钟</strong></span>
				</div>
				<div class="goal-right">
					<v-num-input :min="0" :max="200" :placeholder="'默认单位为次/分钟'" @on-change="getAfterHeartRate"></v-num-input>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<Button type="info" @click="submitData">提交</Button>
				</div>
				<div class="goal-right" style="font-size:16px;">(注：填写提交后不可更改，请确认后提交）</div>
			</div>
		</div>
	</div>
</template>

<script>
import VSelection from './components/Selection'
import VMultiplayChooser from './components/multiplyChooser'
import VNumInput from './components/numInput'
import _ from 'lodash'


	export default {
		components: {
			VSelection,
			VNumInput,
			VMultiplayChooser
		},
		data () {
			return {
				isUidError: false,
				uidErrorTxt: '',
				userId: '',
				isSport: {},
				sports: [],
				sportTimes: {},
				sportDegree: {},
				sportReason: {},
				borgScore: {},
				chestPainScore: {},
				breathScore: {},
				riskScore: {},
				stepNumber: '',
				beforeHighPressure: '',
				beforeLowPressure: '',
				afterHighPressure: '',
				afterLowPressure: '',
				beforeHeartRate: '',
				afterHeartRate: '',
				scores: [
					{
						label: '0分',
						value: '0'
					},
					{
						label: '1分',
						value: '1'
					},
					{
						label: '2分',
						value: '2'
					},
					{
						label: '3分',
						value: '3'
					},
					{
						label: '4分',
						value: '4'
					},
				],
				isList: [
					{
						label: '是',
						value: '是'
					},
					{
						label: '否',
						value: '否'
					}
				],
				sportTargetList: [
					{
						label: '步行',
						value: '步行'
					},
					{
						label: '广场舞',
						value: '广场舞'
					},
					{
						label: '太极',
						value: '太极'
					},
					{
						label: '做家务',
						value: '做家务'
					},
					{
						label: '打球',
						value: '打球'
					},
					{
						label: '买东西',
						value: '买东西'
					},
					{
						label: '跑步',
						value: '跑步'
					}
				],
				sportNumList:[
					{
						label: '1',
						value: '1'
					},
					{
						label: '2',
						value: '2'
					},
					{
						label: '3',
						value: '3'
					},
					{
						label: '4',
						value: '4'
					},
					{
						label: '5',
						value: '5'
					},
					{
						label: '6',
						value: '6'
					},
					{
						label: '7',
						value: '7'
					},
				],
				sportDegreeList: [
					{
						label: '很轻松、讲话自如',
						value: '很轻松、讲话自如'
					},
					{
						label: '有点累，不太能讲话',
						value: '有点累，不太能讲话'
					},
					{
						label: '很累，感觉喉咙发紧，心跳很快',
						value: '很累，感觉喉咙发紧，心跳很快'
					},
				],
				sportReasonList: [
					{
						label: '担心病情不允许',
						value: '担心病情不允许'
					},
					{
						label: '怕摔倒',
						value: '怕摔倒'
					},
					{
						label: '不方便',
						value: '不方便'
					},
					{
						label: '没时间',
						value: '没时间'
					},
					{
						label: '懒得运动',
						value: '懒得运动'
					},
				]
			}
		},
		methods: {
			onParamChange (attr, val) {
				this[attr] = val
				console.log(val)
			},
			checkUserId (data) {
				this.isUidError = false;
				let userid = Number(data);
				if(data === ''){//用户点击了但什么都没输入
					this.isUidError = true;
					this.uidErrorTxt = 'Please enter the user ID';
				}else if(isNaN(userid) || userid === 0){//用户输入了空格或者带有英文或者数字0
					this.isUidError = true;
					this.uidErrorTxt = 'Please enter the correct digital format';
				}else{
					let reqParams = {
						uid: userid
					}
					this.$http.post(this.HOST + '/admin/check_userId', reqParams).then((res) => {
						console.log(res);
						if(res.body.status === '200' && res.body.datas.length === 0){
							this.isUidError = true;
							this.uidErrorTxt = 'The user does not exist';
						}
					}, (err) => {
						console.log(err)
					})
				}
			},
			getBeforeHighPressure (data) {
				this.beforeHighPressure = data
			},
			getBeforeLowPressure (data) {
				this.beforeLowPressure = data
			},
			getAfterHighPressure (data) {
				this.afterHighPressure = data
			},
			getAfterLowPressure (data) {
				this.afterLowPressure = data
			},
			getBeforeHeartRate (data) {
				this.beforeHeartRate = data
			},
			getAfterHeartRate (data) {
				this.afterHeartRate = data
			},
			getStepNumber (data) {
				this.stepNumber = data
			},
			submitData () {
				let sportsArray = _.map(this.sports, (item) => {
					return item.value
				})
				let reqParams = {
					uid: Number(this.userId),
					isSport: this.isSport.value,
					sports: sportsArray.join(','),
					sportTimes: this.sportTimes.value,
					sportDegree: this.sportDegree.value,
					sportReason: this.sportReason.value,
					stepNumber: this.stepNumber,
					borgScore : this.borgScore.value,
			        chestPainScore : this.chestPainScore.value,
			        breathScore : this.breathScore.value,
			        riskScore: this.riskScore.value,
			        beforeHighPressure: this.beforeHighPressure,
			        beforeLowPressure: this.beforeLowPressure,
			        afterHighPressure: this.afterHighPressure,
			        afterLowPressure: this.afterLowPressure,
			        beforeHeartRate: this.beforeHeartRate,
			        afterHeartRate: this.afterHeartRate
				}

				if(this.isUidError){
					this.$Message.warning("请重新输入用户ID");
					return ;
				}else if(this.userId === ''||reqParams.beforeHighPressure === ''||reqParams.beforeLowPressure === ''||reqParams.afterHighPressure === ''||reqParams.afterLowPressure === ''||reqParams.beforeHeartRate === ''||reqParams.afterHeartRate === ''||reqParams.stepNumber === '' ||reqParams.sports === ''||reqParams.isSport === undefined||reqParams.sportTimes === undefined||reqParams.sportDegree === undefined||reqParams.sportReason === undefined||reqParams.borgScore === undefined||reqParams.chestPainScore === undefined||reqParams.breathScore === undefined||reqParams.riskScore === undefined){
					this.$Message.warning('请填写完整信息再提交');  
					return ;
				}else{
					//查询用户的evaluation否是否已经填写过
					this.$http.get(this.HOST + '/user/get_evaluation', {params: {uid: reqParams.uid}}).then((res)=> {
						console.log(res.body.datas[0]);
						let isevaluation = res.body.datas[0].isevaluation
						if(isevaluation === 1){
							this.$Message.warning("该用户已经填写过,不可再次填写！！！");
						}else{
							//用户没填写过首要评价，将信息保存到数据库
							this.$http.post(this.HOST + '/user/evaluation', reqParams).then((res)=>{
								console.log(res);
								if(res.body.sign === '1'){
									//保存到数据库成功后，将user的evaluation状态修改
									this.$http.post(this.HOST + '/user/change_evaluation', reqParams).then((res)=> {
									if(res.body.sign === '1'){
										//修改用户的evaluation状态成功
										this.$Message.info(res.body.message);//填写成功
										this.$router.go(0);
									}
									},(err)=> {
										//修改用户的evaluation状态失败
										this.$Message.info(res.body.message);
									})
				      			}else{
				      				//将user的evaluation状态修改失败
				      				this.$Message.info(res.body.message);
				      			}
							}, (err)=>{
								//将user的evaluation状态修改失败
								console.log(err);
							})
						}
					}, (err)=> {
						//查询用户的evaluation失败
						console.log(err);
					})
				}
			}
		}
	}
</script>

<style>
	.goal-form{
		margin: 0 auto;
		background: #fff;
		padding: 20px 20px 20px 20px;
		font: 12px Arial, Helvetica, sans-serif;
		color: #666;
	}
	.goal-line{
		clear: both;
		padding-bottom: 20px;
		font-size: 20px;
		padding: 0px 0px 20px 14px;
		display: block;
		border-bottom:1px solid #E4E4E4;
		margin: -10px -15px 30px -10px;;

	}
	.goal-left{
		display: inline-block;
		margin-left: 30px;
	}

	.goal-right{
		display: inline-block;
		margin-left: 15px;
	}

</style>

