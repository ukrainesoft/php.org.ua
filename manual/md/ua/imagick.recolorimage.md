- [« Imagick::readimages](imagick.readimages.md)
- [Imagick::reduceNoiseImage »](imagick.reducenoiseimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Перефарбовує зображення

# Imagick::recolorImage

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::recolorImage — Перефарбовує зображення

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::recolorImage**(array `$matrix`): bool

Перетворення, масштабування, зсув або поворот кольорів зображення.
Метод підтримує матриці змінного розміру, але зазвичай матриця 5x5
використовується для RGBA, а 6x6 – для CMYK. Останній рядок повинен
містити нормалізовані значення. Цей метод доступний, якщо Imagick
був скомпільований з версією ImageMagick 6.3.6 або старшим.

### Список параметрів

`matrix`
Матриця, яка містить значення кольору.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::recolorImage()****

`<?phpfunction recolorImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $remapColor u003d [ 1, 0, 0,        0, 0, 1,        0, 1, 0,];//$remapColor u003d [//    1.438, -0.122, -0.016,  0, 0, -0.03,//    - 0.062, 1.378, -0.016, 0, 0, 0.05,//   -0.062, -0.122, 1.483,   0, 0, -0.0; @$imagick->recolorImage($remapColor); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `

### Дивіться також

- [Imagick::displayImage()](imagick.displayimage.md) - Виводить
зображення
