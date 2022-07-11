- [« DOMXPath::\_\_construct](domxpath.construct.md)
- [DOMXPath::query »](domxpath.query.md)

- [PHP Manual](index.md)
- [DOMXPath](class.domxpath.md)
- Обчислює переданий вираз XPath та повертає типізований
результат, якщо можливо

# DOMXPath::evaluate

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

DOMXPath::evaluate — Обчислює переданий вираз XPath і повертає
типізований результат, якщо можливо

### Опис

public **DOMXPath::evaluate**(string `$expression`,
?[DOMNode](class.domnode.md) `$contextNode` u003d **`null`**, bool
`$registerNodeNS` u003d **`true`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Виконує переданий вираз XPath `expression` та повертає
типізований результат, якщо це можливо.

### Список параметрів

`expression`
Вираз XPath для виконання.

`contextNode`
Додатковий параметр `contextNode` може бути вказаний для виконання
відносних запитів XPath. За замовчуванням запити виконуються
щодо кореневого елемента.

`registerNodeNS`
Додатковий параметр `registerNodeNS` можна вказати, щоб вимкнути
автоматичну реєстрацію контексту вузла.

### Значення, що повертаються

Повертає типізований результат, якщо це можливо, або об'єкт
[DOMNodeList](class.domnodelist.md), що містить усі вузли,
відповідні заданому XPath-вираженню `expression`.

Якщо `expression` побудовано неправильно або `contextNode` має неправильне
значення, **DOMXPath::evaluate()** поверне **`false`**.

### Приклади

**Приклад #1 Отримання кількості всіх англійських книг**

` <?php$doc u003d new DOMDocument;$doc->load('book.xml');$xpath u003d new DOMXPath($doc);$tbody u003d $doc->getElementsByTagName('tbody')->item( 0);// запит щодо вузла tbody$query u003d 'count(row/entry[. u003d "en"])';$entries u003d $xpath->evaluate($query, $tbody);echo "Є $entries книги
";?> `

Результат виконання цього прикладу:

Є 2 англійські книги

### Дивіться також

- [DOMXPath::query()](domxpath.query.md) - Виконує задане
вираз XPath
