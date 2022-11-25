const palindromes = function (phrase) {
    const noSymbol = phrase.replace(/[^a-z0-9]/gi, '');
    const lower = noSymbol.toLowerCase();
    let splitting = lower.split('');
    let rev = splitting.reverse();
    let backToStr = rev.join('');
    return (backToStr == lower)
};

// Do not edit below this line
module.exports = palindromes;
