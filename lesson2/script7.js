//при нестрогом равенстве значение null ни к чему не приводится, оно равно только undefined,
//поэтому условие ниже ложно
if (null == 0){
    alert ("null == 0");
}
//При сравнении null приводится к 0, 
//поэтому условие ниже истино
if (null >= 0){
    alert ("null >= 0");
}
//При сравнении null приводится к 0, 
//поэтому условие ниже ложно
if (null > 0){
    alert ("null > 0");
}
//При сравнении null приводится к 0, 
//поэтому условие ниже ложно
if (null < 0){
    alert ("null < 0");
}
//При строгом равенстве сравниваются типы, null не является числовым значением number, 
//поэтому условие ниже ложно
if (null === 0){
    alert ("null === 0");
}
