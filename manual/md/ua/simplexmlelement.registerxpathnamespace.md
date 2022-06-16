- [«
SimpleXMLElement::getNamespaces](simplexmlelement.getnamespaces.md)
- [SimpleXMLElement::saveXML »](simplexmlelement.savexml.md)

- [PHP Manual](index.md)
- [SimpleXMLElement](class.simplexmlelement.md)
- Створює префікс/простір імен контексту для наступного запиту
XPath

# SimpleXMLElement::registerXPathNamespace

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SimpleXMLElement::registerXPathNamespace — Створює префікс/простір
імен контексту для наступного запиту XPath

### Опис

public **SimpleXMLElement::registerXPathNamespace**(string `$prefix`,
string `$namespace`): bool

Створює префікс/простір імен контексту для наступного запиту
XPath. Зокрема це необхідно, якщо постачальник цього XML-документа
змінює префікс простору імен. `registerXPathNamespace` створить
префікс для пов'язаного простору імен, дозволяючи отримати доступ до
вузлам у цьому просторі імен без необхідності зміни коду,
що враховує нові префікси, надані постачальником.

### Список параметрів

`prefix`
Префікс використовуваного простору імен у запиті XPath для отримання
простору імен в `namespace`.

`namespace`
Використовуваний простір імен для запиту XPath. Воно має
відповідати простору імен у використовуваному XML-документі або
запит XPath, який використовує `prefix` не дасть жодних результатів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Встановлення префіксу простору імен для використання в
запит XPath**

`<?php$xml u003d <<<EOD<book xmlns:chapu003d"http://example.org/chapter-title">   <title>My Book</title>   <chapter idu003d"1">       :title>Chapter 1</chap:title>         <para>Donec velit. Nullam eget tellus vitae tortor gravida scelerisque. Inorci lorem, cursus imperdiet, ultricies non, hendrerit et, orci. Nulla facilisi. Nullam velit nisl, laoreet id, condimentum ut,            ultricies id, mauris.</para>    </chapter>    <chapter idu003d"2">        <chap:title>Chapter 2</chap:title>        <para>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin             gravida. Phasellus tincidunt massa vel urna. Proin adipiscing quam             vitae odio. Sed dictum. Ut tincidunt lorem ac lorem. Duis eros             tellus, pharetra id, faucibus eu, dapibus dictum, odio.</para>    </chapter></book>EOD;$sxe'u003d http://example.org/chapter-title');$result u003d $sxe->xpath('//c:title');foreach ($result as $title) { echo $title . "
";}?> `

Результат виконання цього прикладу:

Chapter 1
Chapter 2

Зверніть увагу на те, як в прикладі XML-документа встановлюється
простір імен із префіксом `chap`. Уявіть, що цей документ
(або інший схожий) використав префікс `c` у минулому для одного і того
ж простору імен. Оскільки він змінився, запит XPath більше не
поверне правильні результати, і запит доведеться змінювати. Використання
`registerXPathNamespace` дозволяє уникнути майбутніх модифікацій
навіть якщо постачальник змінить префікс простору імен.

### Дивіться також

- [SimpleXMLElement::xpath()](simplexmlelement.xpath.md) - Запускає
запит XPath до XML-даних
- [SimpleXMLElement::getDocNamespaces()](simplexmlelement.getdocnamespaces.md) -
Повертає простір імен, оголошених у документі
- [SimpleXMLElement::getNamespaces()](simplexmlelement.getnamespaces.md) -
Повертає простір імен, що використовуються в документі
