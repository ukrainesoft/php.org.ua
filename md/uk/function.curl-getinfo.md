- [«curl_file_create](function.curl-file-create.md)
- [curl_init»] (function.curl-init.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Повертає інформацію про певну операцію

#curl_getinfo

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

curl_getinfo — Повертає інформацію про певну операцію

### Опис

**curl_getinfo**([CurlHandle](class.curlhandle.md) `$handle`, ?int
`$option` u003d **`null`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає інформацію про останню операцію.

### Список параметрів

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

`option`
Одна з перерахованих констант:

- **`CURLINFO_EFFECTIVE_URL`** - Останній використаний URL
- **`CURLINFO_HTTP_CODE`** - Останній код відповіді. Починаючи з cURL
7.10.8, це застарілий псевдонім **`CURLINFO_RESPONSE_CODE`**
- **`CURLINFO_FILETIME`** - Видалена (серверна) дата завантаженого
документа, якщо включено опцію **`CURLOPT_FILETIME`**; якщо отримано
-1, значить цей час невідомо
- **`CURLINFO_TOTAL_TIME`** - Загальний час виконання транзакції в
секунди останньої передачі
- **`CURLINFO_NAMELOOKUP_TIME`** - Час дозволу імені сервера в
секундах
- **`CURLINFO_CONNECT_TIME`** - Час у секундах, витрачений на
встановлення з'єднання
- **`CURLINFO_PRETRANSFER_TIME`** - Час у секундах, що минув від
початку операції до готовності до фактичної передачі даних
- **`CURLINFO_STARTTRANSFER_TIME`** - Час у секундах до передачі
першого байта даних
- **`CURLINFO_REDIRECT_COUNT`** - Число перенаправлень з включеною
опцією **`CURLOPT_FOLLOWLOCATION`**
- **`CURLINFO_REDIRECT_TIME`** - Загальний час у секундах, витрачений
на перенаправлення до початку останньої транзакції із включеною
опцією **`CURLOPT_FOLLOWLOCATION`**
- **`CURLINFO_REDIRECT_URL`** - При відключеній опції
**`CURLOPT_FOLLOWLOCATION`**: URL перенаправлення, знайдений у
минулої ітерації, який необхідно вимагати вручну. Якщо опція
**`CURLOPT_FOLLOWLOCATION`** включено: порожнє значення. URL
перенаправлення в цьому випадку доступний
**`CURLINFO_EFFECTIVE_URL`**
- **`CURLINFO_PRIMARY_IP`** - IP-адреса останнього з'єднання
- **`CURLINFO_PRIMARY_PORT`** - Порт одержувача останнього з'єднання
- **`CURLINFO_LOCAL_IP`** - Локальна (вихідна) IP адреса останнього
з'єднання
- **`CURLINFO_LOCAL_PORT`** - Локальний (вихідний) порт останнього
з'єднання
- **`CURLINFO_SIZE_UPLOAD`** - Загальна кількість байт при закачуванні
- **`CURLINFO_SIZE_DOWNLOAD`** - Загальна кількість байт при завантаженні
- **`CURLINFO_SPEED_DOWNLOAD`** - Середня швидкість завантаження
- **`CURLINFO_SPEED_UPLOAD`** - Середня швидкість закачування
- **`CURLINFO_HEADER_SIZE`** - Сумарний розмір усіх отриманих
заголовків
- **`CURLINFO_HEADER_OUT`** - Надсилається рядок запиту. Для роботи
цього параметра, додайте опцію **`CURLINFO_HEADER_OUT`** до
дескриптору за допомогою виклику
[curl_setopt()](function.curl-setopt.md)
- **`CURLINFO_REQUEST_SIZE`** - Сумарний розмір усіх надісланих
запитів, в даний час використовується тільки для HTTP-запитів
- **`CURLINFO_SSL_VERIFYRESULT`** - Результат перевірки
SSL-сертифікат, запрошений за допомогою установки параметра
**`CURLOPT_SSL_VERIFYPEER`**
- **`CURLINFO_CONTENT_LENGTH_DOWNLOAD`** - розмір завантажених даних,
прочитаний із заголовка `Content-Length:`
- **`CURLINFO_CONTENT_LENGTH_UPLOAD`** - Розмір завантажуваних даних
- **`CURLINFO_CONTENT_TYPE`** - Вміст отриманого заголовка
`Content-Type:`. Якщо NULL, то сервер не надіслав правильний заголовок
`Content-Type:`
- **`CURLINFO_PRIVATE`** - Внутрішні дані, пов'язані з даними
cURL-обробником, раніше встановлені за допомогою опції
**`CURLOPT_PRIVATE`** у функції
[curl_setopt()](function.curl-setopt.md)
- **`CURLINFO_RESPONSE_CODE`** - Останній код повернення
- **`CURLINFO_HTTP_CONNECTCODE`** - Код відповіді операції CONNECT
- **`CURLINFO_HTTPAUTH_AVAIL`** - Бітова маска, що показує
можливі методи аутентифікації, доступні за попередньої відповіді
- **`CURLINFO_PROXYAUTH_AVAIL`** - Бітова маска, що показує
можливі методи аутентифікації на проксі, доступні при попередньому
відповіді
- **`CURLINFO_OS_ERRNO`** - Номер помилки під час спроби з'єднання. Код
може різнитися залежно від системи та ОС
- **`CURLINFO_NUM_CONNECTS`** - Кількість з'єднань, скоєних
curl для забезпечення попередньої передачі
- **`CURLINFO_SSL_ENGINES`** - Підтримка OpenSSL
- **`CURLINFO_COOKIELIST`** - Всі відомі куки
- **`CURLINFO_FTP_ENTRY_PATH`** - Шлях входу на FTP-сервер
- **`CURLINFO_APPCONNECT_TIME`** - Час у секундах від початку та до
встановлення SSL/SSH connect/handshake з віддаленим хостом
- **`CURLINFO_CERTINFO`** - зв'язування ключів TLS
- **`CURLINFO_CONDITION_UNMET`** - інформація про незадоволені
тимчасових умовах
- **`CURLINFO_RTSP_CLIENT_CSEQ`** - Наступний RTSP клієнтського CSeq
- **`CURLINFO_RTSP_CSEQ_RECV`** - Нещодавно отриманий CSeq
- **`CURLINFO_RTSP_SERVER_CSEQ`** - Наступний RTSP серверного CSeq
- **`CURLINFO_RTSP_SESSION_ID`** - ID сесії RTSP
- **`CURLINFO_CONTENT_LENGTH_DOWNLOAD_T`** - Content-length завантаження.
Це значення зчитується з поля `Content-Type:`. -1 якщо розмір не
відомий
- **`CURLINFO_CONTENT_LENGTH_UPLOAD_T`** - Вказаний розмір завантаження.
-1 якщо розмір не відомий
- **`CURLINFO_HTTP_VERSION`** - Версія, використана в останньому
HTTP-з'єднання. Значення, що повертається, буде однією з певних
констант **`CURL_HTTP_VERSION_*`** або 0, якщо версія не може бути
визначено
- **`CURLINFO_PROTOCOL`** - Протокол, використаний в останньому
HTTP-з'єднання. Значення, що повертається, буде точно одним із значень
**`CURLPROTO_*`**
- **`CURLINFO_PROXY_SSL_VERIFYRESULT`** - Результат перевірки
сертифіката, який було запитано (з використанням параметра
**`CURLOPT_PROXY_SSL_VERIFYPEER`**). Використовується тільки для
HTTPS-проксі
- **`CURLINFO_SCHEME`** - Схема URL, яка використовується для самого
останнього з'єднання
- **`CURLINFO_SIZE_DOWNLOAD_T`** - Загальна кількість завантажених байтів.
Номер призначений лише для останньої передачі та буде
скидатися для кожної нової передачі.
- **`CURLINFO_SIZE_UPLOAD_T`** - Загальна кількість завантажених байтів
- **`CURLINFO_SPEED_DOWNLOAD_T`** - Середня швидкість завантаження
байтах/секунду, виміряна для повного завантаження
- **`CURLINFO_SPEED_UPLOAD_T`** - Середня швидкість завантаження в
байтах/секунду, виміряна для повного завантаження
- **`CURLINFO_APPCONNECT_TIME_T`** - Час у мікросекундах, який
пройшло з самого початку доти, доки з'єднання/рукостискання
SSL/SSH не було завершено
- **`CURLINFO_CONNECT_TIME_T`** - Загальний час, що витрачається в
мікросекундах з початку до моменту підключення до віддаленого хосту
(або проксі-серверу)
- **`CURLINFO_FILETIME_T`** - Віддалений час вилученого документа
(як позначка часу Unix), альтернатива **`CURLINFO_FILETIME`**,
щоб дозволити системам з 32-бітними long-змінними вилучати
дати поза діапазоном 32-бітових тимчасових міток
- **`CURLINFO_NAMELOOKUP_TIME_T`** -в Час у мікросекундах від початку
до дозволу імені
- **`CURLINFO_PRETRANSFER_TIME_T`** - Час у мікросекундах,
витрачене від початку до початку передачі файлу
- **`CURLINFO_REDIRECT_TIME_T`** - Загальний час у мікросекундах,
яке потрібно для всіх кроків перенаправлення, включаючи пошук
імені, підключення, попереднє перенесення та передачу до запуску
остаточної транзакції
- **`CURLINFO_STARTTRANSFER_TIME_T`** - Час у мікросекундах,
яке пройшло від початку до отримання першого байта
- **`CURLINFO_TOTAL_TIME_T`** - Загальний час у мікросекундах для
попередньої передачі, включаючи роздільну здатність імен, TCP-з'єднання і т.д.

### Значення, що повертаються

Якщо параметр `option` вказаний, то його значення повертається. Інакше
повертається асоціативний масив із такими елементами (які
відповідають значенням аргументу `option`) або **`false`** у разі
виникнення помилки:

- "url"
- "content_type"
- "http_code"
- "header_size"
- "request_size"
- "filetime"
- "ssl_verify_result"
- "redirect_count"
- "total_time"
- "namelookup_time"
- "connect_time"
- "pretransfer_time"
- "size_upload"
- "size_download"
- "speed_download"
- "speed_upload"
- "download_content_length"
- "upload_content_length"
- "starttransfer_time"
- "redirect_time"
- "certinfo"
- "primary_ip"
- "primary_port"
- "local_ip"
- "local_port"
- "redirect_url"
- "request_header" (повертається лише за встановленої опції
**`CURLINFO_HEADER_OUT`** за допомогою виклику
[curl_setopt()](function.curl-setopt.md) до виконання запиту)

Врахуйте, що внутрішні дані не додаються в асоціативний масив та
повинні отримуватись окремо за допомогою опції **`CURLINFO_PRIVATE`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----|
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |
| 8.0.0 | `option` is nullable now; previously, the default був `0`. |
| 7.3.0 | Додані **`CURLINFO_CONTENT_LENGTH_DOWNLOAD_T`**, **`CURLINFO_CONTENT_LENGTH_UPLOAD_T`**, **`CURLINFO_HTTP_VERSION`**, **`CURLINFO_PROTOCOL`**, **`CURLINFO_PROXY_SSL_VERIF** *`CURLINFO_SIZE_DOWNLOAD_T`**, **`CURLINFO_SIZE_UPLOAD_T`**, **`CURLINFO_SPEED_DOWNLOAD_T`**, **`CURLINFO_SPEED_UPLOAD_T`**, **`CURLINFO_APPCONNECT_TI** ** CURLINFO_FILETIME_T`**, **`CURLINFO_NAMELOOKUP_TIME_T`**, **`CURLINFO_PRETRANSFER_TIME_T`**, **`CURLINFO_REDIRECT_TIME_T`**, **`CURLINFO_STARTTRANSFER_TIME_T`**,** |

### Приклади

**Приклад #1 Приклад використання **curl_getinfo()****

` <?php// Створюємо дескриптор cURL$ch u003d curl_init('http://www.example.com/');// Запускаємоcurl_exec($ch);// Перевіряємо наявність помилокif (!curl_errno $infou003dcurl_getinfo($ch); echo 'Пройшло ', $info['total_time'], ' секунд во час запиту к ', $info['url'], "
";}// Закриваємо дескрипторcurl_close($ch);?> `

**Приклад #2 Приклад використання **curl_getinfo()** з параметром
`option`**

` <?php// Створюємо дескриптор cURL$ch u003d curl_init('http://www.example.com/');// Запускаємоcurl_exec($ch);// Перевіряємо наявність помилокif (!curl_errno switch ($http_code u003d curl_getinfo($ch, CURLINFO_HTTP_CODE)) {   case 200:  # OK      break; default:     echo 'Несподіваний код HTTP: ', $http_code, "
";  }}// Закриваємо дескрипторcurl_close($ch);?> `

### Примітки

> **Примітка**:
>
> Інформація, зібрана цією функцією, буде збережена при подальшому
> Використання дескриптора. Це означає, що якщо статистика не буде
> перезаписана самою функцією, повертатиметься інформація по
> Попередній запит.
