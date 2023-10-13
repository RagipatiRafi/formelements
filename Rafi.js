Player1_name = localStorage.getItem("Player1_Name");
Player2_name = localStorage.getItem("Player2_Name");

Player1_score = 0;
Player2_score = 0;

document.getElementById("Player1_Name").innerHTML = Player1_Name + " : ";
document.getElementById("Player2_Name").innerHTML = Player2_Name + " : ";

document.getElementById("Player1_score").innerHTML = Player1_score;
document.getElementById("Player2_score").innerHTML = Player2_score;

document.getElementById("Player_Question").innerHTML = "Question Turn - "+Player1_Name;
document.getElementById("Player_Answer").innerHTML = "Answer Turn - "+Player2_Name;


function send(){
    Number1 = document.getElementById("Number1").value;
   Number2 =  document.getElementById("Number2").value;
    actual_answer = parseInt(Number1)*parseInt(Number2);
    console.log(actual_answer);


question_number = "<h4>" + Number1 + "X" + Number2 + "</h4>";
input_box = "<br> answer: <input type = 'text' id = 'input_check_box'>";
check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
row = question_number1+ input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("Number1").value="";
document.getElementById("Number2").value="";
}

