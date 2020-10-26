 //chunk
let array=['a','b','c','d']
let n=array.length;
    let newarray;
    let arr1;
    let arr2;
 chunkarray=(array,value)=>{

    if(n>value){
 arr1=array.slice(0,value)
 arr2=array.slice(value,value*2)
    }
    else{
        console.log('array size not enough')
    }
  
newarray=[arr1,arr2]
    return newarray
  

}
console.log(chunkarray(array,2))


//bind
const bind = (fn, thisArg, ...partials)=> { 
    return (...args) => fn.apply(thisArg, [...partials, ...args])
  }
  function greet(greeting, punctuation) {
    return `${greeting} ${this.user}${punctuation}`;
  }
  const object = {
    'user': 'shiva'
  };
  const bound = bind(greet, object, 'hi');
  console.log(bound('!'))
  


  //delay
  const delay = (fn, wait, ...args) => {
    setTimeout((...args) => fn(...args), wait, ...args)
  }
  delay((text) => {
    console.log(text);
  }, 1000, 'whats up?');


  


  //unzip
  const unzip = (zipped) => {
    let unzipped = zipped[0].map(z => []);
    for (let j = 0; j < unzipped.length; j++) {
      for (let i = 0; i < zipped.length; i++) {
        unzipped[j].push(zipped[i][j])
      }
    }
    return unzipped;
  }
  console.log(unzip([
    ['a', 1, true],
    ['b', 2, false]
  ]))


  //unzipwith
  const unzipWith = (zipped, iteratee) => {
    let unzipped = zipped[0].map(z => []);
    for (let j = 0; j < unzipped.length; j++) {
      for (let i = 0; i < zipped.length; i++) {
        unzipped[j].push(zipped[i][j])
      }
    }
    return unzipped.map(arr => {
      return arr.reduce(iteratee);
    });
  }
 console.log( unzipWith([
    [1, 10, 100],
    [2, 20, 200]
  ], (a, b) => a + b))



