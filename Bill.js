
var price1=0;
var price2=0;
var price3=0;
var price4=0;
var totalPrice=0;



function compute()
{
   // Starters price
    var type= document.getElementsByName("starter");
    if(type[0].checked)
    {
        price1 = 1000;
    }
    else if(type[1].checked)
    {
        price1 = 800;
    }
    else if(type[2].checked)
    {
        price1 = 700;
    }
    else if(type[3].checked)
    {
        price1 = 800;
    }
    else if(type[4].checked)
    {
        price1 = 900;
    }

       // Main Dish Price
       var type= document.getElementsByName("mainDish");
       if(type[0].checked)
       {
           price2 = 1200;
       }
       else if(type[1].checked)
       {
           price2 = 1500;
       }
       else if(type[2].checked)
       {
           price2 = 1000;
       }
       else if(type[3].checked)
       {
           price2 = 1600;
       }
       else if(type[4].checked)
       {
           price2 = 1000;
       }

        // Dessert Price
        var type= document.getElementsByName("dessert");
        if(type[0].checked)
        {
             price3 = 700;
        }
            else if(type[1].checked)
        {
            price3 = 800;
        }
            else if(type[2].checked)
        {
            price3 = 900;
        }
            else if(type[3].checked)
        {
            price3 = 700;
        }
            else if(type[4].checked)
        {
            price3 = 800;
        }


        // Dessert Price
         var type= document.getElementsByName("drinks");
            if(type[0].checked)
        {
            price4 = 500;
         }
            else if(type[1].checked)
        {
            price4 = 700;
        }
            else if(type[2].checked)
        {
            price4 = 600;
        }
            else if(type[3].checked)
        {
            price4 = 700;
        }
            else if(type[4].checked)
        {
            price4 = 500;
        }


     totalPrice = price1 + price2 + price3 + price4;
     document.getElementById("totalPrice").innerHTML = "Your total is " + totalPrice ;
     //document.write("Your Bill is: " + totalPrice);

              
       

}
