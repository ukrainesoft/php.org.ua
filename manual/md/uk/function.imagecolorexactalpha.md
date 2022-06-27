- [«imagecolorexact](function.imagecolorexact.md)
- [imagecolormatch »](function.imagecolormatch.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримання індексу заданого кольору та альфа компонента

#imagecolorexactalpha

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

imagecolorexactalpha — Отримання індексу заданого кольору та альфа
компонента

### Опис

**imagecolorexactalpha**(
[GdImage](class.gdimage.md) `$image`,
int `$red`,
int `$green`,
int `$blue`,
int `$alpha`
): int

Повертає індекс для заданого кольору та альфа компонента на панелі
зображення.

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
Значення в діапазоні від `0` до `127`. `0` означає непрозорість, `127`
означає абсолютну прозорість.

Параметри кольору можуть бути цілими в діапазоні від 0 до 255,
або шістнадцятковими в діапазоні від 0×00 до 0×FF.

### Значення, що повертаються

Повертає індекс для заданого кольору та альфа компонента на панелі
зображення або -1, якщо такого кольору на панелі немає.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Отримання кольорів GD логотипу**

` <?php// створення зображення$im u003d imagecreatefrompng('./gdlogo.png');$colors  u003d Array();$colors[] u003d imagecolorexactalpha($im, 255, 0, 0, 0) [] u003d imagecolorexactalpha($im, 0, 0, 0, 127);$colors[] u003d imagecolorexactalpha($im, 255, 255, 255, 55);$colors[] u003d imagecolor 52, 20);print_r($colors);// звільнення пам'ятіimagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> 16711680
[1] u003d> 2130706432
[2] u003d> 939524095
[3] u003d> 342163252
)

### Дивіться також

- [imagecolorclosestalpha()](function.imagecolorclosestalpha.md) -
Отримання індексу кольору найближчого до заданого з урахуванням прозорості
