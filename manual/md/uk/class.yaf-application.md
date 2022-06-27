- [«Конфігурація програми](yaf.appconfig.md)
- [Yaf_Application::app »](yaf-application.app.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Application

# Клас Yaf_Application

(No version information available, might only be in Git)

## Вступ

[Yaf_Application](class.yaf-application.md) забезпечує ініціалізацію
об'єкта для додатків які надають ресурси, що перевикористовуються.
загальні та модульні bootstrap-класи та перевірки залежностей.

> **Примітка**:
>
> [Yaf_Application](class.yaf-application.md) реалізує шаблон
> singleton, та [Yaf_Application](class.yaf-application.md) не може
> бути серіалізований або десеріалізований що викликає проблеми коли ви
> Ви намагаєтесь використати PHPUnit щоб написати деякі тести для Yaf.
>
> Ви можете використовувати @backupGlobals анотації PHPUnit для контролю
> бекапів та операцій відновлення глобальних змінних. Таким чином
> Ви можете вирішити цю проблему.

## Огляд класів

final class [Yaf_Application](class.yaf-application.md) {

/\* Властивості \*/

protected `$config`;

protected `$dispatcher`;

protected static `$_app`;

protected `$_modules`;

protected `$_running`;

protected `$_environ`;

/\* Методи \*/

public
[\_\_construct](yaf-application.construct.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$config`, string `$envrion` u003d ?)

public static[app](yaf-application.app.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[bootstrap](yaf-application.bootstrap.md)([Yaf_Bootstrap_Abstract](class.yaf-bootstrap-abstract.md)
$bootstrap u003d ?): void

public [clearLastError](yaf-application.clearlasterror.md)():
[Yaf_Application](class.yaf-application.md)

public [environ](yaf-application.environ.md)(): void

public
[execute](yaf-application.execute.md)([callable](language.types.callable.md)
`$entry`, string `...$args`): void

public [getAppDirectory](yaf-application.getappdirectory.md)():
[Yaf_Application](class.yaf-application.md)

public [getConfig](yaf-application.getconfig.md)():
[Yaf_Config_Abstract](class.yaf-config-abstract.md)

public [getDispatcher](yaf-application.getdispatcher.md)():
[Yaf_Dispatcher](class.yaf-dispatcher.md)

public [getLastErrorMsg](yaf-application.getlasterrormsg.md)(): string

public [getLastErrorNo](yaf-application.getlasterrorno.md)(): int

public [getModules](yaf-application.getmodules.md)(): array

public [run](yaf-application.run.md)(): void

public [setAppDirectory](yaf-application.setappdirectory.md)(string
`$directory`): [Yaf_Application](class.yaf-application.md)

public [\_\_destruct](yaf-application.destruct.md)()

}

## Властивості

`config`

`dispatcher`

`_app`

`_modules`

`_running`

`_environ`

## Зміст

- [Yaf_Application::app](yaf-application.app.md) — Витягти екземпляр
програми
- [Yaf_Application::bootstrap](yaf-application.bootstrap.md) -
Викликати bootstrap
- [Yaf_Application::clearLastError](yaf-application.clearlasterror.md)
— Очищення інформації з останньої помилки
- [Yaf_Application::\_\_construct](yaf-application.construct.md) -
Конструктор класу Yaf_Application
- [Yaf_Application::\_\_destruct](yaf-application.destruct.md) -
Деструктор Yaf_Application
- [Yaf_Application::environ](yaf-application.environ.md) — Отримати
значення оточення
- [Yaf_Application::execute](yaf-application.execute.md) — Запустити
callback-функцію
- [Yaf_Application::getAppDirectory](yaf-application.getappdirectory.md)
— Отримати директорію програми
- [Yaf_Application::getConfig](yaf-application.getconfig.md) -
Отримати екземпляр класу конфігурації
- [Yaf_Application::getDispatcher](yaf-application.getdispatcher.md)
- Отримати екземпляр класу Yaf_Dispatcher
- [Yaf_Application::getLastErrorMsg](yaf-application.getlasterrormsg.md)
— Отримати останнє повідомлення про помилку
- [Yaf_Application::getLastErrorNo](yaf-application.getlasterrorno.md)
— Отримати код останньої помилки
- [Yaf_Application::getModules](yaf-application.getmodules.md) -
Отримати імена заявлених модулів
- [Yaf_Application::run](yaf-application.run.md) — Запустити
Yaf_Application
- [Yaf_Application::setAppDirectory](yaf-application.setappdirectory.md)
— Змінити директорію програми
