// Generate a Random Hex Color Values
// Use a function that returns a full 6-digits hex value with one line

function color() {
    // const c = Math.random() * (parseInt('0xffffff') + 1) // from 0 to 0xffffff
    // console.log(c, ', int: ', parseInt('0x1000000'))
    // const ci = Math.floor(c)
    // const h = ci.toString(16)

    return '#' + Math.floor(Math.random() * (parseInt('0xffffff') + 1)).toString(16)
}

const rev = color();
console.log(rev)