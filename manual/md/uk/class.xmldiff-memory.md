- [« XMLDiff\DOM::merge](xmldiff-dom.merge.md)
- [XMLDiff\Memory::diff »](xmldiff-memory.diff.md)

- [PHP Manual](index.md)
- [XMLDiff](book.xmldiff.md)
- Клас XMLDiff\Memory

# Клас XMLDiff\Memory

(PECL xmldiff \>u003d 0.8.0)

## Вступ

## Огляд класів

class **XMLDiff\Memory** extends [XMLDiff\Base](class.xmldiff-base.md)
{

/\* Методи \*/

public [diff](xmldiff-memory.diff.md)(string `$from`, string `$to`):
string

public [merge](xmldiff-memory.merge.md)(string `$src`, string
`$diff`): string

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

- [XMLDiff\Memory::diff](xmldiff-memory.diff.md) — Порівняння двох
документів XML
- [XMLDiff\Memory::merge](xmldiff-memory.merge.md) — Застосувати
зміни до документа XML
