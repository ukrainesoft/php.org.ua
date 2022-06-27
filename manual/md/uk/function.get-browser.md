- [«exit](function.exit.md)
- [\_\_halt_compiler »](function.halt-compiler.md)

- [PHP Manual](index.md)
- [Різні функції](ref.misc.md)
- Повідомляє про можливості браузера користувача

#get_browser

(PHP 4, PHP 5, PHP 7, PHP 8)

get_browser — Повідомляє про можливості браузера користувача

### Опис

**get_browser**(?string`$user_agent` u003d **`null`**, bool `$return_array`
u003d **`false`**): object\|array\|false

Намагається визначити можливості браузера користувача, роблячи пошук
інформації про браузер у файлі `browscap.ini`.

### Список параметрів

`user_agent`
Аналізований рядок із User Agent. За замовчуванням використовується значення
HTTP User-Agent. Тим не менш, цей параметр можна пропустити для
отримання додаткової інформації про браузер.

Параметр може бути пропущений, якщо його значення дорівнюватиме **`null`**.

`return_array`
Якщо дорівнює **`true`**, то функція поверне масив (array) замість об'єкта
(object).

### Значення, що повертаються

Інформація повертається як об'єкт, або як масиву, який
містить різні дані, наприклад, мажорну та мінорну версію
браузера та рядок ID; значення з **`true`**/**`false`** для таких
функцій браузера, таких як кадри, JavaScript, cookies і т.д.

Наявність 'cookies' означає, що браузер має можливість прийому
cookies, а не повідомляє про те, чи ввімкнув користувач можливість прийому
cookies чи ні. Єдиним способом перевірки можливості браузера
приймати cookies є встановлення cookie за допомогою
[setcookie()](function.setcookie.md), оновлення сторінки та перевірка
значення.

Повертає **`false`**, якщо неможливо отримати інформацію, наприклад,
коли параметр конфігурації
[browscap](misc.configuration.md#ini.browscap) в `php.ini` не був
встановлений.

### Приклади

**Приклад #1 Виведення інформації про браузер користувача**

` <?phpecho $_SERVER['HTTP_USER_AGENT'] . "

";$browser u003d get_browser(null, true);print_r($browser);?> `

Результатом виконання цього прикладу буде щось подібне:

Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7) Gecko/20040803 Firefox/0.9.3

Array
(
[browser_name_regex] u003d> ^mozilla/5\.0 (windows; .; windows nt 5\.1; .*rv:.*) gecko/.* firefox/0\.9.*$
[browser_name_pattern] u003d> Mozilla/5.0 (Windows; ?; Windows NT 5.1; *rv:*) Gecko/* Firefox/0.9*
[parent] u003d> Firefox 0.9
[platform] u003d> WinXP
[browser] u003d> Firefox
[version] u003d> 0.9
[majorver] u003d> 0
[minorver] u003d> 9
[cssversion] u003d> 2
[frames] u003d> 1
[iframes] u003d> 1
[tables] u003d> 1
[cookies] u003d> 1
[backgroundsounds] u003d>
[vbscript] u003d>
[javascript] u003d> 1
[javaapplets] u003d> 1
[activexcontrols] u003d>
[cdf] u003d>
[aol] u003d>
[beta] u003d> 1
[win16] u003d>
[crawler] u003d>
[stripper] u003d>
[wap] u003d>
[netclr] u003d>
)

### Примітки

> **Примітка**:
>
> Для цієї функції необхідно, щоб в установці
> [browscap](misc.configuration.md#ini.browscap) у налаштуваннях
> `php.ini` було встановлено коректний шлях до файлу `browscap.ini` в
> вашої системи.
>
> `browscap.ini` не поставляється з PHP, але ви можете останню його
> версію тут: [»php_browscap.ini](http://browscap.org/).
>
> `browscap.ini` містить інформацію про більшість браузерів, він вимагає
> оновлень для підтримки його бази актуальної Формат файлу досить
> Очевидний.
