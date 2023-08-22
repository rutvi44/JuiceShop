// Function to get the quantity of Apple Juice
function getAppleJuice(){
  
  //Ask user to input for how many Applie juices they want
  let appleJuiceInput = parseInt(prompt("How many Apple Juices you would like to have?(please enter number only)"));

  //loop will run if user didn't put postive number or the value is null
  while(appleJuiceInput <= 0 || isNaN(appleJuiceInput)){
    appleJuiceInput = parseInt(prompt("Please enter number only (more than 0)"));
  }
  //to print the quantity(from user) in the table 
  document.getElementById("appleJuice").innerHTML = "x" + " " + appleJuiceInput ;

  getCheckOutButton()
}

// Function to get the quantity of Orange Juice
function getOrangeJuice(){

  //Ask user to input for how many Orange juices they want
  let orangeJuiceInput = parseInt(prompt("How many Orange Juices you would like to have?(please enter number only)"));

  //loop will run if user didn't put postive number or the value is null
  while(orangeJuiceInput <= 0 || isNaN(orangeJuiceInput)){
    orangeJuiceInput = parseInt(prompt("Please enter number only (more than 0)"));
  }

  //to print the quantity(from user) of Orange in the table
  document.getElementById("orangeJuice").innerHTML = "x" + " " + orangeJuiceInput ;

  getCheckOutButton()
}

// Function to get the quantity of Mango Juice
function getMangoJuice(){

  //Ask user to input for how many Mango juices they want
  let mangoJuiceInput = parseInt(prompt("How many Mango Juices you would like to have?(please enter number only)"));

  //loop will run if user didn't put postive number or the value is null
  while(mangoJuiceInput <= 0 || isNaN(mangoJuiceInput)){
    mangoJuiceInput = parseInt(prompt("Please enter number only (more than 0)"));
  }

  //to print the quantity(from user) of Mango Juice in the table
  document.getElementById("mangoJuice").innerHTML = "x" + " " + mangoJuiceInput ;

  getCheckOutButton()
}

// Function to get the quantity of Cranberry Juice
function getCranberryJuice(){

  //Ask user to input for how many Cranberry juices they want
  let cranberryJuiceInput = parseInt(prompt("How many Cranberry Juices you would like to have?(please enter number only)"));

  //loop will run if user didn't put postive number or the value is null
  while(cranberryJuiceInput <= 0 || isNaN(cranberryJuiceInput)){
    cranberryJuiceInput = parseInt(prompt("Please enter number only (more than 0)"));
  }

  //to print the quantity(from user) of Cranberry juice in the table
  document.getElementById("cranberryJuice").innerHTML = "x" + " " + cranberryJuiceInput ;

  getCheckOutButton()
}

// Function to get the quantity of Beet Juice
function getBeetJuice(){

  //Ask user to input for how many Beet juices they want
  let beetJuiceInput = parseInt(prompt("How many Beetroot Juices you would like to have?(please enter number only)"));

  //loop will run if user didn't put postive number or the value is null
  while(beetJuiceInput <= 0 || isNaN(beetJuiceInput)){
    beetJuiceInput = parseInt(prompt("Please enter number only (more than 0)"));
  }

  //to print the quantity(from user) of Beet Juice in the table
  document.getElementById("beetJuice").innerHTML = "x" + " " + beetJuiceInput ;

  getCheckOutButton()
}

  //Function to enable the "Check Out" button if any juice quantity is selected
function getCheckOutButton(){

  //take refernces for the quantity of the all juices

  let appleJuiceQuantity = parseInt(document.getElementById ("appleJuice").innerHTML.split(" ")[1]);
  let orangeJuiceQuantity = parseInt(document.getElementById ("orangeJuice").innerHTML.split(" ")[1]);
  let mangoJuiceQuantity = parseInt(document.getElementById ("mangoJuice").innerHTML.split(" ")[1]);
  let cranberryJuiceQuantity = parseInt(document.getElementById ("cranberryJuice").innerHTML.split(" ")[1]);
  let beetJuiceQuantity = parseInt(document.getElementById ("beetJuice").innerHTML.split(" ")[1]);

  // enable the checkout button when any one of the juice item is added to the cart

  if(appleJuiceQuantity || orangeJuiceQuantity || mangoJuiceQuantity || cranberryJuiceQuantity || beetJuiceQuantity){
      document.getElementById("checkOutButton").style.display = "block" ;
    }
}

//Function to calculate and display the Receipt
function checkOut(){

  //Ask user ti=o input Name to print in Receipt
  let name = prompt("Please enter your name");

  //It will keep asking until user put name or anything in it
  while( name == null || !/^[a-zA-Z]+$/.test(name)){
    name = prompt("Please enter your name (Name should not be empty and name must be a string).") ;
  }

  //save the price of the juices and calculate the total cost according to quantity
  let appleJuicePrice = parseInt(document.getElementById("appleJuiceprice").innerHTML);
  let appleJuice = parseInt(document.getElementById ("appleJuice").innerHTML.split(" ")[1]);

  let OrangeJuiceprice = parseInt(document.getElementById("OrangeJuiceprice").innerHTML);
  let orangeJuice = parseInt(document.getElementById ("orangeJuice").innerHTML.split(" ")[1]);

  let mangoJuiceprice = parseInt(document.getElementById("mangoJuiceprice").innerHTML);
  let mangoJuice = parseInt(document.getElementById ("mangoJuice").innerHTML.split(" ")[1]);

  let cranberryJuiceprice = parseInt(document.getElementById("cranberryJuiceprice").innerHTML);
  let cranberryJuice = parseInt(document.getElementById ("cranberryJuice").innerHTML.split(" ")[1]);

  let beetJuiceprice = parseInt(document.getElementById("beetJuiceprice").innerHTML);
  let beetJuice = parseInt(document.getElementById ("beetJuice").innerHTML.split(" ")[1]);

  //Declaring varibles
  let items = "" ; juicePrice = 0 ; gst = 0 ; totalPriceWithGst = 0 ;

  //  When the user chooses any of the juices, the receipt will show the juice with the price of that juice and the total juice cost
  //(multiplying juice price and total quantity) which the user selects

  if (appleJuice){
    items += `<tr> 
                <td>Apple Juice</td>
                <td>${appleJuicePrice}</td>
                <td>${appleJuicePrice * appleJuice}</td>
    </tr>`

    //total for applejuice without gst
    juicePrice += appleJuicePrice * appleJuice ;
  }

  if (orangeJuice){
    items +=  `<tr> 
                <td>Orange Juice</td>
                <td>${OrangeJuiceprice}</td>
                <td>${OrangeJuiceprice * orangeJuice}</td>
    </tr>`

    //total for orangejuice without gst
    juicePrice += OrangeJuiceprice * orangeJuice ;
  }

  if (mangoJuice){
    items += `<tr> 
                <td>Mango Juice</td>
                <td>${mangoJuiceprice}</td>
                <td>${mangoJuiceprice * mangoJuice}</td>
    </tr>`

    //total for mangojuice without gst
    juicePrice += mangoJuiceprice * mangoJuice ;
  }

  if (cranberryJuice){
    items += `<tr> 
                <td>Cran Berry Juice</td>
                <td>${cranberryJuiceprice}</td>
                <td>${cranberryJuiceprice * cranberryJuice}</td>
    </tr>`

    //total for craberryjuice without gst
    juicePrice += cranberryJuiceprice * cranberryJuice ;
  }

  if (beetJuice){
    items += `<tr> 
                <td>Beetroot Juice</td>
                <td>${beetJuiceprice}</td>
                <td>${beetJuiceprice * beetJuice}</td>
    </tr>`

    //total for beethuice without gst
    juicePrice += beetJuiceprice * beetJuice ;
  }

  //calculate 13% get according to "juiceprice"

  gst = juicePrice * (13/100) ;

  //Calculate total cost of the juices with gst and print it in reciept
  totalPriceWithGst = juicePrice + gst ;


  //Print the receipt with the customer's name, purchase juices with the original price and total price for that quantity, and show GST and total cost including GST.

  let receipt = `<h3>Receipt</h3>
                <h4>Customer Name: ${name}</h4>
                <table border="1">
                
                ${items}
                
                  <tr>
                    <td align="right"><b> GST @ 13% </b></td>
                    <td colspan="2">$${gst}</td>
                  </tr>
                  <tr>
                    <td align="right" ><b>Total</b></td>
                    <td colspan="2">$${totalPriceWithGst}</td>
                  </tr>
    </table>`

    document.getElementById("receipt").innerHTML = receipt ;
}