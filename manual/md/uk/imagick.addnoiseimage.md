- [« Imagick::addImage](imagick.addimage.md)
- [Imagick::affineTransformImage »](imagick.affinetransformimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Накладає випадковий шум на зображення

# Imagick::addNoiseImage

(PECL imagick 2, PECL imagick 3)

Imagick::addNoiseImage — Накладає випадковий шум на зображення

### Опис

public **Imagick::addNoiseImage**(int `$noise_type`, int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

Накладає випадковий шум зображення.

### Список параметрів

`noise_type`
Тип шуму. Зверніться до списку [констант
шума](imagick.constants.md#imagick.constants.noise).

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

**Приклад #1 Приклад використання **Imagick::addNoiseImage()****

` <?phpfunction addNoiseImage($noiseType, $imagePath, $channel) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->addNoiseImage($noiseType, $channel); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
