- [«imagecropauto](function.imagecropauto.md)
- [imagedestroy »] (function.imagedestroy.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання пунктирної лінії

#imagedashedline

(PHP 4, PHP 5, PHP 7, PHP 8)

imagedashedline — Малювання пунктирної лінії

### Опис

**imagedashedline**(
[GdImage](class.gdimage.md) `$image`,
int `$x1`,
int `$y1`,
int `$x2`,
int `$y2`,
int `$color`
): bool

Функція застаріла. Використовуйте поєднання функцій
[imagesetstyle()](function.imagesetstyle.md) та
[imageline()](function.imageline.md).

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`x1`
Верхня ліва x-координата.

`y1`
Верхня ліва y-координата. 0, 0 – верхній лівий кут зображення.

`x2`
Нижня права х-координата.

`y2`
Нижня права у-координата.

`col`
Колір лінії. Ідентифікатор кольору, створений функцією
[imagecolorallocate()](function.imagecolorallocate.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagedashedline()****

` <?php// Створення зображення 100x100$im u003d imagecreatetruecolor(100, 100);$white u003d imagecolorallocate($im, 0xFF, 0xFF, 0xFF),/5    75, $white);// Збереження зображенняimagepng($im, './dashedline.png');imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagedashedline()](images/21009b70229598c6a80eef8b45bf282b-imagedashedline.png)

**Приклад #2 Альтернатива функції **imagedashedline()****

` <?php// Створення зображення 100x100$im u003d imagecreatetruecolor(100, 100);$white u003d imagecolorallocate($im, 0xFF, 0xFF, 0xFF);// Виявлення / Это создаёт эффект пунктира.$style u003d Array(                $white,                $white,                $white,                $white,                IMG_COLOR_TRANSPARENT,                IMG_COLOR_TRANSPARENT,                IMG_COLOR_TRANSPARENT,                IMG_COLOR_TRANSPARENT                );imagesetstyle($im, $style);// Рисование пунктирной линииimageline($im, 50, 25, 50, 75, IMG_COLOR_STYLED);// Збереження зображенняimagepng($im, './imageline.png');imagedestroy($im);?> `

### Дивіться також

- [imagesetstyle()](function.imagesetstyle.md) - Установка стилю
малювання ліній
- [imageline()](function.imageline.md) - Малювання лінії
