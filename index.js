import "./style.css";

const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class DanePogodowe {
  constructor() {}

  pobierzTemperature() {}
  pobierzWilgotnosc() {}
  pobierzCisnienie() {}
  odczytZmiana() {
    temp = pobierzTemperature();
    wilgotnosc = pobierzWilgotnosc();
    cisnienie = pobierzCisnienie();

    warunkiBiezaceWyświetl.aktualizacja(temp, wilgotnosc, cisnienie);
    statystykaWyświetl.aktualizacja(temp, wilgotnosc, cisnienie);
    prognozaWyświetl.aktualizacja(temp, wilgotnosc, cisnienie);
  }
}
