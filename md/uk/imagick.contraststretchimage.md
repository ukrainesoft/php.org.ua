- [« Imagick::contrastImage](imagick.contrastimage.md)
- [Imagick::convolveImage »](imagick.convolveimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Підвищує контрастність кольорового зображення

# Imagick::contrastStretchImage

(PECL imagick 2, PECL imagick 3)

Imagick::contrastStretchImage — Підвищує контрастність кольору
зображення

### Опис

public **Imagick::contrastStretchImage**(float `$black_point`, float
`$white_point`, int `$channel` u003d Imagick::CHANNEL_DEFAULT): bool

Підвищує контрастність кольорового зображення, регулюючи колір пікселів
охоплення всього діапазону доступних кольорів. Цей метод доступний, якщо
Imagick був скомпілюваний з версією ImageMagick 6.2.9 або старшим.

### Список параметрів

`black_point`
Чорна крапка.

`white_point`
Біла точка.

`channel`
Вкажіть будь-яку константу CHANNEL, яка підходить для вашого режиму
каналу. Для застосування більш ніж одного каналу об'єднайте константи
типу CHANNEL за допомогою побітових операторів. **`Imagick::CHANNEL_ALL`**.
Зверніться до списку [констант
CHANNEL](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.
