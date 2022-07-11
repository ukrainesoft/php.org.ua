- [« Yac::add](yac.add.md)
- [Yac::delete »](yac.delete.md)

- [PHP Manual](index.md)
- [Yac](class.yac.md)
- Конструктор класу

# Yac::\_\_construct

(PECL yac \>u003d 1.0.0)

Yac::\_\_construct - Конструктор класу

### Опис

public **Yac::\_\_construct**(string `$prefix` u003d "")

Префікс використовується для додавання ключів, його можна використовувати для
запобігання конфліктам між додатками.

### Список параметрів

`prefix`
Префікс (string)

### Помилки

Викидає [Exception](class.exception.md), якщо Yac не увімкнено.
Викидає [Exception](class.exception.md), якщо 'prefix' перевищує
максимальну довжину ключа 48 (**`YAC_MAX_KEY_LEN`**) байтів.
