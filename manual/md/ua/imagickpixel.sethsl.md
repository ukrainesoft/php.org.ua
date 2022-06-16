- [«
ImagickPixel::setColorValueQuantum](imagickpixel.setcolorvaluequantum.md)
- [ImagickPixel::setIndex »](imagickpixel.setindex.md)

- [PHP Manual](index.md)
- [ImagickPixel](class.imagickpixel.md)
- Установка нормалізованого HSL кольору

# ImagickPixel::setHSL

(PECL imagick 2, PECL imagick 3)

ImagickPixel::setHSL — Встановлення нормалізованого кольору HSL

### Опис

public **ImagickPixel::setHSL**(float `$hue`, float `$saturation`, float
`$luminosity`): bool

Встановлює колір в об'єкті ImagickPixel, використовуючи нормалізовані
значення відтінку, насиченості та яскравості.

### Список параметрів

`hue`
Нормалізоване значення відтінку, як значення кругової веселки (між
0 та 1), де нульовим значенням буде червоний колір.

`saturation`
Нормалізоване значення насиченості, де означає повне насичення.

`luminosity`
Нормалізоване значення яскравості, за шкалою від 0 (чорний) до 1 (білий),
при встановленому HS значення 0.5.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **ImagickPixel::setHSL()****

` <?php//Створення майже чистого червоного кольору$color u003d new ImagickPixel('rgb(90%, 10%, 10%)');//Отримання значень HSL$colorInfo u003d $color-> Поворачиваем оттенок на 180 градусов$newHue u003d $colorInfo['hue'] + 0.5;if ($newHue > 1) {    $newHue u003d $newHue - 1;}//Устанавливаем ImagickPixel в новый цвет$colorInfo u003d $color->setHSL ($newHue, $colorInfo['saturation'], $colorInfo['luminosity']);//Перевіряємо, що новий колір є блакитним/зеленим$colorInfo u003d $color->getcolor();print_r($or > `

Результат виконання цього прикладу:

Array
(
[r] u003d> 26
[g] u003d> 230
[b] u003d> 230
[a] u003d> 255
)

### Примітки

> **Примітка**:
>
> Доступно з версії 6.2.9 та вище бібліотеки ImageMagick.
