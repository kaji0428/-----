function janken(user_num){

    var npc_num = Math.floor(Math.random() * 3);
    var resultHTML = "";
  
    resultHTML += "[あなた: " + changeText(user_num) + " ] VS [相手: " + changeText(npc_num) + " ]";
  
    if(user_num == npc_num) {
      resultHTML += "<br>引き分け";
    } else if((user_num == 0 && npc_num == 1)||(user_num == 1 && npc_num == 2)||(user_num == 2 && npc_num == 0)) {
      resultHTML += "<br>勝ち!!";
    } else {
      resultHTML += "<br>負け...";
    }
  

    document.getElementById("result").innerHTML = resultHTML;
  }
  
  /**

   * @param num: 値(整数)
   * @return String
   */
  function changeText(num){
    var item = "";
    switch (num){
      case 0: item = "ぐー"; break;
      case 1: item = "ちょき"; break;
      case 2: item = "ぱー"; break;
      default: item = "不正な値を検出";
    }
    return item;
  }