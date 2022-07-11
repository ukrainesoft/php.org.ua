- [«DOMEntityReference](class.domentityreference.md)
- [DOMException »](class.domexception.md)

- [PHP Manual](index.md)
- [DOMEntityReference](class.domentityreference.md)
- Створює новий об'єкт класу DOMEntityReference

# DOMEntityReference::\_\_construct

(PHP 5, PHP 7, PHP 8)

DOMEntityReference::\_\_construct — Створює новий об'єкт класу
DOMEntityReference

### Опис

public **DOMEntityReference::\_\_construct**(string `$name`)

Створює новий об'єкт класу
[DOMEntityReference](class.domentityreference.md).

### Список параметрів

`name`
Ім'я посилання на суть.

### Приклади

**Приклад #1 Створення нового об'єкту DOMEntityReference**

` <?php$dom u003d new DOMDocument('1.0', 'iso-8859-1');$element u003d $dom->appendChild(new DOMElement('root'));$entity u003d $element->appendChild( new DOMEntityReference('nbsp'));echo $dom->saveXML(); /* <?xml versionu003d"1.0" encodingu003d"iso-8859-1"?><root></root> */?> `

### Дивіться також

- [DOMDocument::createEntityReference()](domdocument.createentityreference.md) -
Створити новий вузол посилання на суть
