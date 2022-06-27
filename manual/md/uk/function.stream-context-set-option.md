- [«
stream_context_set_default](function.stream-context-set-default.md)
- [stream_context_set_params
»](function.stream-context-set-params.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Встановлює опцію для потоку/обгортки/контексту

#stream_context_set_option

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

stream_context_set_option — Встановлює опцію для
потоку/обгортки/контексту

### Опис

**stream_context_set_option**(
resource `$stream_or_context`,
string `$wrapper`,
string `$option`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`
): bool

**stream_context_set_option**(resource `$stream_or_context`, array
`$options`): bool

Встановлює опцію у вказаному контексті. Значення `value`
встановлюється в `option` для `wrapper`

### Список параметрів

`stream_or_context`
Потік або ресурс контексту, до якого будуть використані опції.

`wrapper`
Ім'я обгортки (може відрізнятися від протоколу). Дивіться [опції та параметри
контекста](context.md) для отримання списку параметрів потоку.

`option`
Ім'я опції.

`value`
Значення опції.

`options`
Опції, які будуть застосовані до stream_or_context.

> **Примітка**:
>
> Параметр `options` повинен бути асоціативним масивом
> масивів у форматі $arr['wrapper']['option'] u003d $value`.
>
> Зверніться до розділу [Опції та параметри контексту](context.md),
> щоб отримати список опцій потоку.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
