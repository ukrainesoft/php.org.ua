- [« Функції SimpleXML](ref.simplexml.md)
- [simplexml_load_file »](function.simplexml-load-file.md)

- [PHP Manual](index.md)
- [Функції SimpleXML](ref.simplexml.md)
- Отримує об'єкт класу SimpleXMLElement із вузла DOM

# simplexml_import_dom

(PHP 5, PHP 7, PHP 8)

simplexml_import_dom — Отримує об'єкт класу `SimpleXMLElement` з вузла
DOM

### Опис

**simplexml_import_dom**([SimpleXMLElement](class.simplexmlelement.md)\|[DOMNode](class.domnode.md)
`$node`, ?string `$class_name` u003d SimpleXMLElement::class):
?[SimpleXMLElement](class.simplexmlelement.md)

Ця функція бере вузол документа [DOM](book.dom.md) і перетворює його на
вузол SimpleXML. Потім цей новий об'єкт може бути використаний як
первинний елемент SimpleXML.

### Список параметрів

`node`
Вузол-елемент [DOM](book.dom.md)

`class_name`
Ви можете використовувати цей додатковий параметр для того, щоб
функція **simplexml_import_dom()** повертала об'єкт зазначеного класу.
Цей клас має розширювати клас
[SimpleXMLElement](class.simplexmlelement.md).

### Значення, що повертаються

Повертає [SimpleXMLElement](class.simplexmlelement.md) або
**`null`** у разі виникнення помилки.

### Приклади

**Приклад #1 Імпорт DOM**

` <?php$dom u003d new DOMDocument;$dom->loadXML('<books><book><title>дурниця</title></book></books>');if (!$dom) {    echo 'Помилка при розборі документа'; exit;}$s u003d simplexml_import_dom($dom);echo $s->book[0]->title;?> `

Результат виконання цього прикладу:

нісенітниця

### Дивіться також

- [dom_import_simplexml()](function.dom-import-simplexml.md) -
Отримує об'єкт класу DOMElement із об'єкта класу SimpleXMLElement
- [Базове використання SimpleXML](simplexml.examples-basic.md)
