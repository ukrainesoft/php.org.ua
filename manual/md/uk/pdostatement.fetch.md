- [« PDOStatement::execute](pdostatement.execute.md)
- [PDOStatement::fetchAll »](pdostatement.fetchall.md)

- [PHP Manual](index.md)
- [PDOStatement](class.pdostatement.md)
- Вилучення наступного рядка з результуючого набору

# PDOStatement::fetch

(PHP 5 u003d 5.1.0, PHP 7, PHP 8, PECL pdo u003d 0.1.0)

PDOStatement::fetch — Витяг наступного рядка з результуючого
набору

### Опис

public **PDOStatement::fetch**(int `$mode` u003d PDO::FETCH_DEFAULT, int
`$cursorOrientation` u003d PDO::FETCH_ORI_NEXT, int `$cursorOffset` u003d 0):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Витягує наступний рядок із результуючого набору об'єкта
PDOStatement. Параметр `mode` визначає, як PDO поверне цю
рядок.

### Список параметрів

`mode`
Визначає, у якому вигляді наступний рядок буде повернено до викликаючого
метод. Це може бути одна із констант `PDO::FETCH_*`. За замовчуванням
`PDO::ATTR_DEFAULT_FETCH_MODE` (що рівносильно `PDO::FETCH_BOTH`).

- `PDO::FETCH_ASSOC`: повертає масив, індексований іменами
стовпців результуючого набору

- `PDO::FETCH_BOTH` (за замовчуванням): повертає масив, індексований
іменами стовпців результуючого набору, а також їх номерами
(починаючи з 0)

- `PDO::FETCH_BOUND`: повертає **`true`** і надає значення
стовпців результуючого набору змінним PHP, які були
прив'язані до цих стовпців методом
[PDOStatement::bindColumn()](pdostatement.bindcolumn.md)

- `PDO::FETCH_CLASS`: створює та повертає об'єкт запитаного класу,
привласнюючи значення стовпців результуючого набору іменованим
властивостям класу і слідом викликає конструктор, якщо не заданий
`PDO::FETCH_PROPS_LATE`. Якщо `mode` включає атрибут
PDO::FETCH_CLASSTYPE (наприклад,
`PDO::FETCH_CLASS | PDO::FETCH_CLASSTYPE`), то ім'я класу, від
якого потрібно створити об'єкт, буде взято з першого стовпця.

- `PDO::FETCH_INTO`: оновлює існуючий об'єкт запитаного
класу, надаючи значення стовпців результуючого набору
іменованим властивостям об'єкта

- `PDO::FETCH_LAZY`: комбінує `PDO::FETCH_BOTH` та `PDO::FETCH_OBJ`,
створюючи новий об'єкт із властивостями, що відповідають іменам
стовпців результуючого набору

- `PDO::FETCH_NAMED`: повертає масив такого ж виду, як і
`PDO::FETCH_ASSOC`, але якщо є кілька полів з однаковим
ім'ям, то значенням із цим ключем буде масив з усіма значеннями
із рядів, у яких це поле вказано.

- `PDO::FETCH_NUM`: повертає масив, індексований номерами
стовпців (починаючи з 0)

- `PDO::FETCH_OBJ`: створює анонімний об'єкт із властивостями,
відповідними іменами стовпців результуючого набору

- `PDO::FETCH_PROPS_LATE`: якщо використовується з `PDO::FETCH_CLASS`,
конструктор класу буде викликаний перед призначенням властивостей
значень шпальт.

`cursorOrientation`
Для об'єктів PDOStatement, що представляють курсор, що прокручується, цей
параметр визначає, який рядок буде повертатися в метод, що викликає.
Значенням параметра має бути одна з констант `PDO::FETCH_ORI_*`,
за замовчуванням `PDO::FETCH_ORI_NEXT`. Щоб запросити курсор, що прокручується
для запиту PDOStatement необхідно задати атрибут `PDO::ATTR_CURSOR`
зі значенням `PDO::CURSOR_SCROLL` під час підготовки запиту методом
[PDO::prepare()](pdo.prepare.md).

`offset`
Для об'єктів PDOStatement, що представляють курсор, що прокручується,
параметр `cursor_orientation` яких набуває значення
`PDO::FETCH_ORI_ABS`, ця величина означає абсолютний номер рядка,
яку необхідно витягти з результуючого набору.

Для об'єктів PDOStatement, що представляють курсор, що прокручується,
параметр `cursor_orientation` яких набуває значення
`PDO::FETCH_ORI_REL`, ця величина вказує, який рядок щодо
поточного положення курсору буде вилучено функцією
**PDOStatement::fetch()**.

### Значення, що повертаються

У разі успішного виконання функції значення, що повертається, залежить від
режиму вибірки. У разі виникнення помилки або якщо більше немає рядків,
функція повертає **`false`**.

### Приклади

**Приклад #1 Вилучення рядків у різних режимах вибірки**

` <?php$sth u003d $dbh->prepare("SELECT name, colour FROM fruit");$sth->execute();/* Приклади різних режимів роботи PDOStatement::fetch */print("PDO : ");print("Повертаємо наступне рядок у виді масиву, індексованого іменами стовпців
");$result u003d $sth->fetch(PDO::FETCH_ASSOC);print_r($result);print("
");print("PDO::FETCH_BOTH: ");print("Повертаємо наступний рядок у виді масиву, індексованого як іменами стовпців, так і їх номерами
");$result u003d $sth->fetch(PDO::FETCH_BOTH);print_r($result);print("
");print("PDO::FETCH_LAZY: ");print("Повертаємо наступний рядок у вигляді анонімного об'єкта з властивостями, відповідними стовпцям
");$result u003d $sth->fetch(PDO::FETCH_LAZY);print_r($result);print("
");print("PDO::FETCH_OBJ: ");print("Повертаємо наступний рядок у вигляді анонімного об'єкта з властивостями, відповідними стовпцям
");$result u003d $sth->fetch(PDO::FETCH_OBJ);print $result->name;print("
");?> `

Результат виконання цього прикладу:

PDO::FETCH_ASSOC: Повертаємо наступний рядок у вигляді масиву, індексованого іменами стовпців
Array
(
[name] u003d> apple
[colour] u003d> red
)

PDO::FETCH_BOTH: Повертаємо наступний рядок у вигляді масиву, індексованого як іменами стовпців, так і їх номерами
Array
(
[name] u003d> banana
[0] u003d> banana
[colour] u003d> yellow
[1] u003d> yellow
)

PDO::FETCH_LAZY: Повертаємо наступний рядок у вигляді анонімного об'єкта з властивостями, що відповідають стовпцям
PDORow Object
(
[name] u003d> orange
[colour] u003d> orange
)

PDO::FETCH_OBJ: Повертаємо наступний рядок у вигляді анонімного об'єкта з властивостями, що відповідають стовпцям
kiwi

**Приклад #2 Вибірка рядків засобами прокручуваного курсору**

` <?phpfunction readDataForwards($dbh) {    $sql u003d 'SELECT hand, won, bet FROM mynumbers ORDER BY BET'; $stmtu003du003d$dbh->prepare($sql, array(PDO::ATTR_CURSOR u003d> PDO::CURSOR_SCROLL)); $stmt->execute(); while($row u003d $stmt->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_NEXT)) {        $data u003d $row[0] . " " . $row[1] . " " . $row[2] . "
";        print $data;    }}function readDataBackwards($dbh) {    $sql u003d 'SELECT hand, won, bet FROM mynumbers ORDER BY bet';    $stmt u003d $dbh->prepare($sql, array(PDO::ATTR_CURSOR u003d> PDO::CURSOR_SCROLL));   $stmt->execute();  $row u003d $stmt->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_LAST);                . $row[1] . " " . $row[2] . "
";         print $data;    } while ($row u003d $stmt->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_PRIOR));}print "Читаємо 
";readDataForwards($conn);print "Читаємо в зворотній послідовності:
";readDataBackwards($conn);?> `

Результат виконання цього прикладу:

Читаємо у прямій послідовності:
21 10 5
16 0 5
19 20 10

Читаємо у зворотній послідовності:
19 20 10
16 0 5
21 10 5

**Приклад #3 Порядок конструкторів**

Якщо об'єкти забираються за допомогою `PDO::FETCH_CLASS`, спочатку
надаються властивості об'єкта, а потім викликається конструктор об'єкта.
Якщо також встановлено `PDO::FETCH_PROPS_LATE`, цей порядок змінюється на
зворотний.

`<?phpclass Person{    private $name; public function __construct()    {       $$this->tell(); }   publicfunction tell()    {        if (isset($this->name)) {             echo "Я>
";        }}else {             echo "У мене ще ні імені.
";        }    }}$sth u003d $dbh->query("SELECT * FROM people");$sth->setFetchMode(PDO::FETCH_CLASS, 'Person');$$son| person->tell();$sth->setFetchMode(PDO::FETCH_CLASS|PDO::FETCH_PROPS_LATE, 'Person');$person u003d $sth->fetch();$person->tell();?> `

Результатом виконання цього прикладу буде щось подібне:

Я – Alice.
Я Alice.
В мене ще немає імені.
Я Bob.

### Дивіться також

- [PDO::prepare()](pdo.prepare.md) - Підготовка запиту до
виконання та повертає пов'язаний з цим запитом об'єкт
- [PDOStatement::execute()](pdostatement.execute.md) - Запускає
підготовлений запит на виконання
- [PDOStatement::fetchAll()](pdostatement.fetchall.md) - Вибирає
рядки, що залишилися з набору результатів
- [PDOStatement::fetchColumn()](pdostatement.fetchcolumn.md) -
Повертає дані одного стовпця наступного рядка результуючого
набору
- [PDOStatement::fetchObject()](pdostatement.fetchobject.md) -
Витягує наступний рядок і повертає його у вигляді об'єкта
- [PDOStatement::setFetchMode()](pdostatement.setfetchmode.md) -
Встановлює стандартний режим вибірки для об'єкта запиту
