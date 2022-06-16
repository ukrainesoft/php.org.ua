- [«imagedashedline](function.imagedashedline.md)
- [imageellipse »](function.imageellipse.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Знищення зображення

# imagedestroy

(PHP 4, PHP 5, PHP 7, PHP 8)

imagedestroy — Знищення зображення

### Опис

**imagedestroy**([GdImage](class.gdimage.md) `$image`): bool

> **Примітка**:
>
> Використання функції не має сенсу. До PHP 8.0.0 вона
> використовувалася закриття ресурсу.

До PHP 8.0.0, imagedestroy()** звільняє пам'ять, зайняту
зображенням `image`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | Функція тепер є NOP. |
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagedestroy()** до PHP 8.0.0**

`<?php// Створення зображення 100 x 100$im u003d imagecreatetruecolor(100, 100);// зміна або збереження зображення// звільнення пам'ятіimagedestroy($im);
