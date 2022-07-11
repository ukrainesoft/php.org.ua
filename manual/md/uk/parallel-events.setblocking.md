- [«parallel\Events](class.parallel-events.md)
- [parallel\Events::setTimeout »](parallel-events.settimeout.md)

- [PHP Manual](index.md)
- [parallel\Events](class.parallel-events.md)
-   Поведінка

# parallel\Events::setBlocking

(0.9.0)

parallel\Events::setBlocking — Поведінка

### Опис

За замовчуванням, коли опитуються події, блокування відбуватиметься
(на рівні PHP) доти, доки не буде повернена перша подія:
встановлення режиму блокування в **`false`** призведе до того, що опитування
поверне керування, якщо перша опитана мета не готова.

Відрізняється від часу очікування 0 за допомогою
[parallel\Events::setTimeout()](parallel-events.settimeout.md),
оскільки час очікування 0, хоч і дозволено, викине виняток,
яке може бути надзвичайно повільним або марнотратним, якщо
дійсно потрібна неблокуюча поведінка.

Неблокуючий цикл впливає на значення, що повертається
[parallel\Events::poll()](parallel-events.poll.md), так що воно може
бути **`null`** до того, як всі події будуть оброблені.

public **parallel\Events::setBlocking**(bool `$blocking`): void

Встановлює режим блокування

### Помилки

**Увага**

Викидає parallel\Events\Error, якщо для циклу встановлено час
очікування.
