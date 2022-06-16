- [« mysqli::autocommit](mysqli.autocommit.md)
- [mysqli::change_user »](mysqli.change-user.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Стартує транзакцію

# mysqli::begin_transaction

# mysqli_begin_transaction

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

mysqli::begin_transaction -- mysqli_begin_transaction -- Стартує
транзакцію

### Опис

Об'єктно-орієнтований стиль

public **mysqli::begin_transaction**(int `$flags` u003d 0, ?string `$name` u003d
**`null`**): bool

Процедурний стиль:

**mysqli_begin_transaction**([mysqli](class.mysqli.md) `$mysql`, int
`$flags` u003d 0, ?string `$name` u003d **`null`**): bool

Стартує транзакцію. Потрібно InnoDB (дозволено за замовчуванням). Для
додаткову інформацію, як працюють транзакції в MySQL, читайте
[»http://dev.mysql.com/doc/mysql/en/commit.md](http://dev.mysql.com/doc/mysql/en/commit.md).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`flags`
Коректні прапори:

- **`MYSQLI_TRANS_START_READ_ONLY`**: Стартувати транзакцію як "START
TRANSACTION READ ONLY". Потрібен MySQL 5.6 або вище.

- **`MYSQLI_TRANS_START_READ_WRITE`**: Стартувати транзакцію як
"START TRANSACTION READ WRITE". Потрібний MySQL 5.6 або вище.

- **`MYSQLI_TRANS_START_WITH_CONSISTENT_SNAPSHOT`**: Стартувати
транзакцію як "START TRANSACTION WITH CONSISTENT SNAPSHOT".

`name`
Крапка збереження транзакції.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- |
| 8.0.0 | `name` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **mysqli::begin_transaction()****

Об'єктно-орієнтований стиль

` <?php/* Вказати mysqli викидати виняток в випадки виникнення помилки */mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$my_ должен поддерживать транзакции */$mysqli->query("CREATE TABLE IF NOT EXISTS language (    Code text NOT NULL,    Speakers int(11) NOT NULL    ) ENGINEu003dInnoDB DEFAULT CHARSETu003dutf8mb4;");/* Начало транзакции */$ mysqli->begin_transaction();try {    /* Додавання будь-яких значень */    $mysqli->query("INSERT INTO language(Code, Speakers) VALUES 0''2 /* Спроба додати неприпустимі значення */    $language_code u003d 'FR'; $native_speakersu003du003d'Unknown'; $stmtu003du003d$mysqli->prepare('INSERT INTO language(Code, Speakers) VALUES (?,?)'); $stmt->bind_param('ss', $language_code, $native_speakers); $stmt->execute(); /* Якщо код досягає цієї точки без помилок, фіксуємо дані в базі даних. */   $mysqli->commit();} catch (mysqli_sql_exception $exception) {    $mysqli->rollback(); throw $exception;} `

Процедурний стиль

`<?php/* Вказати mysqli викидати виняток в випадку виникнення помилки */mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysql| поддерживать транзакции */mysqli_query($mysqli, "CREATE TABLE IF NOT EXISTS language (    Code text NOT NULL,    Speakers int(11) NOT NULL    ) ENGINEu003dInnoDB DEFAULT CHARSETu003dutf8mb4;");/* Начало транзакции */mysqli_begin_transaction($ mysqli ); /* Спроба додати неприпустимі значення */    $language_code u003d 'FR'; $native_speakersu003du003d'Unknown'; $stmtu003du003dmysqli_prepare($mysqli, 'INSERT INTO language(Code, Speakers) VALUES (?,?)'); mysqli_stmt_bind_param($stmt, ss',$language_code,$native_speakers); mysqli_stmt_execute($stmt); /* Якщо код досягає цієї точки без помилок, фіксуємо дані в базі даних. */   mysqli_commit($mysqli);} catch (mysqli_sql_exception $exception) {    mysqli_rollback($mysqli); throw $exception;} `

### Примітки

> **Примітка**:
>
> Функція не працює з нетранзакційними типами таблиць (такими як
> MyISAM або ISAM).

### Дивіться також

- [mysqli_autocommit()](mysqli.autocommit.md) - Включає або
відключає автоматичну фіксацію змін бази даних
- [mysqli_commit()](mysqli.commit.md) - Фіксує поточну транзакцію
- [mysqli_rollback()](mysqli.rollback.md) - Відкат поточної транзакції
