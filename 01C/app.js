class App {
    runApplication() {
        this.greeting = "starting up"
 
        console.log("hello world")
        this.appNaam = "demoApp"; 
        this.versienummer = 0.1; 
        this.versiedatum = new Date("2023-11-23"); 
        this.auteur = "Emanuel Ghiorghita"; 
        this.copyright = "Emanuel BV"; 
        this.distributeur = "Leerling soft"; 
        this.darkmode = false;
 
 
        let isBoolean = true; 
        let textString = "Dit is een voorbeeldtekst."; 
        let someNumber = 42; // 
 
        console.log("Boolean variabele:", isBoolean);
        console.log("String variabele:", textString);
        console.log("Nummer variabele:", someNumber);
 
        class MyClass {
            constructor() {
                this.isBoolean = true; 
                this.textString = "Dit is een voorbeeldtekst."; 
                this.someNumber = 42; 
            }
        }
        const myObject = new MyClass();
 
        console.log("Boolean variabele:", myObject.isBoolean);
        console.log("String variabele:", myObject.textString);
        console.log("Nummer variabele:", myObject.someNumber);
    }
}
 
 
let app = new App()
app.runApplication();
 
console.log(app.greeting);
console.log("appNaam: " + app.appNaam);
console.log("versienummer " + app.versienummer);
console.log("versiedatum " + app.versiedatum);
console.log("auteur " + app.auteur);
console.log("copyright " + app.copyright);
console.log("distributeur " + app.distributeur);
console.log("darkmode " + app.darkmode);