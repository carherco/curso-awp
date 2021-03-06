if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/carlos/curso-awp/ejercicios/sync/sw.js')
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

$(function(){

  $('#submit_button').click(function(event){
    if($('#text_message').val()) {
      $.post('post_message.json',$('#text_message').val()).then(function(response){
        let prev_content = $('#messages').html();
        let new_content = prev_content + '<li>'+$('#text_message').val()+'</li>'
        $('#messages').html(new_content);
        $('#text_message').val('');
      });
    }
    
  });
});