
load_templates();

function load_templates(){

    var item1 = create_item("Blau unso", "Shirt", "22,40€");
    var item2 = create_item("Grün unso", "Shirt", "22,40€");
    var item3 = create_item("Schwarz unso", "Shirt", "22,40€");
    var item4 = create_item("Blau unso", "Shirt", "22,40€");
    var item5 = create_item("Grün unso", "Shirt", "22,40€");
    var item6 = create_item("Schwarz unso", "Shirt", "22,40€");
    var item7 = create_item("Weiß unso", "Shirt", "22,40€");
    var item8 = create_item("Blau unso", "Shirt", "22,40€");
    var item9 = create_item("Grün unso", "Shirt", "22,40€");
    var item10 = create_item("Schwarz unso", "Shirt", "22,40€");
    var item11 = create_item("Weiß unso", "Shirt", "22,40€");

    var grid_row = document.getElementById("grid-row");

    grid_row.append(item1);
    grid_row.append(item2);
    grid_row.append(item3);
    grid_row.append(item4);
    grid_row.append(item5);
    grid_row.append(item6);
    grid_row.append(item7);
    grid_row.append(item8);
    grid_row.append(item9);
    grid_row.append(item10);
    grid_row.append(item11);
}

function create_item(name, category, price){
    var card = document.getElementById("card-template");
    var cln = card.cloneNode(true);

    var image = cln.childNodes.item(1).childNodes.item(3).childNodes.item(1);

    var item_category = cln.childNodes.item(1).childNodes.item(9).childNodes.item(3).childNodes.item(1);
    item_category.innerHTML = category;

    var item_badge = cln.childNodes.item(1).childNodes.item(9).childNodes.item(5).childNodes.item(1).childNodes.item(1).childNodes.item(1);
    item_badge.innerHTML = "NEW";

    var item_name = cln.childNodes.item(1).childNodes.item(9).childNodes.item(5).childNodes.item(1).childNodes.item(1);
    item_name.innerHTML = name;

    var item_price = cln.childNodes.item(1).childNodes.item(9).childNodes.item(7).childNodes.item(1);
    item_price.innerHTML = price;

    return cln;
}