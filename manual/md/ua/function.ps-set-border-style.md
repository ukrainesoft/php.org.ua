- [«ps_set_border_dash](function.ps-set-border-dash.md)
- [ps_set_info »](function.ps-set-info.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює стиль межі анотацій

#ps_set_border_style

(PECL ps \>u003d 1.1.0)

ps_set_border_style — Встановлює стиль межі анотацій

### Опис

**ps_set_border_style**(resource `$psdoc`, string `$style`, float
`$width`): bool

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

`style`
`style` може бути `solid` або `dashed`.

`width`
Ширина лінії кордону.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_set_border_color()](function.ps-set-border-color.md) -
Встановлює колір межі анотацій
- [ps_set_border_dash()](function.ps-set-border-dash.md) -
Встановлює довжину тире для межі анотації
