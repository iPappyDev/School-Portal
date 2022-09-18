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
        disp.innerHTML = "<h4> Successfully Registered. Your Matric Number is "+ newStudent.matricNumber + "</h4>"
        disp.style.color = "white"
        allStudents.push(newStudent)
        registrationnumber.value = "",
        firstname.value = "",
        lastname.value = "",
        userEmail.value = "",
        userEmail.value = "",
        userPassword.value = ""
    }else {
        alert("fill in d form")
    }
    localStorage.setItem("studentDetails",JSON.stringify(allStudents))
}
function checkall(){
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
    window.location.href = "login.html"
}
function searchbtn(){
    var allStudents = JSON.parse(localStorage.getItem("studentDetails"))
    var searchInfo = lookat.value
        opeo.innerHTML = "<h3>" + "Student information at " + searchInfo + " are; " + "<p>" + " Firstname: " + allStudents[searchInfo].firstName + "<br>" + " Lastname: " + allStudents[searchInfo].lastName + "<br>" + " Email: " + allStudents[searchInfo].email + "<br>" + " Matric-Number: " + allStudents[searchInfo].matricNumber +  "</p>" + "</h3>"
        opeo.style.color = "black"
}
function logout(){
    window.location.href = "index.html"
}
function info(){
    window.location.href = "allStudentData.html"
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
}
