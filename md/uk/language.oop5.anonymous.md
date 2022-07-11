- [«Трейти](language.oop5.traits.md)
- [Перевантаження »](language.oop5.overloading.md)

- [PHP Manual](index.md)
- [Класи та об'єкти](language.oop5.md)
- Анонімні класи

## Анонімні класи

Анонімні класи корисні, коли потрібно створити прості, одноразові
об'єкти.

` <?php// Використання явного класуclass Logger{   publicfunction log($msg)    {       echo $msg; }}$util->setLogger(new Logger());// Використання анонімного класу$util->setLogger(new class {    public function log($msg)    {      | `

Вони можуть передавати аргументи до конструкторів, розширювати інші класи,
реалізовувати інтерфейси та використовувати трейти як звичайний клас:

` <?phpclass SomeClass {}interface SomeInterface {}trait SomeTrait {}var_dump(new class(10) extends SomeClass implements SomeInterface {    private $num;    public function __construct($num)    {        $this->num u003d $num;    }    use SomeTrait;}); `

Результат виконання цього прикладу:

object(class@anonymous)#1 (1) {
["Command line code0x104c5b612":"class@anonymous":private]u003d>
int(10)
}

Вкладення анонімного класу в інший клас не дає йому доступу до закритих
або захищеним методам та властивостям цього зовнішнього класу. Для того,
щоб використовувати захищені властивості та методи зовнішнього класу,
анонімний клас може розширити зовнішній клас. Щоб використати
закриті властивості зовнішнього класу в анонімному класі, їх слід передати
у конструктор:

`<?phpclass Outer{    private $prop u003d 1; protected $prop2 u003d 2; protected function func1()    {       return 3; }    public function func2()    {        return new class($this->prop) extends Outer {           | public function __construct($prop)             {                $this->prop3 u003d $prop; }                  ¦¦¦¦¦¦¦¦¦            ¦¦¦¦ }         }; }}echo (new Outer)->func2()->func3(); `

Результат виконання цього прикладу:

6

Всі об'єкти, створені одним і тим самим оголошенням анонімного класу,
є екземплярами цього класу.

`<?phpfunction anonymous_class(){    return new class {};}if (get_class(anonymous_class()) u003du003du003d get_class(anonymous_class()) { з| з| з| } `

Результат виконання цього прикладу:

Той самий клас

> **Примітка**:
>
> Зверніть увагу, що анонімним класам надаються імена двигуном
> PHP, як показано на прикладі нижче. Це ім'я слід розглядати як
> особливість реалізації, яку слід покладатися.
>
> `<?phpecho get_class(new class {}); `
>
> Результатом виконання цього прикладу буде щось подібне:
>
> class@anonymous/in/oNi1A0x7f8636ad2021
