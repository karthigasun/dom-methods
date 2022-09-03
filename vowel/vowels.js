//To find the vowels in two different words
let 
avow=prompt("Give the first Word"),
bvow=prompt("Give the second Word"),
vowels=["a","e","i","o","u"],
i=0,j=0,avn=0,bvn=0;
 
for(i=0; i<avow.length; i++){
    for(j=0;j<vowels.length;j++){
        if(avow[i]==vowels[j]){
            avn++;
        }
    }
}
// console.log(an);

for(i=0; i<bvow.length; i++){
    for(j=0;j<vowels.length;j++){
        if(bvow[i]==vowels[j]){
            bvn++;
        }
    }
}
// console.log(bvn);

if(avn==bvn){
    console.log("The Vowels Are Equal"+avn,bvn);
}
else if(avn>bvn){
    console.log("First One Have More Vowels",avn);
}
else{
    console.log("Second One Have More Vowels",bvn);
}