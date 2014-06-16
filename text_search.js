/*jshint multistr:true */
text = "Kevin blah blah blah blah blah blah blah blah blah blah blah Kevin blah blah blah blah blah blah blah Kevin blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Kevin blah Keith";

var myName = "Kevin";
var hits =[];

for(var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
            for (var a = i; a <= myName.length + i; a++) {
                if(text[i] === myName[a]) {                
                    for(var j = i; j < (myName.length + i); j++) {
                hits.push(text[j]);
            }
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
    }