- [« session_write_close](function.session-write-close.md)
- [SessionHandler::close »](sessionhandler.close.md)

- [PHP Manual](index.md)
- [Сесії](book.session.md)
- Клас SessionHandler

# Клас SessionHandler

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

## Вступ

**SessionHandler** це спеціальний клас, який можна використовувати
для доповнення внутрішнього обробника сесій PHP шляхом створення
дочірніх класів від цього. Існує сім методів, які є
обгортками над сімома внутрішніми обробниками зберігання даних сесії
('open', 'close', 'read', 'write', 'destroy', 'gc' і 'create_sid'). за
замовчуванням цей клас обертає всі внутрішні обробники зберігання
сесії, визначені в опції конфігурації
[session.save_handler](session.configuration.md#ini.session.save-handler).
За замовчуванням ця опція має значення `files`. Інші внутрішні
обробники сесій надаються PHP-модулями, такими як SQLite
(`sqlite`), Memcache (`memcache`) та Memcached (`memcached`).

Примірник класу **SessionHandler** може встановлюватися як
обробника сесії за допомогою виклику функції
[session_set_save_handler()](function.session-set-save-handler.md). В
у цьому випадку він стане обгорткою існуючого внутрішнього обробника.
Класи, що розширюють **SessionHandler** дозволять перевизначити методи
обробника сесії або перехопити/відфільтрувати їх шляхом виклику
батьківських методів-оберток внутрішнього обробника сесій PHP.

Це дозволить вам, наприклад, перехопити методи `read` та `write` для
шифрування/дешифрування даних сесії та передачі результату батьківському
класу та від нього. Або, наприклад, ви можете повністю перевизначити
такий метод як callback-функція збирача сміття (`gc`).

Оскільки **SessionHandler** є обгорткою над стандартним внутрішнім
обробником сесії, то приклад, наведений вище для шифрування даних
може бути застосований до будь-якого внутрішнього обробника сесії навіть без
розуміння внутрішнього устрою процесу роботи сесії.

Для використання цього класу, по-перше, встановіть обробник,
який ви хочете доповнити використовуючи
[session.save_handler](session.configuration.md#ini.session.save-handler).
Далі передайте екземпляр класу **SessionHandler** або одного з
класів, що розширюють його функції
[session_set_save_handler()](function.session-set-save-handler.md).

Зверніть увагу, що методи цього класу призначені для внутрішнього
виклику з PHP. Викликати їх зі свого коду не потрібно. Додаткову
інформацію про роботу сесії можна дізнатися з опису функції
[session_set_save_handler()](function.session-set-save-handler.md).

## Огляд класів

class **SessionHandler** implements
[SessionHandlerInterface](class.sessionhandlerinterface.md),
[SessionIdInterface](class.sessionidinterface.md) {

/\* Методи \*/

public [close](sessionhandler.close.md)(): bool

public [create_sid](sessionhandler.create-sid.md)(): string

public [destroy](sessionhandler.destroy.md)(string `$id`): bool

public [gc](sessionhandler.gc.md)(int `$max_lifetime`): int\|false

public [open](sessionhandler.open.md)(string `$path`, string `$name`):
bool

public [read](sessionhandler.read.md)(string `$id`): string\|false

public [write](sessionhandler.write.md)(string `$id`, string `$data`):
bool

}

**Увага**

Цей клас призначений для розширення поточного внутрішнього обробника
сесії PHP. При цьому якщо вам потрібно написати власний обробник, то
необхідно написати власну реалізацію інтерфейсу
[SessionHandlerInterface](class.sessionhandlerinterface.md) замість
розширення класу **SessionHandler**.

**Приклад #1 Використання **SessionHandler** для того, щоб додати
шифрування даних до внутрішнього обробника сесій PHP.**

` <?php /**  * расшифровать данные, используя алгоритм AES 256  *  * @param data $edata  * @param string $password  * @return расшифрованные данные  */function decrypt($edata, $password) {    $data u003d base64_decode( $edata); $saltu003du003dsubstr($data, 0, 16); $ct u003d substr($data, 16); $rounds u003d 3; // залежить від довжини ключа    $data00 u003d $password.$salt; $hashu003du003darray(); $hash[0]u003du003dhash('sha256', $data00, true); $resultu003du003d$hash[0]; for ($i u003d 1; $i < $rounds; $i++) {        $hash[$i] u003d hash('sha256', $hash[$i - 1].$data00, $result .u003d $hash[$i]; }   $key u003d substr($result, 0, 32); $iv u003du003dsubstr($result, 32,16); return openssl_decrypt($ct, 'AES-256-CBC', $key, true, $iv); }/** * зашифровать данные алгоритмом AES 256 * * @param data $data * @param string $password * @return base64 зашифрованные данные */function encrypt($data, $password) {    // Установить случайную соль    $salt u003d openssl_random_pseudo_bytes (16); $salted u003d ''; $dx u003d ''; // Ключ солі (32) і вектор ініціалізації (16) u003d 48   while (strlen($salted) < 48) {      $dx u003d hash('$); $salted .u003d $dx; }   $key u003d substr($salted, 0, 32); $iv u003du003dsubstr($salted, 32,16); $encrypted_datau003du003dopenssl_encrypt($data, 'AES-256-CBC', $key, true, $iv); return base64_encode($salt . $encrypted_data);}class EncryptedSessionHandler extends SessionHandler{    private $key; public function __construct($key)    {       $$this->key u003d $key; }    public function read($id)    {        $data u003d parent::read($id); if (!$data) {             return ""; } else {             return decrypt($data, $this->key); }    }    public function| return parent::write($id, $data); }}// Тут ми перехоплюємо вбудований обробник 'files', можна використовувати любий другий// обробник, наприклад 'sqlite', 'memcache' або 'mecached', ' 'files');$key u003d 'secret_string';$handler u003d new EncryptedSessionHandler($key);session_set_save_handler($handler, true);session_start();// встановлюємо і отримувати

> **Примітка**:
>
> Оскільки методи цього класу призначені для внутрішніх викликів з
> PHP, як частина нормального процесу роботи сесій, виклики батьківських
> методів із дочірнього класу (іншими словами "рідних" обробників)
> повертатиме **`false`** доти, доки сесія не буде запущена
> (автоматично або прямим викликом
> [session_start()](function.session-start.md)). Це важливий момент для
> розуміння, особливо під час тестування, де методи класу можуть бути
> викликані вручну.

## Зміст

- [SessionHandler::close](sessionhandler.close.md) — Закриває
сесію
- [SessionHandler::create_sid](sessionhandler.create-sid.md) -
Повертає новий ідентифікатор сесії
- [SessionHandler::destroy](sessionhandler.destroy.md) — Знищує
сесію
- [SessionHandler::gc](sessionhandler.gc.md) - Очищає старі сесії
- [SessionHandler::open](sessionhandler.open.md) - Ініціалізує
сесію
- [SessionHandler::read](sessionhandler.read.md) — Зчитує дані
сесії
- [SessionHandler::write](sessionhandler.write.md) - Записує
дані сесії
