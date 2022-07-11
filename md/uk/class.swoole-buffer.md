- [« Swoole\Atomic::sub](swoole-atomic.sub.md)
- [Swoole\Buffer::append »](swoole-buffer.append.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Buffer

# Клас Swoole\Buffer

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Buffer** {

/\* Методи \*/

public [append](swoole-buffer.append.md)(string `$data`): int

public [clear](swoole-buffer.clear.md)(): void

public [\_\_destruct](swoole-buffer.destruct.md)(): void

public [expand](swoole-buffer.expand.md)(int `$size`): int

public [read](swoole-buffer.read.md)(int `$offset`, int `$length`):
string

public [recycle](swoole-buffer.recycle.md)(): void

public [substr](swoole-buffer.substr.md)(int `$offset`, int `$length`
u003d ?, bool `$ remove` u003d ?): string

public [\_\_toString](swoole-buffer.tostring.md)(): string

public [write](swoole-buffer.write.md)(int `$offset`, string `$data`):
void

}

## Зміст

- [Swoole\Buffer::append](swoole-buffer.append.md) - Додає
рядок або двійкові дані в кінець буфера пам'яті та повертає новий
розмір виділеної пам'яті
- [Swoole\Buffer::clear](swoole-buffer.clear.md) - Скидає буфер
пам'яті
- [Swoole\Buffer::\_\_construct](swoole-buffer.construct.md) -
Фіксований розмір блоку пам'яті
- [Swoole\Buffer::\_\_destruct](swoole-buffer.destruct.md) -
Знищує буфер пам'яті Swoole
- [Swoole\Buffer::expand](swoole-buffer.expand.md) - Розширює
розмір буфера пам'яті
- [Swoole\Buffer::read](swoole-buffer.read.md) — Читає дані з
буфера пам'яті на основі зміщення та довжини
- [Swoole\Buffer::recycle](swoole-buffer.recycle.md) - Звільняє
пам'ять для ОС, яка не використовується буфером пам'яті
- [Swoole\Buffer::substr](swoole-buffer.substr.md) — Зчитує
дані з буфера пам'яті на основі зміщення та довжини. Або видаляє
дані з буфера пам'яті
- [Swoole\Buffer::\_\_toString](swoole-buffer.tostring.md) -
Отримує строкове значення буфера пам'яті
- [Swoole\Buffer::write](swoole-buffer.write.md) — Записує дані
у буфер пам'яті. Пам'ять, виділена для буфера, не буде змінено
