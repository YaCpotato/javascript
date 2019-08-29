<!--require frappe.js and css-->

<html lang="en">
  <head>
  </head>
<body>
<div id="app" style="width:80vw;">
  <li v-for="task in tasks">
    <span>{{ task.id }}</span>
    <span>{{ task.name }}</span>
    <span>{{ task.start }}</span>
    <span>{{ task.end }}</span>
  </li>
  <input v-model="id"><input v-model="name">
  <button @click="regist">登録</button>
</div><br>
<svg id="gantt"></svg>

<script>
 var app = new Vue({
  el:'#app',
  data:{
    tasks : [],
    id:'',
    name:'',
    start:'',
    end:''
  },
  methods:{
    regist:function(){
      this.tasks.push({
        id: this.id,
        name: this.name,
        start: '2016-12-28',
        end: '2016-12-31',
        progress: 20,
      })
      var gantt = new Gantt("#gantt", this.tasks);
    }
  }
})
</script>
</body>
</html>
