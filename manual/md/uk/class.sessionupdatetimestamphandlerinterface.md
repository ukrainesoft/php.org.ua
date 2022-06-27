- [«
SessionIdInterface::create_sid](sessionidinterface.create-sid.md)
- [SessionUpdateTimestampHandlerInterface::updateTimestamp
»](sessionupdatetimestamphandlerinterface.updatetimestamp.md)

- [PHP Manual](index.md)
- [Сесії](book.session.md)
- Інтерфейс SessionUpdateTimestampHandlerInterface

# Інтерфейс SessionUpdateTimestampHandlerInterface

(PHP 7, PHP 8)

## Вступ

**SessionUpdateTimestampHandlerInterface** - це інтерфейс, який
визначає додаткові методи для створення користувача
обробника сесії. Для надання користувача обробника
сесії функції
[session_set_save_handler()](function.session-set-save-handler.md),
використовуючи її ООП реалізацію, клас має реалізовувати цей інтерфейс.

Зверніть увагу, що callback-методи цього класу створені для
внутрішніх дзвінків PHP і не призначені для дзвінків з вашого коду.

## Огляд класів

interface **SessionUpdateTimestampHandlerInterface** {

/\* Методи \*/

public
[updateTimestamp](sessionupdatetimestamphandlerinterface.updatetimestamp.md)(string
`$id`, string `$data`): bool

public
[validateId](sessionupdatetimestamphandlerinterface.validateid.md)(string
`$id`): bool

}

## Зміст

- [SessionUpdateTimestampHandlerInterface::updateTimestamp](sessionupdatetimestamphandlerinterface.updatetimestamp.md)
— Оновити позначку часу
- [SessionUpdateTimestampHandlerInterface::validateId](sessionupdatetimestamphandlerinterface.validateid.md)
- Перевірити ідентифікатор
