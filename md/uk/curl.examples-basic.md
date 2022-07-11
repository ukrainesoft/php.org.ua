- [« Приклади](curl.examples.md)
- [Функції cURL »](ref.curl.md)

- [PHP Manual](index.md)
- [Приклади](curl.examples.md)
- Простий приклад використання curl

## Простий приклад використання curl

Як тільки ви зібрали PHP з підтримкою cURL, вже можна використовувати
функції CURL. Робота з cURL завжди починається з виклику
[curl_init()](function.curl-init.md), потім встановлюються
необхідні параметри за допомогою
[curl_setopt()](function.curl-setopt.md), і виконується потрібна
операція викликом [curl_exec()](function.curl-exec.md), після чого
викликом [curl_close()](function.curl-close.md) сеанс роботи
завершується. Наведений нижче приклад використовує функції cURL для
збереження стартової сторінки сайту example.com у файл:

**Приклад #1 Використання модуля cURL для збереження стартової сторінки
example.com**

` <?php$ch u003dcurl_init("http://www.example.com/");$fp u003dfopen("example_homepage.txt", "w");curl_setopt($ch, CURLOPT_FILE, $fp); curl_setopt($ch, CURLOPT_HEADER, 0); curl_exec ($ ch); if (curl_error ($ ch))  {    fwrite($fp, curl_error($ch)); ?> `
