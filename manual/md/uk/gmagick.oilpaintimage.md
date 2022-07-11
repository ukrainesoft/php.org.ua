- [« Gmagick::normalizeimage](gmagick.normalizeimage.md)
- [Gmagick::previousimage »](gmagick.previousimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Імітує ефект картини олією

# Gmagick::oilpaintimage

(PECL gmagick \>u003d Unknown)

Gmagick::oilpaintimage — Імітує ефект картини маслом

### Опис

public **Gmagick::oilpaintimage**( float `$radius` ):
[Gmagick](class.gmagick.md)

Застосовує фільтр із спеціальним ефектом, що імітує картину олією.
Кожен піксель замінюється кольором, що найбільш часто зустрічається, в круговій
області, що визначається радіусом.

### Список параметрів

`radius`
Радіус кругової околиці.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
