- [«Gmagick::charcoalimage](gmagick.charcoalimage.md)
- [Gmagick::clear »](gmagick.clear.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Видаляє область зображення та підрізає його

# Gmagick::chopimage

(PECL gmagick \>u003d Unknown)

Gmagick::chopimage — Видаляє область зображення та підрізає його.

### Опис

public **Gmagick::chopimage**(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): [Gmagick](class.gmagick.md)

Видаляє область зображення і сплескує його так, щоб зайняти віддалену
область.

### Список параметрів

`width`
Ширина ділянки, що вирізується.

`height`
Висота ділянки, що вирізується.

`x`
Горизонтальне усунення початку вирізки.

`y`
Вертикальне усунення початку вирізки.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md), що вийшов.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
