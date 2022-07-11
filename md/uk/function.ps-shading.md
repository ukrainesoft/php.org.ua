- [«ps_shading_pattern](function.ps-shading-pattern.md)
- [ps_shfill »](function.ps-shfill.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Створює затінок для подальшого використання

#ps_shading

(PECL ps \>u003d 1.3.0)

ps_shading — Створює затінок для подальшого використання

### Опис

**ps_shading**(
resource `$psdoc`,
string `$type`,
float `$x0`,
float `$y0`,
float `$x1`,
float `$y1`,
float `$c1`,
float `$c2`,
float `$c3`,
float `$c4`,
string `$optlist`
): int\|false

Створює затінок, який може використовуватися функцією
[ps_shfill()](function.ps-shfill.md) або
[ps_shading_pattern()](function.ps-shading-pattern.md).

Колір затінювання може бути в будь-якому колірному просторі, крім
`pattern`.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

`type`
Тип затінення може бути `radial` або `axial`. Кожне затінювання
починається з поточного кольору заливки та закінчується заданими значеннями
кольори, переданими в параметрах від c1 до c4 (опис їх значень
дивіться у [ps_setcolor()](function.ps-setcolor.md)).

`x0, x1, y0, y1`
Координати `x0`, `y0`, `x1`, `y1` - це початкова та кінцева точки
затінення. Якщо тип затінювання - `radial`, дві точки є середніми
точками початкового та кінцевого кіл.

c1, c2, c3, c4
Дивіться опис їх значень у
[ps_setcolor()](function.ps-setcolor.md).

`optlist`
Якщо тип затінення `radial`, `optlist` також має містити параметри
`r0` та `r1` з радіусом початкового та кінцевого кола.

### Значення, що повертаються

Повертає ідентифікатор шаблону або **`false`** у разі виникнення
помилки.

### Дивіться також

- [ps_shading_pattern()](function.ps-shading-pattern.md) - Створює
візерунок на основі затінення
- [ps_shfill()](function.ps-shfill.md) - Заповнює область
затіненням
