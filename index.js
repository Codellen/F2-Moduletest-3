//Now first task is to add row to the table as we click on Add new Row

const tbody = document.querySelector("tbody");
const btnClick = document.getElementById('btn');
//create one empty arrray to store data
const tableData = [
    
];

function createTableRow(data,tablebody,id){

    const tr = document.createElement('tr');
    const idTD = document.createElement('td');
    idTD.textContent = id;

    const studentNameTD  = document.createElement('td');
    const  input = document.createElement('input')
    input.id = "text"
    input.type = 'text';
  input.style.margin ="15px";
  studentNameTD .appendChild(input);

    
    const studentRollTD = document.createElement('td');
     studentRollTD.textContent = data.student_roll;

    const subjectTD = document.createElement('td');
    subjectTD.textContent = data.subject;

    const marksTD = document.createElement('td');
    marksTD.textContent = data.marks;

    const markedByTD = document.createElement('td');
    markedByTD.textContent = data.markedBy;
   
     const saveTD = document.createElement('td');
     //const div = document.createElement('div');
     const button = document.createElement("button");
      button.textContent="Save";
      button.classList.add("click")
      saveTD.appendChild(button)


    tr.appendChild(idTD);
    tr.appendChild(studentNameTD);
    tr.appendChild(studentRollTD);
    tr.appendChild(subjectTD);
    tr.appendChild(marksTD);
    tr.appendChild(markedByTD);
    tr.appendChild(saveTD);
   
    tbody.appendChild(tr);

input.addEventListener('change', function(){

    var inputValue = this.value;

    button.addEventListener('click' , function(){
        tbody.innerHTML="";
        const name = inputValue;
        
        console.log(name);
        //inputValue.valueOf =" "
        const tData = {student_name:name, student_roll:"2020500", subject:"english", marks:95, markedBy:"teacher"}

        var row = this.parentNode.parentNode;
        tableData.push(tData);
        renderElement();  
    //row.parentNode.removeChild(row);
     console.log(inputValue);
    })
    

})





}
function handelClick(){
    tbody.innerHTML="";
    //const name = inputValue;
    
    //console.log(name);
    //inputValue.valueOf =" "
    const tData = {student_name:"name", student_roll:"2020500", subject:"english", marks:95, markedBy:"teacher"}

    var row = this.parentNode.parentNode;
    tableData.push(tData);
    renderElement();  
//row.parentNode.removeChild(row);
 console.log(inputValue);
}

btnClick.addEventListener('click',handelClick)


function renderElement(){
    tableData.map(function(data,index){

        createTableRow(data,tbody,index+1)
    })
}
