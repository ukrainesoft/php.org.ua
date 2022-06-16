- [«ldap_close](function.ldap-close.md)
- [ldap_connect »](function.ldap-connect.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Порівняти значення атрибута, знайденого у записі певної DN

#ldap_compare

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

ldap_compare — Порівняти значення атрибута, знайденого у записі
певної DN

### Опис

**ldap_compare**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
string `$dn`,
string `$attribute`,
string `$value`,
?array `$controls` u003d **`null`**
): bool\|int

Порівнює значення (`value`) атрибута (`attribute`) зі значенням того
ж атрибута у записі LDAP-директорії.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`dn`
Відмінне ім'я об'єкта LDAP.

`attribute`
Назва атрибута.

`value`
Порівнюване значення.

`controls`
Масив [керуючих констант LDAP](ldap.controls.md) для надсилання в
запит.

### Значення, що повертаються

Повертає **`true`** якщо `value` збігаються інакше
**`false`**. Повертає -1 у разі помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `controls` тепер припускає значення null; раніше значення за промовчанням було `[]`. |
| 7.3 | Додано підтримку параметра `controls` |

### Приклади

Наступний приклад демонструє, як перевірити, чи збігається цей
пароль з тим, який визначено у зазначеному записі DN.

**Приклад #1 Повний приклад перевірки пароля**

` <?php$dsu003dldap_connect("localhost"); // Предположим, что LDAP сервер находится по этому адресуif ($ds) {    // bind    if (ldap_bind($ds)) {        // подготовка данных        $dn u003d "cnu003dMatti Meikku, ouu003dMy Unit, ou003dMy Company , cu003dFI"; $valueu003du003d"secretpassword"; $attru003du003d"password"; // порівняння даних        $ru003dldap_compare($ds, $dn, $attr, $value); if ($r u003du003du003d -1) {            echo "Помилка: " . ldap_error($ds); } elseif ($r u003du003du003d true) {            echo "Пароль вірний."; } elseif ($r u003du003du003d false) {            echo "Неправильне припущення! Пароль не верен."; }    }}else {         echo "Неможливо прив'язатися до серверу LDAP."; }   ldap_close($ds);} else {    echo "Неможливо з'єднатися з сервером LDAP.";}?> `

### Примітки

**Увага**

**ldap_compare()** не може бути використана для порівняння бінарних
(BINARY) значень!
