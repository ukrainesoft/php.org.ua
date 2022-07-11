- [« Imagick::queryFormats](imagick.queryformats.md)
- [Imagick::raiseImage »](imagick.raiseimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Радіальне розмиття зображення

# Imagick::radialBlurImage

(PECL imagick 2, PECL imagick 3)

Imagick::radialBlurImage — Радіальне розмиття зображення

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::radialBlurImage**(float `$angle`, int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

Радіальне розмиття зображення.

### Список параметрів

`angle`

`channel`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::radialBlurImage()****

`<?phpfunction radialBlurImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); //Розмиття 3 рази з різними радіусами    $imagick->radialBlurImage(3); $imagick->radialBlurImage(5); $imagick->radialBlurImage(7); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
