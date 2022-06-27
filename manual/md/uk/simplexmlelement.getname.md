- [«
SimpleXMLElement::getDocNamespaces](simplexmlelement.getdocnamespaces.md)
- [SimpleXMLElement::getNamespaces
»](simplexmlelement.getnamespaces.md)

- [PHP Manual](index.md)
- [SimpleXMLElement](class.simplexmlelement.md)
- Отримує ім'я елемента XML

# SimpleXMLElement::getName

(PHP 5 \>u003d 5.1.3, PHP 7, PHP 8)

SimpleXMLElement::getName — Отримує ім'я елемента XML

### Опис

public **SimpleXMLElement::getName**(): string

Отримує ім'я елемента XML.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Метод `getName` повертає ім'я тега XML у вигляді рядка (string), на
який посилається на об'єкт SimpleXMLElement.

### Приклади

> **Примітка**:
>
> Перелічені приклади можуть містити "example.php", в якому
> визначається XML-рядок, розташована в першому прикладі посібника з
> [базове використання](simplexml.examples-basic.md).

**Приклад #1 Отримання імен XML-елемента**

` <?phpinclude ''example.php';$sxe u003d new SimpleXMLElement($xmlstr);echo $sxe->getName() . "
";foreach ($sxe->children() as $child){   echo $child->getName() . "
";}?> `

Результат виконання цього прикладу:

movies
movie
