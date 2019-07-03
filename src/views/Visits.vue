<template>
	<div>
		<div class="animated fadeIn info-items">
			<div class="goal-form">
				<div class="goal-line">
					<h1 style="text-align:center; margin-bottom: 10px;">查看总访问次数</h1>
				</div>
				<div class="goal-line">
					<Table :loading="loading1" :columns="columns1" :data="data1" ref="table1" height="480" border></Table>
				</div>
				<div class="goal-line">
					<Button type="primary" size="large" class="exportExcelBtn"><Icon type="ios-download-outline"></Icon>   导出excel</Button>
				</div>
			</div>
		</div>

		<div class="animated fadeIn info-items">
			<div class="goal-form">
				<div class="goal-line">
					<h1 style="text-align:center; margin-bottom: 10px;">查看视频总访问次数</h1>
				</div>
				<div class="goal-line">
					<Table :loading="loading3" :columns="columns3" :data="data3" ref="table3" height="480" border></Table>
				</div>
				<div class="goal-line">
					<Button type="primary" size="large" class="exportExcelBtn"><Icon type="ios-download-outline"></Icon>   导出excel</Button>
				</div>
			</div>
		</div>

		<div class="animated fadeIn info-items">
			<div class="goal-form">
				<div class="goal-line">
					<h1 style="text-align:center; margin-bottom: 10px;">查看登录次数</h1>
				</div>
				<div class="goal-line">
					<Table :loading="loading1" :columns="columns4" :data="data4" ref="table4" height="480" border></Table>
				</div>
				<div class="goal-line">
					<Button type="primary" size="large" class="exportExcelBtn"><Icon type="ios-download-outline"></Icon>   导出excel</Button>
				</div>
			</div>
		</div>

		<div class="animated fadeIn info-items">
			<div class="goal-form">
				<div class="goal-line">
					<h1 style="text-align:center; margin-bottom: 10px;">查找用户具体访问记录</h1>
				</div>
				<div class="goal-line">
					<div class="goal-left">
						<span>(1)Input user ID</span>
					</div>
					<div class="goal-right">
						<Input placeholder="Enter User Id..." v-model="userId" @on-blur="checkUserId(userId)"/>
					</div>
					<div class="goal-right" v-if="isUidError">
						<Alert type="error" show-icon >
					        An error prompt
					        <span slot="desc">
					        	{{uidErrorTxt}}
					        </span>
					    </Alert>
					</div>
				</div>
				<div class="goal-line">
					<div class="goal-left">
						<span>(2)Selection path </span>
					</div>
					<div class="goal-right">
						<v-selection :selections="routePathList" @on-change="onParamChange('whichRoutePath', $event)" style="width: 280px;"></v-selection>
					</div>
				</div>
				<div class="goal-line">
					<div class="goal-left">
						<span>(3)Selection time</span>
					</div>
					<div class="goal-right">
						<DatePicker type="datetime" placeholder="Select start date" @on-change="handleStartChange"></DatePicker> --
			            <DatePicker type="datetime" placeholder="Select end date" @on-change="handleEndChange"></DatePicker>
					</div>
				</div>
				<div class="goal-line" v-if="showTotal">
					<div class="goal-left">
						<span>(4)Total</span>
					</div>
					<div class="goal-right" style="color: red; font-size: 26px;"  v-if="data2.length !== 0">
						{{data2.length}}
					</div>
					<div class="goal-right" style="color: red; font-size: 26px;"  v-else>
						暂无数据
					</div>
				</div>
				<div class="goal-line">
					<Button type="primary" size="large" @click="searchDetailVisit">Click query</Button>
				</div>
				<div class="goal-line">
					<Table :loading="loading2" :columns="columns2" :data="data2" ref="table2" height="380" border></Table>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import VSelection from './components/Selection'
	import util from '../utils/util.js'

	export default {
		data () {
			return {
				showTotal: false,
				userId: '',
				isUidError: false,
				uidErrorTxt: '',
	    		whichRoutePath: {},
				routePathList: [
                    {
                        value: '/goal/sport_goal',
                        label: 'My exercise goal'
                    },
                    {
                        value: '/goal/food_goal',
                        label: 'My dietary goal'
                    },
                    {
                        value: '/goal/pressure_goal',
                        label: 'My stress management goal'
                    },
                    {
                        value: '/goal/smoke_goal',
                        label: 'My smoking cessation goal'
                    },
                    {
                    	value: '/article/nav_type_detail/1',
                        label: 'CR Exercise'
                    },
                    {
                    	value: '/article/nav_type_detail/2',
                        label: 'CR Diet'
                    },
                    {
                    	value: '/article/nav_type_detail/3',
                        label: 'CR Management'
                    },
                    {
                    	value: '/article/nav_type_detail/4',
                        label: 'CR Quit Smoking'
                    },
                    {
                    	value: '/article/nav_type_detail/5',
                        label: 'CR Blood Pressure'
                    },
                    {
                    	value: '/article/nav_type_detail/6',
                        label: 'CR Hyperlipidemia'
                    },
                    {
                    	value: '/article/nav_type_detail/7',
                        label: 'CR First Aid'
                    },
                    {
                    	value: '/article/nav_type_detail/8',
                        label: 'Coronary Heart Disease'
                    },
                    {
                    	value: '/article/nav_type_detail/9',
                        label: 'Blood sugar'
                    },
                    {
                    	value: '/q&a',
                        label: 'Ask the experts'
                    },
                    {
                    	value: '运动篇',
                        label: 'Exercise'
                    },
                    {
                    	value: '放松技巧篇',
                        label: 'Relaxation'
                    },
                    {
                    	value: '急救篇',
                        label: 'Emergency'
                    },
                    {
                    	value: '生活篇',
                        label: 'General life'
                    }
                ],
				startTime: null,
				endTime: null,
				loading1: false,
				columns1: [
					{
						title: 'id',
						key: 'uid',
						sortable: true,
						width: 70
					},
					{
						title: '我的目标',
						key: 'Mygoal',
						sortable: true
					},
					{
						title: '我的步数',
						key: 'Mystep',
						sortable: true
					},
					{
						title: '心脏运动篇',
						key: 'CRE',
						sortable: true
					},
					{
						title: '饮食篇',
						key: 'CRD',
						sortable: true
					},
					{
						title: '戒烟篇',
						key: 'CRQS',
						sortable: true
					},
					{
						title: '压力篇',
						key: 'CRSM',
						sortable: true
					},
					{
						title: '血压篇',
						key: 'CRBP',
						sortable: true
					},
					{
						title: '高血脂篇',
						key: 'CRH',
						sortable: true
					},
					{
						title: '急救篇',
						key: 'CRFA',
						sortable: true
					},
					{
						title: '关于冠心病',
						key: 'ACHD',
						sortable: true
					},
					{
						title: '血糖篇',
						key: 'BS',
						sortable: true
					},
					{
						title: '专家问答',
						key: 'ATE',
						sortable: true
					},
					{
						title: '操作',
						key: 'action',
						width: 80,
						align: 'center',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.show1(params.index);
										}
									}
								}, '查看')
								]);
						}
					}
				],
				data1: [],
				loading2: false,
				columns2: [
					{
						title: 'id',
						key: 'uid',
						sortable: true
					},
					{
						title: '访问地址',
						key: 'route_path',
						sortable: true
					},
					{
						title: '创建时间',
						key: 'created_at',
						sortable: true
					},
					{
						title: '操作',
						key: 'action',
						width: 150,
						align: 'center',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'large'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.show2(params.index);
										}
									}
								}, '查看')
								]);
						}
					}
				],
				data2: [],
				loading3: false,
				columns3: [
					{
						title: 'id',
						key: 'uid',
						sortable: true
					},
					{
						title: '运动篇视频',
						key: 'SV',
						sortable: true
					},
					{
						title: '放松技巧篇视频',
						key: 'RV',
						sortable: true
					},
					{
						title: '急救篇视频',
						key: 'FAV',
						sortable: true
					},
					{
						title: '生活篇视频',
						key: 'LV',
						sortable: true
					},
					{
						title: '操作',
						key: 'action',
						width: 80,
						align: 'center',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.show3(params.index);
										}
									}
								}, '查看')
							]);
						}
					}
				],
				data3: [],
				loading4: false,
				columns4: [
					{
						title: 'id',
						key: 'uid',
						sortable: true
					},
					{
						title: '登录次数',
						key: 'login_times',
						sortable: true
					},
					{
						title: '操作',
						key: 'action',
						width: 80,
						align: 'center',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.show4(params.index);
										}
									}
								}, '查看')
							]);
						}
					}
				],
				data4: [],
			}
		},
		components: {
			VSelection
		},
		methods: {
			onParamChange (attr, val) {
	    		this[attr] = val;
		        console.log(val);
	    	},
			show1 (index) {
				this.$Modal.info({
					title: '详细信息',
					content: `
					<div style="font-size:20px; padding:0 0 20px 10px;">
							id：${this.data1[index].uid}<br>
							我的目标：${this.data1[index].Mygoal}<br>
							我的步数：${this.data1[index].Mystep}<br>
							心脏运动篇：${this.data1[index].CRE}<br>
							饮食篇：${this.data1[index].CRD}<br>
							戒烟篇：${this.data1[index].CRQS}<br>
							压力篇：${this.data1[index].CRSM}<br>
							血压篇：${this.data1[index].CRBP}<br>
							高血脂篇：${this.data1[index].CRH}<br>
							急救篇：${this.data1[index].CRFA}<br>
							关于冠心病：${this.data1[index].ACHD}<br>
							血糖篇：${this.data1[index].BS}<br>
							专家问答篇：${this.data1[index].ATE}
					</div>`
				})
			},
			show2 (index) {
				this.$Modal.info({
					title: '详细信息',
					content: `
					<div style="font-size:20px; padding:0 0 20px 10px;">
							id：${this.data2[index].uid}<br>
							访问地址：${this.data2[index].route_path}<br>
							创建时间：${this.data2[index].created_at}<br>
					</div>`
				})
			},
			show3 (index) {
				this.$Modal.info({
					title: '详细信息',
					content: `
					<div style="font-size:20px; padding:0 0 20px 10px;">
							id：${this.data3[index].uid}<br>
							运动篇：${this.data3[index].SV}<br>
							放松技巧篇：${this.data3[index].RV}<br>
							急救篇：${this.data3[index].FAV}<br>
							生活篇：${this.data3[index].LV}<br>
					</div>`
				})
			},
			show4 (index) {
				this.$Modal.info({
					title: '详细信息',
					content: `
					<div style="font-size:20px; padding:0 0 20px 10px;">
							id：${this.data4[index].uid}<br>
							登录次数：${this.data4[index].login_times}<br>
					</div>`
				})
			},
			handleStartChange(daterange) {
			    this.startTime = daterange;
			},
			handleEndChange(daterange) {
			    this.endTime = daterange;
			},
			searchDetailVisit () {
				let userid = Number(this.userId);
				let routePath = this.whichRoutePath.value;//string
				let startTime = this.startTime;
				let endTime = this.endTime;

				if(this.isUidError){
					this.$Message.warning("Please re-enter the user ID");
					return ;
				}else if(startTime === null || endTime === null || routePath === undefined || this.userId === ''){
					this.$Message.warning("Please fill in the complete information before submitting it.");
					return ;
				}else{
					let reqParams = {
						uid: userid,
						route_path: routePath,
						start_time: startTime,
						end_time: endTime
					}
					this.$http.post(this.HOST + '/admin/get_userDetailVisits', reqParams).then((res) => {
						console.log(res);
						this.$Message.info("查询成功");
						if(res.body.status === '200'){
							let items = res.body.datas;
							for(let index in items){
								items[index].created_at = util.formatUtc(items[index].created_at);
							}
							this.data2 = items;

							this.showTotal = true;
						}
					}, (err) => {
						console.log(err)
					})
				}
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
			getUserVisits () {
				this.$http.get(this.HOST + '/admin/get_userVisits').then((res) => {
					console.log(res);
					if(res.body.status === '200'){
						console.log("success!!!");
						let items = res.body.datas;
						this.data1 = items;
					}
				}, (err) => {
					console.log(err)
				})
			},
			getVideoVisits () {
				this.$http.get(this.HOST + '/admin/get_videoVisits').then((res) => {
					console.log(res);
					if(res.body.status === '200'){
						let items = res.body.datas;
						this.data3 = items;
					}
				}, (err) => {
					console.log(err)
				})
			},
			getLoginVisits () {
				this.$http.get(this.HOST + '/admin/get_loginVisits').then((res) => {
					console.log(res);
					if(res.body.status === '200'){
						let items = res.body.datas;
						this.data4 = items;
					}
				}, (err) => {
					console.log(err)
				})
			}

		},
		created () {
			this.getUserVisits();
			this.getVideoVisits();
			this.getLoginVisits();
		}

	}
</script>

<style>
</style>