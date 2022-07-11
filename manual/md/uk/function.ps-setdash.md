- [«ps_setcolor](function.ps-setcolor.md)
- [ps_setflat »](function.ps-setflat.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює зовнішній вигляд пунктирної лінії

#ps_setdash

(PECL ps \>u003d 1.1.0)

ps_setdash - Встановлює зовнішній вигляд пунктирної лінії

### Опис

**ps_setdash**(resource `$psdoc`, float `$on`, float `$off`): bool

Встановлює довжину чорних та білих частин пунктирної лінії.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`on`
Довжина рисочки.

`off`
Довжина проміжку між рисочками.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_setpolydash()](function.ps-setpolydash.md) - Встановлює
зовнішній вигляд пунктирної лінії
