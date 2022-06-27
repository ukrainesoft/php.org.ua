- [«sqlsrv_fetch_array](function.sqlsrv-fetch-array.md)
- [sqlsrv_fetch »](function.sqlsrv-fetch.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Отримує наступний рядок даних у наборі результатів як об'єкт

#sqlsrv_fetch_object

(No version information available, might only be in Git)

sqlsrv_fetch_object — Отримує наступний рядок даних у наборі
результатів як об'єкт

### Опис

**sqlsrv_fetch_object**(
resource `$stmt`,
string `$className` u003d ?,
array `$ctorParams` u003d ?,
int `$row` u003d ?,
int `$offset` u003d ?
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Витягує наступний рядок даних у наборі результатів як екземпляр
зазначеного класу з властивостями, що відповідають іменам полів рядка та
значенням, які відповідають значенням полів рядка.

### Список параметрів

`stmt`
Ресурс оператора, що повертається
[sqlsrv_query()](function.sqlsrv-query.md) або
[sqlsrv_execute()](function.sqlsrv-execute.md).

`className`
Назва класу для створення екземпляра. Якщо ім'я класу не вказано,
створюється екземпляр stdClass.

`ctorParams`
Значення, що передаються конструктору зазначеного класу. Якщо конструктор
зазначеного класу приймає параметри, необхідно надати масив
ctorParams.

`row`
Рядок, до якого потрібно отримати доступ. Параметр можна використовувати
тільки в тому випадку, якщо вказаний оператор був підготовлений за допомогою
курсора з можливістю прокручування. У цьому випадку цей параметр може
приймати одне з наступних значень:

- SQLSRV_SCROLL_NEXT
- SQLSRV_SCROLL_PRIOR
- SQLSRV_SCROLL_FIRST
- SQLSRV_SCROLL_LAST
- SQLSRV_SCROLL_ABSOLUTE
- SQLSRV_SCROLL_RELATIVE

`offset`
Вказує рядок, до якого буде здійснюватися доступ, якщо для
параметра рядка встановлено значення **`SQLSRV_SCROLL_ABSOLUTE`** або
**`SQLSRV_SCROLL_RELATIVE`**. Зверніть увагу, що перший рядок у
Набір результатів має індекс 0.

### Значення, що повертаються

У разі успішного виконання повертає об'єкт, **`null`**, якщо у
наборі результатів більше немає рядків і **`false`** у разі виникнення
помилки або якщо зазначений клас не існує.

### Приклади

**Приклад #1 Приклад використання **sqlsrv_fetch_object()****

У цьому прикладі показано, як отримати рядок як об'єкт stdClass.

` <?php$serverName u003d "serverName\sqlexpress";$connectionInfo u003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password");$conn u003d sqlsrv_connect ( $serverName, $connectionInfo);if( $conn u003du003du003d false ) {     die( print_r( sqlsrv_errors(), true));}$sql u003d "SELECT fName, lName , $sql);if( $stmt u003du003du003d false ) {     die( print_r( sqlsrv_errors(), true));}//Отримання кожного будьякбудь як будь як| .// Імена властивостей відповідають іменам полів.while( $obj u003d sqlsrv_fetch_object( $stmt)) {     echo$obj->fName.", ".

### Примітки

Якщо ім'я класу вказано з необов'язковим параметром $className та у
класу є властивості, імена яких збігаються з іменами полів набору
результатів, до властивостей застосовуються відповідні значення набору
результатів. Якщо ім'я поля набору результатів не відповідає властивості
класу, властивість з ім'ям поля набору результатів додається до об'єкта,
а значення набору результатів застосовується до якості. При використанні
параметра $className застосовуються такі правила:

- При зіставленні імен властивостей поля враховується регістр.
- Зіставлення властивостей поля відбувається незалежно від модифікаторів
доступу.
- Типи даних властивостей класу ігноруються під час застосування значення поля
до якості.
- Якщо клас не існує, функція повертає **`false`** та додає
помилки в колекції помилок.

Незалежно від того, чи вказано параметр $className, якщо повертається
поле без імені, значення поля буде проігноровано, а колекцію
помилок буде додано попередження.

При використанні набору результатів, що містить кілька стовпців з
однаковим ім'ям, можливо краще використовувати
[sqlsrv_fetch_array()](function.sqlsrv-fetch-array.md) або комбінацію
[sqlsrv_fetch()](function.sqlsrv-fetch.md) та
[sqlsrv_get_field()](function.sqlsrv-get-field.md).

### Дивіться також

- [sqlsrv_fetch()](function.sqlsrv-fetch.md) - Робить таку
рядок у наборі результатів доступного для читання
- [sqlsrv_fetch_array()](function.sqlsrv-fetch-array.md) -
Повертає рядок як масив
