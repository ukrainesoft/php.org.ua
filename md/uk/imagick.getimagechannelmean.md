- [«
Imagick::getImageChannelKurtosis](imagick.getimagechannelkurtosis.md)
- [Imagick::getImageChannelRange »](imagick.getimagechannelrange.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає середнє та стандартне відхилення

# Imagick::getImageChannelMean

(PECL imagick 2, PECL imagick 3)

Imagick::getImageChannelMean — Повертає середнє та стандартне
відхилення

### Опис

public **Imagick::getImageChannelMean**(int `$channel`): array

Повертає середнє та стандартне відхилення одного або кількох
каналів зображення.

### Список параметрів

`channel`
Вкажіть будь-яку константу CHANNEL, яка підходить для вашого режиму
каналу. Для застосування більш ніж одного каналу об'єднайте константи
типу CHANNEL за допомогою побітових операторів. Зверніться до цього списку
[констант CHANNEL](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

Повертає масив з елементами "mean" і "standardDeviation".

### Помилки

Викликає ImagickException у разі виникнення помилки.
