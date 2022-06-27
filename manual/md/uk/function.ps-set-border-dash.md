- [«ps_set_border_color](function.ps-set-border-color.md)
- [ps_set_border_style »](function.ps-set-border-style.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює довжину тире для межі анотації

#ps_set_border_dash

(PECL ps \>u003d 1.1.0)

ps_set_border_dash — Встановлює довжину тире для межі анотації

### Опис

**ps_set_border_dash**(resource `$psdoc`, float `$black`, float
`$white`): bool

Посилання, додані за допомогою однієї з функцій
[ps_add_weblink()](function.ps-add-weblink.md),
[ps_add_pdflink()](function.ps-add-pdflink.md) і т.д., будуть
відображатися із закругленим прямокутником, коли документ PostScript
перетворюється на PDF і переглядається у програмі перегляду PDF. Цей
прямокутник не відображається у документі PostScript. Функція
встановлює зовнішній вигляд та ширину лінії кордону.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`black`
Довжина рисочки.

`white`
Довжина проміжку між рисочками.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_set_border_color()](function.ps-set-border-color.md) -
Встановлює колір межі анотацій
- [ps_set_border_style()](function.ps-set-border-style.md) -
Встановлює стиль межі анотацій
