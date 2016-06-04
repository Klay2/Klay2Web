
function test1(selector,words){
    document.querySelector(selector+"").textContent = words;
    return;
}

function alertTest(){
  alert("ClicketyClickety");
}

function newDiv(){
  var newDiv = document.createElement('div');
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.background = "red";
  newDiv.style.color = "white";
  newDiv.innerHTML="<h2>ThingName</h2><p>Preference: 100<button>+</button><button>-</button><br>Effect: 25<button>+</button><button>-</button></p>";

  /*
  newDiv.innerHTML="hi";*/
  document.body.appendChild(newDiv);
  return;
}
/*
function getText(){
  var textIn = prompt('enter element');
  localStorage.setItem('input',textIn);
  var textIn2 = prompt('enter text');
  localStorage.setItem('input2',textIn2);
  test1(textIn,textIn2);
  return;
}
*/

document.querySelector("#main_header_title_text").onclick = function(){
  if(document.querySelector("#main_header_title_text").textContent === "KlaymoJones"){
    test1("#main_header_title_text","KlaySquared")
  }
  else{
    test1("#main_header_title_text","KlaymoJones");
  }
};


document.querySelector("#newDivButton").onclick = function(){
  alert("getting this far");
  newDiv();
};
