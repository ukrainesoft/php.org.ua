- [« mysqli_stmt::attr_set](mysqli-stmt.attr-set.md)
- [mysqli_stmt::bind_result »](mysqli-stmt.bind-result.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Прив'язка змінних до параметрів запиту

# mysqli_stmt::bind_param

# mysqli_stmt_bind_param

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::bind_param -- mysqli_stmt_bind_param -- Прив'язка змінних
до параметрів запиту, що готується

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::bind_param**(string `$types`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&...$vars`): bool

Процедурний стиль

**mysqli_stmt_bind_param**(
[mysqli_stmt](class.mysqli-stmt.md) `$statement`,
string `$types`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&...$vars`
): bool

Прив'язує змінні до позначок параметрів у SQL-вираженні, яке було
підготовлено функцією [mysqli_prepare()](mysqli.prepare.md) або
[mysqli_stmt_prepare()](mysqli-stmt.prepare.md).

> **Примітка**:
>
> Якщо розмір даних змінної перевищує максимально допустимий розмір
> пакета (max_allowed_packet), необхідно встановити значення `b` параметру
> `types` та використовувати функцію
> [mysqli_stmt_send_long_data()](mysqli-stmt.send-long-data.md),
> яка передаватиме дані пакетами.

> **Примітка**:
>
> При використанні **mysqli_stmt_bind_param()** спільно з
> [call_user_func_array()](function.call-user-func-array.md)
> необхідно дотримуватися особливої обережності. Потрібно брати до уваги,
> що **mysqli_stmt_bind_param()** приймає як параметри
> тільки посилання на значення, у той час як
> [call_user_func_array()](function.call-user-func-array.md) приймає
> список параметрів, які можуть передаватися як за посиланням, так і
> значення.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

`types`
Рядок, що містить один або більше символів, кожен з яких визначає тип
значення змінної, що прив'язується:

| Символ | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------|
| i | відповідна змінна має тип integer
| d | відповідна змінна має тип double
| s | відповідна змінна має тип string |
| b | відповідна змінна є великим двійковим об'єктом (blob) і пересилатиметься пакетами

**Символи, що задають тип**

`var`
`vars`
Кількість змінних і довжина рядка `types` повинні бути точно
відповідати кількості параметрів у запиті.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli_stmt::bind_param()****

Об'єктно-орієнтований стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli('localhost', 'my_user', 'my_password', 'world');$stmt u003d $my ?, ?, ?)");$stmt->bind_param('sssd', $code, $language, $official, $percent);$code u003d 'DEU';$language u003d 'Bavarian';$official u003d F";$percent u003d 11.2;$stmt->execute();printf("рядок додано: %d.
", $stmt->affected_rows);/* Clean up table CountryLanguage */$mysqli->query("DELETE FROM CountryLanguage WHERE Languageu003d'Bavarian'");printf("рядок уда.
", $mysqli->affected_rows); `

Процедурний стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect('localhost', 'my_user', 'my_password', 'world')|$? ?, ?)");mysqli_stmt_bind_param($stmt, 'sssd', $code, $language, $official, $percent);$code u003d 'DEU';$language u003d 'Bavarian';$official| $percentu003d11.2;mysqli_stmt_execute($stmt);printf("рядок|додано:%d.
", Mysqli_stmt_affected_rows($stmt));
"mysqli_affected_rows($link));

Результат виконання даних прикладів:

рядків додано: 1.
1 row deleted.

**Приклад #2 Приклад використання `...` для надання аргументів**

Оператор `...` може використовуватись для надання списку аргументів
змінної довжини, наприклад, у конструкції `WHERE IN`.

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli('localhost', 'my_user', 'my_password', 'world') (?, ?)");/* використання ... для надання аргументів */$stmt->bind_param('ss', ...['DEU', 'POL']);$stmt->execute() ;$stmt->store_result();printf("знайдено рядок: %d.
", $stmt->num_rows());

Результат виконання даних прикладів:

знайдено рядків: 10

### Дивіться також

- [mysqli_stmt_bind_result()](mysqli-stmt.bind-result.md) - Прив'язка
змінних до підготовленого запиту для розміщення результату
- [mysqli_stmt_execute()](mysqli-stmt.execute.md) - Виконує
підготовлене затвердження
- [mysqli_stmt_fetch()](mysqli-stmt.fetch.md) - Зв'язує результати
підготовленого виразу зі змінними
- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
- [mysqli_stmt_send_long_data()](mysqli-stmt.send-long-data.md) -
Надсилання даних блоками
- [mysqli_stmt_errno()](mysqli-stmt.errno.md) - Повертає код
помилки виконання останнього запиту
- [mysqli_stmt_error()](mysqli-stmt.error.md) - Повертає рядок з
поясненням останньої помилки під час виконання запиту
