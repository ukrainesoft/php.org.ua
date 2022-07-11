- [«imagefill](function.imagefill.md)
- [imagefilledellipse »](function.imagefilledellipse.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання та заливка дуги

#imagefilledarc

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

imagefilledarc — Малювання та заливка дуги

### Опис

**imagefilledarc**(
[GdImage](class.gdimage.md) `$image`,
int `$center_x`,
int `$center_y`,
int `$width`,
int `$height`,
int `$start_angle`,
int `$end_angle`,
int `$color`,
int `$style`
): bool

Малює дугу з центром у заданих координатах зображення `image`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`center_x`
x-координат центру.

`center_y`
y-координат центру.

`width`
Ширина дуги.

`height`
Висота дуги.

`start_angle`
Кут початку дуги у градусах.

`end_angle`
Кут закінчення дуги у градусах. 0 ° відповідає положенню 3-години. Дуга
малюється за годинниковою стрілкою.

`col`
Ідентифікатор кольору, створений функцією
[imagecolorallocate()](function.imagecolorallocate.md).

`style`
Бітова або наступна константа:

1. **`IMG_ARC_PIE`**
2. **`IMG_ARC_CHORD`**
3. **`IMG_ARC_NOFILL`**
4. **`IMG_ARC_EDGED`**

**`IMG_ARC_PIE`** та **`IMG_ARC_CHORD`** взаємно виключають;
**`IMG_ARC_CHORD`** просто з'єднує початок та кінець дуги прямою лінією;
**`IMG_ARC_PIE`** малює між ними частину кола.
**`IMG_ARC_NOFILL`** означає, що мають бути тільки межі, заливка
не вимагається. **`IMG_ARC_EDGED`**, якщо використовується разом з
**`IMG_ARC_NOFILL`**, означає, що початок і кінець дуги з'єднуються з
центром - це хороший спосіб (краще заливки) отримати сектор (шматок
пирога).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Створення тривимірного пирога**

`<?php// створення зображення$image u003d imagecreatetruecolor(100, 100);// визначення квітів$white    u003du003d imagecolorallocate($image, 0xFF, 0xFF, 0xFF);$  );$darkgray u003d imagecolorallocate($image, 0x90, 0x90, 0x90);$navy     u003d imagecolorallocate($image, 0x00, 0x00, 0x80);$darknavy u003d imagecolorallocate($image, 0x00, 0x00, 0x50);$red      u003d imagecolorallocate($image, 0xFF, 0x00, 0x00);$darkred u003du003d imagecolorallocate($image, 0x90, 0x00, 0x00);// робимо ефект 3Дfor ($i  ($image, 50, $i, 100, 50, 0, 45, $darknavy, IMG_ARC_PIE); imagefilledarc($image, 50, $i, 100, 50, 45, 75 , $darkgray, IMG_ARC_PIE); imagefilledarc($image, 50, $i, 100, 50, 75, 360 , $darkred, IMG_ARC_PIE);}imagefilledarc($image, 50, 50, 100, 50, |,| $image, 50, 50, 100, 50, 45, 75 , $gray, IMG_ARC_PIE);imagefilledarc($image, 50, 50, 100, 50, 75, 360 ,   Content-type:image/png');imagepng($image);imagedestroy($image);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу: Створення тривимірного
пирога](images/21009b70229598c6a80eef8b45bf282b-imagefilledarc.png)
