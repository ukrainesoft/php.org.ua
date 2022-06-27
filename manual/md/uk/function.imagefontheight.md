- [«imageflip](function.imageflip.md)
- [imagefontwidth »](function.imagefontwidth.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримання висоти шрифту

# imagefontheight

(PHP 4, PHP 5, PHP 7, PHP 8)

imagefontheight — Отримання висоти шрифту

### Опис

**imagefontheight**([GdFont](class.gdfont.md)\|int `$font`): int

Повертає висоту пікселів символу заданого шрифту.

### Список параметрів

`font`
Може приймати значення 1, 2, 3, 4, 5 для вбудованих шрифтів
кодування latin2 (вище число відповідає більшому шрифту) або
екземпляр [GdFont](class.gdfont.md), що повертається функцією
[imageloadfont()](function.imageloadfont.md).

### Значення, що повертаються

Повертає висоту у пікселах.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------|
| 8.1.0 | Параметр `font` тепер приймає як екземпляр [GdFont](class.gdfont.md), і ціле число (int); раніше приймалося лише ціле число (int). |

### Приклади

**Приклад #1 Приклад використання **imagefontheight()** на вбудованих
шрифтах**

`<?phpecho 'Font height: ' . imagefontheight(4);?> `

Результатом виконання цього прикладу буде щось подібне:

Font height: 16

**Приклад #2 Використання **imagefontheight()** разом з
[imageloadfont()](function.imageloadfont.md)**

` <?php// завантаження .gdf шрифту$font u003d imageloadfont('anonymous.gdf');echo 'Висота шрифту: ' . imagefontheight($font);?> `

Результатом виконання цього прикладу буде щось подібне:

Font height: 43

### Дивіться також

- [imagefontwidth()](function.imagefontwidth.md) - Отримання ширини
шрифту
- [imageloadfont()](function.imageloadfont.md) - Завантаження шрифту
