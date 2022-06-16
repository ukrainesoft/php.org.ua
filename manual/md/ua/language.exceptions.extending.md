- [«Винятки](language.exceptions.md)
- [Fibers »](language.fibers.md)

- [PHP Manual](index.md)
- [Винятки](language.exceptions.md)
- успадкування винятків

## Спадкування винятків

Визначений користувачем клас виключення має бути визначений як
клас розширює (успадкований) вбудований клас Exception. Нижче
наведено методи та властивості класу Exception, доступні дочірнім
класів.

**Приклад #1 Вбудований клас Exception**

` <?phpclass Exception implements Throwable{    protected $message u003d 'Unknown exception'; // повідомлення про виключення    private   $string; // властивість для __toString   protected $code u003d 0; // користувацький код виключення   protected $file; // файл, в якому було викинуто виняток    protected $line; // рядок, в якому було викинуто виняток    private   $trace; // трасування дзвінків методів і функцій    private   $previous; // попереднє виключення, якщо виключення вкладене    public function __construct($message u003d '', $code u003d 0, Throwable $previous u003d null); final private function __clone(); // забороняє клонування виключення   final public  function getMessage(); // повідомлення виключення    final public  function getCode(); // код виключення    final public  function getFile(); // файл, де викинуто виняток    final public function getLine(); // рядок, на якому викинуто виняток    final public function getTrace(); //масив backtrace()   final public  function getPrevious(); // попереднє виключення   final public  function getTraceAsString(); // відформатований рядок трасування     // Перевизначуваний    public function __toString(); // відформатований рядок для відображення}?> `

Якщо клас, успадкований від Exception перевизначає
[конструктор](language.oop5.decon.md), необхідно викликати в
конструктори
[parent::\_\_construct()](language.oop5.paamayim-nekudotayim.md),
щоб бути впевненим, що всі доступні дані правильно присвоєно.
Метод [\_\_toString()](language.oop5.magic.md) може бути
перевизначено, щоб забезпечити потрібний висновок, коли об'єкт перетворюється
у рядок.

> **Примітка**:
>
> Винятки не можна клонувати. Спроба
> [клонувати](language.oop5.cloning.md) виняток призведе до
> Невиправна помилка **`E_ERROR`**.

**Приклад #2 Спадкування класу Exception**

` <?php/** * Определим свой класс исключения */class MyException extends Exception{    // Переопределим исключение так, что параметр message станет обязательным    public function __construct($message, $code u003d 0, Throwable $previous u003d null) {        / / деякий код          // переконайтеся, всі передані параметри вірні         parent::__construct($message, $code, $previous); }    // Перевизначимо строкове представлення об'єкта. public function __toString() {         return __CLASS__ . ": [{$this->code}]: {$this->message}
";    }    public function customFunction() {        echo "Ми можемо визначати нові методи в спадковому класі
";    }}/** * Создадим класс для тестирования исключения */class TestException{    public $var;    const THROW_NONE    u003d 0;    const THROW_CUSTOM  u003d 1;    const THROW_DEFAULT u003d 2;    function __construct($avalue u003d self::THROW_NONE) {        switch ($avalue) {            case self::THROW_CUSTOM:                // Выбрасываем собственное исключение                throw new MyException('1 - неправильный параметр', 5);                break;            case self::THROW_DEFAULT:                // Выбрасываем встроеное исключение                throw new Exception('2 - недопустимый параметр', 6);                break;            default:                // Никаких исключений, объект будет создан.                $this->var u003d $avalue;                break;        }    }}// Пример 1try {    $o u003d new TestException(TestException::THROW_CUSTOM) ;} catch (MyException $e) {      // Буде перехоплено    echo "Піймано власне перевизначене виняток
", $e;    $e->customFunction();} catch (Exception $e) {         // Буде пропущено    echo "Впіймане вбудоване 
", $e;}// Звідси буде продовжено виконання програмиvar_dump($o); // Nullecho "

";// Приклад 2try {    $o u003d new TestException(TestException::THROW_DEFAULT);} catch (MyException $e) {      Тип 
", $e;    $e->customFunction();} catch (Exception $e) {         // Буде перехоплено    echo "Перехоплено вбудований
", $e;}// Звідси буде продовжено виконання програмиvar_dump($o); // Nullecho "

";// Приклад 3try {    $o u003d new|
", $e;}//Продовження виконання програмиvar_dump($o); // Nullecho "

";// Приклад 4try {    $o u003d new TestException();} catch (Exception $e) {         // Буде пропущено, т.
", $e;}// Продовження виконання програмиvar_dump($o); // TestExceptionecho "

";?> `
