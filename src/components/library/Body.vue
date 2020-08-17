<template>
  <div>
      <Search />
    <div id="librarybody">
         <div class="blackDiv" v-for="(item, index) in books" :key="index">
      <el-tooltip effect="dark" placement="right">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>{{item.author}}</span> /
          <span>{{item.date}}</span> /
          <span>{{item.press}}</span>
        </p>
        <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
        <el-card class="card_class" bodyStyle="padding:10px" shadow="hover">
          <div>
            <img :src="item.cover" alt />
          </div>
          <div class="info">
            <div class="title">
              <a href>{{item.title}}</a>
            </div>
          </div>
          <div class="author">{{item.author}}</div>
        </el-card>
      </el-tooltip>
    </div>
    <div style="text-align: center; width: 900px;">
      <el-row>
        <el-pagination :current-page="1" :page-size="10" :total="20"></el-pagination>
      </el-row>
    </div>
    </div>
   
  </div>
</template>

<script>
import Search from '../search/search';
export default {
  name: "LibraryBody",
  components: {Search},
  data() {
    return {
      input: "",
      books: [
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
        {
          cover: "https://i.loli.net/2019/04/10/5cada7e73d601.jpg",
          title: "三体",
          author: "刘慈欣",
          date: "2019-05-05",
          press: "重庆出版社",
          abs:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
      ],
    };
  },
};
</script>

<style lang="less" scope>
#librarybody {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // border: solid 2px #000000;
  // margin-right: 220px;
  // justify-content: space-between;
}

.blackDiv {
  // display: inline;
  // width: 150px;
  // border: solid 2px red;
  margin-right: 25px;
}
.card_class {
  width: 150px;
  height: 233px;
  margin-bottom: 20px;
  text-align: center;
  // padding: 20px;
}
.info {
  font-size: 14px;
  // text-align: left;
}
img {
  width: 115px;
  height: 172px;
}
a:link,
a:visited,
a:focus {
  color: #3377aa;
}
</style>