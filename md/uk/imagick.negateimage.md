- [« Imagick::motionBlurImage](imagick.motionblurimage.md)
- [Imagick::newImage »](imagick.newimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Інвертує кольори в еталонному зображенні

# Imagick::negateImage

(PECL imagick 2, PECL imagick 3)

Imagick::negateImage — Інвертує кольори до еталонного зображення

### Опис

public **Imagick::negateImage**(bool `$gray`, int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

Інвертує кольори у еталонному зображенні. Параметр Grayscale означає,
що у зображенні інвертуються лише значення відтінків сірого.

### Список параметрів

`gray`
Визначає, чи потрібно інвертувати тільки пікселі у відтінках сірого
зображення.

`channel`
Вкажіть будь-яку константу CHANNEL, яка підходить для заданого режиму
каналу. Для застосування більш ніж одного каналу необхідно об'єднати
константи типу CHANNEL за допомогою побітових операторів. Зверніться до
цьому списку [констант
CHANNEL](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::negateImage()****

`<?phpfunction negateImage($imagePath, $grayOnly, $channel) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->negateImage($grayOnly, $channel); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
