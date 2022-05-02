
const data = [
    {id: 0,
    val: "3D content collaboration startup Taichi Graphics closes $50M Series A"},
    {id: 1,
    val: "4 signs to look for when evaluating ESG investments"},
    {id: 2,
    val: "What does the new era of location intelligence hold for businesses?"}
    ]


const setCardsData = () => {
    // var titles = JSON.parse(info);
    console.log("set data called!");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            console.log("Data fetched successfully!");
            // console.log(this.response);
            var data = JSON.parse(this.response)
            console.log(data);
            document.getElementById("card1").innerHTML = data.cards[0].val;
            document.getElementById("card2").innerHTML = data.cards[1].val;
            document.getElementById("card3").innerHTML = data.cards[2].val;
        }
    };
    xhttp.open('GET', './cards_data.json', true);
    xhttp.send();
}

const handleSignup = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            console.log("success");
            console.log(this.response);
        } 
    };
    xhttp.open('PUT', './user_data.json', true);
}


const handleSearch = () => {
    var url = "https://www.google.com/search?q=";
    let query = document.getElementById("search").value;
    
    query = url+query;
    // alert(query);
    window.location.replace("www.google.com");
    window.location = "https://www.tutorialspoint.com";
}

const contactValidator = (event) => {
    // console.log(document.loginForm.contact.value)
}

// const submitData = () => {
//     let xhr = new 
// }

const handleSubmit = () => {
    event.preventDefault();
    let fname = document.loginForm.fname.value;
    let lname = document.loginForm.lname.value;
    let email = document.loginForm.email.value;
    let contact = document.loginForm.contact.value;
    let password = document.loginForm.password.value;
    

    if (fname == "" || lname=="" || email=="" || contact=="" || password==""){
        alert("Enter All the fields to proceed!");
        
    }
    // all validaations are correct
    else{
        var JSONObj = {};
        JSONObj.firstname = fname;
        JSONObj.lastname = lname;
        JSONObj.email = email;
        JSONObj.contact = contact;
        JSONObj.password = password;
        console.log(">> Inside on submit Method");
        console.log("Payload data =>");
        console.log(JSONObj);
        alert("Sign Up Successfull!");
        handleSignup();
        // alert( "Sign Up Successfully\nFirst Name: " + fname +
        //         "\nLast Name: " + lname +
        //         "\nEmail: " + email + 
        //         "\nContact: " + contact);
    }

}

const passwordVal = () => {
    let password = document.loginForm.password.value;
    if (password.length < 8){
        document.getElementById('password').innerHTML = "Password must be 8 character long";   
    }
    else{
        document.getElementById('password').innerHTML = "";   
    }
}

const fnameVal = (input) => {
    let letter = /^[A-Za-z]+$/;
    if (!input.value.match(letter)){
        document.getElementById('fname').innerHTML = "First name must contain only alphabets";
    }
    else{
        document.getElementById('fname').innerHTML = ""; 
        document.getElementById('lname').focus();  
    }  
}

const lnameVal = (input) => {
    let letter = /^[A-Za-z]+$/;
    if (!input.value.match(letter)){
        document.getElementById('lname').innerHTML = "Last name must contain only alphabets";
    }
    else{
        document.getElementById('lname').innerHTML = "";   
    }  
}


const emailVal = (input) => {
    var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!input.value.match(mail_format)){
        document.getElementById('email').innerHTML = "Invalid Email format";
    }
    else{
        document.getElementById('email').innerHTML = "";   
    }
    document.loginForm.contact.focus();

}


const  drawBarPlot = () => {

    var data = google.visualization.arrayToDataTable([
      ['Contry', 'Mhl'],
      ['Italy', 55],
      ['France', 49],
      ['Spain', 44],
      ['USA', 24],
      ['Argentina', 15]
    ]);
    
    var options = {
      title: 'World Wide Wine Production'
    };
    
    var chart = new google.visualization.BarChart(document.getElementById('chart'));
    chart.draw(data, options);
    
    }

    function drawChart() {
        // Set Data
        var data = google.visualization.arrayToDataTable([
          ['Price', 'Size'],
          [500, 14],[1000, 17],[1500, 20 ],[2000, 33],[3000 ,38]
        ]);
        // Set Options
        var options = {
          title: 'No of words vs Results',
          vAxis: {title: 'Results Percentage'},
          hAxis: {title: 'Number of words'},
          legend: 'none'
        };
        // Draw
        var chart = new google.visualization.LineChart(document.getElementById('chart'));
        chart.draw(data, options);
        }