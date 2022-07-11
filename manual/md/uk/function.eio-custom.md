- [«eio_close](function.eio-close.md)
- [eio_dup2 »] (function.eio-dup2.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Виконує запит користувача як будь-який інший eio\_\* виклик

#eio_custom

(PECL eio \>u003d 0.0.1dev)

eio_custom — Виконує запит користувача як будь-який інший
*eio\_\** виклик

### Опис

**eio_custom**(
[callable](language.types.callable.md) `$execute`,
int `$pri`,
[callable](language.types.callable.md) `$callback`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_custom()** виконує функцію користувача, визначену в
параметрі `execute` як будь-який інший виклик запитів *eio\_\**.

### Список параметрів

`execute`
Вказується функція, що відповідає нижченаведеному прототипу:

mixed execute(mixed data);

Параметр `callback` містить callback-функцію, що виконується за
завершення виконання запиту. Функція повинна відповідати прототипу:

void callback(mixed data, mixed result);

`data` - дані, що передаються в функцію, вказану в `execute` через
аргумент `data`, без будь-яких змін. `result` - значення,
повертається функцією у параметрі `execute`

`pri`
Пріоритет запитів: **`EIO_PRI_DEFAULT`**, **`EIO_PRI_MIN`**,
**`EIO_PRI_MAX`**, або **`null`**. Якщо переданий **`null`**, то `pri`
встановлюється у **`EIO_PRI_DEFAULT`**.

`callback`
Функція callback викликається при завершенні запиту. Вона повинна
задовольняти наступний прототип:

` void callback(mixed $data, int $result[, resource $req]);'

`data`
є даними користувача, переданими в запиті.

`result`
містить результуюче значення, що залежить від запиту; зазвичай це
значення, яке повертається відповідним системним викликом.

`req`
є опціональним запитуваним ресурсом, який може
використовуватися з такими функціями як
[eio_get_last_error()](function.eio-get-last-error.md)

`data`
Довільна змінна, що передається в `callback`-функцію.

### Значення, що повертаються

**eio_custom()** повертає вказівник на запит у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **eio_custom()****

` <?php/* Користувацька callback-функція */function my_custom_callback($data, $result) {    var_dump($data); var_dump(count($result)); var_dump($result['data_modified']); var_dump($result['result']);}/* Користувацький запит */function my_custom($data) {    var_dump($data); $result  u003d array(         'result'        u003d> 1001,       'data_modified' u003d> "my custom data", || return $result;}$datau003du003d"my_custom_data";$req u003d eio_custom("my_custom", EIO_PRI_DEFAULT, "my_custom_callback", $data);var_dump($req);eio_event_lo>

Результатом виконання цього прикладу буде щось подібне:

resource(4) of type (EIO Request Descriptor)
string(14) "my_custom_data"
string(14) "my_custom_data"
int(2)
string(14) "my custom data"
int(1001)
