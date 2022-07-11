- [« XMLWriter::openUri](xmlwriter.openuri.md)
- [XMLWriter::setIndent »](xmlwriter.setindent.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Повертає поточний буфер

# XMLWriter::outputMemory

#xmlwriter_output_memory

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::outputMemory -- xmlwriter_output_memory — Повертає поточний
буфер

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::outputMemory**(bool `$flush` u003d **`true`**): string

Процедурний стиль

**xmlwriter_output_memory**([XMLWriter](class.xmlwriter.md) `$writer`,
bool `$flush` u003d **`true`**): string

Повертає поточний буфер.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`flush`
Визначає, чи звільнити буфер чи ні. За промовчанням **`true`**.

### Значення, що повертаються

Повертає поточний буфер у вигляді рядка.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::flush()](xmlwriter.flush.md) - Скинути поточний буфер
