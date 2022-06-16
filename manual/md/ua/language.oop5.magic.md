- [« Ітератори об'єктів] (language.oop5.iterations.md)
- [Ключове слово final»](language.oop5.final.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
- Магічні методи

## Магічні методи

Магічні методи – це спеціальні методи, які перевизначають
дія PHP за умовчанням, коли над об'єктом виконуються певні
дії.

**Застереження**

Усі імена методів, що починаються з `__`, зарезервовані PHP. Не
рекомендується використовувати імена методів з \_\_ у PHP, якщо ви не хочете
використати відповідну магічну функціональність.

Наступні назви методів вважаються магічними:
[\_\_construct()](language.oop5.decon.md#object.construct),
[\_\_destruct()](language.oop5.decon.md#object.destruct),
[\_\_call()](language.oop5.overloading.md#object.call),
[\_\_callStatic()](language.oop5.overloading.md#object.callstatic),
[\_\_get()](language.oop5.overloading.md#object.get),
[\_\_set()](language.oop5.overloading.md#object.set),
[\_\_isset()](language.oop5.overloading.md#object.isset),
[\_\_unset()](language.oop5.overloading.md#object.unset),
[\_\_sleep()](language.oop5.magic.md#object.sleep),
[\_\_wakeup()](language.oop5.magic.md#object.wakeup),
[\_\_serialize()](language.oop5.magic.md#object.serialize),
[\_\_unserialize()](language.oop5.magic.md#object.unserialize),
[\_\_toString()](language.oop5.magic.md#object.tostring),
[\_\_invoke()](language.oop5.magic.md#object.invoke),
[\_\_set_state()](language.oop5.magic.md#object.set-state),
[\_\_clone()](language.oop5.cloning.md#object.clone) та
[\_\_debugInfo()](language.oop5.magic.md#object.debuginfo)

**Увага**

Усі магічні методи, за винятком
[\_\_construct()](language.oop5.decon.md#object.construct),
[\_\_destruct()](language.oop5.decon.md#object.destruct) та
[\_\_clone()](language.oop5.cloning.md#object.clone), *МОВНІ* бути
оголошено як `public`, інакше буде викликана помилка рівня
**`E_WARNING`**. До PHP 8.0.0 для магічних методів
[\_\_sleep()](language.oop5.magic.md#object.sleep),
[\_\_wakeup()](language.oop5.magic.md#object.wakeup),
[\_\_serialize()](language.oop5.magic.md#object.serialize),
[\_\_unserialize()](language.oop5.magic.md#object.unserialize) та
[\_\_set_state()](language.oop5.magic.md#object.set-state) не
виконувалась перевірка.

**Увага**

Якщо оголошення типу використовуються у визначенні магічного методу, вони
повинні бути ідентичні до сигнатури, описаної в цьому документі. В протилежному
У разі видається фатальна помилка. До PHP 8.0.0 діагностичні повідомлення
не вирушали. Проте
[\_\_construct()](language.oop5.decon.md#object.construct) та
[\_\_destruct()](language.oop5.decon.md#object.destruct) не повинні
оголошувати тип, що повертається; в іншому випадку видається фатальна
помилка.

### [\_\_sleep()](language.oop5.magic.md#object.sleep) та [\_\_wakeup()](language.oop5.magic.md#object.wakeup)

public **\_\_sleep**(): array

public **\_\_wakeup**(): void

Функція [serialize()](function.serialize.md) перевіряє, чи є
чи в класі метод із магічним ім'ям
[\_\_sleep()](language.oop5.magic.md#object.sleep). Якщо це так, то
цей метод виконується до будь-якої операції серіалізації. Він може очистити
об'єкт і повинен повертати масив з іменами всіх змінних цього
об'єкта, які мають бути серіалізовані. Якщо метод нічого не
повертає, то серіалізується **`null`** та видається попередження
**`E_NOTICE`**.

> **Примітка**:
>
> Неприпустимо повертати в
> [\_\_sleep()](language.oop5.magic.md#object.sleep) імена закритих
> властивостей у батьківському класі. Це призведе до помилки рівня
> **`E_NOTICE`**. Натомість ви можете використовувати
> [\_\_serialize()](language.oop5.magic.md#object.serialize).

Передбачуване використання
[\_\_sleep()](language.oop5.magic.md#object.sleep) полягає в
завершення роботи над даними, що чекають на обробку або інших подібних
задач очищення. Крім того, цей метод може бути корисним, коли є
дуже великі об'єкти, які немає потреби повністю зберігати.

З іншого боку, функція [unserialize()](function.unserialize.md)
перевіряє наявність методу з магічним ім'ям
[\_\_wakeup()](language.oop5.magic.md#object.wakeup). Якщо вона
є, ця функція може відновлювати будь-які ресурси, які можуть
мати об'єкт.

Передбачуване використання
[\_\_wakeup()](language.oop5.magic.md#object.wakeup) полягає в
відновлення будь-яких з'єднань з базою даних, які могли бути
втрачені під час операції серіалізації та виконання інших операцій
повторної ініціалізації.

**Приклад #1 Серіалізація та десеріалізація**

`<?phpclass Connection{    protected $link; private $dsn, $username, $password; public function __construct($dsn, $username, $password)   {        $this->dsn u003d $dsn; $this->username u003d $username; $this->password u003d $password; $this->connect(); }    private function connect()    {        $this->link u003d new PDO($this->dsn, $this->username, $this->password); }   publicfunction __sleep()   {        return array('dsn', 'username', 'password'); }    public function __wakeup()   {         $this->connect(); }}?> `

### [\_\_serialize()](language.oop5.magic.md#object.serialize) та [\_\_unserialize()](language.oop5.magic.md#object.unserialize)

public **\_\_serialize**(): array

public **\_\_unserialize**(array `$data`): void

[serialize()](function.serialize.md) перевіряє, чи є у класі
функція з магічним ім'ям
[\_\_serialize()](language.oop5.magic.md#object.serialize). Якщо так,
функція виконується перед будь-якою серіалізацією. Вона повинна створити і
повернути асоціативний масив пар ключ/значення, які представляють
серіалізовану форму об'єкта. Якщо масив не повернутий, буде видано
[TypeError](class.typeerror.md).

> **Примітка**:
>
> Якщо і [\_\_serialize()](language.oop5.magic.md#object.serialize) та
> [\_\_sleep()](language.oop5.magic.md#object.sleep) визначено в
> одному й тому самому об'єкті, буде викликаний лише метод
> [\_\_serialize()](language.oop5.magic.md#object.serialize).
> [\_\_sleep()](language.oop5.magic.md#object.sleep) буде
> ігноруватися. Якщо об'єкт реалізує інтерфейс
> [Serializable](class.serializable.md), метод `serialize()`
> інтерфейсу буде ігноруватися, а замість нього буде використано
> [\_\_serialize()](language.oop5.magic.md#object.serialize).

Передбачуване використання
[\_\_serialize()](language.oop5.magic.md#object.serialize) полягає
у визначенні зручного для серіалізації довільного уявлення
об'єкт. Елементи масиву можуть відповідати властивостям об'єкта, але
це не обов'язково.

І навпаки, [unserialize()](function.unserialize.md) перевіряє наявність
магічної функції
[\_\_unserialize()](language.oop5.magic.md#object.unserialize). Якщо
функція присутня, їй буде передано відновлений масив, який
був повернутий з
[\_\_serialize()](language.oop5.magic.md#object.serialize). Потім він
може відновити властивості об'єкта з цього масиву відповідним
чином.

> **Примітка**:
>
> Якщо і
> [\_\_unserialize()](language.oop5.magic.md#object.unserialize) та
> [\_\_wakeup()](language.oop5.magic.md#object.wakeup) визначено в
> одному й тому самому об'єкті, буде викликаний лише метод
> [\_\_unserialize()](language.oop5.magic.md#object.unserialize).
> [\_\_wakeup()](language.oop5.magic.md#object.wakeup) буде
> ігноруватися.

> **Примітка**:
>
> Функція доступна з PHP 7.4.0.

**Приклад #2 Серіалізація та десеріалізація**

`<?phpclass Connection{    protected $link; private $dsn, $username, $password; public function __construct($dsn, $username, $password)   {        $this->dsn u003d $dsn; $this->username u003d $username; $this->password u003d $password; $this->connect(); }    private function connect()    {        $this->link u003d new PDO($this->dsn, $this->username, $this->password); }    public function __serialize(): array    {        return [          'dsn' u003d> $this->dsn,          'user' u003d> $this->username,          'pass' u003d> $this->password,        ]; }    public function __unserialize(array $data): void    {        $this->dsn u003d $data['dsn']; $this->username u003d $data['user']; $this->password u003d $data['pass']; $this->connect(); }}?> `

### [\_\_toString()](language.oop5.magic.md#object.tostring)

public **\_\_toString**(): string

Метод [\_\_toString()](language.oop5.magic.md#object.tostring)
дозволяє класу вирішувати, як він повинен реагувати при перетворенні на
рядок. Наприклад, що вивести під час виконання `echo $obj;`.

**Увага**

Починаючи з PHP 8.0.0, значення, що повертається, слід стандартної семантиці
типу PHP, що означає, що воно буде перетворено на рядок (string),
якщо можливо, і якщо [strict
typing](language.types.declarations.md#language.types.declarations.strict)
вимкнено.

Починаючи з PHP 8.0.0, будь-який клас, що містить метод
[\_\_toString()](language.oop5.magic.md#object.tostring), також буде
неявно реалізовувати інтерфейс [Stringable](class.stringable.md) та,
таким чином, буде проходити перевірку типу для цього інтерфейсу
будь-якому разі рекомендується явно реалізувати інтерфейс.

У PHP 7.4 повертається значення *МОВНО* бути рядком (string), інакше
видається [Error](class.error.md).

До PHP 7.4.0 повертається значення *має* бути рядком (string), в
в іншому випадку видається фатальна помилка **`E_RECOVERABLE_ERROR`**. is
emitted.

**Увага**

Не можна викинути виняток із методу
[\_\_toString()](language.oop5.magic.md#object.tostring) до PHP 7.4.0.
Це призведе до фатальної помилки.

**Приклад #3 Простий приклад**

`<?php// Оголошення простого класуclass TestClass{    public $foo; public function __construct($foo)    {        $this->foo u003d $foo; }    public function __toString()    {        return $this->foo; }}$class u003d new TestClass('Привіт');echo $class;?> `

Результат виконання цього прикладу:

вітання

### [\_\_invoke()](language.oop5.magic.md#object.invoke)

**\_\_invoke**( `...$values`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Метод [\_\_invoke()](language.oop5.magic.md#object.invoke) викликається,
коли скрипт намагається виконати об'єкт як функцію.

**Приклад #4 Використання
[\_\_invoke()](language.oop5.magic.md#object.invoke)**

`<?phpclass CallableClass{    public function __invoke($x)    {       var_dump($x); }}$obj u003d new CallableClass;$obj(5);var_dump(is_callable($obj));?> `

Результат виконання цього прикладу:

int(5)
bool(true)

### [\_\_set_state()](language.oop5.magic.md#object.set-state)

static **\_\_set_state**(array `$properties`): object

Цей [статичний](language.oop5.static.md) метод викликається для тих
класів, що експортуються функцією
[var_export()](function.var-export.md).

Єдиним параметром цього методу є масив, що містить
експортовані властивості як `['property' u003d> value, ...]`.

**Приклад #5 Використання
[\_\_set_state()](language.oop5.magic.md#object.set-state)**

`<?phpclass A{    public $var1; public $var2; public static function __set_state($an_array)    {        $obj u003d new A; $obj->var1 u003d $an_array['var1']; $obj->var2 u003d $an_array['var2']; return $obj; }}$a u003d new A;$a->var1 u003d 5;$a->var2 u003d 'foo';$b u003d var_export($a, true);var_dump($b);eval('$c u003d ' . $b . ';');var_dump($c);?> `

Результат виконання цього прикладу:

string(60) "A::__set_state(array(
'var1' u003d> 5,
'var2' u003d> 'foo',
))"
object(A)#2 (2) {
["var1"]u003d>
int(5)
["var2"]u003d>
string(3) "foo"
}

> **Примітка**: Під час експорту об'єкта
> [var_export()](function.var-export.md) не перевіряє, чи реалізує
> клас об'єкта метод
> [\_\_set_state()](language.oop5.magic.md#object.set-state), тому
> повторний імпорт об'єктів призведе до виключення
> [Error](class.error.md), якщо метод \_\_set_state() не реалізований. В
> Зокрема, це стосується деяких внутрішніх класів. Необхідність
> перевірки, чи реалізує імпортований клас метод \_\_set_state(),
> повністю лежить розробнику.

### [\_\_debugInfo()](language.oop5.magic.md#object.debuginfo)

**\_\_debugInfo**(): array

Цей метод викликається функцією [var_dump()](function.var-dump.md),
коли потрібно вивести список властивостей об'єкта. Якщо цей метод не
визначено, тоді будуть виведені всі властивості об'єкта з модифікаторами
public, protected та private.

**Приклад #6 Використання
[\_\_debugInfo()](language.oop5.magic.md#object.debuginfo)**

` <?phpclass C {    private $prop; public function __construct($val) {         $this->prop u003d $val; }   publicfunction __debugInfo() {        return [            'propSquared' u003d> $this->prop **   }}var_dump(new C(42));?> `

Результат виконання цього прикладу:

object(C)#1 (1) {
["propSquared"]u003d>
int(1764)
}
