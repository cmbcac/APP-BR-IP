(function() {
  //body & trigger
  var $body = document.body;
  var $menu_trigger = $body.getElementsByClassName('polsador-menu')[0];

  if (typeof $menu_trigger !== 'undefined') {
    $menu_trigger.addEventListener("click", function() {
      $body.className = ($body.className == "menu-active") ? '' : 'menu-active'; 
    });
  }

  var $menu_trigger2 = $body.getElementsByClassName('polsador-menu2')[0];

  if (typeof $menu_trigger2 !== 'undefined') {
    $menu_trigger2.addEventListener("click", function() {
      $body.className = ($body.className == "menu-active") ? '' : 'menu-active'; 
    });
  }

}).call(this);
