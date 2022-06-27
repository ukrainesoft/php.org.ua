- [«imagesx](function.imagesx.md)
- [imagetruecolortopalette »](function.imagetruecolortopalette.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримання висоти зображення

# imagesy

(PHP 4, PHP 5, PHP 7, PHP 8)

imagesy — Отримання висоти зображення

### Опис

**imagesy**([GdImage](class.gdimage.md) `$image`): int

Повертає висоту заданого зображення `image`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

### Значення, що повертаються

Повертає висоту зображення `image` або **`false`** у разі помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagesy()****

`<?php// Створення зображення 300*200$img u003d imagecreatetruecolor(300, 200);echo imagesy($img); // 200?> `

### Дивіться також

- [imagecreatetruecolor()](function.imagecreatetruecolor.md) -
Створення нового повнокольорового зображення
- [getimagesize()](function.getimagesize.md) - Отримання розміру
зображення
- [imagesx()](function.imagesx.md) - Отримання ширини зображення
