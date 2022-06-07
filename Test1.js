//Test1

const sentence = {
  1: "",
  2: "abcdefghijklmnopqrstuvwxyz",
  3: "the quick brown fox jumps over the lazy dog",
  4: "a quick movement of the enemy will jeopardize five gunboats",
  5: "the 1 quick brown fox jumps over the 2 lazy dogs",
};

const checkPangram = (sentence) => {
  let reg = /([a-z])(?!.*\1)/gi;

  for (let i = 1; i <= Object.keys(sentence).length; i++) {
    if (sentence[i] === "") {
      console.log(false);
    } else {
      console.log(sentence[i].match(reg).length === 26);
    }
  }
};
// gg
checkPangram(sentence);

/* 
g modifier: global. All matches (don't return on first match)
i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
? The question mark gives the regex engine two choices: try to match the part the question mark applies to, or do not try to match it
. (period) Matches any single character, except for line breaks.
!  occurs as the first character in a regular expression, all magic characters are treated as special characters.
*/
