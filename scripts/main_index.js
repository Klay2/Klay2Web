function test1(selector,words){




    document.querySelector(selector+"").textContent = words;
    return;
}

function alertTest(){
  alert("ClicketyClickety");
}

function getText(){
  var textIn = prompt('enter element');
  localStorage.setItem('input',textIn);
  var textIn2 = prompt('enter text');
  localStorage.setItem('input2',textIn2);
  test1(textIn,textIn2);
}


document.querySelector("#main_header_title_text").onclick = function(){
  if(document.querySelector("#main_header_title_text").textContent === "KlaymoJones"){
    test1("#main_header_title_text","KlaySquared")
  }
  else{
    test1("#main_header_title_text","KlaymoJones");
  }
};

document.querySelector('button').onclick = function(){
  getText();
};
