- [«imageloadfont](function.imageloadfont.md)
- [imagepalettecopy »](function.imagepalettecopy.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малює відкритий полігон

#imageopenpolygon

(PHP 7 \>u003d 7.2.0, PHP 8)

imageopenpolygon — Малює відкритий полігон

### Опис

Сигнатура починаючи з PHP 8.0.0 (не підтримується з іменованими
аргументами)

**imageopenpolygon**([GdImage](class.gdimage.md) `$image`, array
`$points`, int `$color`): bool

Альтернативний синтаксис (починаючи з PHP 8.0.0)

**imageopenpolygon**(
[GdImage](class.gdimage.md) `$image`,
array `$points`,
int `$num_points`,
int `$color`
): bool

**imageopenpolygon()** малює відкритий полігон на заданому зображенні
(`image`). На відміну від [imagepolygon()](function.imagepolygon.md),
лінія між останньою та першою точкою не малюється.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`points`
Масив, що містить вершини багатокутника, наприклад:

| | |
|-------------|------|
| points\[0\] | u003d x0 |
| points\[1\] | u003d y0 |
| points\[2\] | u003d х1 |
| points\[3\] | u003d y1 |

`num_points`
Загальна кількість точок (вершин) повинна бути не менше 3.

Якщо цей параметр опущений (дивіться альтернативний синтаксис), то масив
`points` повинен містити парну кількість елементів та `num_points`
буде обчислено як `count($points)/2`.

`col`
Ідентифікатор кольору, створений функцією
[imagecolorallocate()](function.imagecolorallocate.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.1.0 | Параметр `num_points` оголошено застарілим. |
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imageopenpolygon()****

`<?php// Створити пусте зображення$image u003d imagecreatetruecolor(400, 300);// Виділення кольору для полігону$col_poly u003d imagecolorallocate($image, 255, 5 0,   0,        100, 200,        300, 200    ),    3,    $col_poly);// Вывод изображения в браузерheader('Content-type: image/png');imagepng($image);imagedestroy($image);? > `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imageopenpolygon()](images/21009b70229598c6a80eef8b45bf282b-imageopenpolygon.png)

### Дивіться також

- [imagepolygon()](function.imagepolygon.md) - Малювання
багатокутника
