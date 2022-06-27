- [« parallel\Future::value](parallel-future.value.md)
- [parallel\Channel::\_\_construct »](parallel-channel.construct.md)

- [PHP Manual](index.md)
- [parallel](book.parallel.md)
- Клас parallel\Channel

# Клас parallel\Channel

(0.9.0)

## Небуферизовані канали

Небуферизований канал блокуватиме виклики
[parallel\Channel::send()](parallel-channel.send.md), поки
не буде одержувач та блокувати виклики
[parallel\Channel::recv()](parallel-channel.recv.md), поки
не буде відправник. Це означає, що небуферизований канал – це не
тільки спосіб обміну даними між завданнями, а й простий метод
синхронізації.

Небуферизований канал - це найшвидший спосіб обміну даними між
завданням, що вимагає найменшої кількості копіювання.

## Буферизовані канали

Буферизований канал не блокуватиметься під час дзвінків
[parallel\Channel::send()](parallel-channel.send.md), поки
не буде досягнуто ємність, виклики
[parallel\Channel::recv()](parallel-channel.recv.md) буде
блокуватись, поки в буфері не з'являться дані.

## Замикання поверх каналів

Потужна особливість паралельних каналів у тому, що вони дозволяють
обмінюватися замикання між завданнями (і середовищами виконання).

Коли замикання відправляється каналом, воно буферизується, не змінює
буферизацію каналу, що передає замикання, але воно впливає на статичну
область видимості всередині замикання: одне й те саме замикання, відправлене
в різні середовища виконання або в те саме середовище виконання, не буде
ділитися своєю статичною областю.

Це означає, що кожен раз, коли виконується замикання, яке було
передано каналом, статичний стан буде таким, яким він був при
буферизації замикання.

## Анонімні канали

Конструктор анонімного каналу дозволяє програмісту уникати присвоєння
імен кожному каналу: parallel генерує унікальне ім'я для анонімних
каналів.

## Огляд класів

final class **parallel\Channel** {

/\* Анонімний конструктор \*/

public [\_\_construct](parallel-channel.construct.md)()

public [\_\_construct](parallel-channel.construct.md)(int `$capacity`)

/\* Доступ \*/

public [make](parallel-channel.make.md)(string `$name`): Channel

public [make](parallel-channel.make.md)(string `$name`, int
`$capacity`): Channel

public [open](parallel-channel.open.md)(string `$name`): Channel

/\* Спільне використання \*/

public [recv](parallel-channel.recv.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[send](parallel-channel.send.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

/\* Закриття \*/

public [close](parallel-channel.close.md)(): void

/\* Константа для нескінченної буферизації \*/

const `Infinite`;

}

## Зміст

- [parallel\Channel::\_\_construct](parallel-channel.construct.md) -
Конструктор класу Channel
- [parallel\Channel::make](parallel-channel.make.md) — Доступ
- [parallel\Channel::open](parallel-channel.open.md) — Доступ
- [parallel\Channel::recv](parallel-channel.recv.md) — Спільне
використання
- [parallel\Channel::send](parallel-channel.send.md) — Спільне
використання
- [parallel\Channel::close](parallel-channel.close.md) — Закриття
