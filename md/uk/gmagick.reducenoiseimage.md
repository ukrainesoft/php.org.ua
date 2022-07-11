- [«Gmagick::readimagefile](gmagick.readimagefile.md)
- [Gmagick::removeimage »](gmagick.removeimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Згладжує контури зображення

# Gmagick::reducenoiseimage

(PECL gmagick \>u003d Unknown)

Gmagick::reducenoiseimage — Згладжує контури зображення

### Опис

public **Gmagick::reducenoiseimage**(float `$radius`):
[Gmagick](class.gmagick.md)

Згладжує контури зображення, зберігаючи інформацію про краї.
Алгоритм працює, замінюючи кожен піксель найближчим за значенням сусідом.
Сусід визначається значенням radius. Використовуйте значення radius, що дорівнює
0, і **Gmagick::reducenoiseimage()** вибере для вас відповідний радіус.

### Список параметрів

`radius`
Радіус навколо пікселя.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
