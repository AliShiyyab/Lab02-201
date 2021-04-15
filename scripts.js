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
alert("Welcome " + namee + " In my web site \nif you know me you can answering my question \n"+
    "If you pass and get over than 80%, \nI git you a bik awewsome massege")

let Age = prompt("My age is 23 ?");
let Uni = prompt("My uni is yarmouk ?");
let From = prompt(" Am I from jerash?");
let B_A = prompt("I graduated from YU uni, specially what civil?");
let familly = prompt("My familly name is Ajarmeh ?");
let graduated_year = prompt("i graduated since 2020 ?");
let TA_Name = prompt("TA name is Ali ?");
var count = 0;
if (Age.toLowerCase() === 'y'){count +=1;}
if (Uni.toLowerCase() === 'y'){count += 1;}
if (From.toLowerCase() == 'n'){count += 1;}
if (B_A.toLowerCase() == 'n'){count += 1;}
if (familly.toUpperCase() == 'n'){count += 1;}
if (graduated_year == 'y'){count += 1;}
if (TA_Name.toLowerCase() == 'n'){count += 1;}
alert("Mark = " + count + " of 7");



for(var i = 0 ; i < 4 ; i++){
    let entered = prompt("How many TA we have in the lesson?");
    if (entered == '8'){
        alert("Yes, They are :"+
        "\nAhmad Al-Mohammad"
        +"\nHadi Aji"
        +"\nHadeel"
        +"\nAbdulAzziz"
        +"\nSaja"
        +"\nLaith"
        +"\nMontaser"
        +"\nRana AbuSamhan"
        +"\nYou have : " + i+1 + " Steps" );
        break;
    }
    else{
        continue;
    }
}

function inteligant(){
    let namee = prompt("Enter your name : ");
    alert("Hello " + namee + ", Are you ready to start for my play ? ");
    alert("Something that hurts everyone, \ncauses injuries to them to three different degrees, \nand does not harm itself");
    for (var i = 0 ; i < 6 ; i++){
        let trying = prompt("Enter The Answer: ");
        if (trying.toLowerCase() == 'fire'){
            alert("Coreect answer " + namee + " !");
            break;
        }
        else{
            alert("False ! \nRepeated please " + namee );
        }
    }
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

