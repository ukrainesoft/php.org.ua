- [« XMLWriter::fullEndElement](xmlwriter.fullendelement.md)
- [XMLWriter::openUri »](xmlwriter.openuri.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створити новий об'єкт XMLWriter, використовуючи пам'ять для рядкового
висновку

# XMLWriter::openMemory

#xmlwriter_open_memory

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::openMemory -- xmlwriter_open_memory — Створити новий об'єкт
XMLWriter, використовуючи пам'ять для рядкового виводу

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::openMemory**(): bool

Процедурний стиль

**xmlwriter_open_memory**(): [XMLWriter](class.xmlwriter.md)\|false

Створює новий об'єкт [XMLWriter](class.xmlwriter.md), використовуючи пам'ять
для рядкового виведення.

### Список параметрів

### Значення, що повертаються

Об'єктно-орієнтований стиль: Повертає **`true`** у разі успішного
виконання або **`false`** у разі виникнення помилки.

Процедурний стиль: Повертає новий [XMLWriter](class.xmlwriter.md)
для подальшого використання функціями xmlwriter у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------------------------|
| 8.0.0 | Функція повертає екземпляр [XMLWriter](class.xmlwriter.md) у разі успішного виконання. Раніше у цьому випадку повертався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [XMLWriter::openUri()](xmlwriter.openuri.md) - Створити новий
об'єкт XMLWriter, використовуючи вихідний URI для виводу
