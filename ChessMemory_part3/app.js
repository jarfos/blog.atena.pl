// konstruktor obiektu 'komorka'
function Komorka(id) {
    this.id = id;       // identyfikator (wspolrzedne)
    this.t;             // element tXY z szachownicy (wewnatrz pliku SVG)
    this.r;             // element rXY z szachownicy
    this.figura = '';   // wartość figury (jedna z liter: 'HWSGhwsg')
    this.show = 0;      // czy pokazujemy zawartość komórki
    this.bicia = [];    // lista pól, które bije figura ustawiona w tej komórce
}

// pokazywanie i ukrywanie figury (ustawianie widoczności pola tekstowego)
Komorka.prototype.pokaz_figure = function(widocznosc) {
    this.t.style.opacity = widocznosc;
    this.show = widocznosc;

    // zmieniamy stan licznika kliknięć
    gra.zwiekszLicznik();
    gra[this.figura].zmien_licznik(widocznosc);
}

// zaznaczanie i ukrywanie podswietlenia (ustawianie widoczności obramowania)
Komorka.prototype.pokaz_podswietlenie = function(widocznosc, kolor) {
    this.r.style.stroke = kolor;
    this.r.style.strokeOpacity = widocznosc;
    this.r.style.opacity = widocznosc;
}

// obsługa kliknięcia komórki
Komorka.prototype.klik = function() {
    // uruchomienie stopera
    if (gra.licznikKlikniec === 0) {
        gra.stoper.uruchom();
    }

    // gdy figura już jest odkryta to sprawdzamy czy ta sama co zaznaczona w nagłówku
    if (this.show === 1) {
        if (this.figura === gra.z_naglowek) {
            // ukrywamy figure
            this.pokaz_figure(0);

            // usuwamy figure i bicia
            this.figura = '';
            this.bicia = [];
        } else {
            return;
        }
    } else {
        // jesli licznik figur jest niezerowy, to mozna odkryc
        if (gra[gra.z_naglowek].licznik > 0) {
            // przypisanie wartości figury
            this.figura = gra.z_naglowek;
            this.t.innerHTML = gra.z_naglowek.toLowerCase();

            // przypisanie pól bicia do figury
            this.bicia = bicia[this.figura.toLowerCase()][this.id].split('_');

            // jeśli wartością jest wielka litera, to ustawiamy kolor biały
            if (0 <= 'HWGS'.indexOf(gra.z_naglowek)) {
                this.t.style.fill = '#fff';
            } else {
                this.t.style.fill = '#000';
            }

            // odkrywamy figure
            this.pokaz_figure(1);
        }
    }

    // sprawdzenie poprawnosci ustawienia figur
    gra.sprawdz_figury();

    // koniec gry
    if (gra.licznikFigur === 64 && gra.poprawna === 1) {
        // zatrzymanie stopera
        gra.stoper.zatrzymaj();
        // wyświetlenie wyniku
        document.getElementById('dBrawo').style.visibility = 'visible';
        // końcowy "zrzut" z szachownicy
        document.getElementById('dWynik').innerHTML = 'Twoje ustawienie:<br>' + gra.podaj_wynik();
    }
}

// konstruktor obiektu 'naglowek'
function Naglowek(id) {
    this.figura = id;   // identyfikator (wartosc figury - jedna z liter: 'HWSGhwsg')
    this.back;          // element zawierajacy tlo podswietlenia (wewnatrz pliku SVG)
    this.click;         // element 'rect' z naglowka, przechwytujacy zdarzenie onclick
    this.count;         // element naglowka wyswietlajacy licznik
    this.licznik = 8;   // licznik wykorzystanych figur (inicjalnie 8)
}

// zaznaczanie podswietlenia (ustawianie koloru tla naglowka)
Naglowek.prototype.klik = function() {
    // najpierw odznaczamy poprzednio zaznaczony
    gra[gra.z_naglowek].back.style.fill = '#888';
    // następnie ustawiamy zielone tło w aktualnym nagłówku
    this.back.style.fill = '#0f0';
    gra.z_naglowek = this.figura;
}

// zmiana stanu licznika na podstawie podswietlenia figury
Naglowek.prototype.zmien_licznik = function(widocznosc) {
    if (widocznosc != 1) widocznosc = -1;
    this.licznik -= widocznosc;
    this.count.innerHTML = this.licznik;
    gra.zwiekszFigury(widocznosc);
}

// konstruktor obiektu 'stoper'
function Stoper() {
    this.czasStartu;
    this.intervalID = 0;

    this.uruchom = function() {
        this.czasStartu = new Date();
        this.intervalID = setInterval(this.odswiez.bind(gra.stoper), 16);
    }

    this.odswiez = function() {
        var teraz = new Date();
        var roznica = teraz - this.czasStartu;
        document.getElementById('dStoper').innerHTML = Math.ceil(roznica/10)/100;
    }

    this.zatrzymaj = function() {
        clearInterval(this.intervalID);
    }
}

// konstruktor obiektu 'gra'
function Gra() {
    var cols = '_ABCDEFGH';
    var rows = '_12345678';
    var XY;
    var naglowki = 'HWSGhwsg';
    var poprawna = 0;

    this.z_naglowek = 'h';       // zaznaczony naglowek (inicjalnie czarny hetman)

    // obsługa licznika kliknięć
    this.licznikKlikniec = 0;
    this.zwiekszLicznik = function() {
        this.licznikKlikniec++;
        document.getElementById('dLicznik').innerHTML = this.licznikKlikniec;
    }

    // obsługa licznika figur
    this.licznikFigur = 0;
    this.zwiekszFigury = function(ile) {
        this.licznikFigur += ile;
        document.getElementById('dFigury').innerHTML = this.licznikFigur;
    }

    // utworzenie obiektu stopera
    this.stoper = new Stoper();
  
    // inicjacja gry
    this.init = function() {
        // obsługa pól na szachownicy
        for (var i = 1; i < cols.length; i++) {
            for (var j = 1; j < rows.length; j++) {
                
                // współrzędne komórki
                XY = cols[i] + rows[j];

                // utworzenie obiektu komórki
                this[XY] = new Komorka(XY);

                // powiązanie obiektów rXY i tXY z komórką XY
                this[XY].t = document.getElementById('t'+XY);
                this[XY].r = document.getElementById('r'+XY);

                // obsługa kliknięcia komórki
                this[XY].r.onclick = this[XY].klik.bind(this[XY]);
            }
        }

        // obsługa pól nagłówka
        for (var i = 0; i < naglowki.length; i++) {
            this[naglowki[i]] = new Naglowek(naglowki[i]);
            this[naglowki[i]].count = document.getElementById('count'+naglowki[i]);
            this[naglowki[i]].click = document.getElementById('click'+naglowki[i]);
            this[naglowki[i]].back  = document.getElementById('back' +naglowki[i]);

            // obsługa kliknięcia nagłówka
            this[naglowki[i]].click.onclick = this[naglowki[i]].klik.bind(this[naglowki[i]]);
        }

        // inicjalne zaznaczenie pierwszej figury (h)
        this.h.klik();
    }

    // sprawdzanie poprawnosci ustawienia figur na szachownicy
    this.sprawdz_figury = function() {
        // najpierw robimy reset podswietlenia wszystkich pól
        for (var i = 1; i < cols.length; i++) {
            for (var j = 1; j < rows.length; j++) {
                
                // współrzędne komórki
                XY = cols[i] + rows[j];

                // usuwamy podswietlenie
                this[XY].pokaz_podswietlenie(0, '#000');
            }
        }

        // resetujemy tez wskaznik poprawnosci w obiekcie gra
        gra.poprawna = 1;

        // w pętli przechodzimy przez każdą komórkę na szachownicy
        for (var i = 1; i < cols.length; i++) {
            for (var j = 1; j < rows.length; j++) {
                
                // współrzędne komórki
                XY = cols[i] + rows[j];

                // jeśli komórka jest niepusta...
                if (this[XY].show == 1) {            
                    // sprawdzamy czy na polach bicia nie stoi więcej, niż jedna taka sama figura
                    var ile = 0;
                    for (var k = 0; k < this[XY].bicia.length; k++) {
                        if (this[this[XY].bicia[k]].figura == this[XY].figura) {
                            ile++;
                        }
                    }
                    if (ile  > 1) { this[XY].pokaz_podswietlenie(1, '#f00'); }
                    if (ile == 0) { this[XY].pokaz_podswietlenie(1, '#0f0'); }
                    if (ile != 1) { gra.poprawna = -1; }
                }
            }
        }
    }

    // generowanie wyniku
    this.podaj_wynik = function() {
        var wynik = '';
        for (var i = 1; i < rows.length; i++) {
            for (var j = 1; j < cols.length; j++) {
                
                // współrzędne komórki
                XY = cols[j] + rows[i];
                wynik = wynik + this[XY].figura;
            }
            wynik = wynik + '_';
        }
        // z wyniku wycinamy ostatni znak
        return wynik.substr(0, wynik.length - 1);
    }
}