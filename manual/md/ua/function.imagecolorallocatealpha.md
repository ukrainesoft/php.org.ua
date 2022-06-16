- [«imagecolorallocate](function.imagecolorallocate.md)
- [imagecolorat »](function.imagecolorat.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Створення кольору для зображення

#imagecolorallocatealpha

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

imagecolorallocatealpha — Створення кольору зображення

### Опис

**imagecolorallocatealpha**(
[GdImage](class.gdimage.md) `$image`,
int `$red`,
int `$green`,
int `$blue`,
int `$alpha`
): int\|false

**imagecolorallocatealpha()** працює аналогічно до функції
[imagecolorallocate()](function.imagecolorallocate.md), але ще
додає до кольору параметр `alpha`, який відповідає за прозорість.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`red`
Значення червоного компонента кольору.

`green`
Значення зеленого компонента кольору.

`blue`
Значення синього компонента кольору.

`alpha`
Значення в діапазоні від `0` до `127`. `0` означає непрозорий колір,
`127` означає повну прозорість.

Параметри `red`, `green` і `blue` можуть бути або цілими в
діапазоні від 0 до 255 або шістнадцятковими в діапазоні від 0x00 до
0xFF.

### Значення, що повертаються

Ідентифікатор кольору або **`false`** у разі виникнення помилки при
створення кольору.

**Увага**

Ця функція може повертати як логічне значення **`false`**, так і
значення не типу boolean, яке наводиться до **`false`**. Більше
Детальну інформацію див. у розділі [Булев
тип](language.types.boolean.md). Використовуйте [оператор
u003du003du003d](language.operators.comparison.md) для перевірки значення,
повертається цією функцією.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagecolorallocatealpha()****

`<?php$size u003d 300;$imageu003dimagecreatetruecolor($size, $size);// створимо білий фон з чорною рамкою$back u003d imagecolorallocate($image, 255, 255, $5 image, 0, 0, 0);imagefilledrectangle($image, 0, 0, $size - 1, $size - 1, $back);imagerectangle($image, 0, 0, $size - 1, $si , $border);$yellow_x u003d 100;$yellow_y u003d 75;$red_x    u003d 120;$red_y    u003d 165;$blue_x   u003d 187;$blue_y   u003d 125;$radius   u003d 150;// создание цветов с альфа компонентом$yellow u003d imagecolorallocatealpha($image, 255, 255, 0, 75);$red    u003d imagecolorallocatealpha($image, 255, 0,0, 75); малювання 3-х перетинаються колівimagefilledellipse($image, $yellow_x, $yellow_y, $radius, $radius, $yellow);imagefilledellipse($image, $red_x, $red_y, $radius, $lip; image, $blue_x, $blue_y, $radius, $radius, $blue);// не забудьте вивести правильний заголовок!header('Content-Type: image/png');// і нарешті, виведенняimagepn g($image);imagedestroy($image);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок приклад: Приклад використання
imagecolorallocatealpha()](images/21009b70229598c6a80eef8b45bf282b-imagecolorallocatealpha.png)

**Приклад #2 Перетворення типових альфа-значень для використання з
**imagecolorallocatealpha()****

Зазвичай альфа-значення `0` позначають повністю прозорі пікселі, а
Альфа-канал має 8 бітів. Щоб перетворити такі альфа-значення для
сумісності з **imagecolorallocatealpha()**, досить небагато
простий арифметики:

`<?php$alpha8 u003d 0; // повністю прозорийvar_dump(127 - ($alpha8 >> 1));$alpha8 u003d 255; // повністю непрозорийvar_dump(127 - ($alpha8 >> 1));?> `

Результат виконання цього прикладу:

int(127)
int(0)

### Дивіться також

- [imagecolorallocate()](function.imagecolorallocate.md) - Створення
кольори для зображення
- [imagecolordeallocate()](function.imagecolordeallocate.md) -
Розрив асоціації змінної із кольором для заданого зображення
