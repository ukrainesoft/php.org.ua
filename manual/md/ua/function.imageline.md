- [«imagelayereffect](function.imagelayereffect.md)
- [imageloadfont »](function.imageloadfont.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання лінії

#imageline

(PHP 4, PHP 5, PHP 7, PHP 8)

imageline — Малювання лінії

### Опис

**imageline**(
[GdImage](class.gdimage.md) `$image`,
int `$x1`,
int `$y1`,
int `$x2`,
int `$y2`,
int `$color`
): bool

Малює лінію, що з'єднує дві точки.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`x1`
x-координата першої точки.

`y1`
y-координата першої точки.

`x2`
x-координата другої точки.

`y2`
y-координата другої точки.

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

**Приклад #1 Малювання жирної лінії**

` <?phpfunction imagelinethick($image, $x1, $y1, $x2, $y2, $color, $thick u003d 1){    /* цей способ застосовуємо тільки для ортогональних$ return imageline($image, $x1, $y1, $x2, $y2, $color); */    if ($thick u003du003d 1) {        return imageline($image, $x1, $y1, $x2, $y2, $color); }   $t u003d $thick / 2 - 0.5; if ($x1 u003du003d $x2 || $y1 u003du003d $y2) {       return imagefilledrectangle($image,round(min($x1, $x2) - $t), y $t), round(max($x1, $x2) + $t), round(max($y1, $y2) + $t), $color); }   $k u003d ($y2 - $y1) / ($x2 - $x1); //y u003d kx + q    $a u003d $t / sqrt(1 + pow($k, 2)); $points u003d array(        round($x1 - (1+$k)*$a), round($y1 + (1-$k)*$a),         round($x1 $ a), round($y1 - (1+$k)*$a),        round($x2 + (1+$k)*$a), round($y2 - (1-$k)*$a) ,      round($x2 + (1-$k)*$a), round($y2 + (1+$k)*$a),    ); imagefilledpolygon($image, $points, 4, $color); return imagepolygon($image, $points, 4, $color);}?> `

### Дивіться також

- [imagecreatetruecolor()](function.imagecreatetruecolor.md) -
Створення нового повнокольорового зображення
- [imagecolorallocate()](function.imagecolorallocate.md) - Створення
кольори для зображення
