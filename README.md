# Quiz Systemowy

Aplikacja do nauki i powtórki materiału z administracji systemami (Windows/Linux) w formie interaktywnego quizu z zaawansowanym systemem oceniania.

## 🧠 System oceniania (4 Stany)

Quiz implementuje zaawansowaną, 4-stanową weryfikację każdej podjętej decyzji (ponieważ poprawne zignorowanie fałszywego zdania w pytaniach wielokrotnego wyboru to również sukces!):

* **Czysty Zielony (correct-hit)** – Zaznaczono prawidłową odpowiedź.
* **Zielony przerywany (good-ignore)** – Prawidłowo zignorowano fałszywą odpowiedź.
* **Czysty Czerwony (wrong-hit)** – Zaznaczono fałszywą odpowiedź (błąd).
* **Czerwony przerywany (missed-correct)** – Pominięto i nie zaznaczono prawidłowej odpowiedzi (błąd).

Punkt za całe pytanie przyznawany jest tylko wtedy, gdy wszystkie decyzje w obrębie danego pytania były bezbłędne.

## 🗺 Roadmap (Planowane tematy)

Poniżej znajduje się lista zagadnień, które stopniowo będą wprowadzane do bazy pytań aplikacji:

- [x] Windows - PowerShell
- [x] Zarządzanie przestrzenią dyskową
- [ ] Zarządzanie kontenerami – część 1 (LIN)
- [ ] Zarządzanie kontenerami – część 2 (LIN)
- [ ] MPI – konfiguracja (LIN)
- [ ] SLURM (LIN) (po MPI)
- [ ] Programowanie w systemie LIN (LIN)
- [ ] Podstawy testów penetracyjnych (LIN)
- [ ] Zaawansowane usługi sieciowe (LIN)
- [ ] Programowanie w systemie Windows (WIN)
- [ ] Monitorowanie wywołań systemowych (LIN)
- [x] LIN Kernel (LIN)

## 🚀 Jak uruchomić projekt lokalnie

Projekt nie wymaga instalowania żadnych zależności, frameworków ani uruchamiania lokalnego serwera (brak problemów z polityką CORS).

1. **Sklonuj repozytorium** lub pobierz paczkę ZIP z plikami projektu.
2. Wejdź do głównego katalogu i **kliknij dwukrotnie plik `index.html`**, aby otworzyć go w swojej przeglądarce (np. Chrome / Safari).
3. Wybierz odpowiedni dział (lub zacznij od razu, jeśli dostępna jest jedna kategoria) i trenuj wiedzę!

## 🛠 Struktura projektu

Repozytorium posiada przejrzystą i profesjonalną strukturę plików:

```text
├── index.html          # Główny szkielet aplikacji (HTML)
├── favicon.png         # Motywująca ikona projektu (Czarne BZ na czerwonym tle)
├── css/
│   └── style.css       # Nowoczesne style UI oraz stany kolorowania odpowiedzi
└── js/
    ├── data.js          # Statyczna baza pytań zapisana jako obiekt JavaScript
    └── app.js            # Logika quizu (losowanie, weryfikacja 4-stanowa, licznik)
```
