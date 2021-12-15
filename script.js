let player = document.getElementById('player');
  let a = document.getElementById('a');
  let b = document.getElementById('b');
  let c = document.getElementById('c');
  let d = document.getElementById('d');
  let e = document.getElementById('e');
  let f = document.getElementById('f');
function play(value){
  let player = document.getElementById('player');
  let newvalue = value.id

  switch (newvalue){
    case "a":
      player.setAttribute('src', 'a.mp3');
      player.play();
      a.className ="soundcl";
      setTimeout( function(){ a.className = 'sound'; }, 500 );
      break;
    case "b":
      player.setAttribute('src', 'b.mp3');
      player.play();
      b.className ="soundcl";
      setTimeout( function(){ b.className = 'sound'; }, 500 );
      break;
    case "c":
      player.setAttribute('src', 'c.mp3');
      player.play();
      c.className ="soundcl";
      setTimeout( function(){ c.className = 'sound'; }, 500 );
      break;
    case "d":
      player.setAttribute('src', 'd.mp3');
      player.play();
      d.className ="soundcl";
      setTimeout( function(){ d.className = 'sound'; }, 500 );
      break;
    case "e":
      player.setAttribute('src', 'e.mp3');
      player.play();
      e.className ="soundcl";
      setTimeout( function(){ e.className = 'sound'; }, 500 );
      break;
    case "f":
      player.setAttribute('src', 'f.mp3');
      player.play();
      f.className ="soundcl";
      setTimeout( function(){ f.className = 'sound'; }, 500 );
      break;
  }
}

document.addEventListener("keydown", function(event){
let newvalue = event.key
switch (newvalue){
  case "a":
    player.setAttribute('src', 'a.mp3');
    player.play();
    a.className ="soundcl";
    setTimeout( function(){ a.className = 'sound'; }, 500 );
    break;
  case "b":
    player.setAttribute('src', 'b.mp3');
    player.play();
    b.className ="soundcl";
    setTimeout( function(){ b.className = 'sound'; }, 500 );
    break;
  case "c":
    player.setAttribute('src', 'c.mp3');
    player.play();
    console.log("3");
    c.className ="soundcl";
    setTimeout( function(){ c.className = 'sound'; }, 500 );
    break;
  case "d":
    player.setAttribute('src', 'd.mp3');
    player.play();
    d.className ="soundcl";
    setTimeout( function(){ d.className = 'sound'; }, 500 );
    break;
  case "e":
    player.setAttribute('src', 'e.mp3');
    player.play();
    e.className ="soundcl";
    setTimeout( function(){ e.className = 'sound'; }, 500 );
    break;
  case "f":
    player.setAttribute('src', 'f.mp3');
    player.play();
    f.className ="soundcl";
    setTimeout( function(){ f.className = 'sound'; }, 500 );
    break;
}
});
