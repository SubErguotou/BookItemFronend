<template>
  <div>
    <Search @onCommit="searchRestul" />
    <ClickForm />
    <div id="librarybody">
      <div
        class="blackDiv"
        v-for="(item, index) in books.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        :key="index"
      >
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
            <div class="author">
              {{item.author}}
              <i class="el-icon-delete" @click="deleteBook(item.id)"/>
            </div>
          </el-card>
        </el-tooltip>
      </div>
      <div style="text-align: center; width: 900px;">
        <el-row>
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            :total="books.length"
          ></el-pagination>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../search/search";
import ClickForm from "./CickForm";
export default {
  name: "LibraryBody",
  components: { Search, ClickForm },
  // props: ['ccategoryBooks'],
  data() {
    return {
      input: "",
      books: [],
      // 当前页数
      currentPage: 1,
      // 每页显示个数选择器的选项设置
      pagesize: 10,
    };
  },
  // 页面初始化前
  mounted: function () {
    this.loadBooks();
  },
  methods: {
    loadBooks() {
      const _this = this;
      this.$axios.get("/books").then((resp) => {
        if (resp && resp.status === 200) {
          // console.log(resp.data);
          // console.log(_this.books);
          _this.books = resp.data;
        }
      });
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage);
      // console.log(this.ccategoryBooks);
    },
    searchRestul(keywords) {
      const _this = this;
      console.log(keywords);
      this.$axios.get("/search?keywords=" + keywords).then((resp) => {
        if (resp && resp.status === 200) {
          _this.books = resp.data;
        }
      });
    },
    // 删除一本书
    deleteBook(id){
      this.$confirm('此操作将永久删除该书籍, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          this.$axios.post('/delete', {id: id}).then((resp)=>{
            if(resp && resp.status === 200){
              this.loadBooks();
            }
          })
        }).catch(()=>{
          this.$message({
            type: 'warning',
            message: '已取消删除',
          })
        })
    }
  },
};
</script>

<style lang="less" scope>
#librarybody {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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