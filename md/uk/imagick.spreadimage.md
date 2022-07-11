- [« Imagick::spliceImage](imagick.spliceimage.md)
- [Imagick::statisticImage »](imagick.statisticimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Випадково зміщує кожен піксель у блоці

# Imagick::spreadImage

(PECL imagick 2, PECL imagick 3)

Imagick::spreadImage — Випадково зміщує кожен піксель у блоці

### Опис

public **Imagick::spreadImage**(float `$radius`): bool

Метод спеціальних ефектів, який випадково зміщує кожен
піксель у блоці, заданому параметром radius.

### Список параметрів

`radius`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::spreadImage()****

`<?phpfunction spreadImage($imagePath, $radius) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->spreadImage($radius); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
