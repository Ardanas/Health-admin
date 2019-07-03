<template>
	<div >
		<div class="animated fadeIn info-items">
			<Row>
				<Col :sm="24" :md="24" :lg="12">
					<h3>用户信息</h3>
				</Col>
			</Row>
			<Table :loading="loading1" :columns="columns1" :data="data1" ref="table1" height="480" border></Table>
			<Button type="primary" size="large" @click="exportData('table1', columns1, data1, '用户信息')" class="exportExcelBtn"><Icon type="ios-download-outline"></Icon>   导出excel</Button>
		</div>
		<Modal
	        v-model="modal1"
	        title="修改用户信息">
	        <div class="showModelItem">
	        	<label>姓名:</label>
	        	<Input v-model="model1Data.uname" clearable style="width: 210px"></Input>
	        	<br>
	        	<label>年龄:</label>
	        	<InputNumber :max="150" :min="1" v-model="model1Data.uage" clearable style="width: 210px" ></InputNumber>
	        	<br>
	        	<label>性别:</label>
	        	<Input v-model="model1Data.usex" clearable style="width: 210px"></Input>
	        	<br>
	        	<label>电话号码:</label>
	        	<InputNumber :max="99999999999" :min="0" v-model="model1Data.uphone" clearable style="width: 210px" ></InputNumber>
	        	<br>
	        	<label>出生日期:</label>
	        	<Input v-model="model1Data.ubirthday" clearable style="width: 210px"></Input>
	        	<br>
	        	<label>诊断:</label>
	        	<Input v-model="model1Data.med_history" clearable style="width: 210px"></Input>
	        	<br>
	        	<label>介入:</label>
	        	<Input v-model="model1Data.cor_intervention" clearable style="width: 210px"></Input>
	        	<br>
	        	<label>居住情况:</label>
	        	<Input v-model="model1Data.lift_situation" clearable style="width: 210px"></Input>
	        	<br>
	        </div>
	        <div slot="footer">
	        	<Button type="text" size="large" @click="modal1_cancel">取消</Button>
	        	<Button type="primary" size="large" @click="modal1_ok">确定修改</Button>
	        </div>
	    </Modal>
		<div class="animated fadeIn info-items">
			<Row>
				<Col :sm="24" :md="24" :lg="12">
					<h3>用户步数信息</h3>
				</Col>
			</Row>
			<Table :loading="loading2" :columns="columns2" :data="data2" ref="table2" height="480" border></Table>
			<Button type="primary" size="large" @click="exportData('table2', columns2, data2, '用户步数信息')" class="exportExcelBtn" ><Icon type="ios-download-outline"></Icon>   导出excel</Button>
		</div>
		<Modal
	        v-model="modal2"
	        title="修改用户步数信息">
	        <div class="showModelItem">
	        	<label>步数:</label>
	        	<InputNumber :max="100000" :min="0" v-model="model2Data.step" clearable style="width: 210px"></InputNumber><br>
	        </div>
	        <div slot="footer">
	        	<Button type="text" size="large" @click="modal2_cancel">取消</Button>
	        	<Button type="primary" size="large" @click="modal2_ok">确定修改</Button>
	        </div>
	    </Modal>
		<div class="animated fadeIn info-items">
			<Row>
				<Col :sm="24" :md="24" :lg="12">
					<h3>用户运动目标信息</h3>
				</Col>
			</Row>
			<Table :columns="columns3" :data="data3" ref="table3" height="480" border></Table>
			<Button type="primary" size="large" @click="exportData('table3', columns3, data3, '用户运动目标信息')" class="exportExcelBtn" ><Icon type="ios-download-outline"></Icon>   导出excel</Button>
		</div>
		<Modal
	        v-model="modal3"
	        title="用户运动目标信息">
	        <div class="showModelItem">
	        	<label>运动时间:</label>
	        	<InputNumber :max="60" :min="0" v-model="model3Data.sport_time" clearable style="width: 210px"></InputNumber><br>
	        	<label>运动次数:</label>
	        	<InputNumber :max="7" :min="0" v-model="model3Data.sport_times" clearable style="width: 210px"></InputNumber><br>
	        	<label>运动强度:</label>
	        	<Input v-model="model3Data.sport_strength" style="width: 210px" class="longInput"></Input><br>
	        </div>
	        <div slot="footer">
	        	<Button type="text" size="large" @click="modal3_cancel">取消</Button>
	        	<Button type="primary" size="large" @click="modal3_ok">确定修改</Button>
	        </div>
	    </Modal>
		<div class="animated fadeIn info-items">
			<Row>
				<Col :sm="24" :md="24" :lg="12">
					<h3>用户饮食目标信息</h3>
				</Col>
			</Row>
			<Table :columns="columns6" :data="data6" ref="table6" height="480" border></Table>
			<Button type="primary" size="large" @click="exportData('table6', columns6, data6, '用户饮食目标信息')" class="exportExcelBtn" ><Icon type="ios-download-outline"></Icon>   导出excel</Button>
		</div>
		<div class="animated fadeIn info-items">
			<Row>
				<Col :sm="24" :md="24" :lg="12">
					<h3>用户压力目标信息</h3>
				</Col>
			</Row>
			<Table :columns="columns7" :data="data7" ref="table7" height="480" border></Table>
			<Button type="primary" size="large" @click="exportData('table7', columns7, data7, '用户压力目标信息')" class="exportExcelBtn" ><Icon type="ios-download-outline"></Icon>   导出excel</Button>
		</div>
		<div class="animated fadeIn info-items">
			<Row>
				<Col :sm="24" :md="24" :lg="12">
					<h3>用户吸烟目标信息</h3>
				</Col>
			</Row>
			<Table :columns="columns8" :data="data8" ref="table8" height="480" border></Table>
			<Button type="primary" size="large" @click="exportData('table8', columns8, data8, '用户吸烟目标信息')" class="exportExcelBtn" ><Icon type="ios-download-outline"></Icon>   导出excel</Button>
		</div>
		<div class="animated fadeIn info-items">
			<Row>
				<Col :sm="24" :md="24" :lg="12">
					<h3>用户评价信息</h3>
				</Col>
			</Row>
			<Table :columns="columns4" :data="data4" ref="table4" height="500" border></Table>
			<Button type="primary" size="large" @click="exportData('table4', columns4, data4, '用户评价信息')" class="exportExcelBtn" ><Icon type="ios-download-outline"></Icon>   导出excel</Button>
		</div>
		<div class="animated fadeIn info-items">
			<Row>
				<Col :sm="24" :md="24" :lg="12">
					<h3>医护信息</h3>
				</Col>
			</Row>
			<Table :columns="columns5" :data="data5" ref="table5" height="480" border></Table>
			<Button type="primary" size="large" @click="exportData('table5', columns5, data5, '医护信息')" class="exportExcelBtn" ><Icon type="ios-download-outline"></Icon>   导出excel</Button>
		</div>
		<Modal
	        v-model="modal5"
	        title="用户运动目标信息">
	        <div class="showModelItem">
	        	<label>姓名:</label>
	        	<Input v-model="model5Data.name" clearable style="width: 210px"></Input>
	        	<br>
	        	<label>年龄:</label>
	        	<Input v-model="model5Data.position" clearable style="width: 210px"></Input>
	        	<br>
	        	<label>电话:</label>
	        	<Input v-model="model5Data.phone" clearable style="width: 210px"></Input>
	        	<br>
	        	<label>WeChat:</label>
	        	<Input v-model="model5Data.wechat" clearable style="width: 210px"></Input>
	        	<br>
	        	<label>QQ:</label>
	        	<Input v-model="model5Data.qq" clearable style="width: 210px"></Input>
	        	<br>
	        	<label>头像:</label>
	        	<Input v-model="model5Data.pic_url" clearable style="width: 210px"></Input>
	        	<br>
	        	<label>简介:</label>
	        	<Input v-model="model5Data.introduction" type="textarea" :autosize="true"/>
	        	<br>
	        </div>
	        <div slot="footer">
	        	<Button type="text" size="large" @click="modal5_cancel">取消</Button>
	        	<Button type="primary" size="large" @click="modal5_ok">确定修改</Button>
	        </div>
	    </Modal>
		<div class="animated fadeIn info-items">
			<Row>
				<Col :sm="24" :md="24" :lg="12">
					<h3>Q&A信息</h3>
				</Col>
			</Row>
			<Table :columns="columns9" :data="data9" ref="table9" height="480" border></Table>
			<Button type="primary" size="large" @click="exportData('table9', columns9, data9, 'Q&A信息')" class="exportExcelBtn" ><Icon type="ios-download-outline"></Icon>   导出excel</Button>
		</div>
		<Modal
	        v-model="modal9"
	        title="修改Q&A信息">
	        <div class="showModelItem">
	        	<label>问题:</label>
	        	<Input v-model="model9Data.question" type="textarea" />
	        	<br>
	        	<label>答案:</label>
	        	<Input v-model="model9Data.answer" type="textarea" />
	        	<br>
	        	<label>预览:</label>
	        	<p v-html="model9Data.answer"></p>
	        </div>
	        <div slot="footer">
	        	<Button type="text" size="large" @click="modal9_cancel">取消</Button>
	        	<Button type="primary" size="large" @click="modal9_ok">确定修改</Button>
	        </div>
	    </Modal>
		<div class="animated fadeIn info-items">
			<Row>
				<Col :sm="24" :md="24" :lg="12">
					<h3>文章信息</h3>
				</Col>
			</Row>
			<Table :columns="columns12" :data="data12" ref="table12" height="480" border></Table>
			<Button type="primary" size="large" @click="exportData('table12', columns12, data12, '文章信息')" class="exportExcelBtn" ><Icon type="ios-download-outline"></Icon>   导出excel</Button>
		</div>
		<div class="animated fadeIn info-items">
			<Row>
				<Col :sm="24" :md="24" :lg="12">
					<h3>本地视频信息</h3>
				</Col>
			</Row>
			<Table :columns="columns10" :data="data10" ref="table10" height="480" border></Table>
			<Button type="primary" size="large" @click="exportData('table10', columns10, data10, '本地视频信息')" class="exportExcelBtn" ><Icon type="ios-download-outline"></Icon>   导出excel</Button>
		</div>
		<div class="animated fadeIn info-items">
			<Row>
				<Col :sm="24" :md="24" :lg="12">
					<h3>网络视频信息</h3>
				</Col>
			</Row>
			<Table :columns="columns11" :data="data11" ref="table11" height="480" border></Table>
			<Button type="primary" size="large" @click="exportData('table11', columns11, data11, '网络视频信息')" class="exportExcelBtn" ><Icon type="ios-download-outline"></Icon>   导出excel</Button>
		</div>
	</div>
	
</template>

<script>
import util from '../utils/util.js'
export default {
	data () {
		return {
			loading1: true,
			loading2: true,
			modal1: false,
			model1Data: {},
			columns1: [
				{
					title: 'id',
					key: 'uid',
					sortable: true
				},
				{
					title: '姓名',
					key: 'uname'
				},
				{
					title: '年龄',
					key: 'uage',
					sortable: true
				},
				{
					title: '性别',
					key: 'usex'
				},
				{
					title: '电话号码',
					key: 'uphone'
				},
				{
					title: '出生日期',
					key: 'ubirthday'
				},
				{
					title: '居住情况',
					key: 'lift_situation'
				},
				{
					title: '创建时间',
					key: 'create_at'
				},
				{
					title: '诊断',
					key: 'med_history'
				},
				{
					title: '介入',
					key: 'cor_intervention'
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
							}, '查看'),
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click: () => {
										let itemObj = this.data1[params.index];
										this.model1Data = Object.assign({}, itemObj);
										//因为数据库保存电话号码是string，表格展示需要转化为整型，
										this.model1Data.uphone = Number(itemObj.uphone);
										//this.model1OldUid = itemObj.uid;
										//this.remove(this.data1,params.index);
										//this.modifyData(params.index);
										this.modal1 = true;
									}
								}
							}, '修改')
							]);
					}
				}
			],
			data1: [],
			modal2: false,
			model2Data: {},
			columns2: [
				{
					title: 'id',
					key: 'uid',
					sortable: true
				},
				{
					title: '步数',
					key: 'step',
					sortable: true
				},
				{
					title: '创建时间',
					key: 'created_at'
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
									size: 'small'
								},
								style: {
									marginRight: '5px'
								},
								on: {
									click: () => {
										this.show2(params.index)
									}
								}
							}, '查看'),
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click: () => {
										let itemObj = this.data2[params.index];
										this.model2Data = Object.assign({}, itemObj);
										this.modal2 = true;
									}
								}
							}, '修改')
							]);
					}
				}
			],
			data2: [],
			modal3: false,
			model3Data: {},
			columns3: [
				{
					title: 'id',
					key: 'uid',
					sortable: true
				},
				{
					title: '运动时间',
					key: 'sport_time',
					sortable: true
				},
				{
					title: '运动次数',
					key: 'sport_times',
					sortable: true
				},
				{
					title: '运动强度',
					key: 'sport_strength'
				},
				{
					title: '创建时间',
					key: 'created_at'
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
										this.show3(params.index)
									}
								}
							}, '查看')/*
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click: () => {
										let itemObj = this.data3[params.index];
										this.model3Data = Object.assign({}, itemObj);
										this.model3Data.sport_time = Number(itemObj.sport_time);
										this.model3Data.sport_times = Number(itemObj.sport_times);
										this.modal3 = true;
									}
								}
							}, '修改')*/
							]);
					}
				}
			],
			data3: [],
			columns4: [
				{
					title: 'id',
					key: 'uid',
					sortable: true
				},
				{
					title: '是否运动',
					key: 'is_sport'
				},
				{
					title: '运动项目',
					key: 'sports'
				},
				{
					title: '运动次数',
					key: 'sport_times',
					sortable: true
				},
				{
					title: '运动强度',
					key: 'sport_degree'
				},
				{
					title: '运动原因',
					key: 'sport_reason'
				},
				{
					title: '6min步行',
					key: 'sport_number',
					sortable: true
				},
				{
					title: 'Borg评分',
					key: 'borg_score',
					sortable: true
				},
				{
					title: '胸痛评分',
					key: 'chest_pain_score',
					sortable: true
				},
				{
					title: '呼吸评分',
					key: 'breath_score',
					sortable: true
				},
				{
					title: '跌倒风险',
					key: 'risk_score',
					sortable: true
				},
				{
					title: '运动前高压',
					key: 'before_high_pressure',
					sortable: true
				},
				{
					title: '运动前低压',
					key: 'before_low_pressure',
					sortable: true
				},
				{
					title: '运动后高压',
					key: 'after_high_pressure',
					sortable: true
				},
				{
					title: '运动后低压',
					key: 'after_low_pressure',
					sortable: true
				},
				{
					title: '运动前血率',
					key: 'before_heart_rate',
					sortable: true
				},
				{
					title: '运动后血率',
					key: 'after_heart_rate',
					sortable: true
				},
				{
					title: '创建时间',
					key: 'create_at'
				},
				{
					title: '操作',
					key: 'action',
					width: 130,
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
										console.log(params.index);
										this.show4(params.index)
									}
								}
							}, '查看'),
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click: () => {
										let index = params.index;
										let datas = this.data4;
										let id = datas[index].uid
										this.remove(datas, index);
										this.removeEvaluation(id);
									}
								}
							}, '删除')
						]);
					}
				}
			],
			data4: [],
			modal5: false,
			model5Data: {},
			columns5: [
				{
					title: 'id',
					key: 'id',
					sortable: true
				},
				{
					title: '姓名',
					key: 'name'
				},
				{
					title: '职位',
					key: 'position'
				},
				{
					title: '电话',
					key: 'phone'
				},
				{
					title: '微信',
					key: 'wechat'
				},
				{
					title: 'QQ',
					key: 'qq'
				},
				{
					title: '简介',
					key: 'introduction'
				},
				{
					title: '图片',
					key: 'pic_url'
				},
				{
					title: '创建时间',
					key: 'created_at'
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
									size: 'small'
								},
								style: {
									marginRight: '5px'
								},
								on: {
									click: () => {
										console.log(params.index);
										this.show5(params.index)
									}
								}
							}, '查看'),
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click: () => {
										let index = params.index;
										let datas = this.data5;
										let id = datas[index].id
										this.remove(datas, index);
										this.removeNurse(id);
									}
								}
							}, '删除'),
							h('Button', {
								props: {
									type: 'warning',
									size: 'small'
								},
								style: {
									marginTop: '5px'
								},
								on: {
									click: () => {
										let itemObj = this.data5[params.index];
										this.model5Data = Object.assign({}, itemObj);
										this.modal5 = true;		
									}
								}
							}, '修改')
							]);
					}
				}
			],
			data5: [],
			columns6: [
				{
					title: 'id',
					key: 'uid',
					sortable: true,
					width: 150
				},
				{
					title: '食物得分',
					key: 'food_score',
					sortable: true,
					width: 150
				},
				{
					title: '创建时间',
					key: 'created_at',
					width: 200
				},
				{
					title: '食物选择',
					key: 'food_checked'
				},
				{
					title: '操作',
					key: 'action',
					width: 100,
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
										console.log(params.index);
										this.show6(params.index)
									}
								}
							}, '查看')
							]);
					}
				}
			],
			data6: [],
			columns7: [
				{
					title: 'id',
					key: 'uid',
					sortable: true
				},
				{
					title: '压力得分',
					key: 'pressure_score',
					sortable: true
				},
				{
					title: '创建时间',
					key: 'created_at'
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
										console.log(params.index);
										this.show7(params.index)
									}
								}
							}, '查看')
							]);
					}
				}
			],
			data7: [],
			columns8: [
				{
					title: 'id',
					key: 'uid',
					sortable: true
				},
				{
					title: '是否吸烟',
					key: 'smoke_whether'
				},
				{
					title: '创建时间',
					key: 'created_at'
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
										console.log(params.index);
										this.show8(params.index)
									}
								}
							}, '查看')
						]);
					}
				}
			],
			data8: [],
			modal9: false,
			model9Data: {},
			columns9: [
				{
					title: 'id',
					key: 'id',
					sortable: true
				},
				{
					title: '问题',
					key: 'question'
				},
				{
					title: '答案',
					key: 'answer'
				},
				{
					title: '创建时间',
					key: 'created_at'
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
									size: 'small'
								},
								style: {
									marginRight: '5px'
								},
								on: {
									click: () => {
										console.log(params.index);
										this.show9(params.index)
									}
								}
							}, '查看'),
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click: () => {
										let index = params.index;
										let datas = this.data9;
										let id = datas[index].id
										this.remove(datas, index);
										this.removeAnswer(id);
									}
								}
							}, '删除'),
							h('Button', {
								props: {
									type: 'warning',
									size: 'small'
								},
								style: {
									marginTop: '5px'
								},
								on: {
									click: () => {
										let itemObj = this.data9[params.index];
										this.model9Data = Object.assign({}, itemObj);
										//因为数据库保存电话号码是string，表格展示需要转化为整型，
										//this.model9Data.uphone = Number(itemObj.uphone);
										//this.model9OldUid = itemObj.id;//获取以前文章id
										//this.remove(this.data1,params.index);
										//this.modifyData(params.index);
										this.modal9 = true;
									}
								}
							}, '修改')
						]);
					}
				}
			],
			data9: [],
			columns10: [
				{
					title: 'id',
					key: 'id',
					sortable: true
				},
				{
					title: '类型',
					key: 'v_type'
				},
				{
					title: '链接',
					key: 'v_url'
				},
				{
					title: '标题',
					key: 'v_tit'
				},
				{
					title: '简介',
					key: 'v_intro'
				},
				{
					title: '创建时间',
					key: 'created_at'
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
									size: 'small'
								},
								style: {
									marginRight: '5px'
								},
								on: {
									click: () => {
										console.log(params.index);
										this.show10(params.index)
									}
								}
							}, '查看'),
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click: () => {
										let index = params.index;
										let datas = this.data10;
										let id = datas[index].id
										this.remove(datas, index);
										this.removeLocalVideo(id);
									}
								}
							}, '删除')
						]);
					}
				}
			],
			data10: [],
			columns11: [
				{
					title: 'id',
					key: 'id',
					sortable: true
				},
				{
					title: '类型',
					key: 'v_type'
				},
				{
					title: '链接',
					key: 'v_cover'
				},
				{
					title: '链接',
					key: 'v_link'
				},
				{
					title: '标题',
					key: 'v_tit'
				},
				{
					title: '简介',
					key: 'v_intro'
				},
				{
					title: '创建时间',
					key: 'created_at'
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
									size: 'small'
								},
								style: {
									marginRight: '5px'
								},
								on: {
									click: () => {
										console.log(params.index);
										this.show11(params.index)
									}
								}
							}, '查看'),
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click: () => {
										let index = params.index;
										let datas = this.data11;
										let id = datas[index].id
										this.remove(datas, index);
										this.removeNetWorkVideo(id);
									}
								}
							}, '删除')
						]);
					}
				}
			],
			data11: [],
			columns12: [
				{
					title: 'id',
					key: 'a_id',
					sortable: true
				},
				{
					title: '标题',
					key: 'a_title'
				},
				{
					title: '类型',
					key: 't_name'
				},
				{
					title: '简介',
					key: 'a_intro'
				},
				{
					title: '创建时间',
					key: 'create_at'
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
									size: 'small'
								},
								style: {
									marginRight: '5px'
								},
								on: {
									click: () => {
										console.log(params.index);
										this.show12(params.index)
									}
								}
							}, '查看'),
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click: () => {
										let index = params.index;
										let datas = this.data12;
										let id = datas[index].a_id
										this.remove(datas, index);
										this.removeArticle(id);
									}
								}
							}, '删除')
						]);
					}
				}
			],
			data12: [],
		}
	},
	methods: {
		exportData (table, columns, data, title) {
			let d = Object.keys(data[0]); //对象的长度
			/*if(table === 'table1'){
				//for(data in )
				data.forEach((value,index,array) => {
				    console.log(index);
				    array[index] == value;    //结果为true
				    console.log(value.med_history);
				
			    });
				//console.log(data.med_history);
			}*/
            this.$refs[table].exportCsv({
                filename: title,
                columns: columns.filter((col, index) => index < columns.length-1),
                data: data.filter((data, index) => index < d.length)
            });
	    },
		modal1_ok () {
			let reqParams = this.model1Data;
			console.log(reqParams);
			if(reqParams.uid === null || reqParams.uage === null || reqParams.uname === ''|| reqParams.sex === ''){
	            this.$Message.warning('修改信息不能为空');
	            this.modal1 = true;
			}else{
				this.$http.post(this.HOST + '/admin/modify_info', reqParams).then((res) =>{
					console.log(res)
					if(res.body.sign === '1'){
						this.$Message.info('修改成功');
			            this.modal1 = false;
					}else{
						this.$Message.warning('修改失败');
			            this.modal1 = true;
					}
				}, (err) => {
					console.log(err);
					this.$Message.warning('服务器错误');
				})
			}
			
        },
        modal1_cancel () {
            this.$Message.info('取消成功');
            this.modal1 = false;
        },
        modal2_ok () {
			let reqParams = this.model2Data;
			console.log(reqParams);

			if(reqParams.step === null){
	            this.$Message.warning('修改信息不能为空');
	            this.modal2 = true;
			}else{
				this.$http.post(this.HOST + '/admin/modify_step', reqParams).then((res) =>{
					console.log(res)
					if(res.body.sign === '1'){
						this.$Message.info('修改成功');
			            this.modal2 = false;
					}else{
						this.$Message.warning('修改失败');
			            this.modal2 = true;
					}
				}, (err) => {
					console.log(err);
					this.modal2 = true;
					this.$Message.warning('服务器错误');
				})
			}
			
        },
        modal2_cancel () {
            this.$Message.info('取消成功');
            this.modal2 = false;
        },
        modal3_ok () {
			let reqParams = this.model3Data;
			console.log(reqParams);

			if(reqParams.sport_time === null || reqParams.sport_times === null || reqParams.strength === ""){
	            this.$Message.warning('修改信息不能为空');
	            this.modal3 = true;
			}else{
				this.$http.post(this.HOST + '/admin/modify_sportGoal', reqParams).then((res) =>{
					console.log(res)
					if(res.body.sign === '1'){
						this.$Message.info('修改成功');
			            this.modal3 = false;
					}else{
						this.$Message.warning('修改失败');
			            this.modal3 = true;
					}
				}, (err) => {
					console.log(err);
					this.modal3 = true;
					this.$Message.warning('服务器错误');
				})
			}
			
        },
        modal3_cancel () {
            this.$Message.info('取消成功');
            this.modal3 = false;
        },
        modal5_ok () {
			let reqParams = this.model5Data;
			console.log(reqParams);

			if(reqParams.name === '' || reqParams.position === '' || reqParams.phone === "" || reqParams.wechat === '' || reqParams.qq === '' || reqParams.introduction === '' || reqParams.pic_url === ''){
	            this.$Message.warning('修改信息不能为空');
	            this.modal5 = true;
			}else{
				this.$http.post(this.HOST + '/admin/modify_nurse', reqParams).then((res) =>{
					console.log(res)
					if(res.body.sign === '1'){
						this.$Message.info('修改成功');
			            this.modal5 = false;
					}else{
						this.$Message.warning('修改失败');
			            this.modal5 = true;
					}
				}, (err) => {
					console.log(err);
					this.modal5 = true;
					this.$Message.warning('服务器错误');
				})
			}
			
        },
        modal5_cancel () {
            this.$Message.info('取消成功');
            this.modal5 = false;
        },
        modal9_ok () {
			let reqParams = this.model9Data;
			console.log(reqParams);

			if(reqParams.question === '' || reqParams.answer === '' ){
	            this.$Message.warning('修改信息不能为空');
	            this.modal9 = true;
			}else{
				this.$http.post(this.HOST + '/admin/modify_answer', reqParams).then((res) =>{
					console.log(res)
					if(res.body.sign === '1'){
						this.$Message.info('修改成功');
			            this.modal9 = false;
					}else{
						this.$Message.warning('修改失败');
			            this.modal9 = true;
					}
				}, (err) => {
					console.log(err);
					this.modal9 = true;
					this.$Message.warning('服务器错误');
				})
			}
			
        },
        modal9_cancel () {
            this.$Message.info('取消成功');
            this.modal9 = false;
        },
		modifyData (index){
			this.$Modal.confirm({
				
				title: '修改用户信息',
                content: `
				<div style="font-size:20px; padding:0 0 20px 10px;">
						id：<input type="text" value="${this.data1[index].uid}" /><br>
						姓名：<input type="text" value="${this.data1[index].uname}"/><br>
						年龄：<input type="text" value="${this.data1[index].uage}"/><br>
						性别：<input type="text" value="${this.data1[index].usex}"/><br>
						出生日期：<input type="text" value="${this.data1[index].ubirthday}"/><br>
						电话号码：<input type="text" value="${this.data1[index].uphone}"/><br>
						诊断：<input type="text" value="${this.data1[index].med_history}"/><br>
						介入：<input type="text" value="${this.data1[index].cor_intervention}"/><br>
						居住情况：<input type="text" value="${this.data1[index].lift_situation}"/><br>
						创建时间：<input type="text" value="${this.data1[index].create_at}"/><br>
				</div>`,
				onOk (){
					alert(this.a);
				}
			})
		},
		show1 (index) {
			this.$Modal.info({
				title: '用户信息',
				content: `
				<div style="font-size:20px; padding:0 0 20px 10px;">
						id：${this.data1[index].uid}<br>
						姓名：${this.data1[index].uname}<br>
						年龄：${this.data1[index].uage}<br>
						性别：${this.data1[index].usex}<br>
						出生日期：${this.data1[index].ubirthday}<br>
						电话号码：${this.data1[index].uphone}<br>
						诊断：${this.data1[index].med_history}<br>
						介入：${this.data1[index].cor_intervention}<br>
						居住情况：${this.data1[index].lift_situation}<br>
						创建时间：${this.data1[index].create_at}
				</div>`
			})
		},
		show2 (index) {
			this.$Modal.info({
				title: '用户步数信息',
				content: `
				<div style="font-size:20px; padding:0 0 20px 10px;">
						id：${this.data2[index].uid}<br>
						步数：${this.data2[index].step}<br>
						创建时间：${this.data2[index].created_at}
				</div>`
			})
		},
		show3 (index) {
			this.$Modal.info({
				title: '用户运动目标信息',
				content: `
				<div style="font-size:20px; padding:0 0 20px 10px;">
						id：${this.data3[index].uid}<br>
						运动时间：${this.data3[index].sport_time}<br>
						运动次数：${this.data3[index].sport_times}<br>
						运动强度：${this.data3[index].sport_strength}<br>
						创建时间：${this.data3[index].created_at}
				</div>`
			})
		},
		show4 (index) {
			this.$Modal.info({
				title: '用户首要评价信息',
				content: `
				<div style="font-size:16px; padding:0 0 20px 10px;">
						id：${this.data4[index].uid}<br>
						是否运动：${this.data4[index].is_sport}<br>
						运动项目：${this.data4[index].sports}<br>
						运动次数：${this.data4[index].sport_times}<br>
						运动强度：${this.data4[index].sport_degree}<br>
						运动原因：${this.data4[index].sport_reason}<br>
						6min步行：${this.data4[index].sport_number}<br>
						Borg评分：${this.data4[index].borg_score}<br>
						胸痛评分：${this.data4[index].chest_pain_score}<br>
						呼吸评分：${this.data4[index].breath_score}<br>
						跌倒风险：${this.data4[index].risk_score}<br>
						运动前高压：${this.data4[index].before_high_pressure}<br>
						运动前低压：${this.data4[index].before_low_pressure}<br>
						运动后高压：${this.data4[index].after_high_pressure}<br>
						运动后低压：${this.data4[index].after_low_pressure}<br>
						运动前心率：${this.data4[index].before_heart_rate}<br>
						运动后心率：${this.data4[index].after_heart_rate}<br>
						创建时间：${this.data4[index].create_at}
				</div>`
			})
		},
		show5 (index) {
			this.$Modal.info({
				title: '医护信息',
				content: `
				<div style="font-size:16px; padding:0 0 20px 10px;">
						id：${this.data5[index].id}<br>
						姓名：${this.data5[index].name}<br>
						职位：${this.data5[index].position}<br>
						电话：${this.data5[index].phone}<br>
						微信：${this.data5[index].wechat}<br>
						Q Q：${this.data5[index].qq}<br>
						简介：${this.data5[index].introduction}<br>
						创建时间：${this.data5[index].created_at}
				</div>`
			})
		},
		show6 (index) {
			this.$Modal.info({
				title: '用户饮食目标信息',
				content: `
				<div style="font-size:16px; padding:0 0 20px 10px;">
						id：${this.data6[index].uid}<br>
						食物得分：${this.data6[index].food_score}<br>
						食物选择：${this.data6[index].food_checked}<br>
						创建时间：${this.data6[index].created_at}
				</div>`
			})
		},
		show7 (index) {
			this.$Modal.info({
				title: '用户压力目标信息',
				content: `
				<div style="font-size:16px; padding:0 0 20px 10px;">
						id：${this.data7[index].uid}<br>
						压力得分：${this.data7[index].pressure_score}<br>
						创建时间：${this.data7[index].created_at}
				</div>`
			})
		},
		show8 (index) {
			this.$Modal.info({
				title: '用户吸烟目标信息',
				content: `
				<div style="font-size:16px; padding:0 0 20px 10px;">
						id：${this.data8[index].uid}<br>
						是否吸烟：${this.data8[index].smoke_whether}<br>
						创建时间：${this.data8[index].created_at}
				</div>`
			})
		},
		show9 (index) {
			this.$Modal.info({
				title: 'Q&A信息',
				content: `
				<div style="font-size:16px; padding:0 0 20px 10px;">
						id：${this.data9[index].id}<br>
						问题：${this.data9[index].question}<br>
						答案：${this.data9[index].answer}<br>
						创建时间：${this.data9[index].created_at}
				</div>`
			})
		},
		show10 (index) {
			this.$Modal.info({
				title: '本地视频信息',
				content: `
				<div style="font-size:16px; padding:0 0 20px 10px;">
						id：${this.data10[index].id}<br>
						类型：${this.data10[index].v_type}<br>
						链接：${this.data10[index].v_url}<br>
						标题：${this.data10[index].v_tit}<br>
						简介：${this.data10[index].v_intro}<br>
						创建时间：${this.data10[index].created_at}
				</div>`
			})
		},
		show11 (index) {
			this.$Modal.info({
				title: '网络视频信息',
				content: `
				<div style="font-size:16px; padding:0 0 20px 10px;">
						id：${this.data11[index].id}<br>
						类型：${this.data11[index].v_type}<br>
						链接：${this.data11[index].v_url}<br>
						标题：${this.data11[index].v_tit}<br>
						简介：${this.data11[index].v_intro}<br>
						创建时间：${this.data11[index].created_at}
				</div>`
			})
		},
		show12 (index) {
			this.$Modal.info({
				title: '文章信息',
				content: `
				<div style="font-size:16px; padding:0 0 20px 10px;">
						id：${this.data12[index].a_id}<br>
						标题：${this.data12[index].a_title}<br>
						类型：${this.data12[index].t_name}<br>
						简介：${this.data12[index].a_intro}<br>
						创建时间：${this.data12[index].created_at}
				</div>`
			})
		},
		remove (dataList, index) {
			dataList.splice(index, 1);
		},
		removeEvaluation (index) {
			this.$http.get(this.HOST + '/admin/del_evaluation', {params: {uid:index}}).then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					this.$Message.info("删除成功");
				}else{
					this.$Message.warning("删除失败"); 
				}
			}, (err) => {
				console.log(err);
			})
		},
		removeNurse (index) {
			this.$http.get(this.HOST + '/admin/del_nurse', {params: {id:index}}).then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					this.$Message.info("删除成功");
				}else{
					this.$Message.warning("删除失败"); 
				}
			}, (err) => {
				console.log(err);
			})
		},
		removeAnswer (index) {
			this.$http.get(this.HOST + '/admin/del_answer', {params: {id:index}}).then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					this.$Message.info("删除成功");
				}else{
					this.$Message.warning("删除失败");
				}
			}, (err) => {
				console.log(err);
			})
		},
		removeArticle (index) {
			this.$http.get(this.HOST + '/admin/del_article', {params: {id:index}}).then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					this.$Message.info("删除成功");
				}else{
					this.$Message.warning("删除失败");
				}
			}, (err) => {
				console.log(err);
			})
		},
		removeLocalVideo (index) {
			this.$http.get(this.HOST + '/admin/del_local', {params: {id:index}}).then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					this.$Message.info("删除成功");
				}else{
					this.$Message.warning("删除失败");
				}
			}, (err) => {
				console.log(err);
			})
		},
		removeNetWorkVideo (index) {
			this.$http.get(this.HOST + '/admin/del_network', {params: {id:index}}).then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					this.$Message.info("删除成功");
				}else{
					this.$Message.warning("删除失败");
				}
			}, (err) => {
				console.log(err);
			})
		},
		getInfo () {
			this.$http.get(this.HOST + '/admin/user_info').then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					let items = res.body.datas;
					for(let index in items){
						items[index].create_at = util.formatUtc(items[index].create_at);
					}
					this.data1 = items;
					this.loading1 = false;
				}
			}, (err) => {
				console.log(err);
			}) 
		},
		getStep () {
			this.$http.get(this.HOST + '/admin/get_step').then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					let items = res.body.datas;
					for(let index in items){
						items[index].created_at = util.formatUtc(items[index].created_at);
					}
					this.data2 = items;
					this.loading2 = false;
				}
			}, (err) => {
				console.log(err);
			}) 
		},
		getSportGoal () {
			this.$http.get(this.HOST + '/admin/get_sportGoal').then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					let items = res.body.datas;
					for(let index in items){
						items[index].created_at = util.formatUtc(items[index].created_at);
					}
					this.data3 = items;
				}
			}, (err) => {
				console.log(err);
			}) 
		},
		getFoodGoal () {
			this.$http.get(this.HOST + '/admin/get_foodGoal').then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					let items = res.body.datas;
					for(let index in items){
						items[index].created_at = util.formatUtc(items[index].created_at);
					}
					this.data6 = items;
				}
			}, (err) => {
				console.log(err);
			}) 
		},
		getPressureGoal () {
			this.$http.get(this.HOST + '/admin/get_pressureGoal').then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					let items = res.body.datas;
					for(let index in items){
						items[index].created_at = util.formatUtc(items[index].created_at);
					}
					this.data7 = items;
				}
			}, (err) => {
				console.log(err);
			}) 
		},
		getSmokeGoal () {
			this.$http.get(this.HOST + '/admin/get_smokeGoal').then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					let items = res.body.datas;
					for(let index in items){
						items[index].created_at = util.formatUtc(items[index].created_at);
					}
					this.data8 = items;
				}
			}, (err) => {
				console.log(err);
			}) 
		},
		getEvaluation () {
			this.$http.get(this.HOST + '/admin/get_evaluation').then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					let items = res.body.datas;
					for(let index in items){
						items[index].create_at = util.formatUtc(items[index].create_at);
					}
					this.data4 = items;
				}
			}, (err) => {
				console.log(err);
			}) 
		},
		getNurse () {
			this.$http.get(this.HOST + '/admin/get_nurse').then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					let items = res.body.datas;
					for(let index in items){
						items[index].created_at = util.formatUtc(items[index].created_at);
					}
					this.data5 = items;
				}
			}, (err) => {
				console.log(err);
			}) 
		},
		getAnswer () {
			this.$http.get(this.HOST + '/admin/get_answer').then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					let items = res.body.datas;
					for(let index in items){
						items[index].created_at = util.formatUtc(items[index].created_at);
					}
					this.data9 = items;
				}
			}, (err) => {
				console.log(err);
			}) 
		},
		getLocalVideo () {
			this.$http.get(this.HOST + '/admin/get_localVideo').then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					let items = res.body.datas;
					for(let index in items){
						items[index].created_at = util.formatUtc(items[index].created_at);
					}
					this.data10 = items;
				}
			}, (err) => {
				console.log(err);
			}) 
		},
		getNetWorkVideo () {
			this.$http.get(this.HOST + '/admin/get_netWorkVideo').then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					let items = res.body.datas;
					for(let index in items){
						items[index].created_at = util.formatUtc(items[index].created_at);
					}
					this.data11 = items;
				}
			}, (err) => {
				console.log(err);
			}) 
		},
		getArticle () {
			this.$http.get(this.HOST + '/admin/get_article').then((res) => {
				console.log(res);
				if(res.body.sign === '1'){
					let items = res.body.datas;
					for(let index in items){
						items[index].create_at = util.formatUtc(items[index].create_at);
					}
					this.data12 = items;
				}
			}, (err) => {
				console.log(err);
			}) 
		},

	},
	created () {
		this.getInfo();
		this.getStep();
		this.getSportGoal();
		this.getFoodGoal();
		this.getPressureGoal();
		this.getSmokeGoal();
		this.getEvaluation();
		this.getNurse();
		this.getAnswer();
		this.getLocalVideo();
		this.getNetWorkVideo();
		this.getArticle();
	}
}
</script>

<style >
	.info-items{
		margin-bottom: 50px;
	}

	.info-items h3{
		margin-bottom: 10px;
	}
	.showModelItem{
		display: inline-block;
	}
	.showModelItem label{
		font-size: 17pt;
		vertical-align: top;

	}
	.showModelItem Input{
		margin-bottom: 10px;
	}

	.longInput input{
		width: 350px;

	}
	.exportExcelBtn{
		margin-top: 0.5em;
	}

</style>

