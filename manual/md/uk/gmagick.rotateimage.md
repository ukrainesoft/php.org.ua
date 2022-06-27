- [«Gmagick::rollimage](gmagick.rollimage.md)
- [Gmagick::scaleimage »](gmagick.scaleimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Повертає зображення

# Gmagick::rotateimage

(PECL gmagick \>u003d Unknown)

Gmagick::rotateimage — Повертає зображення

### Опис

public
**Gmagick::rotateimage**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$color`, float `$degrees`): [Gmagick](class.gmagick.md)

Повертає зображення на вказану кількість градусів. Порожні
трикутники, що залишилися від повороту зображення, заповнюються кольором
фону.

### Список параметрів

`col`
Піксель фону.

`degrees`
Число градусів для повороту зображення.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
