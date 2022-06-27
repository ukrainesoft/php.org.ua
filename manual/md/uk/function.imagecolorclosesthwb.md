- [«imagecolorclosestalpha](function.imagecolorclosestalpha.md)
- [imagecolordeallocate »](function.imagecolordeallocate.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримання індексу кольору, що має заданий тон, білизну та затемнення

#imagecolorclosesthwb

(PHP 4 \>u003d 4.0.1, PHP 5, PHP 7, PHP 8)

imagecolorclosesthwb — отримання індексу кольору, що має заданий тон,
білизну та затемнення

### Опис

**imagecolorclosesthwb**(
[GdImage](class.gdimage.md) `$image`,
int `$red`,
int `$green`,
int `$blue`
): int

Отримання індексу кольору, що має значення тону, білизни та затемнення
найбільш близькі до заданого кольору.

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

### Значення, що повертаються

Повертає цілий індекс кольору, що має значення тону, білизни і
затемнення найбільш близькі до заданого кольору.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagecolorclosesthwb()****

`<?php$im u003d imagecreatefromgif('php.gif');echo 'HWB: ' . imagecolorclosesthwb($im, 116, 115, 152);imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

HWB: 33

### Дивіться також

- [imagecolorclosest()](function.imagecolorclosest.md) - Отримання
індексу кольору найближчого до заданого
