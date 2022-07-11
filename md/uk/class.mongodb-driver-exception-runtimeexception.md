- [«
MongoDB\Driver\Exception\LogicException](class.mongodb-driver-exception-logicexception.md)
- [MongoDB\Driver\Exception\RuntimeException::hasErrorLabel
»](mongodb-driver-runtimeexception.haserrorlabel.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Exception](mongodb.exceptions.md)
- Клас MongoDB\Driver\Exception\RuntimeException

# Клас MongoDB\Driver\Exception\RuntimeException

(mongodb \>u003d 1.0.0)

## Вступ

Викидається, коли драйвер виявляє помилку під час виконання
(наприклад, внутрішня помилка з
[» libmongoc](https://github.com/mongodb/mongo-c-driver)).

## Огляд класів

class **MongoDB\Driver\Exception\RuntimeException** extends
[RuntimeException](class.runtimeexception.md) implements
[MongoDB\Driver\Exception\Exception](class.mongodb-driver-exception-exception.md)
{

/\* Властивості \*/

protected ?array `$errorLabels`;

/\* Наслідувані властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Методи \*/

final public
[hasErrorLabel](mongodb-driver-runtimeexception.haserrorlabel.md)(string
`$errorLabel`): bool

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

## Властивості

`errorLabels`
Містить масив позначок помилок для виключення. Наприклад, мітки помилок
можуть використовуватися для визначення того, чи можна безпечно провести
транзакцію, якщо є мітка TransientTransactionError.
Існування певної мітки помилки має бути перевірено за допомогою
[MongoDB\Driver\Exception\RuntimeException::hasErrorLabel()](mongodb-driver-runtimeexception.haserrorlabel.md)
замість інтерпретації цієї властивості errorLabels вручну.

## Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------------------|
| PECL mongodb 1.6.0 Доданий метод [MongoDB\Driver\Exception\RuntimeException::hasErrorLabel()](mongodb-driver-runtimeexception.haserrorlabel.md) та властивість [MongoDB\Driver\Exception\RuntimeException::errorLabels](class.mongodb-driver-except runtimeexception.md#mongodb-driver-exception-runtimeexception.props.errorlabels). |

## Зміст

- [MongoDB\Driver\Exception\RuntimeException::hasErrorLabel](mongodb-driver-runtimeexception.haserrorlabel.md)
— Повертає, чи мітка помилки пов'язана з винятком
