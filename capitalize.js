function capitalize(word) {
    if (!word || typeof word !== 'string') {
        return '';
    }

    word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = capitalize;