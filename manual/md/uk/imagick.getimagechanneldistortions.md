- [«
Imagick::getImageChannelDistortion](imagick.getimagechanneldistortion.md)
- [Imagick::getImageChannelExtrema
»](imagick.getimagechannelextrema.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає спотворення каналу

# Imagick::getImageChannelDistortions

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::getImageChannelDistortions — Повертає спотворення каналу

### Опис

public
**Imagick::getImageChannelDistortions**([Imagick](class.imagick.md)
`$reference`, int `$metric`, int `$channel` u003d Imagick::CHANNEL_DEFAULT):
float

Порівнює один або кілька каналів зображення з відновленим
зображенням та повертає вказаний показник спотворення. Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.4.4 або
старше.

### Список параметрів

`reference`
Об'єкт Imagick, що містить зображення, з яким виконується
порівняння.

`metric`
Зверніться до списку [констант типу
METRIC](imagick.constants.md#imagick.constants.metric).

`channel`
Надайте будь-яку коректну для вашого режиму каналу константу. Для
застосування до більш ніж одного каналу, комбінуйте [константи
каналов](imagick.constants.md#imagick.constants.channel) за допомогою
побітових операторів. За промовчанням одно **`Imagick::CHANNEL_DEFAULT`**.
Зверніться до списку [констант
каналов](imagick.constants.md#imagick.constants.channel)

### Значення, що повертаються

Повертає число з плаваючою точкою, що описує спотворення каналу.

### Помилки

Викликає ImagickException у разі виникнення помилки.
