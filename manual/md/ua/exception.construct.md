- [Exception](class.exception.md)
- [Exception::getMessage »](exception.getmessage.md)

- [PHP Manual](index.md)
- [Exception](class.exception.md)
- Створити виняток

# Exception::\_\_construct

(PHP 5, PHP 7, PHP 8)

Exception::\_\_construct — Створити виняток

### Опис

public **Exception::\_\_construct**(string `$message` u003d "", int `$code`
u003d 0, ?[Throwable](class.throwable.md) `$previous` u003d **`null`**)

Створює виняток.

### Список параметрів

`message`
Текст повідомлення.

`code`
Код виняток.

`previous`
Попередній виняток. Використовується для створення ланцюжка винятків.

> **Примітка**: Виклик конструктора класу Exception з його підкласу,
> ігнорує аргументи за замовчуванням, якщо властивості $code та $message вже
> встановлені.

### Примітки

> **Примітка**:
>
> Параметр `message` *не* є бінарно-безпечним.
