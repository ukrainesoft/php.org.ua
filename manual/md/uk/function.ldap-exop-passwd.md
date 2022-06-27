- [«ldap_escape](function.ldap-escape.md)
- [ldap_exop_refresh »](function.ldap-exop-refresh.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Обертка для розширеної операції PASSWD

#ldap_exop_passwd

(PHP 7 \>u003d 7.2.0, PHP 8)

ldap_exop_passwd — Обертка для розширеної операції PASSWD

### Опис

**ldap_exop_passwd**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
string `$user` u003d "",
string `$old_password` u003d "",
string `$new_password` u003d "",
array `&$controls` u003d **`null`**
): string\|bool

Виконує розширену операцію PASSWD.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`user`
Унікальне ім'я користувача (DN), для якого змінюється пароль.

`old_password`
Старий пароль. Залежно від конфігурації можна опустити.

`new_password`
Новий пароль. Може бути опущений або заданий порожнім для автогенерації
пароля.

`controls`
Якщо задано, то із запитом буде передано запит парольної політики і це
поле буде заповнено масивом [керуючих констант
LDAP](ldap.controls.md), повернутим запитом.

### Значення, що повертаються

Повертає новий пароль, якщо параметр `new_password` не заданий, або
заданий порожнім. Інакше повертає **`true`** або **`false`**, залежно
від успішності виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `controls` тепер припускає значення null; раніше значення за промовчанням було `[]`. |
| 7.3 | Додано підтримку параметра `controls` |

### Приклади

**Приклад #1 Розширена операція PASSWD**

`<?php$ds u003d ldap_connect("localhost"); // припустимо, що сервер LDAP запущено локальноif ($ds) {     // Прив'язуємось до потрібного DN   $bind u003d ldap_bind($ds, cnu003ds; if (!$bind) {      echo "Неможливо здійснити прив'язку LDAP"; exit; }    // Використовуємо PASSWD EXOP для зміни пароля користувача на новий випадковий    $genpw u003d ldap_exop_passwd($ds, cnu003ds c| if ($genpw) {       // Використовуємо для прив'язки новий пароль      $bind u003dldap_bind($ds, "cnu003droot, ou003dMy $; }    // Повертаємо старий пароль "secret"   ldap_exop_passwd($ds, "cnu003droot, ou003dMy Company, cu003dUS", $genpw, "secret"); ldap_close($ds);} else {    echo "Неможливо з'єднатися з сервером LDAP";}?> `

### Дивіться також

- [ldap_exop()](function.ldap-exop.md) - Виконати розширену
операцію
- [ldap_parse_exop()](function.ldap-parse-exop.md) - Розбір
результуючого об'єкта виконання розширеної операції LDAP
