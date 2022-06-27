- [« Imagick::recolorImage](imagick.recolorimage.md)
- [Imagick::remapImage »](imagick.remapimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Згладжує контури зображення

# Imagick::reduceNoiseImage

(PECL imagick 2, PECL imagick 3)

Imagick::reduceNoiseImage — Згладжує контури зображення

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::reduceNoiseImage**(float `$radius`): bool

Згладжує контури зображення, зберігаючи інформацію про краї.
Алгоритм працює, замінюючи кожен піксель найближчим за значенням сусідом.
Сусід визначається радіусом. При використанні радіусу 0,
Imagick::reduceNoiseImage() вибере відповідний радіус автоматично.

### Список параметрів

`radius`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::reduceNoiseImage()****

`<?phpfunction reduceNoiseImage($imagePath, $reduceNoise) {    $imagick u003d new \Imagick(realpath($imagePath)); @$imagick->reduceNoiseImage($reduceNoise); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
