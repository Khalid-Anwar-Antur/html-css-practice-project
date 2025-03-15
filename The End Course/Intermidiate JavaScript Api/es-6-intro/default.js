function add(n1,n2){
    const result = n1+n2;
    return result;
}
const sum = add(5,88)

// undefined
const sumtu = add(5)



// default value 

function sumt(n1 =4,n2 =5){
    const result = n1+n2;
    return result;
}

const sumt = sumt(5)