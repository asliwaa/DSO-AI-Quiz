// BAZA DANYCH PYTAŃ - JEDNA WSPÓLNA KATEGORIA
const db = {
    "categories": [
        {
            "name": "Windows - PowerShell",
            "questions": [
                {
                    "question": "Zaznacz prawdziwe zdania dotyczące środowiska Windows PowerShell:",
                    "answers": [
                        "Jest to powłoka, która podobnie jak stare cmd.exe opiera się wyłącznie na przetwarzaniu i zwracaniu zwykłego tekstu.",
                        "Jest zbudowany na podstawie środowiska uruchomieniowego języka wspólnego (CLR) i .NET Framework.",
                        "Pozwala na zdalne uruchamianie skryptów i poleceń asynchronicznie (w tle), co nie zajmuje konsoli.",
                        "Format każdego cmdletu w PowerShellu ma postać: rzeczownik-czasownik (np. Process-Get)."
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Wskaż poprawne informacje na temat zmiennych w PowerShell:",
                    "answers": [
                        "Wszystkie zmienne w PowerShellu są obiektami .NET.",
                        "Zmienne zawsze wymagają od programisty jawnego określenia (zadeklarowania) typu.",
                        "Odwołanie do zmiennej następuje poprzez użycie znaku dolara ($).",
                        "Zmienne w PowerShellu mogą mieć zdefiniowane zakresy widoczności."
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Które z poniższych dopasowań polityk wykonywania skryptów (ExecutionPolicy) do ich opisów są poprawne?",
                    "answers": [
                        "Restricted - pozwala na uruchomienie wyłącznie skryptów podpisanych cyfrowo przez zaufanego wydawcę.",
                        "RemoteSigned - skrypty pobrane z Internetu muszą być podpisane przez zaufanego wydawcę, ale te utworzone lokalnie nie muszą.",
                        "Unrestricted - umożliwia uruchamianie niepodpisanych skryptów, choć przy skryptach z Internetu wyświetli odpowiednią notę o pochodzeniu.",
                        "AllSigned - domyślna polityka w systemie Windows, pozwalająca na uruchomienie każdego podpisanego skryptu z Internetu."
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Wskaż poprawne komendy realizujące opisane zadania w PowerShell:",
                    "answers": [
                        "Zatrzymanie procesów zaczynających się na literę \"c\": `get-process c* | stop-process`",
                        "Zatrzymanie procesu zużywającego więcej niż 300MB pamięci: `get-process | stop-process -Memory > 300MB`",
                        "Wyszukanie procesu zużywającego więcej niż 300MB pamięci i zatrzymanie go: `get-process | where-object { $_.WS -gt 300MB } | stop-process`",
                        "Sprawdzenie dostępności strony internetowej (ping): `Get-Ping google.com`"
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Wskaż poprawne dopasowania specjalnych zmiennych systemowych w PowerShell do ich zawartości:",
                    "answers": [
                        "`$PID` - przechowuje identyfikator aktualnego procesu (Process Identifier).",
                        "`$Profile` - przechowuje listę uruchomionych procesów w tle.",
                        "`$Error` - przechowuje tablicę obiektów błędów, wyświetlając najnowsze błędy.",
                        "`$Host` - przechowuje adres IP lokalnego komputera."
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Podczas pracy z plikami w PowerShell (np. przy tworzeniu raportu plików .exe lub wyszukiwaniu logów):",
                    "answers": [
                        "Do wylistowania plików i podkatalogów we wskazanym miejscu służy cmdlet `Get-ChildItem`.",
                        "Aby rekursywnie przeszukać katalog i wszystkie jego podkatalogi należy użyć parametru `-Recurse`.",
                        "Cmdlet `Rename-Item` służy do trwałego usuwania plików ze wskazanego katalogu.",
                        "Można odnieść się do właściwości wielkości pliku (w bajtach) używając pola `Length` obiektu pliku."
                    ],
                    "values": [true, true, false, true]
                },
                {
                    "question": "Do filtrowania i sortowania obiektów w potoku (pipeline) PowerShell wykorzystuje się m.in. cmdlety Where-Object i Sort-Object. Wskaż poprawne zdania:",
                    "answers": [
                        "Wewnątrz bloku `Where-Object` do aktualnie przetwarzanego obiektu odwołujemy się za pomocą zmiennej `$_`.",
                        "Aby posortować obiekty malejąco (np. po zużyciu CPU), do `Sort-Object` należy obowiązkowo dodać parametr `-Ascending`.",
                        "Operatorem logicznym oznaczającym \"większe niż\" w PowerShell jest `-gt` (od ang. greater than).",
                        "Aby wyświetlić tylko pierwsze 5 wyników po posortowaniu, należy na końcu potoku dodać polecenie `Where-Object -Limit 5`."
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Wskaż poprawne informacje dotyczące typów danych oraz konstrukcji logicznych w PowerShell:",
                    "answers": [
                        "Instrukcja warunkowa porównująca wartość ze stringiem może wyglądać następujuco: `if ($a -eq \"red\")`",
                        "PowerShell nie posiada wbudowanej obsługi instrukcji wyboru `switch`, należy używać wielokrotnie zagnieżdżonych bloków `if`-`else`.",
                        "Dostępne są mechanizmy obsługi błędów znane z platformy .NET, czyli bloki `Try{}`, `Catch{}` oraz `Finally{}`.",
                        "Składnia `1..5 | ForEach-Object { ... }` spowoduje wykonanie kodu wewnątrz nawiasów klamrowych 5 razy."
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Tworzenie nowych elementów (plików, folderów) na dysku przy użyciu PowerShell:",
                    "answers": [
                        "Do utworzenia nowego pliku służy dedykowany cmdlet `Create-File`.",
                        "Aby utworzyć nowy folder, należy użyć polecenia `New-Item` z parametrem `-ItemType Directory`.",
                        "Aby utworzyć nowy pusty plik, należy użyć polecenia `New-Item` z parametrem `-ItemType File`.",
                        "Użycie cmdleta `New-Item` nie pozwala na określenie docelowej ścieżki, element zawsze powstaje w bieżącym katalogu roboczym."
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Zarządzanie usługami i ogólnymi informacjami o systemie za pomocą PowerShell:",
                    "answers": [
                        "Cmdlet `Get-Service` pozwala na wyświetlenie usług dostępnych w systemie wraz z ich statusem.",
                        "Aby sprawdzić dostępność zdalnego serwera (np. google.com), w PowerShell należy koniecznie wywołać systemowe narzędzie `ping.exe`, ponieważ PowerShell nie posiada własnego cmdleta do tego celu.",
                        "Polecenie `Test-Connection google.com` jest natywnym sposobem na weryfikację łączności ze stroną internetową lub hostem.",
                        "Aby wyselekcjonować tylko określone właściwości z obiektu (np. zignorować zbędne dane i wyświetlić tylko Name i Status), należy przesłać obiekt potokiem do cmdleta `Select-Object`."
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Chcesz utworzyć 5 folderów o nazwach od Project1 do Project5 w katalogu C:\\Temp. Wskaż składniowo POPRAWNE polecenie / polecenia:",
                    "answers": [
                        "`1..5 ForEach-Object { New-Item -ItemType Directory -Path \"C:\\Temp\\Project$_\" }`",
                        "`1..5 | ForEach-Object { New-Item -ItemType Directory -Path \"C:\\Temp\\Project$_\" }`",
                        "`1..5 | ForEach { New-Item -Item Type Directory -Path \"C:\\Temp\\Project$_\" }`",
                        "`for(1 to 5) | ForEach-Object { New-Item -ItemType Directory -Path \"C:\\Temp\\Project$_\" }`"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Twoim zadaniem jest wyświetlenie 5 procesów, które zużywają najwięcej pamięci w systemie. Które zapisy są poprawne pod kątem składni i logiki?",
                    "answers": [
                        "`Get-Process | Sort-Object -Property WS -Descending | Select-Object -First 5`",
                        "`Get-Process | Sort --Property WS -Ascending | Select-Object -First 5`",
                        "`Get-Process | Sort-Object WS -Descending | Select -Top 5`",
                        "`Get-Process > Sort-Object -Property WS > Select-Object -First 5`"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W jaki sposób poprawnie sformułować instrukcję warunkową IF w środowisku PowerShell?",
                    "answers": [
                        "`if ($a = \"red\") { \"Kolor jest czerwony\" }`",
                        "`if ($a == \"red\") { \"Kolor jest czerwony\" }`",
                        "`if ($a -eq \"red\") { \"Kolor jest czerwony\" }`",
                        "`if $a -eq \"red\" then { \"Kolor jest czerwony\" }`"
                    ],
                    "values": [false, false, true, false]
                },
                {
                    "question": "Które z poniższych poleceń poprawnie odnajdzie wszystkie pliki w katalogu C:\\Users większe niż 1MB?",
                    "answers": [
                        "`Get-ChildItem -Loc \"C:\\Users\" -Recurse | Where-Object { $_.Length > 1MB }`",
                        "`Get-ChildItem -Path \"C:\\Users\" -Recurse | Where-Object { $_.Size -gt 1MB }`",
                        "`Get-ChildItem -Path \"C:\\Users\" -Recurse | Where-Object { $_.Length -gt 1MB }`",
                        "`Get-ChildItem -Path \"C:\\Users\" -Recurse | Where { $Length -gt 1MB }`"
                    ],
                    "values": [false, false, true, false]
                },
                {
                    "question": "Chcesz usunąć pliki starsze niż 7 dni. Które elementy składniowe są PRAWIDŁOWE?",
                    "answers": [
                        "Użycie właściwości obiektu: `$_.LastWriteTime`",
                        "Użycie właściwości obiektu: `$_.LastTime`",
                        "Zastosowanie operatora matematycznego mniejszości: `-lt`",
                        "Zastosowanie operatora matematycznego mniejszości: `-It` (duże 'i')"
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Wskaż POPRAWNE składniowo pętle w środowisku PowerShell:",
                    "answers": [
                        "`for ($a=1; $a -le 10; $a++) { $a }`",
                        "`while ($a -lt 10) { $a; $a++ }`",
                        "`for ($a=1, $a<=10, $a++) { $a }`",
                        "`do { $a; $a++ } until ($a > 10)`"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Chcesz znaleźć wszystkie pliki .exe i zapisać wynik (ich nazwy i rozmiar) do pliku tekstowego na dysku. Które zapisy zadziałają?",
                    "answers": [
                        "`Get-ChildItem \"C:\\Windows\\*.exe\" | Select-Object Name, Length | Save-File \"C:\\Temp\\exe.txt\"`",
                        "`Get-ChildItem -Path \"C:\\Windows\" -Filter \"*.exe\" | Select-Object Name, Length > \"C:\\Temp\\exe.txt\"`",
                        "`Get-ChildItem \"C:\\Windows\\*.exe\" | Select-Object Name, Length | Out-File \"C:\\Temp\\exe.txt\"`",
                        "`Get-ChildItem \"C:\\Windows\\*.exe\" | Out-File \"C:\\Temp\\exe.txt\" -Select Name, Length`"
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Masz zadanie zmienić nazwy plików *.txt w folderze, dodając do nich prefiks 'backup_'. Wskaż jedyną poprawną i działającą składnię:",
                    "answers": [
                        "`Get-ChildItem \"C:\\Temp\\*.txt\" | Rename-Item -Prefix \"backup_\"`",
                        "`Get-ChildItem \"C:\\Temp\\*.txt\" | Set-Name \"backup_$_.Name\"`",
                        "`Get-ChildItem \"C:\\Temp\\*.txt\" | Rename-Item -NewName \"backup_*.txt\"`",
                        "`Get-ChildItem \"C:\\Temp\\*.txt\" | Rename-Item -NewName { \"backup_\" + $_.Name }`"
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Obliczanie czasu działania systemu (uptime). Wskaż fragmenty składni, które są błędne i spowodują rzucenie wyjątku (erroru):",
                    "answers": [
                        "BŁĄD: Spacja wewnątrz nazwy klasy WMI: `Win32_Operating System`",
                        "BŁĄD: Brak nazwy klasy w cmdlet: `Get-CimInstance Win32_OperatingSystem`",
                        "BŁĄD: Odwołanie się do nieistniejącej właściwości: `.LastBoot` zamiast `.LastBootUpTime`",
                        "BŁĄD: Obejmowanie poleceń w nawiasy np. `(Get-Date)` jest nielegalne."
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Wskaż ogólne poprawne zasady składni w języku PowerShell:",
                    "answers": [
                        "Zmienne umieszczone w podwójnych cudzysłowach `\" \"` są rozwijane (interpolowane) do swoich wartości.",
                        "Aby odwołać się do właściwości bieżącego obiektu w potoku, używa się zmiennej `$_` lub `$PSItem`.",
                        "Znak równości `=` służy w PowerShellu zarówno do przypisywania wartości zmiennym, jak i do porównywania wartości logicznych (np. w instrukcjach IF).",
                        "Wywołując cmdlety i przekazując parametry pozycyjne ZAWSZE wymagane są nawiasy wokół wartości, np. `Get-Process(\"explorer\")`."
                    ],
                    "values": [true, true, false, false]
                }
            ]
        }
    ]
};