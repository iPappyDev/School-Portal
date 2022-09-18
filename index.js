allStudents = []
if(localStorage.studentDetails){
    allStudents = JSON.parse(localStorage.getItem("studentDetails"))
}
function signup(newStudent=" "){
    var newStudent = {
        jambRegNo: registrationnumber.value,
        firstName: firstname.value,
        lastName: lastname.value,
        email: userEmail.value,
        password: userPassword.value,
        matricNumber: "SQI/EJ0" + Math.round(Math.random()*100),
        date: new Date()
    }
    if ((jambRegNo= registrationnumber.value) && 
        (firstName = firstname.value) && 
        (lastName = lastname.value) && 
        (mail = userEmail.value) && 
        (password = userPassword.value)){
        disp.innerHTML = "<h2> Successfully Registered. Your Matric Number is "+ newStudent.matricNumber + "</h2>"
        disp.style.color = "white"
        allStudents.push(newStudent)
        // console.log(allStudents)
        // disp.innerHTML = "<h2> Successfully Registered. Your Matric Number is "+ newStudent.matricNumber + "</h2>"
        // disp.style.color = "white"
        registrationnumber.value = "",
        firstname.value = "",
        lastname.value = "",
        userEmail.value = "",
        userEmail.value = "",
        userPassword.value = ""
        // window.location.href = "signin.html"
        // disp.innerHTML = ""
    }else {
        alert("fill in d form")
    }
    
    // allStudents.push(newStudent)
    // console.log(allStudents)
    
    // question; i enter info it'll only bring in the matricnumber for object 0 in an array.
    // to set funtion empty i dont know it.
    // window.location.href = "signin.html"
    localStorage.setItem("studentDetails",JSON.stringify(allStudents))
    
}
function checkall(){
    // myTable.innerHTML = ""
    for (var index = 0; index < allStudents.length; index++) {
        myTable.innerHTML += `
        
        <tr>
                <td> ${index+1}</td>
                <td>${allStudents[index].firstName}</td>
                <td>${allStudents[index].lastName}</td>
                <td>
                    <button>Delete</button>
                    <button>Edit</button>
                </td> 
        </tr>`
    }
}

function checkDetails(){
    // window.location.href = "search.html"
    window.location.href = "signin.html"

}
function searchbtn(){
    var allStudents = JSON.parse(localStorage.getItem("studentDetails"))
    var searchInfo = lookat.value
        opeo.innerHTML = "<h3>" + "Student information at " + searchInfo + " are; " + "<p>" + " Firstname: " + allStudents[searchInfo].firstName + "<br>" + " Lastname: " + allStudents[searchInfo].lastName + "<br>" + " Email: " + allStudents[searchInfo].email + "<br>" + " Matric-Number: " + allStudents[searchInfo].matricNumber +  "</p>" + "</h3>"
        opeo.style.color = "black"
}
function previous(){
    window.location.href = "signup.html"
}

function info(){
    window.location.href = "info.html"
    // allStudents = JSON.parse(localStorage.getItem("studentDetails"))
}

function login(){
    var myUsername = username.value
    var myPassword = password.value
    var allStudents = JSON.parse(localStorage.getItem("studentDetails"))
    var domypass = false
    for (var index = 0; index < allStudents.length; index++) {
        if(allStudents[index].matricNumber==myUsername && allStudents[index].password==myPassword){
            domypass = true
            alert("Login Successfully")
        }
        
    }
    if(domypass){
        window.location.href = "search.html"
    }
    else{
        disp.innerText = "Incorrect Matric No. or Password"
        disp.style.color = "red"
    }




    // window.location.href = "search.html"
}
