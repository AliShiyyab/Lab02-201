let namee = prompt("Hello, What's your name to git you a most welcoming : ")
if (namee.toLowerCase() == 'hadeel' || namee.toUpperCase() == 'HADEEL')
{
    alert("Hi " + namee + ", Welcome in my Page ^_^");
}
else
{
    alert("Hi " + namee + ",Not Welcome in my Page You are Not my TA :)");
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
    
}

