- [« XMLWriter::writeDtdAttlist](xmlwriter.writedtdattlist.md)
- [XMLWriter::writeDtdEntity »](xmlwriter.writedtdentity.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Записати повний тег елемента DTD

# XMLWriter::writeDtdElement

#xmlwriter_write_dtd_element

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::writeDtdElement -- xmlwriter_write_dtd_element — Записати
повний тег елемента DTD

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::writeDtdElement**(string `$name`, string
`$content`): bool

Процедурний стиль

**xmlwriter_write_dtd_element**([XMLWriter](class.xmlwriter.md)
`$writer`, string `$name`, string `$content`): bool

Записує повний тег елемента DTD.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`name`
Назва елемента DTD.

`content`
Вміст елемента.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::startDtdElement()](xmlwriter.startdtdelement.md) -
Створити стартовий елемент DTD
- [XMLWriter::endDtdElement()](xmlwriter.enddtdelement.md) -
Завершити поточний елемент DTD
