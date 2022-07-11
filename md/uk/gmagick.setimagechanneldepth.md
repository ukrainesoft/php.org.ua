- [« Gmagick::setimagebordercolor](gmagick.setimagebordercolor.md)
- [Gmagick::setimagecolorspace »](gmagick.setimagecolorspace.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Встановлює глибину певного каналу зображення

# Gmagick::setimagechanneldepth

(PECL gmagick \>u003d Unknown)

Gmagick::setimagechanneldepth — Встановлює глибину певного
каналу зображення

### Опис

public **Gmagick::setimagechanneldepth**(int `$channel`, int `$depth`):
[Gmagick](class.gmagick.md)

Встановлює глибину певного каналу зображення.

### Список параметрів

`channel`
Одна з констант
[каналу](gmagick.constants.md#gmagick.constants.channel)
(`Gmagick::CHANNEL_*`).

`depth`
Глибина зображення у бітах.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
