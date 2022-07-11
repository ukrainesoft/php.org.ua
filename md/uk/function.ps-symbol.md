- [«ps_symbol_width](function.ps-symbol-width.md)
- [ps_translate »](function.ps-translate.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Виводить гліф

#ps_symbol

(PECL ps \>u003d 1.2.0)

ps_symbol - Виводить гліф

### Опис

**ps_symbol**(resource `$psdoc`, int `$ord`): bool

Виводить гліф у позиції `ord` у векторі кодування поточного шрифту.
Кодування шрифту можна встановити під час завантаження шрифту за допомогою
[ps_findfont()](function.ps-findfont.md).

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`ord`
Положення гліфа у векторному шрифт кодування.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_symbol_name()](function.ps-symbol-name.md) - Отримує ім'я
гліфа
- [ps_symbol_width()](function.ps-symbol-width.md) - Отримує ширину
гліфа
