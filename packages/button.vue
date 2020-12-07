<template>
  <div>
    我是一个12vue {{ number }}
  </div>
</template>
<script>
import{ cloneDeep } from 'lodash'
 export default {
   name: 'Button',
   data() {
     return {
          number: cloneDeep(1)
     }
   }
 }
</script>
