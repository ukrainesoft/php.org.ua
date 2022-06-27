- [«trader_macdfix](function.trader-macdfix.md)
- [trader_mavp »](function.trader-mavp.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- MESA Адаптивна ковзна середня

# trader_mama

(PECL trader \>u003d 0.2.0)

trader_mama — MESA Адаптивна ковзна середня

### Опис

**trader_mama**(array `$real`, float `$fastLimit` u003d ?, float
`$slowLimit` u003d ?): array

### Список параметрів

`real`
Масив, який містить реальні значення.

`fastLimit`
Верхня межа, яка використовується в адаптивному алгоритмі. Допустимі значення
від 0,01 до 0,99.

`slowLimit`
Нижня межа, яка використовується в адаптивному алгоритмі. Допустимі значення
від 0,01 до 0,99.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
