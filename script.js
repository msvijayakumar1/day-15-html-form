function click_func() {
    let firstname = document.getElementById("first-name").value;
    let lastname = document.getElementById("last_name").value;
    let address = document.getElementById("address").value;
    let pin = document.getElementById("pincode").value;
    let gender = document.getElementById("gender").value;    
    let op = document.getElementById("food_select");
    var selected = [...op.options].filter(option => option.selected).map(option => option.value);
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;  
    let table = document.getElementById("myTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML = address;
    cell4.innerHTML = pin;
    cell5.innerHTML = gender;
    cell6.innerHTML = selected;
    cell7.innerHTML = state;
    cell8.innerHTML = country;
  }
  