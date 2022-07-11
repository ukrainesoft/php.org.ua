- [«
ZipArchive::setExternalAttributesIndex](ziparchive.setexternalattributesindex.md)
- [ZipArchive::setMtimeIndex »](ziparchive.setmtimeindex.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Встановлення зовнішніх атрибутів запису, заданого на ім'я

# ZipArchive::setExternalAttributesName

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8, PECL zip \>u003d 1.12.4)

ZipArchive::setExternalAttributesName — Встановлення зовнішніх атрибутів
запису, заданого на ім'я

### Опис

public **ZipArchive::setExternalAttributesName**(
string `$name`,
int `$opsys`,
int `$attr`,
int `$flags` u003d 0
): bool

Встановлення зовнішніх атрибутів запису, заданого на ім'я.

### Список параметрів

`name`
Назва запису.

`opsys`
Код операційної системи визначається однією з констант
ZipArchive::OPSYS\_.

`attr`
Зовнішні атрибути. Значення залежить від операційної системи.

`flags`
Необов'язкові прапори. Нині немає.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

У цьому прикладі відкривається файл архіву ZIP `test.zip` та до нього
додається файл `test.txt` з правами Unix як зовнішніх атрибутів.

**Приклад #1 Стиснення файлу з його правами Unix**

` <?php$zip u003d new ZipArchive();$stat u003d stat($filenameu003d'test.txt');if (is_array($stat) && $zip->open('test.zip', ZipArchive:: CREATE) u003du003du003d TRUE) {    $zip->addFile($filename); $zip->setExternalAttributesName($filename, ZipArchive::OPSYS_UNIX, $stat['mode'] << 16); $zip->close(); echo "готово
";} else {    echo "помилка
";}?> `
