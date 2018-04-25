<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: '',
        userFlag: false,
        passwordFlag: false
      }
  },
  computed: {
    userErrors () {
      let errorText, status;
      if(!/@/g.test(this.usernameModel)){
        status = false;
        errorText = '不包含@';
      }else{
        status = true;
        errorText = ''
      }
      if (!this.userFlag){
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText,
      }
    },
    passwordErrors () {
      let errorText,status;
      if(!/^\w{1,6}$/g.test(this.passwordModel)){
        status = false;
        errorText = '密码不是6位';    
      }else{
        status = true;
        errorText = ''
      }
      if (!this.passwordFlag){
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
      onLogin () {
        if(!this.userErrors.status || !this.passwordErrors.status){
          this.errorText = '部分选项未通过'
          alert('不合格')
        }else{
          this.errorText = '';
          this.$http.get('api/login')
          .then((data) => {
            console.log('成功')
            this.$emit('has-log',data)
          }),(error)=> {
            console.log(error)
          }
         
        }
      }
  }
}
</script>

<style scoped>
.drop-enter-active {
  transition: all 0.5s ease;
}
.drop-leave-active {
  transition: all 0.3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}

.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: 0.3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}
</style>
