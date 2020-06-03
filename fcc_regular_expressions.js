// Regular Expressions
// Used in programming languages to match parts of strings. You create patterns to help you do that matching
// Using the Test Method
let testStr = "freeCodeCamp";
let testRegex = /Code/; // Will search for a literal match for the word and is case sensitive and returns boolean 
testRegex.test(testStr); // Returns true, since it finds the word 'Code' where the quote marks are not required
let testRegex2 = /code/;
testRegex2.test(testStr); // Returns false

// Use the alternation or OR operator | to search for multiple patterns
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

// Ignore case while matching using flags
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // You use the flags, in this case the i flag, to ignore case so it will return true whatever case myString is e.g. FREEcodeCamp
let result = fccRegex.test(myString);

// Extract Matches using Match method
"Hello, World!".match(/Hello/); // Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // Returns ["expressions"]
// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
'string'.match(/regex/);
/regex/.test('string');

// Find more than the First Match using the global flag g
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex); // Returns ["Repeat"]
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex); // Returns ["Repeat", "Repeat", "Repeat"]
//NOTE: You can have multiple flags on your regex e.g. /repeat/ig

// Match anything with the wildcard period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./; // The wildcard . will match any one character
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true

// You can search for a literal pattern with some flexibility with character classes. 
// Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/; // The [aiu] is the character class that will only match the characters "a", "i", or "u".
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

// Use the hyphen - characther to match a range of characters
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/; // [a-e] matches lower case letters a through to e
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

// Match numbers and letters
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig; // It is possible to combine a range of letters and numbers in a single character set.
jennyStr.match(myRegex); // matches all letters and numbers in jennyStr

// Match Single Characters Not Specified
// You can create a set of characters that you do not want to match. These types of character sets are called negated character sets.
// To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match e.g. [^...]
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // Regex matches all characters that are not vowels or numbers
let result = quoteSample.match(myRegex);

// Match Characters that Occur One or More Times with the + character
// You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively.
// For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" and return ["aa"].
// If it were instead checking the string "abab", it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. 
// Finally, since there is no "a" in the string "bcd", it wouldn't find a match.
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex); // Return ['ss', 'ss']

// Match Characters that Occur Zero or More Times with the * character
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

// Find Characters with Lazy Matching
// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. 
// The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
// You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.
// Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.
// However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Using the lazy matching ? character
let result = text.match(myRegex); // Returns <h1>, if we didn't use it, it would have returned <h1>Winter is coming</h1>

// Match Beginning String Patterns with the caret ^ character
// Outside of a character set, the caret is used to search for patterns at the beginning of strings.
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); // Returns false

// Match Ending String Patters with the dollar $ character
// You can search the end of strings using the dollar sign character $ at the end of the regex.
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // Returns false

// Match All Letters and Numbers
// Using character classes, you were able to search for all letters of the alphabet with [a-z]. 
// This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.
// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. 
// This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/; // These shortcut character classes are also known as shorthand character classes.
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

// Match Everything But Letters and Numbers
// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

// Match All Numbers
// The shortcut to look for digit characters is \d, with a lowercase d. 
// This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

// Match All Non-Numbers
// The shortcut to look for non-digit characters is \D. 
// This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;
