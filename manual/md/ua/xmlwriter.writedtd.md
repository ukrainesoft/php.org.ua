- [« XMLWriter::writeComment](xmlwriter.writecomment.md)
- [XMLWriter::writeDtdAttlist »](xmlwriter.writedtdattlist.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Записати повний тег DTD

# XMLWriter::writeDtd

#xmlwriter_write_dtd

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::writeDtd -- xmlwriter_write_dtd — Записати повний тег DTD

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::writeDtd**(
string `$name`,
?string `$publicId` u003d **`null`**,
?string `$systemId` u003d **`null`**,
?string `$content` u003d **`null`**
): bool

Процедурний стиль

**xmlwriter_write_dtd**(
[XMLWriter](class.xmlwriter.md) `$writer`,
string `$name`,
?string `$publicId` u003d **`null`**,
?string `$systemId` u003d **`null`**,
?string `$content` u003d **`null`**
): bool

Записує повний тег DTD.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`name`
Ім'я DTD.

`publicId`
Ідентифікатор зовнішнього громадського підмножини.

`systemId`
Ідентифікатор зовнішнього системного підмножини.

`content`
Вміст DTD.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::startDtd()](xmlwriter.startdtd.md) - Створити стартовий
DTD тег
- [XMLWriter::endDtd()](xmlwriter.enddtd.md) - Завершити поточний DTD
