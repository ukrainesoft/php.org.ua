- [« streamWrapper::stream_eof](streamwrapper.stream-eof.md)
- [streamWrapper::stream_lock »](streamwrapper.stream-lock.md)

- [PHP Manual](index.md)
- [streamWrapper](class.streamwrapper.md)
- скидає висновок

# streamWrapper::stream_flush

(PHP 4 \>u003d 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_flush — Скидає висновок

### Опис

public **streamWrapper::stream_flush**(): bool

Цей метод викликається у процесі виконання
[fflush()](function.fflush.md), якщо потік закривається маючи
Непокинуті дані, записані в нього раніше.

Якщо в потоці є кешовані та ще невикористані дані, у цьому
Метод саме місце передати їх на нижчий рівень.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повинний повертати **`true`**, якщо кешовані дані успішно збережені
(або їх взагалі немає), або **`false`**, якщо дані не можуть бути
збережено.

### Примітки

> **Примітка**:
>
> Якщо метод не реалізований, як повертається значення належить
> **`false`**.

### Дивіться також

- [fflush()](function.fflush.md) - Скидає буфер виводу у файл
