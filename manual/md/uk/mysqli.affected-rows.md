- [«mysqli](class.mysqli.md)
- [mysqli::autocommit »](mysqli.autocommit.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Отримує кількість рядків, порушених попередньою операцією MySQL

# mysqli::$affected_rows

# mysqli_affected_rows

(PHP 5, PHP 7, PHP 8)

mysqli::$affected_rows -- mysqli_affected_rows — Отримує кількість рядків,
порушених попередньою операцією MySQL

### Опис

Об'єктно-орієнтований стиль

int\|string `$mysqli->affected_rows`;

Процедурний стиль

**mysqli_affected_rows**([mysqli](class.mysqli.md) `$mysql`):
int\|string

Повертає число рядків, зачеплених останнім запитом `INSERT`,
`UPDATE`, `REPLACE` або `DELETE`. Працює аналогічно
[mysqli_num_rows()](mysqli-result.num-rows.md) для виразів `SELECT`.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Ціле число, більше нуля, означає кількість порушених чи отриманих
рядків. Нуль означає, що записи для оператора `UPDATE` не оновлювалися,
жоден рядок не відповідав виразу `WHERE` у запиті або що ні
один запит ще не було виконано. `-1` означає, що під час виконання
запиту сталася помилка або що **mysqli_affected_rows()** була викликана
для небуферизованого запиту `SELECT`.

> **Примітка**:
>
> Якщо число порушених рядків більше, ніж максимальне значення цілого
> числа (**`PHP_INT_MAX`**), то число порушених рядків буде повернено
> у вигляді рядка.

### Приклади

**Приклад #1 Приклад використання `$mysqli->affected_rows`**

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* Додаток|$u * from CountryLanguage");printf("Зачеплені рядки (INSERT): %d
", $mysqli->affected_rows);$mysqli->query("ALTER TABLE Language ADD Status int default 0");/* Оновлення рядків */$mysqli->query("UPDATE Language  ");printf("Порушені рядки (UPDATE): %d
", $mysqli->affected_rows);/* Видалення рядків */$mysqli->query("DELETE FROM Language WHERE Percentage < 50");printf("Зачеплені рядки (DELETE): 
", $mysqli->affected_rows);/* Вибірка всіх рядків */$result u003d $mysqli->query("SELECT CountryCode FROM Language");printf("Порушені рядки|(SELECT):
", $mysqli->affected_rows);/* Видалення таблиці Language */$mysqli->query("DROP TABLE Language");?> `

Процедурний стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* Додати рядок | CountryLanguage");printf("Зачеплені рядки (INSERT): %d
", mysqli_affected_rows($link));mysqli_query($link, "ALTER TABLE Language ADD Status int default 0");/* Оновлення рядків */mysqli_query($link, u ;printf("Порушені рядки|(UPDATE): %d
", Mysqli_affected_rows ($ link));
", Mysqli_affected_rows($link));
", mysqli_affected_rows($link));/* Видалення таблиці Language */mysqli_query($link, "DROP TABLE Language");?> `

Результат виконання даних прикладів:

Порушені рядки (INSERT): 984
Порушені рядки (UPDATE): 168
Порушені рядки (DELETE): 815
Порушені рядки (SELECT): 169

### Дивіться також

- [mysqli_num_rows()](mysqli-result.num-rows.md) - Отримує
кількість рядків у наборі результатів
- [mysqli_info()](mysqli.info.md) - Витягує інформацію про останнє
виконаному запиті
