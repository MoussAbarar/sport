let items = document.getElementById('items');
let icon = document.getElementById('icon');

icon.addEventListener('click', function(){
    items.classList.toggle('show');
});