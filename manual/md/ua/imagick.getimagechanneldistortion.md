- [« Imagick::getImageChannelDepth](imagick.getimagechanneldepth.md)
- [Imagick::getImageChannelDistortions
»](imagick.getimagechanneldistortions.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Порівнює канали зображення з відновленим зображенням

# Imagick::getImageChannelDistortion

(PECL imagick 2, PECL imagick 3)

Imagick::getImageChannelDistortion — Порівнює канали зображення з
відновленим зображенням

### Опис

public
**Imagick::getImageChannelDistortion**([Imagick](class.imagick.md)
`$reference`, int `$channel`, int `$metric`): float

Порівнює один або кілька каналів зображення з відновленим
зображенням та повертає вказаний показник спотворення.

### Список параметрів

`reference`
Об'єкт Imagick для порівняння.

`channel`
Вкажіть будь-яку константу CHANNEL, яка підходить для вашого режиму
каналу. Для застосування більш ніж одного каналу об'єднайте константи
типу CHANNEL за допомогою побітових операторів. Зверніться до цього списку
[констант CHANNEL](imagick.constants.md#imagick.constants.channel).

`metric`
Одна з [констант типу
METRIC](imagick.constants.md#imagick.constants.metric).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
