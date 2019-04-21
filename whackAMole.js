$(document).on('click', '#target', function(){
  app.Correct();
  app.clickcount++;
});

$(document).on('click', '#false', function(){
  console.log('違うンゴ');
});

var app=new Vue({
    el:'#app',
    data:{
      x:100,
      y:100,
      width:100,
      hint:'',
      height:100,
      clickcount:0,
      targetX:0,
      targetY:0,
    },
    created:function(){
      this.createMass()
      this.createTarget()
    },
    methods:{
      createMass:function(){
        for(var i=0;i<10;i++){
          for(var j=0;j<10;j++){
            var svg_elem = document.getElementById("box_1");
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    	      svg.setAttribute("x", i*100);
    	      svg.setAttribute("y", j*100);
    	      svg.setAttribute("stroke", "black");
    	      svg.setAttribute("stroke-width", 5);
    	      svg.setAttribute("width",100);
          	svg.setAttribute("height",100);
          	svg.setAttribute("fill", "yellow");
          	svg.setAttribute("id", "false");
          	svg_elem.appendChild(svg);
          }
        }
      },
      Correct:function(){
        console.log('正解');
        $('#target').remove();
        this.createTarget()
      },
      createTarget:function(){
        console.log('createTarget起動')
        this.targetX=Math.floor( Math.random() * 10 );
        this.targetY=Math.floor( Math.random() * 10 );
        console.log('ターゲットのx座標は'+this.targetX);
        console.log('ターゲットのy座標は'+this.targetY);
        var svg_elem = document.getElementById("box_1");
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      	svg.setAttribute("x", this.targetX*100);
      	svg.setAttribute("y", this.targetY*100);
      	svg.setAttribute("width", this.width);
      	svg.setAttribute("height", this.height);
      	svg.setAttribute("fill", "green");
      	svg.setAttribute("id","target");
      	svg_elem.appendChild(svg);
      },
      
    }
})
