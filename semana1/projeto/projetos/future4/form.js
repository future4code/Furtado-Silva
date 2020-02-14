
function ValidarEmail() {
    //var email = emailform.idmail.value;
    var email = document.querySelector('#username').value;
    var compare = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ ;
    
    if (email.match(compare))
    {
        document.write(`<!DOCTYPE html>
        <html lang="pt">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Bem  Vindo</title>
        
        <style>
        
            *{
                padding: 0;
                margin: 0;
                background: rgb(25, 22, 27);
                color: white;
                font-family: Arial, Helvetica, sans-serif;
            }
        
           
        @media only screen and (min-width: 768px)
         {
            .wellcome {
                text-align:center;
                padding-left: 5%;      
            }
            img {
                max-height: 40vh;
            }
        }
        
        .content 
        {
            display: grid;
            grid-template-rows: 40vh 20vh 40vh;
            grid-template-areas: "wellcome" "user" "pic";      
        }
        
        .content > .wellcome 
        {
            grid-area: wellcome; 
            background:none;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            text-align:right;
            padding-right: 5%;
        }
        
        
        .content > .user 
        {
            grid-area: user; 
            background:none;
            display: flex;
            flex-wrap: wrap;
            justify-items: first baseline;
            justify-content: center;  
            text-align:center; 
        }
        .content > .pic 
        {
            grid-area: pic; 
            background:none;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            justify-items:last baseline; 
            background: none; 
        }
         
        img {
            max-width: 100vw;
            max-height: auto;
            background: none;
        }
        
        h1 {
            font-size: 90px;
            display: flex;
            background: none; 
            font-family: 'Courier New', Courier, monospace;  
        }
        
        p {
            font-size: 30px;
            font-weight: bolder;
            font-family: 'Courier New', Courier, monospace;
            color: rgb(247, 164, 88);
            width: 11em;
            word-wrap: break-word;     
        }
        
        </style>
        
        </head>
        <body>
            <div class="content">
                <div class="wellcome">
                    <h1>BEM VIND@</h1>
                    
                </div>
        
                <div class="user"><p>${email}</p></div>
        
                <div class="pic">
                    <img src="future4_wellcome.png"/>
                </div> 
            </div>
         
        </body>
        </html>`);
        return true;
     
    }
    else
    {
        alert ("Email Inválido!");
        return false;
        
       
    }
}

