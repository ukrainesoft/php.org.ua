- [« XMLDiff\Memory::merge](xmldiff-memory.merge.md)
- [XMLDiff\File::diff »](xmldiff-file.diff.md)

- [PHP Manual](index.md)
- [XMLDiff](book.xmldiff.md)
- Клас XMLDiff\File

# Клас XMLDiff\File

(PECL xmldiff \>u003d 0.8.0)

## Вступ

## Огляд класів

class **XMLDiff\File** extends [XMLDiff\Base](class.xmldiff-base.md) {

/\* Методи \*/

public [diff](xmldiff-file.diff.md)(string `$from`, string `$to`):
string

public [merge](xmldiff-file.merge.md)(string `$src`, string `$diff`):
string

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

- [XMLDiff\File::diff](xmldiff-file.diff.md) — Порівняння двох файлів
XML
- [XMLDiff\File::merge](xmldiff-file.merge.md) — Застосувати зміни
до документа XML
