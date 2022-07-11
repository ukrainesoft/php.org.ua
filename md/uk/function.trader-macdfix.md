- [«trader_macdext](function.trader-macdext.md)
- [trader_mama »](function.trader-mama.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Виправлення сходження/розбіжності ковзної середньої 12/26

#trader_macdfix

(PECL trader \>u003d 0.2.0)

trader_macdfix — Виправлення сходження/розбіжності ковзної середньої
12/26

### Опис

**trader_macdfix**(array `$real`, int `$signalPeriod` u003d ?): array

### Список параметрів

`real`
Масив, який містить реальні значення.

`signalPeriod`
Згладжування сигнальної лінії (номер періоду). Допустимі значення від
1 до 100 000.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
