<template>
  <div>
    <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="120px">
      <el-form-item label="文章标题">
        <el-input v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="article.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">发表博客</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      article: {}
    };
  },
  methods: {
    saveArticle() {
      // 参数为：路径和，请求体  该方法是表单提交
      this.$http.post("article", this.article).then(res => {
        this.$message({
          message: "恭喜你，发表成功",
          type: "success"
        });
        this.$router.push('/article/list')
      });
    }
  }
};
</script>

