- [« cubrid_load_from_glo](function.cubrid-load-from-glo.md)
- [cubrid_save_to_glo »](function.cubrid-save-to-glo.md)

- [PHP Manual](index.md)
- [Застарілі псевдоніми та функції CUBRID](oldaliases.cubrid.md)
- Створює екземпляр glo

#cubrid_new_glo

(PECL CUBRID u003d 8.3.0)

cubrid_new_glo — Створює екземпляр glo

### Опис

**cubrid_new_glo**(resource `$conn_identifier`, string `$class_name`,
string `$file_name`): string

Функція **cubrid_new_glo()** використовується для створення екземпляра glo в
запитаний клас (glo клас). Glo створюється типу LO, і зберігається в
файлі `file_name`.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`class_name`
Ім'я класу, де ви збираєтеся створити glo.

`file_name`
Ім'я файлу.

### Значення, що повертаються

Oid створеного екземпляра у разі успішного виконання.

**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_new_glo()****

` <?php$oid u003d cubrid_new_glo ($con, "glo", "input.jpg");if ($oid){   // тип "image" – "object"   $req u003d cubrid_exe person(image) values($oid)"); if ($req) {      echo "картинка була оновлена"; cubrid_close_request ($ req); cubrid_commit($con); }}?> `

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **cubrid_new_glo()**

> **Примітка**:
>
> Функція видалена у CUBRID 3.1.

### Дивіться також

- [cubrid_save_to_glo()](function.cubrid-save-to-glo.md) - Зберігає
запитаний файл в екземплярі GLO
- [cubrid_load_from_glo()](function.cubrid-load-from-glo.md) -
Читає дані з екземпляра GLO та записує їх у файл
- [cubrid_send_glo()](function.cubrid-send-glo.md) - Читання даних
з glo і виведення їх у стандартний пристрій виводу
