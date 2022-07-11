- [« Основи](language.oop5.basic.md)
- [Константи класів »](language.oop5.constants.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
- Властивості

## Властивості

Змінні, що є членами класу, називаються "властивості".
Також їх називають, використовуючи інші терміни, такі як * поля *, але в
рамках цієї документації, ми будемо називати їх властивостями. Вони
визначаються з використанням хоча б одного необов'язкового (за
винятком `readonly`-властивостей) модифікатора (наприклад, [Область
видимості](language.oop5.visibility.md), [Ключове слово
static](language.oop5.static.md) або, починаючи з PHP 8.1.0,
[readonly](language.oop5.properties.md#language.oop5.properties.readonly-properties)),
починаючи з PHP 7.4, за яким слідує необов'язкове оголошення типу, за
яким слід звичайне оголошення змінної. Це оголошення може
містити ініціалізацію, але ця ініціалізація має бути [постійним
значенням] (language.constants.md).

> **Примітка**:
>
> Застарілий спосіб оголошення властивостей класу - використання ключового
> слова `var` замість модифікатора.

> **Примітка**: Властивість без модифікатора [Область
> видимості](language.oop5.visibility.md), буде оголошено як
> `public`.

У межах методів класу доступ до нестатичних властивостей може бути
отримано за допомогою `->` (об'єктного оператора): `$this->property` (де
`property` - ім'я якості). Доступ до статичних властивостей
здійснюється за допомогою `::` (подвійного двокрапки): `self::$property`.
Додаткову інформацію про відмінність статичних та нестатичних властивостей
дивіться розділ [Ключове слово static](language.oop5.static.md).

Псевдозмінна `$this` доступна всередині будь-якого методу класу, коли
цей метод викликається із контексту об'єкта. `$this` - значення
Викликає об'єкта.

**Приклад #1 Визначення властивостей**

`<?phpclass SimpleClass{   public $var1 u003d 'hello ' . 'world'; public$var2u003du003d<<<EODhello worldEOD; public $var3 u003d 1+2; // неправильне визначення властивостей:   public $var4 u003d self::myStaticMethod(); public $var5 u003d $myVar; // правильне визначення властивостей:   public $var6 u003d myConstant; public $var7 u003d [true, false]; public $var8 u003d <<<'EOD'hello worldEOD; // Без модифікатора області видимості:   static $var9; readonly int $var10;}?> `

> **Примітка**:
>
> Існують різні функції обробки класів і об'єктів.
> Дивіться довідник [функцій для
> класів/об'єктів] (ref.classobj.md).

### Оголошення типів

Починаючи з PHP 7.4.0, визначення властивостей можуть містити [Оголошення
типів](language.types.declarations.md), крім типу
[callable](language.types.callable.md).

**Приклад #2 Приклад використання типізованих властивостей**

`<?phpclass User{    public int $id; public ?string $name; public function __construct(int $id, ?string $name)    {        $this->id u003d $id; $this->name u003d $name; }}$user u003d new User(1234, null);var_dump($user->id);var_dump($user->name);?> `

Результат виконання цього прикладу:

int(1234)
NULL

Перед зверненням до типізованої властивості має бути задане
значення, інакше буде викинуто виняток [Error](class.error.md).

**Приклад #3 Звернення до властивостей**

`<?phpclass Shape{    public int $numberOfSides; public string $name; public function setNumberOfSides(int$numberOfSides): void    {       $this->numberOfSides u003d$numberOfSides; }    public function setName(string $name): void    {       $this->name u003d $name; }    public function getNumberOfSides(): int    {       return $this->numberOfSides; }    public function getName(): string    {        return $this->name; }}$triangle u003d new Shape();$triangle->setName("triangle");$triangle->setNumberofSides(3);var_dump($triangle->getName());var_dump($triangle->getNumberOfSides() );$circle u003d new Shape();$circle->setName("circle");var_dump($circle->getName());var_dump($circle->getNumberOfSides());?> `

Результат виконання цього прикладу:

string(8) "triangle"
int(3)
string(6) "circle"

Error error: Uncaught Error: Typed property Shape::$numberOfSides must not be accessed before initialization

### Readonly-властивості

Починаючи з PHP 8.1.0, властивість можна оголосити за допомогою модифікатора
`readonly`, який запобігає зміні властивості після
ініціалізації.

**Приклад #4 Приклади readonly-властивостей**

` <?phpclass Test {   public readonly string $prop; public function __construct(string$$prop) {       // Правильна ініціалізація. $this->prop u003d $prop; }}$test u003d new Test("foobar");// Правильне читання.var_dump($test->prop); // string(6) "foobar"// Неправильне перевизначення. Не має значення, присвоєне значення таке ж.$test->prop u003d "foobar";// Помилка: неможливо змінити readonly-властивість Test::$prop?> `

> **Примітка**:
>
> Модифікатор readonly може застосовуватися тільки до [типізованих
> властивостей](language.oop5.properties.md#language.oop5.properties.typed-properties).
> Readonly-властивість без обмежень типу можна створити за допомогою типу
> [mixed](language.types.declarations.md#language.types.declarations.mixed).

> **Примітка**:
>
> Статичні результати-властивості не підтримуються.

Readonly-властивість можна ініціалізувати лише один раз і тільки з
області, де воно було оголошено. Будь-яке інше присвоєння або
зміна якості призведе до виключення [Error](class.error.md).

**Приклад #5 Неправильна ініціалізація readonly-властивостей**

`<?phpclass Test1 {    public readonly string $prop;}$test1 u003d new Test1;// Неправильна ініціалізація за межами закритої області. :$prop з глобальної області?> `

> **Примітка**:
>
> Вказівка явного значення за замовчуванням для readonly-властивостей не
> допускається, тому що readonly-властивість зі значенням за умовчанням,
> по суті, те саме, що і константа і тому не дуже корисно.
>
> ` <?phpclass Test {    // Помилка: у readonly-властивості Test::$prop не може бути значення за замовчуванням    public readonly int $prop ;

> **Примітка**:
>
> Readonly-властивості не можуть бути знищені за допомогою
> [unset()](function.unset.md) після їхньої ініціалізації. Проте можна
> знищити readonly-властивість до ініціалізації з області, в якій
> було оголошено властивість.

Модифікації не обов'язково є простими присвоєннями,
перераховане нижче також призведе до виключення
[Error](class.error.md):

` <?phpclass Test {    public function __construct(        public readonly int $i u003d 0,        public readonly array $ary u003d [],    ) {}}$test u003d new Test;$test->i +u003d 1;$test-> i++;++$test->i;$test->ary[] u003d 1;$test->ary[0][] u003d 1;$ref u003d& $test->i;$test->i u003d& $ref;byRef($test->i);foreach ($test as &$prop);?> `

Однак реально-властивості не виключають внутрішньої мінливості. Об'єкти
(або ресурси), що зберігаються в readonly-властивості, як і раніше можуть бути
змінені всередині:

` <?phpclass Test {    public function __construct(publicreadonly object $obj) {}}$test u003d new Test(new stdClass);// Правильне внутрішня зміна.$test| .$test->obj u003d new stdClass;?> `
