- [«oci_client_version](function.oci-client-version.md)
- [oci_commit»] (function.oci-commit.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Закриває з'єднання із сервером Oracle

#oci_close

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

oci_close — Закриває з'єднання із сервером Oracle

### Опис

**oci_close**(resource `$connection`): ?bool

Звільняє `connection`. Відповідне йому з'єднання з базою даних
буде закрито за відсутності ресурсів, що його використовують, і якщо воно було
отримано з функції [oci_connect()](function.oci-connect.md) або
[oci_new_connect()](function.oci-new-connect.md).

Рекомендується закривати з'єднання, що не використовуються, т.к. це
звільняє ресурси бази даних інших користувачів.

### Список параметрів

`connection`
Ідентифікатор з'єднання Oracle, отриманий із функцій
[oci_connect()](function.oci-connect.md),
[oci_pconnect()](function.oci-pconnect.md) або
[oci_new_connect()](function.oci-new-connect.md).

### Значення, що повертаються

Повертає **`null`** якщо
[oci8.old_oci_close_semantics](oci8.configuration.md#ini.oci8.old-oci-close-semantics)
включений або **`true`** в іншому випадку.

### Приклади

**Приклад #1 Закриття з'єднання**

Супутні з'єднання ресурси повинні бути закриті для забезпечення
коректного завершення з'єднання з базою даних та звільнення її
ресурсів.

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT * FROM departments');$r u003d oci_execute($stid res);var_dump($res);// Звільняємо ідентифікатор вираження при закритті з'єднанняoci_free_statement($stid);oci_close($conn);?> `

**Приклад #2 З'єднання бази даних не закривається доти, доки
будуть закриті всі посилання на нього **

Внутрішній лічильник посилань (refcount) ідентифікатора з'єднання повинен
дорівнювати нулю перед безпосереднім закриттям з'єднання до бази
даних.

` <?php$conn u003d oci_connect('hr', 'welcome', 'localhost/XE');if (!$conn) {    $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);}$stid u003d oci_parse($conn, 'SELECT **FROM departments'); // це збільшує refcount на $connoci_execute($stid);oci_fetch_all($stid, $res);var_dump($res);oci_close($conn);// $conn більше не може скористатися з'єднання з базою даних буде відкрито, поки не буде звільнена $stid.var_dump($conn); // выводит NULL// Пока PHP спит, запрос к виду Oracle V$SESSION в окне терминала// покажет, что пользователь базы данных всё ещё подключён.sleep(10);// Как только $stid освобождается, соединение к базе данных физически закривається oci_free_statement ($stid);

**Приклад #3 Закриття з'єднання, відкритого кілька разів**

При повторному використанні облікових даних користувача обидва з'єднання
повинні бути закриті перед безпосереднім закриттям з'єднання до бази
даних.

` <?php$conn1 u003d oci_connect('hr', 'welcome', 'localhost/XE');// Використання тих ж облікових даних повторно використовує одне і то з| Будь-які незафіксовані зміни в// $conn1 будуть видні в $conn2$conn2 u003d oci_connect('hr', 'welcome', 'localhost/XE');// Поки PHP спит, за / покаже, що підключений тільки один користувач бази даних.sleep(10);oci_close($conn1); // не закриває реальне з'єднання з базою данихvar_dump($conn1); // виводить NULL, т.к. $conn1 тепер безкориснаvar_dump($conn2); // показує, що $conn2 все ще є коректним ресурсом з'єднання?> `

**Приклад #4 З'єднання закривається при відході змінних з області
видимості**

Коли всі змінні, що посилаються на з'єднання, йдуть із області
видимості та звільняються PHP, відбувається відкат транзакції (якщо
необхідно) та з'єднання з базою закривається.

` <?phpfunction myfunc() {    $conn u003d oci_connect('hr', 'hrpwd', 'localhost/XE'); if (!$conn) {        $e u003d oci_error(); trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR); }   $stid u003d oci_parse($conn, 'UPDATE mytab SET id u003d 100'); oci_execute($stid, OCI_NO_AUTO_COMMIT); return "Закінчили!";}$r u003d myfunc();// У цій точці відбувається відкат транзакції і закривається відповідне// з'єднання з базою данихprint $r; // відображає повернене функцією значення "Закінчили!"?> `

### Примітки

> **Примітка**:
>
> Змінні, залежні від ідентифікатора з'єднань, такі як
> ідентифікатори виразів, отримані з
> [oci_parse()](function.oci-parse.md) повинні бути також звільнені
> до закриття з'єднання з базою даних.

> **Примітка**:
>
> До версії PHP 5.1.2 (PECL OCI8 1.1) **oci_close()** не виконувала
> Ніяких дій. У новіших версіях вона вже коректно закриває
> з'єднання. Використовуйте директиву
> [oci8.old_oci_close_semantics](oci8.configuration.md#ini.oci8.old-oci-close-semantics)
> відновлення старої поведінки цієї функції.

> **Примітка**:
>
> Функція **oci_close()** не закриває з'єднання з базою даних,
> створені функцією [oci_pconnect()](function.oci-pconnect.md).

### Дивіться також

- [oci_connect()](function.oci-connect.md) - Встановлює
з'єднання з базою даних Oracle
- [oci_free_statement()](function.oci-free-statement.md) -
Звільняє ресурси, які займає курсор або SQL-вираз.
