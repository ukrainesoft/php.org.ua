- [«Gmagick::shearimage](gmagick.shearimage.md)
- [Gmagick::spreadimage »](gmagick.spreadimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Застосовує ефект соляризації до зображення

# Gmagick::solarizeimage

(PECL gmagick \>u003d Unknown)

Gmagick::solarizeimage — Застосовує ефект соляризації до зображення

### Опис

public **Gmagick::solarizeimage**(int `$threshold`):
[Gmagick](class.gmagick.md)

Застосовує особливий ефект до зображення, подібний до ефекту, що досягається в
фотолабораторії за допомогою вибіркового експонування областей
світлочутливого паперу на світло. Поріг варіюється від 0 до
QuantumRange і є мірою ступеня соляризації.

### Список параметрів

`threshold`
Ступінь соляризації.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
