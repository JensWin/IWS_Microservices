//const response = await fetch('/api/shoppingcart');
//const myJson = await response.json();
let data = ["Handy", "Auto", "Haus"]
document.addEventListener("DOMContentLoaded", function(event) { 
    data.forEach(element => {
        let node = document.createElement('li');
        node.innerText = element
        document.getElementById('shoppingcart').appendChild(node)
    });
  });


