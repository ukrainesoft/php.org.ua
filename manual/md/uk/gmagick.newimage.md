- [«Gmagick::motionblurimage](gmagick.motionblurimage.md)
- [Gmagick::nextimage »](gmagick.nextimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Створює нове зображення

# Gmagick::newimage

(PECL gmagick \>u003d Unknown)

Gmagick::newimage — Створює нове зображення

### Опис

public **Gmagick::newimage**(
int `$width`,
int `$height`,
string `$background`,
string `$format` u003d ?
): [Gmagick](class.gmagick.md)

Створює нове зображення із зазначеним фоновим кольором.

### Список параметрів

`width`
Ширина нового зображення.

`height`
Висота нового зображення.

`background`
Колір фону, використовуваний для цього зображення у вигляді числа з плаваючою
точкою.

`format`
Формат зображення.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
