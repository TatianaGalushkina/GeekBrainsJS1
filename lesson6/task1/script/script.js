function setNewSrcToBigImg() {
    var bigImg = document.querySelector('#bigImg');
    var smallImgSrc = event.target.attributes.src.nodeValue;
    var bigImgSrc = "img/big/" + smallImgSrc.split("/")[2];
    bigImg.src = bigImgSrc;
    bigImg.onerror = function () {
        alert("Ошибка при загрузке изображения!");
    }
}
