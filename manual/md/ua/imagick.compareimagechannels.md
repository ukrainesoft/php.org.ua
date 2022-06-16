- [« Imagick::commentImage](imagick.commentimage.md)
- [Imagick::compareImageLayers »](imagick.compareimagelayers.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає різницю в одному або кількох зображеннях

# Imagick::compareImageChannels

(PECL imagick 2, PECL imagick 3)

Imagick::compareImageChannels — Повертає різницю в одному або
кількох зображеннях

### Опис

public **Imagick::compareImageChannels**([Imagick](class.imagick.md)
`$image`, int `$channelType`, int `$metricType`): array

Порівнює одне або кілька зображень і повертає різницеве
зображення.

### Список параметрів

`image`
Об'єкт Imagick, який містить зображення для порівняння.

`channelType`
Вкажіть будь-яку константу CHANNEL, яка підходить для вашого режиму
каналу. Для застосування більш ніж одного каналу об'єднайте константи
типу CHANNEL за допомогою побітових операторів. Зверніться до цього списку
[констант CHANNEL](imagick.constants.md#imagick.constants.channel).

`metricType`
Одна з [констант типу
METRIC](imagick.constants.md#imagick.constants.metric).

### Значення, що повертаються

Масив, що складається з `new_wand` та `distortion`.

### Помилки

Викликає ImagickException у разі виникнення помилки.
