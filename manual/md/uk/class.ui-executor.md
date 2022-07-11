- [« UI\Area::setSize](ui-area.setsize.md)
- [UI\Executor::\_\_construct »](ui-executor.construct.md)

- [PHP Manual](index.md)
- [UI](book.ui.md)
- Планувальник виконання

# Планувальник виконання

(UI 2.0.0)

## Вступ

Ця можливість планує повторне виконання callback-функції, корисно
для анімації та інших подібних дій.

## Огляд класів

abstract class **UI\Executor** {

/\* Конструктор \*/

public [\_\_construct](ui-executor.construct.md)()

public [\_\_construct](ui-executor.construct.md)(int `$microseconds`)

public [\_\_construct](ui-executor.construct.md)(int `$seconds`, int
`$microseconds`)

/\* Методи \*/

public [kill](ui-executor.kill.md)(): void

abstract protected [onExecute](ui-executor.onexecute.md)(): void

public [setInterval](ui-executor.setinterval.md)(int `$microseconds`):
bool

public [setInterval](ui-executor.setinterval.md)(int `$seconds`, int
`$microseconds`): bool

}

## Зміст

- [UI\Executor::\_\_construct](ui-executor.construct.md) - Створити
новий об'єкт Executor
- [UI\Executor::kill](ui-executor.kill.md) - Зупинити виконавця
- [UI\Executor::onExecute](ui-executor.onexecute.md) -
Callback-функція виконання
- [UI\Executor::setInterval](ui-executor.setinterval.md) -
Управління інтервалом
