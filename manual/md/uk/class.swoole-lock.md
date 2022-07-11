- [« Swoole\Http\Server::start](swoole-http-server.start.md)
- [Swoole\Lock::\_\_construct »](swoole-lock.construct.md)

- [PHP Manual](index.md)
- [Swoole](book.swoole.md)
- Клас Swoole\Lock

# Клас Swoole\Lock

(PECL swoole \>u003d 1.9.0)

## Вступ

## Огляд класів

class **Swoole\Lock** {

/\* Методи \*/

public [\_\_destruct](swoole-lock.destruct.md)(): void

public [lock_read](swoole-lock.lock-read.md)(): void

public [lock](swoole-lock.lock.md)(): void

public [trylock_read](swoole-lock.trylock-read.md)(): void

public [trylock](swoole-lock.trylock.md)(): void

public [unlock](swoole-lock.unlock.md)(): void

}

## Зміст

- [Swoole\Lock::\_\_construct](swoole-lock.construct.md) - Створює
блокування пам'яті
- [Swoole\Lock::\_\_destruct](swoole-lock.destruct.md) - Знищує
блокування пам'яті Swoole
- [Swoole\Lock::lock_read](swoole-lock.lock-read.md) - Блокує
читання-запис блокування для читання
- [Swoole\Lock::lock](swoole-lock.lock.md) — Намагається отримати
блокування. Заблокується, якщо блокування недоступне
- [Swoole\Lock::trylock_read](swoole-lock.trylock-read.md) -
Намагається заблокувати блокування читання-запису для читання та відразу
повертає, навіть якщо блокування недоступне
- [Swoole\Lock::trylock](swoole-lock.trylock.md) — Намагається отримати
блокування і відразу повертає, навіть якщо блокування недоступне
- [Swoole\Lock::unlock](swoole-lock.unlock.md) — Знімає блокування
