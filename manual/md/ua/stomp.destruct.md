- [« Stomp::\_\_construct](stomp.construct.md)
- [Stomp::error »](stomp.error.md)

- [PHP Manual](index.md)
- [Stomp](class.stomp.md)
- Закриває Stomp-з'єднання

# Stomp::\_\_destruct

#stomp_close

(PECL stomp \>u003d 0.1.0)

Stomp::\_\_destruct - stomp_close - Закриває Stomp-з'єднання

### Опис

Об'єктно-орієнтований стиль (деструктор):

public **Stomp::\_\_destruct**()

Процедурний стиль:

**stomp_close**(resource `$link`): bool

Закриває раніше відкриті з'єднання.

### Список параметрів

`link`
Тільки для процедурного стилю: ідентифікатор з'єднання stomp,
отриманий із [stomp_connect()](stomp.construct.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

Дивіться [stomp_connect()](stomp.construct.md).
