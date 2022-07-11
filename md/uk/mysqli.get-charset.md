- [« mysqli::$field_count](mysqli.field-count.md)
- [mysqli::$client_info »](mysqli.get-client-info.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає об'єкт, що описує кодування

# mysqli::get_charset

# mysqli_get_charset

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

mysqli::get_charset -- mysqli_get_charset -- Повертає об'єкт,
описує кодування

### Опис

Об'єктно-орієнтований стиль

public **mysqli::get_charset**(): ?object

Процедурний стиль

**mysqli_get_charset**([mysqli](class.mysqli.md) `$mysql`): ?object

Повертає об'єкт, який містить властивості поточного кодування.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Функція повертає об'єкт із такими властивостями:

`charset`
Ім'я кодування

`collation`
Ім'я зіставлення

`dir`
Директорія, з якої отримано опис кодування. (?) або "" для
вбудованих наборів

`min_length`
Мінімальна довжина символу в байтах

`max_length`
Максимальна довжина символу в байтах

`number`
Внутрішній номер кодування

`state`
Стан набору символів (?)

### Приклади

**Приклад #1 Приклад використання **mysqli::get_charset()****

Об'єктно-орієнтований стиль

` <?php $db u003d mysqli_init(); $db->real_connect("localhost","root","","test"); var_dump($db->get_charset());?> `

Процедурний стиль

` <?php $db u003d mysqli_init(); mysqli_real_connect($db, "localhost","root","","test"); var_dump(mysqli_get_charset($db));?> `

Результат виконання даних прикладів:

object(stdClass)#2 (7) {
["charset"]u003d>
string(6) "latin1"
["collation"]u003d>
string(17) "latin1_swedish_ci"
["dir"]u003d>
string(0) ""
["min_length"]u003d>
int(1)
["max_length"]u003d>
int(1)
["number"]u003d>
int(8)
["state"]u003d>
int(801)
}

### Дивіться також

- [mysqli_character_set_name()](mysqli.character-set-name.md) -
Повертає поточне кодування, встановлене для з'єднання з БД
- [mysqli_set_charset()](mysqli.set-charset.md) - Задає набір
символів
