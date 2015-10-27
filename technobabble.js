var technobabble = (function(){

    var dictionary = require('./dictionary.json');


    /**
     * Randomly grab a word from a collection.
     * @param {array} arr - Collection of words to randomly extract from
     */
    function getRandom(arr) {
        return arr[~~(Math.random()*arr.length)];
    }

    /**
     * Generate a specified number of sentences.
     * @param {number} num - Number of sentences to generate
     */
    function generateSentence(num) {
        var sentenceResult = '',
            sentencePattern = getRandom(dictionary.template);

        // Loop through template and grab respective random word
        for (var i = 0, max = sentencePattern.length; i < max; i ++) {
            sentenceResult += getRandom(dictionary[sentencePattern[i]]);
            if (i === max - 1) {
                sentenceResult += '.';
            }
        }

        return lintSentence(sentenceResult);
    }


    /**
     * Generate a specified number of paragraphs.
     * @param {number} num - Number of paragraphs to generate
     */
    function generateParagraph(num) {

    }

    /**
     * Take generated sentence and lint/fix grammatical issues
     * @param {string} sentence - Sentence to be linted and fixed
     * @returns {string}
     */
    function lintSentence(sentence) {
        return sentence.toLowerCase()
            .replace(/a(?= [aeiouAEIOU])/g, 'an') //change appropriate a's to an's
            .replace(/^./, function(char) { return char.toUpperCase() }); //capitalize the first letter of every sentence
    }

    return {
        sentence: generateSentence,
        paragraph: generateParagraph
    };

})();

module.exports = technobabble;