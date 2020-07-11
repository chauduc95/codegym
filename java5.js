function chuyendoi(){
    var V =document.getElementById('amount').value; debugger;
    var USD=0;
    var VND=0;

    var currency = document.getElementById('currency').value;
    if(currency=="USD"){
        VND=V*23000;
        document.write("Result: "+ VND+"VND");
    }
    else{
        USD=V/23000;
        document.write("Result: "+ USD +"USD");
    }
   
   

    
}
