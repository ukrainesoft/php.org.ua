- [« Gmagick::radialblurimage](gmagick.radialblurimage.md)
- [Gmagick::read »](gmagick.read.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Створює імітацію ефекту тривимірної кнопки

# Gmagick::raiseimage

(PECL gmagick \>u003d Unknown)

Gmagick::raiseimage — Створює імітацію ефекту тривимірної кнопки

### Опис

public **Gmagick::raiseimage**(
int `$width`,
int `$height`,
int `$x`,
int `$y`,
bool `$raise`
): [Gmagick](class.gmagick.md)

Створює імітацію ефекту тривимірної кнопки, освітлюючи та затемнюючи краї
зображення. Ширина та висота елементів raise_info визначають ширину
вертикального та горизонтального краю ефекту.

### Список параметрів

`width`
Ширина області, яку необхідно підняти.

`height`
Висота площі, що піднімається.

`x`
Координати X.

`y`
Координати Y.

`raise`
Значення, відмінне від нуля, створює ефект тривимірного піднесення,
інакше - ефект зниження.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
