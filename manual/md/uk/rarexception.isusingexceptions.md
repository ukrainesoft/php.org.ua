- [«RarException](class.rarexception.md)
- [RarException::setUsingExceptions
»](rarexception.setusingexceptions.md)

- [PHP Manual](index.md)
- [RarException](class.rarexception.md)
- Перевірити, чи будуть функції повертати помилки або викидати
винятки

# RarException::isUsingExceptions

(PECL rar \>u003d 2.0.0)

RarException::isUsingExceptions — Перевірити, чи будуть функції повертати
помилки або викидати винятки

### Опис

public static **RarException::isUsingExceptions**(): bool

Перевіряє, чи будуть функції RAR викидати виключення або повертати
помилки і викликати попередження в більшості випадків (не включаючи
деякі програмні помилки на кшталт передачі аргументів некоректних
типів).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо використовуються винятки та **`false`**, якщо
ні.

### Приклади

**Приклад #1 Приклад використання **RarException::isUsingExceptions()****

` <?php//За мовчанням виключення не використовуютьсяvar_dump(RarException::isUsingExceptions());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(false)

### Дивіться також

- [RarException::setUsingExceptions()](rarexception.setusingexceptions.md) -
Включити або вимкнути генерацію винятків замість повернення
помилок
