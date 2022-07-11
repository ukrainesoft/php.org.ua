- [«trader_sum](function.trader-sum.md)
- [trader_tan »] (function.trader-tan.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Потрійна експоненційна ковзна середня

# trader_t3

(PECL trader \>u003d 0.2.0)

trader_t3 - Потрійна експоненційна ковзна середня

### Опис

**trader_t3**(array `$real`, int `$timePeriod` u003d ?, float `$vFactor` u003d
?): array

### Список параметрів

`real`
Масив, який містить реальні значення.

`timePeriod`
Номер періоду. Допустимі значення від 2 до 100000.

`vFactor`
Коефіцієнт обсягу. Допустимі значення від 1 до 0.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
