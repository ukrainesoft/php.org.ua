- [«ps_shading](function.ps-shading.md)
- [ps_show_boxed »](function.ps-show-boxed.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Заповнює область затіненням

#ps_shfill

(PECL ps \>u003d 1.3.0)

ps_shfill — Заповнює область затіненням

### Опис

**ps_shfill**(resource `$psdoc`, int `$shadingid`): bool

Заповнює область затіненням, яке має бути створене раніше
за допомогою [ps_shading()](function.ps-shading.md). Це альтернативний
спосіб створення візерунка із затінювання
[ps_shading_pattern()](function.ps-shading-pattern.md) та використання
візерунок як колір заливки.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`shadingid`
Ідентифікатор затінювання, раніше створеного за допомогою
[ps_shading()](function.ps-shading.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_shading()](function.ps-shading.md) - Створює затінення для
подальшого використання
- [ps_shading_pattern()](function.ps-shading-pattern.md) - Створює
візерунок на основі затінення
