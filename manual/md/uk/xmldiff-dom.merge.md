- [« XMLDiff\DOM::diff](xmldiff-dom.diff.md)
- [XMLDiff\Memory »](class.xmldiff-memory.md)

- [PHP Manual](index.md)
- [XMLDiff\DOM](class.xmldiff-dom.md)
- Об'єднує об'єкт DOMDocument, на підставі іншого об'єкта
DOMDocument, отриманого за допомогою XMLDiff\DOM::diff

# XMLDiff\DOM::merge

(PECL xmldiff \>u003d 0.8.0)

XMLDiff\DOM::merge — Об'єднує об'єкт DOMDocument, на основі іншого
об'єкта DOMDocument, отриманого за допомогою XMLDiff\DOM::diff

### Опис

public **XMLDiff\DOM::merge**([DOMDocument](class.domdocument.md)
`$src`, [DOMDocument](class.domdocument.md) `$diff`):
[DOMDocument](class.domdocument.md)

Об'єднує об'єкт DOMDocument, виходячи з іншого об'єкта DOMDocument,
отриманого за допомогою XMLDiff\DOM::diff.

### Список параметрів

`src`
Вихідний об'єкт DOMDocument.

`diff`
Об'єкт DOMDocument, що містить інформацію, отриману за допомогою
XMLDiff\DOM::diff.

### Значення, що повертаються

Об'єднаний DOMDocument чи NULL.
