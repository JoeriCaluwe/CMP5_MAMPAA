//---------chat------------

var messages = document.querySelector('.messages')
var btn = document.querySelector('.btn')
var input = document.querySelector('.input input')

btn.addEventListener('click', sendMessage)
input.addEventListener('keyup', function(evt){ if(evt.keyCode == 13) sendMessage() })

function sendMessage(){
   var msg = input.value;
   input.value = ''
   writeLine(msg)
}
function addMessage(evt){
   console.log(evt);
   var msg = evt.data ? JSON.parse(evt.data) : evt;
   writeLine(`${msg.FROM}: ${msg.MESSAGE}`)
}
function writeLine(text){
   var message = document.createElement('div')
   message.classList.add('message')
   message.innerHTML= 'Jij: ' + text
   messages.appendChild(message)
   messages.scrollTop = messages.scrollHeight;
}
