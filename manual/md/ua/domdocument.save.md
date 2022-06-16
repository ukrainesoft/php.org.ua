- [«
DOMDocument::relaxNGValidateSource](domdocument.relaxngvalidatesource.md)
- [DOMDocument::saveHTML »](domdocument.savehtml.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Зберігає XML-дерево із внутрішнього представлення у файл

# DOMDocument::save

(PHP 5, PHP 7, PHP 8)

DOMDocument::save — Зберігає XML-дерево з внутрішньої вистави в
файл

### Опис

public **DOMDocument::save**(string `$filename`, int `$options` u003d 0):
int\|false

Створює XML-документ із подання DOM. Цю функцію зазвичай викликають
після побудови нового DOM-документа, як показано на прикладі нижче.

### Список параметрів

`filename`
Шлях до файлу, в який буде збережено документ XML.

`options`
Додаткові налаштування. На даний момент підтримується тільки
[LIBXML_NOEMPTYTAG](libxml.constants.md).

### Значення, що повертаються

Повертає кількість записаних байт або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Збереження DOM-дерева у файл**

` <?php$doc u003d new DOMDocument('1.0');// ми хочемо красивий висновок$doc->formatOutput u003d true;$root u003d $doc->createElement('book');$root u003d $doc> appendChild($root);$title u003d $doc->createElement('title');$title u003d $root->appendChild($title);$text u003d $doc->createTextNode('This is the title'); $text u003d $title->appendChild($text);echo 'Записано: ' . $doc->save("/tmp/test.xml") . ' байт'; // Записано: 72 байт?> `

### Дивіться також

- [DOMDocument::saveXML()](domdocument.savexml.md) - Зберігає
XML-дерево з внутрішнього уявлення у вигляді рядка
- [DOMDocument::load()](domdocument.load.md) - Завантаження XML із файлу
- [DOMDocument::loadXML()](domdocument.loadxml.md) - Завантаження XML з
рядки
