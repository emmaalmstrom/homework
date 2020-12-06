let str = ''
for (let i = 10; i > 0; i--) {
    
    for (let j = 0; j < i; j++) {
        str = str + '* '
    }
    str = str + '\n' 
}

console.log(str)

let str2 = ''
for (let i = 0; i < 5; i++) {
    
    for (let j = 0; j < 5; j++) {
        str2 = str2 + '* '
    }
    str2 = str2 + '\n' 
}

console.log(str2)