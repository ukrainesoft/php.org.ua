- [«imagegetclip](function.imagegetclip.md)
- [imagegif »](function.imagegif.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримує метод інтерполяції

# imagegetinterpolation

(PHP 8)

imagegetinterpolation — Отримує метод інтерполяції

### Опис

**imagegetinterpolation**([GdImage](class.gdimage.md) `$image`): int

Отримує встановлений метод інтерполяції `image`.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

### Значення, що повертаються

Повертає метод інтерполяції.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Дивіться також

- [imagesetinterpolation()](function.imagesetinterpolation.md) -
Встановлює метод інтерполяції
