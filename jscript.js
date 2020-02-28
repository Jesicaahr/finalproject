function incrementLevel(e) {
    var level = document.getElementById("level")
    var number = level.innerHTML

    var color = document.getElementById("case").style.color
    var color2 = e.style.backgroundColor
    item = random1();
    items_text = random2();

    if (number < 15 && color == color2) {
        number++;
        level.innerHTML = number;
        randomColor(number, item, items_text);
        document.getElementById("wrong").style.display = "none"
    }
    else if (number == 15) {
        document.getElementById("win").style.display = "block"
    }
    else {
        document.getElementById("wrong").style.display = "block"
        level.innerHTML = 0;
    }
}

function random1() {
    items = [
        'Blue', 'Blueviolet', 'Pink', 'Darkgreen', 'Darkgray',
        'Orange', 'Yellow', 'White', 'Red', 'Black']
    var item = items[Math.floor(Math.random() * items.length)]

    return item
}

function random2() {
    items_texts = [
        'Biru', 'Ungu', 'Pink', 'Hijau', 'Abu-Abu',
        'Orange', 'Kuning', 'Putih', 'Merah', 'Hitam']
    var items_text = items_texts[Math.floor(Math.random() * items_texts.length)]

    return items_text
}


function randomColor(number, item, items_text) {

    var number_random = [1, 2]
    var random_item = number_random[Math.floor(Math.random() * number_random.length)]

    document.getElementById("case").innerHTML = items_text

    var index_text = items_texts.indexOf(items_text)

    if (item == items[index_text]) {
        item = random1()
    }

    if (random_item == 1) {
        document.getElementById("case").style.color = item
        document.getElementById("color1").style.backgroundColor = item
        document.getElementById("color2").style.backgroundColor = items[index_text]
    }
    else {
        document.getElementById("case").style.color = item
        document.getElementById("color2").style.backgroundColor = item
        document.getElementById("color1").style.backgroundColor = items[index_text]
    }
}

