let terevezler = document.querySelector(".terevezler");
let meyveler = document.querySelector(".meyveler");
let img = document.querySelectorAll("img");
let dragitem;

console.log(img)


img.forEach(e => {
    e.ondragstart = function (){
        dragitem = e;
    }
    
});


terevezler.ondragover = function (e) {
    e.preventDefault();
}
meyveler.ondragover = function(e) {
    e.preventDefault();
}
 terevezler.ondrop = function () {
        if (dragitem.classList != "meyve") {
            this.append(dragitem) 
        }
        else {
            alert("Duzgun secim deyil")
        }
    
    
 }

 meyveler.ondrop = function () {
    if (dragitem.classList != "terevez") {
        this.append(dragitem) 
    }
    else {
        alert("Duzgun secim deyil")
    }


}


