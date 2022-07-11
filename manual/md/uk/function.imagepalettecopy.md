- [«imageopenpolygon](function.imageopenpolygon.md)
- [imagepalettetotruecolor »](function.imagepalettetotruecolor.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Копіювання палітри з одного зображення до іншого

#imagepalettecopy

(PHP 4 \>u003d 4.0.1, PHP 5, PHP 7, PHP 8)

imagepalettecopy — Копіювання панелі з одного зображення до іншого

### Опис

**imagepalettecopy**([GdImage](class.gdimage.md) `$dst`,
[GdImage](class.gdimage.md) `$src`): void

**imagepalettecopy()** копіює палітру кольорів із зображення `src` в
зображення `dst`.

### Список параметрів

`dst`
Об'єкт результуючого зображення.

`src`
Об'єкт вихідного зображення.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------|
| 8.0.0 | `dst` і `src` тепер чекають на екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagepalettecopy()****

`<?php//Створення двох палітрових зображень$palette1 u003d imagecreate(100, 100);$palette2 u003d imagecreate(100, 100);// Зелений фон у першого );// Копирование палитры из 1го во 2е изображениеimagepalettecopy($palette2, $palette1);// Так как палитра скопирована с уже созданным зелёным цветом// нет нужды использовать imagecolorallocate() дваждыimagefilledrectangle($palette2, 0, 0, 99, 99 , $green);// Виведення зображення в броузерheader('Content-type: image/png');imagepng($palette2);imagedestroy($palette1);imagedestroy($palette2);?> `
