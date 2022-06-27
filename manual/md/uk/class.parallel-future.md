- [« parallel\Runtime::kill](parallel-runtime.kill.md)
- [parallel\Future::cancel »](parallel-future.cancel.md)

- [PHP Manual](index.md)
- [parallel](book.parallel.md)
- Клас parallel\Future

# Клас parallel\Future

(0.8.0)

## Об'єкти Future

Future представляє повертається або неперехоплений виняток
із завдання та надає API для скасування.

**Приклад #1 Приклад, що показує Future як значення, що повертається**

` <?php$runtime u003d new \parallel\Runtime;$future u003d $runtime->run(function(){    return "Світ";});printf("Привіт,%s
", $future->value());?> `

Результатом виконання цього прикладу буде щось подібне:

Привіт світ

Поведінка Future також дозволяє використовувати його як простий
точки синхронізації, навіть якщо завдання не повертає значення явно.

**Приклад #2 Приклад, що показує Future як точку синхронізації**

`<?php$runtime u003d new \parallel\Runtime;$future u003d $runtime->run(function(){    echo "в дочірньому потіку ";    for ($i u003d           ($i % 10 u003du003d 0) {            echo ".";        }    }     echo "до||||
батьківський потік продовжує працювати
";?> `

Результатом виконання цього прикладу буде щось подібне:

у дочірньому потоці ............................................... ... вихід із дочірнього потоку
батьківський потік продовжує працювати

## Огляд класів

final class **parallel\Future** {

/\* Розширення \*/

public [value](parallel-future.value.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

/\* Стан \*/

public [cancelled](parallel-future.cancelled.md)(): bool

public [done](parallel-future.done.md)(): bool

/\* Скасування \*/

public [cancel](parallel-future.cancel.md)(): bool

}

## Зміст

- [parallel\Future::cancel](parallel-future.cancel.md) — Припинення
- [parallel\Future::cancelled](parallel-future.cancelled.md) -
Визначення стану
- [parallel\Future::done](parallel-future.done.md) — Визначення
стану
- [parallel\Future::value](parallel-future.value.md) — Дозвіл
