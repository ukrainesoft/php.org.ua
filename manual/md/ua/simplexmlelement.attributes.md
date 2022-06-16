- [« SimpleXMLElement::asXML](simplexmlelement.asxml.md)
- [SimpleXMLElement::children »](simplexmlelement.children.md)

- [PHP Manual](index.md)
- [SimpleXMLElement](class.simplexmlelement.md)
- Повертає атрибути елемента

# SimpleXMLElement::attributes

(PHP 5, PHP 7, PHP 8)

SimpleXMLElement::attributes — Повертає атрибути елемента

### Опис

public **SimpleXMLElement::attributes**(?string `$namespaceOrPrefix` u003d
**`null`**, bool `$isPrefix` u003d **`false`**):
?[SimpleXMLElement](class.simplexmlelement.md)

Ця функція повертає назви та значення атрибутів, визначені в
тег XML.

> **Примітка**: SimpleXML містить правило додавання ітеративних
> властивостей до більшості методів. Вони не можуть бути переглянуті з
> використанням [var_dump()](function.var-dump.md) або будь-яких
> інших засобів аналізу об'єктів.

### Список параметрів

`namespaceOrPrefix`
Необов'язковий простір імен для витягнутих атрибутів

`isPrefix`
Типово **`false`**

### Значення, що повертаються

Повертає об'єкт, що ітерується.
[SimpleXMLElement](class.simplexmlelement.md), яким можна
переміщуватись для перебору всіх атрибутів тега.

Повертає **`null`**, якщо викликаний об'єкт
[SimpleXMLElement](class.simplexmlelement.md) вже представляє
атрибут, а чи не тег.

### Приклади

**Приклад #1 Інтерпретація XML-рядка**

` <?php$string u003d <<<XML<a> <foo nameu003d"one" gameu003d"lonely">1</foo></a>XML;$xml u003d simplexml_load_string($string);foreach($ xml->foo[0]->attributes() as $a u003d> $b) {    echo $a,'u003d"',$b,"\"
";}?> `

Результат виконання цього прикладу:

nameu003d"one"
gameu003d"lonely"

### Дивіться також

- [Базове використання SimpleXML](simplexml.examples-basic.md)
