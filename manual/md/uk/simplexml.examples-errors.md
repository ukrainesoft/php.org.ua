- [« Базове використання SimpleXML](simplexml.examples-basic.md)
- [SimpleXMLElement »](class.simplexmlelement.md)

- [PHP Manual](index.md)
- [Приклади](simplexml.examples.md)
- Робота з помилками XML

## Робота з помилками XML

Робота з помилками XML під час завантаження документів дуже проста
завданням. Використання функціональності [libxml](book.libxml.md)
дозволяє придушити всі XML-помилки під час завантаження документа і потім
обробити їх.

Об'єкт [libXMLError](class.libxmlerror.md), що повертається
[libxml_get_errors()](function.libxml-get-errors.md), містить
кілька властивостей, у тому числі
[повідомлення](class.libxmlerror.md#libxmlerror.props.message), [номер
рядки](class.libxmlerror.md#libxmlerror.props.line) та
[колонку](class.libxmlerror.md#libxmlerror.props.column) (позицію)
цієї помилки.

**Приклад #1 Завантаження синтаксично неправильного XML-рядка**

` <?phplibxml_use_internal_errors(true);$sxe u003d simplexml_load_string("<?xml versionu003d'1.0'><broken><xml></broken>");if (!$sxe) {    echo "Помилка "
";   foreach(libxml_get_errors() as $error) {        echo " ",,$error->message;    }}?> `

Результат виконання цього прикладу:

Помилка завантаження XML
Blank needed here
parsing XML declaration: '?>' expected
Opening and ending tag mismatch: xml line 1 and broken
Premature end of data in tag broken line 1

## Дивіться також

- [libxml_use_internal_errors()](function.libxml-use-internal-errors.md)
- [libxml_get_errors()](function.libxml-get-errors.md)
- [libXMLError](class.libxmlerror.md)
