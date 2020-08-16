<template>
  <div id="indexbody">
        <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item, index) in for_back_img" :key="index">
        <div class="img">
            <img :src="item.url" alt="kkkk">
        </div>
      
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
    name: "IndexBody",
    data(){
        return {
            for_back_img:[
                {url: require("../../assets/img/SummerPockets"+Math.floor(Math.random()*10)+".jpg")},
                {url: require("../../assets/img/SummerPockets"+Math.floor(Math.random()*10)+".jpg")},
                {url: require("../../assets/img/SummerPockets"+Math.floor(Math.random()*10)+".jpg")},
                {url: require("../../assets/img/SummerPockets"+Math.floor(Math.random()*10)+".jpg")},
                {url: require("../../assets/img/SummerPockets"+Math.floor(Math.random()*10)+".jpg")},
                // {url: require("../../assets/img/SummerPackets2.jpg")},
                // {url: require("../../assets/img/SummerPackets3.jpg")},
                // {url: require("../../assets/img/SummerPackets4.jpg")},
            ]
        }
    }
}
</script>

<style lang="less" scope>
#indexbody {
    margin-left: 220px;
    // border: 1px solid red;
    padding: 10px 220px;
    background-color: #ffffff;
}
img {
    height: 200px;
    width: 350px;
}

</style>