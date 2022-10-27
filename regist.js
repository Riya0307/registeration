let enrollbtn=document.getElementById("student");
let dataentry = document.getElementById("data");
let photo = document.getElementById("photo");
let nametext = document.getElementById("nametext");
let emailtext = document.getElementById.apply("emailtext");
let websitetext = document.getElementById("websitetext");
let style = document.getElementById("style");
enrollbtn.addEventListener('click', e=> {
    let newelement = document.createElement('div')
    dataentry.appendChild(newelement)
    newelement.classList.add('newstyle')

    let createElement = document.createElement('div')
    newelement.appendChild(createelement)

    let emailElement = document.createElement('div')
    newelement.appendChild(emailElement)

    let elementforimage = document.createElement('div')
    newelement.appendChild(elementforimage)
    elementforimage.classList.add("positionrelative")

    let photoentry = photo.value
    let imageElement = document.createElement("img")
    imageElement.classList.add("photodimension")
    elementforimage.appendChild(imageElement)
    imageElement.src="$(photoentry)"

    let websiteelement = document.createElement("div")
    newelement.appendChild(websiteelement)

    if(document.getElementById("Male").checked == true){
        let genderelement = document.createElement('div')
        newelement.appendChild(genderelement)
        genderelement.innerHTML='<span>Male</span>'
    }else if (document.getElementById("Female").checked == true){
        let genderelement = document.createElement('div')
        newelement.appendChild(genderelement)
        genderelement.innerHTML='<span>Female</span>'
    }
    if(document.getElementById("Male").checked == true && document.getElementById("Female").checked == true) {
        alert("Select any gender")
        document.getElementById("Male").checked = false
        document.getElementById("Female").checked = false
        newelement.remove()
    } else if(document.getElementById("Male").checked == false && document.getElementById("Female").checked == false){
        alert("select gender")
        emailElement.remove()
        createelement.remove()
        websiteelement.remove()
        newelement.remove()
    }

    if(document.getElementById("HTML").checked && document.getElementById("Python").checked && document.getElementById("JavaScript").checked){
        let skillselement = document.createElement('div')
        newelement.appendChild(skillselement)
        skillselement.innerHTML = '<span>HTML,Python,JavaScript</span>'
    }
    else if(document.getElementById("Python").checked && document.getElementById("JavaScript").checked){
        let skillselement = document.createElement('div')
        newelement.appendChild(skillselement)
        skillselement.innerHTML = '<span>Python,JavaScript</span>'
    }
    else if(document.getElementById("HTML").checked && document.getElementById("Python").checked){
        let skillselement = document.createElement('div')
        newelement.appendChild(skillselement)
        skillselement.innerHTML = '<span>Python,HTML</span>'
    }
    else if(document.getElementById("HTML").checked && document.getElementById("JavaScript").checked){
        let skillselement = document.createElement('div')
        newelement.appendChild(skillselement)
        skillselement.innerHTML = '<span>JavaScript,HTML</span>'
    }
    else if(document.getElementById("HTML").checked){
        let skillselement = document.createElement('div')
        newelement.appendChild(skillselement)
        skillselement.innerHTML = '<span>HTML</span>'
    }
    else if(document.getElementById("JavaScrpit").checked){
        let skillselement = document.createElement('div')
        newelement.appendChild(skillselement)
        skillselement.innerHTML = '<span>JavaScript</span>'
    }
    else if(document.getElementById("Python").checked){
        let skillselement = document.createElement('div')
        newelement.appendChild(skillselement)
        skillselement.innerHTML = '<span>Pyton</span>'
    }
    
    let x=nametext.value
    let y=emailtext.value
    let z=websitetext.value

    createElement.innerHTML = '${x}'
    emailElement.innerHTML = '${y}'
    websiteelement.innerHTML = '${z}'

    if(x==""||y==""||z==""||(document.getElementById("Male").checked== false && document.getElementById("Female").checked==false||photoentry=="")){
        alert("Fill up all the details")
        emailElement.remove()
        createElement.remove()
        websiteelement.remove()
        newelement.remove()
    }
    })

let dltbtn = document.getElementById("dlt")
dltbtn.addEventListener('click', e=> {
    emailtext.value = ""
    nametext.value = ""
    photo.value = ""
    websitetext.value = ""
    document.getElementById("Male").checked = false
    document.getElementById("Female").checked = false
    document.getElementById("HTML").checked = false
    document.getElementById("Python").checked = false
    document.getElementById("JavaScript").checked = false

})









