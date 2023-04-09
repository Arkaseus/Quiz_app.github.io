

let tscore=0;
 let count=0;
let questions=[
{
    title:"_______ refers to the process of locating and removing the errors in a program",
    options:['Analyzing','Correcting','Debugging','Executing'],
    answer:"Debugging",
    score:10
},
{
    title:"A pointer is",
    options:['The address of a variable','An indication of the variable to be accessed next','A variable for storing addresses','The data type of an address variable'],
    answer:"A variable for storing addresses",
    score:10
}
,{
    title:"The name of a function ends with",
    options:['Double quotes','Single quotes','Parenthesis','#'],
    answer:"Parenthesis",
    score:5
},
{
    title:"Programmer-defined functions can be",
    options:['Value-returning functions only','Void functions only','Either value-returning or void functions','None of these'],
    answer:"Either value-returning or void functions",
    score:10
}
,{
    title:"If you want to use a class to define objects in many different programs, you should define the class in a C++ _______ file",
    options:['Header','Program','Source','Text'],
    answer:"Header",
    score:10
}

];

function sub(){

    let selected=null;
    selected=document.querySelector('input[type="radio"]:checked');
    
    console.log(selected.value+"  and "+questions[count].answer);
    
    if(selected==null)
     alert("No option is selected");
    else if(selected.value==questions[count].answer)
    {
        document.getElementById("msg").style.backgroundColor=" rgb(51, 231, 51)"; 
        document.getElementById("msg").innerHTML="Correct !";
        document.getElementById("msg").style.visibility='visible';

        document.getElementById("nb").style.visibility='visible';
        document.getElementById("sb").style.visibility='hidden';

        tscore+=questions[count].score;   

    }
    else{
        document.getElementById("msg").style.backgroundColor="red"; 
        document.getElementById("msg").innerHTML="Wrong !";
        document.getElementById("msg").style.visibility='visible';

        document.getElementById("nb").style.visibility='visible';
        document.getElementById("sb").style.visibility='hidden';
    }
    selected.checked=false;

}

function nextque(){
    count++;
    if(count>4)
    {
        keypage();
        return;
    }
    document.getElementById("nb").style.visibility='hidden';   
    document.getElementById("msg").style.visibility='hidden';

    document.getElementById("sb").style.visibility='visible';

    document.getElementById("q").innerHTML=questions[count].title;   
    
    for(var i=0;i<4;i++)
    {   
        //document.getElementByTagName("`${labels[i]}`").innerHTML=questions[count].options[i]
       document.getElementById(`${i}l`).innerHTML=questions[count].options[i];
       document.getElementById(i).value=questions[count].options[i];

     
    }


    
}

function keypage(){
  
    document.getElementById("c1").style.display='none';
    document.getElementById("c2").style.display='block';

    document.getElementById('ul-id').innerHTML="";
    for(var i=0;i<5;i++){
       const li= document.createElement("li")
       const h3=document.createElement("h3")
       h3.innerHTML=questions[i].title;
       const h4=document.createElement("h4")
       h4.innerHTML=questions[i].answer;
       li.appendChild(h3);
       li.appendChild(h4);

       document.getElementById('ul-id').appendChild(li);
    }

    document.getElementById("score-id").innerHTML=tscore;
                                                                                                         
}

function restart(){

    document.getElementById("c1").style.display='block';
    document.getElementById("c2").style.display='none';

    count=0;
    tscore=0;
    nextque();

}
