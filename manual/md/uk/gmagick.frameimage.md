- [«Gmagick::flopimage](gmagick.flopimage.md)
- [Gmagick::gammaimage »](gmagick.gammaimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Додає змодельований тривимірний кордон

# Gmagick::frameimage

(PECL gmagick \>u003d Unknown)

Gmagick::frameimage — Додає змодельований тривимірний кордон

### Опис

public **Gmagick::frameimage**(
[GmagickPixel](class.gmagickpixel.md) `$color`,
int `$width`,
int `$height`,
int `$inner_bevel`,
int `$outer_bevel`
): [Gmagick](class.gmagick.md)

Додає змодельовану тривимірну рамку навколо зображення. Ширина та
висота визначають ширину межі вертикальної та горизонтальної сторін
рамки. Внутрішній та зовнішній скоси вказують ширину внутрішньої та зовнішньої
тіні рамки.

### Список параметрів

`col`
Об'єкт [GmagickPixel](class.gmagickpixel.md) або число з плаваючою
точкою, що представляє матовий колір.

`width`
Ширина кордону.

`height`
Висота кордону.

`inner_bevel`
Внутрішня ширина скосу.

`outer_bevel`
Зовнішня ширина скосу.

### Значення, що повертаються

Обрамлений об'єкт [Gmagick](class.gmagick.md).

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
