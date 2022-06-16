- [« ibase_modify_user](function.ibase-modify-user.md)
- [ibase_num_fields »](function.ibase-num-fields.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Надає ім'я набору результатів

# ibase_name_result

(PHP 5, PHP 7 \< 7.4.0)

ibase_name_result — Надає ім'я набору результатів.

### Опис

**ibase_name_result**(resource `$result`, string `$name`): bool

Функція надає ім'я набору результатів. Ім'я може бути використане
пізніше в запитах UPDATE\|DELETE... WHERE CURRENT OF `name`.

### Список параметрів

`result`
Набір результатів InterBase.

`name`
Ім'я призначення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ibase_name_result()****

` <?php$result u003d ibase_query("SELECT field1,field2 FROM table FOR UPDATE");ibase_name_result($result, "my_cursor");$updateqry u003d ibase_prepare("URDATE_ CU| for ($i u003d 0; ibase_fetch_row($result); ++$i) {    ibase_execute($updateqry, $i);}?> `

### Дивіться також

- [ibase_prepare()](function.ibase-prepare.md) - Підготовка
запит для подальшого зв'язування псевдозмінних та виконання
- [ibase_execute()](function.ibase-execute.md) - Виконує
попередньо підготовлений запит
