$(function(){
  addButton()

  if (exposingDummyElements()){
    toggleActiveElement();
  }
});

function addButton() {
  var button = $('<button class="toggle-dummy-button" onclick="toggleDummyElements()"><svg class="toggle-dummy-icon" width="84" height="100" viewBox="0 0 84 100" xmlns="http://www.w3.org/2000/svg"><path d="M41.26 70.305h27.573v7.947H41.26zM41.245 81.055H68.82v7.948H41.244zM41.21 91.78h27.574v7.95H41.21zM41.28 42.82h11.45V31.37c-6.324 0-11.45 5.125-11.45 11.45z"/><path d="M52.73 42.82v11.45c6.324 0 11.45-5.126 11.45-11.45H52.73z"/><path d="M45.78 0C28.688 0 12.926 12.83 9.65 26.97c-.74 3.142-1.554 11.35-1.554 11.35L.226 58.138c-.15.357-.226.76-.226 1.18 0 1.67 1.37 3.036 3.046 3.036h5.05V72.88c0 17.777 8.324 18.248 14.85 17.056l15.04-4.61-.104-18.09 31.158.064c8.767-6.896 14.395-17.606 14.395-29.624C83.435 16.866 66.572 0 45.78 0zM17.348 45.83c-2.305 0-4.188-1.883-4.188-4.213 0-2.316 1.883-4.196 4.188-4.196 2.326 0 4.22 1.88 4.22 4.197-.002 2.332-1.895 4.214-4.22 4.214zM52.73 56.346c-7.493 0-13.567-6.074-13.567-13.57 0-7.49 6.074-13.565 13.568-13.565 7.493 0 13.567 6.074 13.567 13.566 0 7.495-6.073 13.57-13.566 13.57z"/></svg></button>');
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
