- [«imageellipse](function.imageellipse.md)
- [imagefilledarc »](function.imagefilledarc.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Заливання

# imagefill

(PHP 4, PHP 5, PHP 7, PHP 8)

imagefill - Заливка

### Опис

**imagefill**(
[GdImage](class.gdimage.md) `$image`,
int `$x`,
int `$y`,
int `$color`
): bool

Здійснює заливку, починаючи із заданих координат (верхній лівий кут
має координати 0, 0), кольором `color` у зображенні `image`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`x`
x-координата початку.

`y`
y-координата початку.

`col`
Колір заливки. Ідентифікатор кольору, створений функцією
[imagecolorallocate()](function.imagecolorallocate.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagefill()****

` <?php$im u003d imagecreatetruecolor(100, 100);// установка червоного фону$red u003d imagecolorallocate($im, 255, 0, 0);imagefill($im, 0, 0, $red) Content-type:image/png');imagepng($im);imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagefill()](images/21009b70229598c6a80eef8b45bf282b-imagefill.png)

### Дивіться також

- [imagecolorallocate()](function.imagecolorallocate.md) - Створення
кольори для зображення
