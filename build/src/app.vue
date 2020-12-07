<template>
  <div>
    app-vue {{ num }}
    <div>
      <Button></Button>
      <Button2></Button2>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num : 'vue2'
    }
  }
}
</script>

<style lang="less" scoped>
div {
  font-size: 20px;
}
</style>

