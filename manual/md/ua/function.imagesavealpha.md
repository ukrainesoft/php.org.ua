- [«imagerotate](function.imagerotate.md)
- [imagescale »](function.imagescale.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Чи зберігати повну інформацію альфа-каналу при збереженні
зображень PNG

#imagesavealpha

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

imagesavealpha — Чи зберігати повну інформацію альфа-каналу при
збереження зображень PNG

### Опис

**imagesavealpha**([GdImage](class.gdimage.md) `$image`, bool
`$enable`): bool

**imagesavealpha()** встановлює прапор, який визначає, чи буде
зберігатися повна інформація альфа-каналу (на противагу однокольоровій
прозорості) і зберігає PNG зображення

Альфа-змішування має бути відключено
(`imagealphablending($im, false)`), щоб альфа-канал зберігався в
першу чергу.

### Список параметрів

`image`
Об'єкт [GdImage](class.gdimage.md), який повертається однією з функцій
створення зображень, наприклад, такий як
[imagecreatetruecolor()](function.imagecreatetruecolor.md).

`enable`
Чи потрібно зберігати альфа канал чи ні. За промовчанням **false**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------|
| 8.0.0 | `image` тепер чекає екземпляр [GdImage](class.gdimage.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **imagesavealpha()****

` <?php// Завантаження png зображення с альфа каналом$png u003d imagecreatefrompng('./alphachannel_example.png');// Вимкнення альфа-змішенняimagealphablending($png, false);// Ка прапораimagesavealpha($png, true);// Виведення зображення і очищення пам'ятіheader('Content-Type: image/png');imagepng($png);imagedestroy($png);?> `

### Дивіться також

- [imagealphablending()](function.imagealphablending.md) - Завдання
режиму сполучення кольорів для зображення
