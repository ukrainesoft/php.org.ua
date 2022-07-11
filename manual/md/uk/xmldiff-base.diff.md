- [« XMLDiff\Base::\_\_construct](xmldiff-base.construct.md)
- [XMLDiff\Base::merge »](xmldiff-base.merge.md)

- [PHP Manual](index.md)
- [XMLDiff\Base](class.xmldiff-base.md)
- Здійснює порівняння двох документів XML

# XMLDiff\Base::diff

(PECL xmldiff \>u003d 0.8.0)

XMLDiff\Base::diff — Порівняє два документи XML

### Опис

abstract public
**XMLDiff\Base::diff**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$from`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$to`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Абстрактний метод порівняння для реалізації у класах спадкоємців.

Головне завдання цього - створення списку відмінностей двох документів.
Порядок вхідних параметрів є важливим, оскільки від нього залежить результат.

### Список параметрів

`from`
Початковий документ XML.

`to`
XML документ, з яким проводиться порівняння.

### Значення, що повертаються

Залежить від реалізації.
