console.log('Script loaded successfully!');

function updateName() {
  let name = document.getElementById('input').value;
  let greet = document.getElementById('greet');
  if (name.trim() === '') {
    greet.innerHTML = '';
  } else {
    greet.innerHTML = `Hello ${name}`;
  }
}


