function add(num1, num2) {
let num3=num1.toString().split('').reverse().map(element=>+element)
  let num4=num2.toString().split('').reverse().map(element=>+element)
  let num5=[];
for(let i=0;i<(num3.length>num4.length?num3.length:num4.length);i++){
  num5.push((parseInt(num4[i])||0)+(parseInt(num3[i])||0))
}
  let num6=(+num5.reverse().join(''))
  return num6
}

console.log(add(46598,284))




function colourAssociation(array){
  let array2=[];
  array.forEach(arr=>{
  let obj={};
  let i=arr[0]
  obj[i]=arr[1]
  array2.push(obj)  
  })
  return array2 
}
console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))
////////////////////////////более кратко///////////////////////////////////////////

function colourAssociation2(array){
return array.map(function([color, association]){return ({color:association})})
}
console.log(colourAssociation2([["white", "goodness"], ["blue", "tranquility"]]))

/////////////////////////////////////////////////////////////////////////////////


const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }


const combine=(...arg1)=>arg1.reduce((prevEl, currEl)=>{
    for(var key in currEl){
prevEl[key]==undefined?prevEl[key]=currEl[key]:prevEl[key]+=currEl[key]
    }
    return prevEl
  },{})

console.log(combine(objA, objB,objC,objD))
/////////////////////////////////////
function nbDig(n, d) {
   let square =[];
  let answer=0;;
    for(let i=0; i<=n;i++){
     square.push(i*i)         
    }
arr= square.join('').split('');
  for(const [i, v] of arr.entries()){//в цикле for of для доступа к индексу массива нужно использовать const [i, v] of arr.entries()
    arr[i]=+arr[i]
    arr[i]===d?answer++:answer+=0;
  }
 return answer
}

console.log(nbDig(12224, 8))

//////////////////////////////////////////////////////
function findMissing(arr1, arr2) {
let answer=0;
 arr1.forEach((element,index)=>{
   if (arr2.indexOf(element)==-1){
     console.log('yes')
  answer=element
 }else{
     console.log('no', element)
     arr2.splice(arr2.indexOf(element),1)
 }
   
 })
   return answer
  }



console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]))


////////////////////////////////////////////////////////////////
function getDecimal(n){
  let number=Math.abs(n)
  let answer=number-Math.floor(number)
  return answer
}

console.log(getDecimal(-35428951.4934765))
//////////////////////////////////////////////////////////////////


function whoseBicycle(diary1, diary2, diary3) {
  function objF(obj){
    let sum=0;
    let result=0;
    let count=0;
    for(let key in obj){
      sum+=obj[key]
      count++
    }
    result=sum/count
    return result
  }
let one=objF(diary1)
  let two=objF(diary2)
  let three=objF(diary3)
  let answer='k';
return one>two&&one>three?answer='I need to buy a bicycle for my first son.':two>one&&two>three?answer='I need to buy a bicycle for my second son.':three>one&&three>two?answer='I need to buy a bicycle for my third son.':answer='I need to buy a bicycle for my third son.'
  
 
}
console.log(whoseBicycle(
                                 {
                                    'algebra': 6,
                                    'history': 7,
                                    'physics': 8,
                                    'geography': 9,
                                    'chemistry': 5
                                  },
                                  {
                                    'algebra':6,
                                    'history': 7,
                                    'physics': 8,
                                    'geography': 9,
                                    'chemistry': 10
                                  },
                                  {
                                    'algebra': 6,
                                    'history': 7,
                                    'physics': 8,
                                    'geography': 9,
                                    'chemistry': 10
                                  }
                                ))


//////////////////////////////////////////////////////////////////////////////
function nicknameGenerator(name){
  let arr=name.split('');
  let vowels=['e','u','i','o','a'];
  let answer;
  if(arr.length>3){
  answer=arr.slice(0,3).join('')
arr.forEach((element,index)=>{
  if(vowels.includes(element)&&index===2){
    console.log('2')
    answer=arr.slice(0,4).join('')
  }
  
})
  }else{
    answer="Error: Name too short"
  }
return answer
}

console.log(nicknameGenerator("Saam"))
//////////////////////////////////////////////////////////
function sortMyString(S) {
    let arr=S.split('')
 let partOne= arr.filter((element,index)=>{
    return index%2===0
  }).join('')
  let partTwo=arr.filter((element,index)=>{
    return index%2!==0
  }).join('')
    return `${partOne} ${partTwo}`;
  
}

console.log(sortMyString("YCOLUE'VREER"))
///////////////////////////////////////////////////////////////
function isPowerOfTwo(n){
let arr=[2];
for(let i=0;i<1000;i++){
  arr.push(Math.pow(2,i))
}
  return arr.includes(n)?true:false
}
console.log(isPowerOfTwo(5223))
//////////////////////////////////////////

function vowelOne(s){
let arr=  s.toLowerCase().split('')
let answer=[];
let cons='eyuioa'
arr.forEach((el)=>{
  cons.includes(el)?answer.push('1'):answer.push('0')
})
  return answer.join('')
}
console.log(vowelOne( "123, arou" ))
///////////////////////////////////////////////////////
function killer(suspectInfo, dead) {
  let arr=[]
  for(let key in suspectInfo ){
   suspectInfo[key].forEach((element)=>{
      for(let i=0;i<dead.length;i++){
         if(element===dead[i]){
           arr.push(key)
         }
      }
    })
  }
  for(let i=0; i<arr.length;i++){
    if(arr[i]===arr[i+1]||arr.length===1)
      return arr[i]
  }
  
}
/////////////////////////////////////////////////////////////
function maxTriSum(numbers){
 let arr=[];
function array2(){
  let unique=new Set(numbers);
  return ([...unique])
}
let array=array2()
array.sort((a,b)=>b-a).forEach((element,index)=>{
if(arr.length<3){
  arr.push(element)
}
  })
return arr.reduce((previous,current)=>{
        return previous+current
      },0)
 
}

/////////////////////////////////////////////////////////////

function sentence(List) {
    let sorted  ={}
  let arr=[]
sorted=List.sort((a,b)=>Object.keys(a)[0]-Object.keys(b)[0])
 sorted.forEach((el,i)=>{
    for (key in sorted[i])
  arr.push(sorted[i][key])
  })
  return arr.join(' ')
}
