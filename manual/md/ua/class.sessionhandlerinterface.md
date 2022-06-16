- [« SessionHandler::write](sessionhandler.write.md)
- [SessionHandlerInterface::close
»](sessionhandlerinterface.close.md)

- [PHP Manual](index.md)
- [Сесії](book.session.md)
- Клас SessionHandlerInterface

# Клас SessionHandlerInterface

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

## Вступ

**SessionHandlerInterface** - це інтерфейс, який визначає
мінімальний прототип для створення користувальницького обробника сесії.
Для надання користувальницького обробника сесії функції
[session_set_save_handler()](function.session-set-save-handler.md),
використовуючи її ООП реалізацію, клас має реалізовувати цей інтерфейс.

Зверніть увагу, що callback-методи цього класу створені для
внутрішніх дзвінків PHP і не призначені для дзвінків з вашого коду.

## Огляд інтерфейсів

interface **SessionHandlerInterface** {

/\* Методи \*/

public [close](sessionhandlerinterface.close.md)(): bool

public [destroy](sessionhandlerinterface.destroy.md)(string `$id`):
bool

public [gc](sessionhandlerinterface.gc.md)(int `$max_lifetime`):
int\|false

public [open](sessionhandlerinterface.open.md)(string `$path`, string
`$name`): bool

public [read](sessionhandlerinterface.read.md)(string `$id`):
string\|false

public [write](sessionhandlerinterface.write.md)(string `$id`, string
`$data`): bool

}

**Приклад #1 Приклад використання **SessionHandlerInterface****

Наступний приклад реалізує файлову сесію так само, як це
реалізовано у внутрішньому обробнику сесії PHP. Цей приклад може бути
легко розширений для забезпечення зберігання сесій у вашій
базі даних.

Зверніть увагу, що ми використовуємо об'єктно-орієнтовані прототипи
з функцією
[session_set_save_handler()](function.session-set-save-handler.md) та
реєструємо функцію завершення (shutdown) використовуючи один із параметрів
цієї функції. Цю дію рекомендується робити у більшості
випадків, коли об'єкти реєструються як обробники сесії.

**Застереження**

Для стислості в цьому прикладі не додано перевірку вхідних даних.
Зверніть увагу, що параметр $id надається користувачем і
обов'язково повинен перевірятися для виключення можливих атак,
які використовують, наприклад, проблеми обходу шляху. *Так що в жодному разі
не використовуйте цей код у промисловій експлуатації, не додавши
відповідні перевірки.

` <?phpclass MySessionHandler implements SessionHandlerInterface{    private $savePath; public function open($savePath, $sessionName): bool    {       $this->savePath u003d $savePath; if (!is_dir($this->savePath)) {            mkdir($this->savePath, 0777); }     return true; }    public function close(): bool    {        return true; }   #[ReturnTypeWillChange]    public function read($id)   {        return (string)@file_get_contents("$this->savePath/ses_; }    public function write($id, $data): bool    {        return file_put_contents("$this->savePath/sess_$id", $data| false : true; }    public function destroy($id): bool   {        $file u003d "$this->savePath/sess_$id"; if (file_exists($file)) {            unlink($file); }     return true; }    #[ReturnTypeWillChange]    public function gc($maxlifetime)    {        foreach (glob("$this->savePath/sess_*") as $file) {            if (filemtime($file) + $maxlifetime < time() && file_exists( $file)) unlink($file); }        }}        return true; }}$handler u003d new MySessionHandler();session_set_save_handler($handler, true);session_start();// продовжуємо працювати з змінними сесії, встановлюючи або читання 

## Зміст

- [SessionHandlerInterface::close](sessionhandlerinterface.close.md)
- Закриває сесію
- [SessionHandlerInterface::destroy](sessionhandlerinterface.destroy.md)
- Знищує сесію
- [SessionHandlerInterface::gc](sessionhandlerinterface.gc.md) -
Очищає старі сесії
- [SessionHandlerInterface::open](sessionhandlerinterface.open.md) -
Ініціалізує сесію
- [SessionHandlerInterface::read](sessionhandlerinterface.read.md) -
Читає дані сесії
- [SessionHandlerInterface::write](sessionhandlerinterface.write.md)
— Записати дані сесії
