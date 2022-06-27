- [«
Imagick::setImageColormapColor](imagick.setimagecolormapcolor.md)
- [Imagick::setImageCompose »](imagick.setimagecompose.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює колірний простір зображення

# Imagick::setImageColorspace

(PECL imagick 2, PECL imagick 3)

Imagick::setImageColorspace — Встановлює колірний простір
зображення

### Опис

public **Imagick::setImageColorspace**(int `$colorspace`): bool

Встановлює колірний простір зображення. Метод слідує
використовувати під час створення нових зображень. Щоб змінити колір
простір існуючого зображення, ви повинні використовувати
[Imagick::transformImageColorspace()](imagick.transformimagecolorspace.md).

### Список параметрів

`colorspace`
Одна з [COLORSPACE
констант](imagick.constants.md#imagick.constants.colorspace)

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.
