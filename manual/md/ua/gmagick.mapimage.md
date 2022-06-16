- [« Gmagick::magnifyimage](gmagick.magnifyimage.md)
- [Gmagick::medianfilterimage »](gmagick.medianfilterimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Замінює кольори зображення на найближчий колір із еталонного
зображення

# Gmagick::mapimage

(PECL gmagick \>u003d Unknown)

Gmagick::mapimage — Замінює кольори зображення на найближчий колір
еталонного зображення

### Опис

public **Gmagick::mapimage**([gmagick](class.gmagick.md) `$gmagick`,
bool `$dither`): [Gmagick](class.gmagick.md)

Замінює кольори зображення на найближчий колір із еталонного зображення.

### Список параметрів

`gmagick`
Еталонне зображення.

`dither`
Встановіть для цього цілого числа значення, відмінне від нуля, щоб
розмити зображення, що відображається.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md).

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
