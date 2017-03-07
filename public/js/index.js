let socket = io();
socket.on('connect', ()=> {
  console.log("User connected");
})
socket.on('disconnect', ()=> {
  console.log("Disconnected from server");
})
socket.on('newMessage', (from, text)=> {
  console.log(`From: ${from} Text: ${text}`);
  let li = $('<li></li>')
  li.text(`From: ${from} Text: ${text}`);
  $('#messages').append(li);
})

$('#message-form').on('submit', (e)=> {
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  },(message)=>{
    console.log(message)
  })
});
