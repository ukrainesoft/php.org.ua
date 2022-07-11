- [« Веб-сервер LiteSpeed/OpenLiteSpeed на системах
Unix](install.unix.litespeed.md)
- [OpenBSD, зауваження щодо встановлення »](install.unix.openbsd.md)

- [PHP Manual](index.md)
- [Установка для Unix-системи](install.unix.md)
- Установка з інтерфейсами CGI та командного рядка

## Установка з інтерфейсами CGI та командного рядка

За замовчуванням, PHP збирається одночасно як CLI та CGI програма,
яка може бути використана для обробки CGI-запитів. PHP як
модуль сервера виграє у продуктивності, однак PHP CGI дозволяє
запускати PHP від користувача, відмінного від того, під яким
виконується сервер.

**Увага**

Використовуючи інсталяцію CGI, ваш сервер відкритий перед кількома можливими
вразливості. Будь ласка, ознайомтесь із розділом ["Безпека
CGI"](security.cgi-bin.md) щоб дізнатися, як можна захистити себе від
таких атак.

### Тестування

Якщо ви зібрали PHP як CGI, ви можете протестувати ваше складання
командою **make test**. Тестування вашої збірки – завжди гарна ідея.
Таким чином ви зможете раніше виявити проблеми PHP на вашій
платформи, а не боротися з ними пізніше.

### Використання змінних

Деякі [змінні оточення сервера](reserved.variables.server.md)
не визначено у поточній [» специфікації
CGI/1.1](http://www.faqs.org/rfcs/rfc3875). Визначено лише наступні
змінні: `AUTH_TYPE`, `CONTENT_LENGTH`, `CONTENT_TYPE`,
`GATEWAY_INTERFACE`, `PATH_INFO`, `PATH_TRANSLATED`, `QUERY_STRING`,
`REMOTE_ADDR`, `REMOTE_HOST`, `REMOTE_IDENT`, `REMOTE_USER`,
`REQUEST_METHOD`, `SCRIPT_NAME`, `SERVER_NAME`, `SERVER_PORT`,
`SERVER_PROTOCOL` та `SERVER_SOFTWARE`. Все інше має
оброблятись як додаткові модулі (vendor extensions).
