- [« ldap_explode_dn](function.ldap-explode-dn.md)
- [ldap_first_entry »](function.ldap-first-entry.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Повернути перший атрибут

#ldap_first_attribute

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_first_attribute — Повернути перший атрибут

### Опис

**ldap_first_attribute**([LDAP\Connection](class.ldap-connection.md)
`$ldap`, LDAP\ResultEntry `$entry`): string\|false

Отримує перший атрибут у цьому записі. Атрибути, що залишаються, виходять
послідовним викликом
[ldap_next_attribute()](function.ldap-next-attribute.md).

Подібно до читання записів, атрибути також читаються один за одним з
окремий елемент.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`entry`
Примірник [LDAP\ResultEntry](class.ldap-result-entry.md).

`ber_identifier`
`ber_identifier` є ідентифікатором внутрішнього покажчика осередку
пам'яті. Він передається за посиланням. Також `ber_identifier` передається в
[ldap_next_attribute()](function.ldap-next-attribute.md), яка
змінює цей покажчик.

> **Примітка**:
>
> Цей параметр не використовується, оскільки тепер автоматично
> обробляється PHP. Для цілей зворотної сумісності PHP не видає
> помилку, якщо цей параметр все ж таки передається.

### Значення, що повертаються

Повертає перший атрибут у записі, у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `entry` тепер чекає на екземпляр [LDAP\ResultEntry](class.ldap-result-entry.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [ldap_next_attribute()](function.ldap-next-attribute.md) -
Отримати наступний атрибут із результату
- [ldap_get_attributes()](function.ldap-get-attributes.md) -
Отримує атрибути із запису в результатах пошуку
