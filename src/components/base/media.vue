<template>
	<div>
		<span class="type" v-for="(item,index) in mediaList" @click="mediaClick(index)" :class="{active: checkActive(index)}">
			{{item.label}}
		</span>
	</div>
</template>
<script>
import _ from 'lodash'
export default {
  props: {
    mediaList: {
      type: Array,
      default: () => [
        {
          label: "test",
          value: 0
        }
      ]
    }
  },
  data() {
    return {
			nowIndex: '',
			nowIndexArr: [0],
		};
	},
	methods: {
		mediaClick (parma) {
			if(!this.nowIndexArr.includes(parma)){
				this.nowIndexArr.push(parma)
				this.nowIndexArr = [...new Set(this.nowIndexArr)]
			}else{
				let tempArr = this.nowIndexArr.filter((x,index) => x !== parma)
				this.nowIndexArr = tempArr;
				}
				let nowObjArr = _.map(this.nowIndexArr,(idx) =>{
					return this.mediaList[idx]
				})
				this.$emit('on-change',nowObjArr)
		},
		checkActive (index) {
			return (this.nowIndexArr.includes(index))
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


