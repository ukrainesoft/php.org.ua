- [« DOMDocument::saveHTMLFile](domdocument.savehtmlfile.md)
- [DOMDocument::schemaValidate »](domdocument.schemavalidate.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Зберігає XML-дерево з внутрішньої вистави у вигляді рядка

# DOMDocument::saveXML

(PHP 5, PHP 7, PHP 8)

DOMDocument::saveXML — Зберігає XML-дерево з внутрішньої вистави
у вигляді рядка

### Опис

public **DOMDocument::saveXML**(?[DOMNode](class.domnode.md) `$node` u003d
**`null`**, int `$options` u003d 0): string\|false

Створює XML-документ із подання DOM. Цю функцію зазвичай викликають
після побудови нового DOM-документа, як показано на прикладі нижче.

### Список параметрів

`node`
Використовуйте цей аргумент для виведення лише певного вузла без
оголошення XML, а не всього документа.

`options`
Додаткові налаштування. На даний момент підтримується тільки
[LIBXML_NOEMPTYTAG](libxml.constants.md).

### Значення, що повертаються

Повертає XML або 'false' у разі виникнення помилки.

### Помилки

**`DOM_WRONG_DOCUMENT_ERR`**
Виникає, якщо `node` належить іншому документу.

### Приклади

**Приклад #1 Збереження DOM-дерева у вигляді рядка**

` <?php$doc u003d new DOMDocument('1.0');// ми хочемо красивий висновок$doc->formatOutput u003d true;$root u003d $doc->createElement('book');$root u003d $doc> appendChild($root);$title u003d $doc->createElement('title');$title u003d $root->appendChild($title);$text u003d $doc->createTextNode('Це заголовок');$text u003d $title->appendChild($text);echo "Збереження всього документу:
";echo $doc->saveXML() . "
";echo "Збереження тільки заголовка:
";echo $doc->saveXML($title);?> `

Результат виконання цього прикладу:

Збереження всього документа:
<?xml versionu003d"1.0"?>
<book>
<title>Це заголовок</title>
</book>

Збереження лише заголовка:
<title>Це заголовок</title>

### Дивіться також

- [DOMDocument::save()](domdocument.save.md) - Зберігає XML-дерево
із внутрішнього подання до файлу
- [DOMDocument::load()](domdocument.load.md) - Завантаження XML із файлу
- [DOMDocument::loadXML()](domdocument.loadxml.md) - Завантаження XML з
рядки
