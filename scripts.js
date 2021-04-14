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

let Age = prompt("My age is ?");
let Uni = prompt("My uni is ?");
let From = prompt("Where Am I from ?");
let B_A = prompt("I graduated from YU uni, specially what ?");
let familly = prompt("My familly name is  ?");
let graduated_year = prompt("i graduated since  ?");
let TA_Name = prompt("TA name  ?");
var count = 0;
if (Age === '23'){count +=1;}
if (Uni.toLowerCase() === 'yarmouk'){count += 1;}
if (From.toLowerCase() == 'irbid'){count += 1;}
if (B_A.toLowerCase() == 'cis'){count += 1;}
if (familly.toUpperCase() == 'SHIYYAB'){count += 1;}
if (graduated_year == '2020'){count += 1;}
if (TA_Name.toLowerCase() == 'hadeel'){count += 1;}
alert("Mark = " + count + " of 7");

let BDate = prompt("I need to ask you a hard question\nthe month of my birthday is:");
var n = 4 , counter = 1;
while (n == 0){
    if (BDate == '2'){
        alert("Yes correct with " + counter + " Steps");
        break;
    }
    n-=1;
    let retry = prompt("Retry enter number ")
    counter +=1;
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
            continue;
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

