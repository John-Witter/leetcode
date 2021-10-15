// https://leetcode.com/problems/longest-common-prefix/

/*
    Write a function to find the longest common prefix string amongst and array
        of strings.

    If there is no common prefix, return an empty string "".
*/

/* 
    Example 1:

    Input: strs = ['flower', 'flow', 'flight']
    Output: 'fl'
*/

/* 
    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
*/

/* 

    Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lower-case English letters.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

        let longest = 0 // length of longest common prefix
        let prefix = "" // the longest common prefix

        // max longest common prefix is <= length of the shortest string
        // find the shortest string by creating sortedStrs,
            // set longest to length of shortest string
        
        const sortedStrs = strs.sort((a, b) => a.length - b.length)
        const shortest = sortedStrs[0]
        longest = shortest.length

        // iterate throught sortedStrs starting index 1 to end (skip shortest)
        // currStr = strs[i]
        // currLongest = 0, this will dictate the actual longest
        // if currStr[0] !== shortest[0], then there's no lCP, return ""
        // create inner loop of size shortest
            // if currStr[j] === shortest[j], then we have a temp match, 
                // continue in inner loop and increment currLongest
                // if all letters match, currLongest is length of shortest
                // if a letter doesn't match, break inner loop,
                    // longest so far is currLongest
        
        for (let i = 1; i < sortedStrs.length; i++) {
            let currStr = sortedStrs[i]
            let currLongest = 0
            if (currStr[0] !== shortest[0]) return "" // this means no lCP
            for (let j = 0; j < shortest.length; j++) {
                if (currStr[j] === shortest[j]) {
                    currLongest++
                } else {
                    longest = currLongest
                    break
                }
            }
        }

        if (longest === 0) return ""

        prefix = shortest.slice(0, longest)
        return prefix  
};

const strs1 = ["flower","flow","flight"]
const strs2 = ["dog","racecar","car"]
const strs3 = ["flower", "flower", "flower", "flower"]

console.log(longestCommonPrefix(strs1))
console.log(longestCommonPrefix(strs2))
console.log(longestCommonPrefix(strs3))



/*
    OLD NON-WORKING CODE

    if(!strs.length) return ""

    const sortedStrs = strs.sort((a,b) => (
        a.length - b.length
    ))

    let strsObj = {}
    let objCounter = -1
    let commonPrefix = ""
    let common = true

    sortedStrs.forEach((str, idx) => {
        strsObj[idx] = str
        objCounter++
    })

    // loop over the smallest string
    for (let i = 0; i < sortedStrs[0].length && common; i++) {
        const letter = sortedStrs[0][i]
        // check if each word at index objCounter have common prefix at letter
            // if yes: set common to true, add letter to commonPrefix
            // if no: set common to false
      for (let j = objCounter; j >= 0; j--) {
          const obj = strsObj[objCounter]
        if ( obj[i] === letter) {
              common = true
              if (!commonPrefix.includes(letter)) commonPrefix += letter
        } else {
            common = false
        }
      }
    }



    return [...new Set(commonPrefix)].join("")
*/