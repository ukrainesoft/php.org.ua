- [« XMLWriter::endPi](xmlwriter.endpi.md)
- [XMLWriter::fullEndElement »](xmlwriter.fullendelement.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Скинути поточний буфер

# XMLWriter::flush

#xmlwriter_flush

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter \>u003d 1.0.0)

XMLWriter::flush -- xmlwriter_flush — Скинути поточний буфер

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::flush**(bool `$empty` u003d **`true`**): string\|int

Процедурний стиль

**xmlwriter_flush**([XMLWriter](class.xmlwriter.md) `$writer`, bool
`$empty` u003d **`true`**): string\|int

Скидає поточний буфер.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`empty`
Визначає, чи звільнити буфер чи ні. За промовчанням **`true`**.

### Значення, що повертаються

Якщо XML створюється в пам'яті, функція поверне згенерований буфер
XML, інакше, при використанні URI, ця функція запише буфер і поверне
кількість записаних байт.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |
| 8.0.0 | Функція більше не може повертати **`false`**. |
