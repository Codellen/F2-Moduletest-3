//Now first task is to add row to the table as we click on Add new Row

const tbody = document.querySelector("tbody");
const btnClick = document.getElementById('btn');
//create one empty arrray to store data
const tableData = [
    {}
];

function createTableRow(data,tbody,id){

    const tr = document.createElement('tr');
    const idTD = document.createElement('td');
    idTD.id ="index";
    idTD.textContent = id;

    const studentNameTD  = document.createElement('td');
    const  input = document.createElement('input')
    input.id = "text1"
    input.type = 'text';
    input.textContent = data.student_name;
  input.style.margin ="15px";
  studentNameTD .appendChild(input);

    
    const studentRollTD = document.createElement('td');
     //studentRollTD.textContent = data.student_roll;
     const  inputRollNumber = document.createElement('input')
     inputRollNumber.id = "text2"
     inputRollNumber.type = 'number';
     inputRollNumber.style.margin ="15px";
     inputRollNumber.textContent= data.student_roll;
     studentRollTD .appendChild(inputRollNumber);


    const subjectTD = document.createElement('td');
    //subjectTD.textContent = data.subject;
    const  inputSubject = document.createElement('input')
    inputSubject.id = "text3"
    inputSubject.type = 'text';
  inputSubject.style.margin ="15px";
  subjectTD .appendChild(inputSubject);


    const marksTD = document.createElement('td');
    //marksTD.textContent = data.marks;
    const  inputMarks = document.createElement('input')
    inputMarks.id = "text4"
    inputMarks.type = 'number';
    inputMarks.style.margin ="15px";
    marksTD .appendChild(inputMarks);


    const markedByTD = document.createElement('td');
    // markedByTD.textContent = data.markedBy;
    const  inputMarkedBy = document.createElement('input')
    inputMarkedBy.id = "text5"
    inputMarkedBy.type = 'text';
    inputMarkedBy.style.margin ="15px";
    markedByTD.appendChild(inputMarkedBy);

   
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

//     const textboxes = [text1,text2,text3,text4,text5]
// textboxes.forEach(function(textbox){
//     textbox.addEventListener('change', function(){

//         var inputValue = this.value;
//         //console.log(inputValue);
// })
var ele = document.getElementById('index');
var element1 = document.getElementById('text1');
var element2 = document.getElementById('text2');
var element3 = document.getElementById('text3');
var element4 = document.getElementById('text4');
var element5 = document.getElementById('text5');

    button.addEventListener('click' , function(){
        
        // tr.appendChild(element1);
        // tr.appendChild(element2);
        // tr.appendChild(element3);
        // tr.appendChild(element4);
        // tr.appendChild(element5);
        // tbody.appendChild(tr);
        
       
        //console.log(element.value);
       
        //const name = inputValue;
        
         //
         
        // //inputValue.valueOf =" "
        
        const tData = {id: ele.value, student_name:element1.value, student_roll:element2.value, subject:element3.value, marks:element4.value, markedBy:element5.value}

        //var row = this.parentNode.parentNode;
        //row.parentNode.removeChild(row);
        tableData.push(tData);
        //renderElement();  
        console.log(tableData)
    
     //console.log(inputValue);
    })
    







}
function handelClick(){
    tbody.innerHTML=" ";
    renderElement();
}

btnClick.addEventListener('click',handelClick)


function renderElement(){
    tableData.map(function(data,index){

        createTableRow(data,tbody,index+1)
    })
}