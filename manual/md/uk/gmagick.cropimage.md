- [«Gmagick::\_\_construct](gmagick.construct.md)
- [Gmagick::cropthumbnailimage »](gmagick.cropthumbnailimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Обрізає зображення

# Gmagick::cropimage

(PECL gmagick \>u003d Unknown)

Gmagick::cropimage — Обрізає зображення

### Опис

public **Gmagick::cropimage**(
int `$width`,
int `$height` ,
int `$x`,
int `$y`
): [Gmagick](class.gmagick.md)

Обрізає зображення.

### Список параметрів

`width`
Ширина ділянки, що зберігається.

`height`
Висота ділянки, що зберігається.

`x`
X координата лівого верхнього кута області, що зберігається.

`y`
Y координата лівого верхнього кута області, що зберігається.

### Значення, що повертаються

Обрізаний об'єкт [Gmagick](class.gmagick.md).

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
