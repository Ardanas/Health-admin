<template>
        <router-view></router-view>
</template>

<script>
    export default{
      name: 'APP'
    }
</script>

<style>
  input[type="text"]
  {
    color: #555;
    height: 30px;
    line-height:15px;
    width: 210px;
    padding: 1px 0px 1px 10px;
    margin-top: 2px;
    border: 1px solid #E5E5E5;
    background: #FBFBFB;
    outline: 0;
    border: 1px solid #ccc;
    border-radius: 3px;
    -webkit-box-shadow: inset 1px 1px 2px rgba(238, 238, 238, 0.2);
    box-shadow: inset 1px 1px 2px rgba(238, 238, 238, 0.2);
    font: normal 14px/14px Arial, Helvetica, sans-serif;
  }
  input[type="text"]:focus{
    border-color: #66afe9; 
    outline: 0; 
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6); 
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6); 
  }
</style>
