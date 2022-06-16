- [« ibase_prepare](function.ibase-prepare.md)
- [ibase_restore »](function.ibase-restore.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Виконує запит до бази даних InterBase

# ibase_query

(PHP 5, PHP 7 \< 7.4.0)

ibase_query — Виконує запит до бази даних InterBase

### Опис

**ibase_query**(resource `$link_identifier` u003d ?, string `$query`, int
$bind_args u003d ?): resource

Виконує запит до бази даних InterBase.

### Список параметрів

`link_identifier`
Ідентифікатор посилання на InterBase. Якщо не вказано, передбачається остання
відкрите посилання.

`query`
Запит InterBase.

`bind_args`

### Значення, що повертаються

Якщо запит викликає помилку, повертає **false**. У разі успішного
виконання та наявності (можливо, порожнього) результуючого набору
(наприклад, із запитом SELECT) повертає ідентифікатор результату. Якщо
запит був успішним і результатів не було, повертає **`true`**.

> **Примітка**:
>
> У PHP 5.0.0 і вище ця функція повертатиме кількість рядків,
> порушених запитом для операторів INSERT, UPDATE і DELETE. Щоб
> зберегти зворотну сумісність, вона повертатиме **`true`** для
> цих операцій, якщо запит виконано успішно без торкання
> будь-яких рядків.

### Помилки

Якщо ви отримуєте повідомлення про помилку на кшталт "arithmetic exception,
numeric overflow, або string truncation. Cannot transliterate character
between character sets" (це відбувається, коли ви намагаєтеся використати
будь-який символ з діакритичними знаками) при використанні цієї
функції та після використання **ibase_query()**, ви повинні встановити
символьне кодування (ISO8859_1 або ваше поточне символьне кодування).

### Приклади

**Приклад #1 Приклад використання **ibase_query()****

` <?php$host u003d 'localhost:/path/to/your.gdb';$dbh u003d ibase_connect($host, $username, $password);$stmt u003d 'SELECT * FROM tblname';$sth u003d iba $dbh, $stmt) or die(ibase_errmsg());?> `

### Дивіться також

- [ibase_errmsg()](function.ibase-errmsg.md) - Повертає повідомлення
про помилку
- [ibase_fetch_row()](function.ibase-fetch-row.md) - Витягує
рядок із бази даних InterBase
- [ibase_fetch_object()](function.ibase-fetch-object.md) - Отримує
об'єкт із бази даних InterBase
- [ibase_free_result()](function.ibase-free-result.md) - Звільняє
набір результатів
