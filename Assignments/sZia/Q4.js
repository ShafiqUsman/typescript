"use strict";
/* Question # 4. & 5
Famous Quote: Find a quote from a famous person you admire.
Print the quote and the name of its author. Your output should look something
like the following, including the quotation marks:

Albert Einstein once said, “A person who never made a mistake never tried anything new.” */
let quotation = 'A person who never made a mistake never tried anything new.';
let writer = 'Alber Einstiein';
console.log(quoteMsg(quotation, writer));
function quoteMsg(quotation, writer) {
    return `${writer} once said, "${quotation}" \n`;
}
quotation = "Spread love everywhere you go. Let no one ever come to you without leaving happier.";
writer = "Mother Teresa";
console.log(quoteMsg(quotation, writer));
quotation = "Always remember that you are absolutely unique. Just like everyone else.";
writer = "Margared Mead";
console.log(quoteMsg(quotation, writer));
quotation = "The future belongs to those who believe in the beauty of their dreams.";
writer = "Eleanor Roosevelt";
console.log(quoteMsg(quotation, writer));
