- [«ps_setdash](function.ps-setdash.md)
- [ps_setfont »](function.ps-setfont.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює площинність

#ps_setflat

(PECL ps \>u003d 1.1.0)

ps_setflat — Встановлює площинність

### Опис

**ps_setflat**(resource `$psdoc`, float `$value`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`value`
`value` має бути між 0.2 та 1.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
