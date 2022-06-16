- [«curl_unescape](function.curl-unescape.md)
- [CurlHandle »](class.curlhandle.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Повертає версію cURL

#curl_version

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

curl_version - Повертає версію cURL

### Опис

**curl_version**(): array\|false

Повертає інформацію про версію cURL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає асоціативний масив із такими елементами:

| Ключ | Опис |
|--------------------|---------------------------- ---------------|
| version_number | 24-розрядний номер версії cURL |
| version | Номер версії cURL у вигляді рядка |
| ssl_version_number | 24-розрядний номер версії OpenSSL |
| ssl_version | Номер версії OpenSSL у вигляді рядка |
| libz_version | Номер версії zlib у вигляді рядка |
| host | Інформація про хост, де зібрано cURL |
| age | |
| features | бітова маска констант `CURL_VERSION_XXX` |
| protocols Масив підтримуваних протоколів cURL

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | Необов'язковий параметр age видалено. |
| 7.4.0 | Необов'язковий параметр `age` оголошено застарілим; якщо передано значення, то воно ігнорується. |

### Приклади

**Приклад #1 Приклад використання **curl_version()****

Цей приклад перевірить, які можливості підтримує ця збірка cURL
за допомогою бітової маски ``features'`, що повертається функцією
**curl_version()**.

` <?php// Получаем массив с информацией о версии curl$version u003d curl_version();// Это битовые поля, которые можно использовать// для проверки возможностей сборки curl$bitfields u003d Array(            'CURL_VERSION_IPV6',            'CURL_VERSION_KERBEROS4',            ' CURL_VERSION_SSL',            'CURL_VERSION_LIBZ'            );foreach($bitfields as $feature){   | ($version['features'] & constant($feature) ? ' є' : ' ні'); echo PHP_EOL;}?> `
