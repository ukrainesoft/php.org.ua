- [« Функціонал, оголошений застарілим у PHP
5.6.x](migration56.deprecated.md)
- [Нові функції »](migration56.new-functions.md)

- [PHP Manual](index.md)
- [Міграція з PHP 5.5.x на PHP 5.6.x](migration56.md)
- Змінені функції

## Змінені функції

### Ядро PHP

- [crypt()](function.crypt.md) тепер генерує попередження
**`E_NOTICE`**, якщо параметр `salt` опущений.
- [substr_compare()](function.substr-compare.md) тепер приймає
`0` як значення параметра `length`.
- [unserialize()](function.unserialize.md) тепер зазнає невдачі,
якщо передані серіалізовані дані, які були змінені в
спробі інстанціювати об'єкт без виклику конструктора.

### [cURL](book.curl.md)

- Завантаження на сервер з використанням синтаксису `@file` тепер
підтримується тільки якщо опція **`CURLOPT_SAFE_UPLOAD`**
встановлена в **`false`**. Натомість слід користуватися
[CURLFile](class.curlfile.md) .

### [Mcrypt](book.mcrypt.md)

- Параметр `source` функції
[mcrypt_create_iv()](function.mcrypt-create-iv.md) тепер має
значення за замовчуванням **`MCRYPT_DEV_URANDOM`** замість
**`MCRYPT_DEV_RANDOM`**.

### [OpenSSL](book.openssl.md)

-
[stream_socket_enable_crypto()](function.stream-socket-enable-crypto.md)
тепер дозволяє не вказувати параметр `crypto_type`, якщо контекст
потоку SSL включає нову опцію crypto_type.

### [PostgreSQL](book.pgsql.md)

- [pg_insert()](function.pg-insert.md),
[pg_select()](function.pg-select.md),
[pg_update()](function.pg-update.md) та
[pg_delete()](function.pg-delete.md) більше не є
експериментальними.
- [pg_send_execute()](function.pg-send-execute.md),
[pg_send_prepare()](function.pg-send-prepare.md),
[pg_send_query()](function.pg-send-query.md) та
[pg_send_query_params()](function.pg-send-query-params.md) більше
не блокуються до завершення запису запиту, якщо потік нижче
сокет для з'єднання з базою даних знаходиться в неблокуючому
режимі.

### [Reflection](book.reflection.md)

-
[ReflectionClass::newInstanceWithoutConstructor()](reflectionclass.newinstancewithoutconstructor.md)
тепер дозволяє створювати екземпляри з неостаточних (non-final)
внутрішні класи.

### [XMLReader](book.xmlreader.md)

- [XMLReader::getAttributeNs()](xmlreader.getattributens.md) та
[XMLReader::getAttributeNo()](xmlreader.getattributeno.md) тепер
повертають **`null`**, якщо атрибут не може бути знайдений, як це
робить [XMLReader::getAttribute()](xmlreader.getattribute.md).
