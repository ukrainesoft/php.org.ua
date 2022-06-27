- [«oci_result](function.oci-result.md)
- [oci_server_version »](function.oci-server-version.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Відкочує транзакції, що очікують на обробку

#oci_rollback

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_rollback - Відкочує транзакції, що очікують обробки

### Опис

**oci_rollback**(resource `$connection`): bool

Ця функція відкочує всі незафіксовані зміни з'єднання
Oracle `connection` і завершує транзакцію. Вона також звільняє все
встановлені блокування. Видаляються всі Oracle `SAVEPOINTS`.

Транзакція починається при першому SQL-запиті, який змінює дані, який
був запущений за допомогою функції [oci_execute()](function.oci-execute.md)
та прапора **`OCI_NO_AUTO_COMMIT`**. Наступні зміни даних від інших
запити також стають частиною цієї транзакції. Зміни, зроблені
у транзакції, є тимчасовими доти, доки транзакція не буде
зафіксовано або буде здійснено її відкат. Інші користувачі бази
даних не зможуть побачити зміни до їхньої фіксації.

При вставці або оновленні даних рекомендується використовувати транзакції
для збереження цілісності даних та збільшення продуктивності.

### Список параметрів

`connection`
Ідентифікатор з'єднання Oracle, отриманий із функцій
[oci_connect()](function.oci-connect.md),
[oci_pconnect()](function.oci-pconnect.md) або
[oci_new_connect()](function.oci-new-connect.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **oci_rollback()****

`<?php// Вставка в кілька таблиць, відкат змін в випадку виникнення помилки$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');$stid u003d id, name) VALUES (1, 'Chris')");// Прапор OCI_NO_AUTO_COMMIT повідомляє Oracle не фіксувати запит INSERT при його надходженні// Для і_HP| stid, OCI_NO_AUTO_COMMIT);if (!$r) {    $e u003d oci_error($stid); trigger_error(htmlentities($e['message']), E_USER_ERROR);}$stid u003d oci_parse($conn, 'INSERT INTO myschedule (startday) VALUES (12)')_O; if (!$r) {    $e u003d oci_error($stid); oci_rollback($conn); // відкат змін із двох таблиць    trigger_error(htmlentities($e['message']), E_USER_ERROR);}// Фіксація змін в   ¦                      Ях ($ Conn); trigger_error(htmlentities($e['message']), E_USER_ERROR);}?> `

**Приклад #2 Приклад використання відкату до `SAVEPOINT`**

` <?php$stid u003d oci_parse($conn, 'UPDATE mytab SET id u003d 1111');oci_execute($stid, OCI_NO_AUTO_COMMIT);// Створюємо точку збереження$stid ' ($stid, OCI_NO_AUTO_COMMIT);$stid u003d oci_parse($conn, 'UPDATE mytab SET id u003d 2222');oci_execute($stid, OCI_NO_AUTO_COMMIT); $conn, 'ROLLBACK TO SAVEPOINT mysavepoint');oci_execute($stid, OCI_NO_AUTO_COMMIT);oci_commit($conn); // mytab тепер містить id рівні 1111?> `

### Примітки

> **Примітка**:
>
> Транзакції будуть автоматично відкачені під час закриття з'єднання або
> закінчення скрипта (залежно від того, що станеться раніше). Для
> фіксації транзакції необхідно явно викликати функцію
> [oci_commit()](function.oci-commit.md).
>
> Всі виклики [oci_execute()](function.oci-execute.md), явно або через
> за замовчуванням, що використовують режим **`OCI_COMMIT_ON_SUCCESS`** зафіксують
> будь-яку попередню незафіксовану транзакцію.
>
> Будь-який DDL-запит Oracle, такий як `CREATE` або `DROP` автоматично
> фіксує будь-яку незафіксовану транзакцію.

### Дивіться також

- [oci_commit()](function.oci-commit.md) - Підтверджує транзакцію
бази даних
- [oci_execute()](function.oci-execute.md) - Виконує
підготовлений вираз
