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

module.exports = {
    capitalize: capitalize,
    reversed: reversed
};