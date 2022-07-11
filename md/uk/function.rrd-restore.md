- [«rrd_lastupdate](function.rrd-lastupdate.md)
- [rrd_tune »](function.rrd-tune.md)

- [PHP Manual](index.md)
- [Функції RRD](ref.rrd.md)
- Відновлює файл RRD із дампа XML

#rrd_restore

(PECL rrd \>u003d 0.9.0)

rrd_restore — Відновлює файл RRD із дампа XML

### Опис

**rrd_restore**(string `$xml_file`, string `$rrd_file`, array `$options`
u003d?): bool

Відновлює файл RRD із дампа XML.

### Список параметрів

`xml_file`
Ім'я файлу XML із дампом вихідного файлу бази даних RRD.

`rrd_file`
Відновлена назва файлу бази даних RRD.

`options`
Масив опцій для відновлення. Дивіться сторінку посібника з rrd
restore.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
