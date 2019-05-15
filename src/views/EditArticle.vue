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
        <el-button type="primary" native-type="submit">立即编辑</el-button>
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
      this.$http.put(`/article/${this.$route.params.id}`, this.article).then(res => {
        this.$message({
          message: "恭喜你，保存成功",
          type: "success"
        });
        this.$router.push('/article/list')
      });
    },
    fetch () {
      this.$http.get(`article/${this.$route.params.id}`).then( res => {
        this.article = res.data
      })
    }
  },
  mounted () {
    this.fetch()
  }
};
</script>

