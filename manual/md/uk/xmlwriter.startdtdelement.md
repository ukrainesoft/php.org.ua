- [« XMLWriter::startDtdAttlist](xmlwriter.startdtdattlist.md)
- [XMLWriter::startDtdEntity »](xmlwriter.startdtdentity.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створити стартовий елемент DTD

# XMLWriter::startDtdElement

#xmlwriter_start_dtd_element

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::startDtdElement -- xmlwriter_start_dtd_element -- Створити
стартовий елемент DTD

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::startDtdElement**(string `$qualifiedName`): bool

Процедурний стиль

**xmlwriter_start_dtd_element**([XMLWriter](class.xmlwriter.md)
`$writer`, string `$qualifiedName`): bool

Починає елемент DTD.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`qualifiedName`
Цілком визначене ім'я типу документа для створення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::endDtdElement()](xmlwriter.enddtdelement.md) -
Завершити поточний елемент DTD
- [XMLWriter::writeDtdElement()](xmlwriter.writedtdelement.md) -
Записати повний тег елемента DTD
