- [« Gmagick::removeimageprofile](gmagick.removeimageprofile.md)
- [Gmagick::resizeimage »](gmagick.resizeimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Змінює роздільну здатність зображення до бажаного

# Gmagick::resampleimage

(PECL gmagick \>u003d Unknown)

Gmagick::resampleimage — Змінює роздільну здатність зображення до бажаного.

### Опис

public **Gmagick::resampleimage**(
float `$xResolution`,
float `$yResolution`,
int `$filter`,
float `$blur`
): [Gmagick](class.gmagick.md)

Змінює роздільну здатність зображення до бажаного.

### Список параметрів

`xResolution`
Нова роздільна здатність по осі x.

`yResolution`
Нова роздільна здатність по осі y.

`filter`
Фільтр зображень для використання.

`blur`
Коефіцієнт розмиття, де більше значення більше 1 робить зображення
більш розмитим, значення менше 1 – менш розмитим.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
