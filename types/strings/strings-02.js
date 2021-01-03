let myName = 'Michael Shuff';
let fatherName = 'David Shuff';
let doubleName = 'Shuff Shuff';
let birthCity = 'Kingston';
let bestFriend = 'Justin Cappellini';

// `str.indexOf(str)`  returns the index of the first occurrence of a specified substring
//   - str.indexOf(searchValue [, fromIndex]) - fromIndex = starting index of search
// `str.lastIndexOf(str)` returns the index of the last occurence of a specified substring
//   - str.lastIndexOf(searchValue [, fromIndex]) - fromIndex = starting index of search
console.log(myName.indexOf('Shuff'));     // 8
console.log(doubleName.lastIndexOf('Shuff')); // 6
console.log(doubleName.indexOf('Shuff'));   // 0

// `str.search(regexp)` - Returns the first position of a regular expression
console.log(myName.search(/Shuff/));
