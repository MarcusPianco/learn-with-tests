/* eslint-disable no-extend-native */

Array.prototype.sumAllMatrixElements= function(){
  let sum=0;
  for(let firstIterator=0;firstIterator<this.length;firstIterator++){
    for(let secondIterator=0;secondIterator<this[firstIterator].length;secondIterator++){
      sum+=this[firstIterator][secondIterator]
    }
  }
  return sum;
}

//Complexity O(n)
Array.prototype.insertInFirstPosition = function(element){
  for(let index=this.length;index>0;index--){
    this[index] = this[index-1]
  }
  this[0]=element
}

//Complexity O(n)
Array.prototype.removeLastElement= function(){
  for(let iterator=0;iterator<this.length;iterator++){
    this[iterator]=this[iterator+1] 
  }
  return this.pop();
}
//Complexity O(n)
function fibonacciElements(amountElements){
  let arrayElements=[1,1]
  for (let iterator=2;iterator<amountElements;iterator++){
      let sum =arrayElements[iterator-1]+arrayElements[iterator-2]
      arrayElements.push(sum)
  }
    return arrayElements    
  }

const evenCheck = (number) => number%2===0;

describe('Array', () =>{
  it('should create a array',() => {
    const array = [];
    expect(array.length).toEqual(0); 
  })
   it('should create a array using []',() => {
    const array = [];
    expect(array.length).toEqual(0); 
  })
  it('should add one element in a array',() => {
    const array = [];
    array.push(1)
    expect(array[0]).toEqual(1); 
    expect(array.length).toEqual(1); 
  })
  it('should add a element in [0] position in the array using unshift',() => {
    const array = [];
    array.unshift(1)
    array.unshift(2)
    array.unshift(3)
    expect(array[0]).toEqual(3); 
    expect(array.length).toEqual(3); 
  })
  it('should add a element in [0] position in the array using property function',() => {
    const array = [];
    array.insertInFirstPosition(1)
    array.insertInFirstPosition(2)
    array.insertInFirstPosition(3)
    expect(array[0]).toEqual(3); 
    expect(array.length).toEqual(3); 
  })
   it('should add a element in last position in the array',() => {
    const array = [];
    array.insertInFirstPosition(3)
    array[array.length]=4
    expect(array[array.length-1]).toEqual(4); 

  })
  it('should return the 9 firsts elements fibonacci sequency',() => {
    const amountElements=8
    const array = fibonacciElements(amountElements);
    const expectResult=[1,1,2,3,5,8,13,21]
    expect(array).toEqual(expectResult); 
  })
  it('should remove the last element of the array',()=>{
    const array=[1,2,3,4,5]
    array.pop();
    expect(array).toEqual([1,2,3,4])
  })
  it('should remove the first element in the array using function',()=>{
    const array = [1,2,3,4,5,6];
    array.removeLastElement()
    expect(array).toEqual([2,3,4,5,6])
  })
  it('should remove a element in array passed any index',()=>{
    const array = [1,2,3,4,5]
    array.splice(2,1)
    expect(array).toEqual([1,2,4,5])
   })
  it('should add a element in array passed any index',()=>{
    const array = [1,2,4,5]
    array.splice(2,0,3)
    expect(array).toEqual([1,2,3,4,5])

  })
  it('should create a bi-dimensional array',()=>{
    const arrayBi = [[10,20,30,40,50,60,70],[80,90,100,110,120,130,140]]
    expect(arrayBi[0].length).toEqual(arrayBi[1].length)
    expect(arrayBi[0]).toBeInstanceOf(Array)
    expect(arrayBi[1]).toBeInstanceOf(Array)
  })
  it('should execute a sum in all elements in bi-dimensional array',()=>{
    const arrayBi = [[10,20,30,40,50,60,70],[80,90,100,110,120,130,140]]
    const result = arrayBi.sumAllMatrixElements()
    expect(result).toBe(1050)
  })
  it('should concat two arrays elements into a array',()=>{
    const array = ['love']
    const array2 = ['the', 'world']
    const arrayConcat= array.concat(array2);
    expect(arrayConcat).toEqual(['love', 'the', 'world'])
  })
  it('should iterate a array and stop when function return false condition',()=>{
    const array = [1,3,5,7,9,10,11];
    const checkAllOdd = array.every((element)=>!(element%2===0))
    expect(checkAllOdd).toBe(false);
  })
  it('should return all elements with function return true condition',()=>{
    const array = [1,3,5,7,9,10,11];
    const allOdds = array.filter((element)=>!(element%2===0))
    expect(allOdds).toEqual([1,3,5,7,9,11]);
  })
  it('should join all elements into a array',()=>{
    const array = ['love']
    const array2 = ['the', 'world']
    const arrayConcat= array.concat(array2).join(' ');
    expect(arrayConcat).toEqual('love the world')
  })
  it('should check exist at least one even number in array',()=>{
    const array = [1,3,5,7,11,2]
    const checkPair = array.some((element)=>((element%2)===0));
    expect(checkPair).toBe(true)
  })
  it('should return new array of even number using map function passed callback function',()=>{
      const array = [1,2,3,4,5,6,7,8,9,10,100]
      const evenNumbers=array.filter(evenCheck)
      expect(evenNumbers).toEqual([2,4,6,8,10,100])
  })
  it('should return new array of ages people using map function passed people array',()=>{
    const people=[{name: 'Marcus', age:10},  {name: 'Esteffany', age: 20}, {name:'Marine', age:39}]
    const evenNumbers=people.map((person)=>person.age)
    expect(evenNumbers).toEqual([10,20,39])
})
it('should return new array of people sorted by name',()=>{
  const people=[{name: 'marcus', age:10},  {name: 'Esteffany', age: 20}, {name:'marine', age:39}]
  const sortedByNameArray=people.sort((comparatorA,comparatorB)=>comparatorA.name.localeCompare(comparatorB.name))
  expect(sortedByNameArray).toEqual([{name: 'Esteffany', age: 20},{name: 'marcus', age:10},{name:'marine', age:39}])
})

it('should return new array of people sorted by age',()=>{
  const people=[{name: 'marcus', age:10},  {name: 'Esteffany', age: 20}, {name:'marine', age:39}]
  const sortedByNameArray=people.sort((comparatorA,comparatorB)=>comparatorA.age-comparatorB.age)
  expect(sortedByNameArray).toEqual([{name: 'marcus', age:10},{name: 'Esteffany', age: 20},{name:'marine', age:39}])
})
it('should check if element exist in array using includes()',()=>{
  const array = [1,2,3,4,5,6,7]
  expect(array.includes(8)).toBe(false)
})
it('should find element in array using find() method and function call',()=>{
  const array = [1,2,3,4,5,6,7]
  const functionCheck = (element, index,array)=> element%2===0;
  const findFirstEven = array.find(functionCheck);
  expect(findFirstEven).toBe(2)
})
it('should find element position  in array using findIndex() method and function call',()=>{
  const array = [1,2,3,4,5,6,7]
  const functionCheck = (element, index,array)=> element%2===0;
  const findFirstEven = array.findIndex(functionCheck);
  expect(findFirstEven).toBe(1)
})
})