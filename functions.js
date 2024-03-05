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



module.exports = {
    capitalize: capitalize,
    reversed: reversed,
    calculators: calculator
};