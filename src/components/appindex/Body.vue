<template>
  <div id="indexbody">
        <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item, index) in for_back_img" :key="index">
        <div class="img">
            <img :src="item.url" alt="加载失败">
        </div>
    </el-carousel-item>
  </el-carousel>
    <TimeLine />

  </div>
</template>

<script>
import TimeLine from './Timeline';

export default {
    name: "IndexBody",
    components: {TimeLine},
    data(){
        return {
            for_back_img:[
                {url: require("../../assets/img/SummerPockets"+Math.floor(Math.random()*10)+".jpg")},
                {url: require("../../assets/img/SummerPockets"+Math.floor(Math.random()*10)+".jpg")},
                {url: require("../../assets/img/SummerPockets"+Math.floor(Math.random()*10)+".jpg")},
                {url: require("../../assets/img/SummerPockets"+Math.floor(Math.random()*10)+".jpg")},
                {url: require("../../assets/img/SummerPockets"+Math.floor(Math.random()*10)+".jpg")},
            ]
        }
    }
}
</script>

<style lang="less" scope>
#indexbody {
    margin:0 220px 0 220px;
    // border: 1px solid red;
    padding: 10px 100px;
    background-color: #ffffff;
}
img {
    height: 250px;
    width: 400px;
}

</style>