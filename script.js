// const age =(a)=>{

//     if(a>=1&&a<18){
//         console.log("sorry your age is not eligible for voting");
//     }
//     else if(a>=18){
//         console.log("you are eligible for voting");
//     }else{
//         console.log("please enter a valid age");
//     }

// }
// console.log(age(10));


/*const isgreater=(a,b)=>{
    let c=a>b?a:b;
    console.log("greater no is ",c);
}
isgreater(10,20);*/


// const checkNo=(a)=>{
//     if (a>0){
//         console.log("no is positive"); 
//     } 
//      else if(a<0) 
//     {
//         console.log("no is negative");
//     }
//      else{
// //       console.log("zerp")
 //           }
// }
// checkNo(10);
// checkNo(15);


/*const isevenOdd=(a)=>{
    if (a%2===0) {
        console.log("positive");
        
    } else {
        console.log("negative"); 
    }
 }
isevenOdd(10);*/


// const checkForAlphabetA=(str)=>{
//     let find=false;

//     for (let i=0; i<str.length; i++) {
//         if(str[i]==="a"||str[i]==="A")
//         {
//             find=true;
//             break;
//         }
//     }
//     if(find){
//         console.log("includes a");
//     }
//     else{
//         console.log("does not includes a");
//     }
// }
// checkForAlphabetA("ddhr");


/*const checkLength=(str)=>{
    let length=false;
    for (let i=0; i<str.length; i++) {
        i++;
        if(i>5){
            length=true;
         break;
        }
    }
    if(length){
        console.log("string contain more than 5 characters");
    }
    else{
        console.log("string contain less than 5 characters");
    }
}
checkLength("Swamigururaj");*/



// const between1to10=(a)=>{
    
//     const c=(a<10)?true:false;
//     return c;
    
// }
// console.log(between1to10(26));


/*const helloPresent=(str)=>{
    
//     let c=(str==="hello")?true:false;
//     return c;
    
// }
//console.log(helloPresent("Hello"));*/

// const isMultipleOfThree=(num)=>{
    
//     let c=(num%3===0)?true:false;
//     return c;
    
// }
// console.log(isMultipleOfThree(5));



/*const isMultipleOfTen=(num)=>{
    
    let c=num*10;
    return c;
    
}
console.log(isMultipleOfTen(40));*/


// const product = {
//     title: 'iPhone',
//     price: 5999,
//     description: 'The iPhone is a smartphone developed by Apple',
//    }

//    console.log(product.title);
//    console.log(product.price);
//    console.log(product.description);


/*const book={
    title:"donno",
    auther:"amar",
    pages:99
}

const getbookpages=(book)=>{
    let page=true;

    const c=(book.pages>100)?true:false;     return c;
}
console.log(getbookpages(book));*/


// person={ name: 'Amit', age: 25, occupation: 'Software Engineer' } 
// console.log(person)
// const changeOccupation =(person,occupation)=>{
//     person.occupation=occupation;

// }
// changeOccupation(person, 'Product Manager');
// console.log(person);


/*const arr=[1,2,3]
let a=arr[0];
let b=arr[1];
let c=arr[2];
console.log(a);
console.log(b);
console.log(c);*/

// const defaultParamsFunc=(a,b,c=4)=>{
//     return a*b*c;  
// }
// console.log(defaultParamsFunc(30, 2))
//


/*_______________part 2________________*/


// const person={
//     name:"Swami",
//     age:30
// }
// console.log(person.age+5);



   /* const car1 = { make: 'Porsche', model: '911', horsepower: 450 }

    const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 }

    const sportCar=(obj)=>{
        let c=(obj.horsepower>=300)?true:false;
        console.log(c);

    }
    sportCar(car1);
    sportCar(car2);*/


    // const person1 = { name: 'Ajay', age: 20 }
    // const isEligible=(person1,num)=>{
    //     const c=((person1.age+num)>21)?true:false
    //     console.log(c);

    // }
    // isEligible(person1, 1) false
    // isEligible(person1, 2)  true


    /*const blog1 = {
        title: 'How to Learn JavaScript',
        author: 'John Doe',
        views: 1430,
       }
       const blog2 = {
        title: '10 Reasons to Start a Blog',
        author: 'Jane Smith',
        views: 500,
       }
    const views=(obj)=>{
        let c=(obj.views>1000)?true:false;
        console.log(c);

    }
    views(blog1);
    views(blog2);*/



// const add=(a=30,b=0)=>{
//     return a+b;
// }
// console.log(add());


/*const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
 const combinobj=(obj1,obj2)=>{

    return {...obj1,...obj2}
 }
 const obj=combinobj(obj1,obj2);
 console.log(obj);*/


//  const person = {
//     name: 'John Doe',
//     address: {
//       city: 'New York',
//       state: 'NY',
//    },
//    }
//    const getData=(person)=>{
//     const name = person.name
//     const address = person.address.city
//     console.log(name) 
//     console.log(address)
//    }
//    getData(person);



/*const stringToUpperCase=()=>{
    return "hello".toUpperCase()
    ;
}

console.log(stringToUpperCase());*/

// const concatenateStrings=()=>{
//     return "hello".concat(" world...")
// }
// console.log(concatenateStrings());


/*const lastElement=(arr)=>{
    return arr[arr.length-1]

}
console.log(lastElement([1,2,3,4,5]));*/


// const firstElement=(arr)=>{
//     return arr[0]

// }
// console.log(firstElement([1,2,3,4,5]));




/*const sumFirstElement=(arr,n)=>{
    let sum=0
    for (const i of arr) {
        sum=sum+i;   
    }
    return sum;
    
}
console.log(sumFirstElement([1, 2, 3], 5))*/


// const sumFirstAndLast=(arr)=>{
//     return arr[0]+arr[arr.length-1];
// }
// console.log(sumFirstAndLast([1, 2, 
// 3, 4, 8]));


/*const person1 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' };*/

// const personInfo=(age)=>{
//     age = `john is ${age.age} year old`;
//     return age
// }
// console.log(personInfo(person1));
// console.log(personInfo(person2));













