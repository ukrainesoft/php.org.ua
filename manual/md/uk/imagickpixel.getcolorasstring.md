- [« ImagickPixel::getColor](imagickpixel.getcolor.md)
- [ImagickPixel::getColorCount »](imagickpixel.getcolorcount.md)

- [PHP Manual](index.md)
- [ImagickPixel](class.imagickpixel.md)
- Повертає колір у вигляді рядка

# ImagickPixel::getColorAsString

(PECL imagick 2 \>u003d 2.1.0, PECL imagick 3)

ImagickPixel::getColorAsString — Повертає колір у вигляді рядка

### Опис

public **ImagickPixel::getColorAsString**(): string

Повертає колір об'єкта ImagickPixel у вигляді рядка.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає колір об'єкта ImagickPixel у вигляді рядка.

### Приклади

**Приклад #1 Приклад використання **Imagick::getColorAsString()****

`<?php// Створення ImagickPixel з стандартним колірником 'brown'$color u003d new ImagickPixel('brown'); );print_r($colorInfo);?> `

Результат виконання цього прикладу:

rgb(165,42,42)

### Примітки

> **Примітка**: **Альфа канал не повертається**
>
> Функція не повертає значення альфа-каналу для кольору.
