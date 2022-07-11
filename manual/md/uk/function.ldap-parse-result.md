- [«ldap_parse_reference](function.ldap-parse-reference.md)
- [ldap_read »](function.ldap-read.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Витягти інформацію з результату

#ldap_parse_result

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

ldap_parse_result — Отримати інформацію з результату

### Опис

**ldap_parse_result**(
[LDAP\Connection](class.ldap-connection.md) `$ldap`,
[LDAP\Result](class.ldap-result.md) `$result`,
int `&$error_code`,
string `&$matched_dn` u003d **`null`**,
string `&$error_message` u003d **`null`**,
array `&$referrals` u003d **`null`**,
array `&$controls` u003d **`null`**
): bool

Обробляє результат пошуку LDAP.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`result`
Примірник [LDAP\Result](class.ldap-result.md), що повертається
[ldap_list()](function.ldap-list.md) або
[ldap_search()](function.ldap-search.md).

`error_code`
Посилання на змінну, якій надається код помилки LDAP, або `0`,
якщо ні помилки.

`matched_dn`
Посилання на змінну, якій надається знайдений DN, якщо він
визначається в запиті, інакше надається **`null`**.

`error_message`
Посилання на змінну, якій надається повідомлення про помилку LDAP,
або порожній рядок, якщо немає помилки.

`referrals`
Посилання на змінну, якій надається масив (array) з усіма
посилання (referral) у вигляді рядків, або порожній масив, якщо вони не були
повернуто.

`controls`
Масив (array) LDAP Controls, які були надіслані замість відповіді.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [LDAP\Result](class.ldap-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 7.3 | Додано підтримку параметра `controls` |

### Приклади

**Приклад #1 Приклад використання **ldap_parse_result()****

` <?php$result u003d ldap_search($link, "cnu003duserref,dcu003dmy-domain,dcu003dcom", "(cnu003duser*)");$errcode u003d $dn u003d $errmsg u003d $refs u003du003d null;if (ldap_parse_result($link, $result, $errcode, $dn, $errmsg, $refs)) {     // різні операції с $errcode, $dn, $|
