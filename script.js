function load() {
  console.log("Futok!");
  let root = document.getElementById("root");
  let myObjects = [{
    tag: "h1",
    content: "Csaba",
    tag2: "</h1>"
}, {
    tag: "p",
    content: "Lorem Ipsum Dolores"
}];

  // for (let i = 0; i < myObjects.length; i++) {  }

  for (myObject of myObjects) {
    console.log(myObject.tag);
  }

  root.insertAdjacentHTML("beforeend", `<${myObjects[0].tag}>${myObjects[0].content}`);
  root.insertAdjacentHTML("afterbegin", `<${myObjects[1].tag}>${myObjects[1].content}`);
}

window.addEventListener("load", load);