- [«db2_free_stmt](function.db2-free-stmt.md)
- [db2_last_insert_id »](function.db2-last-insert-id.md)

- [PHP Manual](index.md)
- [Функції IBM DB2](ref.ibm-db2.md)
- Виймає значення параметра для ресурсу оператора чи ресурсу
з'єднання

#db2_get_option

(PECL ibm_db2 \>u003d 1.6.0)

db2_get_option — Встановлює параметр для ресурсу оператора або
ресурсу з'єднання

### Опис

**db2_get_option**(resource `$resource`, string `$option`):
string\|false

Виймає значення вказаного параметра для ресурсу оператора або
ресурсу з'єднання.

### Список параметрів

`resource`
Допустимий ресурс оператора, що повертається
[db2_prepare()](function.db2-prepare.md) або допустимий ресурс
з'єднання, що повертається [db2_connect()](function.db2-connect.md) або
[db2_pconnect()](function.db2-pconnect.md).

`option`
Допустимий оператор або варіанти підключення. Наступні нові параметри
доступні у ibm_db2 версії 1.6.0. Вони надають корисну інформацію
для відстеження, яку можна встановити під час виконання за допомогою
**db2_get_option()**.

> **Примітка**:
>
> Попередні версії ibm_db2 не підтримують нові параметри.
>
> Коли встановлюється значення кожної опції, деякі сервери можуть
> не обробляти всю надану довжину та можуть усікати значення.
>
> Щоб забезпечити правильне перетворення даних, зазначених у кожному
> Опції, при передачі в хост-систему, використовуйте лише символи від A до
> Z, від 0 до 9, знак підкреслення (\_) або точку (.).

`userid`
`SQL_ATTR_INFO_USERID` - Покажчик на символьний рядок із завершальним
нулем, що використовується для ідентифікації ID користувача клієнта,
під час використання DB2 Connect, що надсилається на сервер бази даних хоста.

> **Примітка**:
>
> Сервери DB2 для z/OS та OS/390 підтримують довжину до 16 символів.
> Ідентифікатор користувача не слід плутати з ідентифікатором
> користувача для аутентифікації, він використовується лише для цілей
> ідентифікації та не використовується для будь-якої авторизації.

`acctstr`
`SQL_ATTR_INFO_ACCTSTR` - Покажчик на символьний рядок із завершальним
нулем, що використовується для ідентифікації облікового рядка клієнта,
бази даних хоста, що надсилається на сервер, при використанні DB2 Connect.

> **Примітка**:
>
> Сервери DB2 для z/OS та OS/390 підтримують довжину до 200 символів.

`applname`
`SQL_ATTR_INFO_APPLNAME` - Вказівник на символьний рядок із завершальним
нулем, що використовується для ідентифікації імені клієнтської програми,
під час використання DB2 Connect, що надсилається на сервер бази даних хоста.

> **Примітка**:
>
> Сервери DB2 для z/OS та OS/390 підтримують довжину до 32 символів.

`wrkstnname`
`SQL_ATTR_INFO_WRKSTNNAME` - Покажчик на символьний рядок з
завершальним нулем, що використовується для ідентифікації клієнтського імені
програми, що надсилається на сервер бази даних хоста під час використання
DB2 Connect.

> **Примітка**:
>
> Сервери DB2 для z/OS та OS/390 підтримують довжину до 18 символів.

У наступній таблиці наведено параметри, сумісні з доступними типами
ресурсів:

| Ключ | Значення | Тип ресурсу | |
|------------|----------------------------|------- ------|-----------|------------|
| | | Connection | Statement | Result Set |
| userid | `SQL_ATTR_INFO_USERID` | X | X | \- |
| acctstr | `SQL_ATTR_INFO_ACCTSTR` | X | X | \- |
| applname | `SQL_ATTR_INFO_APPLNAME` | X | X | \- |
| wrkstnname | `SQL_ATTR_INFO_WRKSTNNAME` | X | X | \- |

**Матриця параметрів ресурсів**

### Значення, що повертаються

Повертає поточне налаштування атрибута підключення, надане в
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Встановлення та отримання параметрів через ресурс підключення**

` <?php/* Параметри підключення до базі даних */$database u003d 'SAMPLE';$user     u003d 'db2inst1';$password u003d 'ibmdb2';/* Отримання ресур $ user, $password);echo "Атрибути клієнта, передані через рядок підключення:
";/* Створіть масив асоціативних опцій з допустимими парами "ключ-значення" *//* Призначте атрибути через рядок підключення *//* Доступ к вказаним          $conn1 u003d db2_connect($database, $user, $password, $options1);$val u003d db2_get_option($conn1, 'userid');echo $val . "
";$options2 u003d array('acctstr' u003d> 'account');$conn2 u003d db2_connect($database, $user, $password, $options2);$val u003d db2_get_option($conn2, 'acct') val . "
";$options3 u003d array('applname' u003d> 'myapp');$conn3 u003d db2_connect($database, $user, $password, $options3);$val u003d db2_get_option($conn3, 'applname'); val . "
$options4 u003d array('wrkstnname' u003d> 'workstation');$conn4 u003d db2_connect($database, $user, $password, $options4);$val u003d db2_get_option($conn4, 'wrk val . "
";echo "Атрибути клієнта пройшли після підключення:
";/* Create the associative options array with valid key-value pairs *//* Assign the attributes after a connection is made *//**Access the options           );$conn5 u003d db2_connect($database, $user, $password);$rc u003d db2_set_option($conn5, $options5, 1);$val u003d db2_get_option($conn5, 'userid');  |.
$options6 u003d array('acctstr' u003d> 'account');$conn6 u003d db2_connect($database, $user, $password);$rc u003d db2_set_option($conn6, $options6, 1);$val ($conn6, 'acctstr');echo $val . "
$options7 u003d array('applname' u003d> 'myapp');$conn7 u003d db2_connect($database, $user, $password);$rc u003d db2_set_option($conn7, $options7, 1);$val ($conn7, 'applname');echo $val . "
";$options8 u003d array('wrkstnname' u003d> 'workstation');$conn8 u003d db2_connect($database, $user, $password);$rc u003d db2_set_option($conn8, $options8, 1);$$ ($conn8, 'wrkstnname');echo $val . "
";?> `

Результат виконання цього прикладу:

Атрибути клієнта передаються через рядок підключення
db2inst1
account
myapp
workstation
Атрибути клієнта пройшли після підключення:
db2inst1
account
myapp
workstation

### Дивіться також

- [db2_connect()](function.db2-connect.md) - Повертає з'єднання з
базою даних
- [db2_cursor_type()](function.db2-cursor-type.md) - Повертає тип
курсор, який використовується в ресурсі оператора
- [db2_exec()](function.db2-exec.md) - Виконує SQL-запит безпосередньо
- [db2_set_option()](function.db2-set-option.md) - Встановлення опції
для з'єднання або ресурсу оператора
- [db2_pconnect()](function.db2-pconnect.md) - Повертає постійне
з'єднання з базою даних
- [db2_prepare()](function.db2-prepare.md) - Підготовка
SQL-запит до виконання
