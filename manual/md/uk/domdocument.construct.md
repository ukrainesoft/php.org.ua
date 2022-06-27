- [«DOMDocument](class.domdocument.md)
- [DOMDocument::createAttribute »](domdocument.createattribute.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Створює новий об'єкт DOMDocument

# DOMDocument::\_\_construct

(PHP 5, PHP 7, PHP 8)

DOMDocument::\_\_construct — Створює новий об'єкт DOMDocument

### Опис

public **DOMDocument::\_\_construct**(string `$version` u003d "1.0", string
`$encoding` u003d "")

Створює новий об'єкт [DOMDocument](class.domdocument.md).

### Список параметрів

`version`
Номер версії документа як частина оголошення XML.

`encoding`
Кодування документа як частина оголошення XML.

### Приклади

**Приклад #1 Створення об'єкту DOMDocument**

` <?php$dom u003d new DOMDocument('1.0', 'iso-8859-1');echo $dom->saveXML(); /* <?xml versionu003d"1.0" encodingu003d"iso-8859-1"?> */?> `

### Дивіться також

- [DOMImplementation::createDocument()](domimplementation.createdocument.md) -
Створює об'єкт класу DOMDocument заданого типу з його елементом
document
