- [«Gmagick::resampleimage](gmagick.resampleimage.md)
- [Gmagick::rollimage »](gmagick.rollimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Масштабує зображення

# Gmagick::resizeimage

(PECL gmagick \>u003d Unknown)

Gmagick::resizeimage — Масштабує зображення

### Опис

public **Gmagick::resizeimage**(
int `$width`,
int `$height`,
int `$filter`,
float `$blur`,
bool `$fit` u003d **`false`**
): [Gmagick](class.gmagick.md)

Масштабує зображення до бажаних розмірів за допомогою фільтра.

### Список параметрів

`width`
Кількість стовпців у масштабованому зображенні.

`height`
Кількість рядків у масштабованому зображенні.

`filter`
Фільтр зображень для використання.

`blur`
Коефіцієнт розмиття, де більше значення більше 1 робить зображення
більш розмитим, значення менше 1 – менш розмитим.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
