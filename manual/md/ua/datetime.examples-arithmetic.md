- [« Приклади](datetime.examples.md)
- [DateTime »](class.datetime.md)

- [PHP Manual](index.md)
- [Приклади](datetime.examples.md)
- Арифметика дати/часу

## Арифметика дати/часу

У наступних прикладах показуються деякі підводні камені обчислень
дати/часу, щодо переходів на літній та зимовий час (DST), та
місяців, що мають різну кількість днів.

**Приклад #1 DateTimeImmutable::add/sub додає інтервали, що охоплюють
минулий час**

Додавання PT24H через перехід DST призведе до додавання 23/25 годин
(Більшість часових поясів).

` <?php$dt u003d new DateTimeImmutable("2015-11-01 00:00:00", new DateTimeZone("America/New_York"));echo "Початок: ","$dt->format i:s P"), PHP_EOL;$dt u003d $dt->add(new DateInterval("PT3H"));echo "Кінець:  ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;?> `

Результат виконання цього прикладу:

Початок: 2015-11-01 00:00:00 -04:00
Кінець: 2015-11-01 02:00:00 -05:00

**Приклад #2 DateTimeImmutable::modify та strtotime збільшить або зменшить
значення індивідуальних компонентів**

Додавання +24 годин через перехід DST додасть точно 24 години (замість
обліку переходу на зимовий або літній час).

` <?php$dt u003d new DateTimeImmutable("2015-11-01 00:00:00", new DateTimeZone("America/New_York"));echo "Початок: ","$dt->format i:s P"), PHP_EOL;$dt u003d $dt->modify("+24 hours");echo "Кінець:  ", $dt->format("Y-m-d H:i:s P"), PHP_EOL; ?> `

Результат виконання цього прикладу:

Початок: 2015-11-01 00:00:00 -04:00
Кінець: 2015-11-02 00:00:00 -05:00

**Приклад #3 Додавання або віднімання часу може зменшити або
збільшити дату**

Наприклад, 31 січня + 1 місяць поверне 2 березня (високосний рік) або 3
березня (звичайний рік).

`<?phpecho "Звичайний рік:
"; // У лютому 28 днів$dt u003d new DateTimeImmutable("2015-01-31 00:00:00", new DateTimeZone("America/New_York"); t>>t| "Y-m-d H:i:s P"), PHP_EOL;$dt u003d $dt->modify("+1 month");echo "Кінець:  ", $dt->format("Y-m-d H:i:s P" ), PHP_EOL;echo "Високосний рік:
"; // У лютому 29 днів$dt u003d new DateTimeImmutable("2016-01-31 00:00:00", new DateTimeZone("America/New_York");ech| "Y-m-d H:i:s P"), PHP_EOL;$dt u003d $dt->modify("+1 month");echo "Кінець:  ", $dt->format("Y-m-d H:i:s P" ), PHP_EOL;?> `

Результат виконання цього прикладу:

Звичайний рік:
Початок: 2015-01-31 00:00:00 -05:00
Кінець: 2015-03-03 00:00:00 -05:00
Високосний рік:
Початок: 2016-01-31 00:00:00 -05:00
Кінець: 2016-03-02 00:00:00 -05:00

Для отримання останнього дня наступного місяця (тобто щоб
запобігти переповненню) існує директива `last day of`.

`<?phpecho "Звичайний рік:
"; // Лютий містить 28 днів$dt u003d new DateTimeImmutable("2015-01-31 00:00:00", new DateTimeZone("America/New_York"),>t| "Y-m-d H:i:s P"), PHP_EOL;$dt u003d $dt->modify("last day of next month");echo "Кінець:  ", $dt->format("Y-m-d P"), PHP_EOL;echo "Високосний рік:
"; // Лютий містить 29 днів$dt u003d new DateTimeImmutable("2016-01-31 00:00:00", new DateTimeZone("America/New_York"))>ech| "Y-m-d H:i:s P"), PHP_EOL;$dt u003d $dt->modify("last day of next month");echo "Кінець:  ", $dt->format("Y-m-d P"), PHP_EOL;?> `

Результат виконання цього прикладу:

Звичайний рік:
Початок: 2015-01-31 00:00:00 -05:00
Кінець: 2015-02-28 00:00:00 -05:00
Високосний рік:
Початок: 2016-01-31 00:00:00 -05:00
Кінець: 2016-02-29 00:00:00 -05:00
