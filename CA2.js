// selecting password input element
let password = document.querySelector("#password");

// selecting username input element
let username = document.querySelector("#username")
// selecting the form div container
let form = document.querySelector("form");
// selecting the span to put error result 
let span = document.querySelector("span");
// selecting the span1 to put error result 
let span1 = document.querySelector(".span1");
// selecting the span2 to put error result 
let span2 = document.querySelector(".span2")
// selecting the span3 to put error result 
let span3 = document.querySelector(".span3")
// selecting the span4 to put error result 
let span4 = document.querySelector(".span4")
// selecting the form1 containing username and password input 
let form1 = document.querySelector(".form1");
// selecting the form2 containing quantity and selecter for burgers
let form2 = document.querySelector(".form2");
// selecting the input field for the quantity
let quantity = document.querySelector("#quantity");
// selecting the list dropdown
let list = document.querySelector("#list");
// selecting the discount input element
let discount = document.querySelector("#discount");
// selects the div that displays values 
let totalElement = document.querySelector(".total");
// selects the element to show result
let calculated = document.querySelector(".value");





/*  key press event is used to track the length of the password 
A red border and message will alert the user that the  password is short 
until the user has entered 9 charaters , and when the password exceeds 9 characters 
the red border and message will disapear.
*/
form.addEventListener("keypress",function(event){
    // event.target is the element in which the event is happens on
    if(event.target === password){
        if(password.value.length<=9){
        // checks the length of password in input field
        // add inner text to the span element in html
            span.innerText ="password is less than 9 characters";
        // add a color to the text of span
            span.style.color= "red";
        // adds a red border to indicate password too short
            password.style.border = "red solid";
        // adds the span element into the html in the form element
            form.append(span);
        }else if(password.value.length>=10){
        // if password is greater than 9 it will remove the span element and border
            span.innerHTML = "";
            password.style.border = "";
        }else if(password.value ===""){
            alert("enter password");
        }

    }
})

/*  key press event is used to track the length of the username 
A red border and message will alert the user that the  username is short 
until the user has entered 9 charaters , and when the username exceeds 9 characters 
the red border and message will disapear.
*/
form.addEventListener("keypress",function(event){
    // event.target is the element in which the event is happens on
    if(event.target === username){
        if(username.value.length<=9){
        // checks the length of username in input field
        // add inner text to the span element in html
            span1.innerText ="username is less than 9 characters";
        // add a color to the text of span
            span1.style.color= "red";
        // adds a red border to indicate username too short
            username.style.border = "red solid";   
        // adds the span element into the html in the form element
            form.append(span1);
        }else if(username.value.length>=10){
            // if username is greater than 9 it will remove the span element and border
            span1.innerHTML = "";
            username.style.border = "";
        }

    }
})

/* if the username field is empty and you click into the password input field it 
will alert the user to fill in the username and if the username is filled in it wont alert 
the user.
*/


form.addEventListener("click",function(event){
        if(event.target === password){
            if(username.value === ""){
                alert("user name is empty ");
            }
         }
         })

// if supersize is selected from the drop-down
list.addEventListener('change',function(event){
    // when the text equals to Supersize a message is add to user
        if(list.options[list.selectedIndex].text === "16oz Supersize"){
    // inner text for the message 
    
        $(span3).animate({"border-width":"5 ",
                           "font-size":"25px"                },2000);
   
            span3.innerText ="warning Supersize has health risk";
    // colour of the message 
            span3.style.color ="red";
    // border of the message
            span3.style.border = "blue solid";
            span3.style.borderRadius= "20px";
            span3.style.padding= "4px";
    // if Large or Extra large is selected the message will disapear
         }else if(list.options[list.selectedIndex].text === "6oz Large" ||
         list.options[list.selectedIndex].text === "10oz Extra-Large"
        ){
    // remove the inner text from span
            span3.innerText ="";
    // remove the color from span
            span3.style.color ="";
    // remove the border from border
            span3.style.border = "";

        }
        })

 
form2.addEventListener("submit",function(event){
    event.preventDefault();
    let promo =0
    // number of quatity for order
    let numItems = quantity.value;
    // the value of the burger selected
    let burgerPrice =list.options[list.selectedIndex].value;
    // the total for order
    let total = burgerPrice* numItems;
 
// if you submit and there is no number an error shows up
// checks if value is a number
    if(isNaN(quantity.value)){
        
        span4.innerText = "not a number";
        span4.style.color ="red";
        quantity.style.border = "red solid";
    }
// if the discount code is entered it deducted from price
    if(discount.value ==="tacotopping"){
      total = total-(total*0.1);
    }
// this shows the result but increasing the font and result size
    $(calculated).animate({"padding":"5 ",
    "font-size":"40px",},2000);
// this puts the result into the value element 
    calculated.innerText = total; 

  

   

    


   
    
})



