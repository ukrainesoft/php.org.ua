- [ trader_dx](function.trader-dx.md)
- [trader_errno»](function.trader-errno.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Експоненційна ковзна середня

# trader_ema

(PECL trader \>u003d 0.2.0)

trader_ema - Експоненційна ковзна середня

### Опис

**trader_ema**(array `$real`, int `$timePeriod` u003d ?): array

### Список параметрів

`real`
Масив, який містить реальні значення.

`timePeriod`
Номер періоду. Допустимі значення від 2 до 100000.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
