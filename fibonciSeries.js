let a=1
let b=2
let temp=0
let final=0
while(temp<4000000){
    temp=a+b
    a=b
    b=temp
    console.log("console.log(temp)",temp)
    if(temp%2==0){
        final+=temp
    }

   }
  console.log(final+2)