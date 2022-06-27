- [«Зумовлені константи](rar.constants.md)
- [Rar »] (ref.rar.md)

- [PHP Manual](index.md)
- [Rar](book.rar.md)
- Приклади

# Приклади

Також дивіться приклади за посиланням [`rar://`wrapper](wrappers.rar.md).

**Приклад #1 Декомпресія на льоту**

` <?phpif (!array_key_exists("i", $_GET)||| !is_numeric($_GET["i"]))    die("Індекс не вказаний або не числовий");$index u003d (ET) "i"];$arch u003d RarArchive::open("example.rar");if ($arch u003du003du003d FALSE)    die("Неможливо відкрити example.rar");$entries u003d $arch->getEntries() ;if ($entries u003du003du003du003dFALSE)   die("Неможливо одержати записи");if (!array_key_exists($index, $entries))    die("Нет такого індексу:$$index| index]->getName(); //Кодування UTF-8$filesize u003d $entries[$index]->getUnpackedSize();/* Ви можете тут перевірити константу HTTP_IF_MODIFIED_SINCE і порівняти з * $ent> Також можливо відіслати заголовок * "Last modified" */$fp u003d $entries[$index]->getStream();if ($fp u003du003du003d FALSE)    die("Неможливо відкрити і| ;$arch->close(); // Більше не потрібний. Потік є незалежнимfunction detectUserAgent() {   if (!array_key_exists('HTTP_USER_AGENT',$$SERVER))         return "Other"; $uasu003du003d$$SERVER['HTTP_USER_AGENT']; if (preg_match("@Opera/@", $uas))       return "Opera"; if (preg_match("@Firefox/@", $uas))       return "Firefox"; if (preg_match("@Chrome/@", $uas))       return "Chrome"; if (preg_match("@MSIE ([0-9.]+);@", $uas, $matches)) {        if (((float)$matches[1]) >u003d 7.0)             }   return "Other";}/* * Діють 3 опції: * - Для FF і Opera, з підтримкою RFC 2231, використовується этот формат. * - Для IE и Chrome, используется attwithfnrawpctenclong *   (http://greenbytes.de/tech/tc2231/#attwithfnrawpctenclong) * - Для других браузеров, перекодируется в ISO-8859-1, если возможно */$formatRFC2231 u003d 'Content- Disposition: attachment; filename*u003dUTF-8\'\'%s';$formatDef u003d 'Content-Disposition: attachment; filenameu003d"%s" '; $format u003d $formatRFC2231; break; case "IE":    case "Chrome":        $orfilename u003d rawurlencode($orfilename); $format u003d $formatDef; break; default:8|-8,8 $formatu003du003d$$formatDef;}header(sprintf($format,$orfilename)); /octet-stream";header("Content-Type: $contentType");header("Content-Transfer-Encoding: binary");header("Content-Length: $filesize");if ($_SERVER['REQUEST_METHOD '] u003du003d "HEAD")   die();while(!feof($fp)) {   $s u003d @fread($fp, 8192); if ($s u003du003du003d false)         break; //тут безкорисно надсилати повідомлення про помилки   echo $s;}?> `

Цей приклад відкриває RAR-файл і надає запитаний файл поза
RAR-архів для завантаження клієнтом.

**Приклад #2 Приклад вилучення переліку файлів та директорій з
RAR-архіву**

` <?php$rar_file u003d rar_open('example.rar') or die("Неможливо відкрити RAR архів");$entries u003d rar_list($rar_file);foreach ($entries as $entry) {    . $entry->getName() . "
";   echo 'Упакований розмір: ' . $entry->getPackedSize() . "
";    echo 'Розпакований розмір: ' . $entry->getUnpackedSize() . "
";   $entry->extract('/dir/extract/to/');}rar_close($rar_file);?> `

Цей приклад відкриває RAR-файл та витягує кожен об'єкт у вказану
директорію.
