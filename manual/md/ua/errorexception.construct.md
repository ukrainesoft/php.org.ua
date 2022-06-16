- [«ErrorException](class.errorexception.md)
- [ErrorException::getSeverity »](errorexception.getseverity.md)

- [PHP Manual](index.md)
- [ErrorException](class.errorexception.md)
- Створює виняток

# ErrorException::\_\_construct

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

ErrorException::\_\_construct — Створює виняток

### Опис

public **ErrorException::\_\_construct**(
string `$message` u003d "",
int `$code` u003d 0,
int `$severity` u003d **`E_ERROR`**,
?string `$filename` u003d **`null`**,
?int `$line` u003d **`null`**,
?[Throwable](class.throwable.md) `$previous` u003d **`null`**
)

Створює виняток.

### Список параметрів

`message`
Текст виключення.

`code`
Код виняток.

`severity`
Рівень серйозності виключення.

> **Примітка**:
>
> У той час, як рівень серйозності може бути будь-яким цілим числом
> (int), передбачається, що її вказівки будуть використані
> константи [помилок](errorfunc.constants.md).

`filename`
Ім'я файлу, де викликано виняток.

`line`
Номер рядка, де викликано виняток.

`previous`
Попередній виняток. Використовується для створення ланцюжка винятків.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- |
| 8.0.0 | `filename` та `line` тепер допускають значення null. Раніше їх значеннями за умовчанням були **`__FILE__`** та **`__LINE__`** відповідно. |
