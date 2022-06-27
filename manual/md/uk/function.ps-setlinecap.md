- [«ps_setgray](function.ps-setgray.md)
- [ps_setlinejoin »](function.ps-setlinejoin.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює зовнішній вигляд закінчення лінії

#ps_setlinecap

(PECL ps \>u003d 1.1.0)

ps_setlinecap — Встановлює зовнішній вигляд закінчення лінії

### Опис

**ps_setlinecap**(resource `$psdoc`, int `$type`): bool

Встановлює зовнішній вигляд закінчення лінії.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`type`
Тип закінчення лінії. Можливі значення: `PS_LINECAP_BUTT`,
`PS_LINECAP_ROUND` або `PS_LINECAP_SQUARED`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_setlinejoin()](function.ps-setlinejoin.md) - Встановлює
спосіб з'єднання ліній
- [ps_setlinewidth()](function.ps-setlinewidth.md) - Встановлює
ширину лінії
- [ps_setmiterlimit()](function.ps-setmiterlimit.md) - Встановлює
межа скосу
