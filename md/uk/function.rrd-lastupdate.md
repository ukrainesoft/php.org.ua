- [«rrd_last](function.rrd-last.md)
- [rrd_restore »](function.rrd-restore.md)

- [PHP Manual](index.md)
- [Функції RRD](ref.rrd.md)
- Отримує інформацію про останні оновлені дані

#rrd_lastupdate

(PECL rrd \>u003d 0.9.0)

rrd_lastupdate — Отримує інформацію про останні оновлені дані

### Опис

**rrd_lastupdate**(string `$filename`): array

Повертає масив позначки часу UNIX та значення, збережені для
кожної дати в останній оновлення файлу бази даних RRD.

### Список параметрів

`file`
Назва файлу бази даних RRD.

### Значення, що повертаються

Масив інформації про останнє оновлення або **`false`** у разі
виникнення помилки.
