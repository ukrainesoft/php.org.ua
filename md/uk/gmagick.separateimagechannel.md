- [«Gmagick::scaleimage](gmagick.scaleimage.md)
- [Gmagick::setCompressionQuality
»](gmagick.setcompressionquality.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Відокремлює канал від зображення

# Gmagick::separateimagechannel

(PECL gmagick \>u003d Unknown)

Gmagick::separateimagechannel — Відокремлює канал від зображення

### Опис

public **Gmagick::separateimagechannel**(int `$channel`):
[Gmagick](class.gmagick.md)

Відокремлює канал від зображення та повертає зображення у відтінках.
сірого. Канал – це певний колірний компонент кожного пікселя
зображення.

### Список параметрів

`channel`
Одна з констант
[каналу](gmagick.constants.md#gmagick.constants.channel)
(`Gmagick::CHANNEL_*`).

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
