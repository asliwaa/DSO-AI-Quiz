// BAZA DANYCH PYTAŃ
const db = {
    "categories": [
        {
            "name": "Windows - PowerShell",
            "questions": [
                {
                    "question": "Polecenie> get-childitem C:\\test\\* -include *.txt -recurse | remove-item",
                    "answers": [
                        "Znajduje i usuwa wszystkie pliki z rozszerzeniem .txt z folderu \"C:\\test\" i podfolderów.",
                        "Znajduje i usuwa wszystkie pliki z rozszerzeniem .txt z folderu \"C:\\test\", bez podfolderów.",
                        "Znajduje i wypisuje wszystkie pliki z rozszerzeniem .txt z folderu \"C:\\test\", bez podfolderów.",
                        "Jest niepoprawne."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Które wersje systemu Windows NIE wpierają PowerShella?",
                    "answers": [
                        "Windows 2000 SP4",
                        "Windows 2000",
                        "Windows Server 2008",
                        "Windows 7"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Które polityki wykonywania skryptów w PowerShell zabraniają wykonywania skryptów pochodzących z lokalnego komputera, jeśli skrypty te nie są podpisane przez zaufanego wydawcę?",
                    "answers": [
                        "Restricted",
                        "AllSigned",
                        "RemoteSigned",
                        "Unrestricted"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Po wykonaniu poniższego skryptu w PowerShell:\n`$przedmiot=\"DSO\"\nif ($przedmiot -eq \"DSO\") {\"Dedykowane Systemy Operacyjne\"}\nelseif ($przedmiot -eq \"PK\") {\"Programowanie Komputerów\"}\nelse {\"Nieznany przedmiot\"}`",
                    "answers": [
                        "Na ekranie zostanie wyświetlony napis \"Nieznany przedmiot\".",
                        "Wartość zmiennej $przedmiot nie ulegnie zmianie.",
                        "Na ekranie pojawi się komunikat o błędzie składniowym.",
                        "Do zmiennej $przedmiot zostanie przypisana wartość \"Dedykowane Systemy Operacyjne\"."
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Aby zwrócić wszystkie obiekty w bieżącej lokalizacji należy użyć polecenia:",
                    "answers": [
                        "Get-ChildItem (w teście błędnie jako Get-children)",
                        "Copy-item",
                        "Get-content",
                        "Get-process"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Polecenie `PS> get-process d* | stop-process`",
                    "answers": [
                        "poszczególne polecenia należą do tzw. poleceń Cmdlet.",
                        "zatrzymuje wszystkie uruchomione procesy.",
                        "zatrzymuje wszystkie procesy działające na partycji D.",
                        "zatrzymuje wszystkie procesy których nazwa rozpoczyna się literą \"d\"."
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Zaznacz poprawne przyporządkowania aliasów do Cmdletów:",
                    "answers": [
                        "taskkill -> Kill-Process",
                        "ls -> Get-ChildItem",
                        "help -> Get-Help",
                        "man -> Get-Help"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Polecenie Get-EventLog w Windows PowerShell pozwala:",
                    "answers": [
                        "Zapisywać informacje do dziennika zdarzeń.",
                        "Takie polecenie nie istnieje.",
                        "Pobierać wpisy z dziennika zdarzeń.",
                        "Pobierać wpisy z pliku C:\\Var\\Log\\Messages."
                    ],
                    "values": [false, false, true, false]
                },
                {
                    "question": "Polecenia natywne dla Windows PowerShell, które pozwalają na wykonywanie podstawowych operacji na obiektach w środowisku WPS to:",
                    "answers": [
                        "Potoki (pipelines)",
                        "Aplety poleceń (cmdlets)",
                        "Aplety skryptowe (scriptlets)",
                        "Komendy linii poleceń (line commands)"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Wskaż wszystkie poprawne zdania dotyczące interpretera Windows PowerShell:",
                    "answers": [
                        "PowerShell jest oparty o .NET.",
                        "PowerShell nie udostępnia mechanizmów potoku.",
                        "PowerShell pozwala ustawić różne polityki kontrolujące jakie skrypty można uruchomić.",
                        "PowerShell jest kompatybilny z bashem."
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Polityka Restricted wykonywania plików:",
                    "answers": [
                        "Jest domyślną polityką w środowisku PowerShell.",
                        "Pozwala na uruchamianie skryptów z rozszerzeniem .ps1.",
                        "Nie pozwala na wykonywanie komend w oknie interpretera.",
                        "Pozwala na uruchamianie skryptów z rozszerzeniem .ps1xml."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Które polecenie wypisze zawartość bieżącego katalogu z pominięciem plików o rozszerzeniu .exe?",
                    "answers": [
                        "Dir.exe",
                        "gci -exclude *.exe",
                        "Get-Childitem -exclude *.exe",
                        "ls -include *.exe"
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Wskaż poprawne polecenia PowerShell usuwające z bieżącego katalogu pliki większe niż 2kB:",
                    "answers": [
                        "Get-Childitem | Where-Object ($_.length > 2kB) | Remove-Item",
                        "Get-Childitem | Remove-Item | Where ($ .length > 2kB)",
                        "Get-Childitem | Where-Object ($length -gt 2kB) | Remove-Item",
                        "ls | where-object { $_.length -gt 2kB } | rm"
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Polecenie `PS> get-process | where-object {$_.WS -gt 300MB} | stop-process` wydane w interpreterze Windows PowerShell:",
                    "answers": [
                        "Listuje procesy, które zużywają więcej niż 300 MB.",
                        "Szuka procesu, który zużywa więcej niż 300 MB i wyświetla nazwę.",
                        "Szuka procesu, który zużywa więcej niż 300 MB i zatrzymuje go.",
                        "Szuka procesu, który zużywa mniej niż 300 MB i zatrzymuje go."
                    ],
                    "values": [false, false, true, false]
                },
                {
                    "question": "Która z wersji systemu Windows obsługuje interpreter PowerShell?",
                    "answers": [
                        "Windows Vista",
                        "Windows 7",
                        "Windows XP SP2/SP3",
                        "Windows 95"
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Polecenie Set-Location w Cmdlets (PowerShell) ma swój odpowiednik w interpreterze komend cmd.exe. Jest to:",
                    "answers": [
                        "chdir",
                        "set",
                        "sloc",
                        "ed"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Które z poleceń są poprawnymi podstawowymi aliasami w Windows PowerShell, służącymi do czyszczenia ekranu?",
                    "answers": [
                        "Clear-Console",
                        "Clear-Host",
                        "clear",
                        "cls"
                    ],
                    "values": [false, false, true, true]
                },
                {
                    "question": "W celu zatrzymania procesów zużywających więcej niż 100MB pamięci RAM należy użyć polecenia:",
                    "answers": [
                        "PS> stop-process | where-object { $_.WS -gt 100MB }",
                        "PS> stop-process $Memory -gt 100MB",
                        "PS> get-process | where-object { $Memory -gt 100MB } | stop-process",
                        "PS> get-process | where-object { $_.WS -gt 100MB } | stop-process"
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Zaznacz poprawne zdania dotyczące powłoki PowerShell:",
                    "answers": [
                        "Wszystkie zmienne są obiektami .NET.",
                        "Do zmiennych odwołuje się używając znaku $.",
                        "Część zmiennych jest obiektami .NET.",
                        "Do zmiennych odwołuje się używając znaku #."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Za pomocą polecenia:\n`Get-Childitem C:\\Work\\ -Recurse -Force | Measure-Object -property length -sum`",
                    "answers": [
                        "Znajdziemy liczbę plików i ich całkowity rozmiar w folderze C:\\Work oraz w podfolderach.",
                        "Wypiszemy zawartość folderu C:\\Work.",
                        "Wypiszemy największy plik z folderu C:\\Work.",
                        "Jest to niepoprawna składnia."
                    ],
                    "values": [true, false, false, false]
                }
            ]
        },
        {
            "name": "Zarządzanie przestrzenią dyskową (RAID Windows/Linux)",
            "questions": [
                {
                    "question": "Na komputerze posiadającym 5 dysków ma zostać zainstalowany system operacyjny Windows 2008 Server, który powinien zapewnić pracę z minimalnym prawdopodobieństwem utraty danych oraz łatwą administracją dyskami. Jaką konfigurację powinien wybrać administrator zakładając, że nie może użyć macierzy sprzętowych?",
                    "answers": [
                        "wszystkie dyski spięte w mirror",
                        "2 dyski spięte w mirror, pozostałe 3 dyski spięte w RAID5",
                        "wszystkie 5 dysków spiętych w RAID5",
                        "dyski spięte w spanned volume, 2 dyski spięte w mirror"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Maksymalna ilość dysków, które mogą ulec awarii bez utraty danych wynosi:",
                    "answers": [
                        "1, dla 2 dysków pracujących w RAID0",
                        "1, dla 3 dysków pracujących w RAID5",
                        "1, dla 2 dysków pracujących w RAID1",
                        "2, dla 3 dysków pracujących w RAID5"
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "RAID:",
                    "answers": [
                        "jest stosowane w celu zwiększenia niezawodności",
                        "wymaga minimum 3 dysków fizycznych do pracy",
                        "jest stosowane w celu zwiększenia wydajności transmisji danych",
                        "jest stosowane w celu powiększenia przestrzeni dostępnej jako jedna całość"
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Mirrored volume w systemie Windows 2008 ma następujące właściwości:",
                    "answers": [
                        "może chronić wolumen bootowalnego systemu operacyjnego Windows 2008",
                        "do założenia wymaga 2 identycznych partycji na dyskach typu \"basic disk\"",
                        "można go utworzyć na 2 dyskach",
                        "wymaga zakupienia specjalnego kontrolera dysków"
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Które z poniższych zdań na temat macierzy RAID5 są prawdziwe?",
                    "answers": [
                        "RAID5 działa poprawnie do awarii więcej niż jednego dysku",
                        "Macierz RAID5 wymaga minimum 4 dysków",
                        "W n-dyskowej macierzy bity parzystości są na n-1 dyskach",
                        "Macierz złożona z n jednakowych dysków ma objętość n-1 dysków"
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Dla których wolumenów prawdopodobieństwo utraty danych jest większe niż dla wolumenu prostego (simple volume):",
                    "answers": [
                        "spanned volume",
                        "striped volume",
                        "RAID5",
                        "mirrored volume"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Zaznacz poprawne stwierdzenia dotyczące dysków podstawowych i dynamicznych w systemach Windows:",
                    "answers": [
                        "Dyski podstawowe posiadają te same możliwości i funkcje co dyski dynamiczne jednak ich konfiguracja jest nieco trudniejsza",
                        "Dyski dynamiczne dostępne są tylko w systemach windows z rodziny serwer",
                        "Dyski podstawowe pozwalają na tworzenie podstawowych partycji, rozszerzonych partycji oraz dysków logicznych",
                        "W niektórych wersjach systemu windows istnieje możliwość scalenia kilku oddzielnych dynamicznych dysków w jeden wolumen dynamiczny"
                    ],
                    "values": [false, false, true, true]
                },
                {
                    "question": "Które konfiguracje RAID zwiększają wydajność (gdzie wzrost wydajności należy zrozumieć jako wzrost prędkości odczytu i zapisu)?",
                    "answers": [
                        "RAID0",
                        "RAID0+1",
                        "RAID1+0",
                        "RAID1"
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "W systemie Windows 7 na 5 dyskach za pomocą systemu operacyjnego został założony RAID5. Po pewnym czasie podczas pracy systemu 1 dysk uległ uszkodzeniu.",
                    "answers": [
                        "odzyskiwanie danych będzie możliwe tylko z ostatniej archiwizacji",
                        "jeśli uszkodzony dysk zostanie wymieniony na nowy to po ponownym uruchomieniu systemu dane zostaną automatycznie odzyskane",
                        "danych nie będzie można odzyskać",
                        "w systemie Windows 7 nie można użyć RAID5"
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Macierz typu raid 5 złożona z 3 dysków o jednakowej pojemności i parametrach:",
                    "answers": [
                        "ma pojemność 2 dysków i nie jest odporna na awarię ani jednego dysku",
                        "oferuje spowolniony odczyt w przypadku awarii 1 dysku",
                        "ma pojemność 1 dysku i jest odporna na awarię maksymalnie 2 dysków",
                        "ma pojemność 2 dysków i jest odporna na awarię maksymalnie 1 dysku"
                    ],
                    "values": [false, true, false, true]
                },
                {
                    "question": "Zaznacz prawdziwe stwierdzenia:",
                    "answers": [
                        "Sprzętowy RAID oferuje większą wydajność poprzez zmniejszenie obciążenia CPU, gdyż przeliczaniem sum kontrolnych zajmuje się wówczas dedykowany kontroler.",
                        "RAID sprzętowy jest niekompatybilny z dużą liczbą systemów operacyjnych, ze względu na zachowanie odróżniające taki RAID od pojedynczego dysku twardego.",
                        "RAID software'owy oferuje możliwość łączenia różnych interfejsów takich jak ATA, SCSI, SATA, USB w obrębie jednej macierzy.",
                        "Dla takich samych dysków RAID 6 oferuje większą szybkość zapisu niż RAID 0."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Zaznacz cele zastosowania macierzy RAID:",
                    "answers": [
                        "Zwiększenie odporności na awarie",
                        "Zwiększenie wydajności transmisji danych",
                        "Powiększenie przestrzeni dyskowej, dostępnej jako jedna całość",
                        "Dwukrotne zwiększenie całkowitej przestrzeni dyskowej"
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "System Linux pozwala na:",
                    "answers": [
                        "Tworzenie programowych macierzy RAID.",
                        "Tworzenie wolumenów liniowych.",
                        "Tworzenie partycji za pomocą polecenia \"create\"",
                        "Tworzenie macierzy RAID 5."
                    ],
                    "values": [true, true, false, true]
                },
                {
                    "question": "Za pomocą polecenia mdadm można:",
                    "answers": [
                        "utworzyć wolumin liniowy",
                        "Sformatować partycję",
                        "Sprawdzić konfigurację macierzy",
                        "Zasymulować awarię woluminu"
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Wskaż poprawne zdania dotyczące RAID.",
                    "answers": [
                        "Polecenie mdadm -C -v /dev/md0 --level=0 -n 2 /dev/sda1 /dev/sdb1 służy do stworzenia wolumenu liniowego na partycjach sda1 i sdb1.",
                        "Polecenie mdadm -C -v /dev/md0 --level=1 -n 2 /dev/sda1 /dev/sdb1 służy do stworzenia mirroru.",
                        "Polecenie mkfs -t ext3 /dev/md0 służy do sformatowania urządzenia.",
                        "Wolumenu liniowego /dev/md0 nie można dodać do pliku /etc/fstab, aby była montowana przy starcie systemu operacyjnego."
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Wskaż poprawne odpowiedzi dotyczące RAID5:",
                    "answers": [
                        "Umożliwia odzyskanie danych w razie awarii jednego z dysków",
                        "Składa się z minimum 2 dysków",
                        "Odzyskiwanie danych w razie awarii odbywa się przy wykorzystaniu danych i kodów korekcyjnych zapisanych na jednym, specjalnie do tego przeznaczonym dysku",
                        "W przypadku awarii dysku dostęp do danych jest spowolniony"
                    ],
                    "values": [true, false, false, true]
                },
                {
                    "question": "Wskaż poprawne odpowiedzi dotyczące mirroring-u:",
                    "answers": [
                        "Polega na zapisywaniu tych samych danych na dwóch lub więcej dyskach jednocześnie",
                        "W przypadku awarii co najmniej połowy z dysków nie ma możliwości odzyskania wszystkich danych",
                        "Dostępna przestrzeń ma rozmiar najmniejszego nośnika",
                        "Czas równoległego zapisu jest równy czasowi zapisu na najwolniejszym dysku"
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Macierz RAID 5 charakteryzuje się:",
                    "answers": [
                        "Zastosowaniem minimum 2 dysków",
                        "Zastosowaniem minimum 3 dysków",
                        "Odpornością na awarię dwóch dysków",
                        "Zmniejszoną szybkością zapisu"
                    ],
                    "values": [false, true, false, true]
                },
                {
                    "question": "Cztery dyski twarde o rozmiarach 200GB, 200GB, 150GB, 150GB połączono w macierz typu striped volume:",
                    "answers": [
                        "Macierz taka jest bardziej odporna na awarie niż pojedynczy dysk",
                        "Sumaryczna szybkość takiej macierzy jest 4-krotnością szybkości najwolniejszego z dysków",
                        "Macierz jest widziana w systemie jako pojedynczy dysk logiczny o rozmiarze 700GB",
                        "Prawdopodobieństwo utraty danych jest większe niż dla analogicznej macierzy RAID 1"
                    ],
                    "values": [false, true, false, true]
                }
            ]
        }
    ]
};