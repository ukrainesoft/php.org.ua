- [« XMLWriter::startDtdElement](xmlwriter.startdtdelement.md)
- [XMLWriter::startElement »](xmlwriter.startelement.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створити стартовий запис DTD

# XMLWriter::startDtdEntity

#xmlwriter_start_dtd_entity

(PHP 5 \>u003d 5.2.1, PHP 7, PHP 8, PECL xmlwriter \>u003d 0.1.0)

XMLWriter::startDtdEntity -- xmlwriter_start_dtd_entity — Створити
стартовий запис DTD

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::startDtdEntity**(string `$name`, bool `$isParam`):
bool

Процедурний стиль

**xmlwriter_start_dtd_entity**([XMLWriter](class.xmlwriter.md)
`$writer`, string `$name`, bool `$isParam`): bool

Починає записування DTD.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`name`
Назва запису.

`isParam`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::endDtdEntity()](xmlwriter.enddtdentity.md) - Завершити
поточний запис DTD
- [XMLWriter::writeDtdEntity()](xmlwriter.writedtdentity.md) -
Записати повний тег DTD запису
