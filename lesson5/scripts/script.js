var letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var whiteFigure = ['&#9814;', '&#9816;', '&#9815;', '&#9812;', '&#9813;', '&#9815;', '&#9816;', '&#9814;', '&#9817;'];
var blackFigure = ['&#9820;', '&#9822;', '&#9821;', '&#9818;', '&#9819;', '&#9821;', '&#9822;', '&#9820;', '&#9823;'];
var table = document.createElement("table");
table.className = "chess";
for (var i = 0; i < 10; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 10; j++) {
        var td = document.createElement('td');
        //если первый столбец, то его надо заполнить цифрами
        if (j == 0 && i != 0 && i != 9) {
            td.innerText = 9 - i;
            td.className = "coordinate";
        }
        //если последний столбец, то его надо заполнить цифрами
        else if (j == 9 && i != 0 && i != 9) {
            td.innerText = 9 - i;
            td.className = "coordinate rotate";
        }
        //если первая строка, то ее надо заполнить буквами
        else if (i == 0 && j != 0 && j != 9) {
            td.innerText = letter[j - 1];
            td.className = "coordinate rotate";
        }
        //если последняя строка, то ее надо заполнить буквами
        else if (i == 9 && j != 0 && j != 9) {
            td.innerText = letter[j - 1];
            td.className = "coordinate";
        } 
        else {
            if (i != 0 && i != 9 && j != 0 && j != 9) {
                //расставляем белые фигуры
                if (i == 1){
                    td.innerHTML = whiteFigure[j-1];
                }
                if (i == 2){
                    td.innerHTML = whiteFigure[8];
                }
                //расставляем черные фигуры
                if (i == 8){
                    td.innerHTML = blackFigure[j-1];
                }
                if (i == 7){
                    td.innerHTML = blackFigure[8];
                }
                if (i % 2 == j % 2) {
                    td.className = "white";
                } 
                else {
                    td.className = "black";
                }
            }

        }

        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);
