- [« DOMNodeList::count](domnodelist.count.md)
- [DOMNotation »](class.domnotation.md)

- [PHP Manual](index.md)
- [DOMNodeList](class.domnodelist.md)
- Отримує вузол із заданим індексом

# DOMNodeList::item

(PHP 5, PHP 7, PHP 8)

DOMNodeList::item — Отримує вузол із заданим індексом

### Опис

public **DOMNodeList::item**(int `$index`):
[DOMNode](class.domnode.md)\|DOMNameSpaceNode\|null

Витягує вузол із заданим індексом `index` з об'єкта класу
[DOMNodeList](class.domnodelist.md).

**Підказка**

Якщо потрібно дізнатися кількість вузлів у колекції, використовуйте властивість
`length` об'єкта класу [DOMNodeList](class.domnodelist.md).

### Список параметрів

`index`
Індекс вузла в колекції.

### Значення, що повертаються

Вузол, що знаходиться в позиції `index` об'єкту
[DOMNodeList](class.domnodelist.md), або **`null`**, якщо цей індекс
неприпустимий.

### Приклади

**Приклад #1 Виведення вмісту таблиці**

` <?php$doc u003d new DOMDocument;$doc->load('book.xml');$items u003d $doc->getElementsByTagName('entry');for ($i u003d 0; $i < $items- >length; $i++) {   echo $items->item($i)->nodeValue . "
";}?> `

Крім того, можна скористатися
[foreach](control-structures.foreach.md);, що буде набагато зручніше:

` <?phpforeach ($items as $item) {   echo $item->nodeValue . "
";}?> `

Результат виконання цього прикладу:

Title
Author
Language
ISBN
The Grapes of Wrath
John Steinbeck
en
0140186409
The Pearl
John Steinbeck
en
014017737X
Samarcande
Amine Maalouf
fr
2253051209
