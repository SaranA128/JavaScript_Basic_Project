function changeBorderWidth(width) {
    document.getElementById("myTable").style.border = width + " solid #ddd";
}

function changeForegroundColor(color) {
    document.getElementById("myTable").style.color = color;
}

function changeBackgroundColor(color) {
    document.getElementById("myTable").style.backgroundColor = color;
}

function changeTextAlign(align) {
    var cells = document.getElementById("myTable").getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.textAlign = align;
    }
    var headers = document.getElementById("myTable").getElementsByTagName("th");
    for (var i = 0; i < headers.length; i++) {
        headers[i].style.textAlign = align;
    }
}