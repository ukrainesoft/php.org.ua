- [« mysqli_stmt::result_metadata](mysqli-stmt.result-metadata.md)
- [mysqli_stmt::$sqlstate »](mysqli-stmt.sqlstate.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Надсилання даних блоками

# mysqli_stmt::send_long_data

# mysqli_stmt_send_long_data

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::send_long_data -- mysqli_stmt_send_long_data — Надсилання
даних блоками

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::send_long_data**(int `$param_num`, string
`$data`): bool

Процедурний стиль

**mysqli_stmt_send_long_data**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`, int `$param_num`, string `$data`): bool

Дозволяє пересилати дані параметра на сервер частинами (або чанками),
наприклад, коли розмір великого об'єкта (blob) перевищує
`max_allowed_packet`. Цю функцію можна запускати багаторазово, щоб
надіслати частини символьних або двійкових даних стовпця. Дані у стовпці
повинен мати тип TEXT або BLOB.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

`param_num`
Вказує, із яким параметром пов'язані дані. Параметри нумеруються з
нуля.

`data`
Рядок, що містить дані, що пересилаються.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$stmt u003d $mysqli->prepare("INSERT INTO messages (message) VALUES (?)");$null u003d NULL;$stmt->bind_param("b", $null);$fp u003d ("messages.txt", "r");while (!feof($fp)) {    $stmt->send_long_data(0, fread($fp, 8192));}fclose($fp);$stmt-> execute();?> `

### Дивіться також

- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
- [mysqli_stmt_bind_param()](mysqli-stmt.bind-param.md) - Прив'язка
змінних до параметрів запиту, що готується
