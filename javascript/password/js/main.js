let input = document.getElementById('passes');
let eyeIcon = document.getElementById('eye-icon');
eyeIcon.addEventListener('click', function(){
    if(input.type === 'password'){
        input.type.textContent = '🔒';
    }else{
        input.type = 'password';
        eyeIcon.textContent = '🔓;'
    }
})