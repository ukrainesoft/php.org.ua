- [« DOMNode::normalize](domnode.normalize.md)
- [DOMNode::replaceChild »](domnode.replacechild.md)

- [PHP Manual](index.md)
- [DOMNode](class.domnode.md)
- видаляє дочірній вузол зі списку нащадків

# DOMNode::removeChild

(PHP 5, PHP 7, PHP 8)

DOMNode::removeChild — Видаляє дочірній вузол зі списку нащадків

### Опис

public **DOMNode::removeChild**([DOMNode](class.domnode.md) `$child`):
[DOMNode](class.domnode.md)\|false

Ця функція видаляє дочірній вузол зі списку нащадків.

### Список параметрів

`child`
Дочірній вузол, що видаляється.

### Значення, що повертаються

Функція повертає дочірній вузол, що видаляється, якщо він може бути видалений.

### Помилки

**`DOM_NO_MODIFICATION_ALLOWED_ERR`**
Виникає, якщо вузол доступний лише читання.

**`DOM_NOT_FOUND`**
Виникає, якщо 'child' не є дочірнім вузлом цього вузла.

### Приклади

Наступний приклад видаляє елемент `chapter` (глава) із XML-документа.

**Приклад #1 Видалення дочірнього вузла**

` <?php$doc u003d new DOMDocument;$doc->load('book.xml');$book u003d $doc->documentElement;// находимо главу (chapter) і удалям із книги (book)$chapter book->getElementsByTagName('chapter')->item(0);$oldchapter u003d $book->removeChild($chapter);echo $doc->saveXML();?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0" encodingu003d"utf-8"?>
<!DOCTYPE book PUBLIC "-//OASIS//DTD DocBook XML V4.1.2//EN"
"http://www.oasis-open.org/docbook/xml/4.1.2/docbookx.dtd">
<book idu003d"listing">
<title>My lists</title>

</book>

### Дивіться також

- [DOMChildNode::remove()](domchildnode.remove.md) - Видаляє вузол
- [DOMNode::appendChild()](domnode.appendchild.md) - Додає новий
дочірній вузол у кінець списку нащадків
- [DOMNode::replaceChild()](domnode.replacechild.md) - Замінює
дочірній вузол
