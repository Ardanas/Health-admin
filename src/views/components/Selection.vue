<template>
    <div class="selection-component" @click="toggleDrop" @mouseenter="showDrop" @mouseleave="hideDrop">
    <div class="selection-show" >
      <span>{{nowValue}}</span>
      <div class="arrow"></div>
    </div>
    <div class="selection-list" v-if="isDrop" @click="toggleDrop">
      <ul>
        <li v-for="(item, index) in selections" @click="chooseSelection(index)">{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        props:{
            selections: {
                type: Array,
                default: [{
                    label: "test",
                    value: 0
                }]
            } 
        },
        data () {
            return {
                isDrop: false,
                nowIndex: [0],
        nowValue: '未选择'
            }
        },
        methods: {
            toggleDrop () {
        this.isDrop = !this.isDrop
      },
      showDrop () {
        this.isDrop = true
      },
      hideDrop () {
        this.isDrop = false
        this.isSecondDrop = false
      },
            chooseSelection (index) {
                this.nowIndex = index
                this.isDrop = false
        this.nowValue = this.selections[this.nowIndex].label
        this.$emit('on-change', this.selections[this.nowIndex])

            }
        },
        mounted () {
            //this.$emit('on-change', this.selections[this.nowIndex])
        }

    }
</script>

<style scoped>
.selection-component {
  position: relative;
  display: inline-block;
}
.selection-show {
  border: 1px solid #999;
  padding: 7px 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 30px;
  line-height: 15px;
  border: 1px solid #ccc;
  box-shadow: inset 1px 1px 2px rgba(238, 238, 238, 0.2);
  border-radius: 3px;
  background: #fff;
  vertical-align: middle;
  color: #555;
  font: normal 16px/14px Arial, Helvetica, sans-serif;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #999;
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 6px;
  margin-right: -14px;
  vertical-align: middle;
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 30px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 5;
}
.selection-list li {
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.selection-list li:hover {
  background: #e3e3e3;
}
</style>