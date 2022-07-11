- [« Imagick::shadeImage](imagick.shadeimage.md)
- [Imagick::sharpenImage »](imagick.sharpenimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Імітує тінь зображення

# Imagick::shadowImage

(PECL imagick 2, PECL imagick 3)

Imagick::shadowImage — Імітує тінь зображення

### Опис

public **Imagick::shadowImage**(
float `$opacity`,
float `$sigma`,
int `$x`,
int `$y`
): bool

Імітує тінь зображення.

### Список параметрів

`opacity`

`sigma`

`x`

`y`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::shadowImage()****

`<?phpfunction shadowImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->shadowImage(0.4, 10, 50, 5); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
