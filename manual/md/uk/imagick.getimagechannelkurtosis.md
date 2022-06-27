- [«
Imagick::getImageChannelExtrema](imagick.getimagechannelextrema.md)
- [Imagick::getImageChannelMean »](imagick.getimagechannelmean.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає ексцес та асиметрію певного каналу

# Imagick::getImageChannelKurtosis

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::getImageChannelKurtosis — Повертає ексцес та асиметрію
певного каналу

### Опис

public **Imagick::getImageChannelKurtosis**(int `$channel` u003d
Imagick::CHANNEL_DEFAULT): array

Повертає ексцес та асиметрію певного каналу. Цей метод
доступний, якщо Imagick був скомпільований з версією ImageMagick 6.4.9 або
старше.

### Список параметрів

`channel`
Надайте будь-яку коректну для вашого режиму каналу константу. Для
застосування до більш ніж одного каналу, комбінуйте [константи
каналов](imagick.constants.md#imagick.constants.channel) за допомогою
побітових операторів. За промовчанням одно **`Imagick::CHANNEL_DEFAULT`**.
Зверніться до списку [констант
каналов](imagick.constants.md#imagick.constants.channel)

### Значення, що повертаються

Повертає масив з елементами `kurtosis` та `skewness`.

### Помилки

Викликає ImagickException у разі виникнення помилки.
