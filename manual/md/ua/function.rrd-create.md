- [« Функції RRD](ref.rrd.md)
- [rrd_error »](function.rrd-error.md)

- [PHP Manual](index.md)
- [Функції RRD](ref.rrd.md)
- Створити файл rrd

#rrd_create

(PECL rrd \>u003d 0.9.0)

rrd_create — Створити файл rrd

### Опис

**rrd_create**(string `$filename`, array `$options`): bool

Створює файл rrd.

### Список параметрів

`filename`
Ім'я файлу, що створюється.

`options`
Опції для створення rrd – список рядків. Дивіться сторінку керівництва rrd
для повного переліку.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
