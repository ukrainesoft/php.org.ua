- [« XMLWriter::endCdata](xmlwriter.endcdata.md)
- [XMLWriter::endDocument »](xmlwriter.enddocument.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Завершити коментар

# XMLWriter::endComment

#xmlwriter_end_comment

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter \>u003d 1.0.0)

XMLWriter::endComment -- xmlwriter_end_comment — Завершити коментар

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::endComment**(): bool

Процедурний стиль

**xmlwriter_end_comment**([XMLWriter](class.xmlwriter.md) `$writer`):
bool

Завершує поточний коментар.

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

- [XMLWriter::startComment()](xmlwriter.startcomment.md) - Створює
стартовий коментар
- [XMLWriter::writeComment()](xmlwriter.writecomment.md) - Записати
повний тег коментаря
