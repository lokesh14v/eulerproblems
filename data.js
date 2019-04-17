function data(){
    var value=0  
    var fun=false
    var a=Math.floor(Math.random() * 100)
    var b=Math.floor(Math.random() * 100)
    var c=Math.floor(Math.random() * 100)
   
     value=(a*.75) +(b*.25)+(c*5)
     var count=a+b+c
     console.log("count",count)
     if(value==100 && count==100){
         console.log("value,a,b,c",value,a,b,c,count) 
        fun=true
     }
     
    return fun
  }
  console.log(data())
  while(data()!=true){
      
  }
// console.log(data().value && data().count)