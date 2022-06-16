- [«imagefilledellipse](function.imagefilledellipse.md)
- [imagefilledrectangle »](function.imagefilledrectangle.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання зафарбованого багатокутника

#imagefilledpolygon

(PHP 4, PHP 5, PHP 7, PHP 8)

imagefilledpolygon — Малювання зафарбованого багатокутника

### Опис

Сигнатура починаючи з PHP 8.0.0 (не підтримується з іменованими
аргументами)

**imagefilledpolygon**([GdImage](class.gdimage.md) `$image`, array
`$points`, int `$color`): bool

Альтернативний синтаксис (оголошений застарілим із PHP 8.1.0)

**imagefilledpolygon**(
[GdImage](class.gdimage.md) `$image`,
array `$points`,
int `$num_points`,
int `$color`
): bool

**imagefilledpolygon()** створює зафарбований багатокутник у заданому
зображенні `image`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`points`
Масив, що містить `x` та `y` координати послідовних вершин
багатокутник.

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

**Приклад #1 Приклад використання **imagefilledpolygon()****

` <?php// задание массива точек для многоугольника$values u003d array(            40,  50,  // Point 1 (x, y)            20,  240, // Point 2 (x, y)            60,  60,  // Point 3 (x, y)            240, 20,  // Point 4 (x, y)            50,  40,  // Point 5 (x, y)            10,  10   // Point 6 (x, y)            );// создание изображения$ image u003d imagecreatetruecolor(250, 250);// визначення квітів$bg  u003du003d imagecolorallocate($image, 0, 0, 0);$blue u003d imagecolorallocate($image, 0, 0, , 0, 0, 249, 249, $bg);// малювання багатокутникаimagefilledpolygon($image, $values, 6, $blue);// виведення зображенняheader('Content-type: image/$'); );imagedestroy($image);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagefilledpolygon()](images/21009b70229598c6a80eef8b45bf282b-imagefilledpolygon.png)

### Дивіться також

- [imagepolygon()](function.imagepolygon.md) - Малювання
багатокутника
