// // 1
// function getfromuser():void {
//     let num:number = document.getElementById("mynum").value;
//     if(num>10){
//         console.log("greather then 10")
//     }
//     else{
//         console.log("less then 10")
//     }

// }

// getfromuser();


// // 2
// function getnum(): void{
//     let num: number=  document.getElementById("mynum").value;
//     if(num>10){
//         console.log("greather then 10")
//     }
//     else if (num< 10){
//         console.log("less then 10")
//     }
//     else{
//         console.log("equel to 10")
//     }

// }

// // 3
// function gettwonums(): void{
//     let first:number= document.getElementById("a")value;
//     let second:number= document.getElementById("b").value;
//     if(first>second){
//         console.log("first is higher")
//     }
//     else if(first<second){
//         console.log("second is higher")
//     }
//     else{
//         console.log("valus are equel");
        
//     }
// }

// // 4
// function gettwonums(one:number, two:number):number{
//     if(one>two){
//       return two
//     }
//     else{
//       return one
//     }
//   }
//   console.log(gettwonums(76, 5));


// //  5 
//   function threenums(one:number, two:number, three:number):number{
//     return Math.min(one, two, three);
//   }
//   console.log(threenums(7,10,22));

// // 6
// function returnevg(one:number, two:number, three:number):number{
//     return (one+two+three)/3;
  
//   }


// //   7
//   function returnsum(one:number, two:number, three:number, four:number):number{
//     return one+two+three+four;
//   }
//   console.log(returnsum(7,10,22,5));

// // 8
// function arraynums(myarray:number[]):number{
//   let min:number = myarray[0]
//   myarray.forEach(item=>{
//       if(min>item){
//           min=item
//       }
//   })
//   return min
//   }
//   console.log(arraynums([5,2,35]))
  
//   // 9
//   function arraysum(myarray:number[]):number{
//     let sum:number= 0;
//     myarray.forEach(item=>{
//         sum+=item;
//     })
//     sum=sum/myarray.length
//     return sum
//     }
//     console.log(arraysum([5,2,5]))
    
//   // 10
//   function arraysum(myarray:number[]):number{
//     let sum:number= 0;
//     myarray.forEach(item=>{
//         sum+=item;
//     })
//     return sum
//     }
//     console.log(arraysum([5,2,35]))

//     // 11
//     function givenames(namesarray:string[]):string{
//       return namesarray[1];
//   }
  
//   console.log(givenames(["sara", "lala", "thth"]);
  
  
// // 12

// function givenames(namesarray:string[]):string{
//     namesarray.sort();
//     return namesarray[0];
    
// }

// console.log(givenames(["sara", "aala", "ahth"])

// // 13

// function checkifeven(nums:number[]):string{
//   for(let i=0; i<nums.length;i++){
//       if (nums[i]%2==0){
//         return "ther is even"  
//       }
//   }
//   return "not even"
// }

// console.log(checkifeven([7,1,3,9]));

// // 14///////////////////////////////////////////////
// function getdate(mydate:string):{}{
//   let mydate1= new Date(mydate);
//  return mydate1
// }
// console.log(getdate("22012022"))

// // 15

// function numandstring(num:number, myword:string):string{
//   return myword * num 
// }
// console.log(numandstring(3,"sara"));

// // 16
// function nameeandage(myname:string,age:number):string{
//   if(age>18){
//       return `welcome ${myname}`
//   }
//   else{
//       return `no entry ${myname}`
//   }
// }
// console.log(nameeandage("sara",30));

// // 17
// function firstanslast(fname:string,lname:string):string{
//   if(fname[0]== lname[0]){
//       return fname[0]
//   }
//   else{
//       return 0
//   }
// }
// console.log(firstanslast("sara","bali"));

// // 18
// function getarray(myarray:any[]):string{
//   if(!myarray){
//       return `no info`
//   }
//   else if (myarray.length==1){
//       return `one info`
//   }
//   else if(myarray.length==2){
//       return `two info`
//   }
//   else(myarray.length>3){
//       return `much info`
//   }
// }
// console.log(getarray(["sara","bali", "ghgh"]));

// function getarray(myarray:any[]):string{/////////////////////////////////////////////
//   switch(myarray.length){
//       case 0: 
//       return `no info`
//       case 1:
//       return `one info`
//       case 2:
//       return `two info`
//       default:
//       return `much info`
//   }
// }
// console.log(getarray(["sara","bali", "ghgh"]));

// // 19
// function getarrayandtext(myarray:Number[], mytext:string):number[]{
//   switch(mytext){
//     case "revers":
//         return myarray.reverse()
//     case "up":
//       return myarray.sort(a,b=>a-b)
//     case "down":
//         return myarray.sort(a,b=>b-a)
//   }
  
// }
// console.log(getarrayandtext([3,56, 19, 1], "down"));

// // 21
// // function getname(fname:string, lname?:string):void{
// //     // if(lname){
// //     //     console.log(`${fname} ${lname}`)
// //     // }
// //     // else{
// //     //     console.log(`${fname}`)
// //     // }

// //     lname? console.log(`${fname} ${lname}`):console.log(`${fname}`)
// // }

// // getname("sss", "lll");

// // 22

// // function getnameandemail(name:string, email?:string):void{
// //     email? console.log(`${name} ${email}`): console.log(`${name}`)
// // }
// // getnameandemail("sara", "hdhd@gjgj.com")

// // 23

// // function getcat( age:number,typeofcat:string, catname?:string,):void{
// //     catname? console.log(` ${age} ${typeofcat} ${catname}`): console.log(`${age} ${typeofcat}`)
// // }
// // getcat(45,"siami");

// // 24

// // function gettextandis(text:string, isexist:boolean= true):string{
// //     return isexist? `hello ${text}`:`welcome ${text}`
// // }

// // console.log(gettextandis("sara"))

// // 25

// // function getfullname(fname:string, lname:string, def:string="miss"):string{
// //     return `${fname} ${lname} ${def}`
// // }

// // console.log (getfullname("sara", "likaount"))

// // 26

// function gettext(text:string,mytext?:string, mydef:number=1):string{
//   for(let i=0; i<mydef;i++){
//      return `${mytext} ${text}`
//   }

// }

// console.log (gettext("sara", "hghg", 8));

// 27
//   function getstring(...restofchar:string[]):string[]{
//     return restofchar.sort();
//   }
// console.log(getstring(`b`,`y`,`e`,`t`,`n`,`x`,`z`,`a`));

// 28
//   function getnums(...restofchar:number[]):number[]{
//     return restofchar.sort((a,b) =>a-b);
//   }
// console.log(getnums(24,6,45,2,1));

// 29
// function getnums(...restofchar:number[]):number[]{
//   return restofchar.sort((a,b) =>b-a);
// }
// console.log(getnums(24,6,45,2,1));

// 30
// function returnstring(...restofnames:string[]):string{
//   return restofnames.sort().join(" ");
// }

// console.log(returnstring("sara", "lili","atata","mimi"));

// 31
// function gettexts(text:string = "end",...restogtexts:string[]):string[]{
//   restogtexts.push(text);
//   return restogtexts
// }
// console.log(gettexts(undefined, "djff", "fjff", "sjd"))

// 32
// function getgrades(name:string, grade?:string, p:string = "pass", ...restofgrades:number[]):string{
//   let avg:number= 0;
//   restofgrades.forEach(item=>{
//       avg += item}
//     )  
//   return `${name} ${grade? `${grade}`:" "} ${p} ${restofgrades.sort((a,b)=>a-b)} avg of grades is ${avg/restofgrades.length}` 
// }

// console.log(getgrades("dsdas",undefined,undefined, 10, 100, 80 ));

// 33
// function getsizes(name: string, discount?:number, color:string= "black",...restsizes:number[]):string{
//   return `${name} ${discount? `sale is ${discount} %`: ""} ${color} ${restsizes.sort((a,b)=>a-b)}`
// }
// console.log(getsizes("zara", undefined,undefined, 34,43,23));

// // 34
// // class Car{
// //     company;
// //     brand;
// //     color;
// //     constructor(company:string, brand:string,color:string){
// //         this.company=company,
// //         this.brand=brand,
// //         this.color=color
// //     }
// // }

// // 35

// // class Elefent{
// //     hight;
// //     kind;
// //     age;
// //     countey;
// //     constructor( hight:number,kind:string,age:number,countey:string){
// //         this.hight= hight;
// //         this.kind= kind,
// //         this.age=age,
// //         this.countey= countey    
// //         }
    
// //     returnstring(){
// //         return `${this.hight} ${this.kind} ${this.age} ${this.countey}`
// //     }
// // }

// // let myele= new Elefent(44, "JGH", 3, "ISRA");
// // console.log(myele.returnstring());

// // 36
// // class Patns{
// //     size;
// //     color;
// //     fabric;
// //     length;
// //     isstoke;
// //     constructor(size:number, color:string, fabric:string,length:number, isstoke: boolean){
// //         this.size= size,
// //         this.color=color,
// //         this.fabric=fabric,
// //         this.length=length,
// //         this.isstoke= isstoke
// //     }
// //     private returninfo():string{
// //         return `${this.size} ${this.color} ${this.fabric} ${this.length} ${this.isstoke}`
// //     }
// //     get getdeatils():string{
// //         return this.returninfo()
// //     }
// // }

// // let mypants= new Patns (33, "red", "cuoton",22, true)
// // console.log(mypants.getdeatils)

// // 37
// class Athlete{
//   fullname;
//   birthdate;
//   field;
//   gender;
//   constructor(fullname:string, birthdate:string ,field:string, gender?:string){
//       this.fullname=fullname,
//       this.birthdate=birthdate,
//       this.field=field,
//       this.gender= gender
//   }
//   protected returndetails():string{
      
//       return this.gender? `${this.fullname} ${this.birthdate} ${this.field} ${this.gender}`:`${this.fullname} ${this.birthdate} ${this.field}`
//   }

// }
// // let myplayer= new Athlete("sdr jjh", "21.2", "football","male")
// // console.log(myplayer)

// // 38
// // class Football extends Athlete{
// //     team;
// //     istopteam;
// //     constructor(team:string,istopteam:boolean, fullname:string, birthdate:string ,field:string, gender?:string){
// //     super(fullname, birthdate,field, gender)   
// //     this.team=team,
// //     this.istopteam=istopteam
// //     }

// //     returndetails():string{
// //         return `${super.returndetails()} ${this.team} ${this.istopteam}`
// //     }
// // }

// // let player2= new Football("haha", true,"sdr jjh", "21.2", "football","male")
// // console.log(player2.returndetails())

// // //   39
// class User {
//   fullname:string;
//   age:number;
//   password:string;
//   private isconected:boolean=true;
//   constructor(fullname:string,age:number,passwors:string){
//       this.fullname=fullname,
//       this.age=age,
//       this.password=passwors  
//   }
//   get getisconectes():boolean{
//       return this.isconected
//   }
//   set isconectes(answer:boolean){
//       this.isconected=answer;
//   }
//   static returnyungerorolder(y_or_o:string, ...usersobj:User[]):User{
//       if(y_or_o=="younger"){
//           return usersobj.sort((a:User,b:User) =>a.age-b.age)[0];
//       }
//       else{
//           return usersobj.sort((a:User,b:User)=>b.age-a.age)[0];
//       }

//   }
// }

// let user1:User= new User("sarali", 30,"dgdgd5757");
// let user2:User= new User("sarali", 56,"dgdgd5757");
// let user3:User= new User("sarali", 2,"dgdgd5757");
// console.log(User.returnyungerorolder("older", user1,user2,user3));

// // user1.isconectes= false;
// console.log(user1.getisconectes)

// // 40

// class Student extends User{
//   firstname;
//   lastname;
//   dateofbirth;
//   email;
//   constructor(fullname:string,age:number, password:string,firstname:string,lastname:string,dateofbirth:string,email:string){
//   super(fullname, age,password)
//   this.fullname= `${this.firstname=firstname} ${this.lastname=lastname}`
//   this.dateofbirth= dateofbirth,
//   this.email= email
//   }

//   returnalldetails():string{
//       return `${super.fullname} ${super.age} ${super.password} ${this.dateofbirth} ${this.email}`
//   }

// }

// let student1= new Student("hdhdy", "lsidj", 23, "sdss344", "11-2","jdsjds@hfg.com");
// console.log(student1);

// 41

// class Room {
//   width:number;
//   heigt:number;
//   squer:number;
//   private isWindow:boolean=true;
//   constructor(w:number, h:number, s:number){
//     this.heigt=h;
//     this.width=w;
//     this.squer=s;
//   }
//   get window(){
//     return this.isWindow;
//   }
//   set window(a){
//     this.isWindow =a;
//   }
//   static ifroomObj(text:string, ...roomobj:Room[]):Room{
//     if(text=="big"){
//       return roomobj.sort((a,b)=> a.width-b.width)[roomobj.length-1]
      
//     }
//     else{
//       return roomobj.sort((a,b)=> a.width-b.width)[0]}
// }
// }

// let mycar:Room= new Room(54,67,89);
// let mycar1:Room= new Room(54,67,23);
// let mycar2:Room= new Room(54,67,54);

// console.log(Room.ifroomObj("big", mycar,mycar1,mycar2));


// 42
// class Kitchen extends Room{
//   closetnum:number;
//   constructor(w:number,h:number,s:number,c:number){
//     super(w,h,s)
//     this.closetnum=c;
//   }
//   returndetails():string{
//     return `${this.width} ${this.heigt} ${this.closetnum}`
//   }
//   ifwindow():string{
//     return `${this.window? "have window" : "close room"}`
//   }
// }

// let mykitchen:Kitchen=new Kitchen (3,4,5,8);
// let mykitchen1:Kitchen=new Kitchen (3,4,5,8);
// let mykitchen2:Kitchen=new Kitchen (3,4,5,8);
// console.log(Kitchen.ifroomObj("small", mykitchen, mykitchen1, mykitchen2));

// 43

// class Livingroom extends Room {
//   sittingplaces:number;
//   airdir:number;
//   constructor(w:number,h:number,s:number,si:number,a:number){
//     super(w,h,s)
//     this.sittingplaces=si;
//     this.airdir=a;
//   }
//   getdeatils():string{
//     return `${this.width} ${this.heigt} ${this.sittingplaces} ${this.airdir}`
//   }
//   getairdir(){
//     if(this.window){
//       return `have window ${this.airdir}`
//     }
//     return `close room`
//   }
// }

// let mylv:Livingroom= new Livingroom(2,5,77,7,8)
// let mylv1:Livingroom= new Livingroom(3,5,87,7,34)
// let mylv2:Livingroom= new Livingroom(1,5,6,7,8)

// console.log(Livingroom.ifroomObj("big", mylv,mylv1,mylv2));


// 44

class Item{
width:number;
heigt:number;
wight:number;
price:number;
private isorderd:number;
constructor(w:number, h:number, wig:number, p:number){
  this.width=w;
  this.heigt=h;
  this.wight=wig;
  this.price= p;
}
get orderd():number{
  return this.isorderd
}
set myorderd(arg:number){
  this.isorderd= arg;
}
static cORe(text:string= "expensive", ...restofitems:Item[]):Item{
  if(text=="expensive"){
    return restofitems.sort((a,b)=>a.price-b.price)[restofitems.length-1]
  }
  else{
    return restofitems.sort((a,b)=>a.price-b.price)[0]
  }
}
  deatils():string{
    return `${this.width} ${this.heigt} ${this.wight} ${this.price} `
  }

}

let myitem:Item= new Item(43,45,67,89);

myitem.myorderd=10;
console.log(myitem.orderd);



// // let myitem:Item= new Item(3,7,98,45)
// // let myitem2:Item= new Item(3,7,98,21)
// // let myitem3:Item= new Item(3,7,98,28)

// // console.log(Item.cORe(undefined,myitem,myitem2,myitem3));

// // 45
// class Computer extends Item {
//   numoforders:number|undefined;
//   rezulotion:number;
//   constructor(w:number, h:number, wig:number, p:number, r:number,n?:number|undefined){
//     super(w,h,wig,p)
//     this.numoforders=n;
//     this.rezulotion=r;
//   }
//   getdeatils():string{
//     return `${this.width} ${this.heigt} ${this.wight} ${this.price} ${this.numoforders} ${this.rezulotion} `
//   }

//   iforders():string{
//     if (this.orderd){
//      return `${this.orderd} orderd`
//     }
//     else{
//       return `need to order`
//     }
//   }
// }
// let mycomputer1:Computer= new Computer(54,88,98,2,87,undefined)
// let mycomputer2:Computer= new Computer(54,88,98,38,87,65)
// let mycomputer3:Computer= new Computer(54,88,98,54,87,97)

// console.log(Computer.cORe("small",mycomputer1,mycomputer2,mycomputer3));
// console.log(mycomputer1.getdeatils())

// 46

class Compscreen extends Item {
vat:number;
constructor(w:number, h:number, wig:number, p:number,v:number){
  super(w,h,wig,p)
  this.vat=v;
}

mydetails():string{
  return `${super.deatils()} ${this.vat}`
}

}



// interface//////////////////////

// 50

// interface IUser{
//   firstname:string;
//   lastname:string;
//   dateofbirth:string;
// }

// class Persone{
//   hight:number;
//   country:string;
//   user1: IUser;
//   constructor(hight:number, country:string ,user1:IUser){
//     this.hight=hight;
//     this.country=country;
//     this.user1= user1;
//   }
// }

// let myuser:IUser= {firstname:"sara", lastname:"lik", dateofbirth:"08-1-1992"};

// let mypersone:Persone= new Persone (165, "Israel",myuser);


// 51

// interface IVihecale{
//   brand:string;
//   doorsnum:number;
//   weelsnum:number;
// }

// class Carsstore{
//   city:string;
//   country:string;
//   storename:string;
//   carsarray: IVihecale[]=[];
//   constructor(city:string, country:string,storename:string, car:IVihecale[]){
//     this.city=city;
//     this.country=country;
//     this.storename=storename;
//     this.carsarray=car;
//   }
// }

// let mycar:IVihecale= {brand:"suzuky", doorsnum:5, weelsnum:4};
// let mycar2:IVihecale= {brand:"suzuky", doorsnum:3, weelsnum:9}
// let mycarstore:Carsstore= new Carsstore("netanya", "israel", "carstore", [mycar, mycar2]);

// class Garage{
//   name:string;
//   owner:string;
//   iszadik:boolean;
//   carsarray: IVihecale[]=[];
//   constructor(name:string, owner:string,iszadik:boolean, car:IVihecale[]){
//     this.name=name;
//     this.owner=owner;
//     this.iszadik=iszadik;
//     this.carsarray=car;
//   }
// }


// let mygarage:Garage= new Garage("MYCAR", "SARA", true,[{brand:"suzuky", doorsnum:5, weelsnum:4},
//                                                        {brand:"suzuky", doorsnum:5, weelsnum:4}]);

// genric typs///////////////////////////////////

// 52
// function identity<T>(one:T, two:number):T{
  
//   console.log(one
//     );
  
// }








