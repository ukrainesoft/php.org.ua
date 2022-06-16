- [«oci_close](function.oci-close.md)
- [oci_connect »](function.oci-connect.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- підтверджує транзакцію бази даних

#oci_commit

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_commit — Підтверджує транзакцію бази даних

### Опис

**oci_commit**(resource `$connection`): bool

Підтверджує транзакцію з'єднання `connection`. Підтвердження завершує
поточну транзакцію та робить усі зміни постійними. Вона також
звільняє всі встановлені блокування.

Транзакція починається при першому SQL-запиті, який змінює дані, який
був запущений за допомогою функції [oci_execute()](function.oci-execute.md)
та прапора **`OCI_NO_AUTO_COMMIT`**. Наступні зміни даних від інших
запити також стають частиною цієї транзакції. Зміни, зроблені
у транзакції, є тимчасовими доти, доки транзакція не буде
зафіксована або поки не буде здійснено її відкат. Інші користувачі
бази даних не зможуть побачити зміни до їх підтвердження.

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

**Приклад #1 Приклад використання **oci_commit()****

`<?php// Вставка в кілька таблиць, відкат змін в випадку виникнення помилки$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');$stid u003d id, name) VALUES (1, 'Chris')");// Прапор OCI_NO_AUTO_COMMIT повідомляє Oracle не фіксувати запит INSERT при його надходженні// Для і_HP| stid, OCI_NO_AUTO_COMMIT);if (!$r) {    $e u003d oci_error($stid); trigger_error(htmlentities($e['message']), E_USER_ERROR);}$stid u003d oci_parse($conn, 'INSERT INTO myschedule (startday) VALUES (12)')_O; if (!$r) {    $e u003d oci_error($stid); oci_rollback($conn); // відкат змін із двох таблиць    trigger_error(htmlentities($e['message']), E_USER_ERROR);}// Фіксація змін в  обох таблицях$r $        oci_error($conn); trigger_error(htmlentities($e['message']), E_USER_ERROR);}?> `

### Примітки

> **Примітка**:
>
> Транзакції будуть автоматично відкачені під час закриття з'єднання або
> закінчення скрипта (залежно від того, що станеться раніше). Для
> підтвердження транзакції необхідно явно викликати функцію
> **oci_commit()**.
>
> Всі виклики [oci_execute()](function.oci-execute.md), явно або через
> за замовчуванням, що використовують режим **`OCI_COMMIT_ON_SUCCESS`** зафіксують
> будь-яку попередню незафіксовану транзакцію.
>
> Будь-який DDL-запит Oracle, такий як `CREATE` або `DROP` автоматично
> підтверджує будь-яку незавершену транзакцію.

### Дивіться також

- [oci_execute()](function.oci-execute.md) - Виконує
підготовлений вираз
- [oci_rollback()](function.oci-rollback.md) - Відкочує
транзакції, що очікують на обробку
