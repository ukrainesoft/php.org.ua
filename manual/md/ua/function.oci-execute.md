- [«oci_error](function.oci-error.md)
- [oci_fetch_all »](function.oci-fetch-all.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Виконує підготовлений вираз

#oci_execute

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_execute — Виконує підготовлений вираз

### Опис

**oci_execute**(resource `$statement`, int `$mode` u003d
**`OCI_COMMIT_ON_SUCCESS`**): bool

Виконує підготовлений вираз `statement`, створений за допомогою
функції [oci_parse()](function.oci-parse.md).

Відразу після виконання виразу подібного `INSERT`, за замовчуванням все
дані одразу будуть збережені в базі даних. Для виразів подібних
`SELECT`, виконується лише логіка запиту. Результат запиту можна
отримати пізніше в PHP за допомогою подібних функцій
[oci_fetch_array()](function.oci-fetch-array.md).

Кожен підготовлений вираз може бути виконано кілька разів
економії витратах від повторної підготовки запита. Це найчастіше
застосовується для висловів INSERT, коли до них прив'язані дані з
за допомогою [oci_bind_by_name()](function.oci-bind-by-name.md).

### Список параметрів

`statement`
Правильне підготовлене вираження OCI.

`mode`
Необов'язковий другий параметр з одним із наступних значень:

| Константа Опис |
|-----------------------------|------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------|
| **`OCI_COMMIT_ON_SUCCESS`** | Автоматично зберігати всі незбережені зміни, проведені за поточну сесію у разі успішного виконання виразу. Цей режим встановлено за замовчуванням. |
| **`OCI_DESCRIBE_ONLY`** | Робить доступними метадані запиту для функцій подібних до [oci_field_name()](function.oci-field-name.md), але не створює результат виконання виразу. Будь-яке подальше отримання даних, наприклад, за допомогою [oci_fetch_array()](function.oci-fetch-array.md) не буде зроблено. |
| **`OCI_NO_AUTO_COMMIT`** | Не зберігати автоматично зміни. Для PHP 5.3.2 (PECL OCI8 1.4) використовуйте **`OCI_DEFAULT`**, яка є еквівалентом для **`OCI_NO_AUTO_COMMIT`**. |

**Режим виконання**

Використання режиму **`OCI_NO_AUTO_COMMIT`** відкриває або продовжує
транзакцію. Ця транзакція автоматично відкочується під час закриття
з'єднання або завершення скрипта. Використовуйте
[oci_commit()](function.oci-commit.md) для завершення транзакції та
[oci_rollback()](function.oci-rollback.md) для її скасування.

При вставці та оновленні даних рекомендується використання транзакцій
для реляційної цілісності даних та поліпшення продуктивності.

Якщо для якогось виразу використовується режим
**`OCI_NO_AUTO_COMMIT`**, і згодом не використовуються
[oci_commit()](function.oci-commit.md) або
[oci_rollback()](function.oci-rollback.md), то OCI8 виконуватиме
відкат при завершенні скрипту, навіть якщо дані не були змінені. Для
уникнення непотрібних відкатів більшість скриптів не використовують режим
**`OCI_NO_AUTO_COMMIT`** для запитів або PL/SQL. Будьте уважні,
щоб забезпечити належну узгодженість транзакцій під час використання
**oci_execute()** з різними режимами в одному скрипті.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 **oci_execute()** під час виконання запитів**

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');$stid u003d oci_parse($conn, 'SELECT * FROM employees');oci_execute($stid);echo "" borderu003d'1'>
";while ($row u003d oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {   echo ""<tr>
";   foreach ($row as $item) {        echo "    <td>" . ($item !u003du003d null ? htmlentities($item, >| >)
";    }    echo "</tr>
";}echo "</table>
";?> `

**Приклад #2 **oci_execute()** без вказівки певного режиму**

`<?php// Перед виконанням створіть таблицю://   CREATE TABLE MYTABLE (col1 NUMBER);$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');$sti INSERT INTO mytab (col1) VALUES (123)');oci_execute($stid); // Рядок збережена і становиться видимою для інших користувачів?> `

**Приклад #3 **oci_execute()** з **`OCI_NO_AUTO_COMMIT`****

` <?php// Перед виконанням створіть таблицю://   CREATE TABLE MYTABLE (col1 NUMBER);$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');$sti INSERT INTO mytab (col1) VALUES (:bv)');oci_bind_by_name($stid, ':bv', $i, 10);for ($i u003d 1; $i <u003d 5; ++$i)  ($stid, OCI_NO_AUTO_COMMIT); // use OCI_DEFAULT for PHP <u003d 5.3.1}oci_commit($conn); // збереження все нових значень: 1, 2, 3, 4, 5?> `

**Приклад #4 **oci_execute()** з різними режимами**

`<?php// Перед виконанням створіть таблицю://   CREATE TABLE MYTABLE (col1 NUMBER);$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');$sti INSERT INTO mytab (col1) VALUES (123)');oci_execute($stid, OCI_NO_AUTO_COMMIT); // data not committed$stid u003d oci_parse($conn, 'INSERT INTO mytab (col1) VALUES (456)');oci_execute($stid); // commits both 123 and 456 values?> `

**Приклад #5 **oci_execute()** з **`OCI_DESCRIBE_ONLY`****

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');$stid u003d oci_parse($conn, 'SELECT * FROM locations');oci_execute($s, OCI_DESCRIBE| $i u003d 1; $i <u003d oci_num_fields($stid); ++$i) {    echo oci_field_name($stid, $i) . "<br>
";}?> `

### Примітки

> **Примітка**:
>
> Транзакції автоматично відкочуються під час закриття з'єднання або
> завершення виконання скрипта. Примусово викликайте
> [oci_commit()](function.oci-commit.md) для завершення операції.
>
> Будь-який виклик **oci_execute()**, який примусово використовує
> **`OCI_COMMIT_ON_SUCCESS`** або за замовчуванням буде завершувати будь-яку
> попередню незакриту транзакцію.
>
> Будь-який вираз Oracle DDL подібний до `CREATE` або `DROP` буде
> автоматично завершувати будь-яку. незакриту транзакцію.

> **Примітка**:
>
> Оскільки функція **oci_execute()** зазвичай надсилає вирази до бази
> даних, то **oci_execute()** може знайти деякі незначні
> синтаксичні помилки, коли локальна
> [oci_parse()](function.oci-parse.md) їх не знаходить.

### Дивіться також

- [oci_parse()](function.oci-parse.md) - Підготовка запиту до
виконанню
