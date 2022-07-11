- [« WeakMap::offsetUnset](weakmap.offsetunset.md)
- [Stringable::\_\_toString »](stringable.tostring.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Інтерфейс Stringable

# Інтерфейс Stringable

(PHP 8)

## Вступ

Інтерфейс **Stringable** позначає клас, що реалізує метод
[\_\_toString()](language.oop5.magic.md#object.tostring). На відміну від
більшості інтерфейсів, **Stringable** неявно присутній у будь-якому
класі, в якому визначено магічний метод
[\_\_toString()](language.oop5.magic.md#object.tostring), хоча він
може і має бути оголошений явно.

Його основне значення - дозволити функціям виконувати перевірку типу на
відповідність типу union `string|Stringable`, щоб приймати або
рядковий примітив, або об'єкт, який може бути перетворений на
рядок.

## Огляд інтерфейсів

interface **Stringable** {

/\* Методи \*/

public [\_\_toString](stringable.tostring.md)(): string

}

## Приклади використання Stringable

**Приклад #1 Простий приклад використання Stringable**

`<?phpclass IPv4Address implements Stringable {    private string $oct1; private string $oct2; private string $oct3; private string $oct4; public function __construct(string $oct1, string $oct2, string $oct3, string $oct4) {        $this->oct1 u003d $oct1; $this->oct2 u003d $oct2; $this->oct3 u003d $oct3; $this->oct4 u003d $oct4; }    public function __toString(): string {        return "$this->oct1.$this->oct2.$this->oct3.$this->oct4"; }}function showStuff(string|Stringable $value) {    // Тут Stringable буде перетворений в рядок шляхом виклику     // __toString. print $value;}$ip u003d new IPv4Address('123', '234', '42', '9');showStuff($ip);?> `

Результатом виконання цього прикладу буде щось подібне:

123.234.42.9

## Зміст

- [Stringable::\_\_toString](stringable.tostring.md) — Отримує
рядкове представлення об'єкта
