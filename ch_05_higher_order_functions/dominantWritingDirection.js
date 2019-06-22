// Write a function that computes the dominant writing direction in a string of text.
// Remember that each script object has a direction property that can be
// "ltr" (left to right),
// "rtl" (right to left), or
// "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that have a script associated with them.
// The characterScript and countBy functions defined earlier in the chapter are probably useful here.


// example of a script object
/*


{
  name: "Coptic",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -200,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}

ranges are [lowerbound, upperbound)

*/


// given a unicode number, return the name of the script
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}


function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(s => { return s.name != "none" });
  
  let longestScript = { count: 0 };
  for (let scr of scripts){
    if (scr.count > longestScript.count) {
      longestScript = scr;
    }
  }
  
  for (let scr of SCRIPTS) {
    if (scr.name == longestScript.name) {
      return scr.direction;
    }
  }
  return false; // if script name not found in master SCRIPTS list
}

