function createInitialsFromName(name) {
  // Complete the function
let words=name.split(" ")
let number= words.length
let SName = number===1;
let TName = number ===2;
let MName = number>2;

if(SName){
Letters=name.split("")
let InitialName=(Letters[0] + Letters[1]).toUpperCase();
return InitialName
}

if(TName){
  Word1=words[0].split("")
  Word2=words[1].split("")
  let InitialName =(Word1[0]+Word2[0]).toUpperCase();
  return InitialName
}
if(MName){
  Word1=words[0].split("")
  WordL=words[number-1].split("")
  let InitialName =(Word1[0]+WordL[0]).toUpperCase();
  return InitialName
}
}

module.exports = createInitialsFromName;