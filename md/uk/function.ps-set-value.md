- [«ps_set_text_pos](function.ps-set-text-pos.md)
- [ps_setcolor »](function.ps-setcolor.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює певні значення

#ps_set_value

(PECL ps \>u003d 1.1.0)

ps_set_value — Встановлює певні значення

### Опис

**ps_set_value**(resource `$psdoc`, string `$name`, float `$value`):
bool

Встановлює кілька значень, що використовуються багатьма
функціями. Параметри за визначенням є значеннями з плаваючою
точкою.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`name`
Значення `name` може бути одним із наступного:

textrendering
Спосіб відображення тексту.

textx
Координата X для виведення тексту.

texty
Координати Y для виведення тексту.

wordspacing
Відстань між словами щодо ширини пробілу.

leading
Відстань між рядками у пікселях.

`value`
Значення параметру.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_get_value()](function.ps-get-value.md) - Отримує певні
значення
- [ps_set_parameter()](function.ps-set-parameter.md) - Встановлює
певні параметри
