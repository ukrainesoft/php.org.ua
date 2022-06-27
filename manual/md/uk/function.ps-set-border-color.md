- [«ps_scale](function.ps-scale.md)
- [ps_set_border_dash »](function.ps-set-border-dash.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює колір межі анотацій

#ps_set_border_color

(PECL ps \>u003d 1.1.0)

ps_set_border_color — Встановлює колір межі анотацій

### Опис

**ps_set_border_color**(
resource `$psdoc`,
float `$red`,
float `$green`,
float `$blue`
): bool

Посилання, додані за допомогою однієї з функцій
[ps_add_weblink()](function.ps-add-weblink.md),
[ps_add_pdflink()](function.ps-add-pdflink.md) і т.д., будуть
відображатися із закругленим прямокутником, коли документ PostScript
перетворюється на PDF і переглядається у програмі перегляду PDF. Цей
прямокутник не відображається у документі PostScript. Функція
встановлює колір межі прямокутника.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`red`
Червоний компонент кольору кордону.

`green`
Зелений компонент кольору кордону.

`blue`
Синій компонент кольору кордону.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_set_border_dash()](function.ps-set-border-dash.md) -
Встановлює довжину тире для межі анотації
- [ps_set_border_style()](function.ps-set-border-style.md) -
Встановлює стиль межі анотацій
