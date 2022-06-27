- [«file://](wrappers.file.md)
- [ftp://»](wrappers.ftp.md)

- [PHP Manual](index.md)
- [Підтримувані протоколи та обгортки](wrappers.md)
- Доступ до URL-адрес за протоколом HTTP(s)

# http://

# https://

http:// -- https:// — Доступ до URL-адрес за протоколом HTTP(s)

### Опис

Надає доступ лише для читання файлів/ресурсів через HTTP. за
використовується HTTP 1.0 GET. Для підтримки віртуальних хостів на
На основі імен разом із запитом надсилається заголовок `Host:`. Якщо ви
сконфігурували рядок
[user_agent](filesystem.configuration.md#ini.user-agent), використовуючи
ваш файл `php.ini` або контекст потоку, то вона також буде включена до
запит.

Цей потік також дозволяє отримати доступ до вмісту ресурсу;
заголовки зберігаються у змінній `$http_response_header`.

Якщо важливо знати URL, з якого було отримано документ (після всіх
переадресацій, які були зроблені), то вам необхідно обробити
серію заголовків відповідей, що повертаються потоком.

INI-директива [from](filesystem.configuration.md#ini.from) буде
використовуватись для заголовка `From:`, якщо встановлена і не
перевизначена в контексті [Контекстні опції та
параметри](context.md).

### Використання

- `http://example.com`
- `http://example.com/file.php?var1u003dval1&var2u003dval2`
- `http://user:password@example.com`
- `https://example.com`
- `https://example.com/file.php?var1u003dval1&var2u003dval2`
- `https://user:password@example.com`

### Опції

| Атрибут Підтримка
|------------------------------------------------- ------------------------------------|------------|
| Обмеження на [allow_url_fopen](filesystem.configuration.md#ini.allow-url-fopen) | Так |
| Читання | Так |
| Запис | Ні |
| Додавання | Ні |
| Одночасне читання та запис | Недоступний |
| Підтримка [stat()](function.stat.md) | Ні |
| Підтримка [unlink()](function.unlink.md) | Ні |
| Підтримка [rename()](function.rename.md) | Ні |
| Підтримка [mkdir()](function.mkdir.md) | Ні |
| Підтримка [rmdir()](function.rmdir.md) | Ні |

**Основна інформація**

### Приклади

**Приклад #1 Визначення URL, з якого було забрано документ після
переадресацій**

` <?php$url u003d 'http://www.example.com/redirecting_page.php';$fp u003d fopen($url, 'r');$meta_data u003d stream_get_meta_data($fp);foreach ($meta_data[ 'wrapper_data'] as $response) {    /* Були або ми переадресовані? */   if (strtolower(substr($response, 0, 10)) u003du003d 'location: ') {        /* Зберегти в $url адрес,            ¦ }}?> `

### Примітки

> **Примітка**: Протокол HTTPS підтримується лише коли модуль
> [openssl](book.openssl.md) увімкнено.

З'єднання HTTP призначені лише для читання; запис даних або
копіювання файлів у HTTP-ресурс не підтримується.

Надсилання запитів *POST* і *PUT*, наприклад, може бути виконано з
за допомогою [HTTP-контексту](context.http.md).

### Дивіться також

- [Опції контексту HTTP](context.http.md)
- `$http_response_header`
- [stream_get_meta_data()](function.stream-get-meta-data.md) -
Витягує заголовок/метадані з потоків/файлових покажчиків
