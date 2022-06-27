- [« Imagick::subImageMatch](imagick.subimagematch.md)
- [Imagick::textureImage »](imagick.textureimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Закручує пікселі навколо центру зображення

# Imagick::swirlImage

(PECL imagick 2, PECL imagick 3)

Imagick::swirlImage — Закручує пікселі навколо центру зображення

### Опис

**Imagick::swirlImage**(float `$degrees`): bool

Закручує пікселі навколо центру зображення, де градуси вказують
розмах дуги, якою переміщається кожен піксель. Ви отримуєте більше
драматичний ефект, коли градуси рухаються від 1 до 360.

### Список параметрів

`degrees`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::swirlImage()****

` <?phpfunction swirlImage($imagePath, $swirl) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->swirlImage($swirl); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
