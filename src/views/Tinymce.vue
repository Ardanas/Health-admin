<template>
  <div class="app-container calendar-list-container">
        <div style="margin:0 3%; width: 95%;">
          

          <editor
            class="editor"
            :value="content"
            :setting="editorSetting"
            @show="editors"
            :url              = "Url"
            :max-size         = "MaxSize"
            :accept           = "Accept"
            :with-credentials = "withCredentials"
            @on-upload-fail         = "onEditorReady"
            @on-upload-success= "onEditorUploadComplete" ></editor>

            <div class="art_form" >
              <h1>一、文章发布</h1>
              <p> 
                <div>1.文章分类:</div>
                <v-selection :selections="articleTypeList" @on-change="onParamChange('articleType', $event)"></v-selection>
              </p>
              <p>
                <span>2.文章标题</span>
                <Input type="text" placeholder="请输入文章标题" v-model="articleTitle"></Input>
              </p>
              <p>
                <span>3.文章简介</span>
                <Input type="text" placeholder="请输入文章作者" v-model="articleIntro"></Input>
              </p>
              <p>
                <span>4.文章作者</span>
                <Input type="text" placeholder="请输入文章作者" v-model="articleAuthor"></Input>
              </p>
            </div>

            <Button type="primary" @click="preview = true" style="margin-top:10px;" size="large">提前预览</Button>
            <Button type="primary" @click="publishArticle" style="margin-top:10px;" size="large">发布文章</Button>
        </div>

        <input type="file" id="my-file" name="my-file" style="display:none;" onchange=""/>

        <Modal
          v-model="preview"
          title="文章预览"
          width="100%;"
          @on-ok="ok"
          @on-cancel="cancel" style="margin-top:-10px;">
          <span v-html="content" v-model="content">{{content}}</span>
        </Modal>


        <div style="margin:5% 3%; width: 95%;">
          
          <div class="art_form" >
            <h1>二、Q&A发布</h1>
            <p> 
              <div>1.问题:</div>
               <Input type="text" placeholder="请输入问题" v-model="question"></Input>
            </p>
             <p> 
              <div>2.答案:</div>
               <p v-html="content"></p>
            </p>
          </div>

          <Button type="primary" @click="publishAnswer" style="margin-top:10px;" size="large">确认发布</Button>

        </div>

        
        


        
  </div>
</template>
<script type="text/ecmascript-6">
  import editor from './components/Editor' // 根据editor.vue组件位置引入
  import VSelection from './components/Selection' // 根据editor.vue组件位置引入
  export default {
    data() {
        return {
            question: '',
            articleTitle: '',
            articleAuthor: '',
            articleIntro: '',
            articleType: {},
            preview: false,
            deitorContent: '',
            articleTypeList: [
              {
                label: '心脏康复运动篇',
                value: '心脏康复运动篇',
                id: 1
              },
              {
                label: '心脏康复饮食篇',
                value: '心脏康复饮食篇',
                id: 2
              },
              {
                label: '心脏康复戒烟篇',
                value: '心脏康复戒烟篇',
                id: 3
              },
              {
                label: '心脏康复压力篇',
                value: '心脏康复压力篇',
                id: 4
              },
              {
                label: '心脏康复血压篇',
                value: '心脏康复血压篇',
                id: 5
              },
              {
                label: '心脏康复高血脂篇',
                value: '心脏康复高血脂篇',
                id: 6
              },
              {
                label: '急救篇',
                value: '急救篇',
                id: 7
              },
              {
                label: '关于冠心病',
                value: '关于冠心病',
                id: 8
              },
              {
                label: '血糖篇',
                value: '血糖篇',
                id: 9
              }
            ],
            editorSetting: { // 配置富文本编辑器高
              language_url: '/static/tinymce/zh_CN.js', //打包要添加admin
              //language_url: '/admin/static/tinymce/zh_CN.js', //打包要添加admin
              language: 'zh_CN',
              skin_url: '/static/tinymce/skins/lightgray', //打包要添加admin
              //skin_url: '/admin/static/tinymce/skins/lightgray', //打包要添加admin
              height: 400
            },
            Url: this.HOST + '/admin/file/uploading', // 图片对应的上传地址
            MaxSize: 7576500, // 文件大小
            Accept: 'image/jpeg, image/png, image/jpg, image/gif', // 文件格式image/gif, image/jpeg, image/png, image/jpg
            withCredentials: true,
            content: '', // 富文本编辑器双向绑定的内容
            answer_content: ''
        }
    },
    components: { // 引入组件
      editor,
      VSelection
    },
    methods: {
      onParamChange (attr, val) {
        this[attr] = val
        console.log(val)
      },
      ok () {
        this.modal1 = false;
        //this.$Message.info('点击了确定');
      },
      cancel () {
        //this.$Message.info('点击了取消');
      },
      editors(content) { // editor组件传过来的值赋给content
        console.log(content)
        this.content = content
      },
      onEditorReady(ins, ina) { // 上传失败的函数
        console.log('ins')
        console.log(ins)
        console.log(ina)
      },
      onEditorUploadComplete(json) { // 处理上传图片后返回数据，添加img标签到编辑框内
        console.log('json')
        console.log(json)
        console.log(json[0].datas)
        console.log(json[0].datas.file[0].path)
        this.content = this.content + '<img src=' + json[0].datas.file[0].path + '>'
      },
      publishArticle () {
        let art_title = this.articleTitle;
        let art_type = this.articleType.id;
        let art_content = this.content;
        let art_author = this.articleAuthor;
        let art_intro = this.articleIntro;
        if(art_title === ''|| art_type === undefined || art_content === '' ||art_author === '' || art_intro === ''){
          this.$Message.warning('请填写完整信息后再提交');
        }else{
          //写入数据库操作
          let reqParams = {
            a_title: art_title,
            a_author: art_author,
            a_type: art_type,
            a_content: art_content,
            a_intro: art_intro
          }
          this.$http.post(this.HOST + '/admin/in_article', reqParams).then((res)=> {
            console.log(res.body)
            if(res.body.sign === '1'){
              this.$Message.info('发布成功');
            }else{
              this.$Message.warning('发布失败');
            }
          }, (err)=> {
            console.log(err);
            this.$Message.warning('发布失败');

          })
        }
      },
      publishAnswer () {
        let question = this.question;
        let answer = this.content;
        if(question === '' || answer === ''){
          this.$Message.warning('填写完整再发布');
        }else{
          let reqParams = {
            q: question,
            a: answer
          }
          this.$http.post(this.HOST + '/admin/in_answer', reqParams).then((res)=> {
            console.log(res.body)
            if(res.body.sign === '1'){
              this.$Message.info('发布成功');
            }else{
              this.$Message.warning('发布失败');
            }
          }, (err)=> {
            console.log(err);
            this.$Message.warning('发布失败');

          })

        }

      }

    }
  }
</script>
<style scoped >
.art_form{
  font-size: 16px;
  margin-top:20px;
}
.art_form>p{
  margin: 15px 0 15px 0;
}
 
</style>
