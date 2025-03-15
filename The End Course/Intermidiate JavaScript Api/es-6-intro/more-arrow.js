const difference =(x,y)=> x-y;
const multiply =(x,y,z)=>{
    return x+y+z
};

const student={
    name: 'khalid',
    age:22
}
const person = (p)=> p.age;

const age = person(student)
console.log(age)