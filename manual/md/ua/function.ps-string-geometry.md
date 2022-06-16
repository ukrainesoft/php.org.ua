- [«ps_show](function.ps-show.md)
- [ps_stringwidth »](function.ps-stringwidth.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Отримує геометрію рядка

#ps_string_geometry

(PECL ps \>u003d 1.2.0)

ps_string_geometry — Отримує геометрію рядка

### Опис

**ps_string_geometry**(
resource `$psdoc`,
string `$text`,
int `$fontid` u003d 0,
float `$size` u003d 0.0
): array

Функція схожа на [ps_stringwidth()](function.ps-stringwidth.md), але
повертає масив розмірів, що містить ширину, верхню та нижню межу
тексту.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

`text`
Текст, для якого має бути розрахована геометрія.

`fontid`
Ідентифікатор шрифту. Якщо шрифт не вказано, використовується
поточний шрифт.

`size`
Розмір шрифту. Якщо не вказано, використовується поточний розмір.

### Значення, що повертаються

Масив розмірів рядка. Елемент "width" містить ширину рядка,
повертається функцією [ps_stringwidth()](function.ps-stringwidth.md).
Елемент "descender" містить максимальну нижню межу, а "ascender" -
максимальну верхню межу елемента рядка.

### Дивіться також

- [ps_continue_text()](function.ps-continue-text.md) - Продовжує
текст у наступному рядку
- [ps_stringwidth()](function.ps-stringwidth.md) - Отримує ширину
рядки
