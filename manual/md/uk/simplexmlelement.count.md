- [« SimpleXMLElement::\_\_construct](simplexmlelement.construct.md)
- [SimpleXMLElement::getDocNamespaces
»](simplexmlelement.getdocnamespaces.md)

- [PHP Manual](index.md)
- [SimpleXMLElement](class.simplexmlelement.md)
- Підраховує кількість дочірніх елементів у поточного елемента

# SimpleXMLElement::count

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SimpleXMLElement::count — Підраховує кількість дочірніх елементів у
поточного елемента

### Опис

public **SimpleXMLElement::count**(): int

Цей метод підраховує кількість дочірніх елементів у поточного
елемент.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає кількість елементів поточного елемента.

### Приклади

**Приклад #1 Підрахунок кількості дочірніх елементів**

` <?php$xml u003d <<<EOF<people> <person nameu003d"Людина 1">  <child/>  <child/>  <child/> </person> <person nameu003d"Людина 2">  />  <child/>  <child/>  <child/>  <child/> </person></people>EOF;$elem u003d new SimpleXMLElement($xml);foreach ($elem as $person)   | %s має %d дітей.
", $person['name'], $person->count());}?> `

Результат виконання цього прикладу:

Чоловік 1 має 3 дітей.
Чоловік 2 має 5 дітей.

### Дивіться також

- [SimpleXMLElement::children()](simplexmlelement.children.md) -
Знаходить дочірні елементи цього вузла
