/*function nameValid(){
    var name=document.getElementById("name").value 
    var validatename=document.getElementById("validatename");
    var letters= /^[a-zA-Z\s]*$/;
    if(name==""){
        validatename.innerHTML="Filed is required"
        return false;}
    else if(name.match(letters)){
        validatename.innerHTML="";
        return true;
    }
    else{
        validatename.innerHTML="use only characters";
        return false;
    }
}*/


// Name validation
function ValidattionForName(){
	var namevalue=$('#name').val()
	var letters = /^[-a-zA-Z-()\s]+(\s+[-a-zA-Z-()\s]+)*$/
	if(namevalue==""){
		$("#validatename").html("kindly fill this field")
		return false
	}
	// else if(namevalue==" "){
	// 	$("#validatename").html("Do not enter space first")
	// 	return false
	// }
	 else if (namevalue.length <=2 )
	 {
	     $("#validatename").html("name need atleast 3 character");
	      return false;
	
	 }
	else if(namevalue.match(letters)){
		$("#validatename").html("")
		return true
	}
	else{
		$("#validatename").html("Please enter a valid name")
		return false
	}
	}
    
   //email validation 
    
    function ValidattionForEmail(){
        var namevalue=$("#email").val()
        var letters =/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
        if(namevalue==""){
            $("#validateemail").html("kindly fill this field")
            return false
        }
       // else if(namevalue==" "){
           // $("#validateemail").html("do not put space first")
          //  return false
       // }
        
        else if(namevalue.match(letters)){
            $("#validateemail").html("")
            return true
        }
        else {
            $("#validateemail").html("Please enter a valid mail")
            return false
        }
        
    }


    function ValidattionForNumber(){
        var numvalue=$('#mobile').val()
        var numbers=/^[0-9]*$/
        if(numvalue==""){
            $('#validatenumber').html(" Kindly fill this field")
            return false
        }
        else if(numvalue==" "){
            $('#validatenumber').html("Do not enter space first")
            return false
        }
        
        else if(numvalue.match(numbers) && numvalue.length==10 )
        {
            $('#validatenumber').html("")
            return true
        }
        else{
            $('#validatenumber').html("Please enter a valid number")
            return false
        }
        
    }


    function ValidattionForMessage(){
        var char=$("#message").val()
        if(char=="")
        {
            $('#validatemessage').html("kindly fill this field")
            return false
        }
        else if(char.length<10)
        {
            $('#validatemessage').html("Please enter minimum 10 characters")
            return false
        }
        else{
            $('#validatemessage').html("")
            return true
        }
    }



   $(document).ready(function(){
    $("#name").keyup(function(){
        ValidattionForName();
    })
    $("#email").keyup(function(){
        ValidattionForEmail();
    })
    $("#mobile").keyup(function(){
        ValidattionForNumber();
    })
    $("#message").keyup(function(){
        ValidattionForMessage();
    })


});
