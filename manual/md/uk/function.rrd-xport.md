- [«rrd_version](function.rrd-version.md)
- [rrdc_disconnect »](function.rrdc-disconnect.md)

- [PHP Manual](index.md)
- [Функції RRD](ref.rrd.md)
- Експортує інформацію про базу даних RRD

#rrd_xport

(PECL rrd \>u003d 0.9.0)

rrd_xport — Експортує інформацію про базу даних RRD

### Опис

**rrd_xport**(array `$options`): array

Експортує інформацію про файл бази даних RRD. Дані можуть бути
перетворені на XML-файл за допомогою користувача PHP-скрипту, а
потім відновлено як файл бази даних RRD.

### Список параметрів

`options`
Масив опцій для експорту дивіться сторінку посібника з rrd xport.

### Значення, що повертаються

Масив з інформацією про файл бази даних RRD або **`false`** у разі
виникнення помилки.
