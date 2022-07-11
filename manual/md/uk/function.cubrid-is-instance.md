- [«cubrid_insert_id](function.cubrid-insert-id.md)
- [cubrid_lob_close »](function.cubrid-lob-close.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Перевіряє, чи існує екземпляр, на який вказує OID

#cubrid_is_instance

(PECL CUBRID u003d 8.3.0)

cubrid_is_instance — Перевіряє, чи існує екземпляр, на який
вказує OID

### Опис

**cubrid_is_instance**(resource `$conn_identifier`, string `$oid`): int

Функція **cubrid_is_instance()** використовується, щоб перевірити,
чи існує екземпляр, який вказує даний `oid`, чи ні.

### Список параметрів

`conn_identifier`
Ідентифікатор підключення.

`oid`
OID екземпляра, існування якого потрібно перевірити.

### Значення, що повертаються

1, якщо такий екземпляр існує;

0, якщо такого примірника не існує;

-1 у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_is_instance()****

`<?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$sql u003d <<<EODSELECT host_year, medal, game_dateFROM gameWHERE athlete_code IN     ;$req u003d cubrid_execute($conn, $sql, CUBRID_INCLUDE_OID);$oid u003d cubrid_current_oid($req);$res u003d cubrid_is_instance ($conn, $oid);if | який вказує $oid, існує.
";} else if ($res u003du003d 0){    echo "Примірник, на котрий вказує $oid, не існує.
";} else {    echo "Помилка
";}cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

Примірник, який вказує @0|0|0, немає.

### Дивіться також

- [cubrid_drop()](function.cubrid-drop.md) - Видалення екземпляра за
OID
- [cubrid_get_class_name()](function.cubrid-get-class-name.md) -
Отримує ім'я класу за допомогою OID
