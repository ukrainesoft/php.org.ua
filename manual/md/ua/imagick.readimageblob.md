- [« Imagick::readImage](imagick.readimage.md)
- [Imagick::readImageFile »](imagick.readimagefile.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Зчитує зображення з двійкового рядка

# Imagick::readImageBlob

(PECL imagick 2, PECL imagick 3)

Imagick::readImageBlob — Зчитує зображення з двійкового рядка

### Опис

public **Imagick::readImageBlob**(string `$image`, string `$filename` u003d
?): bool

Зчитує зображення з двійкового рядка.

### Список параметрів

`image`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::readImageBlob()****

` <?phpfunction readImageBlob() {    $base64 u003d "iVBORw0KGgoAAAANSUhEUgAAAM0AAAD NCAMAAAAsYgRbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5c cllPAAAABJQTFRF3NSmzMewPxIG//ncJEJsldTou1jHgAAAARBJREFUeNrs2EEK gCAQBVDLuv+V20dENbMY831wKz4Y/VHb/5RGQ0NDQ0NDQ0NDQ0NDQ0NDQ 0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PzMWtyaGhoaGhoaGhoaGhoaGhoxtb0QGho aGhoaGhoaGhoaGhoaMbRLEvv50VTQ9OTQ5OpyZ01GpM2g0bfmDQaL7S+ofFC6x v3ZpxJiywakzbvd9r3RWPS9I2+MWk0+kbf0Hih9Y17U0nTHibrDDQ0NDQ0NDQ0 NDQ0NDQ0NTXbRSL/AK72o6GhoaGhoRlL8951vwsNDQ0NDQ1NDc0WyHtDTEhD Q0NDQ0NTS5MdGhoaGhoaGhoaGhoaGhoaGhoaGhoaGposzSHAAErMwwQ2HwRQ AAAAAElFTkSuQmCC"; $imageBlobu003du003dbase64_decode($base64); $imagicku003du003dnewImagick(); $imagick->readImageBlob($imageBlob); header("Content-Type: image/png"); echo $imagick;}?> `
