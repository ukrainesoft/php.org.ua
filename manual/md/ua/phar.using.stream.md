- [« Використання Phar-архівів: Вступ](phar.using.intro.md)
- [Використання Phar-архівів: класи Phar та PharData
»](phar.using.object.md)

- [PHP Manual](index.md)
- [Використання Phar-архівів](phar.using.md)
- Використання Phar-архівів: обгортка потоку phar

## Використання Phar-архівів: обгортка потоку phar

Обгортка потоку Phar повністю підтримує
[fopen()](function.fopen.md) для читання та запису (не для додавання),
[unlink()](function.unlink.md), [stat()](function.stat.md),
[fstat()](function.fstat.md), [fseek()](function.fseek.md),
[rename()](function.rename.md) та потокові операції каталогів, такі
як [opendir()](function.opendir.md), [rmdir()](function.rmdir.md) та
[mkdir()](function.mkdir.md).

Також за допомогою контекстів потоку можна впливати на стиснення окремих
файлів та пофайлові метадані в Phar-архіві:

` <?php$context u003d stream_context_create(array('phar' u003d>                                    array('compress' u003d> Phar::GZ)),                                    array('metadata' u003d> array('user' u003d> 'cellog'))) ;file_put_contents('phar://my.phar/somefile.php', 0, $context);?> `

Обгортка потоку `phar` не працює з файлами, розташованими віддалено, та
не може з ними працювати, так що її використання можливе навіть коли
параметри INI
[allow_url_fopen](filesystem.configuration.md#ini.allow-url-fopen) та
[allow_url_include](filesystem.configuration.md#ini.allow-url-include)
вимкнено.

Незважаючи на наявність можливості створювати phar-архіви з нуля, просто
використовуючи потокові операції, найкращим рішенням буде використання
функціоналу, вбудованого у клас Phar. Обертку потоку найкраще
використовувати лише читання.
