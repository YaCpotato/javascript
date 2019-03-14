
var deck=new Vue({
    el:'#deck',

    data:{
        Deck:[],
        myDeck:[],
        mySuit:[],
        isActive:true,
        isChange:[false,false,false,false,false],
        suit:['♠︎','♣︎','♡','♢']
    },
    
    created:function(){
        for(var i=0;i<53;i++){
            this.Deck.push(i)
        }        
    },
    methods:{
        createMyDeck:function(event){//手札を作る
            for(var i=0;i<5;i++){
                var num=Math.floor(Math.random()*this.Deck.length)//デッキのインデックスを乱数で
                this.myDeck[i]=this.Deck[num]//該当インデックスの要素を手札に入れる
                this.Deck.splice(num,1)//手札に入れたものをデッキから削除する
                console.log('デッキの数'+this.Deck.length+'枚')//デッキが減ったことの確認
            }
            for(var i=0;i<5;i++){
            console.log('手札'+(i+1)+'枚目'+this.myDeck[i])//手札の確認
            }
            this.isActive=!this.isActive
            //テストケースはここに記述する
            
        },
        //商、余をだす関数
        deckChange:function(event){//手札を変える
            console.log('deckChange起動')
            //指定された添字のカードを再度乱数から数字を得る
            for(var i=0;i<5;i++){
                if(deck.isChange[i]){
                    var num=Math.floor(Math.random()*this.Deck.length)//デッキのインデックスを乱数で
                    this.myDeck.splice(i,1,this.Deck[num])
                    this.Deck.splice(num,1)//手札に入れた$ものをデッキから削除する
                }
            }
            console.log('deckChange終了')

            for(var i=0;i<5;i++){
            console.log('手札'+(i+1)+'枚目'+this.myDeck[i])//手札の確認
            }
            console.log('デッキの数'+this.Deck.length+'枚')//デッキが減ったことの確認
        },
    }
})

