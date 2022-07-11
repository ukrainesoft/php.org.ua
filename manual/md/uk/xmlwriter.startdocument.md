- [« XMLWriter::startComment](xmlwriter.startcomment.md)
- [XMLWriter::startDtd »](xmlwriter.startdtd.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створити тег документа

# XMLWriter::startDocument

#xmlwriter_start_document

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::startDocument -- xmlwriter_start_document — Створити тег
документа

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::startDocument**(?string `$version` u003d "1.0", ?string
`$encoding` u003d **`null`**, ?string `$standalone` u003d **`null`**): bool

Процедурний стиль

**xmlwriter_start_document**(
[XMLWriter](class.xmlwriter.md) `$writer`,
?string `$version` u003d "1.0",
?string `$encoding` u003d **`null`**,
?string `$standalone` u003d **`null`**
): bool

Починає документ.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`version`
Номер версії документа як частина оголошення XML.

`encoding`
Кодування документа як частина оголошення XML.

`standalone`
`yes` або `no`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::endDocument()](xmlwriter.enddocument.md) - Завершити
поточний документ
