- [« parallelun](parallel.run.md)
- [parallel\Runtime::\_\_construct »](parallel-runtime.construct.md)

- [PHP Manual](index.md)
- [parallel](book.parallel.md)
- Клас parallel\Runtime

# Клас parallel\Runtime

(0.8.0)

## Об'єкти під час виконання

Кожне середовище виконання являє собою один потік PHP, потік
створюється (і завантажується) під час створення. Потім потік чекає, поки завдання
будуть заплановані: заплановані завдання виконуватимуться FIFO, а
потім потік відновить очікування, доки не будуть заплановані інші
завдання або поки він не буде закритий, убитий або знищений відповідно до
звичайними правилами області видимості об'єктів PHP.

**Увага**

Коли середовище виконання знищується звичайними правилами області видимості
об'єктів PHP, вона спочатку виконує всі заплановані завдання і при
цьому блокує додавання нових.

## Початкове завантаження під час виконання

Коли створюється нове середовище виконання, воно не поділяє код із потоком
(або процесом), що її створив. Це означає, що в ньому не завантажено
ті ж класи та функції, а також не встановлений один і той же
автозавантажувач. У деяких випадках бажане дуже легке середовище
виконання, тому що завдання, які будуть заплановані, не потребують
у доступі до коду батьківського потоку. У тих випадках, коли завданням
потрібен доступ до одного і того ж коду, достатньо встановити
автозавантажувач як початкове завантаження.

> **Примітка**:
>
> Попереднє завантаження може використовуватися разом з паралельним,
> у цьому випадку попередньо завантажений код доступний без початкового
> Завантаження.

## Огляд класів

final class **parallel\Runtime** {

/\* Створіння \*/

public [\_\_construct](parallel-runtime.construct.md)()

public [\_\_construct](parallel-runtime.construct.md)(string
`$bootstrap`)

/\* Виконання \*/

public [run](parallel-runtime.run.md)([Closure](class.closure.md)
`$task`): ?Future

public [run](parallel-runtime.run.md)([Closure](class.closure.md)
`$task`, array `$argv`): ?Future

/\* Приєднання \*/

public [close](parallel-runtime.close.md)(): void

public [kill](parallel-runtime.kill.md)(): void

}

## Зміст

- [parallel\Runtime::\_\_construct](parallel-runtime.construct.md) -
Конструктор класу Runtime
- [parallel\Runtime::run](parallel-runtime.run.md) — Виконання
- [parallel\Runtime::close](parallel-runtime.close.md) - Витончене
з'єднання під час виконання
- [parallel\Runtime::kill](parallel-runtime.kill.md) - З'єднання в
час виконання
