class App
{
    runApplication() {
    console.log("Hello world!")
    const uiButton = document.getElementById("myButton");
 
    {
        const para = document.createElement("p");
        const node = document.createTextNode("This is new.");
        para.appendChild(node);
        document.body.appendChild(para);
    };
    let localFunction = function (e)
    {
       console.log("click!");
    };
   uiButton.addEventListener("click",localFunction)
 
   
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const div = document.getElementById("clickDiv");
 
btn1.addEventListener("click", () => {
  const para = document.createElement("p");
  para.textContent = "Tekst toegevoegd door knop 1";
  document.body.appendChild(para);
});
 
btn2.addEventListener("click", () => {
  const header = document.createElement("h1");
  header.textContent = "Een header";
 
  const para = document.createElement("p");
  para.textContent = "Een paragraaf met tekst";
 
  const img = document.createElement("img");
  img.src = "plaatje.jpg";
 
  document.body.appendChild(header);
  document.body.appendChild(para);
  document.body.appendChild(img);
});
 
div.addEventListener("click", () => {
  const header = document.createElement("h1");
  header.textContent = "Clicked a div";
 
  document.body.appendChild(header);
 
  document.body.style.backgroundColor = "red";
});
 
}
     
 
}
 
 
 
 
let app = new App();
app.runApplication();