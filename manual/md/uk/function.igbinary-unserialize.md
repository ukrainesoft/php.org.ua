- [«igbinary_serialize](function.igbinary-serialize.md)
- [JSON »](book.json.md)

- [PHP Manual](index.md)
- [Функції Igbinary](ref.igbinary.md)
- Створює значення PHP із збереженого представлення функцією
igbinary_serialize

#igbinary_unserialize

(PECL igbinary \>u003d 1.1.1)

igbinary_unserialize — Створює значення PHP із збереженого
уявлення функцією
[igbinary_serialize()](function.igbinary-serialize.md)

### Опис

**igbinary_unserialize**(string `$str`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**igbinary_unserialize()** бере одну серіалізовану змінну з
[igbinary_serialize()](function.igbinary-serialize.md) і перетворює
її назад у значення PHP.

**Увага**

Ненадійні вхідні дані користувача не повинні передаватися в
**igbinary_unserialize()**. Десеріалізація може призвести до завантаження та
виконання коду через створення екземпляра об'єкта та автозавантаження, тоді
зловмисник може цим скористатися. Натомість слід
використовувати безпечний стандартний формат обміну даними, такий як
JSON (за допомогою функцій [json_decode()](function.json-decode.md) та
[json_encode()](function.json-encode.md)), якщо серіалізовані дані
потрібно передати клієнту.

Якщо є потреба десеріалізувати збережені ззовні
серіалізовані дані, для перевірки даних можна використовувати функцію
[hash_hmac()](function.hash-hmac.md). Важливо переконатися, що дані
ніхто не підробив.

**Увага**

Формат серіалізації igbinary не дозволяє розрізняти різні посилання
групи для одного й того ж значення. Усі посилання PHP на задане
значення при десеріалізації обробляються як частина однієї і тієї ж
групи посилань, навіть якщо при серіалізації вони були частинами різних груп
посилань.

### Список параметрів

`str`
Серіалізована функцією
[igbinary_serialize()](function.igbinary-serialize.md) рядок.

Якщо десеріалізується значення є об'єктом (object), після
успішного відновлення об'єкта, igbinary автоматично спробує
викликати метод
[\_\_unserialize()](language.oop5.magic.md#object.unserialize) або
[\_\_wakeup()](language.oop5.magic.md#object.wakeup) (якщо такий
існує).

> **Примітка**: **unserialize_callback_func directive**
>
> Можна встановити callback-функцію, яка буде викликатися, якщо у
> час десеріалізації має бути створений екземпляр невизначеного
> класу (щоб запобігти отриманню неповного об'єкта (object)
> `__PHP_Incomplete_Class`). Для визначення
> [unserialize_callback_func](var.configuration.md#ini.unserialize-callback-func)
> можуть використовуватись файли `php.ini`,
> [ini_set()](function.ini-set.md) або `.htaccess`. Кожен раз, коли
> необхідно створити екземпляр невизначеного класу, callback-функція
> викликатиметься. Щоб вимкнути цю функцію, параметр слід
> Очистити.

### Значення, що повертаються

Повертається перетворене значення, що може бути bool, int,
float, string, array, object або null.

Якщо переданий рядок не може бути десеріалізованим, повертається
**`false`** і видається помилка рівня **`E_NOTICE`** або **`E_WARNING`**.

### Помилки

Об'єкти можуть викидати виняток [Throwable](class.throwable.md)
своїх обробників десеріалізації.

### Примітки

**Увага**

**`null`** або **`false`** повертається як у разі виникнення
помилки, так і при десеріалізації серіалізованого значення **`null`**
або **`false`**. Цей особливий випадок можна визначити, порівнявши `str` з
`igbinary_serialize(null)` або `igbinary_serialize(false)` або обробивши
видану помилку рівня **`E_NOTICE`**.

### Дивіться також

- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [json_encode()](function.json-encode.md) - Повертає
JSON-подання даних
- [json_decode()](function.json-decode.md) - Декодує рядок JSON
- [hash_hmac()](function.hash-hmac.md) - Генерація хеш-коду на
основі ключа, використовуючи метод HMAC
- [igbinary_serialize()](function.igbinary-serialize.md) - Створює
компактне, двійкове уявлення значення, що зберігається
- [Автоматичне завантаження класів](language.oop5.autoload.md)
- [unserialize_callback_func](var.configuration.md#ini.unserialize-callback-func)
- [\_\_wakeup()](language.oop5.magic.md#object.wakeup)
- [\_\_serialize()](language.oop5.magic.md#object.serialize)
- [\_\_unserialize()](language.oop5.magic.md#object.unserialize)
