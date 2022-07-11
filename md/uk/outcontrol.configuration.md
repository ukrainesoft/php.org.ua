- [« Встановлення](outcontrol.installation.md)
- [Типи ресурсів»] (outcontrol.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](outcontrol.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ---------------------------|---------------------- ------------------------------|-----------------|- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------|
| [output_buffering](outcontrol.configuration.md#ini.output-buffering) | "0" | PHP_INI_PERDIR | |
| [output_handler](outcontrol.configuration.md#ini.output-handler) | NULL | PHP_INI_PERDIR | |
| [implicit_flush](outcontrol.configuration.md#ini.implicit-flush) | "0" | PHP_INI_ALL | |
| [url_rewriter.tags](outcontrol.configuration.md#ini.url-rewriter.tags) | "au003dhref,areau003dhref,frameu003dsrc,formu003d,fieldsetu003d" | PHP_INI_ALL | До PHP 7.1.0 використовувалася для встановлення перезапису сесії "trans sid". З PHP 7.1.0 використовується лише [output_add_rewrite_var()](function.output-add-rewrite-var.md). |
| [url_rewriter.hosts](outcontrol.configuration.md#ini.url-rewriter.hosts) | `$_SERVER['HTTP_HOST']` використовується за замовчуванням. | PHP_INI_ALL | Доступно з PHP 7.1.0 |

**Конфігураційні опції керування висновком**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`output_buffering` bool/integer
Ви можете дозволити буферизацію виводу для всіх файлів, встановивши цю
директиву в 'On'. Якщо ви хочете обмежити розмір буфера до
певного розміру, ви можете встановити не 'On', а максимальне
кількість байт у цій директиві (наприклад, output_bufferingu003d4096). Ця
директива завжди відключена у PHP-CLI.

`output_handler` string
Ви можете перенаправити весь висновок вашого скрипта на функцію. Для
Наприклад, якщо ви встановите output_handler в
[mb_output_handler()](function.mb-output-handler.md), то кодування
символів прозоро перетворюється відповідно до зазначеного кодування.
Налаштування будь-якого обробника виводу автоматично включає буферизацію
виведення.

> **Примітка**:
>
> Ви не можете використовувати разом
> [mb_output_handler()](function.mb-output-handler.md) з
> [ob_iconv_handler()](function.ob-iconv-handler.md), і ви не можете
> використовувати разом [ob_gzhandler()](function.ob-gzhandler.md) та
> [zlib.output_compression](zlib.configuration.md#ini.zlib.output-compression).

> **Примітка**:
>
> Тільки вбудовані функції можуть використовуватись із цією директивою. Для
> функції, визначені користувачем, використовуйте
> [ob_start()](function.ob-start.md).

`implicit_flush` bool
**`false`** за замовчуванням. Зміна значення на **`true`** вказує PHP
не зберігати дані у буфер, а після кожного відправленого блоку
автоматично надсилати дані у вихідний шар. Це еквівалентно виклику
Функції PHP [flush()](function.flush.md) після кожного виклику
[print](function.print.md) або [echo](function.echo.md) для кожного
`HTML`-блоки.

При використанні PHP у веб-середовищі включення цієї опції призведе до
серйозної втрати продуктивності, тому рекомендується використовувати
її лише налагодження. Це значення за замовчуванням має **`true`** при
роботі в `CLI SAPI`.

Зморіть також [ob_implicit_flush()](function.ob-implicit-flush.md).

`url_rewriter.tags` string
`url_rewriter.tags` визначає, які HTML-теги будуть перезаписані
значеннями
[output_add_rewrite_var()](function.output-add-rewrite-var.md). за
замовчуванням `au003dhref,areau003dhref,frameu003dsrc,inputu003dsrc,formu003d` `form` є
спеціальним тегом. `<input hiddenu003d"session_id" nameu003d"session_name">`
додається як змінна форма.

> **Примітка**: До PHP 7.1.0 треба було використовувати
> [url_rewriter.tags](outcontrol.configuration.md#ini.url-rewriter.tags)
> для вказівки
> [session.trans_sid_tags](session.configuration.md#ini.session.trans-sid-tags).
> Починаючи з PHP 7.1.0, `fieldset` більше не розглядається як
> Спеціальний тег.

`url_rewriter.hosts` string
`url_rewriter.hosts` вказує, які хости перезаписуються для
включення значень
[output_add_rewrite_var()](function.output-add-rewrite-var.md). за
замовчуванням використовується `$_SERVER['HTTP_HOST']`. Кілька хостів можна
вказати перерахувавши їх через кому, між хостами не повинно бути
пробілів. Тобто `php.net,wiki.php.net,bugs.php.net`
