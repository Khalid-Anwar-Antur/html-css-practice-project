const numbers = [1,25,3,5,3,5]
for (const number of numbers){
    console.log(number)
}

const array = []

const glass = {
    name: 'glass',
    color: 'golden',
    price:'12',
    isClean: true
}

const keys = Object.keys(glass)
for(const key of keys){
    const value = glass[key]
    console.log(key,value)
}