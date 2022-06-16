- [«Зумовлені константи](zip.constants.md)
- [ZipArchive »](class.ziparchive.md)

- [PHP Manual](index.md)
- [Zip](book.zip.md)
- Приклади

# Приклади

**Приклад #1 Створення Zip-архіву**

` <?php$zip u003d new ZipArchive();$filename u003d "./test112.zip";if ($zip->open($filename, ZipArchive::CREATE)!u003du003dTRUE) {     exit("Неможливо| <$filename>
");}$zip->addFromString("testfilephp.txt" . time(), "#1 Це тестовий рядок додається в якості testfilephp.txt.
");$zip->addFromString("testfilephp2.txt" . time(), "#2 Це тестовий рядок додається в якости testfilephp2.txt.
");$zip->addFile($thisdir . "/too.php","/testfromfile.php");echo "numfiles: " . $zip->numFiles . "
";echo "status:" . $zip->status . "
";$zip->close();?> `

**Приклад #2 Зібрати та відобразити докладну інформацію про архів**

` <?php$za u003d new ZipArchive();$za->open('test_with_comment.zip');print_r($za);var_dump($za);echo "numFiles: " . $za->numFiles . "
";echo "status: " . $za->status  . "
";echo "statusSys: " . $za->statusSys . "
";echo "filename: " . $za->filename . "
";echo "comment: " . $za->comment . "
";for ($iu003d0; $i<$za->numFiles;$i++) {    echo "index: $i
";    print_r($za->statIndex($i));}echo "numFile:" . $za->numFiles . "
";?> `

**Приклад #3 Використання обгортки потоку Zip, читання метаінформації
OpenOffice**

` <?php$reader u003d new XMLReader();$reader->open('zip://' . dirname(__FILE__) . '/test.odt#meta.xml');$odt_meta u003d array();while ($reader->read()) {   if ($reader->nodeType u003du003d XMLREADER::ELEMENT) {         $elm u003d $reader->name; } else {        if ($reader->nodeType u003du003d XMLREADER::END_ELEMENT && $reader->name u003du003d 'office:meta') {         | }        if (!trim($reader->value)) {            continue; }        $odt_meta[$elm] u003d $reader->value; }}print_r($odt_meta);?> `

Цей приклад використовує стару версію API (PHP 4), він відкриває
ZIP-архів читає кожен файл в архіві і виводить його вміст. Архів
`test2.zip`, використаний у цьому прикладі, є одним із тестових
архівів вихідного дистрибутива ZZIPlib

**Приклад #4 Приклад використання Zip**

` <?php$zip u003d zip_open("/tmp/test2.zip");if ($zip) {    while ($zip_entry u003d zip_read($zip)) {        echo "              zip_entry_name($zip_entry) . "
";        echo "Вихідний розмір:  " . zip_entry_filesize($zip_entry) . "
";        echo "Стиснутий розмір:    " . zip_entry_compressedsize($zip_entry) . "
";        echo "Метод стиснення:      " . zip_entry_compressionmethod($zip_entry) . "
";        if (zip_entry_open($zip, $zip_entry, "r")) {            echo "Вміст файлу:
";             $buf u003d zip_entry_read($zip_entry, zip_entry_filesize($zip_entry));             echo "$f
";             zip_entry_close($zip_entry);        }        echo "
";    }    zip_close($zip);}?> `
