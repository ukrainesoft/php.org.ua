- [« XMLWriter::writeDtdEntity](xmlwriter.writedtdentity.md)
- [XMLWriter::writeElementNs »](xmlwriter.writeelementns.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Записати повний тег елемента

# XMLWriter::writeElement

#xmlwriter_write_element

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::writeElement -- xmlwriter_write_element -- Записати повний тег
елемента

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::writeElement**(string `$name`, ?string `$content` u003d
**`null`**): bool

Процедурний стиль

**xmlwriter_write_element**([XMLWriter](class.xmlwriter.md) `$writer`,
string `$name`, ?string `$content` u003d **`null`**): bool

Записує повний тег елемент.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`name`
Назва елемента.

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

- [XMLWriter::startElement()](xmlwriter.startelement.md) - Створити
стартовий тег елемента
- [XMLWriter::endElement()](xmlwriter.endelement.md) - Завершити
поточний елемент
- [XMLWriter::writeElementNs()](xmlwriter.writeelementns.md) -
Записати повний простір імен тега елемента
