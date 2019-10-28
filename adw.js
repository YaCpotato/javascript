<div id="app">
    <p>{{ words }}</p>
    <input v-model="userInput"　v-on:keyup.enter="pushEnter">
</div>

<script>
  var app = new Vue({
    el:'#app',
    data:{
      userInput:'',
      words:'apple',
      wordsList:[
        'apple',
        'banana',
        'melon'
      ]
    },
    methods:{
      pushEnter:function(){
        if(this.userInput === this.words){
          console.log('success')
          this.changeWords()
        }else{
          console.log('No!')
        }
      },
      changeWords:function(){
        this.userInput = ''
        console.log('changeWords')
        this.words = this.wordsList[Math.floor(Math.random() * this.wordsList.length)]
        console.log('new Words is'+this.words)
      }
    }
  })
</script>
