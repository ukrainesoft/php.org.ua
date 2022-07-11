- [« cubrid_save_to_glo](function.cubrid-save-to-glo.md)
- [dBase »](book.dbase.md)

- [PHP Manual](index.md)
- [Застарілі псевдоніми та функції CUBRID](oldaliases.cubrid.md)
- Читання даних з glo та виведення їх у стандартний пристрій виведення

#cubrid_send_glo

(PECL CUBRID u003d 8.3.0)

cubrid_send_glo — Читання даних з glo та виведення їх у стандартне
пристрій виводу

### Опис

**cubrid_send_glo**(resource `$conn_identifier`, string `$oid`): int

Функція **cubrid_send_glo()** використовується для читання даних із glo і
виведення їх у стандартний пристрій виведення PHP.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`oid`
Oid екземпляра glo з якого ви хочете прочитати дані.

### Значення, що повертаються

**`true`** у разі успішного виконання.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_send_glo()****

`<?php$req u003d cubrid_execute ($con, "select image from person where id u003d1");if ($req) { list|($oid) u003d cubrid_fetch($req); cubrid_close_request($req); Header("Content-type:image/jpeg"); cubrid_send_glo ($con, $oid);}?> `

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **cubrid_send_glo()**

> **Примітка**:
>
> Функція видалена у CUBRID 3.1.

### Дивіться також

- [cubrid_new_glo()](function.cubrid-new-glo.md) - Створює екземпляр
glo
- [cubrid_save_to_glo()](function.cubrid-save-to-glo.md) - Зберігає
запитаний файл в екземплярі GLO
- [cubrid_load_from_glo()](function.cubrid-load-from-glo.md) -
Читає дані з екземпляра GLO та записує їх у файл
