/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

let triangleHeight = 7;

for(let i = 0; i < triangleHeight; i++) {
    let line = "";
    for(let j = 0; j <= i; j++) {
        line += "#";
    }
    console.log(line);
}