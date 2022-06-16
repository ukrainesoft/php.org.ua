- [«db2_result](function.db2-result.md)
- [db2_server_info »](function.db2-server-info.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Відкочує транзакцію

#db2_rollback

(PECL ibm_db2 \>u003d 1.0.0)

db2_rollback - Відкочує транзакцію

### Опис

**db2_rollback**(resource `$connection`): bool

Відкочує поточну транзакцію на зазначеному з'єднанні та починає нову.
За замовчуванням, у PHP, використовується автопідтвердження транзакцій, так що
функція **db2_rollback()** потрібна лише у тому випадку, якщо ви
примусово відключили підтвердження транзакцій для з'єднання.

### Список параметрів

`connection`
Змінна, що містить активний ресурс підключення, отриманий за допомогою
[db2_connect()](function.db2-connect.md) або
[db2_pconnect()](function.db2-pconnect.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Відкат операції DELETE**

У наступному прикладі ми порахуємо кількість рядків у таблиці, відключимо
автопідтвердження транзакцій, видалимо всі рядки в таблиці та переконаємось,
що їх стало `0`. Після цього ми використовуємо функцію **db2_rollback()** та
перевіримо, що число рядків у таблиці стало таким самим, як і до видалення -
це підтвердить, що транзакція успішно відкотилася.

` <?php$conn u003d db2_connect($database, $user, $password);if ($conn) {   $stmt u003d db2_exec($conn, "SELECT count(*) FROM animals"); $res u003d db2_fetch_array( $stmt ); echo $res[0] . "
";    // Отключаем автоподтверждение    db2_autocommit($conn, DB2_AUTOCOMMIT_OFF);    // Удаляем все строки из ANIMALS    db2_exec($conn, "DELETE FROM animals");    $stmt u003d db2_exec($conn, "SELECT count(*) FROM animals" );    $res u003d db2_fetch_array( $stmt );   echo $res[0] . "
";    // Откатываем операцию DELETE    db2_rollback( $conn );    $stmt u003d db2_exec( $conn, "SELECT count(*) FROM animals" );    $res u003d db2_fetch_array( $stmt );    echo $res[0] . "
";   db2_close($conn);}?> `

Результат виконання цього прикладу:

7
    0
7

### Дивіться також

- [db2_autocommit()](function.db2-autocommit.md) - Повертає або
встановлює режим автопідтвердження транзакцій для з'єднання
- [db2_commit()](function.db2-commit.md) - Підтверджує транзакцію
