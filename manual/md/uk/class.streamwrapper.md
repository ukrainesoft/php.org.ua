- [« php_user_filter::onCreate](php-user-filter.oncreate.md)
- [streamWrapper::\_\_construct »](streamwrapper.construct.md)

- [PHP Manual](index.md)
- [Потоки](book.stream.md)
- Клас streamWrapper

# Клас streamWrapper

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

## Вступ

Дозволяє реалізовувати власні обробники протоколів та потоків для
подальшого використання з усіма функціями роботи з файловою
системою (такими як [fopen()](function.fopen.md),
[fread()](function.fread.md) тощо.

> **Примітка**:
>
> Це *НЕ* реальний клас, а лише прототип, наданий як
> наочного посібника.

> **Примітка**:
>
> Реалізація методів, відмінна від описаної тут, може призвести до
> невизначеному поведінці.

Об'єкт класу ініціалізується у той час, коли потокова функція
намагається отримати доступ до протоколу, з яким асоційований цей клас.

## Огляд класів

class streamWrapper {

/\* Властивості \*/

public resource `$context`;

/\* Методи \*/

public [\_\_construct](streamwrapper.construct.md)()

public [dir_closedir](streamwrapper.dir-closedir.md)(): bool

public [dir_opendir](streamwrapper.dir-opendir.md)(string `$path`, int
`$options`): bool

public [dir_readdir](streamwrapper.dir-readdir.md)(): string

public [dir_rewinddir](streamwrapper.dir-rewinddir.md)(): bool

public [mkdir](streamwrapper.mkdir.md)(string `$path`, int `$mode`,
int `$options`): bool

public [rename](streamwrapper.rename.md)(string `$path_from`, string
`$path_to`): bool

public [rmdir](streamwrapper.rmdir.md)(string `$path`, int
`$options`): bool

public [stream_cast](streamwrapper.stream-cast.md)(int `$cast_as`):
resource

public [stream_close](streamwrapper.stream-close.md)(): void

public [stream_eof](streamwrapper.stream-eof.md)(): bool

public [stream_flush](streamwrapper.stream-flush.md)(): bool

public [stream_lock](streamwrapper.stream-lock.md)(int `$operation`):
bool

public [stream_metadata](streamwrapper.stream-metadata.md)(string
`$path`, int `$option`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

public [stream_open](streamwrapper.stream-open.md)(
string `$path`,
string `$mode`,
int `$options`,
?string `&$opened_path`
): bool

public [stream_read](streamwrapper.stream-read.md)(int `$count`):
string\|false

public [stream_seek](streamwrapper.stream-seek.md)(int `$offset`, int
`$whence` u003d SEEK_SET): bool

public [stream_set_option](streamwrapper.stream-set-option.md)(int
`$option`, int `$arg1`, int `$arg2`): bool

public [stream_stat](streamwrapper.stream-stat.md)(): array\|false

public [stream_tell](streamwrapper.stream-tell.md)(): int

public [stream_truncate](streamwrapper.stream-truncate.md)(int
`$new_size`): bool

public [stream_write](streamwrapper.stream-write.md)(string `$data`):
int

public [unlink](streamwrapper.unlink.md)(string `$path`): bool

public [url_stat](streamwrapper.url-stat.md)(string `$path`, int
`$flags`): array\|false

public [\_\_destruct](streamwrapper.destruct.md)()

}

## Властивості

resource `context`
Поточний [контекст](context.md) або **`null`**, якщо в зухвалу
функцію не було передано жодного контексту.

Використовуйте функцію
[stream_context_get_options()](function.stream-context-get-options.md)
для аналізу та розбору контексту.

> **Примітка**:
>
> Ця властивість *має* бути загальнодоступною (мати модифікатор public),
> щоб PHP міг асоціювати його з актуальним контекстом.

## Дивіться також

- [Приклад класу, зареєстрованого як обгортка
потоку](stream.streamwrapper.example-1.md)
- [stream_wrapper_register()](function.stream-wrapper-register.md)
- [stream_wrapper_unregister()](function.stream-wrapper-unregister.md)
- [stream_wrapper_restore()](function.stream-wrapper-restore.md)

## Зміст

- [streamWrapper::\_\_construct](streamwrapper.construct.md) -
Створює новий об'єкт обертання потоку
- [streamWrapper::\_\_destruct](streamwrapper.destruct.md) -
Знищує існуючу обгортку потоку
- [streamWrapper::dir_closedir](streamwrapper.dir-closedir.md) -
Закрити дескриптор директорії
- [streamWrapper::dir_opendir](streamwrapper.dir-opendir.md) -
Відкрити дескриптор директорії
- [streamWrapper::dir_readdir](streamwrapper.dir-readdir.md) -
Читання запису з дескриптора директорії
- [streamWrapper::dir_rewinddir](streamwrapper.dir-rewinddir.md) -
Дескриптор директорії переміщення на її початок
- [streamWrapper::mkdir](streamwrapper.mkdir.md) — Створення
директорії
- [streamWrapper::rename](streamwrapper.rename.md) - Перейменовує
файл або директорію
- [streamWrapper::rmdir](streamwrapper.rmdir.md) — Видалити
директорію
- [streamWrapper::stream_cast](streamwrapper.stream-cast.md) -
Отримує ресурс рівнем нижче
- [streamWrapper::stream_close](streamwrapper.stream-close.md) -
Закриває ресурс
- [streamWrapper::stream_eof](streamwrapper.stream-eof.md)
Перевіряє досягнення кінця файлу за файловим покажчиком
- [streamWrapper::stream_flush](streamwrapper.stream-flush.md)
Скидає висновок
- [streamWrapper::stream_lock](streamwrapper.stream-lock.md) -
Консультативне блокування файлу
- [streamWrapper::stream_metadata](streamwrapper.stream-metadata.md)
— Змінює метадані потоки
- [streamWrapper::stream_open](streamwrapper.stream-open.md)
Відкриває файл або URL
- [streamWrapper::stream_read](streamwrapper.stream-read.md) -
Читає із потоку
- [streamWrapper::stream_seek](streamwrapper.stream-seek.md) -
Переміщення на задану позицію у потоці
- [streamWrapper::stream_set_option](streamwrapper.stream-set-option.md)
— Зміна настройок потоку
- [streamWrapper::stream_stat](streamwrapper.stream-stat.md) -
Отримання інформації про файловий ресурс
- [streamWrapper::stream_tell](streamwrapper.stream-tell.md)
Визначення поточної позиції потоку
- [streamWrapper::stream_truncate](streamwrapper.stream-truncate.md)
- Усічення потоку
- [streamWrapper::stream_write](streamwrapper.stream-write.md) -
Запис у потік
- [streamWrapper::unlink](streamwrapper.unlink.md) — Видалення файлу
- [streamWrapper::url_stat](streamwrapper.url-stat.md) — Отримання
інформації про файл
