console.log("Day 18: DOM Manipulations");

// What will we learn today?

// - Creating Elements
// - Inserting Elements
// - Modifying Content
// - Removing/replacing Elements
// - Read, Write, and Remove Attributes
// - Travarsing/Navigating DOM
// - Mnaipulating Styles
// - Manipulating Classes
// - Controlling Visibilities
// - Build Project(s)
// - Tasks



// Creating Elements
{
    /*
    const pElem = document.createElement("p");
    pElem.innerText = "This is a text added dynamically.";
    document.body.appendChild(pElem);
    //console.log(pElem);
    */
}

// Insert Elements
{
    /*
        const span = document.createElement("span");
        span.innerText = "I am a Span";
        const pElem = document.querySelector("p")
        //console.log(pElem.nextElementSibling);
        document.body.insertBefore(span, pElem.nextElementSibling);
    */
}

// Modifying Content

{
    /*
    const pElem = document.querySelector("p");
    pElem.innerHTML = "<u>Hello How</u> are You doing?"

    const divElem = document.querySelector("div");

    console.log("Inner Text", divElem.innerText);
    console.log("Text Content", divElem.textContent);
    */
}

// Removing/replacing Elements

{
    /*
    let list = document.getElementById("myList");
    const itemToRemove = list.children[0];
    //list.removeChild(itemToRemove);
    //console.log(list.children)
    const pElem = document.querySelector("p");
    list.replaceChildren(pElem)

    document.getElementById("removeMe").remove()
    */
}

// Read, Write, and Remove Attributes
{
    /*
    const imageElem = document.querySelector("img")

    console.log(imageElem.getAttribute('alt'))

    imageElem.setAttribute("src", "banner.png");
    imageElem.setAttribute("alt", "banner");

    imageElem.removeAttribute("height");

    imageElem.hasAttribute("src") // true
    imageElem.hasAttribute("height") // false
    */
}

// Travarsing/Navigating DOM

{
    // parentElement and parentNode
    //const span = document.getElementById("text");

    // console.log("Parent Element", span.parentElement.parentElement);
    // console.log("Parent Node", span.parentNode.parentNode);

    // childern and childNodes

    // const mainElem = document.getElementById("main-id");

    // console.log("Children", mainElem.children);
    // console.log("Child Node", mainElem.childNodes);

    // console.log("First Child", mainElem.firstChild);
    // console.log("First Child Element", mainElem.firstElementChild);


    // nextSibling
    // nextElementSibling
    // previousSibling
    // previousElementSibling

}


// Mnaipulating Styles
{
    /*const pElem = document.getElementById("p-id");
    console.log(pElem.style)
    pElem.style.backgroundColor = "pink";
    */
}

// Manipulating Classes
{
    /*
    const mainDivElem = document.getElementById("main-id");

    // console.log(mainDivElem.className)
    // mainDivElem.className = "secondary-class";
    // console.log(mainDivElem.className);

    console.log(mainDivElem.classList);

    mainDivElem.classList.add("test");

    mainDivElem.classList.remove("layout");

    mainDivElem.classList.replace("main-class", "secondary-class");

    console.log("Does it have test?", mainDivElem.classList.contains("test"));

    console.log("Does it have main-class?", mainDivElem.classList.contains("main-class"));

    mainDivElem.classList.toggle("test");
    mainDivElem.classList.toggle("test");
    */
}

// Controlling Visibilities
{
    /*
    const mainDivElem = document.getElementById("main-id");
    //mainDivElem.style.display = "block";

    //mainDivElem.style.visibility = "hidden"

    mainDivElem.style.opacity = "1"
    */
}



