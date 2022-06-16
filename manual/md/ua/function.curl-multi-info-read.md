- [«curl_multi_getcontent](function.curl-multi-getcontent.md)
- [curl_multi_init »](function.curl-multi-init.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Повертає інформацію про поточні операції

#curl_multi_info_read

(PHP 5, PHP 7, PHP 8)

curl_multi_info_read — Повертає інформацію про поточні операції

### Опис

**curl_multi_info_read**([CurlMultiHandle](class.curlmultihandle.md)
`$multi_handle`, int `&$queued_messages` u003d **`null`**): array\|false

Опитує набір дескрипторів про наявність повідомлень чи інформації від
індивідуальні передачі. Повідомлення можуть включати таку інформацію як
код помилки передачі або просто факт завершення передачі.

Виклики цієї функції, що повторюються, щоразу повертатимуть новий
результат, поки не буде повернено **`false`** як сигнал
закінчення повідомлень. Ціле число, що міститься в `queued_messages`,
вказує кількість повідомлень, що залишилися після виклику цієї функції.

**Увага**

Дані, на які вказує ресурс, що повертається, будуть затерті викликом
[curl_multi_remove_handle()](function.curl-multi-remove-handle.md).

### Список параметрів

`multi_handle`
Мультидескриптор cURL, отриманий з
[curl_multi_init()](function.curl-multi-init.md).

`queued_messages`
Кількість повідомлень, що залишилися в черзі

### Значення, що повертаються

У разі успішного виконання повертає асоціативний масив повідомлень
або **`false`** у разі виникнення помилки.

| Ключ: | Значення: |
|----------|-------------------------------------- -------------------------------------------------- ------|
| `msg` | Константа **`CURLMSG_DONE`**. Інші значення, що повертаються, поки недоступні. |
| `result` | Одна із констант **`CURLE_*`**. Якщо все добре, результат буде константа **`CURLE_OK`**. |
| `handle` | Ресурс типу curl, що вказує на дескриптор, якого він належить. |

**Вміст повертається масиву**

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --------------------------------------|
| 8.0.0 | `multi_handle` тепер чекає екземпляр; раніше, очікувався ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **curl_multi_info_read()****

` <?php$urls u003d array(  "http://www.cnn.com/",  "http://www.bbc.co.uk/",  "http://www.yahoo.com/") ;$mh u003d curl_multi_init();foreach ($urls as $i u003d> $url) {    $conn[$i] u003d curl_init($url); curl_setopt($conn[$i], CURLOPT_RETURNTRANSFER, 1); curl_multi_add_handle($mh, $conn[$i]);}do {    $status u003d curl_multi_exec($mh, $active); if ($active) {        curl_multi_select($mh); }   while (false !u003du003d ($info u003d curl_multi_info_read($mh))) {        var_dump($info); }} while ($active && $status u003du003du003dCURLM_OK);foreach ($urls as $i u003d> $url) {    $res[$i] u003d curl_multi_getcontent($conn[$ curl_close($conn[$i]);}var_dump(curl_multi_info_read($mh));?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
["msg"]u003d>
int(1)
["result"]u003d>
int(0)
["handle"]u003d>
resource(5) of type (curl)
}
array(3) {
["msg"]u003d>
int(1)
["result"]u003d>
int(0)
["handle"]u003d>
resource(7) of type (curl)
}
array(3) {
["msg"]u003d>
int(1)
["result"]u003d>
int(0)
["handle"]u003d>
resource(6) of type (curl)
}
bool(false)

### Дивіться також

- [curl_multi_init()](function.curl-multi-init.md) - Створює набір
CURL-дескрипторів
