// BAZA DANYCH PYTAŃ - KATEGORIA POWERSHELL Z PLIKU PDF
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
                },
                {
                    "question": "Aby usunąć wszystkie pliki z katalogu c:\\temp\\ o rozszerzeniu .xls w Windows PowerShell należy użyć polecenia:",
                    "answers": [
                        "remove-item c:\\temp\\*.xls",
                        "get-childitem c:\\temp\\*.xls | foreach-object { remove-item $_.fullname }",
                        "remove-item c:\\temp\\* -exclude *.xls",
                        "remove-file c:\\temp\\* -extension xls"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Jakie rozszerzenia mogą mieć skrypty PowerShell?",
                    "answers": [
                        ".wps",
                        ".shl",
                        ".cmd",
                        ".ps1"
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Której z niżej wymienionych polityk uruchamiania skryptów są dostępne w PowerShell systemu Windows?",
                    "answers": [
                        "NoneAllowed - nie pozwala na uruchamianie żadnych skryptów.",
                        "AllSigned - możliwość uruchomienia tylko podpisanych skryptów.",
                        "RemoteSigned - możliwość uruchamiania skryptów lokalnych oraz podpisanych pochodzących z Internetu.",
                        "Unrestricted - pozwala na uruchamianie wszystkich skryptów."
                    ],
                    "values": [false, true, true, true]
                },
                {
                    "question": "Czym charakteryzują się komendy (tzw. cmdlety) w PowerShell?",
                    "answers": [
                        "Zazwyczaj zwracają obiekty.",
                        "Nie mogą mieć zdefiniowanych kilku aliasów jednocześnie.",
                        "Mają nazwy postaci \"rzeczownik-czasownik\"",
                        "Mają nazwy postaci \"czasownik-rzeczownik\""
                    ],
                    "values": [true, false, false, true]
                },
                {
                    "question": "Aby sprawdzić czy jakiś katalog już istnieje w Windows PowerShell można skorzystać z poleceń:",
                    "answers": [
                        "remove-item",
                        "test-path",
                        "path",
                        "new-item"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Wskaż wszystkie prawdziwe zdania dotyczące interpretera Windows PowerShell:",
                    "answers": [
                        "Polecenie ls jest aliasem polecenia Get-Children.",
                        "PowerShell nie posiada modułów i przystawek pozwalających na rozszerzanie powłoki...",
                        "W systemie operacyjnym Windows XP SP2 domyślnie zainstalowaną wersją PowerShella jest wersja \"PowerShell v2\"",
                        "PowerShell pozwala na przetwarzanie potokowe, które pozwala na przekazywanie obiektu z jednego cmdletu do drugiego bez parsowania tekstu."
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Polecenie: `new-item c:\\temp\\test -type directory` spowoduje:",
                    "answers": [
                        "Utworzenie katalogu directory w katalogu c:\\temp\\test",
                        "Sprawdzi istnienie katalogu test w katalogu c:\\temp",
                        "Utworzenie katalogu test w katalogu c:\\temp",
                        "Sprawdzi czy \"test\" w katalogu c:\\temp jest katalogiem"
                    ],
                    "values": [false, false, true, false]
                }
            ]
        }
    ]
};