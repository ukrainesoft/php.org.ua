- [« Gmagick::setsize](gmagick.setsize.md)
- [Gmagick::solarizeimage »](gmagick.solarizeimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Створює паралелограм

# Gmagick::shearimage

(PECL gmagick \>u003d Unknown)

Gmagick::shearimage — Створює паралелограм

### Опис

public
**Gmagick::shearimage**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$color`, float `$xShear`, float `$yShear`):
[Gmagick](class.gmagick.md)

Зсуває один край зображення по осі X або Y, утворюючи паралелограм.
Зсув у напрямку X зсуває край по осі X, а зсув у напрямку Y
переміщує край по осі Y. Величина зсуву контролюється кутом зсуву.
Для зсуву в напрямку X xShear вимірюється щодо осі Y і
аналогічно для зсуву в напрямку Y yShear вимірюється
щодо осі X. Порожні трикутники, що залишилися від обрізки
зображення заповнюються кольором фону.

### Список параметрів

`col`
Піксельна паличка фону.

`xShear`
Число градусів для зсуву зображення на осі X.

`yShear`
Число градусів для зсуву зображення на осі Y.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
