- [«
SessionUpdateTimestampHandlerInterface::updateTimestamp](sessionupdatetimestamphandlerinterface.updatetimestamp.md)
- [Обробка тексту»] (refs.basic.text.md)

- [PHP Manual](index.md)
- [SessionUpdateTimestampHandlerInterface](class.sessionupdatetimestamphandlerinterface.md)
- Перевірити ідентифікатор

# SessionUpdateTimestampHandlerInterface::validateId

(PHP 7, PHP 8)

SessionUpdateTimestampHandlerInterface::validateId — Перевірити
ідентифікатор

### Опис

public **SessionUpdateTimestampHandlerInterface::validateId**(string
`$id`): bool

Перевіряє цей ідентифікатор сесії. Ідентифікатор сесії
дійсний, якщо сесія з таким ідентифікатором існує.
Функція автоматично виконується під час запуску сесії, вказується
ідентифікатор сесії та включається
[session.use_strict_mode](session.configuration.md#ini.session.use-strict-mode).

### Список параметрів

`id`
Ідентифікатор сесії

### Значення, що повертаються

Повертає **`true`** для коректного ідентифікатора, **`false`** в
інакше. Зверніть увагу, що це значення повертається
всередині PHP для обробки.
