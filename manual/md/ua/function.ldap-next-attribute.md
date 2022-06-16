- [«ldap_modify](function.ldap-modify.md)
- [ldap_next_entry »](function.ldap-next-entry.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Отримати наступний атрибут із результату

#ldap_next_attribute

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_next_attribute — Отримати наступний атрибут із результату

### Опис

**ldap_next_attribute**([LDAP\Connection](class.ldap-connection.md)
`$ldap`, LDAP\ResultEntry `$entry`): string\|false

Повертає атрибути запису. Перший виклик **ldap_next_attribute()**
виробляється з параметром `entry`, який повертається
[ldap_first_attribute()](function.ldap-first-attribute.md).

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`entry`
Примірник [LDAP\ResultEntry](class.ldap-result-entry.md).

`ber_identifier`
Внутрішній стан вказівника зберігається цим параметром.

> **Примітка**:
>
> Параметр більше не використовується, оскільки це тепер обробляється
> PHP автоматично. Для зворотної сумісності PHP не викидатиме
> помилку, якщо цей параметр буде передано.

### Значення, що повертаються

Повертає наступний атрибут запису у разі успішного виконання та
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `entry` тепер чекає на екземпляр [LDAP\ResultEntry](class.ldap-result-entry.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [ldap_get_attributes()](function.ldap-get-attributes.md) -
Отримує атрибути із запису в результатах пошуку
