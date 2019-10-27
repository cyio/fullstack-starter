<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>hello remote data: {{echo}}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from 'axios'

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data () {
    return {
      echo: ''
    }
  },
  methods: {
    getData() {
      axios.get('/api/hello')
        .then(res => this.echo = res.data)
    }
  },
  created() {
    this.getData();
  }
};
</script>
