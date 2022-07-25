"use strict";
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
function gettexts(...restogtexts) {
}
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
// interface IVihecale{
//   brand:string;
//   doorsnum:number;
//   weelsnum:number;
// }
// class Carsstore{
//   city:string;
//   country:string;
//   storename:string;
//   car: IVihecale[];
//   constructor(city:string, country:string,storename:string,car:IVihecale[]){
//     this.city=city;
//     this.country=country;
//     this.storename=storename;
//     this.car=car;
//   }
// }
// let mycar:IVihecale= {brand:"suzuky", doorsnum:5, weelsnum:4};
// let mycarstore:Carsstore= new Carsstore("netanya", "israel", "carstore", mycar);
// class Garage{
//   name:string;
//   owner:string;
//   iszadik:boolean;
//   carsarr: string[];
//   constructor(name:string, owner:string,iszadik:boolean, carsarr:string[]){
//     this.name=name;
//     this.owner=owner;
//     this.iszadik=iszadik;
//     this.carsarr=carsarr;
//   }
// }
