- [« ldap_free_result](function.ldap-free-result.md)
- [ldap_get_dn »](function.ldap-get-dn.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Отримує атрибути із запису в результатах пошуку

#ldap_get_attributes

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_get_attributes — Отримує атрибути із запису в результатах пошуку

### Опис

**ldap_get_attributes**([LDAP\Connection](class.ldap-connection.md)
`$ldap`, LDAP\ResultEntry `$entry`): array

Читає атрибути та значення із запису в результатах пошуку.

Визначивши місцезнаходження певного запису в каталозі, ви можете
дізнатися, яка інформація зберігається для цього запису, використовуючи цю функцію.
Ви повинні використовувати цю функцію для програми, яка
"переглядає" записи каталогу та/або де структура записів каталогу
невідома. У багатьох програмах ви будете шукати певний атрибут,
такий як адреса електронної пошти або прізвище, не торкаючись інших
дані.

return_value["count"] u003d число атрибутів у записі
return_value[0] u003d перший атрибут
return_value[n] u003d n-ий атрибут

return_value["attribute"]["count"] u003d число значень атрибута
return_value["attribute"][0] u003d перше значення атрибута
return_value["attribute"][i] u003d (i+1) значення атрибута

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`entry`
Примірник [LDAP\ResultEntry](class.ldap-result-entry.md).

### Значення, що повертаються

Повертає повну інформацію запису в багатовимірний масив у разі
успішного виконання та **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `entry` тепер чекає на екземпляр [LDAP\ResultEntry](class.ldap-result-entry.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Відображає список атрибутів, які відповідають визначеній
записи директорії**

` <?php// $ds - ідентифікатор посилання для директорії// $sr - дійсний результат Пошуку із запиту// к директорії ldap$entry u003d ldap_first_ent$$ );echo $attrs["count"] . " атрибути, відповідні цього запису:<p>";for ($iu003d0; $i < $attrs["count"]; $i++) {    echo $attrs[$i] . "<br />";}?> `

### Дивіться також

- [ldap_first_attribute()](function.ldap-first-attribute.md) -
Повернути перший атрибут
- [ldap_next_attribute()](function.ldap-next-attribute.md) -
Отримати наступний атрибут із результату
