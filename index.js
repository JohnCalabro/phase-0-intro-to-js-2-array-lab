// Write your solution here!
const cats = ['Milo' , 'Otis' , 'Garfield']

function destructivelyAppendCat(name){
    cats.push('Ralph')
}

cats

function destructivelyPrependCat(name){
    cats.unshift('Bob')
}
cats

function destructivelyRemoveLastCat(){
    cats.pop('Garfield')
}
cats

function destructivelyRemoveFirstCat(){
    cats.shift('Milo')
}
cats


function appendCat(name){
  const  copyOfCats = [...cats, name]
  return copyOfCats
}

function prependCat(name){
    const  copyOfCats = [name, ...cats]
    return copyOfCats 
}

function removeLastCat(){
    cats.slice(0,-1)
    cats.slice
}




// function removeFirstCat(){
    // cats.slice(1)
// }
// cats
