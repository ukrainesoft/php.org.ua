- [« DOMNode::getLineNo](domnode.getlineno.md)
- [DOMNode::hasAttributes »](domnode.hasattributes.md)

- [PHP Manual](index.md)
- [DOMNode](class.domnode.md)
- Отримання XPath вузла

# DOMNode::getNodePath

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DOMNode::getNodePath — Отримання XPath вузла

### Опис

public **DOMNode::getNodePath**(): ?string

Отримує шлях XPath, яким розташований вузол.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок (string), що містить XPath або **`null`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **DOMNode::getNodePath()****

` <?php// Створення об'єкту DOMDocument$dom u003d new DOMDocument;// Завантаження XML$dom->loadXML('<fruits> <apples>  <apple>braeburn</apple>  <app> /apples> <pears>  <pear>conference</pear> </pears></fruits>');// ВисновокXPath для кожного елементаforeach ($dom->getElementsByTagName('*') as $ node->getNodePath() . "
";}?> `

Результат виконання цього прикладу:

/fruits
/fruits/apples
/fruits/apples/apple[1]
/fruits/apples/apple[2]
/fruits/pears
/fruits/pears/pear

### Дивіться також

- [DOMXPath](class.domxpath.md)
