- [« Swoole\Mmap::open](swoole-mmap.open.md)
- [Swoole\MySQL::close »](swoole-mysql.close.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\MySQL

# Клас Swoole\MySQL

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\MySQL** {

/\* Методи \*/

public [close](swoole-mysql.close.md)(): void

public [connect](swoole-mysql.connect.md)(array `$server_config`,
[callable](language.types.callable.md) `$callback`): void

public [\_\_destruct](swoole-mysql.destruct.md)(): void

public [getBuffer](swoole-mysql.getbuffer.md)(): ReturnType

public [on](swoole-mysql.on.md)(string `$event_name`,
[callable](language.types.callable.md) `$callback`): void

public [query](swoole-mysql.query.md)(string `$sql`,
[callable](language.types.callable.md) `$callback`): ReturnType

}

## Зміст

- [Swoole\MySQL::close](swoole-mysql.close.md) - Закриває
асинхронне з'єднання MySQL
- [Swoole\MySQL::connect](swoole-mysql.connect.md) — Підключається до
віддаленому серверу MySQL
- [Swoole\MySQL::\_\_construct](swoole-mysql.construct.md) - Створює
асинхронний клієнт MySQL
- [Swoole\MySQL::\_\_destruct](swoole-mysql.destruct.md) -
Знищує асинхронний клієнт MySQL
- [Swoole\MySQL::getBuffer](swoole-mysql.getbuffer.md) — Опис
- [Swoole\MySQL::on](swoole-mysql.on.md) - Реєструє
callback-функцію на основі імені події
- [Swoole\MySQL::query](swoole-mysql.query.md) — Виконує запит
SQL
