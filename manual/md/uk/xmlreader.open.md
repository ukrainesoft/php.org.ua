- [« XMLReader::next](xmlreader.next.md)
- [XMLReader::read »](xmlreader.read.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Встановити URI, що містить XML-документ для аналізу

# XMLReader::open

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::open — Встановити URI, що містить XML-документ для аналізу

### Опис

public static **XMLReader::open**(string `$uri`, ?string `$encoding` u003d
**`null`**, int `$flags` u003d 0): bool\|[XMLReader](class.xmlreader.md)

Встановити URI, що містить документ XML, який буде розібраний.

### Список параметрів

`uri`
URI, що вказує на документ.

`encoding`
Кодування документа або **`null`**.

`flags`
Бітова маска, що складається з [LIBXML\_\*](libxml.constants.md)
констант.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. при статичному виклику, повертається
[XMLReader](class.xmlreader.md) або **`false`** у разі виникнення
помилки.

### Помилки

метод можна викликати статично, але до PHP 8.0.0 у разі видається
помилка **`E_DEPRECATED`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------|
| 8.0.0 | **XMLReader::open()** тепер оголошений як статичний метод, але може бути викликаний в екземплярі [XMLReader](class.xmlreader.md). |

### Дивіться також

- [XMLReader::xml()](xmlreader.xml.md) - Встановити дані,
містять XML для розбору
- [XMLReader::close()](xmlreader.close.md) - Закрити введення XMLReader
