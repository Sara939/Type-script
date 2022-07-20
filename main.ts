// 1
function getfromuser():void {
    let num:number = document.getElementById("mynum").value;
    if(num>10){
        console.log("greather then 10")
    }
    else{
        console.log("less then 10")
    }

}

getfromuser();


// 2
function getnum(): void{
    let num: number=  document.getElementById("mynum").value;
    if(num>10){
        console.log("greather then 10")
    }
    else if (num< 10){
        console.log("less then 10")
    }
    else{
        console.log("equel to 10")
    }

}

// 3
function gettwonums(): void{
    let first:number= document.getElementById("a")value;
    let second:number= document.getElementById("b").value;
    if(first>second){
        console.log("first is higher")
    }
    else if(first<second){
        console.log("second is higher")
    }
    else{
        console.log("valus are equel");
        
    }
}

// 4
function gettwonums(one:number, two:number):number{
    if(one>two){
      return two
    }
    else{
      return one
    }
  }
  console.log(gettwonums(76, 5));


//  5 
  function threenums(one:number, two:number, three:number):number{
    return Math.min(one, two, three);
  }
  console.log(threenums(7,10,22));

// 6
function returnevg(one:number, two:number, three:number):number{
    return (one+two+three)/3;
  
  }


//   7
  function returnsum(one:number, two:number, three:number, four:number):number{
    return one+two+three+four;
  }
  console.log(returnsum(7,10,22,5));

// 8
function arraynums(myarray:number[]):number{
  let min:number = myarray[0]
  myarray.forEach(item=>{
      if(min>item){
          min=item
      }
  })
  return min
  }
  console.log(arraynums([5,2,35]))
  
  // 9
  function arraysum(myarray:number[]):number{
    let sum:number= 0;
    myarray.forEach(item=>{
        sum+=item;
    })
    sum=sum/myarray.length
    return sum
    }
    console.log(arraysum([5,2,5]))
    
  // 10
  function arraysum(myarray:number[]):number{
    let sum:number= 0;
    myarray.forEach(item=>{
        sum+=item;
    })
    return sum
    }
    console.log(arraysum([5,2,35]))

    // 11
    function givenames(namesarray:string[]):string{
      return namesarray[1];
  }
  
  console.log(givenames(["sara", "lala", "thth"]);
  
  
// 12

function givenames(namesarray:string[]):string{
    namesarray.sort();
    return namesarray[0];
    
}

console.log(givenames(["sara", "aala", "ahth"])

// 13

function checkifeven(nums:number[]):string{
  for(let i=0; i<nums.length;i++){
      if (nums[i]%2==0){
        return "ther is even"  
      }
  }
  return "not even"
}

console.log(checkifeven([7,1,3,9]));

// 14///////////////////////////////////////////////
function getdate(mydate:string):{}{
  let mydate1= new Date(mydate);
 return mydate1
}
console.log(getdate("22012022"))

// 15

function numandstring(num:number, myword:string):string{
  return myword * num 
}
console.log(numandstring(3,"sara"));
