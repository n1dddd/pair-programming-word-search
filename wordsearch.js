const transpose = function (matrix) { //matrix transposition function, every row becomes column
    return matrix[0].map((_,column) => 
     matrix.map((_,row) => 
     matrix[row][column]
     )
  )};

const findWord = function (letters, wd) { //heler function to join letters, and return boolean if joined string matches word
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(wd)) return true;
    }
    return false; //if no word matches from joined string, return false
};
 

const wordSearch = (letters, word) => {  //function takes in letters and word
    if (letters.length === 0) { //checks arrays length, if 0 (empty), return false
        return false;
    }
    if(findWord(letters,word)) { //horizontal conditional, call findWord function, if word found horizontally true, return true
        return true;
    }

    const transposedLetters = transpose(letters); //if horizontal condition is not met, tranpose matrix
    if(findWord(transposedLetters, word)) {//vertical conditional, call findWord function on tranposed matrix, if word found vertically, return true
        return true;
    }
    
    return false; //if both conditionals above are not met, return false (as word is not found)
}

module.exports = wordSearch
