- [«ps_setpolydash](function.ps-setpolydash.md)
- [ps_shading »](function.ps-shading.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Створює візерунок на основі затінення

#ps_shading_pattern

(PECL ps \>u003d 1.3.0)

ps_shading_pattern — Створює візерунок на основі затінення

### Опис

**ps_shading_pattern**(resource `$psdoc`, int `$shadingid`, string
`$optlist`): int\|false

Створює візерунок на основі затінювання, яке має бути створене раніше
за допомогою [ps_shading()](function.ps-shading.md). Шаблони затінювання
можна використовувати як стандартні шаблони.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`shadingid`
Ідентифікатор затінювання, раніше створеного за допомогою
[ps_shading()](function.ps-shading.md).

`optlist`
Аргумент у час не використовується.

### Значення, що повертаються

Ідентифікатор шаблону або **`false`** у разі виникнення помилки.

### Дивіться також

- [ps_shading()](function.ps-shading.md) - Створює затінення для
подальшого використання
- [ps_shfill()](function.ps-shfill.md) - Заповнює область
затіненням
