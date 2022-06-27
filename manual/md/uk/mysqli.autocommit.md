- [« mysqli::$affected_rows](mysqli.affected-rows.md)
- [mysqli::begin_transaction »](mysqli.begin-transaction.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Вмикає або вимикає автоматичну фіксацію змін бази даних

# mysqli::autocommit

# mysqli_autocommit

(PHP 5, PHP 7, PHP 8)

mysqli::autocommit -- mysqli_autocommit — Включає або вимикає
автоматичну фіксацію змін бази даних

### Опис

Об'єктно-орієнтований стиль

public **mysqli::autocommit**(bool `$enable`): bool

Процедурний стиль

**mysqli_autocommit**([mysqli](class.mysqli.md) `$mysql`, bool
`$enable`): bool

Вмикає або вимикає режим автоматичної фіксації змін для
з'єднання з базою даних

Щоб визначити поточний стан режиму, використовуйте команду SQL
`SELECT @@autocommit`.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`enable`
Вмикає або вимикає режим автоматичної фіксації змін.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli::autocommit()****

Об'єктно-орієнтований стиль

` <?php/* Вказати mysqli викидати виняток в випадки виникнення помилки */mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$my_ должен поддерживать транзакции */$mysqli->query("CREATE TABLE IF NOT EXISTS language (    Code text NOT NULL,    Speakers int(11) NOT NULL    ) ENGINEu003dInnoDB DEFAULT CHARSETu003dutf8mb4;");/* Отключить автоматическую фиксацию */ $mysqli->autocommit(false);$resultu003du003d$mysqli->query("SELECT @@autocommit");$row u003d $result->fetch_row();printf("Автоматична фіксація: %s
", $row[0]);try {|    /* Підготувати вираз для додавання */    $stmt u003d $mysqli->prepare('INSERT INTO VALUE(Code, Speakers)  | bind_param('ss', $language_code, $native_speakers);    /* Добавление каких-то значений */    $language_code u003d 'DE';    $native_speakers u003d 50_123_456;    $stmt->execute();    $language_code u003d 'FR';    $ native_speakers u003d 40_546_321;    $stmt->execute();    /* Зафиксируйте данные в базе данных. Это не устанавливает autocommitu003dtrue */    $mysqli->commit();    print "Зафиксировано 2 строки в базе данных
";   $result u003d $mysqli->query("SELECT @@autocommit");   $row u003d $result->fetch_row();    printf("Автоматична фіксація: %s
", $row[0]);    /* Попробуйте вставить больше значений */    $language_code u003d 'PL';    $native_speakers u003d 30_555_444;    $stmt->execute();    $language_code u003d 'DK';    $native_speakers u003d 5_222_444;    $ stmt->execute();    /* Установка autocommitu003dtrue викличе фіксацію */    $mysqli->autocommit(true);    print "Зафіксовано 2 рядки в 
";} catch (mysqli_sql_exception $exception) {   $mysqli->rollback();   throw $exception;} `

Процедурний стиль

` <?php/* Вказати mysqli викидати виняток в випадку виникнення помилки */mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysql| поддерживать транзакции */mysqli_query($mysqli, "CREATE TABLE IF NOT EXISTS language (    Code text NOT NULL,    Speakers int(11) NOT NULL    ) ENGINEu003dInnoDB DEFAULT CHARSETu003dutf8mb4;");/* Отключить автоматическую фиксацию */mysqli_autocommit( $mysqli, false);$result u003d mysqli_query($mysqli, "SELECT @@autocommit");$row u003d mysqli_fetch_row($result);printf("Автоматична фіксація: %s
", $row[0]);try {|    /* Підготувати вираз для додавання */    $stmt u003d mysqli_prepare($mysqli, 'INSERT INTO language(Code, m)|| 'ss', $language_code, $native_speakers);    /* Добавление каких-то значений */    $language_code u003d 'DE';    $native_speakers u003d 50_123_456;    mysqli_stmt_execute($stmt);    $language_code u003d 'FR';    $native_speakers u003d 40_546_321; mysqli_stmt_execute($stmt);    /* Зафіксуйте дані в базі даних. Це не встановлює autocommitu003dtrue */    mysqli_commit($mysqli);  
";   $result u003d mysqli_query($mysqli, "SELECT @@autocommit");   $row u003d mysqli_fetch_row($result);    printf("Автоматична фіксація: s
", $row[0]);    /* Попробуйте вставить больше значений */    $language_code u003d 'PL';    $native_speakers u003d 30_555_444;    mysqli_stmt_execute($stmt);    $language_code u003d 'DK';    $native_speakers u003d 5_222_444;    mysqli_stmt_execute($ stmt);    /* Установка autocommitu003dtrue викличе фіксацію */   mysqli_autocommit($mysqli, true);    print "Зафіксовано 2 рядки в 
";} catch (mysqli_sql_exception $exception) {   mysqli_rollback($mysqli);   throw $exception;} `

Результат виконання даних прикладів:

Автоматична фіксація: 0
Зафіксовано 2 рядки у базі даних
Автоматична фіксація: 0
Зафіксовано 2 рядки у базі даних
Автоматична фіксація: 0
Зафіксовано 2 рядки у базі даних
Автоматична фіксація: 0
Зафіксовано 2 рядки у базі даних

### Примітки

> **Примітка**:
>
> Функція не працює з нетранзакційними типами таблиць (такими як
> MyISAM або ISAM).

### Дивіться також

- [mysqli_begin_transaction()](mysqli.begin-transaction.md) -
Стартує транзакцію
- [mysqli_commit()](mysqli.commit.md) - Фіксує поточну транзакцію
- [mysqli_rollback()](mysqli.rollback.md) - Відкат поточної транзакції
