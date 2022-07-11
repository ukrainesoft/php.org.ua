- [«round](function.round.md)
- [sinh »] (function.sinh.md)

- [PHP Manual](index.md)
- [Математичні функції](ref.math.md)
- Сінус

# sin

(PHP 4, PHP 5, PHP 7, PHP 8)

sin — Сінус

### Опис

**sin**(float `$num`): float

**sin()** повертає синус параметра `num`. Параметр `num` задається в
радіанах.

### Список параметрів

`num`
Значення у радіанах

### Значення, що повертаються

Синус кута `num`

### Приклади

**Приклад #1 Приклад використання **sin()****

`<?php// Точність залежить від ваших налаштувань точностіecho sin(deg2rad(60)); //  0.866025403 ...echo sin(60); // -0.304810621 ...?> `

### Дивіться також

- [asin()](function.asin.md) - Арксінус
- [sinh()](function.sinh.md) - Гіперболічний синус
- [cos()](function.cos.md) - Косінус
- [tan()](function.tan.md) - Тангенс
- [deg2rad()](function.deg2rad.md) - Перетворює значення з
градусів у радіани
