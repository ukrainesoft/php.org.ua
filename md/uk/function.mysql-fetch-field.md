- [« mysql_fetch_assoc](function.mysql-fetch-assoc.md)
- [mysql_fetch_lengths »](function.mysql-fetch-lengths.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає інформацію про колонку з результату запиту як об'єкта

# mysql_fetch_field

(PHP 4, PHP 5)

mysql_fetch_field — Повертає інформацію про колонку з результату
запиту як об'єкта

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_fetch_field()](mysqli-result.fetch-field.md)
- [PDOStatement::getColumnMeta()](pdostatement.getcolumnmeta.md)

### Опис

**mysql_fetch_field**(resource `$result`, int `$field_offset` u003d 0):
object

Повертає об'єкт, що містить інформацію про стовпчик. Цю функцію можна
використовувати для отримання інформації про поля в переданому результаті
запиту.

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

`field_offset`
Числове усунення поля. Якщо усунення не вказано, функція повертає
інформацію про першу колонку, яка ще не була оброблена цією
функцією. Нумерація `field_offset` починається з `0`.

### Значення, що повертаються

Повертає об'єкт, що містить інформацію про колонку. Об'єкт містить
такі властивості:

- name - назва колонки
- table - назва таблиці, якій належить колонка, або
псевдонім таблиці, якщо він був визначений
- max_length – максимальна довжина колонки
- not_null - 1, якщо колонка не може бути **`null`**
- primary_key - 1, якщо колонка є первинним індексом
- unique_key - 1, якщо колонка є унікальним індексом
- multiple_key - 1, якщо колонка є неунікальним індексом
- numeric - 1, якщо колонка чисельна
- blob - 1, якщо колонка є BLOB
- type - тип колонки
- unsigned - 1, якщо стовпчик не містить знака (unsigned)
- zerofill - 1, якщо колонка заповнюється нулями (zero-filled)

### Приклади

**Приклад #1 Приклад використання **mysql_fetch_field()****

` <?php$conn u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$conn) {    die('Помилка при з'єднанні: ' . Mysql_error())'' ;$result u003d mysql_query('select * from table');if (!$result) {    die('Помилка в запиті: ' . mysql_error());}/* отримуємо дані о | ($i < mysql_num_fields($result)) {   echo "Інформація про колонку $i:<br />
";   $meta u003d mysql_fetch_field($result, $i);    if (!$meta) {        echo "Інформація недоступна<br />
";    }    echo "<pre>blob:         $meta->blobmax_length:   $meta->max_lengthmultiple_key: $meta->multiple_keyname:         $meta->namenot_null:     $meta->not_nullnumeric:      $meta->numericprimary_key:  $meta-> primary_keytable:        $meta->tabletype:         $meta->typeunique_key:   $meta->unique_keyunsigned:     $meta->unsignedzerofill:     $meta->zerofill</pre>";    $i++;}mysql_free_result($result);?> `

### Примітки

> **Примітка**: Імена полів, що повертаються цією функцією,
> *залежними від регістру*.

> **Примітка**:
>
> Якщо поля або таблиці мають додаткові імена у запиті SQL, то
> Повернеться ці додаткові імена. Початкове ім'я може бути
> отримано, наприклад, за допомогою
> [mysqli_result::fetch_field()](mysqli-result.fetch-field.md).

### Дивіться також

- [mysql_field_seek()](function.mysql-field-seek.md) - Встановлює
внутрішній покажчик результату на передане усунення поля
