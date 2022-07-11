- [« swoole_version](function.swoole-version.md)
- [Swoole\Async::dnsLookup »](swoole-async.dnslookup.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Async

# Клас Swoole\Async

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Async** {

/\* Методи \*/

public static [dnsLookup](swoole-async.dnslookup.md)(string
`$hostname`, [callable](language.types.callable.md) `$callback`): void

public static [read](swoole-async.read.md)(
string `$filename`,
[callable](language.types.callable.md) `$callback`,
int `$chunk_size` u003d ?,
int `$offset` u003d ?
): bool

public static [readFile](swoole-async.readfile.md)(string `$filename`,
[callable](language.types.callable.md) `$callback`): void

public static [set](swoole-async.set.md)(array `$settings`): void

public static [write](swoole-async.write.md)(
string `$filename`,
string `$content`,
int `$offset` u003d ?,
[callable](language.types.callable.md) `$callback` u003d ?
): void

public static [writeFile](swoole-async.writefile.md)(
string `$filename`,
string `$content`,
[callable](language.types.callable.md) `$callback` u003d ?,
string `$flags` u003d ?
): void

}

## Зміст

- [Swoole\Async::dnsLookup](swoole-async.dnslookup.md) - Асинхронний
і неблокуючий пошук IP на ім'я хоста
- [Swoole\Async::read](swoole-async.read.md) - Асинхронне читання
файлового потоку
- [Swoole\Async::readFile](swoole-async.readfile.md) - Асинхронне
читання файлу
- [Swoole\Async::set](swoole-async.set.md) — Оновлення параметрів
асинхронного введення-виводу
- [Swoole\Async::write](swoole-async.write.md) - Асинхронно
записує дані у файловий потік
- [Swoole\Async::writeFile](swoole-async.writefile.md) — Опис
