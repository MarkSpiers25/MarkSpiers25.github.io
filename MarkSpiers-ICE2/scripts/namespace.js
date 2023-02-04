"use strict";
let core;

(function (core){

    class Contact {

        constructor(fullName = "", contactNumber = "", emailAddress = "") {
            this.FullName = fullName;
            this.ContactNumber = contactNumber;
            this.EmailAddress = emailAddress;
        }

        // GETTERS
        get getFullName(){
            return this.FullName;
        }

        get getContactNumber(){
            return this.ContactNumber;
        }

        get getEmailAddress(){
            return this.EmailAddress;
        }
        // GETTERS

        // SETTERS
        set setFullName(fullName){
            this.m_fullName = this.fullName;
        }

        set setContactNumber(contactNumber){
            this.m_contactNumber = this.contactNumber;
        }

        set setEmailAddress(emailAddress){
            return this.m_emailAddress = this.emailAddress;
        }
        // SETTERS

        // METHODS
        toString(){
            return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n Email Address: ${this.EmailAddress}`;
        }
        // METHODS

        serialize(){
            if(this.FullName != "" && this.ContactNumber != "" && this.EmailAddress != ""){
                return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`;
            }
            console.error("One or more of the properties of the contact object are missing or invalid");
            return null;
        }

        deserialize(data){
            let propertyArray = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];

        }
    }

    core.Contact = Contact;
})(core || (core = {}));