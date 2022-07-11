- [« XMLReader::setSchema](xmlreader.setschema.md)
- [XMLWriter »](book.xmlwriter.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Встановити дані, що містять XML для аналізу

# XMLReader::XML

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::XML — Встановити дані, що містять XML для аналізу

### Опис

public static **XMLReader::XML**(string `$source`, ?string `$encoding` u003d
**`null`**, int `$flags` u003d 0): bool\|[XMLReader](class.xmlreader.md)

Встановлює дані, що містять XML для аналізу.

### Список параметрів

`source`
Рядок, що містить XML для аналізу.

`encoding`
Кодування документа або **`null`**.

`flags`
Бітова маска констант [LIBXML\_\*](libxml.constants.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. у разі статичного виклику або
повертається [XMLReader](class.xmlreader.md) або **`false`** у разі
виникнення помилки.

### Помилки

Метод можна викликати статично, але до PHP 8.0.0 у цьому випадку видається
помилка **`E_DEPRECATED`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------------------------------------|
| 8.0.0 | **XMLReader::XML()** тепер оголошений як статичний метод, але може бути викликаний в екземплярі [XMLReader](class.xmlreader.md). |

### Дивіться також

- [XMLReader::open()](xmlreader.open.md) - Встановити URI,
містить XML-документ для аналізу
- [XMLReader::close()](xmlreader.close.md) - Закрити введення XMLReader
