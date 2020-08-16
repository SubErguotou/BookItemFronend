<template>
  <div id="timeline">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>最近更新</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>

      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in timelinedata"
            :key="index"
            :timestamp="item.time"
            placement="top"
          >
            <el-card>
              <h4>{{item.title}}</h4>
              <p class="textclass">{{item.text}} {{item.time}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
        <Foot />
  </div>
</template>

<script>
import Foot from '../../components/home/Foot';
export default {
  name: "TimeLine",
  components: {Foot},
  data() {
    return {
      timelinedata: [
        { title: "更新github模板1", time: "2020/8/16", text: "导航栏完成" },
        { title: "更新github模板1", time: "2020/8/16", text: "导航栏完成" },
        { title: "更新github模板1", time: "2020/8/16", text: "导航栏完成" },
        { title: "更新github模板1", time: "2020/8/16", text: "导航栏完成" },
        { title: "更新github模板1", time: "2020/8/16", text: "导航栏完成" },
        { title: "更新github模板1", time: "2020/8/16", text: "导航栏完成" },
        { title: "更新github模板1", time: "2020/8/16", text: "导航栏完成" },
      ],
    };
  },
};
</script>

<style lang="less" scope=>
.timelie_height {
  height: 200px;
}
</style>