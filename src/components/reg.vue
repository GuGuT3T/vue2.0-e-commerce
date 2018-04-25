<template>
  <div class="reg">
      <div>
          <label>用户名:</label>
          <input type="text" v-model="username" placeholder="请输入用户名">
          <span>{{ usernameError.errorText }}</span>
      </div>
      <div>
          <label>密码:</label>
          <input type="password" v-model="password" placeholder="请输入密码">
      </div>
      <div>
          <label>密码:</label>
          <input type="password" v-model="passwordAgin" placeholder="请再次输入密码">
					<span>{{passwordError.errorText}}</span>
      </div>
			<div class="regBtn" @click="onReg">注册</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
			password: '',
			passwordAgin: '' ,
    };
  },
  computed : {
      usernameError () {
          let errorText,status;
          if(this.username == ''){
              errorText = '用户名格式不正确';
              status = false;
          }else{
              errorText = '用户名格式正确';
              status = true;
          }
          return {
              errorText,
              status,
          }
      },
      passwordError () {
					let errorText,status;
					if((this.password !== this.passwordAgin) || (this.password == '')){
						errorText = '两次密码输入不正确';
						status = false;
					}else{
						errorText = '两次密码输入正确';
						status = true;
					}
					return {
						errorText,
						status,
					}
      }
	},
	methods: {
		onReg () {
			if(this.usernameError.status && this.passwordError.status){
				this.$emit('has-reg',this.username)
				console.log('注册');
			}else{
				alert('请填写信息')
			}
		}
	}
};
</script>
<style scoped>
.reg label {
  display: inline-block;
  width: 100px;
}
.regBtn{
	width: 80px;
	height: 30px;
	border:1px solid #dcdcdc;
	line-height: 30px;
	text-align: center;
}
</style>


