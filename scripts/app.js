<!--
Name: Mark Spiers
Date: 2023/01/16
File: app.js
-->
"use strict";

(function() {

    function Start() {
        console.log("App Started")
        switch (document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
        }
    }
    window.addEventListener("load", Start);
    let DocumentBody;
    let MainContent = document.getElementById("main")[0];
    let MainParagraph = document.createElement("p");

    MainParagraph.setAttribute("id", "MainParagraph");
    MainParagraph.setAttribute("class", "mt-3");
    MainParagraph.textContent = "This is the main paragraph";

    MainContent.appendChild(MainParagraph);

    let FirstString = "This is";
    let SecondString = `${FirstString} the Main Paragraph.`;
    MainParagraph.textContent = SecondString;

    let Article = document.createElement("article");
    let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>`;
    Article.setAttribute("class", "container");
    Article.innerHTML = ArticleParagraph;

    DocumentBody.appendChild(Article);
    function DisplayHomePage() {
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function (){
            console.log("About us clicked")
            location.href = "about.html"
        });
    }

    function DisplayProductPage() {

    }

    function DisplayServicesPage() {

    }

    function DisplayContactPage() {

    }

    function DisplayAboutPage() {

    }
})();


