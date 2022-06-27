- [« XMLWriter::writeDtdElement](xmlwriter.writedtdelement.md)
- [XMLWriter::writeElement »](xmlwriter.writeelement.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Записати повний тег DTD запису

# XMLWriter::writeDtdEntity

#xmlwriter_write_dtd_entity

(PHP 5 \>u003d 5.2.1, PHP 7, PHP 8, PECL xmlwriter \>u003d 0.1.0)

XMLWriter::writeDtdEntity -- xmlwriter_write_dtd_entity — Записати
повний тег DTD запису

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::writeDtdEntity**(
string `$name`,
string `$content`,
bool `$isParam` u003d **`false`**,
?string `$publicId` u003d **`null`**,
?string `$systemId` u003d **`null`**,
?string `$notationData` u003d **`null`**
): bool

Процедурний стиль

**xmlwriter_write_dtd_entity**(
[XMLWriter](class.xmlwriter.md) `$writer`,
string `$name`,
string `$content`,
bool `$isParam` u003d **`false`**,
?string `$publicId` u003d **`null`**,
?string `$systemId` u003d **`null`**,
?string `$notationData` u003d **`null`**
): bool

Записує повний запис DTD.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`name`
Назва запису.

`content`
Вміст запису.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |
| 8.0.0 | `publicId`, `systemId` та `notationData` тепер допускають значення null. |

### Дивіться також

- [XMLWriter::startDtdEntity()](xmlwriter.startdtdentity.md) -
Створити стартовий запис DTD
- [XMLWriter::endDtdEntity()](xmlwriter.enddtdentity.md) - Завершити
поточний запис DTD
