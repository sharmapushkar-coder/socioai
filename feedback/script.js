var database=firebase.database();
var user="guest";
var n
var id=localStorage.getItem("authid");
if(typeof id==="undefined"||id===null || id===""){
  document.write("<button onclick='login()'>Login to gain full access</button>")
  document.write("<button onclick='window.history.back()'>Go Back</button>")
}
else{
  document.write("<button onclick='window.history.back()'>Go Back</button>")
}


function submit(){
  document.getElementById("sub").disabled=true;
  document.getElementById("sub").innerHTML="Ticket Submitted"
  var username=document.getElementById("username").value;
  var name=document.getElementById("name").value;
  var msg=document.getElementById("Feedback").value;
if(username===""&&msg===""){
  document.getElementById("info").innerHTML="Some fields can't be left empty"
}
  else{
    database.ref('tickets').push().set({
    'user-auth':id,
    'name':name,
    'message':msg
  })
  }
  

  
}


function autofil(){
  document.getElementById('auto').innerHTML="Fetching Details..."
    database.ref('login/'+id).on("value",function(snapshot){
       n=snapshot.val().user
    })
  setTimeout(function(){
    if(typeof n==="undefined"||n===null||n===""){
      document.getElementById("info").innerHTML="Unable to Autofill make sure you have good Internet connectivity"
      document.getElementById('auto').innerHTML="Retry-->"
    }
    else{
      document.getElementById("name").value=n;
      document.getElementById('username').value=n;
      document.getElementById('auto').innerHTML="Completed !"
    }
  },5000)
}


























function login(){
  location.href="https://sharmapushkar-coder.github.io/login/#"
}
