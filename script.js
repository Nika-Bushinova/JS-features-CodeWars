//1.Add property to every object in array
// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

for(let k of questions){
  k.usersAnswer = null;
}
//2.Colour Association
//Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.
//You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

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

//3.Combine objects
//Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
//All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
const combine=(...arg1)=>arg1.reduce((prevEl, currEl)=>{
    for(var key in currEl){
prevEl[key]==undefined?prevEl[key]=currEl[key]:prevEl[key]+=currEl[key]
    }
    return prevEl
  },{})
//4. Count the Digit
//Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
//Square all numbers k (0 <= k <= n) between 0 and n.
//Count the numbers of digits d used in the writing of all the k**2.
//Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

function nbDig(n, d) {
   let square =[];
  let answer=0;;
    for(let i=0; i<=n;i++){
     square.push(i*i)         
    }
arr= square.join('').split('');
  for( let i=0; i< arr.length;i++){
    arr[i]=+arr[i]
    arr[i]===d?answer++:answer+=0;
  }
 return answer
}

//5. Find the missing element between two arrays
//Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.
//Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

function findMissing(arr1, arr2) {
let answer=0;
 arr1.forEach((element,index)=>{
   if (arr2.indexOf(element)==-1){
  answer=element
 }else{
     arr2.splice(arr2.indexOf(element),1)
 }
   
 })
   return answer
  }

//6.Get decimal part of the given number
//Write a function that returns only the decimal part of the given number.
//You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

function getDecimal(n){
  let number=Math.abs(n)
  let answer=number-Math.floor(number)
  return answer
}

//7.Maximum Triplet Sum
//Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
//Array/list size is at least 3 .
//Array/list numbers could be a mixture of positives , negatives and zeros .
//Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

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

//8.Whose bicycle?
//I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.
//You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

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

//9. Nickname Generator
//Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.
//If the 3rd letter is a consonant, return the first 3 letters.


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

10.//Odd-Even String Sort
//Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

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

//11.Power of two
//Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
//a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
//You may assume the input is always valid.

function isPowerOfTwo(n){
let arr=[2];
for(let i=0;i<1000;i++){
  arr.push(Math.pow(2,i))
}
  return arr.includes(n)?true:false
}

//12.String Reordering
//The input will be an array of dictionaries.
//Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).
//The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.
function sentence(List) {
    let sorted  ={}
  let arr=[]
sorted=List.sort((a,b)=>Object.keys(a)[0]-Object.keys(b)[0])
  sorted.forEach((element,i)=>{
    for (key in sorted[i])
  arr.push(sorted[i][key])
  })
  return arr.join(' ')
}
//13.Sum with Arrows
//Sum all the values in an array using Arrow style function
//Task
//Your task is to complete the function in the string to Sum all the numbers in an array using the Arrow style function
//NOTE:
//Because eval hasnt caught up and cannot evaluate arrow style functions I have to do it manually. Your solution must contain the Arrow style function, the curly braces inside the reduce and the return statement because it must be manually converted to an old function style to test the validlity of the function itself. Your function will be returned to you when it is converted incase it fails (which is highly possible) if any issues occur please post in the discussion and provide your solution marked as spoiler, Thanks.

var Sum ='sum= function(arr){ return arr.reduce((e1,e2)=>e1+e2)}';     

//14.Unpacking Arguments
//You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

function spread(func, args) {
  return func(...args);
}

//15.Vowel one
//Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
//All non-vowels including non alpha characters (spaces,commas etc.) should be included.
function vowelOne(s){
let arr=  s.toLowerCase().split('')
let answer=[];
let cons='euioa'
arr.forEach((el)=>{
  cons.includes(el)?answer.push('1'):answer.push('0')
})
  return answer.join('')
}


//16. Who is the killer?
//Some people have been killed!
//You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.
//Task.
//Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:
function killer(suspectInfo, dead) {
  let obj=[]
  for(let key in suspectInfo ){
   suspectInfo[key].forEach((element)=>{
      for(let i=0;i<dead.length;i++){
         if(element===dead[i]){
        //   console.log(key)
           obj.push(key)
         }
      }
    })
  }
  for(let i=0; i<obj.length;i++){
    if(obj[i]===obj[i+1]||obj.length===1)
      return obj[i]
  }
  
}

//17. Data Reverse
//A stream of data is received and needs to be reversed.
//Each segment is 8 bits long, meaning the order of these segments needs to be reversed
function dataReverse(data) {
   let arr=[];
   let reverseArr=[]
   let result=[]
 while (data.length > 0) {
 arr.push(data.splice(0,8))
 }
reverseArr=arr.reverse()
   reverseArr.forEach((el)=>{
   el.forEach((e)=>{ result.push(e)})
   })
return result
}

/*18.Count strings in objects

Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:
strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
  */
function strCount(obj){
  let count=0;
  if( typeof obj==='string'){
    console.log(obj)
   count+=1
  }
    if(Array.isArray(obj)){
        obj.forEach((el)=>{
        strCount(el)
        })
    }
if(typeof(obj)==='object'){
  for(let k in obj){
   count+=strCount(obj[k])
  }
}
  return count
}

/*19. After yet another dispute on their game the Bingo Association decides to change course and automate the game.

Can you help the association by writing a method to create a random Bingo card?

Bingo Cards
A Bingo card contains 24 unique and random numbers according to this scheme:

5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75
Task
Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.
*/

function getCard() {

    function generate(prefix, start, end, quantity){
        let arr=[]
      let i=0;
      while(i<quantity){
      let number=Math.floor(Math.random() * (end - start) + start)
        if(!arr.includes(prefix+number)){
          arr.push(prefix+number)
        }else{
          i--
        }
        i++
        }
      return arr
    }
  let b=(generate('B', 1, 15, 5))
  let i=(generate('I', 16, 30, 5))
  let n=(generate('N', 31, 45, 4))
  let g=(generate('G', 46, 60, 5))
  let o=(generate('O', 61, 75, 5))
  
  return [...b,...i,...n,...g,...o]
}
/*20.Story
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

What a bunch of cheapskates!

Can you do it?

Kata
Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.

Examples
12:00 = 0 degrees

03:00 = 90 degrees

06:00 = 180 degrees

09:00 = 270 degrees

12:00 = 360 degrees

Notes
0 <= angle <= 360

Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.

3 o'clock is 03:00, not 15:00
7 minutes past midnight is 12:07
7 minutes past noon is also 12:07
*/
var whatTimeIsIt = function(angle) {
 let hours=Math.floor(angle/30)===0?'12':Math.floor(angle/30)/10<1?'0'+Math.floor(angle/30):Math.floor(angle/30)
  let minutes=Math.floor(angle*2%60)/10<1?'0'+Math.floor(angle*2%60):Math.floor(angle*2%60)
 return hours+':'+minutes
}

/*21.Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
*/
function isPrime(num) {
  let sqr = Math.sqrt(num)
  for (let i = 2; i <= sqr; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return sqr > 1
}

/*22. You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:*/
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

