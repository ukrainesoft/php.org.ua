- [« SimpleXMLElement::attributes](simplexmlelement.attributes.md)
- [SimpleXMLElement::\_\_construct »](simplexmlelement.construct.md)

- [PHP Manual](index.md)
- [SimpleXMLElement](class.simplexmlelement.md)
- Знаходить дочірні елементи цього вузла

# SimpleXMLElement::children

(PHP 5, PHP 7, PHP 8)

SimpleXMLElement::children — Знаходить дочірні елементи цього сайту

### Опис

public **SimpleXMLElement::children**(?string `$namespaceOrPrefix` u003d
**`null`**, bool `$isPrefix` u003d **`false`**):
?[SimpleXMLElement](class.simplexmlelement.md)

Цей метод знаходить усі дочірні елементи вузла. Результат підпорядковується
стандартним правилам ітерації.

> **Примітка**: SimpleXML містить правило додавання ітеративних
> властивостей до більшості методів. Вони не можуть бути переглянуті з
> використанням [var_dump()](function.var-dump.md) або будь-яких
> інших засобів аналізу об'єктів.

### Список параметрів

`namespaceOrPrefix`
Необов'язковий простір імен XML.

`isPrefix`
Якщо `isPrefix` встановлено в **`true`**, `namespaceOrPrefix` буде
розглянуто як префікс. Якщо **`false`**, `namespaceOrPrefix` буде
розглянуто як простір імен URL.

### Значення, що повертаються

Повертає елемент [SimpleXMLElement](class.simplexmlelement.md), навіть
якщо вузол не має дочірніх елементів, якщо вузол не представляє
атрибут, у разі функція повертає **`null`**.

### Приклади

**Приклад #1 Обхід псевдомасиву `children()`**

` <?php$xml u003d new SimpleXMLElement('<person> <child roleu003d"син">  <child roleu003d"дочка"/> </child> <child roleu003d"дочка">  <child roleu003d"син >   <child roleu003d"син"/>  </child> </child></person>');foreach ($xml->children() as $second_gen) {    echo ' У людини|. $second_gen['role']; foreach ($second_gen->children() as $third_gen) {        echo ', у якого народився(-ась) ' . $third_gen['role'] . ';'; foreach ($third_gen->children() as $fourth_gen) {            echo ' і у ' . $third_gen['role'] . ' народився(-ась) ' . $fourth_gen['role']; }    }}?> `

Результат виконання цього прикладу:

У людини народився син, у якого народився дочка; У людини
народився дочка, у якого народився син; і в син народився син

**Приклад #2 Використання простору імен**

` <?php$xml u003d '<example xmlns:foou003d"my.foo.urn">  <foo:a>Яблуко</foo:a>  <foo:b>Банан</foo:b>  <c>Вишня </c></example>';$sxe u003d new SimpleXMLElement($xml);$kids u003d $sxe->children('foo');var_dump(count($kids));$kids u003d $sxe-> children('foo', TRUE);var_dump(count($kids));$kids u003d $sxe->children('my.foo.urn');var_dump(count($kids));$kids u003d $sxe ->children('my.foo.urn', TRUE);var_dump(count($kids));$kids u003d $sxe->children();var_dump(count($kids));?> `

int(0)
int(2)
int(2)
int(0)
int(1)

### Дивіться також

- [SimpleXMLElement::count()](simplexmlelement.count.md) -
Підраховує кількість дочірніх елементів у поточного елемента
- [count()](function.count.md) - Підраховує кількість елементів
масиву або Countable об'єкті
