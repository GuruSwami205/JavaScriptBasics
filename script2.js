// _______________________________part 1_________________________________


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