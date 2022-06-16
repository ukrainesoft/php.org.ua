- [« Imagick::contrastStretchImage](imagick.contraststretchimage.md)
- [Imagick::count »](imagick.count.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Застосовує ядро згортки до зображення.

# Imagick::convolveImage

(PECL imagick 2, PECL imagick 3)

Imagick::convolveImage — Застосовує ядро згортки для користувача
зображенню

### Опис

public **Imagick::convolveImage**(array `$kernel`, int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

Застосовує ядро згортки до зображення.

### Список параметрів

`kernel`
Ядро згортки.

`channel`
Вкажіть будь-яку константу CHANNEL, яка підходить для вашого режиму
каналу. Для застосування більш ніж одного каналу об'єднайте константи
типу CHANNEL за допомогою побітових операторів.Зверніться до цього списку
[констант CHANNEL](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::convolveImage()****

`<?phpfunction convolveImage($imagePath, $bias, $kernelMatrix) {   $imagick u003d new \Imagick(realpath($imagePath)); //$edgeFindingKernelu003du003d[-1, -1, -1, -1, 8, -1, -1, -1, -1,]; $imagick->setImageBias($bias * \Imagick::getQuantum()); $imagick->convolveImage($kernelMatrix); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
