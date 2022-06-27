- [« Imagick::normalizeImage](imagick.normalizeimage.md)
- [Imagick::opaquePaintImage »](imagick.opaquepaintimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Імітує картину олією

# Imagick::oilPaintImage

(PECL imagick 2, PECL imagick 3)

Imagick::oilPaintImage - Імітує картину маслом

### Опис

public **Imagick::oilPaintImage**(float `$radius`): bool

Застосовує фільтр із спеціальним ефектом, що імітує картину олією.
Кожен піксель замінюється кольором, що найбільш часто зустрічається, в круговій
області, що визначається радіусом.

### Список параметрів

`radius`
Радіус кругової області.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::oilPaintImage()****

`<?phpfunction oilPaintImage($imagePath, $radius) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->oilPaintImage($radius); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
