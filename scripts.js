"use strict";
let namee = prompt("Hello, What's your name to git you a most welcoming : ")
if (namee.toLowerCase() == 'hadeel' || namee.toUpperCase() == 'HADEEL')
{
    alert("Hi " + namee + ", Welcome in my Page ^_^");
}
else
{
    alert("Hi " + namee + ",Not Welcome in my Page You are Not my TA :)");
}
alert("Welcome " + namee + "In my web site \n if you know me you can answering my question \n"+
    "If you pass and get over than 80%, \n I git you a bik awewsome massege")

var num = 0;
let Age = prompt("My age is 30?");
let Uni = prompt("My uni is Yarmouk?");
let From = prompt("Am I Jordanian?");
let B_A = prompt("I graduated from YU uni, specially CIS?");
let familly = prompt("My familly name is Shiyyab ?");
let graduated_year = prompt("i graduated since 2010 ?");
let TA_Name = prompt("TA name Hadeel ?");
if (Age.toLowerCase() == 'no'){
    num+=1;
}
if (Uni.toLowerCase() == 'yes'){
    num+=1;
}
if (From.toLowerCase == 'yes'){
    num+=1;
}
if (B_A.toLowerCase == 'yes'){
    num+=1;
}
if (familly.toLowerCase == 'yes'){
    num+=1;
}
if (graduated_year.toLowerCase == 'no'){
    num+=1;
}
if (TA_Name.toLowerCase == 'yes'){
    num+=1;
}

if (num >= 6){
    alert("Welcome " + namee + " You are Passing and git " + num + " of 7 \n Good Luck in my page.")
}
else{
    alert("I'm sad, You are fail in my exam and you don't me good.")
}

function addSkills(){
    let numberOfSkills = prompt('Please Enter The Number Of Skills')
    var numberOfSkill = parseInt(numberOfSkills);
    var AllSkill = [];
    for(var i = 1 ; i <= numberOfSkill ; i++){
        let Skills = prompt(i + " Skills is:");
        AllSkill.push(Skills);
    }

    console.log(AllSkill);

    alert("I'll Check the Skills, If The Answer is Yes write YES if else Write No");
    for(var x = 0 ; x < numberOfSkill ; x++ ){
        let Checked = prompt("The Skills is : " + AllSkill[x].toUpperCase());
        if (Checked.toLowerCase() == 'yes'){
            continue;
        }
        else{
            AllSkill[x] = prompt("The New Skills is : ");
            continue;
        }
    }
    document.getElementById("Skillss").innerHTML = AllSkill;
    return AllSkill;
}

