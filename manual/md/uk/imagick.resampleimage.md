- [«Imagick::render](imagick.render.md)
- [Imagick::resetImagePage »](imagick.resetimagepage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Перетворює зображення до бажаного дозволу

# Imagick::resampleImage

(PECL imagick 2, PECL imagick 3)

Imagick::resampleImage — Перетворення зображення на бажану роздільну здатність

### Опис

public **Imagick::resampleImage**(
float `$x_resolution`,
float `$y_resolution`,
int `$filter`,
float `$blur`
): bool

Перетворює зображення до бажаного дозволу.

### Список параметрів

`x_resolution`

`y_resolution`

`filter`

`blur`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::resampleImage()****

` <?phpfunction resampleImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->resampleImage(200, 200, \Imagick::FILTER_LANCZOS, 1); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
