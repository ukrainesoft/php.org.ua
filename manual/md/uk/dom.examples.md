- [«Зумовлені константи](dom.constants.md)
- [DOMAttr »](class.domattr.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Приклади

# Приклади

Багато прикладів цього посібника вимагають XML-файл. Ми будемо
використовувати `book.xml`, який має такий зміст:

**Приклад #1 book.xml**

`` xmlcode
<?xml versionu003d"1.0" encodingu003d"utf-8"?>
<!DOCTYPE book PUBLIC "-//OASIS//DTD DocBook XML V4.1.2//EN"
"http://www.oasis-open.org/docbook/xml/4.1.2/docbookx.dtd" [
]>
<book idu003d"listing">
<title>Мої списки</title>
<chapter idu003d"books">
<title>Мої книги</title>
<para>
<informaltable>
<tgroup colsu003d"4">
<thead>
<row>
<entry>Назва</entry>
<entry>Автор</entry>
<entry>Мова</entry>
<entry>ISBN</entry>
</row>
</thead>
<tbody>
<row>
<entry>The Grapes of Wrath</entry>
<entry>John Steinbeck</entry>
<entry>en</entry>
<entry>0140186409</entry>
</row>
<row>
<entry>The Pearl</entry>
<entry>John Steinbeck</entry>
<entry>en</entry>
<entry>014017737X</entry>
</row>
<row>
<entry>Samarcande</entry>
<entry>Amine Maalouf</entry>
<entry>fr</entry>
<entry>2253051209</entry>
</row>
<!-- TODO: У мене ще є багато недоданих книг... -->
</tbody>
</tgroup>
</informaltable>
</para>
</chapter>
</book>
````
