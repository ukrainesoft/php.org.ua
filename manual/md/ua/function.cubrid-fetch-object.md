- [«cubrid_fetch_lengths](function.cubrid-fetch-lengths.md)
- [cubrid_fetch_row »](function.cubrid-fetch-row.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Витягти наступний рядок як об'єкт

# cubrid_fetch_object

(PECL CUBRID u003d 8.3.0)

cubrid_fetch_object — Витягти наступний рядок як об'єкт

### Опис

**cubrid_fetch_object**(
resource `$result`,
string `$class_name` u003d ?,
array `$params` u003d ?,
int `$type` u003d ?
): object

Функція повертає об'єкт із властивостями, імена яких дорівнюють іменам
стовпців результуючого набору, а значення відповідно значенням.

### Список параметрів

`result`
`Result` отриманий з [cubrid_execute()](function.cubrid-execute.md)

`class_name`
Назва класу, який буде використаний для створення об'єкта. Якщо не
задано, то буде використаний **stdClass** (stdClass - базовий, порожній,
клас PHP, який використовується при перетворенні інших типів
об'єкти).

`params`
Необов'язковий масив параметрів передачі в конструктор
`class_name`.

`type`
Може містити лише CUBRID_LOB. Використовується під час роботи з об'єктами
типу LOB.

### Значення, що повертаються

Об'єкт у разі успішного виконання.

**`false`**, якщо рядків більше немає; **`null`**, коли процес
завершується з помилкою.

### Приклади

**Приклад #1 Приклад використання **cubrid_fetch_object()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");$res u003d cubrid_execute($conn, "SELECT * FROM code");var_dump(cubrid_fetch_object| з LOB використовуйте cubrid_fetch_object($res, CUBRID_LOB)class demodb_code {    public $s_name u003d null; public $f_name u003d u003d null; public function toString() {        var_dump($this); }}var_dump(cubrid_fetch_object($res, "demodb_code"));// В случае работы с LOB используйте cubrid_fetch_object($res, "demodb_code", CUBRID_LOB)class demodb_code_construct extends demodb_code {    public function __construct($s, $f) { $this->s_name u003d $s; $this->f_name u003d $f; }}var_dump(cubrid_fetch_object($res, 'demodb_code_construct', array('s_name', 'f_name'))); f_name'), CUBRID_LOB)var_dump(cubrid_fetch_object($res));cubrid_close_request($res);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

object(stdClass)#1 (2) {
["s_name"]u003d>
string(1) "X"
["f_name"]u003d>
string(5) "Mixed"
}
object(demodb_code)#1 (2) {
["s_name"]u003d>
string(1) "W"
["f_name"]u003d>
string(5) "Woman"
}
object(demodb_code_construct)#1 (2) {
["s_name"]u003d>
string(6) "s_name"
["f_name"]u003d>
string(6) "f_name"
}
object(stdClass)#1 (2) {
["s_name"]u003d>
string(1) "B"
["f_name"]u003d>
string(6) "Bronze"
}

### Дивіться також

- [cubrid_execute()](function.cubrid-execute.md) - Виконує
підготовлений SQL-оператор
- [cubrid_fetch()](function.cubrid-fetch.md) - Вибирає наступну
рядок із набору результатів
- [cubrid_fetch_array()](function.cubrid-fetch-array.md) -
Вилучення рядка з результуючого набору у вигляді асоціативного
масиву, індексованого масиву або обох відразу
- [cubrid_fetch_assoc()](function.cubrid-fetch-assoc.md) - Вийняти
рядок із результуючого набору у вигляді асоціативного масиву
- [cubrid_fetch_row()](function.cubrid-fetch-row.md) - Вийняти
рядок із результуючого набору у вигляді індексованого масиву
