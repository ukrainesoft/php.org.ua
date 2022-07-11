- [« SimpleXMLElement::count](simplexmlelement.count.md)
- [SimpleXMLElement::getName »](simplexmlelement.getname.md)

- [PHP Manual](index.md)
- [SimpleXMLElement](class.simplexmlelement.md)
- Повертає простори імен, оголошених у документі

# SimpleXMLElement::getDocNamespaces

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SimpleXMLElement::getDocNamespaces — Повертає простір імен,
оголошені у документі

### Опис

public **SimpleXMLElement::getDocNamespaces**(bool `$recursive` u003d
**`false`**, bool `$fromRoot` u003d **`true`**): array\|false

Повертає простір імен, оголошених у документі

### Список параметрів

`recursive`
Якщо зазначено, то повертає всі оголошені простори імен
батьківського вузла та його дочірніх елементів. В іншому випадку,
повертає лише оголошений простір імен кореневого вузла.

`fromRoot`
Дозволяє рекурсивно перевірити простори імен біля дочірнього вузла.
кореневого вузла документа XML.

### Значення, що повертаються

Метод `getDocNamespaces` повертає масив (array) із назвами
просторів імен та пов'язаними з ними URI.

### Приклади

**Приклад #1 Отримання простору імен документа**

` <?php$xml u003d <<<XML<?xml versionu003d"1.0" standaloneu003d"yes"?><people xmlns:pu003d"http://example.org/ns">    <p:person idu003d "1">John Doe</p:person>    <p:person idu003d"2">Susie Q. Public</p:person></people>XML;$sxe u003d new SimpleXMLElement($xml);$namespaces u003d $sxe->getDocNamespaces();var_dump($namespaces);?> `

Результат виконання цього прикладу:

array(1) {
["p"]u003d>
string(21) "http://example.org/ns"
}

**Приклад #2 Робота з кількома просторами імен**

` <?php$xml u003d <<<XML<?xml versionu003d"1.0" standaloneu003d"yes"?><people xmlns:pu003d"http://example.org/ns" xmlns:tu003d"http: //example.org/test">    <p:person t:idu003d"1">John Doe</p:person>    <p:person t:idu003d"2" a:addru003d"123 Street" xmlns: au003d"http://example.org/addr">         Susie Q. Public    </p:person></people>XML;$sxe u003d new SimpleXMLElement($xml);$namespaces u003d $sName );var_dump($namespaces);?> `

Результат виконання цього прикладу:

array(3) {
["p"]u003d>
string(21) "http://example.org/ns"
["t"]u003d>
string(23) "http://example.org/test"
["a"]u003d>
string(23) "http://example.org/addr"
}

### Дивіться також

- [SimpleXMLElement::getNamespaces()](simplexmlelement.getnamespaces.md) -
Повертає простір імен, що використовуються в документі
- [SimpleXMLElement::registerXPathNamespace()](simplexmlelement.registerxpathnamespace.md) -
Створює префікс/простір імен контексту для наступного запиту
XPath
