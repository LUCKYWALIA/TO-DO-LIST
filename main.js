let arr = JSON.parse(localStorage.getItem("entry")) || [];
let sub =document.getElementById("submit");
let input=document.getElementById("taskbar");
let add=document.getElementById("add");

sub.addEventListener("click",()=>{

let obj={
    enteredtask:input.value,
    isdone:false
};

arr.push(obj);

localStorage.setItem("entry",JSON.stringify(arr));

if(input.value.trim()===""){
    alert("Enter the task");
    return;
}

input.value="";
render();
});

function render(){

add.innerHTML = ''

arr.forEach((v, index) => {
let wrap =document.createElement("div");
wrap.classList.add("task-item");

let p = document.createElement("p");
let donebtn =document.createElement("button");
let removebtn =document.createElement("button");
let updatebtn =document.createElement("button");


if (v.isDone) {
        p.classList.add("done");
    }

donebtn.addEventListener("click",()=>{
p.classList.toggle("done");
arr[index].isDone = !arr[index].isDone; 
localStorage.setItem("entry",JSON.stringify(arr));
});

removebtn.addEventListener("click",()=>{
wrap.remove();
arr.splice(index,1);
localStorage.setItem("entry",JSON.stringify(arr));
render();
});

updatebtn.addEventListener("click",()=>{

const newtext = prompt("Edit your task: ",v.enteredtask);

if(newtext!==null && newtext.trim()!==""){
arr[index].enteredtask=newtext.trim();
localStorage.setItem("entry",JSON.stringify(arr));
}else if(newtext!==null && newtext.trim()===""){
alert("Task cannot be empty.")
}
 render();   
});

p.innerText=v.enteredtask;
donebtn.innerText="DONE";
removebtn.innerText="REMOVE";
updatebtn.innerText="UPDATE";

wrap.append(p,donebtn,removebtn,updatebtn);
add.append(wrap);

});

}
render();




