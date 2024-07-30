$(document).ready(function(){
    $("#menu-toggle").click(function(){
        $(".menu").toggle();
    });

    // Carrega o cabeçalho e rodapé
    $("#header-placeholder").load("header.html");
    $("#footer-placeholder").load("footer.html");

    // Carrega conteúdo específico com base no id do body
    var pageId = $("body").attr("id");
    if (pageId === "home") {
        $("#content-placeholder").load("home-content.html");
    } else if (pageId === "sobre") {
        $("#content-placeholder").load("sobre-content.html");
    } else if (pageId === "receitas") {
        $("#content-placeholder").load("receitas-content.html");
    } else if (pageId === "contato") {
        $("#content-placeholder").load("contato-content.html");
    }
});