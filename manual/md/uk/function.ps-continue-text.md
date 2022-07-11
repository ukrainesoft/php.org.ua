- [«ps_closepath](function.ps-closepath.md)
- [ps_curveto »](function.ps-curveto.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Продовжує текст у наступному рядку

#ps_continue_text

(PECL ps \>u003d 1.1.0)

ps_continue_text — Продовжує текст у наступному рядку

### Опис

**ps_continue_text**(resource `$psdoc`, string `$text`): bool

Виводить текст на один рядок нижче останнього рядка. Міжрядковий інтервал
береться зі значення "leading", яке має бути встановлене за допомогою
[ps_set_value()](function.ps-set-value.md). Фактичний стан
тексту визначається значеннями "textx" та "texty", які можна
запитати за допомогою функції
[ps_get_value()](function.ps-get-value.md).

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

`text`
Текст для виведення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_show()](function.ps-show.md) - Виводить текст
- [ps_show_xy()](function.ps-show-xy.md) - Виводить текст у заданій
позиції
- [ps_show_boxed()](function.ps-show-boxed.md) - Виводить текст у
поле
