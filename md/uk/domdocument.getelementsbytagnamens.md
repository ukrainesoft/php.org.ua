- [«
DOMDocument::getElementsByTagName](domdocument.getelementsbytagname.md)
- [DOMDocument::importNode »](domdocument.importnode.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Шукає всі елементи із заданим ім'ям у вказаному просторі імен

# DOMDocument::getElementsByTagNameNS

(PHP 5, PHP 7, PHP 8)

DOMDocument::getElementsByTagNameNS — Шукає всі елементи із заданим
ім'ям у вказаному просторі імен

### Опис

public **DOMDocument::getElementsByTagNameNS**(?string `$namespace`,
string `$localName`): [DOMNodeList](class.domnodelist.md)

Повертає об'єкт [DOMNodeList](class.domnodelist.md) з усіма
елементами із заданим локальним ім'ям та URI простору імен.

### Список параметрів

`namespace`
URI простір імен. Спеціальне значення `*` відповідає всім
просторам імен.

`localName`
Локальне ім'я елементів, що шукаються. Спеціальне значення `*` відповідає
всім локальним іменам.

### Значення, що повертаються

Новий об'єкт класу [DOMNodeList](class.domnodelist.md), що містить
усі знайдені елементи.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----|
| 8.0.3 | `namespace` тепер припускає значення null. |

### Приклади

**Приклад #1 Отримання всіх елементів XInclude**

` <?php$xml u003d <<<EOD<?xml versionu003d"1.0" ?><chapter xmlns:xiu003d"http://www.w3.org/2001/XInclude"><title>Books of the other guy..</title><para> <xi:include hrefu003d"book.xml">  <xi:fallback>   <error>xinclude: book.xml not found</error>  </xi:fallback> </xi :include> <include> This is another namespace </include></para></chapter>EOD;$dom u003d new DOMDocument;// завантажити XML-рядок, визначений вище$dom->loadXML$x ($dom->getElementsByTagNameNS('http://www.w3.org/2001/XInclude', '*') as $element) {    echo 'локальне ім'я: ', $element->localName, ',' , $element->prefix, "
";}?> `

Результат виконання цього прикладу:

локальне ім'я: include, префікс: xi
локальне ім'я: fallback, префікс: xi

### Дивіться також

- [DOMDocument::getElementsByTagName()](domdocument.getelementsbytagname.md) -
Шукає всі елементи із заданим локальним ім'ям
