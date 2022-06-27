- [«cubrid_lob_send](function.cubrid-lob-send.md)
- [cubrid_lob2_bind »](function.cubrid-lob2-bind.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримує розмір даних BLOB/CLOB

#cubrid_lob_size

(PECL CUBRID u003d 8.3.1)

cubrid_lob_size — Отримує розмір даних BLOB/CLOB

### Опис

**cubrid_lob_size**(resource `$lob_identifier`): string

**cubrid_lob_size()** використовується для отримання розміру даних
BLOB/CLOB.

### Список параметрів

`lob_identifier`
Ідентифікатор LOB.

### Значення, що повертаються

Рядок, що представляє розмір LOB-даних у разі успішного виконання
процесу, або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------|
| 8.4.0 | Тип значення, що повертається, змінений з int на string. |

### Приклади

**Приклад #1 Приклад використання **cubrid_lob_size()****

` <?php$lobs u003d cubrid_lob_get($con, "SELECT doc_content FROM doc WHERE doc_idu003d5");echo "Розмір документу:".cubrid_lob_size($lobs[0]);cubr , "doc_5.txt");cubrid_lob_close($lobs);?> `

### Дивіться також

- [cubrid_lob_get()](function.cubrid-lob-get.md) - Отримує дані
BLOB/CLOB
- [cubrid_lob_close()](function.cubrid-lob-close.md) - Закриває
дані BLOB/CLOB
- [cubrid_lob_export()](function.cubrid-lob-export.md) -
Експортує дані BLOB/CLOB у файл
- [cubrid_lob_send()](function.cubrid-lob-send.md) - Читає дані
BLOB/CLOB та відправляє їх прямо до браузера
