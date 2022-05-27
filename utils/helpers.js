const formatDate = function(date) {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`
}

const formatPlural = function(word, amount) {
    if (amount !== 1) {
        return `${word}s`
    } else {
        return word;
    }
}

const formatUrl = function (url) {
    return url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('/')[0]
    .split('?')[0]
}

module.exports = {formatDate, formatPlural, formatUrl};