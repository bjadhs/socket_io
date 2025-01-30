const socket = io();

// DOM elements
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(input && input.value.trim()){
        socket.emit('message_from_client', {
            text:input.value,
            id: `${socket.id}-${Date.now()}`,
        });
        input.value = '';
    }
})

socket.on('message_from_server',(m)=>{
    console.log('Message from server:', m);
    const li = document.createElement('li');
    li.textContent = m.text;
    messages.appendChild(li);
    })
