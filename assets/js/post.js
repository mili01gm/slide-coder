window.addEventListener('load',function(){
  var publish = document.getElementById('publicaciones');
  var post = document.getElementById('post');
  var boton = document.getElementById('postear');

  function newPost(texto){
    var postArea = document.createElement('div');
    postArea.setAttribute('class',"publicados");
    var p = document.createElement('p');
    p.innerText = texto.value;
    postArea.appendChild(p);
    return postArea;
  }

  boton.addEventListener('click',function(e){
    e.preventDefault();
    console.log(post.value);
    var lista = document.getElementsByClassName('publicados');
    if(lista.length == 0){
      publish.appendChild(newPost(post));
      document.getElementById('post-area').reset();
    } else {
      publish.insertBefore(newPost(post),publish.childNodes[0]);
      document.getElementById('post-area').reset();
    }
  })



});
