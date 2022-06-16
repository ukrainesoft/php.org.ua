- [«curl_share_errno](function.curl-share-errno.md)
- [curl_share_setopt »](function.curl-share-setopt.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Ініціалізація оброблюваного обробника cURL

#curl_share_init

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

curl_share_init — Ініціалізація роздільного обробника cURL

### Опис

**curl_share_init**(): [CurlShareHandle](class.curlsharehandle.md)

Дозволяє різним обробникам cURL ділитися даними один з одним.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає оброблюваний cURL.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- --------------------------|
| 8.0.0 | Функція повертає екземпляр [CurlShareHandle](class.curlsharehandle.md); раніше, повертався ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **curl_share_init()****

У цьому прикладі ми створюємо оброблюваний обробник cURL, додаємо в нього
два звичайні обробники і запускаємо їх. Вони будуть використовувати одні й ті
ж кукі.

` <?php// Создаём разделяемый обработчик и настраиваем его на обмен куками$sh u003d curl_share_init();curl_share_setopt($sh, CURLSHOPT_SHARE, CURL_LOCK_DATA_COOKIE);// Инициализируем первый обработчик cURL и связываем его с разделяемым$ch1 u003d curl_init("http ://example.com/");curl_setopt($ch1, CURLOPT_SHARE, $sh);// Запускаємо перший запитcurl_exec($ch1);// Ініціалізуємо другий обробник curl і зв'язуємо | //php.net/");curl_setopt($ch2, CURLOPT_SHARE, $sh);// Запускаємо другий обробник.// Йому будуть доступні все| sh);// Закриваємо обидва звичайних обробникаcurl_close($ch1);curl_close($ch2);?>

### Дивіться також

- [curl_share_setopt()](function.curl-share-setopt.md) - Встановити
опції оброблюваного cURL
- [curl_share_close()](function.curl-share-close.md) - Закрити
оброблюваний обробник cURL
