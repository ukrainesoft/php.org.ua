- [« ArrayAccess::offsetGet](arrayaccess.offsetget.md)
- [ArrayAccess::offsetUnset »](arrayaccess.offsetunset.md)

- [PHP Manual](index.md)
- [ArrayAccess](class.arrayaccess.md)
- Надає значення заданому зміщенню

# ArrayAccess::offsetSet

(PHP 5, PHP 7, PHP 8)

ArrayAccess::offsetSet — Надає значення заданому зсуву

### Опис

public
**ArrayAccess::offsetSet**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$offset`,

`$value`): void

Надає значення зазначеному зсуву (ключу).

### Список параметрів

`offset`
Зміщення (ключ), якому присвоюватиметься значення.

`value`
Значення для присвоєння.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Примітки

> **Примітка**:
>
> Параметр `offset` буде встановлено в **`null`**, якщо інше значення
> недоступно, як показано в наведеному нижче прикладі.
>
> ` <?php$arrayaccess[] u003d "перше значення";$arrayaccess[] u003d "друге значення";print_r($arrayaccess);?> `
>
> Результат виконання цього прикладу:
>
> Array
> (
> [0] u003d> first value
> [1] u003d> second value
> )

> **Примітка**:
>
> Даний метод не викликається при присвоєння за посиланням та інших
> Непрямих змін величин масиву перевантаженого об'єкта
> [ArrayAccess](class.arrayaccess.md) (непрямі тому, що вони
> зроблено не прямою заміною величини, а шляхом зміни частина
> елемента або властивості елемента масиву, або присвоєння елемента
> масиву за посиланням іншою зміною). Натомість, викликається метод
> [ArrayAccess::offsetGet()](arrayaccess.offsetget.md). Дана
> операція буде успішною лише в тому випадку, якщо метод повертає по
> Посилання.
