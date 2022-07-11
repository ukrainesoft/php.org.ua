- [« Imagick::rotationalBlurImage](imagick.rotationalblurimage.md)
- [Imagick::sampleImage »](imagick.sampleimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Закруглює кути зображення

# Imagick::roundCorners

(PECL imagick 2, PECL imagick 3)

Imagick::roundCorners — Скруглює кути зображення

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::roundCorners**(
float `$x_rounding`,
float `$y_rounding`,
float `$stroke_width` u003d 10,
float `$displace` u003d 5,
float `$size_correction` u003d -6
): bool

Заокруглює кути зображення. Перші два параметри керують ступенем
округлення, а три останні параметри можуть використовуватися для точної
налаштування процесу округлення. Цей метод доступний, якщо Imagick був
скомпільований з версією ImageMagick 6.2.9 або старшим. Цей метод
недоступний, якщо Imagick був скомпільований з версією ImageMagick
7.0.70або старше.

### Список параметрів

`x_rounding`
Округлення по x.

`y_rounding`
Округлення по y.

`stroke_width`
Ширина обведення.

`displace`
Зміщення зображення.

`size_correction`
Корекція розміру.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::roundCorners()****

Закруглення кутів зображення

` <?php$image u003d new Imagick();$image->newPseudoImage(100, 100, "magick:rose");$image->setImageFormat("png");$image->roundCorners(5,3) ;$image->writeImage("rounded.png");?> `
