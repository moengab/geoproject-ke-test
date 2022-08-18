// Sample Array
const a = [7, 4, 7, 2, 7, -1, 8, 7, 7, 7];

const arrayLength = a.length;
let denominator = -1;
getDenominator();


function getDenominator() {

    a.forEach((value) => {
        getRepeat(a, value);
    });

    a.forEach((arrValue, index) => {
        if (arrValue === denominator) {
            console.log(index);
        }
    });

}

function getRepeat(array, value) {
    let a = 0;
    array.forEach((arrayValue) => {
        if (arrayValue === value) {
            a++
        }
    });

    if (a > (arrayLength / 2)) {
        denominator = value;
    }
}
