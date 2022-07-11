- [«imagecolorclosest](function.imagecolorclosest.md)
- [imagecolorclosesthwb »](function.imagecolorclosesthwb.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримання індексу кольору найближчого до заданого з урахуванням прозорості

#imagecolorclosestalpha

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

imagecolorclosestalpha — Отримання індексу кольору найближчого до заданого
з урахуванням прозорості

### Опис

**imagecolorclosestalpha**(
[GdImage](class.gdimage.md) `$image`,
int `$red`,
int `$green`,
int `$blue`,
int `$alpha`
): int

Повертає індекс кольору на панелі зображення, "найближчого" до заданого
RGB значенню, а також `alpha` рівню.

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

Повертає індекс кольору на панелі зображення, найближчого до заданого.

### Приклади

**Приклад #1 Пошук набору кольорів зображення**

` <?php// Створення зображення і перетворення його в палітрове$im u003d imagecreatefrompng('figures/imagecolorclosest.png');imagetruecolortopalette($im, false, 255);//   | array(254, 145, 154, 50), 8; 5 цвету и поиск ближайшего к нему в палитре.// Возврат номера по порядку, RGB искомого цвета и найденное RGB соответствиеforeach($colors as $id u003d> $rgb){    $result u003d imagecolorclosestalpha($im, $rgb[0], $ rgb[1], $rgb[2], $rgb[3]); $resultu003du003dimagecolorsforindex($im,$result); $result u003d "({$result['red']}, {$result['green']}, {$result['blue']}, {$result['alpha']})"; echo "#$id: Пошук ($rgb[0], $rgb[1], $rgb[2], $rgb[3]); Найближча подібність: $result.
";}imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

#0: Пошук (254, 145, 154, 50); Найближча подібність: (252, 150, 148, 0).
#1: Пошук (153, 145, 188, 127); Найближча подібність: (148, 150, 196, 0).
#2: Пошук (153, 90, 145, 0); Найближча подібність: (148, 90, 156, 0).
#3: Пошук (255, 137, 92, 84); Найближча подібність: (252, 150, 92, 0).

### Дивіться також

- [imagecolorexactalpha()](function.imagecolorexactalpha.md) -
Отримання індексу заданого кольору та альфа компонента
- [imagecolorclosest()](function.imagecolorclosest.md) - Отримання
індексу кольору найближчого до заданого
- [imagecolorclosesthwb()](function.imagecolorclosesthwb.md) -
Отримання індексу кольору, що має заданий тон, білизну та затемнення
