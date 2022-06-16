- [« Imagick::nextImage](imagick.nextimage.md)
- [Imagick::oilPaintImage »](imagick.oilpaintimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Підвищує контрастність кольорового зображення

# Imagick::normalizeImage

(PECL imagick 2, PECL imagick 3)

Imagick::normalizeImage — Підвищує контраст кольорового зображення

### Опис

public **Imagick::normalizeImage**(int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

Підвищує контрастність кольорового зображення, регулюючи колір пікселів
охоплення всього діапазону доступних кольорів.

### Список параметрів

`channel`
Вкажіть будь-яку константу CHANNEL, яка підходить для заданого режиму
каналу. Для застосування більш ніж одного каналу необхідно об'єднати
константи типу CHANNEL за допомогою побітових операторів. Зверніться до
цьому списку [констант
CHANNEL](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::normalizeImage()****

` <?phpfunction normalizeImage($imagePath, $channel) {   $imagick u003d new \Imagick(realpath($imagePath)); $originalu003du003dclone$imagick; $original->cropimage($original->getImageWidth() / 2, $original->getImageHeight(), 0, 0); $imagick->normalizeImage($channel); $imagick->compositeimage($original, \Imagick::COMPOSITE_ATOP, 0, 0); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
