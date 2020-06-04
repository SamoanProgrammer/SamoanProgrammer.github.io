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

// Restrict Possible Usernames
// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
// 1) Usernames can only use alpha-numeric characters.
// 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// 3) Username letters can be lowercase and uppercase.
// 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*$|\d\d$)/i; // This is the solution I came up with to pass all the test cases
let result = userCheck.test(username);

// Match Whitespace
// The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.
// You can search for whitespace using \s, which is a lowercase s. 
// This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. 
// You can think of it as similar to the character class [ \r\t\f\n\v].
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); // Returns [" ", " "]

// Match Non-Whitespace Characters
// Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.
// You can think of it being similar to the character class [^ \r\t\f\n\v].
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32

// Specify Upper and Lower Number of Matches
// You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). 
// You put two numbers between the curly brackets - for the lower and upper number of patterns.
// For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

// Specify only the Lower Number of Matches
// For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true

// Specify exact Number of Matches
// For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false

// Specify Optional Match
// For example, there are slight differences in American and British English and you can use the question mark ? to match both spellings.
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true

// Positive and Negative Lookahead
// Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. 
// This can be useful when you want to search for multiple patterns over the same string.
// There are two kinds of lookaheads: positive lookahead and negative lookahead.
// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. 
// A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. 
// A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. 
// The rest of the pattern is returned if the negative lookahead part is not present.
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
// A more practical use of lookaheads is to check two or more patterns in one string. 
// Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.
let sampleWord = "astronaut";
let bana12 = "bana12";
let pwRegex = /^[a-z](?=\w{4,})(?=\w*\d{2,})/i; 
let result = pwRegex.test(sampleWord);
let match = bana12.match(pwRegex);
console.log(match);

// Check For Mixed Grouping of Characters
// Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().
// If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g
// Then check whether the desired string groups are in the test string by using the test() method.
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr); // Returns true

// Reuse Patterns Using Capture Groups
// Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. 
// There is a better way to specify when you have multiple repeat substrings in your string.
// You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. 
// You put the regex of the pattern that will repeat in between the parentheses.
// To specify where that repeat string will appear, you use a backslash (\) and then a number. 
// This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.
// The example below matches any word that occurs twice separated by a space:
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
// Using the .match() method on a string will return an array with the string it matches, along with its capture group.
// Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/; // Could also be /^(\d+)\s\1\s\1$/
let result = reRegex.test(repeatNum);

// Use Capture Groups to Search and Replace
// Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.
// You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. 
// The second parameter is the string to replace the match or a function to do something.
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); // Returns "The sky is blue."
// You can also access capture groups in the replacement string with dollar signs ($).
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // Returns "Camp Code"

// Remove Whitespace from Start and End
// Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.
// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
console.log(result);