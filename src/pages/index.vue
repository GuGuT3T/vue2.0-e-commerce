<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
           <li v-for="item in product.list">
             <a v-bind:href="item.url">{{item.name}}</a>
             <span v-if="item.hot" class="hot-tag">hot</span>
           </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a v-bind:href="item.url" >{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides" :inv="slideSpeed" @onchange1="doSomethingOnSlideChange"></slide-show>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item,index) in boardList" 
        v-bind:class="[{'line-last':index%2 !== 0},
        'index-board-'+item.id]">
        <div class="index-board-item-inner">
          <h2>{{item.title}}</h2>
          <p>{{ item.description }}</p>
           <div class="index-board-button">
            <a href="" class="button">立即购买</a>
          </div>
        </div>
        </div>
      </div>
      <test :testArr="testArr">

      </test>
    </div>
  </div>
</template>
<script>
import slideShow from '../components/slideShow.vue'
import test from '../components/test'
export default {
  components: {
    slideShow,
    test
  },
  created: function (){
    // json-server:post请求一般为新增内容，获取数据用get
    // 如果需要用到post可以用express+fs请求本地文件
    this.$http.get('api/getNewsList')
    .then((res) => {
      console.log('成功')
      this.newsList = res.body;
    },(err) => {
      console.log('失败')
      console.log(err) 
    })
    
  },
  data() {
    return {
      slideSpeed: 2000,
      testArr: [
        '1','2','3'
      ],
      slides: [ // 轮播数组

        {
          src: require('../assets/slideShow/pic1.jpg'), // 通过require，webpack将图片解析到相应位置，js需要
          title: 'xxx1',
          href: 'detail/ana'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/cou'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'detail/pub'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/for'
        }
      ],
      productList: {
        pc: {
          title: "pc产品",
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true,
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: "手机应用类",
          last: true,
          list: [
             {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      },
      newsList: [
        // {
        //   title: '数据统计',
        //   url: 'http://baidu.com'
        // },
        // {
        //   title: '数据统计2',
        //   url: 'http://baidu.com'
        // },
        // {
        //   title: '数据统计3',
        //   url: 'http://baidu.com'
        // },
      ],
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false
        }
      ],
    };
  },
  methods: {
    doSomethingOnSlideChange(index){
      // console.log(index)
    }
  }
};
</script>
<style lang="scss" scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner {
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner {
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner {
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner {
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
