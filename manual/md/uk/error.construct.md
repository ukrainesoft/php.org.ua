- [«Error](class.error.md)
- [Error::getMessage »](error.getmessage.md)

- [PHP Manual](index.md)
- [Error](class.error.md)
- Створює об'єкт класу Error

# Error::\_\_construct

(PHP 7, PHP 8)

Error::\_\_construct — Створює об'єкт класу Error

### Опис

public **Error::\_\_construct**(string `$message` u003d "", int `$code` u003d 0,
?[Throwable](class.throwable.md) `$previous` u003d **`null`**)

Створює об'єкт класу Error.

### Список параметрів

`message`
Повідомлення про помилку.

`code`
Код помилки.

`previous`
Попередній об'єкт, що реалізує інтерфейс throwable, використовується для
створення ланцюжка винятків.

### Примітки

> **Примітка**:
>
> Значення `message` *НЕ* є безпечним для бінарних даних, то
> у тексті повідомлення не можна використовувати символ із кодом .
