<template>
  <div class="counter-component">
      <div class="counter-btn" @click="minusNum">-</div>
			<div class="counter-show">
				<input type="text" v-model="buyNumber" @keyup="buyNumber1()">
			</div>
			<div class="counter-btn" @click="addNum">+</div>
  </div>
</template>
<script>
export default {
	props: {
		max: {
			type: Number,
			default: 20
		},
		min: {
			type: Number,
			default: 5
		}
	},
	data () {
		return{
      buyNumber: 0,
		}
	},
	methods: {
    minusNum () {

    },
    addNum () {

    },
    buyNumber1 () {
      let tempNumber;
      if(typeof this.buyNumber === 'string' ){
        tempNumber = this.buyNumber.replace(/\D/g,'')
      }else{
        tempNumber = this.buyNumber;
      }
      if(tempNumber > this.max || tempNumber < this.min && this.buyNumber != ''){
        tempNumber = this.min;
      }
        this.buyNumber = tempNumber;
    }
  },
  watch: {
    buyNumber () {
      console.log(1)
      this.$emit('on-change',this.buyNumber)
    }
  }
};
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
	display: inline-block;
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}

</style>
