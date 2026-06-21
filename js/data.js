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
                        "PowerShell nie posiada modułów i przystawek pozwalających na rozszerzanie powłoki.",
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
                },
                {
                    "question": "Aby zwrócić wszystkie obiekty w bieżącej lokalizacji należy użyc polecenia:",
                    "answers": [
                        "Get-process",
                        "Copy-item",
                        "Get-content",
                        "Get-children"
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Polecenie:\n`PS> get-childitem C:\\test\\* -include *.txt -recurse | remove-item`",
                    "answers": [
                        "Znajduje i usuwa wszystkie pliki z rozszerzeniem .txt z folderu \"C:\\test\" i podfolderów",
                        "Znajduje i usuwa wszystkie pliki z rozszerzeniem .txt z folderu \"C:\\test\", bez podfolderów",
                        "Znajduje i wypisuje wszystkie pliki z rozszerzeniem .txt z folderu \"C:\\test\", bez podfolderów",
                        "Jest niepoprawne."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Aby uzyskać pomoc na temat poleceń w Windows PowerShell należy użyć polecenia:",
                    "answers": [
                        "please",
                        "help",
                        "Oh genie",
                        "Get-Help"
                    ],
                    "values": [false, true, false, true]
                },
                {
                    "question": "Które wersje systemu Windows NIE wspierają PowerShella?",
                    "answers": [
                        "Windows Vista",
                        "Windows 2000",
                        "Windows XP SP2",
                        "Windows 7"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Które wersje systemu Windows NIE wspierają PowerShella?",
                    "answers": [
                        "Windows 2000",
                        "Windows 2000 SP4",
                        "Windows Server 2008",
                        "Windows 7"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Wskaż wszystkie prawdziwe zdania dotyczące interpretera Windows PowerShell:",
                    "answers": [
                        "Wszystkie zmienne są obiektami .NET.",
                        "Aby skopiować plik należy wpisać polecenie \"Copy-item lokalizacja1 lokalizacja2\"",
                        "Aby skopiować plik należy wpisać polecenie \"Set-Location lokalizacja1 lokalizacja2\"",
                        "PowerShell jest elementem pakietu Windows Management Framework."
                    ],
                    "values": [true, true, false, true]
                },
                {
                    "question": "W Windows PowerShell poprawnie stworzona pętla to:",
                    "answers": [
                        "$a = 1 do { $a; $a++ } while ($a -lt 10)",
                        "$a = 10 do { $a; $a-- } while ($a -lt 3)",
                        "for ($a = 1; $a -le 10; $a++) { $a }",
                        "foreach ( $i in get-child c:\\scripts ) {$i.extended}"
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Co należy wstawić w miejsce znaków zapytania, aby poniższy skrypt PowerShella wyświetlał nazwę procesu w danej chwili najbardziej obciążającego procesor?\n`$ps = get-process\n$max = $ps[0]\nforeach ($p in $ps) {\n  if ( ??? )\n  { $max = $p } }\n$max.processname`",
                    "answers": [
                        "$p > $max",
                        "$p.cpu -gt $max.cpu",
                        "Brak odpowiedzi w źródle.",
                        "Brak odpowiedzi w źródle."
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Aby wyświetlić wszystkie pliki o rozszerzeniu .txt znajdujące się w obecnym katalogu można użyć polecenia:",
                    "answers": [
                        "Get-ChildItem *.* -include *.txt",
                        "Get-ChildItem -extension *.txt",
                        "Get-ChildItem -exclude *.txt",
                        "Get-ChildItem | Where-Object {$_.Attributes -ne \"Directory\" -and $_.Extension -eq \".txt\"}"
                    ],
                    "values": [true, false, false, true]
                },
                {
                    "question": "Zaznacz prawidłowe komendy ustawiające aktualną lokalizację na „C:\\”:",
                    "answers": [
                        "Set-Location c:\\",
                        "chdir c:\\",
                        "cd c\\",
                        "goto c:\\"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Zaznacz wszystkie prawidłowe odpowiedzi opisujące Windows PowerShell (WPS):",
                    "answers": [
                        "WPS to narzędzie open source do zarządzania systemami Windows spod konsoli linuxowej",
                        "WPS zapewnia dostęp do obiektów COM",
                        "WPS to środowisko oparte na platformie .NET",
                        "WPS to środowisko do automatyzowania zadań administracyjnych przy użyciu skryptów"
                    ],
                    "values": [false, true, true, true]
                },
                {
                    "question": "Polecenie:\n`dir -exclude *.zip -name -recurse -force`",
                    "answers": [
                        "Wyświetli nazwy wszystkich plików znajdujących się w danym katalogu, wraz z plikami ze wszystkich podfolderów i ich podfolderów, wraz z plikami ukrytymi i bez dostępu do nich, bez plików z rozszerzeniem zip",
                        "Wyświetli nazwy wszystkich plików, z pominięciem plików z rozszerzeniem zip, znajdujących się tylko w danym katalogu, wraz z plikami ukrytymi i bez dostępu do nich.",
                        "Wyświetli nazwy wszystkich plików znajdujących się tylko w danym katalogu, wraz z plikami ukrytymi i bez dostępu do nich.",
                        "Wyświetli nazwy wszystkich plików z rozszerzeniem zip znajdujących się w danym katalogu, wraz ze wszystkimi podfolderami, wraz z plikami ukrytymi i bez dostępu do nich."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Wskaż polecenia działające w powłoce bash oraz powershell:",
                    "answers": [
                        "man",
                        "cp",
                        "cd",
                        "gps"
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Zmienne w interpreterze PowerShell:",
                    "answers": [
                        "nie muszą być deklarowane",
                        "wymagają określenia typu",
                        "mogą mieć różne typy",
                        "są obiektami .NET"
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Polecenie PoweShell:\n`PS> get-process a* | stop-process`",
                    "answers": [
                        "Dotyczy wszystkich procesów (a* = all)",
                        "Jest poleceniem błędnym – nie wykona się",
                        "Zatrzyma procesy, których lista jest pobierana za pomocą polecenia get-process a*",
                        "Dotyczy tylko procesów, których nazwa zaczyna się na literę „a”"
                    ],
                    "values": [false, false, true, true]
                },
                {
                    "question": "W interpreterze PowerShell polecenie Get-Process:",
                    "answers": [
                        "Pozwala wypisać wszystkie aktualnie uruchomione procesy",
                        "Pozwala zmieniać priorytet procesu",
                        "Pozwala zmieniać właściciela procesu na aktualnie zalogowanego użytkownika",
                        "Przekierowywuje wynik działania procesu (standardowe wyjście) do pliku"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Interpreter Windows PowerShell:",
                    "answers": [
                        "w systemie Windows 7 (lub Windows Server 2008) wymaga wcześniejszej instalacji",
                        "Jest zintegrowany z .NET Framework",
                        "Dostarcza środowisko do wykonywania zadań administracyjnych wykonywanych poleceniami cmdlets",
                        "Wynikiem polecenia w interpreterze jest ciąg obiektów określonego typu"
                    ],
                    "values": [false, true, true, true]
                },
                {
                    "question": "Zanzacz wszystkie prawidłowe sformułowania dotyczące powłoki PowerShell:",
                    "answers": [
                        "Dzięki operatorowi | (tzw. pipe) można przekierować wyjście jednego polecenia na wejście drugiego, np. get-process | stop-process",
                        "Wszystkie zmienne są obiektami .NET",
                        "Skrypty pisane dla linuksowego interpretera Bash mogą być uruchamiane w interpreterze PowerShell",
                        "Polecenia PowerShell mają ściśle określone nazwy, do których nie można tworzyć aliasów."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Które z poniższych par słów przedstawiają pewien cmdlet oraz jego alias w Windows PowerShell?",
                    "answers": [
                        "Set-Location, cd",
                        "Get-Help, man",
                        "Remove-File, rm",
                        "Remove-Item, del"
                    ],
                    "values": [true, false, false, true]
                },
                {
                    "question": "Liczby od 1 do 5 wypisze następujący skrypt:",
                    "answers": [
                        "$i = 1\ndo { Write-Host $i; $i++ } while ($i -le 5)",
                        "$i = 1\ndo { echo $i; $i++ } while ($i -le 5)",
                        "$i = 1\ndo { echo i; i++ } while ($i -le 5)",
                        "$i = 1\ndo { print $i; i++ } while ($i -le 5)"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Które polecenia są poprawne i wyświetlają, posortowaną wg. pewnej kolumny, zawartość bieżącego katalogu?",
                    "answers": [
                        "ls | Sort-Object Name",
                        "ls | Sort-Name",
                        "ls | Sort-Object Length",
                        "ls | Sort(Length)"
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Polecenie:\n`get-childitem C:\\* -include *.txt`\nwydane w Windows PowerShell:",
                    "answers": [
                        "wyświetli nazwy wszystkich plików o rozszerzeniu \".txt\" znajdujących się w ścieżce C:\\",
                        "wyświetli nazwy wszystkich plików o rozszerzeniu \".txt\" znajdujących się w ścieżce C:\\ i jej podkatalogach",
                        "wyświetli tylko nazwy wszystkich plików o rozszerzeniu \".txt\" znajdujących się w ścieżce C:\\",
                        "wyświetli m.in. nazwę i czas ostatniego zapisu wszystkich plików o rozszerzeniu \".txt\" znajdujących się w ścieżce C:\\"
                    ],
                    "values": [true, false, false, true]
                },
                {
                    "question": "Która z wersji systemu Windows obsługuje interpreter Windows PowerShell?",
                    "answers": [
                        "Windows 98",
                        "Windows XP",
                        "Windows Vista",
                        "Windows 7"
                    ],
                    "values": [false, true, true, true]
                },
                {
                    "question": "PS E:\\test> ls\nDirectory: E:\\test\n(plik zawiera: a.xyz, b.xyz, c.xyz, d.xyy, e.xxy - po 0 bajtów każdy)\n\nPS E:\\test> get-childitem C:\\test\\* -include *.xyz -recurse | remove-item\n\nZaznacz możliwe do otrzymania wyniki działania komendy ls z dowolnymi parametrami po wykonaniu powyższej komendy:\n(UWAGA: polecenie remove-item operuje na ścieżce C:\\test, a nie E:\\test, gdzie znajdują się pliki - to pytanie jest niejednoznaczne w źródłowym PDF i wymaga ręcznej weryfikacji)",
                    "answers": [
                        "Directory: E:\\test ... pozostają: d.xyy, e.xyy",
                        "Directory: E:\\test ... pozostaje: e.xxy",
                        "d.xyy / e.xxy (bez nagłówka)",
                        "Directory: E:\\test\\ (sam nagłówek)"
                    ],
                    "values": [false, false, false, false]
                },
                {
                    "question": "Zdania prawdziwe, opisujące zmienne PowerShell, to:",
                    "answers": [
                        "Zmienne muszą mieć zdefiniowany typ",
                        "Wszystkie zmienne są obiektami .NET",
                        "Nie muszą być deklarowane",
                        "Wszystkie zmienne są globalne"
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Które z podanych przykładów pętli są poprawne w PowerShell?",
                    "answers": [
                        "foreach ($i in get-childitem c:\\scripts) {$i.extension}",
                        "for($zm = 1; $zm -le 10; $zm++) {$zm}",
                        "for(a = 1; i < 10; ++i) {i}",
                        "while($i -lt 10) {$i}"
                    ],
                    "values": [true, true, false, true]
                },
                {
                    "question": "Które z przytoczonych niżej cech odnoszą się do powłoki PowerShell?",
                    "answers": [
                        "Korzystanie z pętli for, while i until jest niedozwolone.",
                        "Odwoływanie się do zmiennych jest możliwa poprzez użycie znaku $",
                        "Zmienne nie mogą mieć zakresów widoczności",
                        "Wszystkie zmienne są obiektami .NET"
                    ],
                    "values": [false, true, false, true]
                },
                {
                    "question": "Które polecenie powłoki PowerShell wyświetli listę uruchomionych usług?",
                    "answers": [
                        "Get-Service | Where-Object {$_.name -eq \"running\"}",
                        "Get-Service | Where-Object {$_.name -eq \"SysMain\"}",
                        "Get-Service | Where-Object {$_.name -eq \"stopped\"}",
                        "Get-Process | Where-Object {$_.name -eq \"running\"}"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Aliasami polecenia Set-Location w Windows Powershell są:",
                    "answers": [
                        "sl",
                        "cd",
                        "chdir",
                        "setloc"
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "$a = 5\nIf ($a -eq 5)\n{\"Piątka \"}\nelseif ($a -lt 6)\n{\"mniejsza od szóstki\"}\nIf ($a -gt 3)\n{\"większa od trójki\"}\nPo wykonaniu tego kodu w oknie Windows Powershell:",
                    "answers": [
                        "Zostanie wypisany tekst „Piątka mniejsza od szóstki”",
                        "Zostanie wypisany tekst „Piątka mniejsza od szóstki większa od trójki”",
                        "Zostanie wypisany tekst „Piątka większa od trójki”",
                        "Zostanie wypisany komunikat o błędzie w kodzie programu"
                    ],
                    "values": [false, false, true, false]
                },
                {
                    "question": "Które z wymienionych opisów dotyczy PowerShella:",
                    "answers": [
                        "ułatwia zadania administracyjne",
                        "jest zgodny linuksową powłoką shell",
                        "może być wykorzystywany tylko przez administratorów",
                        "może być wykorzystywany przez wszystkich użytkowników"
                    ],
                    "values": [true, false, false, true]
                },
                {
                    "question": "Wskaż prawdziwe zdania. Zdania dotyczą polityki uruchamiania skryptów w konsoli PowerShell.",
                    "answers": [
                        "Polityka Unrestricted umożliwia uruchamianie niepodpisanych skryptów.",
                        "Polityka Restricted umożliwia uruchomienie tylko tych skryptów, które pochodzą z lokalnego komputera.",
                        "Polityka AllSigned jest polityką domyślną.",
                        "Polityka AllSigned umożliwia uruchamianie skryptów które zostały podpisane przez zaufanego wydawcę lub pochodzą z komputera lokalnego."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Wskaż prawdziwe zdania. Zdania dotyczą uruchamiania skryptów w konsoli PowerShell.",
                    "answers": [
                        "W konsoli PowerShell nie jest możliwe uruchomienie skryptu bez podania jego pełnej ścieżki.",
                        "W konsoli PowerShell jest możliwe uruchomienie skryptu bez podania jego pełnej ścieżki, jednak wymaga to ustawienia odpowiedniej polityki uruchamiania skryptów.",
                        "W konsoli PowerShell jest możliwe uruchomienie jakiegokolwiek skryptu bez podania jego pełnej ścieżki pod warunkiem, że bieżącą ścieżką będzie folder zawierający skrypt oraz polityka uruchamiania skryptów jest ustawiona na Unrestricted.",
                        "W konsoli PowerShell jest możliwe uruchomienie skryptu bez podawania jego pełnej ścieżki w przypadku gdy skrypt ten pochodzi z komputera lokalnego."
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Windows PowerShell:",
                    "answers": [
                        "Jest zintegrowany z .NET Framework",
                        "Dostępny jest dla systemu Windows 2000",
                        "Jest interpreterem poleceń",
                        "Zwraca w wyniku każdego polecenia zmienną typu string"
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Polecenie:\n`get-childitem C:\\Kolokwium\\Main\\* -include *.kol -recurse | remove-item`\nw Windows PowerShell:",
                    "answers": [
                        "Znajduje i usuwa wszystkie pliki z rozszerzeniem \"kol\" z folderu \"C:\\Kolokwium\\Main\" i jego podfolderów",
                        "Znajduje i usuwa wszystkie pliki z rozszerzeniem \"kol\" z folderu nadrzędnego do \"C:\\Kolokwium\\Main\", tzn. \"C:\\Kolokwium\"",
                        "Znajduje i usuwa wszystkie pliki z rozszerzeniem \"kol\" wyłącznie z folderu \"C:\\Kolokwium\\Main\"",
                        "Żadna z odpowiedzi nie jest prawidłowa"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Wskaż poprawne zdania dotyczące zmiennych w Windows PowerShell:",
                    "answers": [
                        "Wszystkie zmienne są obiektami .NET.",
                        "Zmienne muszą mieć nadany typ.",
                        "Wartość do zmiennej przypisuje operator „:=”",
                        "Zmienne mogą mieć zakres widoczności."
                    ],
                    "values": [true, false, false, true]
                },
                {
                    "question": "Które z poniższych skryptów PowerShella wydrukują listę nazw wszystkich plików o rozszerzeniu .txt w aktualnie wybranym katalogu?",
                    "answers": [
                        "get-childitem | where-object {$_.extension -eq \".txt\"} | format-table Name",
                        "get-childitem | format-table Name | where-object {$_.extension -eq \".txt\"}",
                        "foreach($a in get-childitem) {\n  if($a.extension -eq \".txt\") {\n    $a.Name\n  }\n}",
                        "get-childitem | foreach {if($_.extension -eq \".txt\"){$_.Name}}"
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Zamiennikiem poleceń dir i ls w PowerShell jest polecenie:",
                    "answers": [
                        "Get-ChildItem",
                        "Get-Content",
                        "Tee-Object",
                        "Set-Variable"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Co charakteryzuje PowerShell:",
                    "answers": [
                        "Nie rozróżnia wielkości liter w komendach",
                        "Każdą linię w pliku .ps należy zakończyć średnikiem",
                        "Zmienne oznacza się znakiem dolara '$'",
                        "Istnieje różnica między pojedynczym a podwójnym cudzysłowem"
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Które zdania o PowerShel są FAŁSZYWE:",
                    "answers": [
                        "jest zintegrowany z .NET Framework",
                        "GetChildItem zwraca wszystkie obiekty jakie zawierają dzieci bieżącej lokalizacji",
                        "Zmienne są obiektami",
                        "Do zmiennych odwołujemy się znakiem %"
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Instrukcja w PowerShell która zatrzymuje (ang. kill) procesy zaczynające się na literę Y to:",
                    "answers": [
                        "get-process Y* | stop-process",
                        "get-process Y* | kill-proces",
                        "ps Y* | stop-process",
                        "ps Y* | kill-process"
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Użytkownik korzysta z Powershella w środowisku Windows i znajduje się w lokalizacji C:\\MyScripts> po wywołaniu komendy ls, okazało się, że w tym folderze znajduje się plik script.ps1. Użytkownik zamierzając go uruchomić, zmienił aktualna politykę wykonywania skryptów z Restricted na RemoteSigned. Które z poniższych komend uruchomią w/w skrypt?",
                    "answers": [
                        "run script.ps1",
                        "script.ps1",
                        "C:\\MyScripts\\script.ps1",
                        ".\\script.ps1"
                    ],
                    "values": [false, false, true, true]
                },
                {
                    "question": "Co się stanie po wywołaniu komendy:\n`get-process pow* | stop-process`",
                    "answers": [
                        "Zostaną zatrzymane wszystkie procesy, których nazwa zaczyna się od ciągu znaków \"pow\"",
                        "Powershell zostanie wyłączony",
                        "Zostaną zatrzymane wszystkie procesy, których nazwa zawiera ciąg znaków \"pow\"",
                        "Nic się nie stanie"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Wskaż poprawne polecenia PowerShell usuwające z bieżącego katalogu pliki większe niż 2kB:",
                    "answers": [
                        "Get-Childitem | Where-Object { $_.length -gt 2kB } | Remove-Item",
                        "Get-Childitem | Where-Object ( $_.length > 2kB ) | Remove-Item",
                        "Get-Childitem | Remove-Item | Where ($length > 2kB)",
                        "ls | where-object { $_.length -gt 2kB } | rm"
                    ],
                    "values": [true, false, false, true]
                },
                {
                    "question": "Po wykonaniu w konsoli PowerShell polecenia Get-ExecutionPolicy otrzymano rezultat \"Restricted\". Oznacza to, że użytkownik:",
                    "answers": [
                        "Nie może uruchamiać żadnych skryptów, a jedynie osobne komendy",
                        "Może uruchamiać niepodpisane skrypty pochodzące z lokalnego komputera",
                        "Może uruchamiać podpisane skrypty pobrane z Internetu",
                        "Może uruchamiać niepodpisane skrypty pobrane z Internetu"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W PowerShell polecenie Get-Process:",
                    "answers": [
                        "Wylistuje wszystkie aktualnie uruchomione procesy",
                        "Zmieni priorytet procesu",
                        "Zmieni właściciela procesu na aktualnie zalogowanego użytkownika",
                        "Przekierowuje wynik działania procesu (standardowe wyjście) do pliku"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W PowerShell polityka bezpieczeństwa RemoteSigned zezwala na:",
                    "answers": [
                        "Wykonywanie dowolnych skryptów.",
                        "Uruchamianie skryptów podpisanych przez zaufanego wydawcę.",
                        "Uruchamianie niepodpisanych skryptów, które powstały na lokalnym komputerze.",
                        "Korzystanie jedynie z pojedynczych komend, bez możliwości uruchamiania skryptów."
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Prawidłowa postać pętli for w PowerShell to:",
                    "answers": [
                        "for (i = 1, i -le 10, i++) { }",
                        "for (i = 1; i -le 10; i++) { }",
                        "for ($i = 1; $i <= 10; i++) { }",
                        "for ($i = 1; $i -le 10; $i++) { }"
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Jaki jest rezultat polecenia interpretera PowerShell:\n`get-childitem C:\\Work\\ -recurse | get-acl | where { $_.Owner -match \"Maniek\"}`",
                    "answers": [
                        "Wypisze wszystkie pliki, których właścicielem jest Maniek z folderu C:\\Work oraz podfolderów",
                        "Wypisze tylko pliki z folderu C:\\Work, których właścicielem jest Maniek.",
                        "Wypisze wszystkie pliki z dysku C:, których właścicielem jest Maniek.",
                        "Wypisze pliki, które nie należą do użytkownika Maniek, z folderu C:\\Work"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Co otrzymamy po wykonaniu następującej komendy w interpreterze PowerShell:\n`PS C:\\> Get-ChildItem | where { !$_.PSIsContainer } | Select-Object Name`",
                    "answers": [
                        "Tylko nazwy folderów jakie znajdują się w lokalizacji C:\\",
                        "Tylko nazwy folderów i podfolderów jakie znajdują się w lokalizacji C:\\",
                        "Tylko nazwy plików jakie znajdują się w lokalizacji C:\\",
                        "Dokładny opis folderów, czyli m.in. nazwy i uprawnienia jakie znajdują się w lokalizacji C:\\"
                    ],
                    "values": [false, false, true, false]
                }
            ]
        },
        {
            "name": "Zarządzanie przestrzenią dyskową (RAID Windows/Linux)",
            "questions": [
                {
                    "question": "Z jakich trzech podstawowych warstw/elementów składa się architektura przestrzeni LVM (Logical Volume Manager)?",
                    "answers": [
                        "PV (Physical Volume) - fizyczne nośniki zainicjalizowane do użytku LVM.",
                        "VG (Volume Group) - grupa wolumenów łącząca nośniki fizyczne w jedną pulę.",
                        "LV (Logical Volume) - wolumeny logiczne, z których na końcu korzysta system plików.",
                        "DP (Dynamic Partition) - partycje dynamiczne odpowiedzialne za alokację systemu operacyjnego."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Za pomocą jakiego polecenia prawidłowo zainicjujesz dwa nowo podłączone dyski (/dev/sdc i /dev/sdd), aby mogły być zintegrowane jako fizyczne wolumeny LVM?",
                    "answers": [
                        "sudo pvcreate /dev/sdc /dev/sdd",
                        "sudo pvinit /dev/sdc /dev/sdd",
                        "sudo create-pv /dev/sdc /dev/sdd",
                        "sudo lvm-init --disk /dev/sdc /dev/sdd"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Zgodnie z instrukcją laboratoryjną, jaka jest poprawna składnia polecenia powołującego do życia Grupę Wolumenów (VG) o nazwie 'lab_vg' obejmującą dyski '/dev/sdc' i '/dev/sdd'?",
                    "answers": [
                        "sudo vgcreate lab_vg /dev/sdc /dev/sdd",
                        "sudo vgcreate /dev/sdc /dev/sdd lab_vg",
                        "sudo make-vg -name lab_vg /dev/sdc /dev/sdd",
                        "sudo vgadd lab_vg /dev/sdc /dev/sdd"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Chcesz utworzyć docelowy wolumen logiczny (LV) o nazwie 'lab_lv' i ustalonym rozmiarze 12 GB wewnątrz istniejącej puli 'lab_vg'. Wskaż bezbłędne polecenie:",
                    "answers": [
                        "sudo lvcreate -L 12G -n lab_lv lab_vg",
                        "sudo lvcreate -l 12G -name lab_lv lab_vg",
                        "sudo lvcreate -size 12G -lv lab_lv lab_vg",
                        "sudo create-lv lab_vg lab_lv 12G"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Po pomyślnym utworzeniu wolumenu logicznego '/dev/lab_vg/lab_lv', należy przygotować go do zapisu i połączyć z drzewem katalogów. Jakie polecenia posłużą do tego w środowisku Linux?",
                    "answers": [
                        "sudo mkfs.ext4 /dev/lab_vg/lab_lv",
                        "sudo mount /dev/lab_vg/lab_lv /mnt/lab_data",
                        "sudo format.ext4 /dev/lab_vg/lab_lv",
                        "sudo mount /mnt/lab_data /dev/lab_vg/lab_lv"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Powiększyłeś wolumen logiczny 'lab_lv' sprzętowo poprzez opcję `-L +2G`. Dlaczego zaraz potem niezbędne jest wykonanie polecenia np. `resize2fs /dev/lab_vg/lab_lv`?",
                    "answers": [
                        "Ponieważ 'lvextend' rozszerza jedynie dostępną wielkość blokowego nośnika na poziomie LVM, a 'resize2fs' instruuje system plików (ext4), aby ten nośnik wypełnił i zaczął z niego korzystać.",
                        "Bez tego polecenia stary dysk zostanie automatycznie sformatowany ze względu na uszkodzenie tzw. tablicy MBR wolumenu logicznego.",
                        "Jest to proces de-fragmentacji nowej przestrzeni dyskowej przypisanej do działającego na żywo systemu plików.",
                        "Ponieważ LVM wymaga manualnego przepisania metadanych LVM z pomocą programu resize po każdym przesunięciu fizycznych sektorów RAMu."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Na jakiej zasadzie opierają się migawki (Snapshots) wykonywane z poziomu zarządzania LVM?",
                    "answers": [
                        "Zapisują one wyłącznie fizyczne zmiany (deltę) wprowadzane na dysku od momentu wykonania migawki, wykorzystując oszczędny mechanizm Copy-on-Write (COW).",
                        "Zależnie od przyrostu danych, migawki wymagają pewnej dostępnej i przydzielonej wolnej przestrzeni (wewnątrz tej samej grupy VG), która posłuży jako bufor na przechwytywane zmiany.",
                        "Każdorazowo wykonują dokładną, zduplikowaną bit-po-bicie kopię całego dysku, przez co migawka wolumenu 100 GB zużywa natychmiastowe dodatkowe 100 GB z grupy VG.",
                        "Migawki utworzone na dyskach LVM są na stałe zablokowane i funkcjonują z prawami 'Read-Only' (Tylko do odczytu), blokując testy wewnątrz nich."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Według instrukcji laboratoryjnej z LVM, jak poprawnie utworzyć migawkę o nazwie 'snap_lab' dla źródłowego dysku '/dev/lab_vg/lab_lv', ograniczając jej bufor rozmiarowy do 2 GB?",
                    "answers": [
                        "sudo lvcreate -L 2G -s -n snap_lab /dev/lab_vg/lab_lv",
                        "sudo lvcreate -snapshot 2G -name snap_lab /dev/lab_vg/lab_lv",
                        "sudo snapshot-create -L 2G /dev/lab_vg/lab_lv snap_lab",
                        "sudo lvs --snapshot 2G -n snap_lab /dev/lab_vg/lab_lv"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Usunąłeś kluczowy plik z nośnika testowego i chcesz wykorzystać uprzednio wykonaną migawkę 'snap_lab', aby przewrócić stan dysku z przeszłości. Jaka procedura systemowa jest PRAWIDŁOWA?",
                    "answers": [
                        "Dysk należy przed odzyskiwaniem odmontować komendą `sudo umount /dev/lab_vg/lab_lv`.",
                        "Bieżący dysk należy scalić z wykonanym zapisem z przeszłości wpisując `sudo lvconvert --merge /dev/lab_vg/snap_lab`.",
                        "Należy użyć wbudowanego w jądro skryptu naprawczego `sudo lvrestore --snapshot /dev/lab_vg/snap_lab` i odczekać 5 sekund.",
                        "Wykonany po przywracaniu plik migawki pozostanie w tablicach, działając jako nieskończony wektor do powrotów systemu (wielokrotne scalanie)."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Czym szczególnym charakteryzuje się Thin Provisioning, nazywany także architekturą cienkich wolumenów i puli w LVM?",
                    "answers": [
                        "Technika ta pozwala na tworzenie logicznych przestrzeni (np. 20GB), które w oczach systemu operacyjnego wydają się ogromne, ale w rzeczywistości używają tylko tylu fizycznych bloków, ile zostało zapisanych (tzw. overcommitting).",
                        "Domyślnie alokuje z opóźnieniem rzeczywiste bajty w fizycznej puli dopiero wtedy, gdy jakaś aplikacja faktycznie zrzuci swoje dane na nośnik ext4.",
                        "Zapewnia on 100% obrony przed utratą danych, automatycznie duplikując uszkodzone fragmenty systemu na zewnętrznym serwerze NAS.",
                        "Rezerwuje on natychmiast całość żądanego miejsca z VG przy samej próbie utworzenia LV, by zaoszczędzić sobie utrudnień związanych z defragmentacją plików użytkownika."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "W jaki sposób utworzysz środowisko pod tzw. cienki wolumen? Najpierw musisz zbudować odpowiednią pulę Thin Pool, a zaraz potem zdefiniować dla klienta ten wirtualny, cienki rozmiarowo wolumen. Zaznacz poprawne kroki:",
                    "answers": [
                        "sudo lvcreate --type thin-pool -L 0.5G -n thin_pool lab_vg",
                        "sudo lvcreate -V 20G --thin -n lv_thin lab_vg/thin_pool",
                        "sudo create-thin-pool -L 0.5G -n thin_pool lab_vg",
                        "sudo lvcreate -L 20G --type thin-volume -n lv_thin lab_vg"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Z racji overcommitowania dysków w Thin Pool, środowisko może stać się groźne, gdy fizyczne bloki osiągną koniec pojemności puli bazowej. Jakich systemów / komend użyjemy na prezentacji by stale kontrolować tę zajętość?",
                    "answers": [
                        "Możemy wylistować status dysków ręcznie wpisując `lvs` opierając się na specjalnych flagach atrybutów: `-o +seg_monitor,lv_size,data_percent`.",
                        "Upewniając się, że w logach serwera powołany został daemon reagujący na limit pamięci: `dmeventd`.",
                        "Możemy skorzystać z dedykowanej jednostki systemowej wpisując `sudo systemctl status lvm2-monitor`.",
                        "Sprawdzając flagę zrzutu dyskowego dedykowanym narzedziem powłoki `sudo thin-stat --monitor lab_vg`."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Jeśli na ćwiczeniach przydzieliliśmy 500 MB fizycznego miejsca dla cienkiej puli (thin_pool), a udajemy, że oddajemy klientowi wirtualny dysk cienki na 20 GB (lv_thin) i nagle zaczniemy bez litości wciskać tam 600 MB zer (`dd if=/dev/zero ...`), to co się stanie?",
                    "answers": [
                        "System napotka na fizyczny limit wyczerpania małej puli; dalsze zapisy do Thin Volume nagle padną, wyrzucając z okna terminala najprawdopodobniej klasyczny błąd wejścia-wyjścia (I/O) i psując pliki.",
                        "W metadanych ukazanych po wywołaniu polecenia `lvs`, kolumna parametru zajętości `Data%` osiągnie równe, krytyczne 100%.",
                        "Dzięki specyfikacji LVM, dysk potajemnie oddeleguje część pliku do ukrytych RAMdisków chroniąc tablice systemu w trybie awaryjnym (kernel protection mode).",
                        "Komenda `dd` wykasuje poprzednio wgrane 100MB zapętlając wskaźnik danych tak, jak działa to na kołowych monitorach wejścia (ring-buffers)."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Z analizy na prezentacji porównującej fdisk do architektury wolumenów, LVM wyróżnia się i góruje pewnymi nieocenionymi przewagami jako warstwa zarządzania nad systemem partycji:",
                    "answers": [
                        "Wolumeny Logiczne (LV) można na żywo łatwo powiększać i pomniejszać dodając przestrzeń z dysku, bez obaw o reset czy użycie wkrętaka partycyjnego jak GParted.",
                        "Do Grupy (VG) można dołączyć łącznie parę innych dysków twardych o różnych pojemnościach sklejając je bezproblemowo w jeden 'super dysk' z potężną pulą bloków.",
                        "Włączenie serwisu systemowego lvm2 od razu kompresuje bloki, drastycznie przyspieszając pracę starego talerza napędowego dzięki zintegrowanym algorytmom LZ4.",
                        "Jest on domyślnie kompatybilny w 100% tylko ze środowiskami platform Windows z rodziny NTFS."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Jeśli weźmiemy na tapet tworzenie Macierzy Lustrzanej z dwóch fizycznych pendrive'ów z użyciem LVM-RAID, czym na prezentacji różni się to od staromodnej architektury mdadm pod względem konfiguracji?",
                    "answers": [
                        "Należy przekazać w terminalu odpowiedni przełącznik komendy `lvcreate` powołując ją m.in flagą `--type raidX` bez przymusu przełączania się do innych środowisk konfiguracyjnych terminala.",
                        "Zamiast przeglądać plik z logiem systemowym `/proc/mdstat`, postęp naprawy/klonowania oraz strukturę uszkodzeń dyskowych uzyskujemy przy wsparciu rodzimego i powszechnego polecenia `lvs`.",
                        "Wykorzystanie macierzy zagnieżdżonej LVM-RAID odbiera nam uprawnienia do ustawiania wyższych architektur nadmiarowości takich jak słynny RAID 5 (nie jest on tam od najnowszej wersji 2.0 dostępny).",
                        "LVM-RAID wymusza po procesie formatu ręczne kodowanie pliku binarnego z tablicą MBR do tablicy serwera /etc/mdadm.conf, aby zapobiec ucieczce zasobu."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Wskaż CAŁKOWICIE poprawne i sprawdzone podczas laboratorium polecenie, z pomocą którego system wykreuje macierz lustrzaną RAID1 (kopia 1 do 1), zadeklarowaną o twardym rozmiarze 3GB jako wolumen 'lv_raid1', na grupie 'lab_vg' opierając się celowo na nośnikach '/dev/sde' i '/dev/sdf':",
                    "answers": [
                        "sudo lvcreate --type raid1 -m 1 -L 3G -n lv_raid1 lab_vg /dev/sde /dev/sdf",
                        "sudo lvcreate --raid 1 --mirrors 2 -size 3G lv_raid1 lab_vg /dev/sde /dev/sdf",
                        "sudo lvm-raid -level 1 -m 1 -L 3G -n lv_raid1 lab_vg /dev/sde /dev/sdf",
                        "sudo vgcreate --type raid1 lab_vg /dev/sde /dev/sdf"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Zakładając w systemie architekturę zagnieżdżoną LVM, często zachodzi potrzeba jej trwałego usunięcia przed zwróceniem instancji roboczej dysku. Jeśli zakończyłeś pracę w katalogu (odmontowując /mnt), w jakiej kolejności system zezwoli bezpiecznie wykasować te powłoki bez ostrzeżeń?",
                    "answers": [
                        "Najpierw niszczysz Wolumeny (lvremove), następnie wykasowujesz Grupę (vgremove) a na końcu zdejmujesz inicjalizację Dysków (pvremove).",
                        "Wystarczy wywołać alias `lvm-clean --all` i zrestartować fstab w procesie deamona.",
                        "Wymusza się zniszczenie struktury głównej `pvremove`, co automatycznie posyła powiadomienie po pniach wykasowujące resztę przypiętych VG i LV z pominięciem ich stanu zapisu.",
                        "Niszczymy rekursywnie poleceniem katalog z plikami logiki, czyli `sudo rm -rf /dev/lab_vg/` i system samodzielnie usunie obiekty PV z pamięci udev."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Używając nowoutworzonego wolumenu z opcją lustrzaną (RAID1) w środowisku LVM wydałeś komendę podglądu struktury w tle z atrybutami opcji `-a -o name,copy_percent,devices lab_vg`. Jakich informacji dostarczy okno terminala o macierzy?",
                    "answers": [
                        "Pokazuje bardzo ważny postęp procentowy ukrytego procesu synchronizowania bit-w-bit obrazu dysków macierzy w tle na dysk drugorzędny (copy_percent).",
                        "Identyfikuje i uświadamia na jakich urządzeniach wirtualnych/fizycznych (/dev/sde etc.) oparte są ukryte ramy wolumenów macierzowych z suffixem '_rimage' i '_rmeta'.",
                        "Pokazuje ile procent macierzy utraciłeś podczas niespodziewanego zerwania jednego wirtualnego mostka SATA na symulatorze sprzętowym.",
                        "Program natychmiast wrzuci w okno komunikat odmowy dostępu, ponieważ flaga diagnostyki urządzeń `-a` jest specyficznym odwołaniem klasycznego pliku mdadm_status."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Przy manipulacji dostępnym miejscem na LVM stosuje się różną typografię dodawania w poleceniu. Co dokładnie w mechanice wywoła podanie wartości z prefixem PLUS w narzędziu do poszerzania pamięci (na przykład: `-L +2G`)?",
                    "answers": [
                        "Taka deklaracja poinstruuje kontroler logiczny by nie ingerował w bazowy ustalony rozmiar, lecz jedynie dołożył na wierzch kolejne 2 Gigabajty przestrzeni z wolnej grupy i doczepił je na koniec dysku.",
                        "Jeśli napiszesz sam numer rozmiaru '-L 2G' (bez zdefiniowania plusa), polecenie zamiast powiększać system operacyjny po prostu wirtualnie i bezwzględnie zetnie/przypisze jego ogólny rozmiar docelowy na pułapie 2 GB.",
                        "Używa się znaku plus do wymuszenia powiększenia rezerwowego pola na ukryte pliki konfiguracyjne dysku (tylko w ext4/metadata).",
                        "Taka opcja funkcjonuje i dodaje bloki tylko i wyłącznie podczas wywoływania narzędzia vgextend; nie działa na przyporządkowaniu końcowych bloków."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "W LVM stosuje się poręczne 3-znakowe komendy dla administratorów do rzucenia okiem na przegląd systemu blokowego na odpowiednich szczeblach. Które dopasowania komend i podsumowań na wejściu ekranu powłoki w prezentacji LVM są zgodne z prawdą?",
                    "answers": [
                        "Wykonanie 'pvs' da szybki i zwięzły wgląd na odnalezione wolumeny fizyczne przypisane lub pozostające bez grupy (VG).",
                        "Wykonanie 'vgs' uwidoczni podsumowania statystyk grupy: m.in ramy fizycznych dysków przynależnych grupie, zsumowane użycie i wylistuje ile GB zostało jeszcze nam wolne.",
                        "Wykonanie 'lvs' da na wydruku wgląd po listach zbudowanych i zadeklarowanych dyskach końcowych dla systemu plików, identyfikując ich wirtualną rolę (jak dyski cienkie, macierze, czy snapshopy).",
                        "Wykonanie 'pvshow' / 'vgshow' oraz 'lvshow' będzie o wiele bezpieczniejszą funkcją dedykowaną w celu podglądu zduplikowanych ram deamona `dmeventd` w środowiskach debianów 11 i 12."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Czym w swojej istocie jest LVM (Logical Volume Manager)?",
                    "answers": [
                        "Warstwą abstrakcji pomiędzy fizycznymi nośnikami danych a systemem plików.",
                        "Mechanizmem pozwalającym na dynamiczne zarządzanie i agregację przestrzeni dyskowej.",
                        "Bezpośrednim zamiennikiem dla systemów plików takich jak ext4 czy NTFS.",
                        "Narzędziem służącym wyłącznie do szyfrowania partycji systemowych."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Wybierz poprawne zdania opisujące architekturę i jednostki LVM:",
                    "answers": [
                        "VG (Volume Group) działa jak pojemnik (grupa), z którego przydziela się przestrzeń dla wolumenów logicznych.",
                        "LVM domyślnie podaje rozmiary przestrzeni na podstawie jednostek PE (Physical Extents), które standardowo mają rozmiar 4 MB.",
                        "PV (Physical Volume) to logiczna przestrzeń, na której montuje się system plików.",
                        "Jeden wolumen fizyczny (PV) może należeć jednocześnie do wielu grup wolumenów (VG), by optymalizować miejsce."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Wskaż główne korzyści ze stosowania środowiska LVM w systemach produkcyjnych:",
                    "answers": [
                        "Możliwość rozszerzania wolumenów w locie (online), bez konieczności restartu serwera.",
                        "Możliwość migracji danych na inny dysk fizyczny bez przerywania pracy aplikacji.",
                        "Funkcjonalność Snapshotów pozwalająca na bezpieczne wykonywanie testów i kopii zapasowych.",
                        "Wbudowana, automatyczna defragmentacja danych w tle dla dysków HDD."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "W których z wymienionych systemów operacyjnych LVM jest konfigurowany i używany jako mechanizm DOMYŚLNY podczas standardowej instalacji serwerowej?",
                    "answers": [
                        "Red Hat Enterprise Linux (RHEL)",
                        "CentOS / AlmaLinux",
                        "Windows Server 2022 (jako zastępstwo dla Storage Spaces)",
                        "Ubuntu Server (z instalatorem Subiquity)"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "System plików a LVM – wskaż prawdziwe stwierdzenia różnicujące te dwa pojęcia:",
                    "answers": [
                        "LVM działa poniżej systemu plików, agregując partycje i dyski.",
                        "Użytkownik końcowy zazwyczaj nie widzi LVM bezpośrednio, w przeciwieństwie do systemu plików.",
                        "Narzędziem do obsługi systemu plików jest np. lvresize, a do LVM mkfs.",
                        "Tworzenie plików, katalogów i zarządzanie ich uprawnieniami to zadanie LVM."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Czym jest 'Thin provisioning' (cienkie przydzielanie) w środowisku LVM?",
                    "answers": [
                        "Tworzeniem wolumenów, które zgłaszają systemowi określony rozmiar, ale fizycznie zużywają miejsce tylko wtedy, gdy dane są na nich faktycznie zapisywane.",
                        "Pozwala na 'overcommit' – sumaryczny rozmiar wolumenów logicznych może przekraczać fizyczną pojemność grupy VG.",
                        "Przydzielaniem wolumenom fizycznym mniejszej mocy zasilacza w celu oszczędzania energii.",
                        "Zabezpieczeniem, które bezwzględnie uniemożliwia uszkodzenie danych przy braku fizycznego miejsca."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Chcesz bezpiecznie zmniejszyć rozmiar wolumenu logicznego, na którym znajduje się system plików ext4. Jaka jest dopuszczalna kolejność działań?",
                    "answers": [
                        "Odmontowanie -> Sprawdzenie błędów (e2fsck) -> Zmniejszenie systemu plików (resize2fs) -> Zmniejszenie LV (lvreduce).",
                        "Zmniejszenie systemu plików (resize2fs) -> Zmniejszenie LV (lvreduce) w locie.",
                        "Odmontowanie -> Zmniejszenie LV (lvreduce) -> Zmniejszenie systemu plików (resize2fs).",
                        "Zmniejszenie LV (lvreduce) -> Formatowanie dysku (mkfs.ext4) -> Przywrócenie ze snapshota."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Za pomocą jakiego parametru w poleceniu lvcreate zadeklarujesz, że nowy dysk logiczny ma zająć CAŁĄ dostępną, wolną przestrzeń w grupie VG?",
                    "answers": [
                        "Z użyciem zapisu jednostek PE: -l 100%FREE",
                        "Z użyciem zapisu w bajtach/GB: -L 100%FREE",
                        "Za pomocą flagi --max-size",
                        "Z użyciem -L MAX"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Które zdania opisujące zaawansowane mechanizmy RAID w systemie Linux są poprawne?",
                    "answers": [
                        "Macierz RAID 0 zapewnia najwyższą wydajność, ale awaria jednego dysku oznacza utratę wszystkich danych.",
                        "Macierz RAID 1 zapewnia nadmiarowość poprzez tzw. 'mirroring' (kopie 1:1), tracąc przy tym 50% całkowitej pojemności dysków.",
                        "Mdadm operuje bezpośrednio na urządzeniach blokowych (dyskach), a nie w ramach grup wolumenów LVM.",
                        "Macierz RAID 5 wymaga minimum 2 dysków i zapewnia ochronę przed awarią wszystkich dysków w macierzy."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Jaka jest prawidłowa ścieżka dodania nowego dysku /dev/sde do grupy lab_vg i powiększenia wolumenu lab_lv o 30 GB?",
                    "answers": [
                        "pvcreate /dev/sde -> vgextend lab_vg /dev/sde -> lvextend -L +30G /dev/lab_vg/lab_lv -> resize2fs /dev/lab_vg/lab_lv",
                        "Użycie polecenia lvextend z flagą -r (np. -r -L +30G) automatycznie powiększy system plików w tym procesie.",
                        "vgextend lab_vg /dev/sde -> pvcreate /dev/sde -> lvextend -L +30G /dev/lab_vg/lab_lv",
                        "pvcreate /dev/sde -> lvresize -L +30G /dev/sde"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Czego używa środowisko LVM do szyfrowania wolumenów w celu ochrony przed fizyczną kradzieżą danych?",
                    "answers": [
                        "Korzysta z mechanizmu LUKS (Linux Unified Key Setup) i pakietu cryptsetup.",
                        "Bezpośrednio narzuca system plików NTFS i BitLocker.",
                        "Narzędzia mdadm --encrypt.",
                        "Szyfruje metadane jednostek PE wbudowanym w moduł jądra szyfrem własnościowym."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Wskaż poprawną strukturę warstwową (kanapkę kryptograficzną) dla bezpiecznego serwera z LVM:",
                    "answers": [
                        "Szyfrowanie LUKS na fizycznym dysku -> PV -> VG -> LV -> System plików",
                        "PV -> VG -> Szyfrowanie LUKS -> LV -> System plików",
                        "System plików -> LVM -> Szyfrowanie LUKS",
                        "PV -> LV -> Szyfrowanie LUKS -> System plików"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Jakie komendy i w jakiej kolejności wykonać, by usunąć dysk /dev/sdd z działającego serwera LVM?",
                    "answers": [
                        "pvmove /dev/sdd -> vgreduce lab_vg /dev/sdd -> pvremove /dev/sdd.",
                        "pvremove /dev/sdd -> Fizyczne wyrwanie dysku z obudowy.",
                        "vgreduce lab_vg /dev/sdd -> pvmove /dev/sdd.",
                        "umount /dev/sdd -> lvremove /dev/sdd -> pvremove /dev/sdd."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Co zrobi polecenie: `sudo mdadm --create /dev/md5 --level=5 --raid-devices=4 /dev/sde /dev/sdf /dev/sdg /dev/sdh`?",
                    "answers": [
                        "Stworzy tradycyjną macierz RAID 5 składającą się z czterech dysków.",
                        "Stworzy wirtualny kontener LVM na 4 dyskach.",
                        "Utworzy system plików BFS na wolumenie md5.",
                        "Sformatuje wymienione dyski w systemie ext4."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Dlaczego po wykonaniu `lvextend -L +5G` narzędzie `df -h` nadal pokazuje stary rozmiar?",
                    "answers": [
                        "Powiększono tylko strukturę logiczną LVM, zapomniano rozciągnąć system plików (resize2fs/xfs_growfs).",
                        "Dysk nie został odmontowany przed zmianą.",
                        "Brakuje restartu środowiska LVM poleceniem systemctl restart lvm2.",
                        "Zmiana rozmiaru zadziałała, ale zaktualizuje się po restarcie maszyny."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Narzędzie `cryptsetup open /dev/sdm cryptdisk` w procedurze LVM wykonuje się w celu:",
                    "answers": [
                        "Odblokowania zaszyfrowanego dysku i udostępnienia go w systemie pod nazwą w /dev/mapper/.",
                        "Zniszczenia nagłówków LUKS z dysku /dev/sdm.",
                        "Formatowania i stworzenia nowego klucza szyfrującego na dysku.",
                        "Wypisania na konsoli skrótu SHA-256 użytego hasła."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Oznaczanie wolumenów tagami (`--addtag`) umożliwia administratorowi:",
                    "answers": [
                        "Przeszukiwanie i filtrowanie konkretnych logicznych wolumenów (np. za pomocą lvs --select).",
                        "Tworzenie fizycznych partycji opartych na nazwach tagów.",
                        "Wymuszanie szyfrowania na wolumenach tylko o konkretnym tagu.",
                        "Udostępnianie wolumenu w sieci z protokołem SAMBA."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Jakie komponenty są konieczne do obsługi monitorowania Thin Provisioningu w LVM?",
                    "answers": [
                        "Narzędzie systemowe dmeventd.",
                        "Uruchomiona usługa lvm2-monitor.",
                        "Środowisko graficzne GNOME lub KDE.",
                        "Zależność od systemu plików ext4 (nie zadziała na XFS)."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Co osiągniesz wydając komendę `lvcreate -s -L 2G -n moj_snapshot /dev/vg01/lv_root`?",
                    "answers": [
                        "Utworzysz migawkę (snapshot) dysku, rejestrującą zmiany od obecnego momentu w czasie.",
                        "Stworzysz kopię lustrzaną systemu (RAID1) o rozmiarze 2GB.",
                        "Usuniesz system plików, tworząc kopię zapasową w formacie tar.gz.",
                        "Skompresujesz zawartość partycji głównej do 2GB."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Kiedy zastosowanie LVM jest absolutnie niezalecane?",
                    "answers": [
                        "Jeśli zależy nam na trywialnym procesie odzyskiwania danych za pomocą amatorskich narzędzi w małych komputerach domowych.",
                        "Gdy z góry, całkowicie i bez wyjątków znamy stały podział miejsca na partycje.",
                        "W środowiskach wymagających elastycznej rozbudowy o kolejne terabajty.",
                        "Gdy systemem operacyjnym jest nowa wersja macOS lub Windows Server."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Różnica pomiędzy parametrami -L i -l w narzędziach lvcreate/lvextend polega na tym, że:",
                    "answers": [
                        " -L określa rozmiar deklarowany twardymi jednostkami (MB, GB), a -l operuje na liczbie jednostek PE (lub wartościach procentowych).",
                        "Oba te parametry są aliasami w środowisku bash.",
                        "-L służy do zmniejszania dysku, a -l do jego rozszerzania.",
                        "-L służy do tworzenia Snapshotów, a -l to zwykłe wolumeny."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Jakie zadanie na dyskach wykonuje komenda `mdadm --zero-superblock`?",
                    "answers": [
                        "Wyczyszczenie na poszczególnych dyskach sygnatur (metadanych) informujących je, że należały do macierzy RAID.",
                        "Wyzerowanie pierwszego bloku MBR na dysku, niszcząc tablicę partycji.",
                        "Całkowite sformatowanie dysku do formatu 'zero'.",
                        "Ustawienie poziomu RAID 0."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Jak odwołać się do zaszyfrowanej warstwy, by po utworzeniu struktury położyć na niej LVM, zakładając że odblokowano kontener poleceniem cryptsetup?",
                    "answers": [
                        "pvcreate /dev/mapper/tajnydysk",
                        "pvcreate /dev/sdb",
                        "vgcreate tajnydysk /dev/sdb",
                        "mount /dev/tajnydysk"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Z jakich poleceń skorzystasz, by upewnić się o ilości wolnego miejsca do przydzielenia w ramach grupy wolumenów (wartość VFree)?",
                    "answers": [
                        "vgs",
                        "vgdisplay",
                        "df -h",
                        "lsblk"
                    ],
                    "values": [true, true, false, false]
                }
            ]
        },
        {
            "name": "Konfiguracja klastra MPI (LIN)",
            "questions": [
                {
                    "question": "Czym charakteryzuje się model pamięci oraz komunikacji w systemie MPI (Message Passing Interface)?",
                    "answers": [
                        "Każdy proces działa niezależnie i ma własną przestrzeń pamięci.",
                        "Komunikacja pomiędzy procesami odbywa się poprzez jawne przesyłanie wiadomości.",
                        "Procesy z różnych węzłów domyślnie współdzielą między sobą fizyczną pamięć RAM za pomocą technologii DMA.",
                        "Komunikacja pomiędzy procesami na różnych węzłach domyślnie odbywa się z wykorzystaniem protokołu TCP."
                    ],
                    "values": [true, true, false, true]
                },
                {
                    "question": "Jakie kroki przygotowawcze w środowisku VirtualBox zostały wskazane jako konieczne przed konfiguracją klastra na maszynach wirtualnych?",
                    "answers": [
                        "Należy ustawić kartę sieciową każdej z maszyn w tryb Bridged Adapter (Mostkowana karta sieciowa).",
                        "Należy odświeżyć (wygenerować nowy) adres MAC karty sieciowej dla sklonowanych maszyn.",
                        "Zaleca się przydzielenie maszynie wirtualnej 3 lub więcej rdzeni procesora, by móc zaobserwować wielowątkowość.",
                        "Należy wyłączyć interfejsy sieciowe i oprzeć komunikację wyłącznie na wirtualnych portach szeregowych (COM)."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Które zdania dotyczące bezhasłowego logowania (SSH) w tym laboratorium są poprawne?",
                    "answers": [
                        "Polecenie `ssh-keygen` z domyślnymi parametrami wygeneruje parę kluczy bez żądania dodatkowego hasła (passphrase), o ile to pole zostanie puste.",
                        "Polecenie `ssh-copy-id [host_name]` powoduje przesłanie i dopisanie klucza publicznego do puli zaufanych na serwerze docelowym.",
                        "Konfiguracja kluczy SSH jest absolutnie niezbędna, aby proces `mpirun` mógł w tle, bez przeszkód i podawania haseł, uruchamiać powiązane procesy na innych węzłach.",
                        "Aby komunikacja w pełni działała, wystarczy wygenerować i przekazać klucze wyłącznie z workera na managera (w jedną stronę)."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Plik `/etc/hosts` edytowany na węzłach w klastrze MPI:",
                    "answers": [
                        "Służy do ręcznego mapowania przyjaznych nazw (np. 'manager', 'worker1') na odpowiadające im adresy IP wewnątrz sieci wirtualnej.",
                        "Pozwala systemowi rozwiązywać nazwy hostów przy wywoływaniu m.in. poleceń `ssh` czy `mpirun`, nie opierając się na zewnętrznym serwerze DNS.",
                        "Powinien zawierać wylistowane wszystkie hosty biorące udział w obliczeniach wraz z ich poprawnymi adresami w danej podsieci.",
                        "Zarządza globalnymi uprawnieniami firewalla - odrzuca połączenia pochodzące spoza wymienionej puli hostów."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Wskaż poprawne kroki, które należy wykonać WYŁĄCZNIE na węźle typu 'manager' w celu udostępnienia zasobów sieciowych:",
                    "answers": [
                        "Zainstalowanie pakietu systemowego `nfs-kernel-server`.",
                        "Dopisanie odpowiedniej reguły ścieżki i uprawnień do pliku `/etc/exports`.",
                        "Wykorzystanie komendy `sudo mount -t nfs ...` do zamontowania zdalnego systemu plików u siebie.",
                        "Zastosowanie zmian w konfiguracji udostępnień poprzez wpisanie polecenia `sudo exportfs -a`."
                    ],
                    "values": [true, true, false, true]
                },
                {
                    "question": "Analiza wpisu: `/home/mpi/shared *(rw,sync,no_root_squash,no_subtree_check)` dodanego do pliku konfiguracyjnego. Co jest prawdą?",
                    "answers": [
                        "Znacznik `*` określa, że katalog będzie dostępny (udostępniany) dla dowolnych hostów próbujących się podłączyć.",
                        "Parametr `rw` nadaje klientom NFS uprawnienia pozwalające zarówno na odczyt, jak i zapis danych w tym katalogu.",
                        "Powyższy wpis musi zostać zapisany do pliku na klientach NFS w celu poprawnego mapowania zasobu.",
                        "Parametr `sync` instruuje serwer NFS, aby odpowiadał na żądania dopiero po fizycznym zapisaniu zmian na nośniku, zabezpieczając dane przed ich utratą."
                    ],
                    "values": [true, true, false, true]
                },
                {
                    "question": "Jak prawidłowo zestawić i zamontować dysk współdzielony na węźle typu 'worker'?",
                    "answers": [
                        "Należy mieć w systemie zainstalowany pakiet z narzędziami, najczęściej `nfs-common`.",
                        "Należy upewnić się, że na dysku workera istnieje już pusty folder, który zostanie podmieniony pod mapowanie z managera (tzw. punkt montowania).",
                        "Używa się polecenia: `sudo mount -t nfs manager:/home/mpi/shared /home/mpi/shared`.",
                        "Należy użyć polecenia `mount -a`, aby środowisko samo odgadło lokalizację udostępnionego udziału w sieci na podstawie podsieci."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Aby móc bez problemu programować i wywoływać środowisko OpenMPI w systemach Linux (Debian/Ubuntu), konieczna jest instalacja pakietów. Zaznacz wszystkie wykorzystane na zajęciach:",
                    "answers": [
                        "openmpi-bin",
                        "openmpi-common",
                        "libopenmpi-dev",
                        "mpirun-daemon-core"
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Oceń prawdziwość sformułowań dotyczących narzędzi wywoływanych z powłoki terminala, stosowanych podczas programowania z użyciem MPI:",
                    "answers": [
                        "Pomyślna kompilacja kodu źródłowego w języku C odbywa się przez polecenie `mpicc -o cpi cpi.c`.",
                        "Flaga `-np` podana do programu uruchomieniowego jednoznacznie określa wymaganą liczbę procesów, która zostanie powołana do życia.",
                        "Program `mpirun` potrafi uruchomić instancje na wielu różnych węzłach w klastrze symultanicznie.",
                        "`mpicc` jest całkowicie nowym, zbudowanym od zera wirtualnym kompilatorem – nie wykorzystuje tradycyjnego kompilatora systemu Linux."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Polecenie `mpirun -np 6 --host worker1:3,localhost:3 ./cpi` zachowa się następująco:",
                    "answers": [
                        "Zleci w sumie 6 procesów do wykonania równoległego.",
                        "Wyśle 3 procesy na zdalnego hosta opisanego w `/etc/hosts` jako 'worker1' oraz uruchomi 3 lokalnie.",
                        "Będzie próbowało połączyć się z maszyną 'worker1' przy pomocy uprzednio wygenerowanych kluczy uwierzytelniania SSH.",
                        "Uruchomi 6 procesów roboczych na worker1 i przekaże z nich 3 lokalne procesy sterujące do localhost."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Z punktu widzenia budowy i działania środowiska w klastrze, dlaczego wymagane jest założenie i podpięcie wspólnego systemu plików (NFS)?",
                    "answers": [
                        "Aby plik wykonywalny ze skompilowanym kodem obliczeniowym był widoczny i dostępny na każdym węźle pod dokładnie tą samą, zbieżną ścieżką dostępu.",
                        "Pozwala to na całkowite pominięcie czasochłonnego procederu kopiowania skompilowanych programów roboczych na każdego workera z osobna przy modyfikacjach kodu.",
                        "Ogranicza to konieczność używania protokołu TCP w czasie przesyłania wiadomości (Message Passing) w bibliotece MPI.",
                        "Sieciowy system plików jest rzekomo jedynym miejscem, z którego Linux potrafi poprawnie załadować klucze SSH dla użytkownika pobocznego."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Zgodnie z procedurą w poleceniu do ćwiczeń, przygotowanie użytkownika 'mpi' polega m.in. na:",
                    "answers": [
                        "Utworzeniu nowego użytkownika i nadaniu mu praw administracyjnych poleceniem dodania do grupy `sudo`.",
                        "Obowiązkowym przelogowaniu się na to świeże konto poleceniem w powłoce w celu wykonywania dalszych konfiguracji autoryzacji.",
                        "Zainstalowaniu serwera `openssh-server`, by umożliwić procesom z innego hosta inicjowanie sesji połączeniowej do tego workera.",
                        "Zablokowaniu jakiegokolwiek hasła dla użytkownika mpi i wymuszeniu logowania jako systemowy Root."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Jakie polecenia w terminalu Linux pełnią ważne funkcje diagnostyczne, które polecono wywołać w ramach instrukcji MPI?",
                    "answers": [
                        "`ip addr` - wyświetli interfejsy i przydzielone przez sieć VirtualBoxa adresy IPv4 na bieżącym węźle.",
                        "`top` - weryfikuje obciążenie, zużycie pamięci operacyjnej oraz pracę w czasie rzeczywistym powołanych procesów (rdzeni procesora).",
                        "`ssh worker1` - proste narzędzie weryfikujące poprawność zestawionego bezhasłowego klucza dostępu pomiędzy hostami z pliku konfiguracji.",
                        "`mpidiag` - dedykowane narzędzie służące do pingowania asynchronicznego workerów."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Aby skompilować program i wgrać go poprawnie do klastra, tak by każdy z workerów miał do niego dostęp, trzeba:",
                    "answers": [
                        "Umieścić plik np. `cpi.c` na podmontowanym zasobie udostępnianym w katalogu instalacyjnym, np. w podsieci (zdefiniowany `/home/mpi/shared`).",
                        "Użyć narzędzia wywołującego `mpicc` podając nazwę żądanego na wyjściu programu binarnego (`-o`).",
                        "Wykorzystać polecenie systemowe `install-mpi-cluster-node`, aby wyedytować systemowe rejestry po udanej kompilacji binarki.",
                        "Wymusić restart serwera NFS na managerze za każdym razem, po każdej re-kompilacji pliku .c."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Jak zachowują się klucze autoryzacyjne w procesie wdrażania dostępu dla biblioteki mpirun?",
                    "answers": [
                        "Narzędzie `ssh-keygen` potrafi wygenerować zestaw klucza prywatnego (zostającego na hoście) oraz publicznego (udostępnianego na zewnątrz).",
                        "Wpisanie podczas generowania hasła dodatkowego ochronnego do klucza zniszczyłoby ideę łatwego powoływania procesów w tle (żądanie by odpytywało ciągle o to hasło).",
                        "Klucze wygenerowane jako użytkownik `mpi` muszą zostać skopiowane tylko i wyłącznie na serwer Roota po stronie Managera.",
                        "Funkcja polecenia `ssh-copy-id` odpowiada za fizyczne dodanie Twojego wygenerowanego klucza publicznego do pliku `authorized_keys` wybranego, zdalnego systemu."
                    ],
                    "values": [true, true, false, true]
                },
                {
                    "question": "Po całkowitej edycji dokumentu konfiguracyjnego eksportów dysku w `/etc/exports`, jak zmusić Linuxa do wczytania wpisów?",
                    "answers": [
                        "Można użyć przeznaczonego do tego programu z flagą: `sudo exportfs -a`.",
                        "Należy zresetować demona usługi systemowej poleceniem: `sudo systemctl restart nfs-kernel-server`.",
                        "Trzeba zrestartować CAŁĄ wirtualną maszynę za każdym razem, nie ma mechanizmów aktualizacji plików dyskowych w locie.",
                        "Można użyć polecenia: `sudo mount -a`, aby system przypisał od nowa zasoby eksportowe własnym klientom."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Zaznacz poprawne sformułowania odnośnie polecenia: `mpicc -o cpi cpi.c`.",
                    "answers": [
                        "To nakładka (wrapper) dostarczana przez bibliotekę MPI upraszczająca skomplikowane procesy zestawiania standardowych flag systemowego kompilatora C.",
                        "Skutkiem bezbłędnego uruchomienia tej linii w terminalu będzie utworzenie w danym katalogu pliku wykonywalnego o nazwie `cpi`.",
                        "W przypadku wywołania tego polecenia nie zostanie użyta żadna natywna biblioteka języka C z systemu (odcina się ona od domyślnych plików nagłówkowych Linuksa).",
                        "Polecenie to automatycznie dołącza odpowiednie definicje nagłówkowe takie jak np. zawartość niezbędną do odczytu składni `mpi.h`."
                    ],
                    "values": [true, true, false, true]
                },
                {
                    "question": "(Wybierz 1 FAŁSZYWĄ odpowiedź) Co jest NIEPRAWDĄ na temat komunikacji węzłów za pomocą plików systemowych w tym laboratorium?",
                    "answers": [
                        "Zdefiniowany wpis z hostami lokalnymi można zapisać w `/etc/hosts` w formacie `<adres_ip> <wybrana_nazwa>` (np. 192.168.0.3 worker1).",
                        "Po modyfikacji pomyślnej nazwy hosta system DNS przekaże wpisany adres domeny internetowej globalnie przez router mostkowany.",
                        "Można odwoływać się od tej pory po nazwach, czyli powielać polecenia np. `ssh worker1` bez ciągłego zapamiętywania adresu IPv4.",
                        "Linuksowa powłoka w oparciu o wpisy użyje ich, aby narzędzie SSH poprawnie podłączało polecenia asynchroniczne mpirun do wskazanego maszyny."
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Jeśli polecenie uruchomieniowe `mpirun` w klastrze wielowęzłowym nagle zwraca poważny błąd połączenia i ucina procesy, co mogło zostać wykonane niepoprawnie podczas konfiguracji maszyny?",
                    "answers": [
                        "Plik wejściowy nie posiada nadanych uprawnień odczytu i wykonywania bądź plik kompilowany znalazł się tylko na komputerze Managera, a udział NFS nie działa / uległ awarii.",
                        "Plik `/etc/hosts` na systemie zgłaszającym nie zawiera nazwy wskazującej odpowiedniego aliasu IP drugiego pożądanego workera.",
                        "Ograniczenia sieciowe (lub tryb NAT zamiast Bridged) sprawiły, że nie widać z zewnątrz demona SSH lub jego port został zablokowany z braku połączenia między powłokami IP.",
                        "Wszystkie z podanych powyżej błędów mogą bezpośrednio i logicznie wpłynąć na zaprzestanie wysyłania komend procesu."
                    ],
                    "values": [true, true, true, true]
                },
                {
                    "question": "W jaki sposób MPI przesyła dane podczas obliczeń wysokowydajnych?",
                    "answers": [
                        "W obrębie procesów znajdujących się w obrębie struktury tego samego, jednego fizycznego węzła operuje bezpośrednio na wspólnej dla nich przestrzeni pamięci komputera.",
                        "W przypadku transportowania wielkiej macierzy informacji na proces zlokalizowany na innym, osobnym węźle (worker), MPI odwołuje się i nawiązuje standardowy protokół sieciowy po warstwie TCP.",
                        "Wymienia asynchronicznie wiadomości korzystając głównie ze strumieniowania protokołem UDP ze względu na brak potrzeby weryfikacji docierania małych pakietów w architekturach klastrowych.",
                        "Zrzuca informacje wymienne do ukrytego, zduplikowanego pliku w zamontowanym katalogu NFS, a węzeł docelowy pobiera stamtąd zmienne powołując się na system i/o dysku."
                    ],
                    "values": [true, true, false, false]
                }
            ]
        },
        {
            "name": "SLURM - Zarządzanie klastrem (LIN)",
            "questions": [
                {
                    "question": "Rozwiń skrót menadżera klastrowego SLURM:",
                    "answers": [
                        "Simple Linux Utility for Resource Management",
                        "Scalable Linux Utility for Resource Management",
                        "Simple Linux User Resource Manager",
                        "Synchronized Linux Utility for Resource Monitoring"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Jakie serwisy (demony) są kluczowe dla działania klastra SLURM i na jakich węzłach pracują? (Wskaż poprawne dopasowania)",
                    "answers": [
                        "slurmctld – serwis działający na węźle kontrolera (menadżera), odpowiedzialny za monitorowanie zasobów i planowanie.",
                        "slurmd – główny serwis kontrolera zarządzający wyłącznie kryptograficzną autoryzacją użytkowników.",
                        "slurmd – serwis działający na węzłach obliczeniowych (pracownikach), czekający na zadania i raportujący stan sprzętu.",
                        "slurm-auth – dedykowany demon uwierzytelniający działający tylko i wyłącznie na serwerze zarządzającym."
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Które algorytmy planowania zadań (scheduling) są typowo wykorzystywane i wpierane przez system SLURM?",
                    "answers": [
                        "FIFO (First In, First Out) – zadania wykonywane w kolejności ich zgłoszeń do kolejki.",
                        "Backfill – pozwala na wykonywanie krótszych zadań w lukach czasowych, podczas oczekiwania na zakończenie większych zadań.",
                        "Planowanie z priorytetami – priorytety są ustalane m.in. na podstawie pilności lub uprawnień danego użytkownika.",
                        "LIFO (Last In, First Out) – minimalizuje opóźnienia sieciowe faworyzując zadania, które wpłynęły jako ostatnie."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Za pomocą którego z poniższych poleceń można szybko sprawdzić ogólne informacje o węzłach (czy są bezczynne, przydzielone, czy wyłączone)?",
                    "answers": [
                        "sinfo",
                        "squeue",
                        "sstat",
                        "snode -status"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Co dokładnie oznaczają poszczególne stany zadań w kolejce planowania wyświetlane przez komendę `squeue`?",
                    "answers": [
                        "R (Running) – zadanie jest aktualnie uruchomione i wykonuje się na przydzielonym węźle.",
                        "PD (Pending) – zadanie oczekuje na przydział wymaganych zasobów.",
                        "CG (Congested) – zadanie zostało wstrzymane tymczasowo z powodu przeciążenia sieci klastra.",
                        "F (Failed) – zadanie zakończyło się niespodziewanym błędem i wymaga ręcznego restartu."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "W jaki sposób można wysyłać zadania do wykonania w klastrze SLURM i czym różnią się te metody?",
                    "answers": [
                        "Polecenie `srun` natychmiast uruchamia zadanie równoległe, działając w sposób interaktywny.",
                        "Polecenie `sbatch` wysyła skrypt do kolejki i pozwala uruchomić go później w tle (jest to najpopularniejszy sposób).",
                        "Polecenie `sbatch` przyjmuje do kolejki wyłącznie skompilowane pliki wykonywalne (np. .c, .exe), a nie zwykłe skrypty bash.",
                        "Polecenie `srun` służy wyłącznie do awaryjnego przerywania wcześniej zaplanowanych zadań wsadowych w tle."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Chcesz uruchomić skrypt `my_script.sh` z przekazaniem wartości 1 oraz 2 jako parametrów (w formie tzw. tablicy zadań / array). Która składnia wywołania w terminalu jest bezbłędna?",
                    "answers": [
                        "sbatch --array 1,2 my_script.sh",
                        "sbatch -array=1-2 my_script.sh",
                        "srun --array[1,2] my_script.sh",
                        "sbatch --jobs 1,2 my_script.sh"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W plikach skryptowych dla polecenia sbatch umieszcza się dedykowane dyrektywy. Wskaż te, które są zapisane POPRAWNIE pod kątem składni i znaczenia:",
                    "answers": [
                        "`#SBATCH --nodes=1` (żąda przydzielenia jednego węzła do zadania).",
                        "`#SBATCH --cpus-per-task=1` (żąda przydzielenia 1 rdzenia procesora na każde zadanie).",
                        "`#SBATCH -o outfile` (przekierowuje standardowe wyjście stdout do pliku).",
                        "`#SBATCH --err errfile` (przekierowuje standardowe wyjście błędów stderr do pliku)."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Narzędzie `munge` służy do uwierzytelniania wewnątrz klastra. Jakie są prawidłowe parametry i kroki konfiguracyjne dla pliku `munge.key` skopiowanego na węzeł roboczy?",
                    "answers": [
                        "Właścicielem i grupą dla tego pliku musi zostać użytkownik 'munge' (komenda `chown munge:munge`).",
                        "Plik ten musi posiadać bardzo restrykcyjne uprawnienia, tj. 700 (dostęp ma tylko jego właściciel).",
                        "Klucz musi znajdować się w ogólnodostępnym katalogu i mieć prawa 777, aby procesy pracownika mogły go swobodnie odczytywać.",
                        "Klucz 'munge' jest certyfikatem asymetrycznym, więc kopiuje się na węzeł roboczy tylko klucz publiczny `munge.pub`."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Co się stanie podczas komunikacji klastra SLURM, jeśli na węzłach roboczych administrator zapomni skonfigurować (lub zrobi błąd) w pliku `/etc/hosts`?",
                    "answers": [
                        "SLURM nie będzie w stanie poprawnie rozwiązać nazw takich jak 'node0' czy 'node1' na adresy IP, co uniemożliwi wewnętrzną komunikację węzłów.",
                        "Węzły automatycznie rozpoczną odpytywanie zewnętrznych, globalnych serwerów DNS w celu odnalezienia węzła kontrolera.",
                        "Autoryzacja za pomocą serwisu munge będzie przebiegała bez problemu, ale sbatch odrzuci zadania wsadowe ze względów bezpieczeństwa.",
                        "Usługa NFS automatycznie zaktualizuje brakujące mapowania nazw podczas pierwszej operacji mount, obchodząc problem."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Zaznacz poprawne polecenie, które służy do przesłania klucza publicznego autoryzacji SSH na zdalną maszynę (np. na nodel):",
                    "answers": [
                        "ssh-copy-id node1",
                        "ssh-keygen -copy node1",
                        "scp ~/.ssh/id_rsa node1:/etc/ssh/",
                        "ssh node1 --add-key"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W jaki sposób należy prawidłowo nadać uprawnienia oraz własność dla nowo utworzonego pliku `/etc/slurm/slurm.conf` (według instrukcji laboratoryjnej)?",
                    "answers": [
                        "Należy użyć polecenia `sudo chown root:root /etc/slurm/slurm.conf`",
                        "Należy użyć polecenia `sudo chmod 755 /etc/slurm/slurm.conf`",
                        "Należy użyć polecenia `sudo chown slurm:slurm /etc/slurm/slurm.conf`",
                        "Należy użyć polecenia `sudo chmod 777 /etc/slurm/slurm.conf`"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Jak prawidłowo włączyć przy starcie oraz natychmiast zrestartować systemową usługę (np. kontrolera SLURM) używając narzędzia systemctl?",
                    "answers": [
                        "sudo systemctl enable slurmctld",
                        "sudo systemctl restart slurmctld",
                        "sudo service slurmctld-daemon reload",
                        "sudo systemctl force-boot slurmctld"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Aby stworzyć współdzieloną przestrzeń wymiany plików między kontrolerem a pracownikami instaluje się serwer NFS. Jakie komendy dla węzła node0 są POPRAWNE (instalacja i reset usługi)?",
                    "answers": [
                        "`sudo apt install nfs-kernel-server`",
                        "`sudo systemctl restart nfs-kernel-server`",
                        "`sudo apt install nfs-server-daemon`",
                        "`sudo systemctl restart nfsd`"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Po pomyślnym dopisaniu reguły w pliku `/etc/exports` (np. `/home/sysop/shared *(rw,sync,no_root_squash, no_subtree_check)`), jakiego polecenia używa się do rozgłoszenia (wyeksportowania) tych zmian w NFS w trybie natychmiastowym?",
                    "answers": [
                        "sudo exportfs -a",
                        "sudo mount -a",
                        "sudo nfs-export --reload",
                        "sudo exports -u"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W jaki sposób z poziomu węzłów pracowniczych (node1, node2) podmontujesz ręcznie dysk udostępniony w technologii NFS z kontrolera (node0)? Wskaż poprawne pod względem flag polecenie:",
                    "answers": [
                        "sudo mount -t nfs node0:/home/sysop/shared /home/sysop/shared",
                        "sudo mount -type nfs node0:/home/sysop/shared /home/sysop/shared",
                        "sudo nfs-mount node0:/home/sysop/shared /home/sysop/shared",
                        "sudo mount node0/home/sysop/shared -t nfs /home/sysop/shared"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Wywołując komendę `squeue` wyświetlasz podgląd kolejki. Za jakie informacje odpowiadają domyślnie nagłówki JOBID, USER i TIME?",
                    "answers": [
                        "JOBID - wskazuje unikalny identyfikator przydzielonego zadania do wykonania.",
                        "USER - wskazuje użytkownika, który zakolejkował / zlecił dane zadanie.",
                        "TIME - obrazuje jak długo zadanie było kompilowane przed wpuszczeniem do kolejki.",
                        "TIME - w przypadku stanu 'R' wskazuje rzeczywisty upływający czas wykonania uruchomionego zadania."
                    ],
                    "values": [true, true, false, true]
                },
                {
                    "question": "Zgodnie z instrukcją laboratorium po instalacji pakietów narzędzia `munge`, należało zweryfikować czy serwis generujący autoryzację reaguje poprawnie w konsoli. Służy do tego łańcuch poleceń:",
                    "answers": [
                        "`munge -n | unmunge | grep STATUS`",
                        "`slurm-munge-test --all`",
                        "`ping munge:22`",
                        "`systemctl check munge.key`"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W jakim trybie podłączone zostały wirtualne karty sieciowe klastra VirtualBox do obsługi laboratorium ze SLURM?",
                    "answers": [
                        "W trybie NAT Network (Sieć NAT) po uprzednim dodaniu wspólnej sieci w narzędziach maszyny.",
                        "W trybie Bridged Adapter (Mostkowana karta sieciowa) z dostępem do fizycznego routera.",
                        "W trybie Host-Only Network (Sieć tylko dla Hosta).",
                        "W trybie Internal Network (Sieć wewnętrzna), izolująca węzły całkowicie od dostępu do internetu."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Przy tworzeniu skryptu dla polecenia `sbatch` obowiązują ścisłe reguły budowy pliku tekstowego. Wskaż prawdziwe stwierdzenia:",
                    "answers": [
                        "Na samej górze pliku powinna zostać zdefiniowana interpretowana powłoka systemowa tzw. shebang, np. `#!/bin/bash`.",
                        "Wszystkie parametry sterujące (przydział rdzeni, węzłów) zapisywane są u góry w linijkach zaczynających się od komentarza `#SBATCH`.",
                        "Komenda właściwa do uruchomienia głównego programu (np. `python skrypt.py`) znajduje się zwykle pod blokiem ustawień konfiguracyjnych `#SBATCH`.",
                        "Znacznik `#SBATCH -e errfile` służy jako interpreter kodu i jeśli program posiada błąd kompilacji, SLURM wyłączy cały klaster."
                    ],
                    "values": [true, true, true, false]
                }
            ]
        },
        {
            "name": "Programowanie w systemie LIN (LIN)",
            "questions": [
                {
                    "question": "Zgodnie z materiałami, w jaki sposób poprawnie skompilować kod źródłowy serwera napisany w języku C/C++ z użyciem kompilatora GCC?",
                    "answers": [
                        "gcc -o server exercise1_server.c",
                        "gcc exercise1_server.c -output server",
                        "gcc -c exercise1_server.c -run server",
                        "gcc -o exercise1_server.c server"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Aby skompilować program wykorzystujący bibliotekę wątków (POSIX threads) w systemie Linux, należy użyć odpowiedniej flagi kompilatora. Wskaż poprawne polecenie:",
                    "answers": [
                        "gcc -o pthread exercise2.c -pthread",
                        "gcc -o pthread exercise2.c -threads",
                        "gcc -o pthread exercise2.c --lpthreads",
                        "gcc -pthread -o exercise2.c pthread"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Przed rozpoczęciem programowania z użyciem wątków na niektórych systemach Linux, konieczna może być instalacja dodatkowego pakietu deweloperskiego. Które polecenie realizuje ten cel poprawnie?",
                    "answers": [
                        "sudo apt-get install libpthread-stubs0-dev",
                        "sudo apt-get install pthread-dev",
                        "sudo apt install linux-threads-core",
                        "sudo apt-get install libpthread-core-dev"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Zgodnie z instrukcją do zadania 1, jakiego polecenia (lub narzędzia powłoki) należy użyć, aby stworzyć potok nazwany (named pipe) w systemie plików?",
                    "answers": [
                        "mkfifo",
                        "mknod",
                        "pipe()",
                        "create_pipe"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W jaki sposób system plików w systemie Linux oznacza potok nazwany (FIFO) w wynikach polecenia np. `ls -l`?",
                    "answers": [
                        "Pierwszym znakiem w ciągu uprawnień jest litera 'p' (np. prw-r--r--).",
                        "Pierwszym znakiem w ciągu uprawnień jest litera 'f' (np. frw-r--r--).",
                        "Atrybut ten wyświetla się jako czerwony kolor nazwy, bez zmiany liter uprawnień.",
                        "Plik ten posiada ukryty atrybut 'pipe', widoczny tylko poprzez polecenie 'filefrag'."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Której funkcji języka C/C++ musi użyć klient, aby dynamicznie uzyskać numer PID własnego procesu do umieszczenia w komunikacie?",
                    "answers": [
                        "getpid()",
                        "pid()",
                        "process_id()",
                        "get_pid()"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Zgodnie z wymaganiami z zadania 1, w jaki sposób z poziomu terminala użytkownik ma wysłać sygnał SIGINT do działającego procesu serwera?",
                    "answers": [
                        "Wykorzystując polecenie `kill` z odpowiednią opcją i identyfikatorem PID serwera.",
                        "Wpisując komendę `signal -SIGINT [pid]` z poziomu konsoli.",
                        "Używając kombinacji klawiszy `Ctrl+C`, jeśli serwer działa interaktywnie w tej samej powłoce na pierwszym planie.",
                        "Wykorzystując polecenie `send_signal SIGINT` podając nazwę pliku wykonywalnego."
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Serwer z zadania 1 ma przechwycić sygnał SIGINT i wykonać określone operacje zamykające program. Która funkcja posłuży do podpięcia własnej obsługi (handlera) pod ten sygnał w kodzie?",
                    "answers": [
                        "signal()",
                        "catch_signal()",
                        "sig_handler()",
                        "sigaction()"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Do zapisania w logach daty i czasu otrzymania sygnału zatrzymującego (SIGINT), wytyczne sugerują użycie konkretnych narzędzi z języka C++. Wskaż wszystkie poprawne:",
                    "answers": [
                        "Funkcja ctime()",
                        "Funkcja now() z biblioteki chrono",
                        "Zmienna systemowa $TIME",
                        "Funkcja get_time() z biblioteki <time.h>"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "W zadaniu 2 należy utworzyć dwa osobne wątki, które będą obsługiwać funkcje `dec()` i `inc()`. Jakiej funkcji API z biblioteki POSIX do tego użyjemy?",
                    "answers": [
                        "pthread_create()",
                        "pthread_make()",
                        "thread_create()",
                        "fork()"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W programie z wątkami (Zadanie 2), dwa współbieżne wątki inkrementują i dekrementują tę samą zmienną globalną typu `long long`. Gdzie w pamięci znajduje się ta zmienna?",
                    "answers": [
                        "W pamięci współdzielonej przez wszystkie wątki tego samego procesu.",
                        "W odizolowanej przestrzeni adresowej każdego wątku z osobna (jako unikalna kopia na ich stosie).",
                        "W pamięci jądra systemu Linux (Kernel Space), do której wątki wysyłają systemowe żądania modyfikacji.",
                        "Zmienne globalne dla wątków w Linuksie przechodzą automatycznie do specjalnego pliku tymczasowego na dysku."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Jaką rolę pełni funkcja `usleep()` wykorzystana w wątku głównym w zadaniu 2?",
                    "answers": [
                        "Zawiesza (usypia) wykonywanie wątku, z którego została wywołana, na podany czas w mikrosekundach.",
                        "Zawiesza wykonywanie wątku, z którego została wywołana, na podany czas w milisekundach.",
                        "Wymusza na systemie operacyjnym natychmiastowe przerwanie i uśpienie wszystkich powołanych przez program wątków pobocznych.",
                        "Odłącza proces od terminala, przekazując jego działanie całkowicie w tło."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Jakiej funkcji POSIX Threads, zgodnie z instrukcją z zadania 2, należy użyć, aby główny proces \"usunął\" (anulował/przerwał działanie) oba nieskończone wątki poboczne?",
                    "answers": [
                        "pthread_cancel()",
                        "pthread_kill()",
                        "pthread_destroy()",
                        "pthread_exit()"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Analizując podstawowe wywołanie kompilatora np. `gcc -o client exercise1_client.c`, za co dokładnie odpowiada flaga `-o`?",
                    "answers": [
                        "Wskazuje kompilatorowi nazwę pliku wyjściowego (wykonywalnego), który ma zostać utworzony na dysku.",
                        "Określa typ optymalizacji kodu wynikowego.",
                        "Zleca włączenie modułu kompilacji obiektowej, powstrzymując proces linkowania.",
                        "Łączy kod z zewnętrzną biblioteką systemową niezbędną do działania."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W jaki sposób potok nazwany (named pipe) zrealizowany w zadaniu 1 różni się od potoku nienazwanego (anonimowego)?",
                    "answers": [
                        "Potok nazwany posiada wpis w systemie plików i umożliwia dwukierunkową wymianę danych między całkowicie niespokrewnionymi procesami.",
                        "Potok nazwany pozwala na komunikację wyłącznie między procesem rodzica a jego procesami potomnymi, ograniczając dostęp zewnętrzny.",
                        "Potok nazwany nie używa w ogóle pamięci RAM, cały przepływ danych jest bezpośrednio zapisywany na dysku twardym komputera.",
                        "W systemie Linux nie ma koncepcji potoków nienazwanych; każdy potok z natury musi posiadać nazwę przed wywołaniem go funkcją pipe()."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Czym tak naprawdę są sygnały w systemie operacyjnym Linux (takie jak użyty w laboratorium SIGINT)?",
                    "answers": [
                        "Są to formy oprogramowania komunikacji międzyprocesowej (IPC); to proste asynchroniczne powiadomienia wysyłane do procesu o wystąpieniu danego zdarzenia.",
                        "Są to zsynchronizowane kanały bezpośredniej wymiany dużych porcji danych między różnymi wątkami w C++.",
                        "Systemowym odpowiednikiem wyjątków języka C++, służącym wyłącznie do obsługi błędów segmentacji (segfault).",
                        "Natywną implementacją sprzętowych kolejek stosowanych bezpośrednio na poziomie kontrolerów na płycie głównej."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Dlaczego podczas równoległego wykonywania funkcji `inc()` oraz `dec()` na tej samej zmiennej globalnej typu `long long` w nieskończonej pętli, bez użycia funkcji chroniących (np. mutexów), jej wartość przy odczycie może być błędna?",
                    "answers": [
                        "Ponieważ operacje modyfikacji zmiennej nie są sprzętowo atomowe; występuje zjawisko wyścigu (race condition), w którym jeden wątek może nadpisać wyniki drugiego.",
                        "Ponieważ środowisko Linux celowo blokuje częsty zapis zmiennych globalnych jako ochrona przeciwko zapętlaniu procesorów.",
                        "Pętla nieskończona powoduje wyciek pamięci (memory leak), który uszkadza wartość w ramce stosu głównego procesu.",
                        "Nie wystąpi tam żaden błąd; system POSIX dla języka C natywnie rozpoznaje wątki i zawsze synchronizuje je automatycznie w tle."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Do zautomatyzowania procesu wielokrotnej kompilacji różnych plików, autor laboratorium poleca wykonanie zadania startowego:",
                    "answers": [
                        "Użycie narzędzia `make`, które w oparciu o plik Makefile może skompilować np. wszystkie 4 programy bez ręcznego wpisywania kilkukrotnie komendy gcc.",
                        "Napisanie wewnętrznego skryptu .bat i wywołanie go pod systemem Linux za pomocą polecenia `start_build`.",
                        "Uruchomienie skryptu `bash-compile -all` ze specjalnymi prawami dostępu z poziomu konta root.",
                        "Załączenie do projektu środowiska VirtualBox z przygotowanymi kompilatorami do pracy wieloplatformowej."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Jaki jest dokładnie format ramki danych przesyłanej od klienta do serwera (na podstawie opisu polecenia laboratoryjnego)?",
                    "answers": [
                        "Na początku znajduje się identyfikator procesu klienta (PID), a zaraz po nim następuje tekst wiadomości.",
                        "Wiadomość musi zawierać IP procesu wysyłającego, maskę logiczną portu i treść zsumowaną bitowo.",
                        "Tekst wiadomości jest zawsze opakowany we wbudowaną w biblioteki strukturę JSON przed zapisem na dysk.",
                        "Do potoku jako pierwszy trafia PID serwera, upewniający demona logującego o autentyczności poświadczeń klienta."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Według instrukcji obrazkowej (slajd 8-9) zasada działania komunikacji potoku nazwanego przebiega w następujących krokach:",
                    "answers": [
                        "Proces klienta zapisuje wiadomość do potoku nazwanego (Write a message), a następnie Proces Serwera z tego samego potoku tę wiadomość odczytuje (Read a message).",
                        "Proces klienta inicjuje połączenie z serwerem DNS, który odczytuje trasę wiadomości, po czym serwer aplikacyjny wysyła na potok informację z logami.",
                        "Proces serwera i proces klienta piszą naraz do tego samego segmentu potoku, który samoczynnie decyduje do kogo dostarczyć bajty.",
                        "Potok w obu kierunkach nie wymaga odczytu, ponieważ działa na zasadzie współdzielenia pliku tekstowego na dysku fizycznym bez obróbki zdarzeń I/O."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W jaki sposób z poziomu terminala utworzyć potok nazwany w systemie plików (np. o nazwie 'my_pipe')? Wskaż polecenia, które potrafią to prawidłowo zrealizować w systemach Linux:",
                    "answers": [
                        "mkfifo my_pipe",
                        "make-fifo my_pipe",
                        "mknod my_pipe p",
                        "pipe create my_pipe"
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Jeśli skompilujesz program serwera za pomocą GCC pomijając flagę określającą plik wyjściowy (np. wywołując samo `gcc exercise1_server.c`), co domyślnie zrobi kompilator?",
                    "answers": [
                        "Utworzy plik wykonywalny o domyślnej nazwie `a.out` w bieżącym katalogu.",
                        "Zgłosi błąd krytyczny `Fatal error: no output file specified` i przerwie proces kompilacji.",
                        "Utworzy jedynie obiektowy plik pośredni `exercise1_server.o` bez wywoływania procesu linkowania.",
                        "Nadpisze Twój plik źródłowy `exercise1_server.c` wynikiem w kodzie maszynowym."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Co się najprawdopodobniej stanie na poziomie kompilacji/działania, jeśli przy budowaniu programu w C wykorzystującego bibliotekę POSIX Threads (np. z funkcją `pthread_create()`) pominiesz w terminalu flagę `-pthread`?",
                    "answers": [
                        "Kompilator/Linker zgłosi błąd informujący o niezdefiniowanym odwołaniu (undefined reference) do funkcji takich jak `pthread_create`.",
                        "Program skompiluje się poprawnie, a system w tle uruchomi pojedynczy wirtualny wątek zamiast współbieżności.",
                        "Kompilator odrzuci nagłówek `#include <pthread.h>` informując, że biblioteka ta została wycofana z C++.",
                        "System operacyjny zatrzyma działanie programu w momencie jego startu, odsyłając błąd `Segmentation fault`."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Serwer logujący z Zadania 1 działa z numerem PID wynoszącym 4050. Instrukcja nakazuje zamknięcie go sygnałem SIGINT z konsoli. Które z poniższych poleceń powłoki zrobią to poprawnie?",
                    "answers": [
                        "kill -SIGINT 4050",
                        "kill -2 4050",
                        "kill 4050",
                        "kill --interrupt 4050"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Funkcja `pthread_create()` służąca do powoływania nowych wątków przyjmuje 4 argumenty. Na co wskazują te argumenty? Wskaż prawidłowe odpowiedzi:",
                    "answers": [
                        "Wskaźnik na zmienną przechowującą systemowy identyfikator tego tworzonego wątku (typu `pthread_t`).",
                        "Wskaźnik na funkcję w kodzie programu (routine), która ma zostać rozpoczęta i wykonana w nowym wątku.",
                        "Ścisły wskaźnik na fizyczny adres rdzenia procesora (core affinity), do którego przypniemy wątek.",
                        "Identyfikator portu TCP, przez który nowo utworzony wątek ma raportować błędy do serwera głównego."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "W jakim celu instrukcja do zadania z potokami nazwanymi (Zad. 1) sugeruje wykorzystanie funkcji `now()` z modułu `<chrono>` w języku C++?",
                    "answers": [
                        "Aby precyzyjnie odmierzyć i pobrać aktualny czas systemowy (na poczet logowania daty zatrzymania serwera do pliku).",
                        "W celu usypiania wątków czekających na nadchodzący ciąg z potoku (zastępując funkcję POSIX `sleep()`).",
                        "Służy to do tworzenia zabezpieczeń antyspamowych, ucinających pakiety jeśli napływają od klientów szybciej niż co sekundę.",
                        "Moduł `<chrono>` odpowiada sprzętowo za wstrzykiwanie tzw. stempli czasowych (timestamps) do systemowych ramek sieciowych."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Z jakiego systemowego typu danych oraz z jakiej funkcji języka C korzysta Klient z Zadania 1, aby poprawnie pobrać swój własny, unikalny identyfikator procesu przed wysłaniem go do potoku?",
                    "answers": [
                        "Z typu `pid_t` oraz funkcji `getpid()`.",
                        "Z typu `process_id` oraz funkcji `pid()`.",
                        "Z typu `unsigned int` oraz systemowej flagi środowiskowej `$PID`.",
                        "Z typu `thread_t` oraz funkcji `pthread_self()`."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W specyficznym mechanizmie komunikacji IPC jakim są potoki nazwane (FIFO), co domyślnie zajdzie po stronie systemu, gdy proces Serwera otworzy pusty potok żądając odczytu danych, ale żaden Klient jeszcze nie otworzył tego potoku by móc cokolwiek wysłać?",
                    "answers": [
                        "Domyślnie, proces Serwera zostanie po prostu zawieszony (zablokowany w stanie oczekiwania) na instrukcji otwierającej, czekając aż zgłosi się jakiś proces zapisujący.",
                        "Serwer natychmiastowo wejdzie w stan paniki Kernel-Panic i zrzuci plik błędów z powodu operacji wejścia na pustym deksryptorze.",
                        "Program serwera wypełni swoje bufory znakami NULL (pustymi bitami), kręcąc się w nieskończonej pętli odczytu.",
                        "Wymusi zamknięcie potoku u innych hostów przez nadanie w konsoli kodu sygnału awaryjnego z flagą `-block`."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W wątku głównym w zadaniu z `pthreads` użyta jest funkcja `usleep()`, dzięki której proces może wstrzymać działanie by np. umożliwić pracę zapętlonym wątkom. Składnia `usleep(X)` oczekuje podania wartości liczbowej. Co oznaczają używane w niej jednostki?",
                    "answers": [
                        "Funkcja pauzuje wykonanie wątku w mikrosekundach. Jeśli chcesz odczekać 2 sekundy, musisz podać wartość 2000000.",
                        "Funkcja pauzuje wykonanie na podaną ilość milisekund, zachowując zgodność z C++. Odczekanie 2 sekund to `usleep(2000)`.",
                        "To nakładka na polecenie `sleep()`, pauzuje wątek w pełnych sekundach. Dwie sekundy to wartość 2.",
                        "Argument funkcji `usleep` określa numer wątku, który powinien zostać uśpiony przez głównego schedulera, a nie czas czekania."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "W Zadaniu 2, dwie nieskończone pętle w różnych wątkach modyfikują (dodają i odejmują wartości) jedną zmienną globalną `long long`. Z uwagi na brak użytych mechanizmów w rodzaju Mutex-ów, co jest technologiczną przyczyną otrzymania np. niezerowego, losowego wyniku na ekranie na koniec pracy?",
                    "answers": [
                        "Operacje typu ++ lub -- nie są na poziomie procesora operacjami w pełni atomowymi. Wątki wykonujące to równolegle mogą wpaść w tzw. wyścig (Race Condition) i nadpisywać wzajemnie swoje rejestry.",
                        "Wielowątkowość na architekturze x86/ARM wiąże się często z oddzielnymi pamięciami podręcznymi Cache L1/L2. Brak synchronizacji blokad powoduje tzw. błędy spójności i niewidoczność modyfikacji (Cache coherence).",
                        "Zmienne typu 'long long' ładują do pamięci specjalny wskaźnik alokacji dynamicznej (malloc), który bez mechanizmu 'free()' wywołuje błędne re-adresowanie komórek RAM przez Kernel.",
                        "Jądro Linux wbudowało automatyczną randomizację niestrzeżonych wątkowo zmiennych, tzw. Thread-Sanitizer ASLR, by wymuszać stosowanie obiektów klasy standard library `std::mutex`."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Częstym błędem programistów używających kompilatora GCC dla C i C++ jest błędna kolejność wpisywania flag w środowisku terminala. Zaznacz polecenie/polecenia PRAWIDŁOWO sformułowane do skompilowania kodu wielowątkowego:",
                    "answers": [
                        "gcc exercise2.c -o my_threads -pthread",
                        "gcc -pthread -o my_threads exercise2.c",
                        "gcc -o my_threads -thread=POSIX exercise2.c",
                        "gcc my_threads exercise2.c --pthreads --out"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Zadanie z plikiem `Makefile` pozwala na kompilowanie np. całego systemu wieloplikowego krótkim słowem 'make'. Z jakich wbudowanych standardów korzysta na wejściu to polecenie?",
                    "answers": [
                        "Narzędzie to poszukuje we wskazanej ścieżce roboczej pliku `Makefile` lub `makefile`, który musi zawierać prawidłowo sformatowane przez użytkownika dyrektywy celów, np. instrukcje wywoływania gcc.",
                        "Narzędzie to bez Twojej wiedzy skanuje wszystkie odnalezione pliki `.c` z folderu i aplikuje na nich globalne kompilatory binarne Debiana.",
                        "Jeśli napiszesz program w nowym języku skryptowym, to narzędzie Make zautomatyzuje translację do języka Asemblera pobierając odpowiednie pliki binarne z usługi wget.",
                        "Wymaga sztywno zadeklarowanego pliku JSON `build.config.json` z konfiguracją ścieżek sieciowych portów środowiska WSL."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Mechanizm przerywania pracy i usuwania podprocesów `pthread_cancel()` ma pewną wbudowaną specyfikę zachowania podczas anulowania nieskończonej pętli. O co dokładnie chodzi?",
                    "answers": [
                        "To po prostu wysłanie żądania o anulowanie (cancellation request). Anulowany wątek przestanie działać po napotkaniu lub przejściu w tzw. punkt anulowania (cancellation point).",
                        "Rozwiązanie natychmiastowo wstrzymuje zasilanie napięciowe logiki rdzeni wywołanego procesu po magistrali procesora uniemożliwiając wykonanie nawet jednej linijki więcej.",
                        "Zanim zniszczy referencję struktury stosu powiązaną ze zgłoszonym wątkiem zawsze utworzy awaryjny punkt przywracania aplikacji, tzw. proces zombie na dysku HDD.",
                        "Użycie tej funkcji blokuje dostęp kompilatorów na prawach root-a do odczytu kodu źródłowego programu w środowisku roboczym."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Sprawdzając komendą `ls -l` parametry potoku w katalogu powłoki Bash, odnajdujesz ciąg `prw-rw-r--`. Jaki jest schemat tłumaczenia tego stringa systemowego w Linuksie?",
                    "answers": [
                        "Literka `p` na absolutnym początku deklaracji wskazuje, że obiekt jest strumieniowym plikiem specjalnego przeznaczenia (pipe), a nie standardowym plikiem danych tekstowych (`-`) czy np. zwykłym katalogiem (`d`).",
                        "Wartości `rw-` na pozycjach grupy właściciela wskazują, że twórca potoku ma przypisane do niego m.in. aktywne uprawnienia czytania (r) oraz zapisywania danych (w).",
                        "Na końcu pojawia się `r--`, co oznacza że każdy zwykły użytkownik systemu może przeczytać pliki logowania serwera ale domyślnie posiada zakaz nadpisywania tego potoku żądaniami.",
                        "Znak 'p' to atrybut rozgłoszenia (public), co oznacza, że dany plik po wpisaniu adresu IP będzie mógł pobrać pracownik (worker) poza zadeklarowanym klastrem SLURM."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Aby stworzyć w C sformatowany string o schemacie `[pid (identyfikator procesu)] [tekst]`, by Serwer zrozumiał nadesłany ciąg znaków, z jakiego sprytnego sposobu z bibliotek natywnych skorzysta wprawiony programista?",
                    "answers": [
                        "Wykorzysta popularną funkcję wpisywania danych formatowanych wprost do zarezerwowanego bufora tekstowego (łańcucha char array): `sprintf(buffer, \"%d %s\", getpid(), \"Wiadomosc\");`.",
                        "Wymusi na kodzie nadawanie struktury z użyciem wywołania funkcji `send_signal()` jako wbudowanego w jądro pakowacza ramek TCP w JSON.",
                        "Stworzy specjalny obiekt wirtualny `std::pipe` wysyłając najpierw komendę integer poprzez port sprzętowy powłoki COM1 do maszyny serwera.",
                        "Załączy bibliotekę `htons()` konwertując wskaźnik identyfikatora procesu do szesnastkowej formy pakietowej bajtów procesora (Big-endian)."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Porównaj potoki do wątków. Stworzyłeś w laboratorium dwa osobne, asynchroniczne procesy: Serwer logowania (zad 1) i Klient logowania (zad 1) używające wymiany IPC po dysku, jak i jeden pojedynczy główny program powołujący 2 wątki (zad 2). Różnią się one modelem dostępu do pamięci komputera. Jak?",
                    "answers": [
                        "Procesy serwera oraz klienta są niezależne i odizolowane w warstwie przydziału RAM - posiadają własne i oddzielne przestrzenie adresowe z własnymi zmiennymi wirtualnymi. Aby współdzielić parametry używamy potoków.",
                        "Główny wątek inicjujący `main` oraz dwa jego wywołane wątki współbieżne współdzielą z definicji cały wirtualny segmet adresowy tego jednego procesu (tzw. wspólną stertę, wskaźniki i kod).",
                        "Wszystkie aplikacje niezależnie od tego, czy używają struktury procesów, czy struktury pod-wątków mają systemowy nakaz przydziału całkowicie oddzielnych, sklonowanych bloków pamięci dla celów ochrony segmentacji kodu.",
                        "Z perspektywy schedulera jądra w systemach rodziny Linux/Unix absolutnie nie występuje podział na różnice adresacji pamięci pomiędzy wirtualnym procesem i wirtualnym modelem thread'a."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Gdy w serwerze logującym z Zadania 1 decydujesz się na zastosowanie funkcji C przypinającej niestandardowe zachowanie, zamykanie buforów odczytu i zapis pliku wyjścia w momencie otrzymania w terminalu znaku od usera, deklarujesz podpięcie poprzez: `signal(SIGINT, my_handler_func);`. Jaką prawidłową deklarację musi mieć na wejściu przygotowana do tego zadania własna metoda `my_handler_func`?",
                    "answers": [
                        "Musi to być poprawna funkcja niezwracająca wartości, pobierająca jedną przekazywaną systemowo liczbę całkowitą informującą o id powołanego sygnału: `void my_handler_func(int signum) { ... }`",
                        "Musi to być klasyczna funkcja systemowa C wywołująca na końcu zero bezpieczeństwa: `int my_handler_func(void) { return 0; }`",
                        "Z uwagi na strukturę środowiska, handler musi obsługiwać wskaźnik na nadpisany łańcuch tekstowy sygnału z modułem tablic `void my_handler_func(char* signal_name_ptr) { ... }`",
                        "Oczekuje podania parametru wielokrotności identyfikatorów zgłoszeniowych dla systemu przesyłowego procesora `string my_handler_func(int sig_id, string reason_str) { ... }`"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Kompilacja oprogramowania pod Linuxem może wymagać wywołania dołączanego pliku nagłówkowego systemu. By poprawnie obsługiwać logikę funkcji powłoki `getpid()` czy flag sygnałów dla potoków, z których nagłówków standardu GNU C POSIX należy korzystać?",
                    "answers": [
                        "<unistd.h>",
                        "<sys/types.h>",
                        "<windows.h>",
                        "<iostream.h>"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Zalecana funkcja C/C++ `ctime()` użyta do wrzucania czasu zastopowania pętli wyłapującej logi wejścia do serwera, posiada mało znaną właściwość wstawiającą znak specyficzny na wyjściu bufora parsowania. Jaka to charakterystyczna, z góry zaaplikowana zasada?",
                    "answers": [
                        "Implementacja tej funkcji dodaje zawsze, pod sam koniec tworzonego automatycznie ciągu daty systemowej niewidoczny znak nowej linii `\\n` (LF/CRLF), bez zgody programisty.",
                        "Wpisuje na wyjście informację po twardo narzuconym, sztywnym angielskim konwerterze językowym, np. zawsze zacznie łańcuch z trzyliterowego skrótu, jak 'Mon' dla Poniedziałku.",
                        "Funkcja natywnie blokuje wywołania z systemów Linux x64 podając w zmiennej odwrócony wektor unix-timestapu zaczynającego datowanie wsteczne od limitu 2038 roku (Y2K38).",
                        "Odmienia ona czas względem czasu absolutnego, to znaczy wyrzuca tylko odliczoną formę matematyczną w sekundach ignorując na stałe wszystkie systemowe poprawki na strefy czasowe powłoki UTC/GMT."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Na jednym ze slajdów znajduje się wyraźny opis strukturalnego wejścia-wyjścia podczas trwania mechaniki strumieniowego Potoku Nazwanego (Zadanie 1). Klient oraz Serwer wymieniają dane w oparciu o określoną sekwencję kroków odczytu powłoki Linux:",
                    "answers": [
                        "Niezależny proces klienta zapisuje wygenerowany log wejścia (swoje dane tekstowe) celując do stworzonego obiektu potoku nazwanego; z kolei następnie w czasie rzeczywistym Serwer nasłuchuje zdarzeń i odczytuje tę pożądaną wiązkę bajtów z tego samego punktu montowania struktury potoku dla siebie.",
                        "Zasada mówi o przymusowym utworzeniu potoku nazwanego komendą mkfifo przez proces klienta za każdym razem (z prawem `root`) zanim połączy się on z maszyną lokalną na podane hasło w protokole.",
                        "System operacyjny rozdziela port z wejściem odczytu `stdin`, by aplikacja pracownika automatycznie modyfikowała sygnałem nadpisaną macierz RAMu o priorytetach z użyciem biblioteki wielowątkowych stert pamięci.",
                        "W procesach IPC tego typu, zapis jest zawsze traktowany asymetrycznie - serwer wysyła komendę autoryzacyjną podając klucz sygnałowy przez kanał kontrolny (Ctrl+C w trybie deamona), by klient odpowiedział wysyłając log."
                    ],
                    "values": [true, false, false, false]
                }
            ]
        },
        {
            "name": "LIN Kernel (LINUX)",
            "questions": [
                {
                    "question": "Zaznacz wszystkie poprawne odpowiedzi:",
                    "answers": [
                        "Jądro Linuxa jest mikrojądrem (microkernel)",
                        "Jądro Linuxa jest jądrem typu hybrydowego (hybrid)",
                        "Jądro Linuxa jest jądrem typu monolitycznego (monolythic)",
                        "Jądro Linuxa jest napisane w C++",
                        "Jądro Linuxa wykorzystuje bibliotekę libc (dzięki temu można wykorzystywać np. funkcję printf())",
                        "Jądro Linuxa jest napisane w C",
                        "Jądro Linuxa zarządza pamięcią operacyjną (przydziały/zwolnienia)."
                    ],
                    "values": [false, false, true, false, false, true, true]
                },
                {
                    "question": "Zaznacz wszystkie poprawne odpowiedzi:",
                    "answers": [
                        "Do sterowania parametrami pracy jądra można wykorzystać pliki znajdujące się w katalogu /var",
                        "Do sterowania pracą jądra Linuxa można wykorzystać polecenie sysctl",
                        "Do jądra systemu operacyjnego Linux można, w czasie jego pracy, dołączać różnorodną funkcjonalność (np. sterowniki urządzenia)",
                        "Do załadowania modułu w jądrze można wykorzystać polecenia rmmod oraz modprobe -r",
                        "Do sterowania parametrami pracy jądra można wykorzystać pliki znajdujące się w katalogu /proc",
                        "Do sterowania pracą jądra Linuxa można wykorzystać polecenie sysinfo",
                        "Do usunięcia modułu z jądra można wykorzystać polecenie insmod",
                        "Do sprawdzenia jakie moduły załadowane są do jądra można wykorzystać polecenie lsmod",
                        "Do załadowania modułu w jądrze można wykorzystać polecenie modprobe oraz insmod",
                        "Katalog /proc zawiera pliki, pozwalające na zmianę sposobu przydzielania pamięci programom przez jądro Linux",
                        "Katalog /var zawiera pliki, pozwalające na zmianę sposobu przydzielania pamięci programom przez jądro systemu Linux",
                        "Do usunięcia modułu z jądra można wykorzystać polecenia modprobe oraz rmmod",
                        "Katalogi /proc, /sys oraz polecenie sysctl pozwalają na kontrolę pracy systemu",
                        "Z jądra systemu operacyjnego Linux, w trakcie jego pracy, można usuwać różnorodną funkcjonalność (na przykład sterowniki urządzenia)",
                        "Do kontroli pracy systemu można wykorzystać polecenia sysctl oraz zawartość katalogu /proc",
                        "Do sprawdzenia jakie moduły załadowane są do jądra można wykorzystać polecenie lsmod",
                        "Do załadowania modułu w jądrze można wykorzystać polecenia modprobe oraz insmod",
                        "Do kontroli pracy systemu można wykorzystać polecenia sysctl oraz zawartość katalogu /var"
                    ],
                    "values": [false, true, true, false, true, false, false, true, true, true, false, true, true, true, true, true, true, false]
                },
                {
                    "question": "Zaznacz wszystkie funkcje realizowane przez jądro monolityczne (na przykład jądro Linuxa):",
                    "answers": [
                        "Szeregowanie procesów",
                        "Zarządzanie pamięcią (zwalnianie/przydzielanie)",
                        "Szeregowanie I/O",
                        "Obsługa systemu plików"
                    ],
                    "values": [true, true, true, true]
                },
                {
                    "question": "Jakie operacje można wykonać za pomocą polecenia sysctl?",
                    "answers": [
                        "Ustawić wartości dla parametrów jądra",
                        "Ustawić wartości dla parametrów systemu plików",
                        "Wypisać wszystkie parametry jądra w trakcie działania systemu",
                        "Wypisać wszystkie parametry systemu plików"
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Polecenie sysctl:",
                    "answers": [
                        "Służy do zmiany hasła użytkownika systemu",
                        "Umożliwia zmianę nazwy użytkownika",
                        "Wyświetla listę użytkowników w systemie",
                        "Pozwala na zmianę parametrów jądra systemu w trakcie działania systemu operacyjnego",
                        "To komenda pozwalająca na konfiguracje parametrów jądra systemu Linux.",
                        "Wykonuje konfigurację jaką można także wykonać w wirtualnym systemie plików /proc/sys.",
                        "Pozwala na rekompilację jądra z uwzględnieniem nowych plików konfiguracyjnych.",
                        "Wyświetla wszystkie procesy w systemie."
                    ],
                    "values": [false, false, false, true, true, true, false, false]
                },
                {
                    "question": "Wskaż prawdziwe zdania:",
                    "answers": [
                        "przy overcommit_memory ustawionym na 2 system zawsze przydzieli aplikacjom dokładnie 100% pamięci RAM",
                        "przy overcommit_memory ustawionym na 1 możliwe jest uzyskanie za pomocą malloc() ilości pamięci wirtualnej większej niż objętość pamięci fizycznej + swap",
                        "przy overcommit_memory ustawionym na 2 ilość pamięci przydzielonej aplikacjom zależy od overcommit_ratio",
                        "kernel nigdy nie przydziela więcej pamięci niż jest dostępne fizycznie"
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Sterowanie jądrem systemu Linux. Zaznacz poprawne odpowiedzi:",
                    "answers": [
                        "Nawet najdrobniejsza zmiana w pracy jądra systemu wymaga jego ponownej kompilacji.",
                        "Możliwa jest zmiana niektórych parametrów jądra w \"locie\" korzystając z komendy sysctl.",
                        "Po każdej zmianie parametru w jądrze systemu Linux należy ponownie uruchomić komputer.",
                        "Wartości sysctl wczytywane są podczas startu systemu z pliku /etc/sysctl.conf."
                    ],
                    "values": [false, true, false, true]
                },
                {
                    "question": "Sterowniki w systemach Linuxowych: Wskaż poprawne odpowiedzi.",
                    "answers": [
                        "Można wkompilować w jądro, ale można ładować dynamicznie bez potrzeby wkompilowywania.",
                        "Mogą być ładowane dynamicznie w trakcie działania systemu.",
                        "Są tylko wkompilowane w jądro i uruchamiane automatycznie. Nie ma innej możliwości instalacji i uruchomienia.",
                        "Po instalacji nowego sterownika zawsze wymagane jest ponowne uruchomienie komputera."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "W jaki sposób można wyłączyć partycję SWAP?",
                    "answers": [
                        "Nie można wyłączyć partycji SWAP",
                        "sudo setswap off",
                        "sudo swapoff -a",
                        "sudo swap stop"
                    ],
                    "values": [false, false, true, false]
                },
                {
                    "question": "Jakie jest zadanie jądra w systemie Linux?",
                    "answers": [
                        "Ładuje i odładowuje sterowniki urządzeń.",
                        "Tylko i wyłącznie zarządza pamięcią.",
                        "Pośredniczy pomiędzy aplikacją użytkownika a sprzętem.",
                        "Zarządza pamięcią."
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Jądro w systemie Linux odpowiedzialne jest za:",
                    "answers": [
                        "Sterowniki urządzeń",
                        "Wygląd interfejsu graficznego",
                        "Zarządzanie procesami",
                        "Obsługę pamięci"
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Moduły jądra systemu Linux: wskaż wszystkie poprawne odpowiedzi.",
                    "answers": [
                        "Można pisać w języku C",
                        "Mogą być załadowane przez każdego użytkownika",
                        "Nie posiadają możliwości wyprowadzania danych na standardowe wyjście stdout za pomocą printf",
                        "Można je kompilować na tym samym systemie na którym zamierzamy je uruchomić."
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Co znajduje się w katalogu /proc/?",
                    "answers": [
                        "Informacje o procesach w systemie",
                        "Informacje o użytkownikach",
                        "Informacje o sieci",
                        "Ogólne informacje o systemie"
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Program modprobe:",
                    "answers": [
                        "wymaga restartu aby zmiany zostały wprowadzone",
                        "umożliwia usuwanie modułów z kernela",
                        "umożliwia ładowanie modułów kernela",
                        "automatycznie dodaje moduły zależne"
                    ],
                    "values": [false, true, true, true]
                },
                {
                    "question": "Parametry jądra systemu Linux można odczytać za pomocą:",
                    "answers": [
                        "pliku /proc/stat",
                        "katalogu /proc/sys",
                        "komendy ps",
                        "komendy sysctl"
                    ],
                    "values": [false, true, false, true]
                },
                {
                    "question": "Które z poniższych komend sprawdza logi jądra systemu Linux:",
                    "answers": [
                        "dmesg",
                        "klog",
                        "kmllg",
                        "kernelog"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Jądro systemu operacyjnego Linux:",
                    "answers": [
                        "pośredniczy pomiędzy aplikacjami użytkownika, a sprzętem",
                        "pośredniczy pomiędzy aplikacjami użytkownika, a pamięcią",
                        "służy wyłącznie do uruchomienia systemu i skonfigurowania urządzeń, potem kończy swoją pracę",
                        "NIE pozwala na ładowanie dodatkowych modułów"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Które ze zdań dotyczących sysctl jest poprawne?",
                    "answers": [
                        "Katalog /proc/sys dostarcza interfejs do parametrów sysctl",
                        "/proc/sys/vm/overcommit_memory jest odpowiednikiem parametru vm.overcommit_memory w sysctl.conf",
                        "jeżeli katalog /proc/sys jest tylko do odczytu to da się mimo to zmieniać parametry przez komendę sysctl",
                        "Wartości sysctl są wczytywane przy starcie systemu z /proc/sys/vm/sysctl.conf"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Zaznacz prawdziwe zdania dotyczące partycji wymiany (SWAP) w systemie Linux:",
                    "answers": [
                        "Domyślnie jest na niej zapisywany zrzut pamięci RAM przy hibernacji",
                        "Można go aktywować i dezaktywować podczas działania systemu",
                        "Jest zamontowana w katalogu /swap",
                        "Jest konieczna do działania systemu Linux"
                    ],
                    "values": [true, true, false, false]
                }
            ]
        }
    ]
};