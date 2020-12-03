function text(id, phrase){
    let para = document.getElementById(id);
    para.innerHTML= phrase;
}
text("p1", "bonjour");
text("p2", "je suis le texte 2");
text("p3", "text 3");
text("p4", "le numero 4");
text("p5", "et voila le 5");