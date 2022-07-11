- [«curl_setopt](function.curl-setopt.md)
- [curl_share_errno »](function.curl-share-errno.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Закрити оброблюваний обробник cURL

#curl_share_close

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

curl_share_close — Закрити роздільний обробник cURL

### Опис

**curl_share_close**([CurlShareHandle](class.curlsharehandle.md)
`$share_handle`): void

> **Примітка**:
>
> Використання функції не має сенсу. До PHP 8.0.0 вона
> використовувалася закриття ресурсу.

Закриває оброблюваний обробник cURL і вивільняє всі його ресурси.

### Список параметрів

`share_handle`
Обробник, що розділяється, cURL, що повертається
[curl_share_init()](function.curl-share-init.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------------------------|
| 8.0.0 | `share_handle` expects a [CurlShareHandle](class.curlsharehandle.md) instance now; Попередньо, як ресурс був виявлений. |

### Приклади

**Приклад #1 Приклад використання
[curl_share_setopt()](function.curl-share-setopt.md)**

У цьому прикладі ми створюємо оброблюваний обробник cURL, додаємо в нього
два звичайні обробники і запускаємо їх. Вони будуть використовувати одні й ті
ж кукі.

` <?php// Создаём разделяемый обработчик и настраиваем его на обмен куками$sh u003d curl_share_init();curl_share_setopt($sh, CURLSHOPT_SHARE, CURL_LOCK_DATA_COOKIE);// Инициализируем первый обработчик cURL и связываем его с разделяемым$ch1 u003d curl_init("http ://example.com/");curl_setopt($ch1, CURLOPT_SHARE, $sh);// Запускаємо перший запитcurl_exec($ch1);// Ініціалізуємо другий обробник curl і зв'язуємо | //php.net/");curl_setopt($ch2, CURLOPT_SHARE, $sh);// Запускаємо другий обробник.// Йому будуть доступні все| sh);// Закриваємо обидва звичайних обробникаcurl_close($ch1);curl_close($ch2);?> `

### Дивіться також

- [curl_share_init()](function.curl-share-init.md) - Ініціалізація
оброблюваного обробника cURL
