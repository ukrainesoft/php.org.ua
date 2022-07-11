- [« Установка](xmldiff.installation.md)
- [XMLDiff\Base::\_\_construct »](xmldiff-base.construct.md)

- [PHP Manual](index.md)
- [XMLDiff](book.xmldiff.md)
- Клас XMLDiff\Base

# Клас XMLDiff\Base

(PECL xmldiff \>u003d 0.8.0)

## Вступ

Базовий абстрактний клас всім класів порівняння даного модуля.

## Огляд класів

class **XMLDiff\Base** {

/\* Методи \*/

public [\_\_construct](xmldiff-base.construct.md)(string `$nsname`)

abstract public
[diff](xmldiff-base.diff.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$from`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$to`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public
[merge](xmldiff-base.merge.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$src`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$diff`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

}

## Зміст

- [XMLDiff\Base::\_\_construct](xmldiff-base.construct.md) -
Конструктор
- [XMLDiff\Base::diff](xmldiff-base.diff.md) — Порівняє
двох документів XML
- [XMLDiff\Base::merge](xmldiff-base.merge.md) — Створює новий
документ XML, ґрунтуючись на інформації про його відмінність від іншого
