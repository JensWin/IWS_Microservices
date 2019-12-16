
  document.addEventListener("DOMContentLoaded", function(event) { 
    var addCategory = () => {
        let data = ["Category1", "Category2", "Category3", "Category4"]
    
    var categoryObject = document.getElementById('category');
    
    data.forEach(x => {
        var category = document.createElement("a");
        var hrefAtt = document.createAttribute("href");
        hrefAtt.value = x+".html";
        var classAtt = document.createAttribute("class");
        classAtt.value = "list-group-item";
    
        category.setAttributeNode(hrefAtt);
        category.setAttributeNode(classAtt);
        category.innerText = x;
    
        categoryObject.appendChild(category);
    })
    }
    
    addCategory();
  });  

    



