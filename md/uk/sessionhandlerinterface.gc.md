- [«
SessionHandlerInterface::destroy](sessionhandlerinterface.destroy.md)
- [SessionHandlerInterface::open »](sessionhandlerinterface.open.md)

- [PHP Manual](index.md)
- [SessionHandlerInterface](class.sessionhandlerinterface.md)
- Очищає старі сесії

# SessionHandlerInterface::gc

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SessionHandlerInterface::gc — Очищає старі сесії

### Опис

public **SessionHandlerInterface::gc**(int `$max_lifetime`): int\|false

Очищає сесії з терміном життя. Викликається функцією
[session_start()](function.session-start.md), і ґрунтується на опціях
[session.gc_divisor](session.configuration.md#ini.session.gc-divisor),
[session.gc_probability](session.configuration.md#ini.session.gc-probability)
і
[session.gc_maxlifetime](session.configuration.md#ini.session.gc-maxlifetime).

### Список параметрів

`max_lifetime`
Сесії, які не оновлювалися протягом max_lifetime секунд, будуть
видалено.

### Значення, що повертаються

Повертає кількість віддалених сесій у разі успішного виконання або
**`false`** у разі виникнення помилки. Зверніть увагу, що це
значення повертається всередині PHP для обробки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --------------------------------------|
| 7.1.0 | До цієї версії, функція повертала **`true`** у разі успішного виконання. |
