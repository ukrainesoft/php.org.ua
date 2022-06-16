- [«Gmagick::rotateimage](gmagick.rotateimage.md)
- [Gmagick::separateimagechannel »](gmagick.separateimagechannel.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Масштабує розмір зображення

# Gmagick::scaleimage

(PECL gmagick \>u003d Unknown)

Gmagick::scaleimage — Масштабує розмір зображення

### Опис

public **Gmagick::scaleimage**(int `$width`, int `$height`, bool `$fit`
u003d **`false`**): [Gmagick](class.gmagick.md)

Масштабує розмір зображення до заданого розміру. Інший параметр
буде розрахований, якщо як будь-який з параметрів буде переданий 0.

### Список параметрів

`width`
Кількість стовпців у масштабованому зображенні.

`height`
Кількість рядків у масштабованому зображенні.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
