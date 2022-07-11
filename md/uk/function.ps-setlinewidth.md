- [«ps_setlinejoin](function.ps-setlinejoin.md)
- [ps_setmiterlimit »] (function.ps-setmiterlimit.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює ширину лінії

#ps_setlinewidth

(PECL ps \>u003d 1.1.0)

ps_setlinewidth — Встановлює ширину лінії

### Опис

**ps_setlinewidth**(resource `$psdoc`, float `$width`): bool

Встановлює ширину лінії для наступних операцій малювання.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`width`
Ширина ліній у точках.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_setlinecap()](function.ps-setlinecap.md) - Встановлює
зовнішній вигляд закінчення лінії
- [ps_setlinejoin()](function.ps-setlinejoin.md) - Встановлює
спосіб з'єднання ліній
- [ps_setmiterlimit()](function.ps-setmiterlimit.md) - Встановлює
межа скосу
