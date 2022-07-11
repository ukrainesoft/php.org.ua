- [«ps_setlinecap](function.ps-setlinecap.md)
- [ps_setlinewidth »](function.ps-setlinewidth.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює спосіб з'єднання ліній

#ps_setlinejoin

(PECL ps \>u003d 1.1.0)

ps_setlinejoin — Встановлює спосіб з'єднання ліній

### Опис

**ps_setlinejoin**(resource `$psdoc`, int `$type`): bool

Встановлює спосіб з'єднання ліній.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`type`
Спосіб з'єднання ліній. Можливі значення: `PS_LINEJOIN_MITER`,
`PS_LINEJOIN_ROUND` або `PS_LINEJOIN_BEVEL`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_setlinecap()](function.ps-setlinecap.md) - Встановлює
зовнішній вигляд закінчення лінії
- [ps_setlinewidth()](function.ps-setlinewidth.md) - Встановлює
ширину лінії
- [ps_setmiterlimit()](function.ps-setmiterlimit.md) - Встановлює
межа скосу
