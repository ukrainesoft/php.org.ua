- [« XMLDiff\Base::merge](xmldiff-base.merge.md)
- [XMLDiff\DOM::diff »](xmldiff-dom.diff.md)

- [PHP Manual](index.md)
- [XMLDiff](book.xmldiff.md)
- Клас XMLDiff\DOM

# Клас XMLDiff\DOM

(PECL xmldiff \>u003d 0.8.0)

## Вступ

## Огляд класів

class **XMLDiff\DOM** extends [XMLDiff\Base](class.xmldiff-base.md) {

/\* Методи \*/

public
[diff](xmldiff-dom.diff.md)([DOMDocument](class.domdocument.md)
`$from`, [DOMDocument](class.domdocument.md) `$to`):
[DOMDocument](class.domdocument.md)

public
[merge](xmldiff-dom.merge.md)([DOMDocument](class.domdocument.md)
`$src`, [DOMDocument](class.domdocument.md) `$diff`):
[DOMDocument](class.domdocument.md)

/\* Наслідувані методи \*/

abstract public
[XMLDiff\Base::diff](xmldiff-base.diff.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$from`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$to`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public
[XMLDiff\Base::merge](xmldiff-base.merge.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$src`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$diff`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

}

## Зміст

- [XMLDiff\DOM::diff](xmldiff-dom.diff.md) — Пошук відмінностей у двох
об'єктах DOMDocument
- [XMLDiff\DOM::merge](xmldiff-dom.merge.md) — Об'єднує об'єкт
DOMDocument, на підставі іншого об'єкта DOMDocument, отриманого з
за допомогою XMLDiff\DOM::diff
