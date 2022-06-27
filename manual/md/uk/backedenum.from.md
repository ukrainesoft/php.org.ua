- [«BackedEnum](class.backedenum.md)
- [BackedEnum::tryFrom »](backedenum.tryfrom.md)

- [PHP Manual](index.md)
- [BackedEnum](class.backedenum.md)
- зіставляє скаляр з екземпляром перерахування

# BackedEnum::from

(PHP 8 \>u003d 8.1.0)

BackedEnum::from — Порівняє скаляр з екземпляром перерахування

### Опис

public static **BackedEnum::from**(int\|string `$value`): static

Метод **from()** переводить рядок (string) або число (int) в
відповідне значення перерахування, якщо є. Якщо
відповідне значення не визначено, викидається
[ValueError](class.valueerror.md).

### Список параметрів

`value`
Скалярне значення для порівняння з перерахуванням.

### Значення, що повертаються

Випадковий екземпляр цього переліку.

### Приклади

**Приклад #1 Простий приклад використання**

У наведеному прикладі показано, як повертаються варіанти перерахування.

`<?phpenum Suit: string{   case Hearts u003d 'H'; case Diamonds u003d 'D'; case Clubs u003d 'C'; case Spades u003d 'S';}$h u003d Suit::from('H');var_dump($h);$b u003d Suit::from('B');?> `

Результат виконання цього прикладу:

enum(Suit::Hearts)

Fatal error: Uncaught ValueError: "B" не є valid backing value for enum "Suit" in /file.php:15

### Дивіться також

- [UnitEnum::cases()](unitenum.cases.md) - Повертає список
варіантів перерахування
- [BackedEnum::tryFrom()](backedenum.tryfrom.md) - Порівняє
скаляр з екземпляром перерахування або null
