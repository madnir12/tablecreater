const normalli = document.getElementById("normalli");
const customli = document.getElementById("customli");
const custom = document.getElementById("customC"); 

customli.addEventListener("click",()=>{
   custom.style.display = "flex";
    addRemoveClass(customli,normalli)
});
normalli.addEventListener("click",()=>{
    custom.style.display = "none";
    addRemoveClass(normalli,customli);
    document.getElementById("start").value = 1;
    document.getElementById("end").value = 10;
    tableF();

});

// function for add remove class
function addRemoveClass(customli,normalli){
    customli.classList.add("active");
    normalli.classList.remove("active");

}

// function for solving submit event issue
document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault()

});
// function for creating table
function tableF(){
    
    document.getElementById("insert").style.display ="block";
    document.getElementById("insert").innerHTML ="";
    let input = document.getElementById("input").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    if(input >0 && start >0 && end >0){
    document.getElementById("msg").innerText ="";
    let tableTH = `<tr>
    <th class="bottomline">Table Of ${input}</th>
    <th class="bottomline leftline">No:</th>

</tr>`;
document.getElementById("insert").innerHTML =tableTH;
    
    let inputnb = input;
    
    for( let index = start; index <= end; index++){
        let nb = inputnb*index;
        let html = `<tr><td>${input} x ${index} =</td>
        <td class="leftline">${nb}</td></tr>
    `;
    document.getElementById("insert").innerHTML += html;
    }
    }else{
        document.getElementById("msg").innerText = "Please enter all values";

    }
    
}