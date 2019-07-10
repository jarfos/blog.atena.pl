// konstruktor obiektu 'komorka'
function Komorka(id) {
    this.id = id;       // identyfikator (wspolrzedne)
    this.t;             // element tXY z szachownicy (wewnatrz pliku SVG)
    this.r;             // element rXY z szachownicy
    this.figura = '';   // wartość figury (jedna z liter: 'HWSGhwsg')
    this.show = 0;      // czy pokazujemy zawartość komórki
    this.bicia = [];    // lista pól, które bije figura ustawiona w tej komórce
}

// ustawianie figury na polu szachownicy
Komorka.prototype.ustaw = function(wartosc) {
    
    if (-1 === 'HWSGhwsg'.indexOf(wartosc)) throw('Nieprawidlowa figura!');
    
    // przypisanie wartości figury
    this.figura = wartosc;
    this.t.innerHTML = wartosc.toLowerCase();

    // jeśli wartością jest wielka litera, to ustawiamy kolor biały
    if (0 <= 'HWGS'.indexOf(wartosc)) {
        this.t.style.fill = '#fff';
    } else {
        this.t.style.fill = '#000';
    }
}

// zaznaczanie i ukrywanie figury (ustawianie widoczności pola tekstowego)
Komorka.prototype.pokaz_figure = function(widocznosc) {
    this.t.style.opacity = widocznosc;
    this.show = widocznosc;
}

// zaznaczanie i ukrywanie podswietlenia (ustawianie widoczności obramowania)
Komorka.prototype.pokaz_podswietlenie = function(widocznosc) {
    this.r.style.strokeOpacity = widocznosc;
    this.r.style.opacity = widocznosc;
}

// zaznaczanie i ukrywanie bicia (ustawianie widoczności wypełnienia)
Komorka.prototype.pokaz_bicie = function(widocznosc) {
    this.r.style.fillOpacity = 0.5 * widocznosc;
    this.r.style.opacity = widocznosc;
}

// ustawianie zaznaczenia bicia
Komorka.prototype.zaznacz_bicia = function(widocznosc) {
    for(i = 0; i < this.bicia.length; i++) {
        // pola bicia dotyczą tylko nieodkrytych komórek
        if (gra[this.bicia[i]].show == 0) {
            gra[this.bicia[i]].pokaz_bicie(widocznosc);
        }
    }
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

// obsługa kliknięcia komórki
Komorka.prototype.klik = function() {
    // gdy figura już jest odkryta to nic nie robimy
    if (this.show === 1) return;

    // uruchomienie stopera
    if (gra.licznikKlikniec === 0) {
        gra.stoper.uruchom();
    }

    // zwiększamy licznik kliknięć o 1
    gra.zwiekszLicznik();
    
    // ukrywamy bicie, odkrywamy figurę, oraz zaznaczamy pole XY
    this.pokaz_bicie(0);
    this.pokaz_figure(1);
    this.pokaz_podswietlenie(1);

    // obsluga "właściwa" gry - logika kliknięć
    var fig1 = gra.zaznaczona;
    var fig2 = this.id;
    if (fig1 === '00') {
        // zaznaczenie pierwszej figury (klik nieparzysty)
        gra.zaznaczona = fig2;

        // zaznaczenie pól bicia
        this.zaznacz_bicia(1);
    } else {
        // odznaczenie pól bicia
        gra[fig1].zaznacz_bicia(0);

        // zdejmujemy zaznaczenie obydwu figur
        setTimeout(function(){
            gra[fig1].pokaz_podswietlenie(0);
            gra[fig2].pokaz_podswietlenie(0);
        }, 1000);
 
        // "czyścimy" zaznaczenie figury
        gra.zaznaczona = '00';

        // jeśli figury do siebie pasują oraz jest bicie...
        if ((gra[fig1].figura === gra[fig2].figura) && (gra[fig1].bicia.indexOf(fig2) >= 0)) {
            // ... to figury do siebie pasują, więc zwiększamy licznik figur
            gra.zwiekszFigury();
        } else {
            // ... w przeciwnym razie ukrywamy obydwie figury
            setTimeout(function(){
                gra[fig1].pokaz_figure(0);
                gra[fig2].pokaz_figure(0);
            }, 1000);
        }
    }

    // zatrzymanie stopera
    if (gra.licznikFigur === 64) {
        gra.stoper.zatrzymaj();
    }
}

// konstruktor obiektu 'gra'
function Gra() {
    var cols = '_ABCDEFGH';
    var rows = '_12345678';
    var XY;

    this.zaznaczona = '00';

    // obsługa licznika kliknięć
    this.licznikKlikniec = 0;
    this.zwiekszLicznik = function() {
        this.licznikKlikniec++;
        document.getElementById('dLicznik').innerHTML = this.licznikKlikniec;
    }

    // obsługa licznika figur
    this.licznikFigur = 0;
    this.zwiekszFigury = function() {
        this.licznikFigur += 2;
        document.getElementById('dFigury').innerHTML = this.licznikFigur;
    }

    // utworzenie obiektu stopera
    this.stoper = new Stoper();
  
    // inicjacja gry
    this.init = function(initBoard) {
        // utworzenie tablicy wierszy na podstawie parametru initBoard
        var figury = initBoard.split('_');

        //pętla w pętli
        for (var i = 1; i < cols.length; i++) {
            for (var j = 1; j < rows.length; j++) {
                
                // współrzędne komórki
                XY = cols[i] + rows[j];

                // utworzenie obiektu komórki
                this[XY] = new Komorka(XY);

                // powiązanie obiektów rXY i tXY z komórką XY
                this[XY].t = document.getElementById('t'+XY);
                this[XY].r = document.getElementById('r'+XY);

                // przypisanie wartości figury (wywołanie funkcji ustaw)
                this[XY].ustaw(figury[j-1][i-1]);

                // przypisanie pól bicia dla danej figury
                this[XY].bicia = bicia[figury[j-1][i-1].toLowerCase()][XY].split('_');

                // inicjalnie wszystkie figury powinny być ukryte
                this[XY].pokaz_figure(0);

                // obsługa kliknięcia komórki
                this[XY].r.onclick = this[XY].klik.bind(this[XY]);
            }
        }
    }
}

// funkcja zwracająca losowy element tablicy
Array.prototype.random = function() {
    return this[Math.floor((Math.random() * this.length))];
}

// funkcja usuwa wskazany element z tablicy (pierwszy znaleziony)
Array.prototype.remove = function(element) {
    var i = this.indexOf(element);
    if (i >= 0) this.splice(i, 1);
}

// funkcja losująca inicjalne rozstawienie figur na szachownicy
Gra.prototype.losuj = function() {
    var wynik = '';
    var cols = '_ABCDEFGH';
    var rows = '_12345678';
    var figury = 'HhSsGgWw';
    var XY, XY2;
    
    function Pole() {
        this.figura = '0',
        this.mozliwe = [],
        this.bicia = []
    }
    
    function Plansza() {
        for (var i = 1; i < cols.length; i++) {
            for (var j = 1; j < rows.length; j++) {
                
                // współrzędne komórki
                XY = cols[i] + rows[j];

                // utworzenie obiektu Pole
                this[XY] = new Pole(XY);
                for (var k = 0; k < figury.length; k++) {
                    this[XY].mozliwe.push(figury[k]);
                }
            }
        }
    }

    //losowanie pola na szachownicy (warunek: niezajęte i mozliwe)
    function losuj_z_planszy(figura = '0') {
        var wolne = [];
        var XY;

        // ustalenie listy wolnych pól na szachownicy
        for (var i = 1; i < cols.length; i++) {
            for (var j = 1; j < rows.length; j++) {
                // współrzędne komórki
                XY = cols[i] + rows[j];
                if ((plansza[XY].figura === '0') && (0 <= plansza[XY].mozliwe.indexOf(figura))) {
                    wolne.push(XY);
                }
            }
        }

        // nie ma więcej wolnych pól do zajęcia przez daną figurę
        if (wolne.length == 0) return '00';

        return wolne.random();
    }

    //losowanie pola na szachownicy sposrod pól bicia (warunek: niezajęte i mozliwe)
    function losuj_z_bicia(pole = '00', figura = '0') {
        var wolne = [];
        var XY;

        // ustalenie listy wolnych pól spośród wszystkich pól bicia
        for (var i = 1; i < plansza[pole].bicia.length; i++) {
            // współrzędne komórki
            XY = plansza[pole].bicia[i];
            if ((plansza[XY].figura === '0') && (0 <= plansza[XY].mozliwe.indexOf(figura))) {
                wolne.push(XY);
            }
        }
        
        // nie ma więcej wolnych pól do zajęcia przez daną figurę
        if (wolne.length == 0) return '00';

        return wolne.random();
    }

    //przypisanie figury do pola na planszy oraz pól bicia
    function przypisz_figure(pole = '00', figura = '0') {
        plansza[pole].figura = figura;
        plansza[pole].mozliwe = [];

        // przypisanie pól bicia dla danej figury
        plansza[pole].bicia = bicia[figura.toLowerCase()][pole].split('_');
    }

    var plansza = new Plansza();

    //przechodzimy przez wszystkie figury według kolejności
    for (var k = 0; k < figury.length; k++) {

        //kazda figura po 8 wystapien, czyli 4 pary (iteracje)
        for (var n = 0; n < 4; n++) {

            //losowanie pól
            XY = losuj_z_planszy(figury[k]);
            if (XY === '00') { return XY; }

            // przypisanie figury i bicia
            przypisz_figure(XY, figury[k]); 

            // losowanie pola dla drugiej figury z pary
            XY2 = losuj_z_bicia(XY, figury[k]);
            if (XY2 === '00') { return XY2; }

            //przypisanie figury i bicia
            przypisz_figure(XY2, figury[k]);

            // wyczyszczenie listy mozliwych dla pola XY i XY2
            for (var i = 0; i < plansza[XY].bicia.length; i++) {
                plansza[plansza[XY].bicia[i]].mozliwe.remove(figury[k]);
            }
            for (var i = 0; i < plansza[XY2].bicia.length; i++) {
                plansza[plansza[XY2].bicia[i]].mozliwe.remove(figury[k]);
            }
        }
    }

    //przepisanie planszy na ciąg figur do funkcji init()
    for (var i = 1; i < cols.length; i++) {
        for (var j = 1; j < rows.length; j++) {
            // współrzędne komórki
            XY = cols[i] + rows[j];
            wynik += plansza[XY].figura;
        }
        wynik += '_';
    }
    wynik = wynik.replace(/_$/,'');

    console.log(wynik);
    return wynik;
}

Gra.prototype.przeksztalc = function(initBoard) {
    var wynik = [];

    if (!initBoard) return wynik;

    // pierwszy element tablicy zawiera ustawienie inicjalne
    wynik[0] = initBoard;

    // utworzenie tablicy wierszy na podstawie parametru initBoard
    var figury = initBoard.split('_');

    for (var k = 1; k < 8; k++) {
        wynik[k] = '';
    }

    // przeksztalcenia
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            wynik[1] += figury[i][7-j];
            wynik[2] += figury[7-i][j];
            wynik[3] += figury[7-i][7-j];
            wynik[4] += figury[j][i];
            wynik[5] += figury[j][7-i];
            wynik[6] += figury[7-j][i];
            wynik[7] += figury[7-j][7-i];
        }
        wynik[1] += '_';
        wynik[2] += '_';
        wynik[3] += '_';
        wynik[4] += '_';
        wynik[5] += '_';
        wynik[6] += '_';
        wynik[7] += '_';
    }
    
    for (var k = 1; k < 8; k++) {
        wynik[k] = wynik[k].replace(/_$/,'');
    }
    
    return wynik;
}