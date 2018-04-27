<template>
  <div>
      <span class="type" v-for="(item,index) in buyTypes"
			:class="{active: index === nowIndex}" @click="isClick(index)">
          {{item.label}}
      </span>
  </div>
</template>
<script>
export default {
  props: {
    buyTypes: {
       type: Array,
      	default: () => [
					{
						label: 'test',
						value: 0
					}
				]
    }
  },
  data () {
    return {
			nowIndex: ''
		};
	},
	
	methods: {
		isClick (index) {
			this.nowIndex = index;
		}
	}
};
</script>
<style scoped>
	.type{
		display: inline-block;
		width: 100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin-right: 30px;
		background-color: #fff;
		border: 1px solid #dcdcdc;
	}
	.type:hover{
		cursor: pointer;
		background-color: #4fc08d;
		color:#fff;
	}
	.active{
		background-color: #4fc08d;
		color:#fff;
	}
</style>


