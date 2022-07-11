- [«
SessionHandlerInterface::write](sessionhandlerinterface.write.md)
- [SessionIdInterface::create_sid
»](sessionidinterface.create-sid.md)

- [PHP Manual](index.md)
- [Сесії](book.session.md)
- Інтерфейс SessionIdInterface

# Інтерфейс SessionIdInterface

(PHP 5 \>u003d 5.5.1, PHP 7, PHP 8)

## Вступ

**SessionIdInterface** - це інтерфейс, який визначає
необов'язкові методи для створення користувальницького обробника сесії.
Для надання користувальницького обробника сесії функції
[session_set_save_handler()](function.session-set-save-handler.md),
використовуючи її ООП реалізацію, клас має реалізовувати цей інтерфейс.

Зверніть увагу, що callback-методи цього класу створені для
внутрішніх дзвінків PHP і не призначені для дзвінків з вашого коду.

## Огляд інтерфейсів

interface **SessionIdInterface** {

/\* Методи \*/

public [create_sid](sessionidinterface.create-sid.md)(): string

}

## Зміст

- [SessionIdInterface::create_sid](sessionidinterface.create-sid.md)
- Створити ідентифікатор сесії
