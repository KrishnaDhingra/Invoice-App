let generateId = () => {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '123456789'
    let id = ''

    for(let i=0; i<2; i++){
        id = id + alphabets.charAt(Math.random() * (alphabets.length - 1)).toUpperCase()
    }
    for(let i=0; i<4; i++){
        id = id + numbers.charAt(Math.random() * (numbers.length - 1))
    }
    return id
}
export default generateId