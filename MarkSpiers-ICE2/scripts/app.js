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
            case "Contact List":
                DisplayContactListPage();
                break;
            case "Edit":
                DisplayEditPage()
                break;
        }
    }
    window.addEventListener("load", Start);

    /***
     *
     *
     */
    function AddContact(){
        let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
        if(contact.serialize()){
            let key = contact.FullName.substring(0, 1) + Date.now();
            localStorage.setItem(key, contact.serialize());
        }
    }

    function DisplayHomePage() {

        $("#AboutUsBtn").on("click", () => {
            location.href = "about.html";
        });

        $("main").append(`<p id="MainParagraph" class="mt=3">This is the main paragraph</p>`);

        $("body").append(`<article> 
                            <p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>
                          </article>`);
    }

    function DisplayProductPage() {

    }

    function DisplayServicesPage() {

    }

    function DisplayContactPage() {
        console.log("Contact Us Page")
        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox")
        sendButton.addEventListener("click", function (){
            if(subscribeCheckbox.checked){
                AddContact();
            }
        })
    }

    function DisplayContactListPage() {
        console.log("ContactList Page")

        if(localStorage.length > 0){
            let contactList = document.getElementById("contactList");
            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;
            for(const key of keys){
                let contactData = localStorage.getItem(key);
                let contact = new Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                         <td>${contact.FullName}</td>
                         <td>${contact.ContactNumber}</td>
                         <td>${contact.EmailAddress}</td>
                         
                         <td class="text-center"> <button class="btn btn-primary btn-sm edit" value="${key}">
                         <i class="fas fa-edit fa-sm"></i> Edit</button>
                         </td>
                         
                         <td class="text-center"> <button class="btn btn-danger btn-sm delete" value="${key}">
                         <i class="fas fa-trash-alt fa-sm"></i> Delete</button>
                         </td>
                         </tr>`;
                index++;
            }
            contactList.innerHTML = data;

            $("#addButton").on("click", () => {
                location.href = "edit.html#add";
            });

            $("button.delete").on("click", function(){
                if(confirm("Delete contact - Are you sure?")){
                    localStorage.removeItem($(this).val());
                }
                location.html = "contact-list.html"
            });

            $("button.edit").on("click", function(){
                location.href = "edit.html#" + $(this).val();
            });

        }
    }

    function DisplayAboutPage() {

    }

    function DisplayEditPage() {
        console.log("Contact Edit Page")

        let page = location.hash.substring(1);
        switch (page){
            case "add":
                $("main>h1".text("Add Contact"));
                $("#editButton").html(`<i class="fas fa-plus-circle fa-sm"></i> Add`);
                $("#editButton").on("click", (event => {
                    event.preventDefault();
                    AddContact(fullName.value, contactNumber.value, emailAddress.value);
                    location.href = "contact-list.html"
                }))
                $("#cancelButton").on("click", () => { location.href = "contact-list.html" })
                break;
            default:{
                let contact = new Contact();
                contact.deserialize(localStorage.getItem(page));

                $("#firstName").val(contact.FullName);
                $("#contactNumber").val(contact.ContactNumber);
                $("#emailAddress").val(contact.EmailAddress);

                $("#editButton").on("click", (event) => {

                    event.preventDefault();

                    contact.FullName = $("#fullName").val();
                    contact.ContactNumber = $("#contactNumber").val();
                    contact.EmailAddress = $("#emailAddress").val();

                    localStorage.setItem(page, contact.serialize());

                    location.href = "contact-list.html";
                });

                $("#cancelButton").on("click", () => { location.href = "contact-list.html" })
            }
            break;
        }
    }
})();