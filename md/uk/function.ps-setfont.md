- [«ps_setflat](function.ps-setflat.md)
- [ps_setgray »](function.ps-setgray.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює шрифт, який використовуватиметься для наступного
висновку

#ps_setfont

(PECL ps \>u003d 1.1.0)

ps_setfont — Встановлює шрифт, який буде використовуватись для
наступного висновку

### Опис

**ps_setfont**(resource `$psdoc`, int `$fontid`, float `$size`): bool

Встановлює шрифт, який має бути завантажений раніше за допомогою
[ps_findfont()](function.ps-findfont.md). Виведення тексту без встановлення
шрифту призводить до помилки.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`fontid`
Ідентифікатор шрифту, повернутий
[ps_findfont()](function.ps-findfont.md).

`size`
Розмір шрифту.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_findfont()](function.ps-findfont.md) - Завантажує шрифт
- [ps_set_text_pos()](function.ps-set-text-pos.md) - Встановлює
позицію для виведення тексту на приклад.
