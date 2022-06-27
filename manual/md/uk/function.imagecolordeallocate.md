- [«imagecolorclosesthwb](function.imagecolorclosesthwb.md)
- [imagecolorexact »](function.imagecolorexact.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Розрив асоціації змінної із кольором для заданого зображення

#imagecolordeallocate

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolordeallocate — Розрив асоціації змінної з кольором для
заданого зображення

### Опис

**imagecolordeallocate**([GdImage](class.gdimage.md) `$image`, int
`$color`): bool

Розриває асоціацію змінної з кольором, яка раніше була створена
функціями [imagecolorallocate()](function.imagecolorallocate.md) або
[imagecolorallocatealpha()](function.imagecolorallocatealpha.md).

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`col`
Ідентифікатор кольору.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagecolordeallocate()****

`<?php$white u003d imagecolorallocate($im, 255, 255, 255);imagecolordeallocate($im, $white);?> `

### Дивіться також

- [imagecolorallocate()](function.imagecolorallocate.md) - Створення
кольори для зображення
- [imagecolorallocatealpha()](function.imagecolorallocatealpha.md) -
Створення кольору для зображення
