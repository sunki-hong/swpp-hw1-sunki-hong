class Form {
    constructor(public email: string,
                public password: string,
                public password_confirmation: string,
                public website: string,
                public phone_number: string,
                public fname: string,
                public lname: string,
                public age: number,
                public birth_month: string,
                public birth_day: number,
                public birth_year: number) {
    }

    validateEmail(): boolean {
        let emailRegex = /^[^@]+@[^@]+.\D{2,3}$/;
        return emailRegex.test(this.email)
    }

    validatePassWord(): boolean {
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{8,}$/;
        return passwordRegex.test(this.password)
    }

    validatePassWordConfirm(): boolean {
        return (this.password == this.password_confirmation)
    }

    validateWebSite(): boolean {
        let websiteRegex = /^https?:\/\/\S+$/;
        return websiteRegex.test(this.website)
    }

    validatePhoneNumber(): boolean {
        let phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
        return phoneRegex.test(this.phone_number);
    }

    validateFname(): boolean {
        let fnameRegex = /^[A-Z]{1}[a-z]+$/;
        return fnameRegex.test(this.fname)
    }

    validateLname(): boolean {
        let lnameRegex = /^[A-Z]{1}[a-z]+$/;
        return lnameRegex.test(this.lname)
    }

    validateAge(): boolean {
        let ageRegex = /^\d{1,2}|[1-2]00$/;
        return ageRegex.test(String(this.age));
    }

    validateBirthMonth(): boolean {
        let birthmonthRegex = /^January|February|March|April|May|June|July|August|September|October|November|December$/;
        return birthmonthRegex.test(this.birth_month)
    }

    validateBirthDay(): boolean {
        let birthdayRegex = /^[1-9]|\d{2}$/;
        return birthdayRegex.test(String(this.birth_day))
    }

    validateBirthYear(): boolean {
        let birthyearRegex = /^1[8-9]\d{2}|20[0-1][0-7]$/;
        return birthyearRegex.test(String(this.birth_year))
    }


}


// TODO: You may fill in functions in the class.


let but = document.createElement('button');
but.innerHTML = "Check";
but.onclick = function () {
    let email: string = document.forms["form"]["email"].value;
    let password: string = document.forms["form"]["password"].value;
    let password_confirmation: string = document.forms["form"]["password_confirmation"].value;
    let website: string = document.forms["form"]["website"].value;
    let phone_number: string = document.forms["form"]["phone_number"].value;
    let fname: string = document.forms["form"]["fname"].value;
    let lname: string = document.forms["form"]["lname"].value;
    let age: number = document.forms["form"]["age"].value;
    let birth_month: string = document.forms["form"]["birth_month"].value;
    let birth_day: number = document.forms["form"]["birth_day"].value;
    let birth_year: number = document.forms["form"]["birth_year"].value;

    // TODO: Fill in the rest of the function. Use the Form class defined above

    let form = new Form(email, password, password_confirmation, website, phone_number, fname, lname, age, birth_month, birth_day, birth_year);
    let errorObj: { [name: string]: boolean } = {
        "email": form.validateEmail(),
        "password": form.validatePassWord(),
        "password_confirmation": form.validatePassWordConfirm(),
        "website": form.validateWebSite(),
        "phone_number": form.validatePhoneNumber(),
        "fname": form.validateFname(),
        "lname": form.validateLname(),
        "age": form.validateAge(),
        "birth_month": form.validateBirthMonth(),
        "birth_day": form.validateBirthDay(),
        "birth_year": form.validateBirthYear(),

    };
    let errorMsg: { [name: string]: string } = {
        "email": "characters other than @ or whitespace followed by an @ sign, followed by more characters (not '@', '.', or whitespace: co.kr is not allowed in this case), and then a \".\". After the \".\", you can only write 2 to 3 letters from a to z",
        "password": "Must contain at least one number and one uppercase and one lowercase letter, and at least 8 or more characters.",
        "password_confirmation": "Must match password.",
        "website": "Should start with http:// or https:// followed by at least one character (not whitespace)",
        "phone_number": "nnn-nnnn-nnnn: three numbers, then \"-\", followed by four numbers and a \"-\", then four numbers.\n",
        "fname": "Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets",
        "lname": "Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets",
        "age": "Must be a number between 0 and 200 (inclusive).",
        "birth_month": "Must be one of \"January\", \"February\", ..., \"December\"",
        "birth_day": "Must be a number of one or two digits.",
        "birth_year": "Must be a number between 1800 and 2017 (inclusive).",
    };


    let errorList: string[] = [];

    for (let key of Object.keys(errorObj)) {
        let container = document.getElementsByName(key)[0].parentNode;
        let wrapper = document.createElement('span');
        wrapper.setAttribute("id", key + "_container");
        wrapper.appendChild(document.createElement('div'));
        container.replaceChild(wrapper, document.getElementsByName(key)[0]);


        let inputContainer = document.getElementById(key + "_container");


        if (errorObj[key] === false) {
            errorList.push(key);
            inputContainer.innerHTML = `<input type="text" name=${key}><span onmouseover="document.getElementById('${key}').style.display = 'inline'" onmouseout="document.getElementById('${key}').style.display = 'none'">X</span>
                                        <span id = ${key} style = "display: none">${errorMsg[key]}</span>`;
        }
        else {
            inputContainer.innerHTML = `<input type="text" name=${key}>`;
        }
    }

    if (errorList.length == 0) {
        alert("success")
    } else {
        alert(errorList)
    }


    // Hint: you can use the RegExp class for matching a string with the `test` met
    // Hint: use the `alert` function for modals.
    // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
    // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.
}
document.body.appendChild(but)
