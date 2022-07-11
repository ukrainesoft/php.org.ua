- [« Gmagick::addnoiseimage](gmagick.addnoiseimage.md)
- [Gmagick::blurimage »](gmagick.blurimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Підписати зображення текстом

# Gmagick::annotateimage

(PECL gmagick \>u003d Unknown)

Gmagick::annotateimage — Підписати зображення текстом

### Опис

public **Gmagick::annotateimage**(
[GmagickDraw](class.gmagickdraw.md) `$GmagickDraw`,
float `$x`,
float `$y`,
float `$angle`,
string `$text`
): [Gmagick](class.gmagick.md)

Підписати зображення тексту.

### Список параметрів

`GmagickDraw`
Об'єкт [GmagickDraw](class.gmagickdraw.md), що містить налаштування для
тексту.

`x`
Горизонтальне усунення лівого краю тексту в пікселях.

`y`
Вертикальне усунення базової лінії тексту в пікселях.

`angle`
Кут під яким розміщувати текст.

`text`
Текст.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) з доданою інструкцією.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
