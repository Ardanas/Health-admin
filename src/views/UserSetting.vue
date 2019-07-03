<template>
	<div class="user_setting animated fadeIn">
		<div class="goal-form">
			<div class="goal-line">
				<h1 style="text-align:center; margin-bottom: 10px;">修改用户目标</h1>
			</div>
			<!--运动目标设置-->
			<div class="first-goal">
				<div class="goal-line">
					<div class="goal-left">
						<h3><strong>★请输入要修改用户的id:</strong></h3>
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
					<h3>1.修改运动目标</h3>
				</div>
				<div class="goal-line">
					<div class="goal-left">
						<span>(1)选择要修改哪个目标？</span>
					</div>
					<div class="goal-right">
						<v-selection :selections="whichGoalList" @on-change="onParamChange('whichSportGoal', $event)"></v-selection>
					</div>
				</div>
				<div class="goal-line">
					<div class="goal-left">
						<span>(2)要求一周用户运动几次？</span>
					</div>
					<div class="goal-right">
						<v-selection :selections="sportTimesList" @on-change="onParamChange('sportTimes', $event)"></v-selection>
					</div>
				</div>
				<div class="goal-line">
					<div class="goal-left">
						<span>(3)每次运动几分钟？</span>
					</div>
					<div class="goal-right">
						<v-selection :selections="sportTimeList" @on-change="onParamChange('sportTime', $event)"></v-selection>
					</div>
				</div>
				<div class="goal-line">
					<div class="goal-left">
						<span>(4)运动强度是？</span>
					</div>
					<div class="goal-right">
						<v-selection :selections="sportStrengthList" @on-change="onParamChange('sportStrength', $event)" class="s_strength"></v-selection>
					</div>
				</div>
				<div class="goal-line">
					<Button type="primary"  size="large" @click="modifySportGoal">确定修改</Button>	
				</div>
			</div>
			
			
			<!--饮食目标设置-->
			<div class="second-goal">
				<div class="goal-line">
					<h3>2.修改饮食目标</h3>
				</div>
				<div class="goal-line">
					<div class="goal-left">
						<span>(1)选择要修改哪个目标？</span>
					</div>
					<div class="goal-right">
						<v-selection :selections="whichGoalList" @on-change="onParamChange('whichFoodGoal', $event)"></v-selection>
					</div>
				</div>
				<div class="goal-line">
					<div class="goal-left">
						<span>(2)要求用户饮食目标要达到多少分？</span>
					</div>
					<div class="goal-right">
						<v-selection :selections="foodScoreList" @on-change="onParamChange('foodScore', $event)"></v-selection>
					</div>
				</div>
				<div class="goal-line">
					<Button type="primary"  size="large" @click="modifyFoodGoal">确定修改</Button>	
				</div>
			</div>
			
			<!--压力目标设置-->
			<div class="third-goal">
				<div class="goal-line">
					<h3>3.修改压力目标</h3>
				</div>
				<div class="goal-line">
					<div class="goal-left">
						<span>(1)选择要修改哪个目标？</span>
					</div>
					<div class="goal-right">
						<v-selection :selections="whichGoalList" @on-change="onParamChange('whichPressureGoal', $event)"></v-selection>
					</div>
				</div>
				<div class="goal-line">
					<div class="goal-left">
						<span>(2)要求用户将压力控制在多少分以下？</span>
					</div>
					<div class="goal-right">
						<v-selection :selections="pressureScoreList" @on-change="onParamChange('pressureScore', $event)"></v-selection>
					</div>
				</div>
			</div>
			<div class="goal-line">
				<Button type="primary"  size="large" @click="modifyPressureGoal">确定修改</Button>	
			</div>
		</div>

		<div class="goal-form" style="margin-top: 30px;">
			<div class="goal-line">
				<h1 style="text-align:center; margin-bottom: 10px;">设置医护信息</h1>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>1.医护姓名：</span>
				</div>
				<div class="goal-left">
					<input type="text" placeholder="请输入医护的名字" v-model="nurseName">
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>2.医护职位：</span>
				</div>
				<div class="goal-left">
					<input type="text" placeholder="请输入医护的职位" v-model="nursePosition">
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>3.医护号码：</span>
				</div>
				<div class="goal-left">
					<input type="text" placeholder="输入正确的手机号码" v-model="nursePhone" @blur ="checkphone" @click="clearphone"/>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>4.医护微信：</span>
				</div>
				<div class="goal-left">
					<input type="text" placeholder="输入正确的微信号" v-model="nurseWechat" />
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>5.医护  QQ：</span>
				</div>
				<div class="goal-left">
					<input type="text" placeholder="输入正确的qq号" v-model="nurseQQ" />
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>6.医护简介：</span>
				</div>
				<div class="goal-left">
					<textarea name="" id="" cols="30" rows="5" v-model="nurseIntro"></textarea>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>7.医护头像：</span>
				</div>
				<div class="goal-left">
					<input type="file" @change="addImg($event)" multiple="multiple">
				</div>
			</div>
			<div class="goal-line">
				<Button type="primary" style="margin-left: 30px;" size="large" @click="inNurseMsg">确定发布</Button>
			</div>
		</div>

		<div class="goal-form" style="margin-top: 30px;">
			<div class="goal-line">
				<h1 style="text-align:center; margin-bottom: 10px;">添加本地视频</h1>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>1.视频分类：</span>
				</div>
				<div class="goal-left">
					<v-selection :selections="videoTypeList" @on-change="onParamChange('localVideoType', $event)"></v-selection>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>2.视频标题：</span>
				</div>
				<div class="goal-left">
					<input type="text" placeholder="请输入视频标题" v-model="videoLocalTitle">
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>3.视频简介：</span>
				</div>
				<div class="goal-left">
					<textarea name="" id="" cols="30" rows="5" v-model="videoLocalIntro"></textarea>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>4.选择视频：</span>
				</div>
				<div class="goal-left">
					<input type="file" @change="chooseLocalVideo($event)" multiple="multiple">
				</div>
			</div>
			<div class="goal-line">
				<Button type="primary" style="margin-left: 30px;" size="large" @click="inLocalVideo">确定发布</Button>
			</div>
		</div>

		<div class="goal-form" style="margin-top: 30px;">
			<div class="goal-line">
				<h1 style="text-align:center; margin-bottom: 10px;">添加网络视频</h1>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>1.视频分类：</span>
				</div>
				<div class="goal-left">
					<v-selection :selections="videoTypeList" @on-change="onParamChange('netWorkVideoType', $event)"></v-selection>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>2.视频标题：</span>
				</div>
				<div class="goal-left">
					<input type="text" placeholder="请输入视频标题" v-model="videoNetWorkTitle">
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>3.视频简介：</span>
				</div>
				<div class="goal-left">
					<textarea name="" id="" cols="30" rows="5" v-model="videoNetWorkIntro"></textarea>
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>4.视频封面：</span>
				</div>
				<div class="goal-left">
					<input type="file" @change="chooseNetWorkImg($event)" multiple="multiple">
				</div>
			</div>
			<div class="goal-line">
				<div class="goal-left">
					<span>5.视频链接：</span>
				</div>
				<div class="goal-left">
					<input type="text" placeholder="请输入视频链接" v-model="videoNetWorkLink">
				</div>
			</div>
			<div class="goal-line">
				<Button type="primary" style="margin-left: 30px;" size="large" @click="inNetWorkVideo">确定发布</Button>
			</div>
		</div>


	</div>
	
</template>

<script>
	import VSelection from './components/Selection'
	import VNumInput from './components/numInput'


	export default {
		data () {
			return {
				userId: '',
				isUidError: false,
				uidErrorTxt: '',
				imgData: {
		            accept: 'image/gif, image/jpeg, image/png, image/jpg',
		        },
		        videoData: {
		            accept: 'video/mp4, video/ogg, video/webm',
		        },
		        imgPath: '',
		        netWorkImgPath: '',
		        videoPath: '',
				nurseName: '',
				nursePosition: '',
				nursePhone: '',
				nurseWechat: '',
				nurseQQ: '',
				nurseIntro: '',
				pressureScore: {},
				foodScore: {},
				sportTimes: {},
	    		sportTime: {},
	    		sportStrength: {},
	    		isSmoke: {},
	    		whichSportGoal: {},
	    		whichFoodGoal: {},
	    		whichPressureGoal: {},
	    		whichGoalList: [
		    		{
			        	label: '1',
			        	value: 1
			        },
			        {
			        	label: '2',
			        	value: 2
			        },
			        {
			        	label: '3',
			        	value: 3
			        },
	    		],
				sportTimesList: [
			    	{
			        	label: '0',
			        	value: 0
			        },
			        {
			        	label: '1',
			        	value: 1
			        },
			        {
			        	label: '2',
			        	value: 2
			        },
			        {
			        	label: '3',
			        	value: 3
			        },
			        {
			        	label: '4',
			        	value: 4
			        },
			        {
			        	label: '5',
			        	value: 5
			        },
			        {
			        	label: '6',
			        	value: 6
			        },
			        {
			        	label: '7',
			        	value: 7
			        },
		    	],
		    	sportTimeList: [
			    	{
			        	label: '10',
			        	value: 10
			        },
			    	{
			        	label: '20',
			        	value: 20
			        },
			        {
			        	label: '30',
			        	value: 30
			        },
			        {
			        	label: '40',
			        	value: 40
			        },
			        {
			        	label: '50',
			        	value: 50
			        },
			        {
			        	label: '60',
			        	value: 60
			        }
		    	],
		    	sportStrengthList: [
			    	{
			        	label: '1. 轻微，运动时感觉可以讲话，甚至唱歌',
			        	value: '1. 轻微，运动时感觉可以讲话，甚至唱歌'
			        },
			        {
			        	label: '2. 中等，运动时感觉有些费力，讲话不轻松',
			        	value: '2. 中等，运动时感觉有些费力，讲话不轻松'
			        },
			        {
			        	label: '3. 较高，运动时感觉很费力，不能讲话，喉咙发紧',
			        	value: '3. 较高，运动时感觉很费力，不能讲话，喉咙发紧'
			        },
		    	],
		    	foodScoreList: [
			    	{
			    		label: '0',
			    		value: 0
			    	},
			    	{
			    		label: '10',
			    		value: 10
			    	},
			    	{
			    		label: '20',
			    		value: 20
			    	},
			    	{
			    		label: '30',
			    		value: 30
			    	},
			    	{
			    		label: '40',
			    		value: 40
			    	},
			    	{
			    		label: '50',
			    		value: 50
			    	},
			    	{
			    		label: '60',
			    		value: 60
			    	},
			    	{
			    		label: '70',
			    		value: 70
			    	},
			    	{
			    		label: '80',
			    		value: 80
			    	},
			    	{
			    		label: '90',
			    		value: 90
			    	},
			    	{
			    		label: '100',
			    		value: 100
			    	}
		    	],
		    	pressureScoreList: [
			    	{
			    		label: '0',
			    		value: 0
			    	},
			    	{
			    		label: '1',
			    		value: 1
			    	},
			    	{
			    		label: '2',
			    		value: 2
			    	},
			    	{
			    		label: '3',
			    		value: 3
			    	},
			    	{
			    		label: '4',
			    		value: 4
			    	},
			    	{
			    		label: '5',
			    		value: 5
			    	},
			    	{
			    		label: '6',
			    		value: 6
			    	},
			    	{
			    		label: '7',
			    		value: 7
			    	},
			    	{
			    		label: '8',
			    		value: 8
			    	},
			    	{
			    		label: '9',
			    		value: 9
			    	}
		    	],
		    	isSmokeList: [
			    	{
			    		label: '停止吸烟',
			    		value: '停止吸烟'
			    	},
			    	{
			    		label: '偶尔抽',
			    		value: '偶尔抽'
			    	},
			    	{
			    		label: '经常抽',
			    		value: '经常抽'
			    	}
		    	],
		    	videoLocalTitle: '',
		    	videoLocalIntro: '',
		    	videoNetWorkTitle: '',
		    	videoNetWorkIntro: '',
		    	videoNetWorkLink: '',
		    	localVideoType: {},
		    	netWorkVideoType: {},
		    	videoTypeList: [
			    	{
			        	label: '运动篇',
			        	value: 1
			        },
			        {
			        	label: '放松技巧',
			        	value: 2
			        },
			        {
			        	label: '急救篇',
			        	value: 3
			        },
			        {
			        	label: '生活篇',
			        	value: 4
			        },
		    	],
		    	localVideoLenght: 0,
		    	localVideoFormat: false,
			}
		},
		components: {
			VSelection,
			VNumInput
		},
		methods: {
			onParamChange (attr, val) {
	    		this[attr] = val;
		        console.log(val);
	    	},
			checkUserId (data) {
				this.isUidError = false;
				let userid = Number(data);
				console.log(userid);
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
	    	checkphone () {
				let phone = this.userPhone;
		        if((!(/^1[34578]\d{9}$/.test(phone)) && (phone !== ''))){ 
		          this.phoneTxt = "手机号码有误，请重填" ;  
		        }
			},
			clearphone () {
				this.phoneTxt = '';
			},
			inNurseMsg () {
				let reqParams = {
					name: this.nurseName,
					position: this.nursePosition,
					phone: this.nursePhone,
					wechat: this.nurseWechat,
					qq: this.nurseQQ,
					introduction: this.nurseIntro,
					pic_url: this.imgPath
				}
				console.log(reqParams);
				this.$http.post(this.HOST + '/admin/in_nurse', reqParams).then((res) => {
					console.log(res);
					if(res.body.sign === '1'){
			            this.$Message.info('发布成功');
					}else{
			            this.$Message.warning('发布失败');
					}
				}, (err) => {
					console.log(err);
				})
			},
			addImg (e) {
				let imgMsg = e.target.files[0]; 
				if(imgMsg !== undefined){
					let type = imgMsg.type;//文件的类型，判断是否是图片  
		            let size = imgMsg.size;//文件的大小，判断图片的大小 
		            let name = imgMsg.name;//文件的名字，判断图片的大小 
		            let address = '/nurse/img';
		            if(this.imgData.accept.indexOf(type) == -1){  
		                this.$Message.warning('请选择我们支持的图片格式！');  
		                return false;  
		            }
		            if(size > 3145728){  
		                this.$Message.warning('请选择3M以内的图片！');  
		                return false;  
		            }    
		            console.log(imgMsg);
		            let form = new FormData();   
		            form.set('file',imgMsg); 
		            form.append('address',address); 
		            this.$http.post(this.HOST + '/admin/file/uploadImg', form, {  
		                headers:{'Content-Type':'application/x-www-form-urlencoded'}
		            }).then((res) => {
		            	console.log(res);
		            	if(res.body.sign === '1'){
		            		this.imgPath = res.body.datas.file[0].path;
		            		console.log(this.imgPath);
		            	}
		            }, (err) => {
		            	console.log(err);
		            })
				}

	            
	            
			},
			chooseLocalVideo (e) {
				let videoMsg = e.target.files[0];
				this.localVideoLenght = e.target.files.length;

				if(this.localVideoLenght !== 0){
					let type = videoMsg.type;
					if(this.videoData.accept.indexOf(type) == -1){  
		                this.$Message.warning('视频格式不支持！');  
		            }else{
		            	this.localVideoFormat = true; //格式通过
		            	let form = new FormData();   
			            form.set('file',videoMsg); 
			            this.$http.post(this.HOST + '/admin/file/uploadVideo', form, {  
			                headers:{'Content-Type':'multipart/form-data'}
			            }).then((res) => {
			            	console.log(res);
			            	if(res.body.sign === '1'){
			            		this.videoPath = res.body.datas.file[0].path;
			            	}
			            }, (err) => {
			            	console.log(err);
			            })
		            }
				}

			},
			chooseNetWorkImg (e) {
				let imgMsg = e.target.files[0];  
	            let type = imgMsg.type;//文件的类型，判断是否是图片  
	            let size = imgMsg.size;//文件的大小，判断图片的大小 
	            let name = imgMsg.name;//文件的名字，判断图片的大小 
	            if(this.imgData.accept.indexOf(type) == -1){  
	                this.$Message.warning('请选择我们支持的图片格式！');  
	                return false;  
	            }
	            if(size > 3145728){  
	                this.$Message.warning('请选择3M以内的图片！');  
	                return false;  
	            }    
	            console.log(imgMsg);
	            let form = new FormData();   
	            form.set('file',imgMsg); 
	            this.$http.post(this.HOST + '/admin/file/uploadNetWorkImg', form, {  
	                headers:{'Content-Type':'application/x-www-form-urlencoded'}
	            }).then((res) => {
	            	console.log(res);
	            	if(res.body.sign === '1'){
	            		this.netWorkImgPath = res.body.datas.file[0].path;
	            		console.log(this.netWorkImgPath);
	            	}
	            }, (err) => {
	            	console.log(err);
	            })
			},
			inLocalVideo () {
				let v_type = this.localVideoType.value; //未选择 undefined
				let v_tit = this.videoLocalTitle;
				let v_intro = this.videoLocalIntro;
				let v_length = this.localVideoLenght;
				let v_format = this.localVideoFormat;
				let v_path = this.videoPath;
				if(v_type === undefined || v_tit === '' || v_intro === '' || v_length === 0){
					this.$Message.warning("请输入完整信息");
				}else if(!v_format) {
					this.$Message.warning("视频格式不支持！");
				}else{
					let reqParams = {
						v_type: v_type,
						v_tit: v_tit,
						v_intro: v_intro,
						v_path: v_path
					}
					this.$http.post(this.HOST + '/admin/in_localVideo', reqParams).then((res) => {
						console.log(res);
						if(res.body.sign === '1'){
				            this.$Message.info('发布成功');
						}else{
				            this.$Message.warning('发布失败');
						}
					}, (err) => {
						console.log(err);
					})
					
				}
			},
			inNetWorkVideo () {
				let v_type_id = this.netWorkVideoType.value; //未选择 undefined
				let v_tit = this.videoNetWorkTitle;
				let v_intro = this.videoNetWorkIntro;
				let v_link = this.videoNetWorkLink; //链接外网视频地址
				let v_cover = this.netWorkImgPath; //封面
				if(v_type_id === undefined || v_tit === '' || v_intro === '' || v_link === '' || v_cover === ''){
					this.$Message.warning("请输入完整信息");
				}else{
					let reqParams = {
						v_type_id: v_type_id,
						v_tit: v_tit,
						v_intro: v_intro,
						v_link: v_link,
						v_cover: v_cover //封面
					}
					this.$http.post(this.HOST + '/admin/in_netWorkVideo', reqParams).then((res) => {
						console.log(res);
						if(res.body.sign === '1'){
				            this.$Message.info('发布成功');
						}else{
				            this.$Message.warning('发布失败');
						}
					}, (err) => {
						console.log(err);
					})
				}
			},
			modifySportGoal () {
				let uid = Number(this.userId);
				let whichGoal = this.whichSportGoal.value;
				let sTimes = this.sportTimes.value;
	    		let sTime = this.sportTime.value;
	    		let sStrength = this.sportStrength.value;
	    		console.log(sTimes);
	    		if(this.isUidError){
					this.$Message.warning("请重新输入用户ID");
					return ;
				}else if(whichGoal === undefined || sTimes === undefined || sTime === undefined || sStrength === undefined || this.userId === ''){
	    			this.$Message.warning("请填写完整目标信息再提交");
	    		}else{
	    			let reqParams = {
	    				uid: uid,
	    				whichGoal: whichGoal,
	    				sport_time: sTime,
	    				sport_times: sTimes,
	    				sport_strength: sStrength,
	    				sign: 1
	    			}
	    			console.log(reqParams);
	    			//插入数据库
	    			this.$http.post(this.HOST + '/admin/modify_adGoal', reqParams).then((res) =>{
	    				console.log(res);
	    				if(res.body.sign === '1'){
	    					this.$Message.info("修改成功");
	    				}else{
	    					this.$Message.warning("修改失败");
	    				}
	    			}, (err) => {
	    				console.log(err);
	    			})
	    		}
			},
			modifyFoodGoal () {
				let uid = Number(this.userId);
				let whichGoal = this.whichFoodGoal.value;
				let food_score = this.foodScore.value;
	    		if(this.isUidError){
					this.$Message.warning("请重新输入用户ID");
					return ;
				}else if(whichGoal === undefined || food_score === undefined || this.userId === ''){
					this.$Message.warning("请填写完整目标信息再提交");
	    		}else{
	    			let reqParams = {
	    				uid: uid,
	    				whichGoal: whichGoal,
	    				food_score: food_score,
	    				sign: 2
	    			}
	    			//插入数据库
	    			this.$http.post(this.HOST + '/admin/modify_adGoal', reqParams).then((res) =>{
	    				console.log(res);
	    				if(res.body.sign === '1'){
	    					this.$Message.info("修改成功");
	    				}else{
	    					this.$Message.warning("修改失败");
	    				}
	    			}, (err) => {
	    				console.log(err);
	    			})
	    		}
			},
			modifyPressureGoal () {
				let uid = Number(this.userId);
				let whichGoal = this.whichPressureGoal.value;
				let pressure_score = this.pressureScore.value;
	    		if(this.isUidError){
					this.$Message.warning("请重新输入用户ID");
					return ;
				}else if(whichGoal === undefined || pressure_score === undefined || this.userId === ''){
					this.$Message.warning("请填写完整目标信息再提交");
	    		}else{
	    			let reqParams = {
	    				uid: uid,
	    				whichGoal: whichGoal,
	    				pressure_score: pressure_score,
	    				sign: 3
	    			}
	    			//插入数据库
	    			this.$http.post(this.HOST + '/admin/modify_adGoal', reqParams).then((res) =>{
	    				console.log(res);
	    				if(res.body.sign === '1'){
	    					this.$Message.info("修改成功");
	    				}else{
	    					this.$Message.warning("修改失败");
	    				}
	    			}, (err) => {
	    				console.log(err);
	    			});
	    		}
			}
		}
	}
</script>

<style>
	.user_setting{
		width: 95%;
		margin: 2% auto;
	}
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
	.s_strength{
		width: 678px;
	}
</style>