- [«curl_reset](function.curl-reset.md)
- [curl_setopt »] (function.curl-setopt.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Встановлює кілька параметрів для сеансу cURL

#curl_setopt_array

(PHP 5 \>u003d 5.1.3, PHP 7, PHP 8)

curl_setopt_array — Встановлює кілька параметрів для сеансу cURL

### Опис

**curl_setopt_array**([CurlHandle](class.curlhandle.md) `$handle`,
array `$options`): bool

Встановлює кілька параметрів для сеансу cURL. Ця функція корисна
при установці великої кількості cURL-параметрів без необхідності
постійно викликати [curl_setopt()](function.curl-setopt.md).

### Список параметрів

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

`options`
Масив (array), що визначає параметри, що встановлюються, і їх значення.
Ключі мають бути коректними константами для функції
[curl_setopt()](function.curl-setopt.md) або їх цілими
еквіваленти.

### Значення, що повертаються

Повертає **`true`**, якщо всі параметри успішно встановлені. Якщо
не вдалося успішно встановити будь-який параметр, негайно
повертається значення **`false`**, а наступні параметри у масиві
`options` будуть проігноровані.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |

### Приклади

**Приклад #1 Ініціалізація нової сесії cURL та завантаження веб-сторінки**

` <?php// создание нового ресурса cURL$ch u003d curl_init();// установка URL и других соответствующих параметров$options u003d array(CURLOPT_URL u003d> 'http://www.example.com/',                 CURLOPT_HEADER u003d> false );curl_setopt_array($ch, $options);// завантаження URL і еї видача в браузерcurl_exec($ch);// закриття ресурсу cURL і звільнення системних ресур$

### Примітки

> **Примітка**:
>
> Як і під час роботи з [curl_setopt()](function.curl-setopt.md),
> передача масиву до параметра **`CURLOPT_POST`** закодує всі дані з
> за допомогою *multipart/form-data*, тоді як передача URL-кодованої
> рядки використовуватиме кодування
> *application/x-www-form-urlencoded*.

### Дивіться також

- [curl_setopt()](function.curl-setopt.md) - Встановлює параметр
для сеансу CURL
