<template>
  <!-- <div style="color:#666; width:100px; border:1px solid red; display:inline-block">
      <p>{{item}}</p>
      <slot>默认内容</slot>
  </div> -->
  <div> 
    <div v-for="(item,index) in testArr">
      <p>{{item}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    testArr: {
      type: Array,
      default: []
    }
  },
  data () { 
    return {
      
    };
  }
};
</script>
