- [«ldap_connect](function.ldap-connect.md)
- [ldap_control_paged_result
»](function.ldap-control-paged-result.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Отримати вказівник на поточну сторінку результуючого набору LDAP

#ldap_control_paged_result_response

(PHP 5 \>u003d 5.4.0, PHP 7)

ldap_control_paged_result_response — Отримати вказівник на поточну
сторінку результуючого набору LDAP

**Увага**

Функція була оголошена *УСТАРНІЙ* у PHP 7.4.0 та *Видалена* у PHP 8.0.0.
Замість неї слід використовувати параметр `controls`
[ldap_search()](function.ldap-search.md). Дивіться також [Управляючі
об'єкти LDAP](ldap.controls.md) для отримання додаткової
інформації.

### Опис

**ldap_control_paged_result_response**(
resource `$link`,
resource `$result`,
string `&$cookie` u003d ?,
int `&$estimated` u003d ?
): bool

Отримати вказівник на поточну сторінку LDAP.

### Список параметрів

`link`
Ресурс LDAP, який повертається функцією
[ldap_connect()](function.ldap-connect.md).

`result`

`cookie`
Непрозора структура, отримана з сервера.

`estimated`
Очікувана кількість записів для вилучення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|-------------------------------|
| 8.0.0 | Функцію було видалено. |
| 7.4.0 | Функція оголошена застарілою. |

### Дивіться також

- [ldap_control_paged_result()](function.ldap-control-paged-result.md) -
Надіслати серверу LDAP дані для використання посторінкового
отримання результату
- [» RFC2696 : Модуль управління LDAP для простих маніпуляцій
постранично повертається
результатом](http://www.faqs.org/rfcs/rfc2696)
