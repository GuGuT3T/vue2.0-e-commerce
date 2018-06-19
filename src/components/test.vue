<template>
  <div>
    <div v-for="(item,index) in testArr">
      <p>{{item}}</p>
    </div>
    <!-- <div>
      1
    </div> -->
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
