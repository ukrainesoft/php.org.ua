- [« Інтерфейси об'єктів] (language.oop5.interfaces.md)
- [Анонімні класи »](language.oop5.anonymous.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
- Трейти

## Трейти

PHP реалізує метод повторного використання коду під назвою
трейт.

Трейт – це механізм забезпечення повторного використання коду у мовах
з підтримкою лише одиночного успадкування, таких як PHP. Трейт
призначений для зменшення деяких обмежень одиночного
успадкування, дозволяючи розробнику повторно використати набори методів
вільно, у кількох незалежних класах та реалізованих з
використанням різних архітектур побудови класів. Семантика
комбінації трейтів та класів визначено таким чином, щоб знизити
рівень складності, а також уникнути типових проблем, пов'язаних з
множинним успадкуванням та змішуванням (mixins).

Трейт дуже схожий на клас, але призначений для групування
функціоналу добре структурованим та послідовним чином.
Неможливо створити самостійний екземпляр трейту. Це доповнення до
звичайному успадкування і дозволяє зробити горизонтальну композицію
поведінки, тобто застосування членів класу без необхідності
успадкування.

**Приклад #1 Приклад використання трейту**

`<?phptrait ezcReflectionReturnInfo {    function getReturnType() { /*1*/ }    function getReturnDescription() { /*2*/ }}class ezcReflex      /* ... */}class ezcReflectionFunction extends ReflectionFunction {    useuse ezcReflectionReturnInfo; /* ... */}?> `

### Пріоритет

Наслідуваний член з базового класу перевизначається членом, який перебуває
у трейте. Порядок пріоритету: члени з поточного класу
перевизначають методи у трейті, які у свою чергу перевизначають
успадковані методи.

**Приклад #2 Приклад пріоритету старшинства**

Спадковий метод від базового класу перевизначається методом,
доданим до MyHelloWorld з трейту SayWorld. Поведінка така ж як і
для методів, визначених у MyHelloWorld. Порядок пріоритету
такий: методи з поточного класу перевизначають методи трейту, які в
свою чергу, перевизначають методи з базового класу.

`<?phpclass Base {   publicfunction sayHello() {        echo 'Hello '; }}trait SayWorld {    public function sayHello() {        parent::sayHello(); echo 'World!'; }}class MyHelloWorld extends Base {    use SayWorld;}$o u003d new MyHelloWorld();$o->sayHello();?> `

Результат виконання цього прикладу:

Hello World!

**Приклад #3 Приклад альтернативного порядку пріоритету**

`<?phptrait HelloWorld {    public function sayHello() {       echo 'Hello World!'; }}class TheWorldIsNotEnough {    use| HelloWorld; public function sayHello() {         echo 'Hello Universe!'; }}$o u003d new TheWorldIsNotEnough();$o->sayHello();?> `

Результат виконання цього прикладу:

Hello Universe!

### Кілька трейтів

До класу можна додати кілька трейтів, перерахувавши їх у директиві
`use` через кому.

**Приклад #4 Приклад використання кількох трейтів**

`<?phptrait Hello {    public function sayHello() {       echo 'Hello '; }}trait World {    public function sayWorld() {        echo 'World'; }}class MyHelloWorld {    use Hello, World; public function sayExclamationMark() {       echo '!'; }}$o u003d new MyHelloWorld();$o->sayHello();$o->sayWorld();$o->sayExclamationMark();?> `

Результат виконання цього прикладу:

Hello World!

### Вирішення конфліктів

Якщо два трейти додають метод з тим самим ім'ям, це призводить до
фатальної помилки у разі, якщо конфлікт явно не вирішено.

Для вирішення конфліктів іменування між трейтами, що використовуються в
одному і тому ж класі, необхідно використовувати оператор `insteadof` для
того, щоб точно вибрати один із конфліктуючих методів.

Оскільки попередній оператор дозволяє лише виключати методи, оператор
`as` може бути використаний для включення одного з конфліктуючих
методів під іншим ім'ям Зверніть увагу, що оператор `as` не
перейменовує спосіб і впливає будь-якої інший метод.

**Приклад #5 Приклад вирішення конфліктів**

У цьому прикладі Talker використовує трейти A і B. Оскільки A і B є
Конфліктуючі методи, він використовує варіант малогоTalk з трейту B, а
варіант bigTalk – з трейту A.

Клас Aliased_Talker застосовує оператор `as`, щоб отримати можливість
використовувати реалізацію bigTalk з B під додатковим псевдонімом
`Talk`.

`<?phptrait A {    public function smallTalk() {        echo 'a'; }    public function bigTalk() {       echo 'A'; }}trait B {    public function smallTalk() {        echo 'b'; }    public function bigTalk() {       echo 'B'; }}class Talker {    use A, B {        B::smallTalk insteadof A; A::bigTalk insteadof B; }}class Aliased_Talker {    use A, B {        B::smallTalk insteadof A; A::bigTalk insteadof B; B::bigTalk as talk; }}?> `

### Зміна видимості методу

Використовуючи синтаксис оператора `as`, можна також змінити видимість
методу у використовуючому трейт класі.

**Приклад #6 Приклад зміни видимості методу**

`<?phptrait HelloWorld {    public function sayHello() {       echo 'Hello World!'; }}// Зміна видимості метод sayHelloclass MyClass1 {    useuse HelloWorld { sayHello as protected; }}// Створення псевдоніма методу з зміненою видимістю// видимість sayHello не зміниласяclass MyClass2 {    use HelloWorld { sayHello as vava }}?> `

### Трейти, що складаються з трейтів

Трейти можуть використовуватись як у класах, так і в інших трейтах.
Використовуючи один або більше трейтів для визначення іншого трейту, він може
частково або повністю складатися із членів, визначених у цих трейтах.

**Приклад #7 Приклад трейтів, складених із трейтів**

`<?phptrait Hello {    public function sayHello() {       echo 'Hello '; }}trait World {    public function sayWorld() {        echo 'World!'; }}trait HelloWorld {    use Hello, World;}class MyHelloWorld {    use HelloWorld;}$o u003d new MyHelloWorld();$o->sayHello();$o->sayWorld();

Результат виконання цього прикладу:

Hello World!

### Абстрактні члени трейтів

Трейти підтримують використання абстрактних методів для того, щоб
встановити вимоги до класу. Підтримуються
загальнодоступні, захищені та закриті методи. До PHP 8.0.0 підтримувалися
лише загальнодоступні та захищені абстрактні методи.

**Застереження**

Конкретний клас виконує ці вимоги шляхом визначення конкретного
методу з тим самим ім'ям; при цьому сигнатура методу може відрізнятись.

**Приклад #8 Вимоги трейту за допомогою абстрактних методів**

` <?phptrait Hello {    public function sayHelloWorld() {       echo 'Hello'.$this->getWorld(); }    abstract public function getWorld();}class MyHelloWorld {    private $world; use Hello; public function getWorld() {        return $this->world; }    public function setWorld($val) {        $this->world u003d $val; }}?> `

### Статичні члени трейту

У трейтах можна визначати статичні змінні, статичні методи та
статичні характеристики.

> **Примітка**:
>
> Починаючи з PHP 8.1.0, виклик статичного методу або доступ до
> статичної властивості безпосередньо в трейті застарів. До статичних
> методам і властивостям слід звертатися лише у класі, який використовує
> Трейт.

**Приклад #9 Статичні змінні**

` <?phptrait Counter {    public function inc() {        static $c u003d 0; $c u003d $c + 1; echo "$c
";    }}class C1 {    use Counter;}class C2 {   useuseCounter;}$o u003d new C1(); $o->inc(); // echo $ inc(); // echo 1?> `

**Приклад #10 Статичні методи**

` <?phptrait StaticExample {    public static function doSomething() {        return 'Що-небудь робимо'; }}class Example {    use StaticExample;}Example::doSomething();?> `

**Приклад #11 Статичні властивості**

` <?phptrait StaticExample {    public static $static u003d 'foo';}class Example {    useuse StaticExample;}echo Example::$static;?> `

### Властивості

Трейти можуть також визначати властивості.

**Приклад #12 Визначення властивостей**

` <?phptrait PropertiesTrait {    public|$x u003d 1;}class PropertiesExample {    useuse PropertiesTrait;}$example u003d new PropertiesExample;$example->x;?>

Якщо трейт визначає властивість, то клас не може визначити властивість
таким же ім'ям, крім випадків повного збігу (те ж початкове
значення і модифікатор видимості), інакше буде згенеровано фатальну
помилка.

**Приклад #13 Вирішення конфліктів**

` <?phptrait PropertiesTrait {    public $same u003d true; public $different u003d false;}class PropertiesExample {    use PropertiesTrait; public $same u003d true; public $different u003d true; // Фатальна помилка}?> `
