document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault()

});
function tableF(){
    document.getElementById("insert").style.display ="block";
    document.getElementById("insert").innerHTML ="";
    let input = document.getElementById("input").value;
    let tableTH = `<tr>
    <th class="bottomline">Table Of ${input}</th>
    <th class="bottomline leftline">No:</th>

</tr>`;
document.getElementById("insert").innerHTML =tableTH;
    
    let inputnb = input;
    for( let index = 1; index <= 10; index++){
        let nb = inputnb*index;
        let html = `<tr><td>${input} x ${index} =</td>
        <td class="leftline">${nb}</td></tr>
    `;
    document.getElementById("insert").innerHTML += html;
    }
}