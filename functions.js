function capitalize(word) {
    if (!word || typeof word !== 'string') {
        return '';
    }

    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function reversed(word) {
    if (!word || typeof word !== 'string') {
        return '';
    }

    return word.split('').reverse().join('');
}

class calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        return this.num1 / this.num2;
    }


}

function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}


function caesarCipher(word, shift) {
    word = word.split('');
    let new_word = [];
    
    word.forEach(letter => {
        if (isLetter(letter))
        {
            let new_letter = letter.charCodeAt(0);
            new_letter += shift;
            if (letter === letter.toUpperCase())
            {
                while (new_letter > 90)
                {
                    new_letter -= 26;
                }
            }
            else 
            {
                while (new_letter > 122)
                {
                    new_letter -= 26;
                }
            }
            new_word.push(String.fromCharCode(new_letter));
        }
        else 
        {
            new_word.push(letter);
        }
    })

    return new_word.join('');
}

caesarCipher('abc', 1);



module.exports = {
    capitalize: capitalize,
    reversed: reversed,
    calculators: calculator,
    caesarCipher: caesarCipher
};