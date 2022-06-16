- [« DOMDocumentFragment](class.domdocumentfragment.md)
- [DOMDocumentFragment::\_\_construct
»](domdocumentfragment.construct.md)

- [PHP Manual](index.md)
- [DOMDocumentFragment](class.domdocumentfragment.md)
- Додавання необроблених даних XML

# DOMDocumentFragment::appendXML

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

DOMDocumentFragment::appendXML — Додавання необроблених даних XML

### Опис

public **DOMDocumentFragment::appendXML**(string `$data`): bool

Додає необроблені дані XML в об'єкт класу DOMDocumentFragment.

Цей метод не є частиною стандарту DOM. Він був розроблений для
спрощення процедури додавання XML DocumentFragment до DOMDocument.

Якщо ви хочете дотримуватись стандарту, вам потрібно буде створити тимчасовий
DOMDocument з фіктивним коренем, а потім пройти по всіх вузлах нащадкам
кореневого вузла XML-документа, щоб додати їх.

### Список параметрів

`data`
XML для додавання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Додавання XML-даних у документ**

` <?php$doc u003d new DOMDocument();$doc->loadXML("<root/>");$f u003d $doc->createDocumentFragment();$f->appendXML("<foo>text</ foo><bar>text2</bar>");$doc->documentElement->appendChild($f);echo $doc->saveXML();?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0"?>
<root><foo>text</foo><bar>text2</bar></root>
