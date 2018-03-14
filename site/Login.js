var users =[{
	'email' : 'sid@gmail.com',
	'password' :'somepassword',
	'firstname':'sid'
},{
	'email':'adi@gmail.com',
	'password' :'somepassword',
	'firstname':'adi'
}] 

var checkLogin = function(email,password,allUsers){
	var isUserFound = false
	var passwordCorrect=false
	for(currentUser in allUsers){
		console.log(currentUser)
		if(allUsers[currentUser]['email']==email){
			if(allUsers[currentUser]['password']===password){
				isUserFound=true
				passwordCorrect=true
				break
			}else {
				isUserFound =true
				passwordCorrect=false
				break
			}
	}
  else {
	isUserFound =false
}
}
if(isUserFound ==true && passwordCorrect==true){
alert('you are logged in')
}
else if(isUserFound==true && passwordCorrect==false){
	
	alert('password wrong')
}else {
	alert('email not found')
}
}


var email=prompt('enter email')
var password =prompt('enter password')
checkLogin(email,password,users)
	
	
	
	
	
	
	