- [« Imagick::matteFloodfillImage](imagick.mattefloodfillimage.md)
- [Imagick::mergeImageLayers »](imagick.mergeimagelayers.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Застосовує цифровий фільтр

# Imagick::medianFilterImage

(PECL imagick 2, PECL imagick 3)

Imagick::medianFilterImage — Застосовує цифровий фільтр

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::medianFilterImage**(float `$radius`): bool

Застосовує цифровий фільтр, який покращує якість зображення з шумом.
Кожен піксель замінюється медіаною в наборі сусідніх пікселів,
що визначаються радіусом.

### Список параметрів

`radius`
Радіус сусідніх пікселів.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::medianFilterImage()****

`<?phpfunction medianFilterImage($radius, $imagePath) {    $imagick u003d new \Imagick(realpath($imagePath)); @$imagick->medianFilterImage($radius); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
