// ________________part 1_____________________


/*let array = [4, 78, 8, 3, 6, 0, 122, 34]
const getmax=(array)=>{
    let big=array[0]
    for (let i of array) {
        if(i>big){
            big=i;   
        } 
    }
    return big;

}
console.log(getmax(array));*/


// const calculateAverage=(array)=>{
//         let sum=0;
//         for (const i of array) {
//             sum=sum+i;            
//         }
//         return sum/array.length;
// }
// console.log(calculateAverage([1,2,3,4,5,6,7]));


/*let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 console.log("before operation");
 console.log(numArr);

 const convertEvenToOdd=(array)=>{
    const odd=[];
    for (let i of array) {
        if(i%2===0){
            odd.push(i+1)     
        } 
        else{
            odd.push(i)
        }   
    }
    return odd; 
 }

    
 console.log("after operation");
 console.log(convertEvenToOdd(numArr));*/



// const filterWords=(arr)=>{
//     const array=[];
//     for (const i of arr) {
//         if(i.length>5)
//         {
//             array.push(i);
//         }
//     }
//     return array

// }



//  var words = ['eat', 'sleepy', 'codhfhe', 'repeat', 'neog', 'community']

//  console.log(filterWords(words))//



/*const capitalizeWords=(arr)=>{
    const array=[];
   for (const i of arr) 
    {   
    array.push(i.toUpperCase());
   }
   return array;
}
console.log(capitalizeWords(['eat', 'sleep', 'code', 'repeat']))*/



// const getValues=(arr)=>{
//     let array=[]
//     for (const i of arr)
//     {
//          array.push(i.name)
//     }
//     console.log("array");
//     console.log(arr);
//     return array;

// }
// console.log(
//     getValues(
//    [
//     { name: 'John', age: 21 },
//     { name: 'Mary', age: 22 },
//     { name: 'Peter', age: 23 },
//     ],
//     'name',
//     ),
//   )//



/*const userData = { firstName: 'John', lastName: 'Dee' }
let objar=[]
const podAndTeamAllocation=(data)=>{
    if(objar.length===0){
        data={...data,TeamId:1}
    }
    else {
        data={...data,TeamId:objar.length+1}

    }
   objar.push(data);
    return data;
}
console.log(podAndTeamAllocation(userData));*/




// const checkForTeam=(obj) =>{
//         if(!obj.team){
            
//             obj={...obj,team:"A"};
//             return obj;
//         }
//         else{
//             return obj;

//         }
        



//  }
//  console.log(checkForTeam({ firstName: 'Penn', lastName: 'Ma' }))
//  console.log(checkForTeam({ firstName: 'John', lastName: 'Dee', team: "B" }))
//   console.log(checkForTeam({ firstName: 'Priya', lastName: 'Raj' }))//
 

/*const book = {
    title: 'JavaScript: The Definitive Guide',
    authors: [
   { name: 'David Flanagan', age: 49 },
   { name: 'Yukihiro Matsumoto', age: 57 },
   ],
    publisher: { name: "O'Reilly Media", location: 'CA' },
   }
   // Your ES6 code here
   console.log(book.title) 
   console.log(book.authors[0].name)
   console.log(book.authors[1].name)
   console.log(book.publisher.name)*/


//    var array = [
//     {
//        name: 'Jay',
//        age: 60,
//     },
//     {
//        name: 'Gloria',
//        age: 36,
//     },
//     {
//        name: 'Manny',
//        age: 16,
//     },
//     {
//        name: 'Joe',
//        age: 9,
//     },
//     ]

//     const sumOfAges=(arr)=>{
//         let sum=0
//         for (let i of arr) {
//             sum=sum+i.age;        
//         }
//         return `sum of all ages in objects is = ${sum}`;
//     }
//     console.log(sumOfAges(array))//


/*____________part 1 end_________________*/

/*____________part 2_________________*/


// const formatArray=(items)=>{
//     return ` The array has 3 items, and the first item is "${items[0]}", and the last item is "${items[items.length-1]}".`

// }
// const items = ['apple', 'banana', 'orange']
// const message = formatArray(items);
// console.log(message);


/*const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
   }
   const formatProduct=(product)=>{
    return `${product.name} costs INR ${product.price} and is in stock`;
   }
   const message = formatProduct(product)
   console.log(message)*/


// const findPerson=(personobj,name1)=>{
//     for (const i of personobj) {
//         if (i.name===name1) {
//             return i;         
//         }
        
//     }
//     return null;

// }
//    console.log(
//     findPerson(
//     [
//     { name: 'Amay', age: 25 },
//     { name: 'Akhil', age: 25 },
//     ],
//     'Akhil',
//     )
//     )

/*const pickFirstAndSecond=(arr)=>{
    return obj={first:arr[0],second:arr[1]}
}
console.log(pickFirstAndSecond(['orange', 'banana', 'apple']))*/


// const startsWithA=(str)=>{
//     return c=(str.charAt(0)==="A")?true:false;
// }
// console.log(startsWithA('Akshita'))//


/*const printFirstCharacter=(char)=>{
    return char[0];
}
console.log(printFirstCharacter([1, 2, 3, 5, 8]))*/


// const printLastFive=(arr)=>{
//     let array=[]
//     for (let i=5; i>0; i--)
//     {
//         array.push(arr[arr.length-i]);
//     }
//     return array

// }
// console.log(printLastFive([0, 1, 1, 2, 3, 5, 8,5,7,3,4]))//

/*const sayHello=(arr)=>{
    const str=`hello `+arr[1]
    return str;
    // second option 
    // return `hello ${arr[1]}`
}
console.log(sayHello(['Akshay', 'Sweta', 'Prerana', 'Vinay']))*/


// const printSecondCharacter=(char)=>{
//     return char[1]*20;
// }
// console.log(printSecondCharacter([1, 2, 3, 5, 8]))//


/*const sumOfEvenIndices=(arr)=>{
    let sum=0
    for (let i=0; i<arr.length;  i++) {
        if(i%2===0){
            sum=sum+arr[i]
        }  
    }
    return `sum of all even indices present in an
    array = ${sum}`;
}

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5,10,15,10])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30*/


// const sumFirstTwoElements=(arr)=>{
//     return arr[0]+arr[1];
// }
// console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) // 14
//  console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) // 26


/*onst printMultipleOfFive=(arr)=>{
    for (let i of arr) {
        if (i%5===0) {
            return i; 
        }
    }

}
console.log(printMultipleOfFive([7, 40, 10, 7, 5, 3])) // 10*/


// const userData = {
//     name: 'Jane Doy',
//     postalCode: '12134',
//     city: 'Germany',
//    }

// const getAddress=(obj)=>{
//     newobj={
//         postalCode:obj.postalCode,
//         city:obj.city
//     }
//     return newobj;
// }
// console.log(getAddress(userData))
//    // {postalCode: '12134', city: 'Germany'}//


/*const printData=(userdata)=>{
    return `${userdata.name} lives in ${userdata.country}`
}
const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
   }
   console.log(printData(userData1)) 
   
   const userData2 = {
    name: 'Pritam',
    postalCode: '560223',
    country: 'India',
   }
   console.log(printData(userData));*/

//    const product = {
//     name: 'Apple MacBook Air 2020',
//     specification: {
//       capacity: '256GB',
//       size: '13.3 Inch',
//    },
//     price: 82900,
//    }

//    const printProductDetails=(obj)=>{

//     return `${product.name} which is of ${product.specification.size} wide display with ${product.specification.capacity} storage at just Rs ${product.price} /- only`
//    }

//  console.log(printProductDetails(product)) 


//to be continued.....