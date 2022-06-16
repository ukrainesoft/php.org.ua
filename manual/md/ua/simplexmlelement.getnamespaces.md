- [« SimpleXMLElement::getName](simplexmlelement.getname.md)
- [SimpleXMLElement::registerXPathNamespace
»](simplexmlelement.registerxpathnamespace.md)

- [PHP Manual](index.md)
- [SimpleXMLElement](class.simplexmlelement.md)
- Повертає простір імен, що використовуються в документі

# SimpleXMLElement::getNamespaces

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SimpleXMLElement::getNamespaces — Повертає простір імен,
використовуються в документі

### Опис

public **SimpleXMLElement::getNamespaces**(bool `$recursive` u003d
**`false`**): array

Повертає простір імен, що використовуються в документі

### Список параметрів

`recursive`
Якщо зазначено, то повертає всі використовувані простори імен
батьківського вузла та його дочірніх елементів. В іншому випадку
повертає використовується простір імен кореневого вузла.

### Значення, що повертаються

Метод `getNamespaces` повертає масив (array) із назвами просторів
імен та пов'язаними з ними URI.

### Приклади

**Приклад #1 Отримання просторів імен, які використовуються в документі**

` <?php$xml u003d <<<XML<?xml versionu003d"1.0" standaloneu003d"yes"?><people xmlns:pu003d"http://example.org/ns" xmlns:tu003d"http: //example.org/test">    <p:person idu003d"1">John Doe</p:person>    <p:person idu003d"2">Susie Q. Public</p:person></people >XML;$sxe u003d new SimpleXMLElement($xml);$namespaces u003d $sxe->getNamespaces(true);var_dump($namespaces);?> `

Результат виконання цього прикладу:

array(1) {
["p"]u003d>
string(21) "http://example.org/ns"
}

### Дивіться також

- [SimpleXMLElement::getDocNamespaces()](simplexmlelement.getdocnamespaces.md) -
Повертає простір імен, оголошених у документі
- [SimpleXMLElement::registerXPathNamespace()](simplexmlelement.registerxpathnamespace.md) -
Створює префікс/простір імен контексту для наступного запиту
XPath
