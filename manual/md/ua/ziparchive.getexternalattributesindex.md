- [« ZipArchive::getCommentName](ziparchive.getcommentname.md)
- [ZipArchive::getExternalAttributesName
»](ziparchive.getexternalattributesname.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Витягти зовнішні атрибути запису за її індексом

# ZipArchive::getExternalAttributesIndex

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8, PECL zip \>u003d 1.12.4)

ZipArchive::getExternalAttributesIndex — Видобути зовнішні атрибути запису
за її індексом

### Опис

public **ZipArchive::getExternalAttributesIndex**(
int `$index`,
int `&$opsys`,
int `&$attr`,
int `$flags` u003d ?
): bool

Витягує зовнішні атрибути запису за її індексом.

### Список параметрів

`index`
Індекс запису.

`opsys`
У разі успішного виконання сюди записується код операційної
системи, заданий однією із констант ZipArchive::OPSYS\_.

`attr`
У разі успішного виконання записуються зовнішні атрибути.
Значення залежить від операційної системи.

`flags`
Якщо подано як **`ZipArchive::FL_UNCHANGED`**, буде повернено
оригінальні незмінені атрибути.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

У цьому прикладі вилучаються всі файли з архіву `test.zip` та
встановлює їм права Unix, отримані із зовнішніх атрибутів.

**Приклад #1 Виймаємо всі записи з їхніми правами Unix**

` <?php$zip u003d new ZipArchive();if ($zip->open('test.zip') u003du003du003d TRUE) {    for ($idxu003d0 ; $s u003d $zip->statIndex($idx ) ; $idx++) {        if ($zip->extractTo('.', $s['name'])) {            if ($zip->getExternalAttributesIndex($idx, $opsys, $attr)                && $opsysu003du003d ZipArchive::OPSYS_UNIX) {                chmod($s['name'], ($attr >> 16) & 0777); }         }    }}     $zip->close(); echo "готово
";} else {    echo "помилка
";}?> `
