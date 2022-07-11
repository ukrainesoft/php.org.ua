- [«ps_set_info](function.ps-set-info.md)
- [ps_set_text_pos »](function.ps-set-text-pos.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює певні параметри

#ps_set_parameter

(PECL ps \>u003d 1.1.0)

ps_set_parameter — Встановлює певні параметри

### Опис

**ps_set_parameter**(resource `$psdoc`, string `$name`, string
`$value`): bool

Встановлює кілька параметрів, що використовуються багатьма
функціями. Параметри визначення є рядковими значеннями.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`name`
Список можливих імен дивіться
[ps_get_parameter()](function.ps-get-parameter.md).

`value`
Значення параметру.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- **ps_get_parameters()**
- [ps_set_value()](function.ps-set-value.md) - Встановлює
певні значення
