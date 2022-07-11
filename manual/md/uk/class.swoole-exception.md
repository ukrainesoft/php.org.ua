- [« Swoole\Event::write](swoole-event.write.md)
- [Swoole\Http\Client »](class.swoole-http-client.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Exception

# Клас Swoole\Exception

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Exception** extends [Exception](class.exception.md)
implements [Throwable](class.throwable.md) {

/\* Наслідувані властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

}
