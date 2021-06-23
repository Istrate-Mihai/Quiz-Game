var initial_Title = document.getElementsByTagName("h1")[0];
var initial_Description = document.getElementsByTagName("p")[0];
var initial_Button = document.getElementsByTagName("button")[0];
var score = 0;
var Options = [
   
    ["Athens","London","Bucharest","New York"],
    ["Elizabeth I","Frederick The Great","Wilhelm II","Charlemagne"],
    ["Bill Clinton","Donald Trump","George W. Bush","Joe Biden"],
    ["None","4","11","7"],
    ["1908","1870","1877","2000"],
    ["1999","2003","2007","2015"],
    ["Joseph Murray","Edward Jenner","Marie Curie","Alexander Fleming"],
    ["Bull","Horse","Dog","Cat"],
    ["Prunes","Chickpeas","Venison","Maize"],
    ["The skin","Leg","The heart","The brain"]

     
];
var Questions = ["What is the capital of Greece?","Who was the last German Monarch?","Who was the 43rd President of the United States?","How many Oscars did Titanic won?","In what year was the first-ever Wimbledon Championship held?","What year was the very first model of the iPhone released?","Who discovered penicillin?","Which animal can be seen on the Porsche logo?","What other name does “corn” go by?"," What is your body’s largest organ?"];
var j = 0;
var k = 1;
var nextButton_Present = false;

function startGame(){

    initial_Title.style.display = "none";
    initial_Description.style.display = "none";
    initial_Button.style.display = "none";

    generateQuestion();  
    

}

function generateQuestion(){

var i;

var form = document.createElement("form");
var question = document.createElement("label");
question.id = "Question";
var questionContent = document.createTextNode(k+"."+ Questions[j]);
question.appendChild(questionContent);
form.appendChild(question);



for(i=0; i<3; i++){
    var brk =  document.createElement("br");
    form.appendChild(brk);
}

if(k!=11){

    for(i=0; i<4; i++){
   
        var option = document.createElement("input");
        option.type = "radio";
        option.name = "option";
        

        var answer = document.createElement("label");
        var text = document.createTextNode(Options[j][i]);
        answer.appendChild(text);
        option.value = Options[j][i]; 
        form.appendChild(option);
        form.appendChild(answer);
         


        option.addEventListener("click",()=>{
              
            
             
             if(!nextButton_Present){
                 
                var button = document.createElement("button");
                var button_Text = document.createTextNode("Next");
                button.appendChild(button_Text);
                button.addEventListener("click",()=>{
                     
                     checkAnswer(document.forms[0]["option"].value);
                    

                     document.body.removeChild(document.forms[0]);
                     nextButton_Present = false;
                     generateQuestion();             
                
                     
                });
                document.forms[0].appendChild(brk);
                document.forms[0].appendChild(button);
                nextButton_Present = true;
                  
    
             }
           
             
        })
            
    
    }
        
    document.body.insertBefore(form,document.body.childNodes[0]);

}else{

if(score==10){

    document.write("Congratulations,you scored the maximum points " + score +" !");

}else if(score > 4 && score < 10){

    document.write("Good job,you scored an excellent " + score +" points!");

}else{
 
    document.write("Sorry,your score is " + score +",you'll do better next time!");

}




}


j+=1;
k+=1;
}

function checkAnswer(chosen_Value){
 
      switch(k){
  
          case 2:
              if(chosen_Value=="Athens") score+=1;                 
          break;


          case 3:
            if(chosen_Value=="Wilhelm II") score+=1;     
          break;
          

          case 4:
            if(chosen_Value=="George W. Bush") score+=1;         
          break;


          case 5:
            if(chosen_Value=="11") score+=1;        
          break;


          case 6:
            if(chosen_Value=="1877") score+=1;        
          break;


          case 7:
            if(chosen_Value=="2007") score+=1;        
          break;


          case 8:
            if(chosen_Value=="Alexander Fleming") score+=1;        
          break;


          case 9:
            if(chosen_Value=="Horse") score+=1;       
          break;


          case 10:
            if(chosen_Value=="Maize") score+=1;     
          break;


          case 11:
            if(chosen_Value=="The skin") score+=1;      
          break;

        
      }
      
}