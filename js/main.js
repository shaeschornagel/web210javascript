//variables for convenience 

var form = document.getElementById('membership');
var input = document.getElementsByClassName('reqi');
var error = document.getElementsByClassName('req');
var submit = document.getElementById('submit');

//loop through error node list to add required message
function addError(){
for (var i = 0; i < error.length; i++) {
        error[i].innerHTML="Required";
    }
}
function noError(){
for (var i = 0; i < error.length; i++) {
        error[i].innerHTML="";
    }
}


//loop through input node list, determine if value empty, prevent default, add error
function validate(){
for (var i = 0; i < input.length; i++) {
        if(input[i].value === "") {
          addError();
          return false;
        }
            
}}
form.onsubmit = validate;

//i can't figure out how to make it so an already valid field does not get the required message.






//jquery..so beautiful...so simple
/*$('form').on('submit', function(){
    if($('input').val() === ""){
    	$('span.req').append('Required');
    return false;
      
    }
    else {
        return true;
    
    }
});*/