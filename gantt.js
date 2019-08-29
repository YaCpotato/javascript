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
    tasks : [
      {
        id: 0,
        name: 'my name',
        start: '2016-12-28',
        end: '2016-12-31',
        progress: 20,
      },
    ],
    id:null,
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
      gantt.refresh(this.tasks)
    },
  },
})

var gantt = new Gantt("#gantt", app.tasks,{
        on_date_change: function(task, start, end) {
           for(var i=0;i<gantt.tasks.length;i++){
             if(app.tasks[i].id == task.id){
               console.log('判定')
               var item={
                 name:task.name,
                 start : moment(start).format('YYYY-MM-DD'),
                 end : moment(end).format('YYYY-MM-DD'),
               }
               app.tasks.splice(i,1,item)
               gantt.refresh(app.tasks)
               break;
             }
             break;
           }
        },
        on_progress_change: function(task, progress) {
            console.log(task, progress);
        },
 });
</script>
</body>
</html>
