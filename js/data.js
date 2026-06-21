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
                },
                {
                    "question": "Aby wykorzystać programowy RAID5 w systemie Windows 2008 Serwer należy posiadać komputer z zainstalowanymi",
                    "answers": [
                        "trzema dyskami",
                        "trzema dyskami oraz kontrolerem umożliwiającym systemowi Windows 2008 Server utworzenie programowej macierzy RAID5",
                        "czterema dyskami",
                        "pięcioma dyskami"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Na ilu dyskach można założyć wolumen paskowany używając systemu operacyjnego Windows 2008?",
                    "answers": [
                        "na 1",
                        "na 2",
                        "na 3",
                        "na 4"
                    ],
                    "values": [false, true, true, true]
                },
                {
                    "question": "Na komputerze posiadającym 6 dysków zostanie zainstalowany system operacyjny Windows 2008 Server. Która konfiguracja pozwoli na pracę z najlepszym wykorzystaniem przestrzeni na dyskach zakładając, że nie można użyć macierzy sprzętowych?",
                    "answers": [
                        "2 dyski spięte w mirror, 3 dyski spięte w RAID5",
                        "2 dyski spięte w mirror, pozostałe 4 dyski spięte w wolumen paskowany",
                        "wszystkie 6 dysków spiętych w RAID5",
                        "utworzone 3 mirrory po 2 dyski każdy"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Na ilu dyskach można założyć wolumen paskowany używając systemu operacyjnego Windows 7?",
                    "answers": [
                        "na 1",
                        "na 2",
                        "na 3",
                        "na 5"
                    ],
                    "values": [false, true, true, true]
                },
                {
                    "question": "Na komputerze posiadającym 3 dyski zostanie zainstalowany system operacyjny Windows 2008 Server. Która konfiguracja pozwoli na pracę z najlepszym wykorzystaniem przestrzeni na dyskach zakładając, że nie można użyć macierzy sprzętowych?",
                    "answers": [
                        "2 dyski spięte w mirror, jeden dysk bez zabezpieczeń",
                        "3 dyski spięte w spanned volume",
                        "wszystkie 3 dyski spięte w RAID5",
                        "wszystkie dyski spięte w mirror"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Konfiguracja RAID0:",
                    "answers": [
                        "Pojemność wszystkich połączonych dysków jest równa N* pojemność najmniejszego dysku, gdzie N to liczba połączonych dysków.",
                        "Nie dostarcza żadnego zabezpieczenia danych.",
                        "Znajduje idealne zastosowanie gdzie wydajność jest ważniejsza od bezpieczeństaw danych.",
                        "Pojemność wszystkich połączonych dysków jest równa pojemności najmniejszego z nich."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Jakie są dostępne typy dysków dynamicznych w systemie Windows 2003?",
                    "answers": [
                        "Mirror",
                        "Spanned Volume",
                        "Stripped Volume",
                        "Simple Volume"
                    ],
                    "values": [true, true, true, true]
                },
                {
                    "question": "W konfiguracji RAID1:",
                    "answers": [
                        "Dane zapisywane są na obu dyskach równocześnie.",
                        "Dane są zapisywane na kolejnych dyskach bit po bicie, tak jak w przypadku RAID2.",
                        "Efektywna pojemność wynosi 50% pojemności dysków.",
                        "Wykorzystuje paskowanie dysków."
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Które z poniższych zdań opisują macierz RAID1 (mirroring)?",
                    "answers": [
                        "RAID1 oferuje możliwość strippingu danych.",
                        "Calkowita pojemność danych macierzy jest równa pojemności największego dysku.",
                        "Pojemność macierzy jest równa pojemności najmniejszego dysku pomnożonego przez liczbę dysków.",
                        "Odporność na awarię N-1 dysków w N-dyskowej macierzy."
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "W przypadku którego typu konfiguracji dysków istnieje możliwość odzyskania danych jeśli jeden z dysków macierzy ulegnie awarii?",
                    "answers": [
                        "konfiguracja typu stripped volume",
                        "konfiguracja typu RAID5",
                        "konfiguracja typu mirror",
                        "konfiguracja typu spanned volume"
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Mirrored volume w systemie Windows 2008 ma następujące właściwości:",
                    "answers": [
                        "może chronić wolumen z bootowalnym systemem operacyjnym Windows 2008.",
                        "może obejmować więcej niż 2 dyski.",
                        "całkowicie likwiduje ryzyko utraty danych.",
                        "nie można go założyć na dyskach typu \"basic disk\"."
                    ],
                    "values": [true, false, false, true]
                },
                {
                    "question": "Który z typów RAID zapewni bezpieczeństwo przy awarii jednego dysku?",
                    "answers": [
                        "RAID0+1",
                        "RAID0",
                        "RAID1",
                        "RAID5"
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Wskaż poprawną odpowiedź:",
                    "answers": [
                        "Przestrzeń macierzy w RAID0 jest zależna od rozmiaru najmniejszego z użytych dysków.",
                        "RAID0+1 i RAID1+0 udostępniają 100% sumy pojemności wszystkich użytych dysków.",
                        "RAID4 to macierz, której dane na dyskach są paskowane.",
                        "Awaria dwóch dysków w RAID6 nie powoduje utraty danych."
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Programowy RAID5 w systemie Windows 2008 Server:",
                    "answers": [
                        "można utworzyć już na 2 dyskach.",
                        "można utworzyć na 4 dyskach.",
                        "Zwiększa odporność systemu na awarie dysków.",
                        "można założyć na dyskach typu \"dynamic\" lub basic."
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Jakie właściwości ma programowy RAID5 w systemie operacyjnym Windows 2008?",
                    "answers": [
                        "można go założyć na 5 dyskach.",
                        "umożliwia lepsze wykorzystanie przestrzeni na dyskach niż wolumen paskowany.",
                        "zapewnia bezawaryjną pracę systemu.",
                        "pozwala uniknąć fragmentacji systemu plików."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Zaznacz zdania prawdziwe:",
                    "answers": [
                        "RAID występuje wyłącznie sprzętowy.",
                        "RAID występuje wyłącznie programowy.",
                        "RAID występuje zarówno programowy jak i sprzętowy.",
                        "Nie ma żadnej możliwości uruchomienia RAID w domowym komputerze PC."
                    ],
                    "values": [false, false, true, false]
                },
                {
                    "question": "Które z podanych zdań są prawdziwe?",
                    "answers": [
                        "RAID programowy pozwala na bezpośredni start systemu z macierzy dyskowej.",
                        "RAID sprzętowy posiada wyższą wydajność od RAID programowego, gdyż przeliczaniem sum kontrolnych zajmuje się dedykowany kontroler.",
                        "RAID programowy posiada większą kompatybilność z mniej popularnymi systemami operacyjnymi, gdyż wszystkie systemy operacyjne obsługują technologię RAID.",
                        "RAID sprzętowy pozwala na bezpośredni start systemu z macierzy dyskowej."
                    ],
                    "values": [false, true, false, true]
                },
                {
                    "question": "W systemie windows 2008 na 5 dyskach za pomocą systemu operacyjnego został założony RAID5 Po pewnym czasie podczas pracy systemu 2 dyski uległy uszkodzeniu.",
                    "answers": [
                        "jeśli uszkodzone dyski zostaną wymienione na nowe to po ponownym uruchomieniu systemu dane zostaną automatycznie odzyskane",
                        "odzyskiwanie danych będzie przezroczyste dla użytkowników jeśli dyski są typu hot swap",
                        "w systemie Windows 2008 nie można użyć RAID5",
                        "dane będzie można odzyskać tylko z archiwizacji, a nie z RAID5"
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Jakie właściwości ma programowy RAID5 na systemie operacyjnym Windows 2008?",
                    "answers": [
                        "można go założyć na pięciu dyskach",
                        "umożliwia lepsze wykorzystanie przestrzeni na dyskach niż wolumen paskowany",
                        "zapewnia bezawaryjną pracę systemu",
                        "pozwala uniknąć fragmentacji systemu plików"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Konfiguracja RAID2:",
                    "answers": [
                        "jest rozszerzeniem architektury RAID0",
                        "dane są zapisywane na kolejnych dyskach macierzy bit po bicie",
                        "cechuje się dużą wydajnością przy operacjach odczytu",
                        "jest często stosowana w macierzach dyskowych"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Dyski typu podstawowego (ang. basic disks) pozwalają na:",
                    "answers": [
                        "oznaczenie partycji jako aktywnej",
                        "rozszerzenie woluminów prostych (ang. simple volume)",
                        "tworzenie partycji podstawowej",
                        "tworzenie woluminów RAID5"
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Dla których wolumenów prawdopodobieństwo utraty danych jest mniejsze niż dla wolumenu łączonego (spanned volume):",
                    "answers": [
                        "mirrored volume",
                        "striped volume",
                        "simple volume",
                        "RAID5"
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Jakie właściwości ma programowy RAID5 na systemie operacyjnym Windows 2008?",
                    "answers": [
                        "zapewnia bezawaryjną pracę systemu",
                        "chroni system przed awarią tylko jednego dysku",
                        "pozwala uniknąć fragmentacji systemu plików",
                        "umożliwia lepsze wykorzystanie przestrzeni na dyskach niż wolumen paskowany"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "W systemie Ubuntu, zakładając, że pliki blokowe /dev/sdb1 i /dev/sdb2 reprezentują partycje o rozmiarze 50MB, bezpośrednio po utworzeniu woluminu /dev/md0 poleceniem:\n`mdadm -create -verbose /dev/md0 --level linear --raid-devices=2 /dev/sdb1 /dev/sdb2`:",
                    "answers": [
                        "wolumin /dev/md0 będzie miał wielkość 100MB",
                        "wolumin /dev/md0 będzie miał wielkość 50MB",
                        "wolumin /dev/md0 będzie można zamontować poleceniem mount /dev/md0 /mnt",
                        "uszkodzenie dokładnie jednego spośród urządzeń /dev/sdb1 oraz /dev/sdb2 może spowodować utratę danych w woluminie /dev/md0"
                    ],
                    "values": [true, false, false, true]
                },
                {
                    "question": "RAID5 może składać się z następującej ilości dysków:",
                    "answers": [
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    "values": [false, true, true, true]
                },
                {
                    "question": "RAID inaczej zwanym lustrzanym (mirroringiem) to:",
                    "answers": [
                        "RAID1",
                        "RAID2",
                        "RAID3",
                        "RAID5"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Jakie polecenie pozwoli na rozpoczęcie procedury tworzenia partycji:",
                    "answers": [
                        "fdisk /dev/hda",
                        "mkdir /dev/sda",
                        "fdisk /dev/sdb",
                        "mdadd /dev/sdb"
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Jaka ilość dysków jest wystarczająca, aby zastosować RAID 5:",
                    "answers": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "values": [false, false, true, true]
                },
                {
                    "question": "Mając do dyspozycji 3 identyczne dyski twarde można stworzyć macierz RAID w konfiguracji:",
                    "answers": [
                        "RAID 0",
                        "RAID 5",
                        "RAID 6",
                        "RAID 10"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Trzy dyski zostały połączone w macierz RAID 0.",
                    "answers": [
                        "Łączna przestrzeń dyskowa jest równa sumie przestrzeni, każdego z dysków",
                        "Łączna przestrzeń dyskowa jest równa potrojonej przestrzeni dyskowej najmniejszego dysku",
                        "Szybkość jest równa potrojonej szybkości najwolniejszego z dysków",
                        "Szybkość jest równa szybkości najwolniejszego z dysków"
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Administrator podłączył do komputera dwa dyski twarde o pojemności 200GB każdy i połączył je w macierz RAID 1. Do komputera nie zostały podłączone żadne inne dyski. Które z poniższych twierdzeń są prawidłowe?",
                    "answers": [
                        "Całkowita pojemność partycji dostępnych w systemie nie przekracza 200GB.",
                        "Rozwiązanie takie zapewnia o wiele większą prędkość odczytu i zapisu danych niż macierz RAID 0.",
                        "Rozwiązanie takie zapewnia o wiele większe bezpieczeństwo danych niż macierz RAID 0.",
                        "W przypadku awarii jednego dysku użytkownik straci wszystkie swoje dane"
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Zaznacz zdania prawdziwe dotyczące sprzętowej macierzy RAID:",
                    "answers": [
                        "Macierz jest zupełnie przezroczysta, przez co z punktu widzenia Systemu Operacyjnego zachowuje się ona jak każdy inny dysk twardy",
                        "mniejsza wydajność poprzez zwiększenie obciążenia CPU",
                        "Minimalna liczba dysków potrzebna do stworzenia macierzy to 2",
                        "Sprzętowa macierz RAID zawsze umożliwia przywrócenie danych w razie awarii jednego z dysków"
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Zaznacz zdania prawdziwe dotyczące programowej macierzy RAID:",
                    "answers": [
                        "Macierz jest zupełnie przezroczysta, przez co z punktu widzenia Systemu Operacyjnego zachowuje się ona jak każdy inny dysk twardy",
                        "mniejsza wydajność poprzez zwiększenie obciążenia CPU",
                        "Minimalna liczba dysków potrzebna do stworzenia macierzy to 2",
                        "Programowa macierz RAID zawsze umożliwia przywrócenie danych w razie awarii jednego z dysków"
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Woluminy liniowe w katalogu dev oznaczone są jako:",
                    "answers": [
                        "md0, md1...",
                        "ma0, ma1, ... mb0, mb1...",
                        "raid0, raid1,...",
                        "rda0, rda1...., rdb0, rdb1...."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Która z aplikacji umożliwia stworzenie partycji na twardym dysku?",
                    "answers": [
                        "/etc/fstab",
                        "/sbin/fdisk",
                        "/sbin/cfdisk",
                        "/etc/mtab"
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Które z wymienionych rodzajów macierzy RAID zapewniają mirroring:",
                    "answers": [
                        "RAID 0",
                        "RAID 1",
                        "RAID 5",
                        "RAID 10"
                    ],
                    "values": [false, true, false, true]
                },
                {
                    "question": "Które z wymienionych poleceń umożliwia zarządzanie macierzami RAID w systemie GNU/Linux:",
                    "answers": [
                        "hdparm",
                        "mdadm",
                        "fdisk",
                        "parted"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Celem wyłączenia automatycznego montowania urządzenia cdrom w systemie Linux należy:",
                    "answers": [
                        "Odpowiednio zmodyfikować plik '/etc/fstab'.",
                        "Wykonać polecenie 'nmount -n cdrom'.",
                        "Wykonać polecenie 'nmount cdrom'.",
                        "Odpowiednio zmodyfikować plik /etc/amount."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Polecenie 'fdisk' w systemie Linux można wykorzystać do:",
                    "answers": [
                        "tworzenia partycji.",
                        "wypisania informacji o dysku.",
                        "montowania dysku.",
                        "tworzenia kopii zapasowej danych."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Wskaż poprawne zdania dotyczące RAID5 w systemie Linux:",
                    "answers": [
                        "Do utworzenia RAID5 potrzebne są co najmniej dwie partycje.",
                        "Do utworzenia RAID5 można użyć maksymalnie trzech partycji.",
                        "Do odtworzenia danych z uszkodzonej partycji zawsze wykorzystywana jest jedna, specjalnie do tego przygotowanej partycja.",
                        "RAID5 jest całkowicie odporny na uszkodzenie jednej partycji (dane można w pełni odtworzyć)."
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "Wskaż poprawne zdania dotyczące RAID1 (mirror) w systemie Linux.",
                    "answers": [
                        "Całkowita pojemność partycji połączonych w RAID1 jest taka jak pojemność najmniejszej z tych partycji.",
                        "Do utworzenia RAID1 można wykorzystać trzy partycje.",
                        "Zastosowanie RAID1 pozwala na zwiększenie szybkości zapisu i odczytu danych.",
                        "RAID1 jest całkowicie odporny na uszkodzenie jednej partycji (dane można w pełni odtworzyć)."
                    ],
                    "values": [true, true, false, true]
                },
                {
                    "question": "Które z poniższych funkcji macierzy RAID zwiększają bezpieczeństwo danych?",
                    "answers": [
                        "mirroring (lustrzane odbicie)",
                        "stripping (paskowanie)",
                        "macierze liniowe",
                        "kontrola parzystości"
                    ],
                    "values": [true, false, false, true]
                },
                {
                    "question": "Trzy dyski, każdy o pojemności 1TB, połączyliśmy w macierz RAID5. Jaką pojemnośd ma uzyskany wolumien?",
                    "answers": [
                        "0.5 TB",
                        "1 TB",
                        "2 TB",
                        "3 TB"
                    ],
                    "values": [false, false, true, false]
                },
                {
                    "question": "Zaznacz poprawną odpowiedz dotyczącą RAID:",
                    "answers": [
                        "RAID pozwala łączyć ze sobą dyski celem stworzenia pamięci masowej o dużej pojemności I niezawodności",
                        "macierz RAID można stworzyć za pomocą sprzętowych kontrolerów oraz systemowych narzędzi",
                        "do utworzenia RAID5 wystarczą dwa dyski",
                        "nie da stworzyć się macierzy dyskowej z dwóch dysków"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Skrót RAID oznacza:",
                    "answers": [
                        "Redundant Array of Independent Disks",
                        "Redundant Array of Independent Drives",
                        "Remote Array of Independent Disks",
                        "Reserved Array of Independent Disks"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Macierz RAID 0 używana jest do:",
                    "answers": [
                        "Poprawy wydajności zapisu",
                        "Zabezpieczeniem danych przed awarią dysku kosztem dostępnego miejsca",
                        "Zabezpieczeniem danych przed awarią dysku kosztem czasu dostępu",
                        "Skrócenia czasu odbudowy macierzy"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Co jest zawartością pliku /proc/mdstat?",
                    "answers": [
                        "Konfiguracje RAID",
                        "Aktualny stan macierzy",
                        "Standardowe procery obsługi RAID",
                        "Listę uruchomionych procesów"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Aby połączyć dwa wolumeny w wolumen liniowy użyjemy instrukcji:",
                    "answers": [
                        "mdadm -create -verbose /dev/md0/ --level linear -raid-dervices=2 /dev/sdb1 /dev/sdb2",
                        "Mdfs -create -verbose /dev/md0/ --level linear -raid-dervices=2 /dev/sdb1 /dev/sdb2",
                        "mdadm -create -verbose /dev/md0/ -level=raid1 -raid-dervices=2 /dev/sdb1 /dev/sdb2",
                        "mdadm -new -verbose /dev/md0/ -level linear -raid-dervices=2 /dev/sdb1 /dev/sdb2"
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Zaznacz poprawne twierdzenia na temat RAID 0:",
                    "answers": [
                        "Zapewnia ochronę przed utratą danych",
                        "Zapewnia zwiększoną wydajność zapisu",
                        "Zapewnia zwiększoną wydajność odczytu",
                        "Do jej stworzenia potrzebne są minimalnie 3 dyski"
                    ],
                    "values": [false, true, true, false]
                },
                {
                    "question": "Na komputerze została stworzona macierz RAID 1 złożona z 3 partycji sda1, sdb1 i sdc1, wszystkie dyski pracuja poprawnie i nie są uszkodzone, co się stanie w momencie wywołania komendy: 'mdadm /dev/md0 remove /dev/sda1'",
                    "answers": [
                        "Partycja sda1 zostanie usunięta z macierzy md0",
                        "Nic",
                        "Partycja sda1 zostanie usunięta z macierzy jeśli przedtem wywołano komende 'mdadm --fail /dev/md0 /dev/sda1'",
                        "Macierz md0 zostanie usunięta"
                    ],
                    "values": [false, false, true, false]
                },
                {
                    "question": "Wskaż typy macierzy dyskowych, które do ochrony danych wykorzystują sumy kontrolne",
                    "answers": [
                        "RAID 0",
                        "RAID 1",
                        "RAID 3",
                        "RAID 5"
                    ],
                    "values": [false, false, true, true]
                },
                {
                    "question": "Zaznacz prawdziwe zdania dotyczące RAID5.",
                    "answers": [
                        "RAID5 polega na tworzeniu kopi danych na rożnych dyskach (mirroring)",
                        "Macierz składa się z 5 lub więcej dysków",
                        "Macierz składająca się z n dysków jest odporna na awarię n - 2 dysków",
                        "Wszystkie powyższe odpowiedzi są nie poprawne"
                    ],
                    "values": [false, false, false, true]
                },
                {
                    "question": "W maszynie zainstalowana jest macierz RAID. Jeden z dysków podlega awarii. Zaznacz zdania prawdziwe.",
                    "answers": [
                        "Dla macierzy RAID 5 po wymianie uszkodzonego dysku dane zostaną odbudowane.",
                        "Macierz RAID 1 przestanie funkcjonować.",
                        "Jeśli zainstalowane były 3 dyski, macierz RAID 1 pozwoli na dalsza pracę bez utraty danych.",
                        "Macierz RAID 5 nie wymaga wymiany dysku na nowy przed wznowieniem pracy."
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Wpisanie polecenia fdisk /dev/hda oraz p spowoduje:",
                    "answers": [
                        "sformatowanie dysku hda",
                        "wypisanie listy partycji istniejących na dysku hda",
                        "utworzenie na dysku hda partycji zajmującej całą dostępną przestrzeń",
                        "uruchomienie systemu operacyjnego z dysku hda"
                    ],
                    "values": [false, true, false, false]
                },
                {
                    "question": "Wskaż cechy RAID 5:",
                    "answers": [
                        "bity parzystości są zapisywane na specjalnie do tego przeznaczonym dysku",
                        "szybkość dostępu do danych nie ulega zmianie w wypadku awarii jednego z dysków",
                        "gwarantuje stuprocentowe bezpieczeństwo danych przy awarii jednego dysku",
                        "jego zaletą jest szybki odczyt, jego wada to powolny zapis"
                    ],
                    "values": [false, false, true, true]
                },
                {
                    "question": "Co odróżnia macierze RAID programowe od sprzętowych?",
                    "answers": [
                        "Obsługą macierzy programowych zajmuje się odpowiednie oprogramowanie, np. mdadm.",
                        "Macierze programowe mają większą wydajność w porównaniu do sprzętowych.",
                        "Problem awarii fizycznego nośnika w żaden sposób nie dotyczy macierzy programowych.",
                        "W macierzach programowych problem awarii fizycznego dotyczy jedynie poziomu RAID 0."
                    ],
                    "values": [true, false, false, false]
                },
                {
                    "question": "Wykonywanie jakich czynności związanych z macierzami RAID umożliwia polecenie mdadm w systemach z rodziny Linux?",
                    "answers": [
                        "Podłączanie nowych urządzeń do macierzy.",
                        "Generowanie zawartości plików konfiguracyjnych macierzy.",
                        "Sprawdzanie statusu macierzy.",
                        "Programowe symulowanie awarii w macierzy."
                    ],
                    "values": [true, true, true, true]
                },
                {
                    "question": "Polecenie mount umożliwia: Wskaż wszystkie poprawne odpowiedzi",
                    "answers": [
                        "Zamontowanie wszystkich partycji wymienionych w fstab",
                        "Odmontowanie wszystkich partycji wymienionych w fstab",
                        "Odmontowanie partycji",
                        "Zamontowanie partycji"
                    ],
                    "values": [true, false, false, true]
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