const {formatDate, formatPlural, formatUrl} = require('../utils/helpers');

test('formatDate() correctly returns date string', () => {
    const date = new Date('2022-05-26 10:10:10')

    expect(formatDate(date)).toBe('5/26/2022')
})

test('formatPlural() correctly formats based on 1 or more items', () => {
    const word = 'comment'

    expect(formatPlural(word, 2)).toBe('comments');
    expect(formatPlural(word, 1)).toBe('comment');
})

test('formatUrl() returns main domain of URL', () => {
    const url1 = formatUrl('https://handlebarsjs.com/guide/builtin-helpers.html#each');
    const url2 = formatUrl('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth');
    const url3 = formatUrl('https://www.w3schools.com/jsref/jsref_length_string.asp');

    expect(url1).toBe('handlebarsjs.com')
    expect(url2).toBe('developer.mozilla.org')
    expect(url3).toBe('w3schools.com')
})