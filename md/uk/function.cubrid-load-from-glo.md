- [« Застарілі псевдоніми та функції CUBRID](oldaliases.cubrid.md)
- [cubrid_new_glo »](function.cubrid-new-glo.md)

- [PHP Manual](index.md)
- [Застарілі псевдоніми та функції CUBRID](oldaliases.cubrid.md)
- Читає дані з екземпляра GLO та записує їх у файл

#cubrid_load_from_glo

(PECL CUBRID u003d 8.3.0)

cubrid_load_from_glo — Читає дані з екземпляра GLO і записує їх у
файл

### Опис

**cubrid_load_from_glo**(resource `$conn_identifier`, string `$oid`,
string `$file_name`): int

Функція **cubrid_load_from_glo()** використовується для читання даних з
екземпляра GLO та записи їх у заданий файл.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`oid`
Oid екземпляра glo з якого ви хочете прочитати дані.

`file_name`
Ім'я файлу.

### Значення, що повертаються

**`true`** у разі успішного виконання.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_load_from_glo()****

` <?php$req u003d cubrid_execute ($con, "select image from person where idu003d1");if ($req) {   list ($oid) u003d cubrid_fetch($req); cubrid_close_request($req); $res u003d cubrid_load_from_glo ($con, $oid, "output.jpg"); if ($res) {      echo "Картинка була змінена"; }}?> `

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **cubrid_load_from_glo()**

> **Примітка**:
>
> Функція видалена у CUBRID 3.1.

### Дивіться також

- [cubrid_new_glo()](function.cubrid-new-glo.md) - Створює екземпляр
glo
- [cubrid_save_to_glo()](function.cubrid-save-to-glo.md) - Зберігає
запитаний файл в екземплярі GLO
- [cubrid_send_glo()](function.cubrid-send-glo.md) - Читання даних
з glo і виведення їх у стандартний пристрій виводу
