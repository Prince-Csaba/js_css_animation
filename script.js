function load() {
  let root = document.getElementById("root");
  let myObjects = [
    {
      tag: "h1",
      content: "Csaba"
    }, 
    {
      tag: "p",
      content: "Frontend Developer"
    }
  ];

  // for (let i = 0; i < myObjects.length; i++) {  }

  for (o of myObjects) {
    root.insertAdjacentHTML("beforeend", `<${o.tag}>${o.content}</${o.tag}>`);
  }
  console.log(root.querySelector("p"));

   root.addEventListener("click", function () { 
    root.querySelector("p").classList.toggle("click");
    root.querySelector("h1").classList.toggle("click");
  });

}
window.addEventListener("load", load);