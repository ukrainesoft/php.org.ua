- [« XMLWriter::startCdata](xmlwriter.startcdata.md)
- [XMLWriter::startDocument »](xmlwriter.startdocument.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створює стартовий коментар

# XMLWriter::startComment

#xmlwriter_start_comment

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter \>u003d 1.0.0)

XMLWriter::startComment -- xmlwriter_start_comment — Створює стартовий
коментар

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::startComment**(): bool

Процедурний стиль

**xmlwriter_start_comment**([XMLWriter](class.xmlwriter.md)
`$writer`): bool

Починає коментар.

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

- [XMLWriter::endComment()](xmlwriter.endcomment.md) - Завершити
коментар
- [XMLWriter::writeComment()](xmlwriter.writecomment.md) - Записати
повний тег коментаря
