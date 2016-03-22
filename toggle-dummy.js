  $(function(){
    var button =
      $('<button type="button" onclick="toggleDummy()"> Show dummies</button>');
    $("body").prepend(button);
  });
  function toggleDummy(){
    $(".dummy").toggleClass("is-active")
  }
