- [« SimpleXMLElement::\_\_toString](simplexmlelement.tostring.md)
- [SimpleXMLIterator »](class.simplexmliterator.md)

- [PHP Manual](index.md)
- [SimpleXMLElement](class.simplexmlelement.md)
- Запускає запит XPath до XML-даних

# SimpleXMLElement::xpath

(PHP 5, PHP 7, PHP 8)

SimpleXMLElement::xpath — Запускає запит XPath до даних XML

### Опис

public **SimpleXMLElement::xpath**(string `$expression`):
array\|null\|false

Метод `xpath` шукає вузли SimpleXML з дочірніми елементами,
відповідні XPath `expression`.

### Список параметрів

`expression`
Шлях XPath

### Значення, що повертаються

Повертає масив (array) об'єктів SimpleXMLElement у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Xpath**

` <?php$string u003d <<<XML<a> <b>  <c>текст</c>  <c>реч</c> </b> <d>  <c>код</c> </ d></a>XML;$xml u003d new SimpleXMLElement($string);/* Пошук <a><b><c> */$result u003d $xml->xpath('/a/b/c') ;foreach ($result as $node) {   echo '/a/b/c: ',$node,"
";}/* Відносні шляхи також працюють... */$result u003d $xml->xpath('b/c');foreach ($result as $node) {    echo 'b/c: ',$node, "
";}?> `

Результат виконання цього прикладу:

/a/b/c: текст
/a/b/c: річ
b/c: текст
b/c: річ

Зверніть увагу, що обидва результати однакові.

### Дивіться також

- [SimpleXMLElement::registerXPathNamespace()](simplexmlelement.registerxpathnamespace.md) -
Створює префікс/простір імен контексту для наступного запиту
XPath
- [SimpleXMLElement::getDocNamespaces()](simplexmlelement.getdocnamespaces.md) -
Повертає простір імен, оголошених у документі
- [SimpleXMLElement::getNamespaces()](simplexmlelement.getnamespaces.md) -
Повертає простір імен, що використовуються в документі
- [Базове використання SimpleXML](simplexml.examples-basic.md)
