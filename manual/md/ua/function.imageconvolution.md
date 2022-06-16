- [«imagecolortransparent](function.imagecolortransparent.md)
- [imagecopy »](function.imagecopy.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Накладання викривляючої матриці 3х3, використовуючи коефіцієнт та зміщення

# imageconvolution

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

imageconvolution - Накладання викривляючої матриці 3х3, використовуючи
коефіцієнт та зміщення

### Опис

**imageconvolution**(
[GdImage](class.gdimage.md) `$image`,
array `$matrix`,
float `$divisor`,
float `$offset`
): bool

Накладає скривлюючу матрицю на зображення, використовуючи заданий
коефіцієнт та зміщення.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`matrix`
Матриця 3x3: масив із трьох масивів по 3 значення з плаваючою точкою в
кожному.

`divisor`
Дільник результату викривлення, що використовується для нормалізації.

`offset`
Зміщення кольору.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Створення рельєфу на логотипі PHP.net**

` <?php$image u003d imagecreatefromgif('http://www.php.net/images/php.gif');$emboss u003d array(array(2, 0, 0), array(0, -1, 0 ), array(0, 0, -1));imageconvolution($image, $emboss, 1, 127);header('Content-Type: image/png');imagepng($image, null, 9);? > `

Результат виконання цього прикладу:

![Висновок прикладу: Створення рельєфу на логотипі
PHP.net](images/21009b70229598c6a80eef8b45bf282b-imageconvolution_emboss.png)

**Приклад #2 Розмиття за Гаусом**

`<?php$image u003d imagecreatetruecolor(180,40);// Пишетекст і застосовує розмиття до зображенняimagestring($image, 5, 10, 8, 'Gaussian Blur y'       ¦ , 2.0, 1.0), array(2.0, 4.0, 2.0), array(1.0, 2.0, 1.0));imageconvolution($image, $gaussian, 16, 0);// Переписує 10, 18, 'Gaussian Blur Text', 0x00ff00);header('Content-Type: image/png');imagepng($image, null, 9);?> `

Результат виконання цього прикладу:

![Висновок прикладу: Розмиття по
Гауссу](images/21009b70229598c6a80eef8b45bf282b-imageconvolution_gaussian.png)

### Дивіться також

- [imagefilter()](function.imagefilter.md) - Застосовує фільтр до
зображенню
