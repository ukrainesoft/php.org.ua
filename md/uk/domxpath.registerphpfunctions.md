- [« DOMXPath::registerNamespace](domxpath.registernamespace.md)
- [Функції DOM »](ref.dom.md)

- [PHP Manual](index.md)
- [DOMXPath](class.domxpath.md)
- Реєстрація PHP-функцій як функцій XPath

# DOMXPath::registerPhpFunctions

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DOMXPath::registerPhpFunctions — Реєстрація PHP-функцій як функцій
XPath

### Опис

public **DOMXPath::registerPhpFunctions**(string\|array\|null
`$restrict` u003d **`null`**): void

Цей метод дозволяє використовувати PHP-функції у виразах XPath.

### Список параметрів

`restrict`
Використовуйте цей параметр, щоб дозволити використання тільки
певних функцій у виразах XPath.

Цей параметр може мати тип string (ім'я функції) або array (масив)
імен функцій).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

У таких прикладах використовується файл `book.xml`, який містить
наступне:

**Приклад #1 book.xml**

`` xmlcode
<?xml versionu003d"1.0" encodingu003d"UTF-8"?>
<books>
<book>
<title>PHP Basics</title>
<author>Jim Smith</author>
<author>Jane Smith</author>
</book>
<book>
<title>PHP Secrets</title>
<author>Jenny Smythe</author>
</book>
<book>
<title>XML basics</title>
<author>Joe Black</author>
</book>
</books>
````

**Приклад #2 **DOMXPath::registerPHPFunctions()** з
`php:functionString`**

` <?php$doc u003d new DOMDocument;$doc->load('book.xml');$xpath u003d new DOMXPath($doc);// Реєстрація PHP: простір імен (обов'язково)$xpath->registerName php", "http://php.net/xpath");// Реєстрація функцій PHP (без обмежень)$xpath->registerPHPFunctions();// Виклик функції substr для назви книги$ '//book[php:functionString("substr", title, 0, 3) u003d "PHP"]');echo "Знайдені {$nodes->length} книги, починаються с 'PHP':
";foreach ($nodes as $node) {    $title  u003d $node->getElementsByTagName("title")->item(0)->nodeValue;    $author u003d $node-> (0)->nodeValue;   echo "$title автора $author
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Знайдено 2 книги, що починаються з 'PHP':
PHP Basics автора Jim Smith
PHP Secrets автора Jenny Smythe

**Приклад #3 **DOMXPath::registerPHPFunctions()** з `php:function`**

` <?php$doc u003d new DOMDocument;$doc->load('book.xml');$xpath u003d new DOMXPath($doc);// Реєстрація PHP: простір імен (обов'язково)$xpath->registerName php", "http://php.net/xpath");// Реєстрація PHP-функцій (тільки has_multiple)$xpath->registerPHPFunctions("has_multiple");function has_multiple($nodes) { більше одного автора    return count($nodes) > 1;}// Фільтр книг з двома і більше авторами$books u003d $xpath->query('//book[php:function'' echo "Книги з двома і більше авторами:
";foreach ($books as $book) {    echo $book->getElementsByTagName("title")->item(0)->nodeValue . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Книги з двома та більше авторами:
PHP Basics

### Дивіться також

- [DOMXPath::registerNamespace()](domxpath.registernamespace.md) -
Реєструє простір імен з об'єктом DOMXPath
- [DOMXPath::query()](domxpath.query.md) - Виконує задане
вираз XPath
- [DOMXPath::evaluate()](domxpath.evaluate.md) - Обчислює
переданий вираз XPath і повертає типізований результат,
якщо можливо
