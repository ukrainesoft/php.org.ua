- [« Imagick::segmentImage](imagick.segmentimage.md)
- [Imagick::separateImageChannel »](imagick.separateimagechannel.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Опис

# Imagick::selectiveBlurImage

(PECL imagick 3 \>u003d 3.3.0)

Imagick::selectiveBlurImage — Опис

### Опис

public **Imagick::selectiveBlurImage**(
float `$radius`,
float `$sigma`,
float `$threshold`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

Вибіркове розмиття зображення в межах порогового значення
контрастності. Це схоже на маску нерізкості, яка збільшує
різкість, якщо контраст перевищує певний поріг.

### Список параметрів

`radius`

`sigma`

`threshold`

`channel`
Надайте будь-яку коректну для вашого режиму каналу константу. Для
застосування до більш ніж одного каналу, комбінуйте [константи
каналов](imagick.constants.md#imagick.constants.channel) за допомогою
побітових операторів. За промовчанням одно **`Imagick::CHANNEL_DEFAULT`**.
Зверніться до списку [констант
каналов](imagick.constants.md#imagick.constants.channel)

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::selectiveBlurImage()****

`<?phpfunction selectiveBlurImage($imagePath, $radius, $sigma, $threshold, $channel) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->selectiveBlurImage($radius, $sigma, $threshold, $channel); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
