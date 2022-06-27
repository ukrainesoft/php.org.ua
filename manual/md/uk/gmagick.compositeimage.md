- [«Gmagick::commentimage](gmagick.commentimage.md)
- [Gmagick::\_\_construct »](gmagick.construct.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Накладає одне зображення на інше

# Gmagick::compositeimage

(PECL gmagick \>u003d Unknown)

Gmagick::compositeimage — Накладає одне зображення на інше

### Опис

public **Gmagick::compositeimage**(
[Gmagick](class.gmagick.md) `$source`,
int `$COMPOSE`,
int `$x`,
int `$y`
): [Gmagick](class.gmagick.md)

Накладає одне зображення на інше із зазначеним усуненням.

### Список параметрів

`source`
Об'єкт [Gmagick](class.gmagick.md), який містить складову
зображення.

`compose`
Композитний оператор.

`x`
Усунення стовпця складеного зображення.

`y`
Зміщення рядка складеного зображення.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) із композиціями.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
