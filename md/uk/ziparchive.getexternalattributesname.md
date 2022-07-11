- [«
ZipArchive::getExternalAttributesIndex](ziparchive.getexternalattributesindex.md)
- [ZipArchive::getFromIndex »](ziparchive.getfromindex.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Витягти зовнішні атрибути запису на її ім'я

# ZipArchive::getExternalAttributesName

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8, PECL zip \>u003d 1.12.4)

ZipArchive::getExternalAttributesName — Вийняти зовнішні атрибути запису
на її ім'я

### Опис

public **ZipArchive::getExternalAttributesName**(
string `$name`,
int `&$opsys`,
int `&$attr`,
int `$flags` u003d 0
): bool

Витягує зовнішні атрибути запису на її ім'я.

### Список параметрів

`name`
Назва запису.

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
