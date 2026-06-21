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
        },
        {
            "name": "Zarządzanie przestrzenią dyskową (LIN LVM)",
            "questions": [
                {
                    "question": "W kontekście architektury LVM (Logical Volume Manager), z jakich podstawowych warstw/elementów składa się ten mechanizm? Wskaż poprawne dopasowania:",
                    "answers": [
                        "PV (Physical Volume) – fizyczne nośniki danych (rzeczywiste dyski lub partycje).",
                        "VG (Volume Group) – logiczna grupa wolumenów zbudowana z jednego lub więcej dysków fizycznych (PV).",
                        "LV (Logical Volume) – wolumeny logiczne, widoczne dla systemu jako partycje, na których tworzony jest system plików.",
                        "PE (Primary Extent) – główny sektor rozruchowy partycji LVM wykorzystywany podczas startu systemu."
                    ],
                    "values": [true, true, true, false]
                },
                {
                    "question": "Wskaż prawidłowe zalety korzystania z LVM w porównaniu do tradycyjnego, statycznego partycjonowania dysków:",
                    "answers": [
                        "Możliwość dynamicznej zmiany rozmiaru partycji w locie, często bez przerywania pracy systemu.",
                        "Możliwość łączenia wielu fizycznych dysków twardych w jedną, dużą przestrzeń widoczną dla użytkownika.",
                        "LVM samodzielnie i automatycznie wykonuje kopie zapasowe danych na zewnętrzne serwery w chmurze.",
                        "Łatwa migracja danych na żywo pomiędzy dyskami bez odmontowywania systemów plików."
                    ],
                    "values": [true, true, false, true]
                },
                {
                    "question": "Zaznacz poprawne kroki niezbędne do utworzenia i zamontowania nowego, gotowego do pracy wolumenu logicznego (od samego początku):",
                    "answers": [
                        "Kolejność poleceń: `pvcreate` -> `vgcreate` -> `lvcreate` -> `mkfs` -> `mount`.",
                        "Kolejność poleceń: `lvcreate` -> `vgcreate` -> `pvcreate` -> `mount` -> `mkfs`.",
                        "Przed utworzeniem grupy wolumenów (VG), dyski fizyczne muszą zostać zainicjowane jako Physical Volumes (PV).",
                        "Domyślnie polecenie `lvcreate` od razu formatuje utworzony wolumen w systemie plików ext4, więc polecenie `mkfs` można pominąć."
                    ],
                    "values": [true, false, true, false]
                },
                {
                    "question": "Podczas zmiany rozmiaru wolumenów logicznych (LV) oraz systemów plików w systemie Linux stosuje się określone praktyki. Wskaż zdania prawdziwe:",
                    "answers": [
                        "Użycie parametru `-r` (lub `--resizefs`) w poleceniu `lvextend` pozwala na jednoczesne powiększenie wolumenu i automatyczne rozszerzenie systemu plików.",
                        "Powiększenie zamontowanego systemu plików ext4 na powiększonym wcześniej LV jest niemożliwe i wymaga restartu maszyny.",
                        "Zmniejszanie wolumenu (`lvreduce`) niesie ryzyko uszkodzenia danych, dlatego najpierw należy odmontować system plików i go zmniejszyć (np. `resize2fs`).",
                        "Polecenie `lvextend -l +100%FREE` powiększy wolumen logiczny o całe dostępne wolne miejsce w grupie wolumenów (VG)."
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Czym są migawki (Snapshots) w LVM i jak działają?",
                    "answers": [
                        "Są to fizyczne, pełne kopie zapasowe 1:1 całego wolumenu kopiowane na oddzielny, specjalnie przypisany dysk.",
                        "Zamrażają stan wolumenu z danego momentu; bazują na mechanizmie Copy-on-Write (kopiowanie przy zapisie) – zapisywane są w nich tylko zrobione zmiany.",
                        "Migawki w LVM mogą zajmować znacznie mniej miejsca niż docelowy wolumen logiczny, chyba że cała zawartość oryginalnego wolumenu zostanie zmieniona.",
                        "Służą do bezpiecznego testowania zmian (np. aktualizacji). Zmiany z migawki można odrzucić lub przywrócić z niej stan używając `lvconvert --merge`."
                    ],
                    "values": [false, true, true, true]
                },
                {
                    "question": "Jak działa mechanizm Thin Provisioning (pule cienkiej alokacji) w środowisku LVM?",
                    "answers": [
                        "Pozwala na utworzenie wolumenów logicznych o deklarowanym rozmiarze większym niż faktycznie dostępna fizyczna pamięć (tzw. over-provisioning).",
                        "Zajmuje całe deklarowane miejsce na dysku fizycznym od razu przy tworzeniu wolumenu, aby zagwarantować bezawaryjność.",
                        "Fizyczna przestrzeń dyskowa jest alokowana dopiero wtedy, gdy aplikacje i użytkownicy faktycznie zapisują nowe dane na wolumenie.",
                        "Wymaga monitorowania (np. za pomocą daemona `dmeventd`), aby ostrzec administratora, jeśli pula zbliża się do faktycznego wyczerpania miejsca."
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "W jaki sposób w systemie Linux monitorować i sprawdzać stan infrastruktury LVM? Wskaż przydatne, wbudowane polecenia:",
                    "answers": [
                        "Polecenia `pvs`, `vgs`, `lvs` pozwalają na wyświetlenie skróconych informacji odpowiednio o dyskach fizycznych, grupach i wolumenach.",
                        "Polecenie `fdisk -lvm` służy do bezpośredniego tworzenia nowych migawek (snapshots) w trybie graficznym.",
                        "Polecenia `pvdisplay`, `vgdisplay`, `lvdisplay` wypisują bardzo szczegółowe informacje (np. ilość Extentów, UUID, ścieżki dostępu).",
                        "Stan monitorowania puli thin provisioning można wymusić lub obserwować używając np. daemona `dmeventd` i systemctl (`lvm2-monitor`)."
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Zdecydowałeś się wymienić w serwerze mały dysk na większy bez przerywania działania usług. Jak w LVM wygląda proces bezpiecznej migracji danych w locie?",
                    "answers": [
                        "Migracja działań między dyskami w obrębie jednej grupy (VG) na żywo jest niemożliwa i wymaga uruchomienia systemu z pendrive'a (LiveCD).",
                        "Nowy dysk należy najpierw dołączyć do grupy VG (za pomocą `vgextend`).",
                        "Używając polecenia `pvmove /dev/stary_dysk /dev/nowy_dysk` system płynnie i na żywo przeniesie fizyczne ekstenty z jednego urządzenia na drugie.",
                        "Po udanym przeniesieniu danych, stary dysk należy usunąć z grupy wolumenów za pomocą polecenia `vgreduce`."
                    ],
                    "values": [false, true, true, true]
                },
                {
                    "question": "Wskaż poprawne dopasowania komend LVM do ich funkcji operacyjnych na serwerze:",
                    "answers": [
                        "`vgcreate lab_vg /dev/sdc /dev/sdd` - utworzy nową grupę o nazwie 'lab_vg' składającą się z dwóch dysków.",
                        "`lvcreate --type thin-pool -L 5G -n my_pool lab_vg` - utworzy na grupie 'lab_vg' wolumen będący pulą na cienką alokację (thin pool) o rozmiarze 5 GB.",
                        "`lvcreate -s -n backup_snap -L 1G /dev/lab_vg/data_lv` - usunie wolumen 'data_lv' i wszystkie jego migawki z dysku w sposób bezpieczny.",
                        "`vgremove` - odmontuje partycje i usunie wszystkie utworzone migawki w zadanym systemie w odstępach 5 minut."
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Jeżeli po utworzeniu migawki danych (snapshot) dokonano niepożądanych zmian w głównym pliku na oryginalnym wolumenie (np. usunięto ważny katalog), to co nastąpi po wydaniu polecenia `lvconvert --merge /dev/VG/snapshot_name`?",
                    "answers": [
                        "Wolumen wróci do stanu dokładnie z momentu założenia migawki; omyłkowo usunięty katalog zostanie przywrócony.",
                        "Spowoduje to bezpowrotną utratę wszystkich danych (formatowanie dysku do zera).",
                        "Po złączeniu (merge) stan powraca do tego sprzed utworzenia migawki, a sama migawka jest automatycznie usuwana przez LVM.",
                        "Przed samym złączeniem należy odmontować oryginalny wolumen logiczny (np. używając `umount`), inaczej przywrócenie może się nie powieść od razu."
                    ],
                    "values": [true, false, true, true]
                },
                {
                    "question": "Zaznacz wszystkie POPRAWNIE sformułowane polecenia z zakresu zarządzania LVM (uwaga na składnię, kolejność parametrów i literówki):",
                    "answers": [
                        "`pvcreate /dev/sdb1 /dev/sdc1`",
                        "`vgextend data_vg /dev/sdd`",
                        "`lvcreate -L 50G -n backup_lv system_vg`",
                        "`lvextend -l +100%FREE /dev/mapper/vg-lv`",
                        "`vgcreate /dev/sdb1 my_vg`",
                        "`lvcreate -n 50G -L backup_lv system_vg`",
                        "`pvremove data_vg`",
                        "`lvresize -size +10G /dev/system_vg/root_lv`"
                    ],
                    "values": [true, true, true, true, false, false, false, false]
                },
                {
                    "question": "Wskaż prawidłowo zbudowane komendy dotyczące tworzenia migawek (snapshots) oraz cienkich pul (thin provisioning):",
                    "answers": [
                        "`lvcreate -s -n my_snap -L 5G /dev/vg01/data_lv`",
                        "`lvcreate --type thin-pool -L 100G -n pool01 vg01`",
                        "`lvconvert --merge /dev/vg01/my_snap`",
                        "`lvcreate -V 10G --thin -n thin_vol vg01/pool01`",
                        "`lvconvert --merge vg01`",
                        "`lvcreate --type thin-pool -n pool01 -L 100G /dev/sdb1`",
                        "`lvcreate -V 10G -t thin -n thin_vol vg01`",
                        "`lvremove -f /dev/vg01`"
                    ],
                    "values": [true, true, true, true, false, false, false, false]
                },
                {
                    "question": "Zaznacz poprawne komendy weryfikujące i wyświetlające stan elementów LVM. Które zapisy zadziałają bez rzucania błędów składniowych?",
                    "answers": [
                        "`pvs -o pv_name,vg_name,pv_size`",
                        "`pvmove /dev/sdb1 /dev/sdc1`",
                        "`vgreduce my_vg /dev/sdb1`",
                        "`lvchange -a y /dev/my_vg/my_lv`",
                        "`pvs --output pv_name vg_name`",
                        "`pvmove my_vg /dev/sdc1`",
                        "`vgreduce /dev/sdb1 my_vg`",
                        "`lvchange --active yes /dev/my_vg/my_lv`"
                    ],
                    "values": [true, true, true, true, false, false, false, false]
                },
                {
                    "question": "Jak poprawnie i bezpiecznie rozszerzyć wolumen logiczny ORAZ znajdujący się na nim system plików ext4? (Zaznacz prawidłowe składnie lub ciągi poleceń)",
                    "answers": [
                        "Jako jedno polecenie: `lvextend -r -L +10G /dev/vg_data/lv_data`",
                        "Jako dwa polecenia po kolei: `lvextend -L +10G /dev/vg_data/lv_data` a następnie `resize2fs /dev/vg_data/lv_data`",
                        "Jako dwa polecenia po kolei: `lvextend -L +10G /dev/vg_data/lv_data` a następnie `mkfs.ext4 /dev/vg_data/lv_data`",
                        "Jako dwa polecenia po kolei: `resize2fs /dev/vg_data/lv_data` a następnie `lvextend -L +10G /dev/vg_data/lv_data`"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Chcesz całkowicie usunąć istniejącą infrastrukturę LVM (od warstwy najwyższej do najniższej). Które komendy są poprawne SKŁADNIOWO dla tego procesu?",
                    "answers": [
                        "`lvremove /dev/vg01/lv01`",
                        "`vgremove vg01`",
                        "`pvremove /dev/sdb1 /dev/sdc1`",
                        "`lvremove vg01`",
                        "`vgremove /dev/sdb1`",
                        "`rm -rf /dev/vg01/lv01`"
                    ],
                    "values": [true, true, true, false, false, false]
                },
                {
                    "question": "Wskaż poprawnie sformułowane polecenia związane z monitorowaniem zajętości przestrzeni w cienkich wolumenach (Thin Pool):",
                    "answers": [
                        "`lvs /dev/lab_vg/lv_thin -o +seg_monitor,data_percent`",
                        "`systemctl enable lvm2-monitor`",
                        "`lvs --monitor thin_pool`",
                        "`systemctl start dmeventd-monitor`"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Zaznacz wszystkie poprawne sposoby wywołania poleceń informacyjnych o infrastrukturze:",
                    "answers": [
                        "`vgdisplay -v vg01`",
                        "`lvdisplay /dev/vg01/lv_data`",
                        "`pvdisplay /dev/sda2`",
                        "`vgdisplay /dev/sda2`",
                        "`lvdisplay vg01`",
                        "`pvdisplay vg01`"
                    ],
                    "values": [true, true, true, false, false, false]
                },
                {
                    "question": "Które z poniższych poleceń poprawnie utworzy migawkę (snapshot) o określonym rozmiarze dla istniejącego wolumenu?",
                    "answers": [
                        "`lvcreate -s -n snap01 -L 1G /dev/vg01/lv_data`",
                        "`lvcreate --size 1G --snapshot --name snap01 /dev/vg01/lv_data`",
                        "`lvcreate -s -L 1G /dev/vg01/lv_data /dev/vg01/snap01`",
                        "`lvcreate -s snap01 -L 1G /dev/vg01/lv_data`"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "W środowisku LVM można posługiwać się konkretnymi jednostkami (B, M, G) lub jednostkami proporcjonalnymi (np. procenty tzw. Extentów). Jak prawidłowo użyć tych flag?",
                    "answers": [
                        "`lvcreate -l 100%FREE -n my_lv vg01`",
                        "`lvextend -l +50%FREE /dev/vg01/my_lv`",
                        "`lvcreate -L 100%FREE -n my_lv vg01`",
                        "`lvextend -L +50%FREE /dev/vg01/my_lv`"
                    ],
                    "values": [true, true, false, false]
                },
                {
                    "question": "Wskaż kolejne poprawnie sformułowane polecenia, które powiodą się na serwerze Linux (zarządzanie i modyfikacja nazw/rozmiarów):",
                    "answers": [
                        "`lvrename vg01 old_name new_name`",
                        "`vgrename old_vg new_vg`",
                        "`lvreduce -L -5G /dev/vg01/lv01`",
                        "`lvrename old_name new_name vg01`",
                        "`vgrename /dev/sdb1 new_vg`",
                        "`lvreduce -l -5GB /dev/vg01/lv01`",
                        "`vgchange -a false vg01`"
                    ],
                    "values": [true, true, true, false, false, false, false]
                }
            ]
        }
    ]
};