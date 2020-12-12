<template>
  <div class="common-btn">
    {{ number }}
  </div>
</template>
<script>
// import "./common.less";
import{ cloneDeep } from 'lodash'
 export default {
   name: 'button-demo',
   data() {
     return {
          number: cloneDeep('button')
     }
   }
 }
</script>
<style lang="less">
@import "./common.less";
</style>
