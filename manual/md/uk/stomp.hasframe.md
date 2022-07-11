- [« Stomp::getSessionId](stomp.getsessionid.md)
- [Stomp::readFrame »](stomp.readframe.md)

- [PHP Manual](index.md)
- [Stomp](class.stomp.md)
- Перевіряє, чи можливе читання кадру

# Stomp::hasFrame

#stomp_has_frame

(PECL stomp \>u003d 0.1.0)

Stomp::hasFrame -- stomp_has_frame — Перевіряє, чи можливо читати
кадр

### Опис

Об'єктно-орієнтований стиль (метод):

public **Stomp::hasFrame**(): bool

Процедурний стиль:

**stomp_has_frame**(resource `$link`): bool

Перевіряє, чи можливо читати кадр.

### Список параметрів

`link`
Тільки для процедурного стилю: ідентифікатор з'єднання stomp,
отриманий із [stomp_connect()](stomp.construct.md).

### Значення, що повертаються

Повертає **`true`** якщо фрейм можна прочитати, інакше **`false`**.
