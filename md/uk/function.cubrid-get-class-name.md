- [«cubrid_get_charset](function.cubrid-get-charset.md)
- [cubrid_get_client_info »](function.cubrid-get-client-info.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримує ім'я класу за допомогою OID

# cubrid_get_class_name

(PECL CUBRID u003d 8.3.0)

cubrid_get_class_name — Отримує ім'я класу за допомогою OID

### Опис

**cubrid_get_class_name**(resource `$conn_identifier`, string `$oid`):
string

Функція **cubrid_get_class_name()** використовується для отримання імені
класу з параметра `oid`. Не працює при виборі даних із системних
таблиць, наприклад db_class.

### Список параметрів

`conn_identifier`
Ідентифікатор підключення.

`oid`
OID екземпляра, існування якого необхідно перевірити.

### Значення, що повертаються

Ім'я класу при успішному завершенні процесу або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_get_class_name()****

` <?php$connu003du003dcubrid_connect("localhost", 33000, "demodb", "dba");$req u003d cubrid_execute($conn, "SELECT **FROM code", CUBRID_INCLU ;$class_name u003d cubrid_get_class_name($conn, $oid);print_r($class_name);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

code

### Дивіться також

- [cubrid_is_instance()](function.cubrid-is-instance.md) -
Перевіряє, чи існує екземпляр, на який вказує OID
- [cubrid_drop()](function.cubrid-drop.md) - Видалення екземпляра за
OID
