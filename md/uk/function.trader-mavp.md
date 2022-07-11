- [«trader_mama](function.trader-mama.md)
- [trader_max »](function.trader-max.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Змінна середня зі змінним періодом

#trader_mavp

(PECL trader \>u003d 0.2.0)

trader_mavp — Змінна середня зі змінним періодом

### Опис

**trader_mavp**(
array `$real`,
array `$periods`,
int `$minPeriod` u003d ?,
int `$maxPeriod` u003d ?,
int `$mAType` u003d ?
): array

### Список параметрів

`real`
Масив, який містить реальні значення.

`periods`
Масив, який містить реальні значення.

`minPeriod`
Значення менше мінімуму буде змінено на мінімальний період.
Допустимі значення від 2 до 100000

`maxPeriod`
Значення більше максимуму буде змінено на максимальний період.
Допустимі значення від 2 до 100000

`mAType`
Тип ковзної середньої. Слід використовувати серію констант
[TRADER_MA_TYPE\_\*](trader.constants.md).

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
