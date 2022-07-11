- [« Установка](yaf.installation.md)
- [Типи ресурсів»] (yaf.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](yaf.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ------------------------|--------------|---------- -------|------------------|
| [yaf.library](yaf.configuration.md#ini.yaf.library) | | PHP_INI_ALL | |
| [yaf.action_prefer](yaf.configuration.md#ini.yaf.action-prefer) | 0 | PHP_INI_ALL | |
| [yaf.lowcase_path](yaf.configuration.md#ini.yaf.lowcase-path) | 0 | PHP_INI_ALL | |
| [yaf.use_spl_autoload](yaf.configuration.md#ini.yaf.use-spl-autoload) | 0 | PHP_INI_ALL | |
| [yaf.forward_limit](yaf.configuration.md#ini.yaf.forward-limit) | 5 | PHP_INI_ALL | |
| [yaf.name_suffix](yaf.configuration.md#ini.yaf.name-suffix) | 1 | PHP_INI_ALL | |
| [yaf.name_separator](yaf.configuration.md#ini.yaf.name-separator) | | PHP_INI_ALL | |
| [yaf.cache_config](yaf.configuration.md#ini.yaf.cache-config) | 0 | PHP_INI_SYSTEM | |
| [yaf.environ](yaf.configuration.md#ini.yaf.environ) | product | PHP_INI_SYSTEM | |
| [yaf.use_namespace](yaf.configuration.md#ini.yaf.use-namespace) | 0 | PHP_INI_SYSTEM | |

**Опції налаштування Yaf**

Коротке пояснення конфігураційних директив.

`yaf.library` string
Шлях до глобальних бібліотек, Yaf_loader шукатиме глобальні
бібліотеки тут.

`yaf.action_prefer` int
Якщо в PATH_INFO лише одна частина, її слід розглянути як
контролера чи дії.

Якщо задана як On, вона розглядатиметься як ім'я дії (Action).

`yaf.lowcase_path` int
Чи розглядати всі шляхи в нижньому регістрі під час автозавантаження класів.

`yaf.use_spl_autoload` int
Якщо задано як On, то якщо [Yaf_Loader](class.yaf-loader.md) не
може знайти клас, він поверне **`false`**, тим самим надаючи
можливість виклику іншої функції автозавантаження.

Якщо задано як Off, то якщо [Yaf_Loader](class.yaf-loader.md) не
знайде клас, він поверне **`true`** і перерве подальші дії з
автозавантаження.

> **Примітка**:
>
> Yaf реєструє завантажувач класів під час створення екземпляра класу
> [Yaf_Application](class.yaf-application.md), так що будь-які
> інші автозавантажувачі, зареєстровані до інстанціації цього
> класу, будуть запущені до
> [Yaf_Loader::autoload()](yaf-loader.autoload.md).

Якщо встановлено як Off(за замовчуванням),
[Yaf_Loader::autoload()](yaf-loader.autoload.md) буде завжди
повертати **`true`**.

`yaf.forward_limit` int
Максимальна кількість перенаправлень за замовчуванням 5. Це означає,
що стек перенаправлень не може бути глибшим 5.

Це зроблено для запобігання рекурсії в
[Yaf_Controller_Abstract::forward()](yaf-controller-abstract.forward.md).

`yaf.name_suffix` int
Якщо задано як On, Yaf_Loader буде ідентифікувати за його суфіксом,
для визначення, чи є він класом MVC.

Якщо встановлено як Off, Yaf_Loader буде дивитися на префікс.

`yaf.name_separator` string
Якщо не порожньо, Yaf_Loader, ідентифікуючи клас, буде шукати
суфікс з огляду на заданий символ як роздільник.

Наприклад, якщо встановити рівним "\_", Yaf_Loader ідентифікує
Index_Controller як клас контролер, а IndexController як звичайний
клас.

`yaf.cache_config` int
Якщо встановлено як On, і в той же час ви використовуєте конфігураційний
ini-файл як параметр **Yaf_Application()**, результат компіляції
цього ini-файлу буде закешировано в процесі PHP.

> **Примітка**:
>
> Yaf перевіряє mtime ini-файлу і якщо значення змінилося з моменту
> останньої компіляції, перекомпілює його.

**Увага**
Yaf використовує шлях до ini-файлу як ключ закешованого запису, через
цього рекомендується використовувати повні, абсолютні шляхи, щоб не
сталося конфлікту між двома програмами, що використовують ini-файли з
однаковими іменами, але різним вмістом.

`yaf.environ` string
За замовчуванням одно "product" і використовується Yaf для отримання потрібної
секції із ini-файлу.

Отже, якщо параметр дорівнює "product", Yaf використовуватиме секцію
"product" в ini-файлі (перший параметр
[Yaf_Application](class.yaf-application.md)) як конфігурація
[Yaf_Application](class.yaf-application.md).

`yaf.use_namespace` int
Якщо встановлено як On, всі класи Yaf називаються з використанням
просторів імен.

Наприклад:

Yaf_Route_Rewrite u003d> \Yaf\Route\Rewrite
Yaf_Request_Http u003d> \Yaf\Request\Http

Є винятки для класів типу
[Yaf_Controller_Abstract](class.yaf-controller-abstract.md). Останній
компонент імені є ключовим словом PHP і не може використовуватися в
як ім'я класу, так що він буде виглядати так:

Yaf_Controller_Abstract u003d> \Yaf\Controller_Abstract
Yaf_Route_Static u003d> \Yaf\Route_Static
