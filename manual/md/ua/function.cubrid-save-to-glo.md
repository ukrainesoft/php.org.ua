- [«cubrid_new_glo](function.cubrid-new-glo.md)
- [cubrid_send_glo »](function.cubrid-send-glo.md)

- [PHP Manual](index.md)
- [Застарілі псевдоніми та функції CUBRID](oldaliases.cubrid.md)
- Зберігає запитаний файл в екземплярі GLO

#cubrid_save_to_glo

(PECL CUBRID u003d 8.3.0)

cubrid_save_to_glo — Зберігає запитаний файл у примірнику GLO

### Опис

**cubrid_save_to_glo**(resource `$conn_identifier`, string `$oid`,
string `$file_name`): int

Функція **cubrid_save_to_glo()** використовується для збереження
запитаного файлу в екземплярі glo.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`oid`
Oid екземпляра glo у якому ви хочете зберегти файл.

`file_name`
Ім'я файлу.

### Значення, що повертаються

**`true`** у разі успішного виконання.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_save_to_glo()****

` <?php$req u003d cubrid_execute ($con, "select image from person where idu003d1");if ($req) {   list ($oid) u003d cubrid_fetch($req); cubrid_close_request($req); $res u003d cubrid_save_to_glo ($con, $oid, "input.jpg"); if ($res) {      echo "зображення змінено"; }}?> `

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **cubrid_save_to_glo()**

> **Примітка**:
>
> Функція видалена у CUBRID 3.1.

### Дивіться також

- [cubrid_new_glo()](function.cubrid-new-glo.md) - Створює екземпляр
glo
- [cubrid_load_from_glo()](function.cubrid-load-from-glo.md) -
Читає дані з екземпляра GLO та записує їх у файл
- [cubrid_send_glo()](function.cubrid-send-glo.md) - Читання даних
з glo і виведення їх у стандартний пристрій виводу
