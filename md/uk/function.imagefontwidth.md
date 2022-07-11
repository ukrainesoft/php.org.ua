- [«imagefontheight](function.imagefontheight.md)
- [imageftbbox »](function.imageftbbox.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримання ширини шрифту

# imagefontwidth

(PHP 4, PHP 5, PHP 7, PHP 8)

imagefontwidth — Отримання ширини шрифту

### Опис

**imagefontwidth**([GdFont](class.gdfont.md)\|int `$font`): int

Повертає ширину символу шрифту.

### Список параметрів

`font`
Може приймати значення 1, 2, 3, 4, 5 для вбудованих шрифтів
кодування latin2 (вище число відповідає більшому шрифту) або
екземпляр [GdFont](class.gdfont.md), що повертається функцією
[imageloadfont()](function.imageloadfont.md).

### Значення, що повертаються

Повертає ширину у пікселах

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------|
| 8.1.0 | Параметр `font` тепер приймає як екземпляр [GdFont](class.gdfont.md), і ціле число (int); раніше приймалося лише ціле число (int). |

### Приклади

**Приклад #1 Використання **imagefontwidth()** на вбудованих шрифтах**

`<?phpecho 'Ширина шрифту: ' . imagefontwidth(4);?> `

Результатом виконання цього прикладу буде щось подібне:

Font width: 8

**Приклад #2 Використання **imagefontwidth()** разом з
[imageloadfont()](function.imageloadfont.md)**

` <?php// завантаження .gdf шрифту$font u003d imageloadfont('anonymous.gdf');echo 'Ширина шрифту: ' . imagefontwidth($font);?> `

Результатом виконання цього прикладу буде щось подібне:

Font width: 23

### Дивіться також

- [imagefontheight()](function.imagefontheight.md) - Отримання
висоти шрифту
- [imageloadfont()](function.imageloadfont.md) - Завантаження шрифту
