- [« Imagick::\_\_toString](imagick.tostring.md)
- [Imagick::transformImageColorspace
»](imagick.transformimagecolorspace.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Зручний метод налаштування розміру кадрування та геометрії зображення

# Imagick::transformImage

(PECL imagick 2, PECL imagick 3)

Imagick::transformImage — Зручний метод налаштування розміру кадрування та
геометрії зображення

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::transformImage**(string `$crop`, string `$geometry`):
[Imagick](class.imagick.md)

Зручний метод налаштування розміру кадрування та геометрії зображення з
рядків. Цей метод доступний, якщо Imagick був скомпільований з версією
ImageMagick 6.2.9 або старше.

### Список параметрів

`crop`
Рядок геометрії обрізки. Геометрія визначає підобласть зображення
для обрізки.

`geometry`
Рядок геометрії зображення. Геометрія визначає остаточний розмір
зображення.

### Значення, що повертаються

Повертає об'єкт Imagick, який містить перетворене зображення.

### Приклади

**Приклад #1 Приклад використання **Imagick::transformImage()**:**

У прикладі створюється чорне зображення розміром 100×100.

` <?php$image u003d new Imagick();$image->newImage(300, 200, "black");$new_image u003d $image->transformImage("100x100", "100x100");$new_image->wriImage ('test_out.jpg');?> `

### Дивіться також

- [Imagick::cropImage()](imagick.cropimage.md) - Витягує область
зображення
- [Imagick::resizeImage()](imagick.resizeimage.md) - Масштабує
зображення
- [Imagick::thumbnailImage()](imagick.thumbnailimage.md) - Змінює
розмір зображення
