- [«cubrid_get](function.cubrid-get.md)
- [cubrid_is_instance »](function.cubrid-is-instance.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Повертає ідентифікатор, згенерований для останнього
оновленого стовпця AUTO_INCREMENT

#cubrid_insert_id

(PECL CUBRID u003d 8.3.0)

cubrid_insert_id — Повертає ідентифікатор, згенерований для
останнього оновленого стовпця **`AUTO_INCREMENT`**

### Опис

**cubrid_insert_id**(resource `$conn_identifier` u003d ?): string

Функція **cubrid_insert_id()** повертає ідентифікатор згенерований
для стовпця AUTO_INCREMENT, що оновлюється попереднім запитом
INSERT. Вона повертає 0, якщо попередній запит не генерує нові
рядки, або FALSE у разі виникнення помилки.

> **Примітка**:
>
> CUBRID підтримує AUTO_INCREMENT для більш ніж одного стовпця в
> таблиці. Найчастіше в таблиці буде один стовпець
> AUTO_INCREMENT. Якщо є кілька стовпців AUTO_INCREMENT, дану
> Не слід використовувати функцію, навіть якщо вона поверне значення.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання, отриманий раніше під час дзвінка
[cubrid_connect()](function.cubrid-connect.md).

### Значення, що повертаються

Рядок, що представляє ідентифікатор, згенерований для стовпця
AUTO_INCREMENT попередній запит у разі успішного виконання.

0 якщо попередній запит не згенерував нові рядки.

**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---|
| 8.4.0 | Повертається значення як масиву замінено на рядок; Видалено перший параметр class_name. |

### Приклади

**Приклад #1 Приклад використання **cubrid_insert_id()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");@cubrid_execute($conn, "DROP TABLE cubrid_test");cubrid_execute($conn, "CREATE TABLE   ), t varchar)");for ($i u003d 0; $i < 10; $i++) {   cubrid_execute($conn, "INSERT INTO cubrid_test(t) VALUES('cud) ();var_dump($id);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

string(2) "19"
