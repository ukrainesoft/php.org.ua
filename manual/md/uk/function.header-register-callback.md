- [«getservbyport](function.getservbyport.md)
- [header_remove »](function.header-remove.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Викликає функцію заголовка

# header_register_callback

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

header_register_callback — Викликає функцію заголовка

### Опис

**header_register_callback**([callable](language.types.callable.md)
`$callback`): bool

Реєструє функцію, яка буде викликана, коли PHP почне відправляти
висновок.

Параметр `callback` запускається одразу після того, як PHP були
підготовлені всі заголовки, що відправляються, і перед відправкою будь-якого
іншого висновку, створюючи можливість для керування вихідними
заголовками перед відправкою.

### Список параметрів

`callback`
Функція викликається безпосередньо перед відправкою заголовків, не
отримує параметри і значення, що повертається, ігнорується.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **header_register_callback()****

` <?phpheader('Content-Type:text/plain');header('X-Test:foo');function foo() { foreach (headers_list() as $header) {   if (strpos($header, ) X-Powered-By:') !u003du003d false) {    header_remove('X-Powered-By'); }   header_remove('X-Test'); }}$result u003d header_register_callback('foo');echo "a";?> `

Результатом виконання цього прикладу буде щось подібне:

Content-Type: text/plain

a

### Примітки

Функція **header_register_callback()** запускається за готовністю
надсилання заголовків, так що будь-який висновок з цієї функції може перервати
висновок.

> **Примітка**:
>
> Доступ до заголовків та їх виведення здійснюватиметься лише у випадку,
> якщо у SAPI є їх підтримка.

### Дивіться також

- [headers_list()](function.headers-list.md) - Повертає список
переданих заголовків (або готових до відправлення)
- [header_remove()](function.header-remove.md) - Видаляє раніше
встановлені заголовки
- [header()](function.header.md) - Надсилання HTTP-заголовка
