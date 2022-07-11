- [« Imagick::getImageChannelMean](imagick.getimagechannelmean.md)
- [Imagick::getImageChannelStatistics
»](imagick.getimagechannelstatistics.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає діапазон каналів

# Imagick::getImageChannelRange

(PECL imagick 2 \>u003d 2.2.1, PECL imagick 3)

Imagick::getImageChannelRange — Повертає діапазон каналів

### Опис

public **Imagick::getImageChannelRange**(int `$channel`): array

Повертає діапазон для одного або кількох каналів зображення. Цей
метод доступний, якщо Imagick був скомпільований з версією ImageMagick
6.4.0 чи старше.

### Список параметрів

`channel`
Надайте будь-яку коректну для вашого режиму каналу константу. Для
застосування до більш ніж одного каналу, комбінуйте [константи
каналов](imagick.constants.md#imagick.constants.channel) за допомогою
побітових операторів. За промовчанням одно **`Imagick::CHANNEL_DEFAULT`**.
Зверніться до списку [констант
каналов](imagick.constants.md#imagick.constants.channel)

### Значення, що повертаються

Повертає масив, що містить мінімальні та максимальні значення
каналу(ів).

### Помилки

Викликає ImagickException у разі виникнення помилки.
