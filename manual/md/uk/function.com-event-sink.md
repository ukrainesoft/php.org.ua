- [«com_create_guid](function.com-create-guid.md)
- [com_get_active_object »](function.com-get-active-object.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Зв'язати повідомлення COM з об'єктом PHP

# com_event_sink

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

com_event_sink — Зв'язати повідомлення COM з об'єктом PHP

### Опис

**com_event_sink**([variant](class.variant.md) `$variant`, object
`$sink_object`, array\|string\|null `$sink_interface` u003d **`null`**):
bool

Зобов'язує об'єкт COM прокидати повідомлення, створені `variant` в
об'єкт PHP `sink_object`.

Будьте обережні з цією можливістю. Якщо ви робитимете щось
схоже на приклад нижче, то це не матиме жодного сенсу при
запуску у контексті веб-сервера.

### Список параметрів

`variant`

`sink_object`
`sink_object` має бути екземпляром класу з методами, названими як
у вибраному диспетчерському інтерфейсі; ви можете використати функцію
[com_print_typeinfo()](function.com-print-typeinfo.md) для допомоги в
генерації шаблону класу.

`sink_interface`
PHP намагатиметься використовувати тип диспетчерського інтерфейсу по
замовчуванням, як зазначено в бібліотеці типів, пов'язаної з `variant`, але ви
можете змінити таку поведінку, задавши в `sink_interface` ім'я бажаного
диспетчерський інтерфейс.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----------|
| 8.0.0 | `sink_interface` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад com_event_sink**

` <?phpclass IEEventSinker {    var $terminated u003d false; function ProgressChange($progress, $progressmax) {      echo "Прогрес завантаження: $progress / $progressmax
";    }    function DocumentComplete(&$dom, $url) {      echo "Завантаження $url завершено
";    }   function OnQuit() {      echo "Quit!
";      $this->terminated u003d true;    }}$ie u003d new COM("InternetExplorer.Application");$sink u003d neu IEEventSinker();com_event_sink($ie, $ Visible u003d true;$ie->Navigate("http://www.example.org");while(!$sink->terminated) { com_message_pump(4000);}$ie u003d null;?> `

### Примітки

**Застереження**

До PHP 8.0.0 виклик [exit()](function.exit.md) з будь-якого обробника
події не підтримувався і міг призвести до зависання PHP. Це можна
обійти, викидаючи виняток із обробника події, перехоплюючи
виняток в основному коді та викликаючи звідти
[exit()](function.exit.md).

### Дивіться також

- [com_print_typeinfo()](function.com-print-typeinfo.md) - Друкує
визначення класу PHP для інтерфейсу, що наслідує IDispatch
- [com_message_pump()](function.com-message-pump.md) - Обробка
повідомлень COM, що прийшли не пізніше timeoutms мілісекунд після неї
запуску
