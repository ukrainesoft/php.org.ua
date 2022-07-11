- [« DOMDocument::createTextNode](domdocument.createtextnode.md)
- [DOMDocument::getElementsByTagName
»](domdocument.getelementsbytagname.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Шукає елемент із певним ідентифікатором

# DOMDocument::getElementById

(PHP 5, PHP 7, PHP 8)

DOMDocument::getElementById — Шукає елемент із певним
ідентифікатором

### Опис

public **DOMDocument::getElementById**(string `$elementId`):
?[DOMElement](class.domelement.md)

Ця функція схожа на
[DOMDocument::getElementsByTagName](domdocument.getelementsbytagname.md),
але шукає елемент із заданим ідентифікатором.

Для роботи цієї функції необхідно встановити атрибути ідентифікаторів
за допомогою [DOMElement::setIdAttribute](domelement.setidattribute.md),
або DTD, який визначає атрибут ідентифікатора типу. В останньому
випадку перед використанням цієї функції вам необхідно буде перевірити
документ за допомогою [DOMDocument::validate](domdocument.validate.md)
або
[DOMDocument::$validateOnParse](class.domdocument.md#domdocument.props.validateonparse).

### Список параметрів

`elementId`
Унікальне значення ідентифікатора елемента.

### Значення, що повертаються

Повертає об'єкт [DOMElement](class.domelement.md) або **`null`**,
якщо елемент не знайдено.

### Приклади

**Приклад #1 Приклад використання DOMDocument::getElementById()**

Наступні приклади використовують файл `book.xml`, який містить наступні
дані:

`` xmlcode
<?xml versionu003d"1.0" encodingu003d"UTF-8"?>
<!DOCTYPE books [
<!ELEMENT books (book+)>
<!ELEMENT book (title, author+, xhtml:blurb?)>
<!ELEMENT title (#PCDATA)>
<!ELEMENT blurb (#PCDATA)>
<!ELEMENT author (#PCDATA)>
<!ATTLIST books xmlns CDATA #IMPLIED>
<!ATTLIST books xmlns:xhtml CDATA #IMPLIED>
<!ATTLIST book id ID #IMPLIED>
<!ATTLIST author email CDATA #IMPLIED>
]>
<?xml-stylesheet typeu003d"text/xsl" hrefu003d"style.xsl"?>
<books xmlnsu003d"http://books.php/" xmlns:xhtmlu003d"http://www.w3.org/1999/xhtml">
<book idu003d"php-basics">
<title>PHP Basics</title>
<author emailu003d"jim.smith@basics.php">Jim Smith</author>
<author emailu003d"jane.smith@basics.php">Jane Smith</author>
<xhtml:blurb><![CDATA[
<p><em>PHP Basics</em> надає інформацію про PHP.</p>
]]></xhtml:blurb>
</book>
<book idu003d"php-advanced">
<title>PHP Advanced Programming</title>
<author emailu003d"jon.doe@advanced.php">Jon Doe</author>
</book>
</books>
````

`<?php$doc u003d new DomDocument;// Потрібно перевірити документ перед тем як посилатися по ідентифікатору$doc->validateOnParse u003d true;$doc->Load('book.xml' basics': " . $doc->getElementById('php-basics')->tagName . "
";?> `

Результат виконання цього прикладу:

Елемент з ідентифікатором 'php-basics': book

### Дивіться також

- [DOMDocument::getElementsByTagName()](domdocument.getelementsbytagname.md) -
Шукає всі елементи із заданим локальним ім'ям
