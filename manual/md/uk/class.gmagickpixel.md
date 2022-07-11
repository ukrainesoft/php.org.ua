- [« GmagickDraw::settextencoding](gmagickdraw.settextencoding.md)
- [GmagickPixel::\_\_construct »](gmagickpixel.construct.md)

- [PHP Manual](index.md)
- [Gmagick](book.gmagick.md)
- Клас GmagickPixel

# Клас GmagickPixel

(PECL gmagick \>u003d Unknown)

## Вступ

## Огляд класів

class **GmagickPixel** {

/\* Методи \*/

public [\_\_construct](gmagickpixel.construct.md)(string `$color` u003d ?)

public [getcolor](gmagickpixel.getcolor.md)(bool `$as_array` u003d
**`false`**, bool `$normalize_array` u003d **`false`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getcolorcount](gmagickpixel.getcolorcount.md)(): int

public [getcolorvalue](gmagickpixel.getcolorvalue.md)(int `$color`):
float

public [setcolor](gmagickpixel.setcolor.md)(string `$color`):
[GmagickPixel](class.gmagickpixel.md)

public [setcolorvalue](gmagickpixel.setcolorvalue.md)(int `$color`,
float `$value`): [GmagickPixel](class.gmagickpixel.md)

}

## Зміст

- [GmagickPixel::\_\_construct](gmagickpixel.construct.md) -
Конструктори класу GmagickPixel
- [GmagickPixel::getcolor](gmagickpixel.getcolor.md) — Повертає
колір
- [GmagickPixel::getcolorcount](gmagickpixel.getcolorcount.md)
Отримати кількість пікселів зображення, які мають заданий колір
- [GmagickPixel::getcolorvalue](gmagickpixel.getcolorvalue.md) -
Повертає нормалізоване значення для заданого колірного каналу
- [GmagickPixel::setcolor](gmagickpixel.setcolor.md) — Задати колір
- [GmagickPixel::setcolorvalue](gmagickpixel.setcolorvalue.md) -
Встановити нормалізоване значення колірного каналу
