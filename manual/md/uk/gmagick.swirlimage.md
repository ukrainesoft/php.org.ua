- [«Gmagick::stripimage](gmagick.stripimage.md)
- [Gmagick::thumbnailimage »](gmagick.thumbnailimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Закручує пікселі навколо центру зображення

# Gmagick::swirlimage

(PECL gmagick \>u003d Unknown)

Gmagick::swirlimage — Закручує пікселі навколо центру зображення

### Опис

public **Gmagick::swirlimage**(float `$degrees`):
[Gmagick](class.gmagick.md)

Закручує пікселі навколо центру зображення, де градуси вказують
розмах дуги, якою переміщається кожен піксель. Ви отримуєте більше
драматичний ефект, коли градуси рухаються від 1 до 360.

### Список параметрів

`degrees`
Визначає герметичність закрученого ефекту.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
