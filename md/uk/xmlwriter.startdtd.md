- [« XMLWriter::startDocument](xmlwriter.startdocument.md)
- [XMLWriter::startDtdAttlist »](xmlwriter.startdtdattlist.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створити стартовий DTD тег

# XMLWriter::startDtd

#xmlwriter_start_dtd

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::startDtd -- xmlwriter_start_dtd — Створити стартовий DTD тег

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::startDtd**(string `$qualifiedName`, ?string
`$publicId` u003d **`null`**, ?string `$systemId` u003d **`null`**): bool

Процедурний стиль

**xmlwriter_start_dtd**(
[XMLWriter](class.xmlwriter.md) `$writer`,
string `$qualifiedName`,
?string `$publicId` u003d **`null`**,
?string `$systemId` u003d **`null`**
): bool

Починає DTD.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`qualifiedName`
Цілком визначене ім'я типу документа для створення.

`publicId`
Ідентифікатор зовнішнього громадського підмножини.

`systemId`
Ідентифікатор зовнішнього системного підмножини.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::endDtd()](xmlwriter.enddtd.md) - Завершити поточний DTD
- [XMLWriter::writeDtd()](xmlwriter.writedtd.md) - Записати повний
тег DTD
