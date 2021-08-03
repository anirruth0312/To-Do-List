 
const MAP=new Map(); // Stores all the tasks in a map

//displays the selected option on the input field menu
function select_change()
{
    let res=document.getElementById("type").value;

    if (res!="C")
    {
        document.getElementById("inp").value=res;
    }
    else
    {
        document.getElementById("inp").value="";
    }
}



function taskadd()
{
    let option="";
    option=document.getElementById("type").value;
    if (option=="Workout")
    {
        document.getElementById("inp").value="Workout";
        add();   
    }
    else   if (option=="Homework")
    {
        document.getElementById("inp").value="Homework";
        add();
    }
    else  if (option=="Groceries")
    {
        document.getElementById("inp").value="Groceries";
        add();
        
    }
    else if (option=="C")
    {
        add();
    }

    else {
        alert("Please choose a task");
    }
    
}


function add()
{           
    if(document.getElementById("inp").value.trim()=="")
    {
        alert("Please enter a task.");
        
    }
    if(document.getElementById("inp").value.trim()!="")
    {
    let area=document.getElementById("task_area");//denotes the area of tasks
    let newTask=document.createElement("li");// creates and holds value of new element
    newTask.textContent= document.getElementById("inp").value.trim();
    newTask.style.display="inline-block";
    
    if(MAP.has(document.getElementById("inp").value.trim()))
    {
        alert("This task is already present.");
    }
    else{
     
        let Break=document.createElement("br"); // adding break 
        let box =document.createElement("input");
        box.type="checkbox";
        box.setAttribute("onclick","check_checkbox(this)");//using this keyword that detects change and calls check_checkbox
        box.classList.add("checkboxes");
        box.value=newTask.innerText;
        area.appendChild(newTask);
        newTask.insertAdjacentElement("afterend",box);// appending checkbox to task in the same line
        box.insertAdjacentElement("afterend",Break);  
        MAP.set(newTask.innerText,false);//initialising all tasks to false
        if(MAP.size>12)
        {
            alert("You can have a maximum of 12 tasks. Complete few tasks to add more");
        }   
    }
    }
}

 

function finalcheck()
{
     
    if(MAP.size>0)
    {
        MAP.forEach((value,key) => {
        
            const list_items=Array.from(document.querySelectorAll("li"));
            for(let i=0;i<list_items.length;i++)
            {
            
                if(list_items[i].innerText==key && value==true)
                {
                    list_items[i].remove();
                    MAP.delete(key);
                }
            }
        });
        let box_length=Array.from(document.querySelectorAll(".checkboxes"));
        for(let i=0;i<box_length.length;i++)
        {
            if(box_length[i].checked)
            {
                box_length[i].remove();
            }
        }
    }
    else{
        alert("There are no tasks present");
    }
}


function clrscr()//clears input bar
{
    document.getElementById("type").value="";
    document.getElementById("inp").value="";
}


function check_checkbox(e)
{
    if(e.checked)//changing false to true
    {
       MAP.set(e.value,true);
    }
    else
    {
        MAP.set(e.value,false);
    }
}


function erase()//clearing  task area 
{
    let r=document.getElementById("task_area").textContent.trim();
    if (r!="")
    {
        let confirmation=confirm("Are you sure you want to clear all existing tasks");
        if (confirmation)
        {
        document.getElementById("task_area").innerText="";
        MAP.clear();
        document.getElementById("type").value="";
        document.getElementById("inp").value="";
        }
    }
    else{
        alert("There are no tasks present.")
    }
}
 //preloader part

 var preloader=document.querySelector(".loader");
    window.addEventListener("load",vanish());
function vanish()
{
    preloader.classList.add('disappear');
};
