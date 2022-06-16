- [«imagecolordeallocate](function.imagecolordeallocate.md)
- [imagecolorexactalpha »](function.imagecolorexactalpha.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримання індексу заданого кольору

#imagecolorexact

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolorexact — Отримання індексу заданого кольору

### Опис

**imagecolorexact**(
[GdImage](class.gdimage.md) `$image`,
int `$red`,
int `$green`,
int `$blue`
): int

Повертає індекс для заданого кольору на панелі зображення.

Якщо зображення було створено з файлу, будуть розпізнані тільки
кольори, що використовуються у зображенні. Кольори, які використовуються тільки в
палітрі, розпізнані не будуть.

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

Повертає індекс для заданого кольору на панелі зображення або -1,
якщо такого кольору на палітрі немає.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Отримання кольорів GD логотипу**

` <?php// створення зображення$im u003d imagecreatefrompng('./gdlogo.png');$colors  u003d Array();$colors[] u003d imagecolorexact($im, 255, 0, 0);$colors[] u003d imagecolorexact($im, 0, 0, 0);$colors[] u003dimagecolorexact($im, 255, 255, 255);$colors[] u003dimagecolorexact($im, 100, 255, 5 colors);// звільнення пам'ятіimagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> 16711680
[1] u003d> 0
[2] u003d> 16777215
[3] u003d> 6618932
)

### Дивіться також

- [imagecolorclosest()](function.imagecolorclosest.md) - Отримання
індексу кольору найближчого до заданого
