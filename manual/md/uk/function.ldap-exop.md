- [«ldap_exop_whoami](function.ldap-exop-whoami.md)
- [ldap_explode_dn »](function.ldap-explode-dn.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Виконати розширену операцію

#ldap_exop

(PHP 7 \>u003d 7.2.0, PHP 8)

ldap_exop — Виконати розширену операцію

### Опис

**ldap_exop**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
string `$reqoid`,
string `$reqdata` u003d **`null`**,
array `$serverctrls` u003d **`null`**,
string `&$retdata` u003d ?,
string `&$retoid` u003d ?
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Виконує розширену операцію для заданого `link` з OID операції
`reqoid` та даними `reqdata`.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`reqoid`
Ідентифікатор розширеної операції OID. Можна використовувати одну з
констант **`LDAP_EXOP_START_TLS`**, **`LDAP_EXOP_MODIFY_PASSWD`**,
**`LDAP_EXOP_REFRESH`**, **`LDAP_EXOP_WHO_AM_I`**, **`LDAP_EXOP_TURN`**
або рядок з OID необхідної операції.

`reqdata`
Дані для запиту на розширену операцію. Може бути **`null`** для
операцій типу **`LDAP_EXOP_WHO_AM_I`**. Може знадобитися закодувати
BER.

`serverctrls`
Масив [керуючих констант LDAP](ldap.controls.md) для посилки в
запит.

`retdata`
Якщо встановлено, то буде заповнено даними, отриманими в результаті
виконання операції. Якщо не встановлено, то для отримання даних можна
використовувати ldap_parse_exop для одержаного об'єкта.

`retoid`
Якщо встановлено, буде заповнено OID відповіді. Зазвичай збігається з OID
запиту.

### Значення, що повертаються

Якщо використовується з `retdata`, то повертає **`true`** або **`false`**.
Якщо використовується без `retdata`, то повертає ідентифікатор ресурсу
**`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 7.3 | Додана підтримка `serverctrls` |

### Приклади

**Приклад #1 Розширена операція Whoami**

`<?php$ds u003d ldap_connect("localhost"); // припустимо, що сервер LDAP запущено локальноif ($ds) {     // Прив'язуємось до потрібного DN   $bind u003d ldap_bind($ds, cnu003ds; if (!$bind) {     echo "Неможливо здійснити прив'язку LDAP"; exit; }    // Викликаємо WHOAMI EXOP    $r u003d ldap_exop($ds, LDAP_EXOP_WHO_AM_I); // Розбираємо отриману відповідь   ldap_parse_exop($ds, $r, $retdata); // Висновок: string (31) "dn: cn u003d root, o u003d My Company, c u003d US" | // То же саме, а з параметром $retdata    $success u003d ldap_exop($ds, LDAP_EXOP_WHO_AM_I, NULL, NULL, $retdata, $retoid); if ($success) {     var_dump($retdata); }   ldap_close($ds);} else {    echo "Неможливо з'єднатися з сервером LDAP";}?> `

### Дивіться також

- [ldap_parse_result()](function.ldap-parse-result.md) - Вийняти
інформацію з результату
- [ldap_parse_exop()](function.ldap-parse-exop.md) - Розбір
результуючого об'єкта виконання розширеної операції LDAP
- [ldap_exop_whoami()](function.ldap-exop-whoami.md) - Обгортка для
розширеної операції WHOAMI
- [ldap_exop_refresh()](function.ldap-exop-refresh.md) - Обгортка для
розширеної операції Refresh
- [ldap_exop_passwd()](function.ldap-exop-passwd.md) - Обгортка для
розширеної операції PASSWD
