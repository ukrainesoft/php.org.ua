- [«imagedestroy](function.imagedestroy.md)
- [imagefill »](function.imagefill.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання еліпса

#imageellipse

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

imageellipse - Малювання еліпса

### Опис

**imageellipse**(
[GdImage](class.gdimage.md) `$image`,
int `$center_x`,
int `$center_y`,
int `$width`,
int `$height`,
int `$color`
): bool

Малює еліпс із центром у заданих координатах.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`center_x`
x-координат центру.

`center_y`
y-координат центру.

`width`
Ширина еліпсу.

`height`
Висота еліпсу.

`col`
Колір еліпсу. Ідентифікатор кольору, створений функцією
[imagecolorallocate()](function.imagecolorallocate.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imageellipse()****

`<?php// Створення порожнього зображення. $image, 0, 0, $bg);// Вибір кольори еліпса.$col_ellipse u003d imagecolorallocate($image, 255, 255, 255);// Малювання еліпса.imageellipse($image, 0, 0,3 $col_ellipse);// Виведення зображення.header("Content-type: image/png");imagepng($image);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imageellipse()](images/21009b70229598c6a80eef8b45bf282b-imageellipse.png)

### Примітки

> **Примітка**:
>
> **imageellipse()** ігнорує
> [imagesetthickness()](function.imagesetthickness.md).

### Дивіться також

- [imagefilledellipse()](function.imagefilledellipse.md) - Малювання
зафарбованого еліпса
- [imagearc()](function.imagearc.md) - Малювання дуги
