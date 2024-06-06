let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
//console.log(secretMessage); checks array if last indexed item was removed.
secretMessage.push('to', 'Program');
//console.log(secretMessage); checks array if strings were pushed into array.
//console.log(secretMessage.indexOf('easily')); finds index of word 'easily' >> (7).
secretMessage[7] = 'right';
//console.log(secretMessage[7]); checks if array index 7 was properly changed.
secretMessage.shift();
//console.log(secretMessage); check if first index item is removed.
secretMessage.unshift('Programming');
//console.log(secretMessage); checks is string was added to first index of array.
secretMessage.splice(6, 5, 'know');
//console.log(secretMessage[6]); checks if string know was spliced in.
console.log(secretMessage.join(' '));