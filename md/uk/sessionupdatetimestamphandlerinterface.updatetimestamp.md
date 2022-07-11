- [«
SessionUpdateTimestampHandlerInterface](class.sessionupdatetimestamphandlerinterface.md)
- [SessionUpdateTimestampHandlerInterface::validateId
»](sessionupdatetimestamphandlerinterface.validateid.md)

- [PHP Manual](index.md)
- [SessionUpdateTimestampHandlerInterface](class.sessionupdatetimestamphandlerinterface.md)
- Оновити мітку часу

# SessionUpdateTimestampHandlerInterface::updateTimestamp

(PHP 7, PHP 8)

SessionUpdateTimestampHandlerInterface::updateTimestamp — Оновити позначку
часу

### Опис

public
**SessionUpdateTimestampHandlerInterface::updateTimestamp**(string
`$id`, string `$data`): bool

Оновлює позначку часу останньої зміни сеансу. Функція
автоматично виконується під час оновлення сеансу.

### Список параметрів

`id`
Ідентифікатор сесії

`data`
Дані сесії.

### Значення, що повертаються

Повертає **`true`**, якщо мітка часу оновлена, **`false`** в
інакше. Зверніть увагу, що це значення повертається
всередині PHP для обробки.
