- [«db2_autocommit](function.db2-autocommit.md)
- [db2_client_info »](function.db2-client-info.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Зв'язує змінну PHP із параметром SQL-виразу

#db2_bind_param

(PECL ibm_db2 \>u003d 1.0.0)

db2_bind_param — Зв'язує змінну PHP із параметром SQL-виразу

### Опис

**db2_bind_param**(
resource `$stmt`,
int `$parameter_number`,
string `$variable_name`,
int `$parameter_type` u003d ?,
int `$data_type` u003d 0,
int `$precision` u003d -1,
int `$scale` u003d 0
): bool

Зв'язує змінну PHP з параметром SQL-вираження в ресурсі виразу,
повертається [db2_prepare()](function.db2-prepare.md). Ця функція
дає більший контроль над типом параметра, типом даних, точністю та
масштабом для параметра, ніж проста передача змінної як частини
необов'язкового вхідного масиву
[db2_execute()](function.db2-execute.md).

### Список параметрів

`stmt`
Підготовлений вираз, що повертається
[db2_prepare()](function.db2-prepare.md).

`parameter_number`
Задає позицію параметра, яка нумерується з 1 у підготовленому
виразі.

`variable_name`
Рядок, що визначає ім'я змінної PHP для прив'язки до параметра,
заданому `parameter_number`.

`parameter_type`
Константа, яка визначає, чи має змінна PHP бути прив'язана до
параметру SQL як вхідний параметр (`DB2_PARAM_IN`), вихідний параметр
(`DB2_PARAM_OUT`) або або як параметр, що приймає введення та повертає
висновок (DB2_PARAM_INOUT). Щоб уникнути перевантаження пам'яті, можна також
вказати `DB2_PARAM_FILE`, щоб прив'язати змінну PHP до імені файлу,
містить дані великого об'єкта (BLOB, CLOB або DBCLOB).

`data_type`
Константа, що вказує тип даних SQL, з яким має бути пов'язана
змінна PHP: `DB2_BINARY`, `DB2_CHAR`, `DB2_DOUBLE` або `DB2_LONG`.

`precision`
Задає точність, з якою змінна має бути прив'язана до бази
даних. Цей параметр також можна використовувати для отримання вихідних
значень XML із збережених процедур. Невід'ємне значення вказує
максимальний розмір даних XML, які буде вилучено з бази даних.
Якщо цей параметр не використовується, для отримання вихідного значення XML
із процедури передбачається значення за замовчуванням 1 МБ.

`scale`
Задає масштаб, з яким змінна має бути прив'язана до бази
даних.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Прив'язка змінних PHP до підготовленого виразу**

SQL-вираз у цьому прикладі використовує два вхідні параметри в
реченні WHERE. Викликається **db2_bind_param()**, щоб зв'язати дві
змінні PHP із відповідними параметрами SQL. Зверніть увагу,
що змінні PHP не потрібно оголошувати або надавати перед викликом
**db2_bind_param()**; у цьому прикладі `$lower_limit` надається
значення перед викликом **db2_bind_param()**, а `$upper_limit`
надається значення після виклику **db2_bind_param()**. Перед викликом
[db2_execute()](function.db2-execute.md) змінні повинні бути
пов'язані, а параметрам, що приймають введення, має бути присвоєно будь-яке
значення. [db2_execute()](function.db2-execute.md).

` <?php$sql u003d 'SELECT name, breed, weight FROM animals    WHERE weight > ? AND weight < ?';$conn u003d db2_connect($database, $user, $password);$stmt u003d db2_prepare($conn, $sql);// Можно оголосити змінну перед| $stmt, 1, "lower_limit", DB2_PARAM_IN);db2_bind_param($stmt, 2, "upper_limit", DB2_PARAM_IN); {   while ($row u003d db2_fetch_array($stmt)) {       print "{$row[0]}, {$row[1]}, {$row[2]}
";    }}?> `

Результат виконання цього прикладу:

Pook, cat, 3.2
Rickety Ride, goat, 9.7
Peaches, dog, 12.3

**Приклад #2 Виклик збережених процедур з параметрами IN та OUT**

Зберігається процедура match_animal в даному прикладі приймає три різні
параметра:

1. вхідний параметр (IN), який приймає ім'я першої тварини в
якості вхідних даних

2. параметр введення-виводу (INOUT), який приймає ім'я другого
тварини в якості вхідних даних і повертає рядок `TRUE`, якщо
тварина у базі даних збігається з цим ім'ям

3. вихідний параметр (OUT), який повертає суму ваги двох
ідентифікованих тварин

Крім того, процедура, що зберігається, повертає набір результатів, що складається
з тварин, перерахованих в алфавітному порядку, починаючи з тварини,
відповідного вхідного значення першого параметра, і закінчуючи
тваринам, що відповідає вхідному значенню другого параметра.

` <?php$sql u003d 'CALL match_animal(?, ?, ?)';$conn u003d db2_connect($database, $user, $password);$stmt u003d db2_prepare($conn, $sql);$name u003d Peaches";$second_name u003d "Rickety Ride";$weight u003d 0;db2_bind_param($stmt, 1, "name", DB2_PARAM_IN);db2_bind_param($stmt, 2, second_name" , "weight", DB2_PARAM_OUT);print "Values of bound parameters _before_ CALL:
";print " 1: {$name} 2: {$second_name} 3: {$weight}

";if (db2_execute($stmt)) {    print "Values of bound parameters _after_ CALL:
";    print " 1: {$name} 2: {$second_name} 3: {$weight}

";    print "Results:
";   while ($row u003d db2_fetch_array($stmt)) {       print|" {$row[0]}, {$row[1]}, {$row[2]}
";    }}?> `

Результат виконання цього прикладу:

Values of bound parameters _before_ CALL:
1: Peaches 2: Rickety Ride 3: 0

Values of bound parameters _after_ CALL:
1: Peaches 2: TRUE 3: 22

Results:
Peaches, dog, 12.3
Pook, cat, 3.2
Rickety Ride, goat, 9.7

**Приклад #3 Вставка великого двійкового об'єкта (BLOB) безпосередньо з
файлу**

Дані великих об'єктів зазвичай зберігаються у файлах, таких як
документи XML або аудіофайли. Замість того, щоб зчитувати весь файл у
змінну PHP і потім пов'язувати цю змінну PHP з SQL-виразом,
можна уникнути деяких накладних витрат на пам'ять, прив'язавши файл
безпосередньо до вхідного параметра SQL-виразу. У цьому прикладі показано,
як прив'язати файл безпосередньо до стовпця BLOB.

` <?php$stmt u003d db2_prepare($conn, "INSERT INTO animal_pictures(picture) VALUES (?)");$picture u003d "/opt/albums/spook/grooming.jpg";$rc u003d db2_bind 1, "picture", DB2_PARAM_FILE);$rc u003d db2_execute($stmt);?> `

### Дивіться також

- [db2_execute()](function.db2-execute.md) - Виконує
підготовлений SQL-запит
- [db2_prepare()](function.db2-prepare.md) - Підготовка
SQL-запит до виконання
