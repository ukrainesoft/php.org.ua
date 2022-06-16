- [« XMLDiff\Memory](class.xmldiff-memory.md)
- [XMLDiff\Memory::merge »](xmldiff-memory.merge.md)

- [PHP Manual](index.md)
- [XMLDiff\Memory](class.xmldiff-memory.md)
- Порівняння двох документів XML

# XMLDiff\Memory::diff

(PECL xmldiff \>u003d 0.8.0)

XMLDiff\Memory::diff — Порівняння двох документів XML

### Опис

public **XMLDiff\Memory::diff**(string `$from`, string `$to`): string

Порівнює два рядки з XML і повертає рядок з інформацією про
розходження.

### Список параметрів

`from`
XML-документ джерело.

`to`
Цільовий документ XML.

### Значення, що повертаються

Рядок з XML-документом, що містить інформацію про відмінності, або
**`null`**.
