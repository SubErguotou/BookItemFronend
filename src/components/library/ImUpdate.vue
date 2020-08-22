<template>
  <div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      list-type="picture"
      limit="1"
      :on-exceed="handleExceed"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "Imgupload",
  data() {
    return {
      fileList: [],
      url: "",
    };
  },
  methods: {
    hadleRemove(file, fileList) {},
    handlePreview(file) {},
    handleExceed(file, fileList) {
      this.$message.warning(
        `当前限制选择1个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}?`);
    },
    handleSuccess(response) {
      this.url = response;
      this.$emit("onUpload");
      this.$message.warning("上传成功");
    },
    clear() {
      this.$refs.upload.clearFiles();
    },
  },
};
</script>

<style lang="less" scope>
</style>