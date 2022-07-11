- [« DOMDocument::saveHTML](domdocument.savehtml.md)
- [DOMDocument::saveXML »](domdocument.savexml.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Зберігає документ із внутрішнього представлення у файл, використовуючи
форматування HTML

# DOMDocument::saveHTMLFile

(PHP 5, PHP 7, PHP 8)

DOMDocument::saveHTMLFile — Зберігає документ із внутрішнього
представлення у файл, використовуючи форматування HTML

### Опис

public **DOMDocument::saveHTMLFile**(string `$filename`): int\|false

Створює HTML-документ із DOM-подання. Цю функцію зазвичай викликають
після побудови нового DOM-документа, як показано на прикладі нижче.

### Список параметрів

`filename`
Шлях до файлу, в який зберігається HTML-документ.

### Значення, що повертаються

Повертає кількість записаних байт або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Збереження HTML-дерева у файл**

` <?php$doc u003d new DOMDocument('1.0');// ми хочемо красивий висновок$doc->formatOutput u003d true;$root u003d $doc->createElement('html');$root u003d $doc> appendChild($root);$head u003d $doc->createElement('head');$head u003d $root->appendChild($head);$title u003d $doc->createElement('title');$title u003d $head->appendChild($title);$text u003d $doc->createTextNode('Це заголовок');$text u003d $title->appendChild($text);echo 'Записано: ' . $doc->saveHTMLFile("/tmp/test.md") . ' байт'; // Записано: 129 байт?> `

### Дивіться також

- [DOMDocument::saveHTML()](domdocument.savehtml.md) - Зберігає
документ із внутрішнього подання до рядка, використовуючи
форматування HTML
- [DOMDocument::loadHTML()](domdocument.loadhtml.md) - Завантаження HTML
з рядка
- [DOMDocument::loadHTMLFile()](domdocument.loadhtmlfile.md) -
Завантаження HTML із файлу
