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
//topic
'Artificial Interigence',
'Machine Learning',
'Deep Learning',
'Reinforcement Learning',

//networkarchitecture
'Convolutional Neural Network',
'Recurrent Neural Network',
'Long Short Term Memory',
'Neural Network', 
'Neural Architecture Search',

'Sapport Vector Machine',
//kindofRegression
'Linear Regression',
'Quantile Regression',
'Robust Regression',

//loss function
'cross entropy error',
'Mean Absolute Error',
'Mean Squared Error',
'Mean Absolute Error',
'Mean Squared Logarithmic Error'

//activation function
'Activation',
'sigmoid',
'softmax',
'Rectified Linear Unit',
'Support Vector Regression'
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
