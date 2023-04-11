//   -------------------------Table - Task -1  Js Below -------------------------------//

// ------------------- Add Row Code below --------------------------------// 
const SavedTable = document.getElementById('SavedTable')
function AddRow(){
    let MainTable = document.getElementById("Main-tbody");
    let row = MainTable.insertRow(-1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    cell1.innerHTML = `1`
    cell2.innerHTML = ` <td><input type="text" class="NameValue" placeholder="Enter Name Here"></td>`
    cell3.innerHTML = ` <td><input type="text" class="SubjectValue" placeholder="Enter Subject Here"></td>`
    cell4.innerHTML = ` <td><input type="number" class="MarkValue" placeholder="Enter Marks Here"></td>`
    cell5.innerHTML = ` <button class="btn btn-info pass-btn" type="button">Pass</button>
                        <button class="btn btn-danger fail-btn" type="button">Fail</button> `
    cell6.innerHTML = ` <td><button class="btn btn-danger text-center RemoveBtn" type="button" onclick="RemoveRow(this)">Remove</button></td>`
    
    
}
//------------------------- Remove Row ----------------------------------//
function RemoveRow(Discard){
    Discard.parentElement.parentElement.remove();
}

// ---------------------- Color Changing On click ----------------------//
$(document).ready(function () {

    //    Fail Color Added on Click
    $(".fail-btn").on("click",function(){
        $(this).toggleClass("FailColor").siblings().removeClass("PassBtnColor")
        
    })

    //  Pass Color Added On Click
    $(".pass-btn").on("click",function(){
        $(this).toggleClass("PassBtnColor").siblings().removeClass("FailColor")
    })
});


//------------------------ Submit Data Below Table -------------------- //
// function SubmitData() {
//     let getTbody = document.getElementById("SavedTableTbody");
//     let getThead = document.getElementById("SavedtableThead");
//     getTbody.innerHTML = "";
//     getThead.innerHTML = "";
//     let nameValue = [];
//     let SubjectValue = [];
//     let MarkValue = [];
  
//     // extract values from input fields and push them into arrays
//     let NameInputs = document.querySelectorAll(".NameValue");
//     let SubInputs = document.querySelectorAll(".SubjectValue");
//     let MarkInputs = document.querySelectorAll(".MarkValue");
  
//     for (let i = 0; i < NameInputs.length; i++) {
//       nameValue.push(NameInputs[i].value);
//       SubjectValue.push(SubInputs[i].value);
//       MarkValue.push(Number(MarkInputs[i].value));
//     }
  
//     let rowhead = getThead.insertRow(0);
//     let cell1 = rowhead.insertCell(0);
//     let cell2 = rowhead.insertCell(1);
//     let cell3 = rowhead.insertCell(2);
//     let cell4 = rowhead.insertCell(3);
//     cell1.innerHTML = `<th> ID</th>`;
//     cell2.innerHTML = `<th> Name</th>`;
//     cell3.innerHTML = `<th> Subject</th>`;
//     cell4.innerHTML = `<th> Marks</th>`;
  
//     for (let i = 0; i < MarkValue.length; i++) {
//       let RowBody = getTbody.insertRow(-1);
//       let cell1 = RowBody.insertCell(0);
//       let cell2 = RowBody.insertCell(1);
//       let cell3 = RowBody.insertCell(2);
//       let cell4 = RowBody.insertCell(3);
  
//       if (MarkValue[i] < 33) {
//         RowBody.classList.add("FailColor");
//       }
//       if (MarkValue[i] >= 33) {
//         RowBody.classList.add("PassColor");
//       }
  
   
//         cell1.innerHTML = `<td>1</td>`;
//         cell2.innerHTML = `<td>${nameValue[i]}</td>`;
//         cell3.innerHTML = `<td>${SubjectValue[i]}</td>`;
//         cell4.innerHTML = `<td>${MarkValue[i]}</td>`;
      
//     }
  
//     let searchbar = document.querySelector(".search-bar");
//     searchbar.style.display = "block";
//   }

function SubmitData() {
  let nameValue = [];
  let SubjectValue = [];
  let MarkValue = [];

  // extract values from input fields and push them into arrays
  let NameInputs = document.querySelectorAll(".NameValue");
  let SubInputs = document.querySelectorAll(".SubjectValue");
  let MarkInputs = document.querySelectorAll(".MarkValue");

  for (let i = 0; i < NameInputs.length; i++) {
    nameValue.push(NameInputs[i].value);
    SubjectValue.push(SubInputs[i].value);
    MarkValue.push(Number(MarkInputs[i].value));
  }

  let data = [];
  for (let i = 0; i < MarkValue.length; i++) {
    let row = [];
    row.push(i + 1);
    row.push(nameValue[i]);
    row.push(SubjectValue[i]);
    row.push(MarkValue[i]);
    data.push(row);
  }

  $('#SavedTable').DataTable({
    data: data,
    columns: [
      { title: "ID" },
      { title: "Name" },
      { title: "Subject" },
      { title: "Marks" }
    ]
  });

  let searchbar = document.querySelector(".search-bar");
  searchbar.style.display = "block";
}

  

//  ----------------- Form Validation Code below ----------------------//

$(document).ready(function() {
    $(".MarkValue").on('change', function() {
      if (this.value < 0 || this.value > 100) {
        alert("Please fill values between 0 to 100");
        $(this).val(''); 
      }
    });

    $(".SubjectValue").on('change' , function(){
        if(this.value==''){
            alert('Please Fill All Subject Values First')
        }
    })

    $(".NameValue").on('change',function(){
        if(this.value ==''){
            alert("Please Fill All Name Values First")
        }
    })
  });

//--------------------------- Search Bar Function Below ---------------------//
function Search(){
  let inputValue = document.getElementById("SearchBar").value.toUpperCase();
  let SavedTable = document.getElementById("SavedTable");
  let tr = SavedTable.getElementsByTagName('tr');
  
  for(let i =1; i<tr.length; i++){
    let td = tr[i].getElementsByTagName('td')[1];
     if(td){
       let textValue = td.textContent;
       if(textValue.toUpperCase().indexOf(inputValue) > -1){
          tr[i].style.display =''
       }
      else{
        tr[i].style.display='none'
      }
     }
  }
}



//----------------------------- Calculator Page js Below   -------------------------------------//
$(document).ready(function () {
  $("#submitBtn").on('click' , function(){
    let val1 = $("#Value1").val();
    let val2 = $("#Value2").val();

    let add='';
    let sub='';
    let mul='';
    let div='';
    let rembtn = `<button class="btn btn-danger ms-2 me-2" id="rem">Remove</button>
                  <button class="btn btn-warning ms-2 me-2" id="edit" onclick="EditCalc(this)"  data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>`

    if($("#Addition").prop('checked')==true){
      add = Number.parseInt(val1)  + Number.parseInt(val2);
    }
    if($("#Subtraction").prop('checked')==true){
      sub =  Number.parseInt(val1)  - Number.parseInt(val2);
    }
    if($("#Multiplication").prop('checked')==true){
      mul =  Number.parseInt(val1)  * Number.parseInt(val2);
    }
    if($("#Division").prop('checked')==true){
      div =  Number.parseInt(val1)  / Number.parseInt(val2);
    }

    let tbody = $("#CalcTable").DataTable();
    tbody.row.add([val1 , val2 , add,sub,mul,div,rembtn]).draw(false)
    
    //Form Reset 
    $("#Value1").val('');
    $("#Value2").val('');

    $("#CalcTable").on('click','#rem' ,function(){
      let tablerow = $(this).closest('tr');
      tbody.row(tablerow).remove().draw();
    })

  })
});

function EditCalc(t){
    let tr = $(t).parents('tr');
    let value1 = tr.find('td:eq(0)').html();
    let value2 = tr.find('td:eq(1)').html();

    $("#Value1").val(value1);
    $("#Value2").val(value2);

    let tbody = $("#CalcTable").DataTable();
    let tablerow = $(t).closest('tr');
    tbody.row(tablerow).remove().draw();
}