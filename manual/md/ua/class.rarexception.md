- [« RarEntry::\_\_toString](rarentry.tostring.md)
- [RarException::isUsingExceptions
»](rarexception.isusingexceptions.md)

- [PHP Manual](index.md)
- [Rar](book.rar.md)
- Клас RarException

# Клас RarException

(PECL rar \>u003d 2.0.0)

## Вступ

Клас служить двом цілям: це тип винятків, що передаються функціями та
методами модуля RAR, що дозволяє за допомогою стандартних методів
робити запит і визначати помилку роботи модуля незалежно від того,
чи передаються винятки або лише видаються попередження.

Використовуються такі коди помилок:

- -1 - помилка поза бібліотекою UnRAR
- 11 - недостатньо пам'яті
- 12 - неправильні дані
- 13 - неправильний архів
- 14 – невідомий формат
- 15 - помилка відкриття файлу
- 16 - помилка створення файлу
- 17 - помилка закриття файлу
- 18 - помилка читання
- 19 - помилка запису
- 20 - надто маленький буфер
- 21 - невідома помилка RAR
- 22 - потрібен пароль

## Огляд класів

final class **RarException** extends [Exception](class.exception.md) {

/\* Методи \*/

public static
[isUsingExceptions](rarexception.isusingexceptions.md)(): bool

public static
[setUsingExceptions](rarexception.setusingexceptions.md)(bool
`$using_exceptions`): void

/\* Наслідувані методи \*/

final public [Exception::getMessage](exception.getmessage.md)():
string

final public [Exception::getPrevious](exception.getprevious.md)():
?[Throwable](class.throwable.md)

final public [Exception::getCode](exception.getcode.md)(): int

final public [Exception::getFile](exception.getfile.md)(): string

final public [Exception::getLine](exception.getline.md)(): int

final public [Exception::getTrace](exception.gettrace.md)(): array

final public
[Exception::getTraceAsString](exception.gettraceasstring.md)(): string

public [Exception::\_\_toString](exception.tostring.md)(): string

private [Exception::\_\_clone](exception.clone.md)(): void

}

## Зміст

- [RarException::isUsingExceptions](rarexception.isusingexceptions.md)
— Перевірити, чи будуть функції повертати помилки або викидати
винятки
- [RarException::setUsingExceptions](rarexception.setusingexceptions.md)
— Включити або вимкнути генерацію винятків замість повернення
помилок
