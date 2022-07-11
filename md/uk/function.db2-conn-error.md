- [«db2_commit](function.db2-commit.md)
- [db2_conn_errormsg »](function.db2-conn-errormsg.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Повертає рядок, що містить значення SQLSTATE, повернене
останньою спробою підключення

#db2_conn_error

(PECL ibm_db2 \>u003d 1.0.0)

db2_conn_error — Повертає рядок, який містить значення SQLSTATE,
повернене останньою спробою підключення

### Опис

**db2_conn_error**(resource `$connection` u003d ?): string

Повертає значення SQLSTATE, що є причиною, з якої
остання спроба підключення до бази даних завершилася невдачею.
Оскільки [db2_connect()](function.db2-connect.md) повертає
**`false`** у разі невдалої спроби підключення, не потрібно передавати
ніяких параметрів у **db2_conn_error()** для отримання значення
SQLSTATE.

Однак, якщо з'єднання було успішним, але згодом стало
недійсним, можна передати параметр `connection`, щоб отримати
значення SQLSTATE для конкретної сполуки.

Щоб дізнатися, що означає значення SQLSTATE, можна ввести наступну
команду в командному рядку DB2 Command Line Processor:
**`db2'? sqlstate-value``**. Також можна викликати
[db2_conn_errormsg()](function.db2-conn-errormsg.md), щоб отримати
явне повідомлення про помилку та відповідне значення SQLCODE.

### Список параметрів

`connection`
Ресурс підключення, пов'язаний із підключенням, яке спочатку було
успішним, але згодом стало недійсним.

### Значення, що повертаються

Повертає значення SQLSTATE, отримане внаслідок невдалої спроби
підключення. Повертає порожній рядок, якщо при останній спробі
підключення помилок не виникло.

### Приклади

**Приклад #1 Отримання SQLSTATE для невдалої спроби
підключення**

У цьому прикладі показано, як повернути значення SQLSTATE після
навмисної передачі неприпустимих параметрів
[db2_connect()](function.db2-connect.md).

` <?php$conn u003d db2_connect('badname', 'baduser', 'badpassword');if (!$conn) {    print "SQLSTATE value: " . db2_conn_error();}?> `

Результат виконання цього прикладу:

SQLSTATE value: 08001

### Дивіться також

- [db2_conn_errormsg()](function.db2-conn-errormsg.md) - Повертає
останнє повідомлення про помилку підключення та значення SQLCODE
- [db2_connect()](function.db2-connect.md) - Повертає з'єднання з
базою даних
- [db2_stmt_error()](function.db2-stmt-error.md) - Повертає
рядок, що містить SQLSTATE, повернутий SQL-оператором
- [db2_stmt_errormsg()](function.db2-stmt-errormsg.md) - Повертає
рядок, що містить останнє повідомлення про помилку SQL-виразу
