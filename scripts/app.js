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
    window.addEventListener("load", Start)


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


