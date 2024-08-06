export function calculateScrabbleScore(word) {
    if (word === "A" || 
        word === "E" ||
        word === "I" ||
        word === "O" ||
        word === "U" ||
        word === "L" ||
        word === "N" ||
        word === "R" ||
        word === "S" ||
        word === "T" ) {
        return 1
    } else if (
        word === "D" || 
        word === "G" 
    ) {
        return 2
    } else if (
        word === "B" || 
        word === "C" ||
        word === "M" ||
        word === "P" 
    ) {
        return 3
    } else if (
        word === "F" || 
        word === "H" ||
        word === "V" ||
        word === "W" ||
        word === "Y"
    ) {
        return 4
    } else if (word === "K") {
        return 5
    } else if (
        word === "J" || 
        word === "X" 
    ) {
        return 8
    } else if (
        word === "Q" || 
        word === "Z" 
    ) {
        return 10
    }
}


// SIMPLIFIED FUNCTION -- USED FOR TEST EACH

// export function calculateScrabbleScore(word) {
//     if (word === "A") {
//         return 1 
//     } else { 
//         return 3
//     }
// }