- [«gmp_sqrtrem](function.gmp-sqrtrem.md)
- [gmp_sub »](function.gmp-sub.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Перетворення GMP числа в рядок

#gmp_strval

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_strval — Перетворення GMP числа на рядок

### Опис

**gmp_strval**([GMP](class.gmp.md)\|int\|string `$num`, int `$base` u003d
10): string

Перетворює GMP число в рядок у системі числення `base`. За замовчуванням
числа перетворюються на десятирічній системі числення.

### Список параметрів

`num`
GMP число для конвертації.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`base`
Система числення числа, що повертається. Типово - 10. Можливі
значення: від 2 до 62 та від -2 до -36.

### Значення, що повертаються

Число у вигляді рядка (string).

### Приклади

**Приклад #1 Перетворення GMP числа в рядок**

` <?php$a u003d gmp_init("0x41682179fbf5");printf("Десятичне: %s, 36-річне: %s", gmp_strval($a), gmp_strval($a,36));?> `
