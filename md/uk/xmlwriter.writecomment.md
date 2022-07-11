- [« XMLWriter::writeCdata](xmlwriter.writecdata.md)
- [XMLWriter::writeDtd »](xmlwriter.writedtd.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Записати повний тег коментаря

# XMLWriter::writeComment

#xmlwriter_write_comment

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::writeComment -- xmlwriter_write_comment — Записати повний тег
коментаря

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::writeComment**(string `$content`): bool

Процедурний стиль

**xmlwriter_write_comment**([XMLWriter](class.xmlwriter.md) `$writer`,
string `$content`): bool

Записує повний коментар.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`content`
Зміст коментаря.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::startComment()](xmlwriter.startcomment.md) - Створює
стартовий коментар
- [XMLWriter::endComment()](xmlwriter.endcomment.md) - Завершити
коментар
