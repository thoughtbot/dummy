$(function(){
  addButton()

  if (exposingDummyElements()){
    toggleActiveElement();
  }
});

function addButton() {
  var button = $('<button type="button" onclick="toggleDummyElements()">Show dummies</button>');
  $("body").prepend(button);
}

function toggleDummyElements(){
  toggleActiveElement();
  toggleStorage();
}

function toggleActiveElement() {
  $(".dummy").toggleClass("is-active");
}

function toggleStorage() {
  if (exposingDummyElements()) {
    localStorage.setItem('showDummy', "false");
  } else {
    localStorage.setItem('showDummy', "true");
  }
}

function exposingDummyElements() {
  return localStorage.showDummy == "true"
}
