- [« Swoole\Buffer::recycle](swoole-buffer.recycle.md)
- [Swoole\Buffer::\_\_toString »](swoole-buffer.tostring.md)

- [PHP Manual](index.md)
- [Swoole\Buffer](class.swoole-buffer.md)
- Зчитує дані з буфера пам'яті на основі усунення та довжини. Або
видаляє дані з буфера пам'яті

# Swoole\Buffer::substr

(PECL swoole \>u003d 1.9.0)

Swoole\Buffer::substr — Зчитує дані з буфера пам'яті на основі
зміщення та довжини. Або видаляє дані з буфера пам'яті

### Опис

public **Swoole\Buffer::substr**(int `$offset`, int `$length` u003d ?, bool
`$remove` u003d ?): string

Якщо для $remove встановлено значення true, а для $offset встановлено
значення 0 дані будуть видалені з буфера. Пам'ять для зберігання даних
буде звільнено під час знищення об'єкта буфера.

### Список параметрів

`offset`
Зміщення.

`length`
довжина.

`remove`
Визначає, чи видалити дані з буфера пам'яті.

### Значення, що повертаються

Дані або рядок прочитані з буфера пам'яті.
