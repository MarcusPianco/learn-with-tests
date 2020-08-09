
//Complexity O(n)
Array.prototype.insertinFirstposition = function(element){
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
function fibonacciElements(amounElements){
  let arrayElements=[1,1]
  for (let iterator=2;iterator<amounElements;iterator++){
      let sum =arrayElements[iterator-1]+arrayElements[iterator-2]
      arrayElements.push(sum)
  }
    return arrayElements    
  }

describe('Create array', () =>{
  it('should create a array',() => {
    const array = new Array();
    expect(array.length).toEqual(0); 
  })
   it('should create a array usng []',() => {
    const array = [];
    expect(array.length).toEqual(0); 
  })
})

describe('Add Elemtens in array', () =>{
  it('should add one element in a array',() => {
    const array = new Array();
    array.push(1)
    expect(array[0]).toEqual(1); 
    expect(array.length).toEqual(1); 
  })
  it('should add a element in [0] position in the array using unshift',() => {
    const array = new Array();
    array.unshift(1)
    array.unshift(2)
    array.unshift(3)
    expect(array[0]).toEqual(3); 
    expect(array.length).toEqual(3); 
  })
  it('should add a element in [0] position in the array using property function',() => {
    const array = new Array();
    array.insertinFirstposition(1)
    array.insertinFirstposition(2)
    array.insertinFirstposition(3)
    expect(array[0]).toEqual(3); 
    expect(array.length).toEqual(3); 
  })
   it('should add a element in [array.length] position in the array using property function',() => {
    const array = new Array();
    array.insertinFirstposition(1)
    array.insertinFirstposition(2)
    array.insertinFirstposition(3)
    array[array.length]=4
    expect(array[array.length-1]).toEqual(4); 

  })
  it('should return the 9 firsts elements fibonacci sequency',() => {
    const amountElements=8
    const array = fibonacciElements(amountElements);
    const expectResult=[1,1,2,3,5,8,13,21]
    expect(array).toEqual(expectResult); 
  })
  it('should remove the last element of the array ',()=>{
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
    console.log(array)
    expect(array).toEqual([1,2,3,4,5])

  })
})
