- [«Serializable](class.serializable.md)
- [Serializable::unserialize »](serializable.unserialize.md)

- [PHP Manual](index.md)
- [Serializable](class.serializable.md)
- представляє об'єкт у вигляді рядка

# Serializable::serialize

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

Serializable::serialize — Представляє об'єкт у вигляді рядка

### Опис

public **Serializable::serialize**(): ?string

Повертає рядкову виставу об'єкта.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядкову виставу об'єкта або **`null`**.

### Помилки

Викидає виняток [Exception](class.exception.md) при поверненні
типів, відмінних від рядка або **`null`**.

### Дивіться також

- [\_\_sleep()](language.oop5.magic.md#object.sleep)
- [\_\_serialize()](language.oop5.magic.md#object.serialize)
