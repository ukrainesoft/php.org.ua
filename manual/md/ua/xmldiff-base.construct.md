- [« XMLDiff\Base](class.xmldiff-base.md)
- [XMLDiff\Base::diff »](xmldiff-base.diff.md)

- [PHP Manual](index.md)
- [XMLDiff\Base](class.xmldiff-base.md)
- Конструктор

# XMLDiff\Base::\_\_construct

(PECL xmldiff \>u003d 0.8.0)

XMLDiff\Base::\_\_construct - Конструктор

### Опис

public **XMLDiff\Base::\_\_construct**(string `$nsname`)

Базовий конструктор для всіх робочих класів модуля xmldiff.

### Список параметрів

`nsname`
Вибране ім'я простору для порівняння документів. Простір
імен за замовчуванням http://www.locus.cz/diffmark і цього достатньо для
уникнення конфлікту просторів імен. Використовуйте цей параметр, якщо,
з якоїсь причини, ви хочете змінити значення за замовчуванням.
