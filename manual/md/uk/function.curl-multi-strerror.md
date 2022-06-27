- [«curl_multi_setopt](function.curl-multi-setopt.md)
- [curl_pause »] (function.curl-pause.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Повертає рядок, що описує помилку

#curl_multi_strerror

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

curl_multi_strerror — Повертає рядок, що описує помилку

### Опис

**curl_multi_strerror**(int `$error_code`): ?string

Повертає текст повідомлення про помилку, що відповідає заданому коду
помилки CURLM.

### Список параметрів

`error_code`
Одна та констант [» кодів помилок
CURLM](http://curl.haxx.se/libcurl/c/libcurl-errors.md).

### Значення, що повертаються

Повертає рядок з описом помилки та **`null`**, якщо переданий код
некоректний.

### Приклади

**Приклад #1 Приклад використання **curl_multi_strerror()****

` <?php// Створюємо обробники curl$ch1 u003d curl_init("http://example.com/");$ch2 u003d curl_init("http://php.net/");// Створюємо множинний обробник cUR$ mh u003d curl_multi_init();// Добавляем дескрипторы в набор дескрипторовcurl_multi_add_handle($mh, $ch1);curl_multi_add_handle($mh, $ch2);// Запускаем множественный обработчикdo {    $status u003d curl_multi_exec($mh, $active); if ($active) {        curl_multi_select($mh); }} while ($active && $status u003du003du003du003dCURLM_OK);// Перевіряємо на помилкиif ($status !u003d CURLM_OK) {    // Виводимо Помилка|
"curl_multi_strerror($status);}?> `

### Дивіться також

- [curl_strerror()](function.curl-strerror.md) - Отримати текстове
опис для коду помилки
- [» коди помилок
cURL](http://curl.haxx.se/libcurl/c/libcurl-errors.md)
