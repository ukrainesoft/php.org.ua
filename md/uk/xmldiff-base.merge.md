- [« XMLDiff\Base::diff](xmldiff-base.diff.md)
- [XMLDiff\DOM »](class.xmldiff-dom.md)

- [PHP Manual](index.md)
- [XMLDiff\Base](class.xmldiff-base.md)
- Створює новий документ XML, ґрунтуючись на інформації про його відмінність
від іншого

# XMLDiff\Base::merge

(PECL xmldiff \>u003d 0.8.0)

XMLDiff\Base::merge — Створює новий документ XML на основі
інформації про його відмінність від іншого

### Опис

abstract public
**XMLDiff\Base::merge**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$src`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$diff`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Абстрактний метод порівняння для реалізації у класах спадкоємців.

Основна мета методу - створення нового документа на основі
інформації про розходження двох документів.

### Список параметрів

`src`
Початковий документ XML.

`diff`
Документ, створений методом, що реалізує абстрактний метод
XMLDiff\Base::diff.

### Значення, що повертаються

Залежить від реалізації.
