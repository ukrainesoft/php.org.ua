- [« parallel\Events::poll](parallel-events.poll.md)
- [parallel\Events\Input::add »](parallel-events-input.add.md)

- [PHP Manual](index.md)
- [parallel](book.parallel.md)
- Клас parallel\Events\Input

# Клас parallel\Events\Input

(0.9.0)

## Вхідні дані подій

Об'єкт Input - це контейнер для даних, які об'єкт
[parallel\Events](class.parallel-events.md) запише до об'єктів
[parallel\Channel](class.parallel-channel.md) у міру їхньої доступності.
Декілька циклів подій можуть спільно використовувати контейнер введення -
parallel не перевіряє вміст контейнера, якщо він встановлений як
вхідні дані для об'єкту
[parallel\Events](class.parallel-events.md).

> **Примітка**:
>
> Коли об'єкт [parallel\Events](class.parallel-events.md) виконує
> запис, мета видаляється з об'єкта вхідних даних, якби був
> викликаний метод
> [parallel\Events\Input::remove()](parallel-events-input.remove.md).

## Огляд класів

final class **parallel\Events\Input** {

public [add](parallel-events-input.add.md)(string `$target`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [remove](parallel-events-input.remove.md)(string `$target`):
void

public [clear](parallel-events-input.clear.md)(): void

}

## Зміст

- [parallel\Events\Input::add](parallel-events-input.add.md) - Вхід
- [parallel\Events\Input::clear](parallel-events-input.clear.md) -
Входи
- [parallel\Events\Input::remove](parallel-events-input.remove.md) -
Входи
