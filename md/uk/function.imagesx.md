- [«imagestringup](function.imagestringup.md)
- [imagesy »](function.imagesy.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримання ширини зображення

# imagesx

(PHP 4, PHP 5, PHP 7, PHP 8)

imagesx — Отримання ширини зображення

### Опис

**imagesx**([GdImage](class.gdimage.md) `$image`): int

Повертає ширину заданого зображення `image`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

### Значення, що повертаються

В разі помилки повертає ширину зображення `image` або **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagesx()****

`<?php// створення зображення 300*200$img u003d imagecreatetruecolor(300, 200);echo imagesx($img); // 300?> `

### Дивіться також

- [imagecreatetruecolor()](function.imagecreatetruecolor.md) -
Створення нового повнокольорового зображення
- [getimagesize()](function.getimagesize.md) - Отримання розміру
зображення
- [imagesy()](function.imagesy.md) - Отримання висоти зображення
