- [«imageantialias](function.imageantialias.md)
- [imageavif»] (function.imageavif.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Малювання дуги

# imagearc

(PHP 4, PHP 5, PHP 7, PHP 8)

imagearc — Малювання дуги

### Опис

**imagearc**(
[GdImage](class.gdimage.md) `$image`,
int `$center_x`,
int `$center_y`,
int `$width`,
int `$height`,
int `$start_angle`,
int `$end_angle`,
int `$color`
): bool

**imagearc()** малює дугу кола із заданими координатами центру.

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
Кут закінчення дуги у градусах. 0° відповідає положенню 3 години, дуга
малюється за годинниковою стрілкою.

`col`
Ідентифікатор кольору, створений функцією
[imagecolorallocate()](function.imagecolorallocate.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Малювання кола за допомогою функції **imagearc()****

`<?php// створюємо зображення 200*200$img u003d imagecreatetruecolor(200, 200);// створюємо кілька квітів$white u003d imagecolorallocate($img, 255, 5 5  5 ,  0,  0);$green u003d imagecolorallocate($img,  0, 255,   0);$blue u003du003dimagecolorallocate($img,   0,    0,0             х         ¦¦ ¦ 200, 0, 360, $white);// ротimagearc($img, 100, 100, 150, 150, 25, 155, $red);// очіimagearc($img,  5 360, $green);imagearc($img, 140, 75, 50, 50, 0, 360, $blue); ;// звільняємо пам'ятьimagedestroy($img);?> `

Результатом виконання цього прикладу буде щось подібне:

![ Висновок прикладу: Малювання кола за допомогою функції imagearc()
](images/21009b70229598c6a80eef8b45bf282b-imagearc.png)

### Дивіться також

- [imagefilledarc()](function.imagefilledarc.md) - Малювання та
заливка дуги
- [imageellipse()](function.imageellipse.md) - Малювання еліпса
- [imagefilledellipse()](function.imagefilledellipse.md) - Малювання
зафарбованого еліпса
