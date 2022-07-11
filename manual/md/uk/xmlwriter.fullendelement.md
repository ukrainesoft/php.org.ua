- [« XMLWriter::flush](xmlwriter.flush.md)
- [XMLWriter::openMemory »](xmlwriter.openmemory.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Завершити поточний елемент

# XMLWriter::fullEndElement

#xmlwriter_full_end_element

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL xmlwriter \>u003d 2.0.4)

XMLWriter::fullEndElement -- xmlwriter_full_end_element -- Завершити
поточний елемент

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::fullEndElement**(): bool

Процедурний стиль

**xmlwriter_full_end_element**([XMLWriter](class.xmlwriter.md)
`$writer`): bool

Завершує поточний елемент XML. Записує тег, що закриває, навіть якщо
елемент порожній.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::endElement()](xmlwriter.endelement.md) - Завершити
поточний елемент
