- [« cubrid_lob2_bind](function.cubrid-lob2-bind.md)
- [cubrid_lob2_export »](function.cubrid-lob2-export.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Закриває об'єкт LOB

# cubrid_lob2_close

(PECL CUBRID u003d 8.4.1)

cubrid_lob2_close — Закриває об'єкт LOB

### Опис

**cubrid_lob2_close**(resource `$lob_identifier`): bool

Функція **cubrid_lob2_close()** використовується для закриття об'єкта LOB,
поверненого функцією
[cubrid_lob2_new()](function.cubrid-lob2-new.md) або отриманого з
результуючого набору.

### Список параметрів

`lob_identifier`
Ідентифікатор LOB, повернутий функцією
[cubrid_lob2_new()](function.cubrid-lob2-new.md) або отриманий з
результуючого набору.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [cubrid_lob2_new()](function.cubrid-lob2-new.md) - Створює об'єкт
LOB
