- [«cubrid_data_seek](function.cubrid-data-seek.md)
- [cubrid_errno»] (function.cubrid-errno.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Отримання імені бази даних із результату cubrid_list_dbs

# cubrid_db_name

(PECL CUBRID u003d 8.3.1)

cubrid_db_name — Отримання імені бази даних із результату
cubrid_list_dbs

### Опис

**cubrid_db_name**(array `$result`, int `$index`): string

Виймає ім'я бази даних із результату виклику
[cubrid_list_dbs()](function.cubrid-list-dbs.md).

### Список параметрів

`result`
Вказівник на результат виклику
[cubrid_list_dbs()](function.cubrid-list-dbs.md).

`index`
Індекс у результативному наборі.

### Значення, що повертаються

Повертає ім'я бази даних у разі успішного виконання або **`false`**
у разі виникнення помилки. Якщо повернулося **`false`**, використовуйте
[cubrid_error()](function.cubrid-error.md) для точного визначення
помилки, що відбулася.

### Приклади

**Приклад #1 Приклад використання **cubrid_db_name()****

` <?phperror_reporting(E_ALL);$connu003du003dcubrid_connect('localhost', 33000, 'demodb', 'dba', '');$db_list u003d cubrid_list_dbs($conn);$i u003d 0; $db_list);while($i < $cnt) {    echo cubrid_db_name($db_list, $i) . "
";   $i++;}?> `

Результат виконання цього прикладу:

demodb

### Дивіться також

- [cubrid_list_dbs()](function.cubrid-list-dbs.md) - Отримати масив
зі списком усіх баз даних CUBRID
