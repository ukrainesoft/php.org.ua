- [« Imagick::evaluateImage](imagick.evaluateimage.md)
- [Imagick::extentImage »](imagick.extentimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Експортує пікселі зображення

# Imagick::exportImagePixels

(PECL imagick 2 \>u003d2.3.0, PECL imagick 3)

Imagick::exportImagePixels — Експортує пікселі зображення

### Опис

public **Imagick::exportImagePixels**(
int `$x`,
int `$y`,
int `$width`,
int `$height`,
string `$map`,
int `$STORAGE`
): array

Експортує пікселі зображення до масиву. Параметр map визначає
порядок експортованих пікселів. Розмір повертається масиву -
`width * height * strlen (map)`. Цей метод доступний, якщо Imagick був
скомпілюваний з версією ImageMagick 6.4.7 або старшим.

### Список параметрів

`x`
Координата X області, що експортується.

`y`
Координати Y експорту області.

`width`
Ширина області, що експортується.

`height`
Висота області, що експортується.

`map`
Порядок експортованих пікселів. Наприклад ``RGB'`. Допустимі символи
для map: R, G, B, A, O, C, Y, M, K, I та P.

`STORAGE`
Зверніться до списку [констант типу
PIXEL](imagick.constants.md#imagick.constants.pixel).

### Значення, що повертаються

Повертає масив, який містить значення пікселів.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::exportImagePixels()****

Експорт пікселів зображення в масив

` <?php/* Створення нового об'єкта */$im u003d new Imagick();/* Створення нового зображення */$im->newPseudoImage(0, 0, "magick:rose");/* $pixelsu003du003d$im->exportImagePixels(10, 10, 2, 2, "RGB", Imagick::PIXEL_CHAR);/* Висновок */var_dump($pixels);?> `

Результат виконання цього прикладу:

array(12) {
[0]u003d>
int(72)
[1]u003d>
int(64)
[2]u003d>
int(57)
[3]u003d>
int(69)
[4]u003d>
int(59)
[5]u003d>
int(43)
[6]u003d>
int(124)
[7]u003d>
int(120)
[8]u003d>
int(-96)
[9] u003d>
int(91)
[10] u003d>
int(84)
[11] u003d>
int(111)
}
