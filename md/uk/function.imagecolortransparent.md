- [«imagecolorstotal](function.imagecolorstotal.md)
- [imageconvolution »](function.imageconvolution.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Визначає колір як прозорий

# imagecolortransparent

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolortransparent — Визначає колір як прозорий

### Опис

**imagecolortransparent**([GdImage](class.gdimage.md) `$image`, ?int
`$color` u003d **`null`**): int

Отримує або встановлює прозорість кольору у заданому зображенні
`image`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`col`
Ідентифікатор кольору, створений функцією
[imagecolorallocate()](function.imagecolorallocate.md).

### Значення, що повертаються

Повертає ідентифікатор нового (або поточного, якщо нічого не
змінилося) кольори. Якщо аргумент `color` заданий як **`null`** і в
зображенні немає прозорих кольорів, функція поверне `-1`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |
| 8.0.0 | `color` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **imagecolortransparent()****

`<?php// Створимо зображення розміром 55x30$im u003d imagecreatetruecolor(55, 30);$red u003d imagecolorallocate($im, 255, 0, 0);$black u003d imagecolo // Зробимо фон прозоримimagecolortransparent($im, $black);// Намалюємо червоний прямокутникimagefilledrectangle($im, 4, 4, 50, 25, $red);// Збережемо зображенняimagepng('image ;imagedestroy($im);?> `

Результатом виконання цього прикладу буде щось подібне:

![Висновок прикладу:
imagecolortransparent()](images/21009b70229598c6a80eef8b45bf282b-imagecolortransparent.png)

### Примітки

> **Примітка**:
>
> Прозорість копіюється лише функцією
> [imagecopymerge()](function.imagecopymerge.md) та для
> truecolor-зображень. У разі використання функції
> [imagecopy()](function.imagecopy.md) або панелі зображення
> значення альфа компонента не копіюється.

> **Примітка**:
>
> Прозорий колір є властивістю зображення, прозорість не
> є властивістю кольору. Якщо ви задали колір як прозорий,
> деякі області зображення цього кольору намальовані раніше стануть
> прозорими.
