- [« XMLDiff\DOM](class.xmldiff-dom.md)
- [XMLDiff\DOM::merge »](xmldiff-dom.merge.md)

- [PHP Manual](index.md)
- [XMLDiff\DOM](class.xmldiff-dom.md)
- Пошук відмінностей у двох об'єктах DOMDocument

# XMLDiff\DOM::diff

(PECL xmldiff \>u003d 0.8.0)

XMLDiff\DOM::diff — Пошук відмінностей у двох об'єктах DOMDocument

### Опис

public **XMLDiff\DOM::diff**([DOMDocument](class.domdocument.md)
`$from`, [DOMDocument](class.domdocument.md) `$to`):
[DOMDocument](class.domdocument.md)

Шукає відмінності у двох об'єктах DOMDocument та повертає новий об'єкт,
містить ці відмінності.

### Список параметрів

`from`
Вихідний об'єкт DOMDocument.

`to`
Об'єкт DOMDocument, з яким проводиться порівняння.

### Значення, що повертаються

Новий об'єкт DOMDocument з інформацією про знайдені відмінності, або NULL.
