- [«imagepng](function.imagepng.md)
- [imagerectangle »](function.imagerectangle.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання багатокутника

#imagepolygon

(PHP 4, PHP 5, PHP 7, PHP 8)

imagepolygon — Малювання багатокутника

### Опис

Сигнатура починаючи з PHP 8.0.0 (не підтримується з іменованими
аргументами)

**imagepolygon**([GdImage](class.gdimage.md) `$image`, array
`$points`, int `$color`): bool

Альтернативний синтаксис (оголошений застарілим із PHP 8.1.0)

**imagepolygon**(
[GdImage](class.gdimage.md) `$image`,
array `$points`,
int `$num_points`,
int `$color`
): bool

**imagepolygon()** створює багатокутник у зображенні `image`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`points`
Масив вершин багатокутника:

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

**Приклад #1 Приклад використання **imagepolygon()****

`<?php// Створення порожнього зображення$image u003d imagecreatetruecolor(400, 300);// Створення кольору полігону$col_poly u003d imagecolorallocate($image, 255, 5                    ??? ,   0,        100, 200,        300, 200    ),    3,    $col_poly);// Вывод картинки в броузерheader('Content-type: image/png');imagepng($image);imagedestroy($image);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagepolygon()](images/21009b70229598c6a80eef8b45bf282b-imagepolygon.png)

### Дивіться також

- [imagefilledpolygon()](function.imagefilledpolygon.md) - Малювання
зафарбованого багатокутника
- [imageopenpolygon()](function.imageopenpolygon.md) - Малює
відкритий полігон
- [imagecreate()](function.imagecreate.md) - Створення нового
палітрового зображення
- [imagecreatetruecolor()](function.imagecreatetruecolor.md) -
Створення нового повнокольорового зображення
