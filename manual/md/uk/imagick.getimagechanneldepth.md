- [« Imagick::getImageBorderColor](imagick.getimagebordercolor.md)
- [Imagick::getImageChannelDistortion
»](imagick.getimagechanneldistortion.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає глибину для певного каналу зображення

# Imagick::getImageChannelDepth

(PECL imagick 2, PECL imagick 3)

Imagick::getImageChannelDepth — Повертає глибину для певного
каналу зображення

### Опис

public **Imagick::getImageChannelDepth**(int `$channel`): int

Повертає глибину певного каналу зображення.

### Список параметрів

`channel`
Надайте будь-яку коректну для вашого режиму каналу константу. Для
застосування до більш ніж одного каналу, комбінуйте [константи
каналов](imagick.constants.md#imagick.constants.channel) за допомогою
побітових операторів. За промовчанням одно **`Imagick::CHANNEL_DEFAULT`**.
Зверніться до списку [констант
каналов](imagick.constants.md#imagick.constants.channel)

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.
