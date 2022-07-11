- [«oci_pconnect](function.oci-pconnect.md)
- [oci_result »](function.oci-result.md)

- [PHP Manual](index.md)
- [OCI8 Функції](ref.oci8.md)
- Реєструє функцію зворотного виклику для Oracle
Database TAF

#oci_register_taf_callback

(PHP 7.0 \>u003d 7.0.21, PHP 8, PHP 7 \>u003d 7.1.7, PHP 8, PECL OCI8 \>u003d 2.1.7)

oci_register_taf_callback — Реєструє функцію користувача
зворотного дзвінка для Oracle Database TAF

### Опис

**oci_register_taf_callback**(resource `$connection`,
?[callable](language.types.callable.md) `$callback`): bool

Реєструє функцію зворотного дзвінка для з'єднання
`connection`. Якщо з'єднання `connection` обірвалося через проблеми з БД
або мережею, буде здійснено кілька запусків зареєстрованої
функції у процесі відновлення. Докладніше читайте [OCI8
Transparent Application Failover (TAF) Support](oci8.taf.md) .

Кожен новий виклик **oci_register_taf_callback()** затиратиме
Попередні реєстрації.

Для явного видалення реєстрації використовуйте функцію
[oci_unregister_taf_callback()](function.oci-unregister-taf-callback.md).

Реєстрація функції зворотного дзвінка НЕ зберігається для постійних
з'єднань, отже при кожному новому постійному з'єднанні її
необхідно перереєструвати.

### Список параметрів

`connection`
Ідентифікатор з'єднання Oracle.

`callback`
Функція реєстрації для Oracle TAF. Можливо як
рядком з іменем функції, і замиканням (анонімною функцією).

Інтерфейс функції наступний:

**userCallbackFn**(resource `$connection`, int `$event`, int `$type`):
int

Опис параметрів та приклади дивіться на сторінці [OCI8 Transparent
Application Failover (TAF) Support](oci8.taf.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [oci_unregister_taf_callback()](function.oci-unregister-taf-callback.md) -
Видалити реєстрацію користувача callback-функції для Oracle
Database TAF
