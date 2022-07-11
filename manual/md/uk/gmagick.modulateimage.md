- [« Gmagick::minifyimage](gmagick.minifyimage.md)
- [Gmagick::motionblurimage »](gmagick.motionblurimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Управляє яскравістю, насиченістю та відтінком

# Gmagick::modulateimage

(PECL gmagick \>u003d Unknown)

Gmagick::modulateimage — Керує яскравістю, насиченістю та відтінком

### Опис

public **Gmagick::modulateimage**(float `$brightness`, float
`$saturation`, float `$hue`): [Gmagick](class.gmagick.md)

Дозволяє керувати яскравістю, насиченістю та відтінком зображення.
Відтінок – це відсоток абсолютного повороту від поточної позиції. Наприклад,
значення 50 призводить до повороту проти годинникової стрілки на 90 градусів,
150 призводить до повороту за годинниковою стрілкою на 90 градусів, значення 0 та
200 призводять до повороту на 180 градусів.

### Список параметрів

`brightness`
Зміна яскравості у відсотках (від -100 до +100).

`saturation`
Відсоткова зміна насиченості (від -100 до +100)

`hue`
Відсоток зміни відтінку (від -100 до +100)

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
