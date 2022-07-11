- [«
stream_wrapper_unregister](function.stream-wrapper-unregister.md)
- [Вступ »](intro.swoole.md)

- [PHP Manual](index.md)
- [Інші базові модулі](refs.basic.other.md)
- Swoole

# Swoole

- [Вступ](intro.swoole.md)
- [Встановлення та налаштування](swoole.setup.md)
- [Вимоги](swoole.requirements.md)
- [Установка](swoole.installation.md)
- [Налаштування під час виконання](swoole.configuration.md)
- [Типи ресурсів](swoole.resources.md)
- [Предвизначені константи](swoole.constants.md)
- [Функції Swoole](ref.swoole-funcs.md)
- [swoole_async_dns_lookup](function.swoole-async-dns-lookup.md)
— Асинхронний та неблокуючий пошук імені хоста або IP-адреси
- [swoole_async_read](function.swoole-async-read.md) -
Асинхронне читання потоку файлу
- [swoole_async_readfile](function.swoole-async-readfile.md) -
Асинхронне читання файлу
- [swoole_async_set](function.swoole-async-set.md) — Оновлення
опцій асинхронного введення-виводу
- [swoole_async_write](function.swoole-async-write.md) -
Асинхронний запис даних до потоку файлу
- [swoole_async_writefile](function.swoole-async-writefile.md) -
Асинхронний запис даних у файл
- [swoole_clear_error](function.swoole-clear-error.md) -
Скидає помилки в сокеті або за останнім кодом помилки
- [swoole_client_select](function.swoole-client-select.md) -
Отримати опис файлу, готового до читання/запису чи помилки
- [swoole_cpu_num](function.swoole-cpu-num.md) — Отримати
кількість CPU
- [swoole_errno](function.swoole-errno.md) — Отримати код помилки
останнього системного виклику
- [swoole_error_log](function.swoole-error-log.md) - Виводить
повідомлення про помилки до журналу
- [swoole_event_add](function.swoole-event-add.md) — Додати
нових callback-функцій сокету в цикл подій
- [swoole_event_defer](function.swoole-event-defer.md) -
Додати callback-функцію до наступного циклу подій
- [swoole_event_del](function.swoole-event-del.md) — Видалити все
callback-функції сокету
- [swoole_event_exit](function.swoole-event-exit.md) — Закрити
цикл подій, доступний лише на стороні клієнта
- [swoole_event_set](function.swoole-event-set.md) — Оновити
callback-функції події сокету
- [swoole_event_wait](function.swoole-event-wait.md) — Запустити
цикл подій
- [swoole_event_write](function.swoole-event-write.md) -
Записати дані в сокет
- [swoole_get_local_ip](function.swoole-get-local-ip.md) -
Отримати IP-адреси у форматі IPv4 кожної мережної плати (NIC)
комп'ютера
- [swoole_last_error](function.swoole-last-error.md) — Отримати
останнє повідомлення про помилку
- [swoole_load_module](function.swoole-load-module.md) -
Завантажити модуль swoole
- [swoole_select](function.swoole-select.md) — Вибрати опис
файлів, які готові до читання/запису або помилки у цикл подій
- [swoole_set_process_name](function.swoole-set-process-name.md)
- Встановити ім'я процесу
- [swoole_strerror](function.swoole-strerror.md) -
Конвертувати Errno у повідомлення про помилки
- [swoole_timer_after](function.swoole-timer-after.md) — Запуск
callback-функції один раз у майбутньому
- [swoole_timer_exists](function.swoole-timer-exists.md) -
Перевірити, чи існує callback-функція таймера
- [swoole_timer_tick](function.swoole-timer-tick.md) — Викликати
callback-функцію таймера тактів через певний проміжок
часу
- [swoole_version](function.swoole-version.md) — Отримати версію
Swoole
- [Swoole\Async](class.swoole-async.md) - Клас Swoole\Async
- [Swoole\Async::dnsLookup](swoole-async.dnslookup.md) -
Асинхронний та неблокуючий пошук IP на ім'я хоста
- [Swoole\Async::read](swoole-async.read.md) - Асинхронне
читання файлового потоку
- [Swoole\Async::readFile](swoole-async.readfile.md) -
Асинхронне читання файлу
- [Swoole\Async::set](swoole-async.set.md) — Оновлення параметрів
асинхронного введення-виводу
- [Swoole\Async::write](swoole-async.write.md) - Асинхронно
записує дані у файловий потік
- [Swoole\Async::writeFile](swoole-async.writefile.md) -
Опис
- [Swoole\Atomic](class.swoole-atomic.md) - Клас Swoole\Atomic
- [Swoole\Atomic::add](swoole-atomic.add.md) — Додає число до
значення атомарного об'єкта
- [Swoole\Atomic::cmpset](swoole-atomic.cmpset.md) - Порівнює
та встановлює значення атомарного об'єкта
- [Swoole\Atomic::\_\_construct](swoole-atomic.construct.md) -
Створює атомарний об'єкт swoole
- [Swoole\Atomic::get](swoole-atomic.get.md) — Отримує поточне
значення атомарного об'єкта
- [Swoole\Atomic::set](swoole-atomic.set.md) - Встановлює
нове значення для атомарного об'єкту
- [Swoole\Atomic::sub](swoole-atomic.sub.md) — Віднімає число з
значення атомарного об'єкта
- [Swoole\Buffer](class.swoole-buffer.md) - Клас Swoole\Buffer
- [Swoole\Buffer::append](swoole-buffer.append.md) - Додає
рядок або двійкові дані в кінець буфера пам'яті та повертає
новий розмір виділеної пам'яті
- [Swoole\Buffer::clear](swoole-buffer.clear.md) - Скидає
буфер пам'яті
- [Swoole\Buffer::\_\_construct](swoole-buffer.construct.md) -
Фіксований розмір блоку пам'яті
- [Swoole\Buffer::\_\_destruct](swoole-buffer.destruct.md) -
Знищує буфер пам'яті Swoole
- [Swoole\Buffer::expand](swoole-buffer.expand.md) - Розширює
розмір буфера пам'яті
- [Swoole\Buffer::read](swoole-buffer.read.md) — Читає дані
з буфера пам'яті на основі зміщення та довжини
- [Swoole\Buffer::recycle](swoole-buffer.recycle.md)
Визволяє пам'ять для ОС, яка не використовується буфером
пам'яті
- [Swoole\Buffer::substr](swoole-buffer.substr.md) — Зчитує
дані з буфера пам'яті на основі зміщення та довжини. Або видаляє
дані з буфера пам'яті
- [Swoole\Buffer::\_\_toString](swoole-buffer.tostring.md) -
Отримує строкове значення буфера пам'яті
- [Swoole\Buffer::write](swoole-buffer.write.md) - Записує
дані у буфер пам'яті. Пам'ять, виділена для буфера, не буде
змінено
- [Swoole\Channel](class.swoole-channel.md) - Клас Swoole\Channel
- [Swoole\Channel::\_\_construct](swoole-channel.construct.md) -
Створює канал Swoole
- [Swoole\Channel::\_\_destruct](swoole-channel.destruct.md) -
Знищує канал Swoole
- [Swoole\Channel::pop](swoole-channel.pop.md) — Читає та
витягує дані з каналу Swoole
- [Swoole\Channel::push](swoole-channel.push.md) — Записує та
передає дані до каналу Swoole
- [Swoole\Channel::stats](swoole-channel.stats.md) — Отримує
статистику каналу Swoole
- [Swoole\Client](class.swoole-client.md) - Клас Swoole\Client
- [Swoole\Client::close](swoole-client.close.md) - Закриває
встановлене з'єднання
- [Swoole\Client::connect](swoole-client.connect.md) -
Підключається до віддаленого порту TCP або UDP
- [Swoole\Client::\_\_construct](swoole-client.construct.md) -
Створює синхронний або асинхронний TCP/UDP клієнт Swoole з
підтримкою SSL або без нього
- [Swoole\Client::\_\_destruct](swoole-client.destruct.md) -
Знищує клієнт Swoole
- [Swoole\Client::getpeername](swoole-client.getpeername.md) -
Отримує ім'я віддаленого сокету з'єднання
- [Swoole\Client::getsockname](swoole-client.getsockname.md) -
Отримує локальне ім'я сокета з'єднання
- [Swoole\Client::isConnected](swoole-client.isconnected.md) -
Перевіряє, чи з'єднання встановлено
- [Swoole\Client::on](swoole-client.on.md) - Додає
callback-функції, спричинені подіями
- [Swoole\Client::pause](swoole-client.pause.md) -
Припиняє отримання даних
- [Swoole\Client::pipe](swoole-client.pipe.md) - Перенаправляє
дані в інший файловий дескриптор
- [Swoole\Client::recv](swoole-client.recv.md) — Отримує дані
з віддаленого сокету
- [Swoole\Client::resume](swoole-client.resume.md) -
Відновлює отримання даних
- [Swoole\Client::send](swoole-client.send.md) - Відправляє
дані у віддалений TCP-сокет
- [Swoole\Client::sendfile](swoole-client.sendfile.md) -
Відправляє файл у віддалений TCP-сокет
- [Swoole\Client::sendto](swoole-client.sendto.md) - Відправляє
дані на віддалену UDP-адресу
- [Swoole\Client::set](swoole-client.set.md) - Встановлює
параметри клієнта Swoole до встановлення з'єднання
- [Swoole\Client::sleep](swoole-client.sleep.md) — Видаляє
TCP-клієнт із циклу системних подій
- [Swoole\Client::wakeup](swoole-client.wakeup.md) - Додає
TCP-клієнт назад у цикл системних подій
- [Swoole\Connection\Iterator](class.swoole-connection-iterator.md)
- Клас Swoole\Connection\Iterator
- [Swoole\Connection\Iterator::count](swoole-connection-iterator.count.md)
- Вважає з'єднання
- [Swoole\Connection\Iterator::current](swoole-connection-iterator.current.md)
— Повертає поточний запис підключення
- [Swoole\Connection\Iterator::key](swoole-connection-iterator.key.md)
— Повертає ключ поточного з'єднання
- [Swoole\Connection\Iterator::next](swoole-connection-iterator.next.md)
— Переходить до наступного підключення
- [Swoole\Connection\Iterator::offsetExists](swoole-connection-iterator.offsetexists.md)
— Перевіряє, чи є усунення
- [Swoole\Connection\Iterator::offsetGet](swoole-connection-iterator.offsetget.md)
- Зміщення для вилучення
- [Swoole\Connection\Iterator::offsetSet](swoole-connection-iterator.offsetset.md)
— Призначає з'єднання для зазначеного усунення
- [Swoole\Connection\Iterator::offsetUnset](swoole-connection-iterator.offsetunset.md)
— скидає зміщення
- [Swoole\Connection\Iterator::rewind](swoole-connection-iterator.rewind.md)
- Перемотує ітератор
- [Swoole\Connection\Iterator::valid](swoole-connection-iterator.valid.md)
- Перевіряє правильність поточної позиції
- [Swoole\Coroutine](class.swoole-coroutine.md) - Клас
Swoole\Coroutine
- [Swoole\Coroutine::call_user_func_array](swoole-coroutine.call-user-func-array.md)
- Викликає callback-функцію з масивом параметрів
- [Swoole\Coroutine::call_user_func](swoole-coroutine.call-user-func.md)
- Викликає callback-функцію, задану першим параметром
- [Swoole\Coroutine::cli_wait](swoole-coroutine.cli-wait.md)
Опис
- [Swoole\Coroutine::create](swoole-coroutine.create.md) -
Опис
- [Swoole\Coroutine\Client::close](swoole-coroutine-client.close.md)
- Опис
- [Swoole\Coroutine\Client::connect](swoole-coroutine-client.connect.md)
- Опис
- [Swoole\Coroutine\Client::\_\_construct](swoole-coroutine-client.construct.md)
- Опис
- [Swoole\Coroutine\Client::\_\_destruct](swoole-coroutine-client.destruct.md)
- Опис
- [Swoole\Coroutine\Client::getpeername](swoole-coroutine-client.getpeername.md)
- Опис
- [Swoole\Coroutine\Client::getsockname](swoole-coroutine-client.getsockname.md)
- Опис
- [Swoole\Coroutine\Client::isConnected](swoole-coroutine-client.isconnected.md)
- Опис
- [Swoole\Coroutine\Client::recv](swoole-coroutine-client.recv.md)
- Опис
- [Swoole\Coroutine\Client::send](swoole-coroutine-client.send.md)
- Опис
- [Swoole\Coroutine\Client::sendfile](swoole-coroutine-client.sendfile.md)
- Опис
- [Swoole\Coroutine\Client::sendto](swoole-coroutine-client.sendto.md)
- Опис
- [Swoole\Coroutine\Client::set](swoole-coroutine-client.set.md)
- Опис
- [Swoole\Coroutine\Http\Client::addFile](swoole-coroutine-http-client.addfile.md)
- Опис
- [Swoole\Coroutine\Http\Client::close](swoole-coroutine-http-client.close.md)
- Опис
- [Swoole\Coroutine\Http\Client::\_\_construct](swoole-coroutine-http-client.construct.md)
- Опис
- [Swoole\Coroutine\Http\Client::\_\_destruct](swoole-coroutine-http-client.destruct.md)
- Опис
- [Swoole\Coroutine\Http\Client::execute](swoole-coroutine-http-client.execute.md)
- Опис
- [Swoole\Coroutine\Http\Client::get](swoole-coroutine-http-client.get.md)
- Опис
- [Swoole\Coroutine\Http\Client::getDefer](swoole-coroutine-http-client.getdefer.md)
- Опис
- [Swoole\Coroutine\Http\Client::isConnected](swoole-coroutine-http-client.isconnected.md)
- Опис
- [Swoole\Coroutine\Http\Client::post](swoole-coroutine-http-client.post.md)
- Опис
- [Swoole\Coroutine\Http\Client::recv](swoole-coroutine-http-client.recv.md)
- Опис
- [Swoole\Coroutine\Http\Client::set](swoole-coroutine-http-client.set.md)
- Опис
- [Swoole\Coroutine\Http\Client::setCookies](swoole-coroutine-http-client.setcookies.md)
- Опис
- [Swoole\Coroutine\Http\Client::setData](swoole-coroutine-http-client.setdata.md)
- Опис
- [Swoole\Coroutine\Http\Client::setDefer](swoole-coroutine-http-client.setdefer.md)
- Опис
- [Swoole\Coroutine\Http\Client::setHeaders](swoole-coroutine-http-client.setheaders.md)
- Опис
- [Swoole\Coroutine\Http\Client::setMethod](swoole-coroutine-http-client.setmethod.md)
- Опис
- [Swoole\Coroutine\MySQL::close](swoole-coroutine-mysql.close.md)
- Опис
- [Swoole\Coroutine\MySQL::connect](swoole-coroutine-mysql.connect.md)
- Опис
- [Swoole\Coroutine\MySQL::\_\_construct](swoole-coroutine-mysql.construct.md)
- Опис
- [Swoole\Coroutine\MySQL::\_\_destruct](swoole-coroutine-mysql.destruct.md)
- Опис
- [Swoole\Coroutine\MySQL::getDefer](swoole-coroutine-mysql.getdefer.md)
- Опис
- [Swoole\Coroutine\MySQL::query](swoole-coroutine-mysql.query.md)
- Опис
- [Swoole\Coroutine\MySQL::recv](swoole-coroutine-mysql.recv.md)
- Опис
- [Swoole\Coroutine\MySQL::setDefer](swoole-coroutine-mysql.setdefer.md)
- Опис
- [Swoole\Coroutine::getuid](swoole-coroutine.getuid.md) -
Опис
- [Swoole\Coroutine::resume](swoole-coroutine.resume.md) -
Опис
- [Swoole\Coroutine::suspend](swoole-coroutine.suspend.md) -
Опис
- [Swoole\Event](class.swoole-event.md) - Клас Swoole\Event
- [Swoole\Event::add](swoole-event.add.md) - Додає нові
callback-функції сокету в EventLoop
- [Swoole\Event::defer](swoole-event.defer.md) - Додає
callback-функцію у наступний цикл подій
- [Swoole\Event::del](swoole-event.del.md) — Видаляє все
callback-функції події сокету
- [Swoole\Event::exit](swoole-event.exit.md) — Виходить із циклу
подій, доступне тільки на стороні клієнта
- [Swoole\Event::set](swoole-event.set.md) — Оновлює
callback-функції події сокету
- [Swoole\Event::wait](swoole-event.wait.md) — Опис
- [Swoole\Event::write](swoole-event.write.md) - Записує
дані в сокет
- [Swoole\Exception](class.swoole-exception.md) - Клас
Swoole\Exception
- [Swoole\Http\Client](class.swoole-http-client.md) - Клас
Swoole\Http\Client
- [Swoole\Http\Client::addFile](swoole-http-client.addfile.md) -
Додає файл до форми повідомлення
- [Swoole\Http\Client::close](swoole-http-client.close.md) -
Закриває http-з'єднання
- [Swoole\Http\Client::\_\_construct](swoole-http-client.construct.md)
- Створює асинхронний HTTP-клієнт
- [Swoole\Http\Client::\_\_destruct](swoole-http-client.destruct.md)
— Знищує HTTP-клієнт
- [Swoole\Http\Client::download](swoole-http-client.download.md)
— Завантажує файл із віддаленого сервера
- [Swoole\Http\Client::execute](swoole-http-client.execute.md) -
Надсилає HTTP-запит після встановлення параметрів
- [Swoole\Http\Client::get](swoole-http-client.get.md) -
Надсилає HTTP-запит GET на віддалений сервер
- [Swoole\Http\Client::isConnected](swoole-http-client.isconnected.md)
— Перевіряє, чи підключено HTTP-з'єднання.
- [Swoole\Http\Client::on](swoole-http-client.on.md) -
Реєструє callback-функцію на ім'я події
- [Swoole\Http\Client::post](swoole-http-client.post.md) -
Надсилає HTTP-запит POST на віддалений сервер
- [Swoole\Http\Client::push](swoole-http-client.push.md) -
Передає дані до клієнта websocket
- [Swoole\Http\Client::set](swoole-http-client.set.md) -
Оновлює параметри HTTP-клієнта
- [Swoole\Http\Client::setCookies](swoole-http-client.setcookies.md)
— Встановлює cookies для HTTP-запиту
- [Swoole\Http\Client::setData](swoole-http-client.setdata.md) -
Встановлює дані тіла HTTP-запиту
- [Swoole\Http\Client::setHeaders](swoole-http-client.setheaders.md)
— Встановлює заголовки HTTP-запиту
- [Swoole\Http\Client::setMethod](swoole-http-client.setmethod.md)
— Встановлює метод HTTP-запиту
- [Swoole\Http\Client::upgrade](swoole-http-client.upgrade.md) -
Оновлення до протоколу websocket
- [Swoole\Http\Request](class.swoole-http-request.md) - Клас
Swoole\Http\Request
- [Swoole\Http\Request::\_\_destruct](swoole-http-request.destruct.md)
— Знищує HTTP-запит
- [Swoole\Http\Request::rawcontent](swoole-http-request.rawcontent.md)
— Отримує необроблене тіло HTTP POST
- [Swoole\Http\Response](class.swoole-http-response.md) - Клас
Swoole\Http\Response
- [Swoole\Http\Response::cookie](swoole-http-response.cookie.md)
— Встановлює cookie HTTP-відповіді
- [Swoole\Http\Response::\_\_destruct](swoole-http-response.destruct.md)
— Знищує HTTP-відповідь
- [Swoole\Http\Response::end](swoole-http-response.end.md) -
Відправляє дані HTTP-запиту та завершує відповідь
- [Swoole\Http\Response::gzip](swoole-http-response.gzip.md) -
Включає gzip-стиснення відповіді.
- [Swoole\Http\Response::header](swoole-http-response.header.md)
— Встановлює заголовки HTTP-відповіді
- [Swoole\Http\Response::initHeader](swoole-http-response.initheader.md)
— Ініціювати заголовок HTTP-відповіді
- [Swoole\Http\Response::rawcookie](swoole-http-response.rawcookie.md)
— Встановлює необроблені cookie у HTTP-відповідь
- [Swoole\Http\Response::sendfile](swoole-http-response.sendfile.md)
— Надсилає файл через HTTP-відповідь
- [Swoole\Http\Response::status](swoole-http-response.status.md)
— Встановлює код стану HTTP-відповіді
- [Swoole\Http\Response::write](swoole-http-response.write.md) -
Додає вміст тіла HTTP до HTTP-відповіді
- [Swoole\Http\Server](class.swoole-http-server.md) - Клас
Swoole\Http\Server
- [Swoole\Http\Server::on](swoole-http-server.on.md) -
Прив'язує callback-функцію до HTTP-сервера на ім'я події
- [Swoole\Http\Server::start](swoole-http-server.start.md) -
Запускає http-сервер swoole
- [Swoole\Lock](class.swoole-lock.md) - Клас Swoole\Lock
- [Swoole\Lock::\_\_construct](swoole-lock.construct.md) -
Створює блокування пам'яті
- [Swoole\Lock::\_\_destruct](swoole-lock.destruct.md) -
Знищує блокування пам'яті Swoole
- [Swoole\Lock::lock_read](swoole-lock.lock-read.md) - Блокує
читання-запис блокування для читання
- [Swoole\Lock::lock](swoole-lock.lock.md) — Намагається отримати
блокування. Заблокується, якщо блокування недоступне
- [Swoole\Lock::trylock_read](swoole-lock.trylock-read.md) -
Намагається заблокувати блокування читання-запису для читання та
відразу повертає, навіть якщо блокування недоступне
- [Swoole\Lock::trylock](swoole-lock.trylock.md) — Намагається
отримати блокування і відразу повертає, навіть якщо блокування
недоступна
- [Swoole\Lock::unlock](swoole-lock.unlock.md) - Знімає
блокування
- [Swoole\Mmap](class.swoole-mmap.md) - Клас Swoole\Mmap
- [Swoole\Mmap::open](swoole-mmap.open.md) — Відобразити файл у
пам'ять та повернути ресурс потоку, який може використовуватись
операціями потоку PHP
- [Swoole\MySQL](class.swoole-mysql.md) - Клас Swoole\MySQL
- [Swoole\MySQL::close](swoole-mysql.close.md) - Закриває
асинхронне з'єднання MySQL
- [Swoole\MySQL::connect](swoole-mysql.connect.md) -
Підключається до віддаленого сервера MySQL
- [Swoole\MySQL::\_\_construct](swoole-mysql.construct.md) -
Створює асинхронний клієнт MySQL
- [Swoole\MySQL::\_\_destruct](swoole-mysql.destruct.md) -
Знищує асинхронний клієнт MySQL
- [Swoole\MySQL::getBuffer](swoole-mysql.getbuffer.md) -
Опис
- [Swoole\MySQL::on](swoole-mysql.on.md) - Реєструє
callback-функцію на основі імені події
- [Swoole\MySQL::query](swoole-mysql.query.md) — Виконує
запит SQL
- [Swoole\MySQL\Exception](class.swoole-mysql-exception.md) - Клас
Swoole\MySQL\Exception
- [Swoole\Process](class.swoole-process.md) - Клас Swoole\Process
- [Swoole\Process::alarm](swoole-process.alarm.md) - Таймер
високої точності, який запускає сигнал із фіксованим
інтервалом
- [Swoole\Process::close](swoole-process.close.md) - Закриває
канал для дочірнього процесу
- [Swoole\Process::\_\_construct](swoole-process.construct.md) -
Створює процес
- [Swoole\Process::daemon](swoole-process.daemon.md) - Змінює
процес на процес-демон
- [Swoole\Process::\_\_destruct](swoole-process.destruct.md) -
Знищує процес
- [Swoole\Process::exec](swoole-process.exec.md) — Виконує
системні команди
- [Swoole\Process::exit](swoole-process.exit.md) - Зупиняє
дочірні процеси
- [Swoole\Process::freeQueue](swoole-process.freequeue.md) -
Знищує чергу повідомлень, створену swoole_process::useQueue
- [Swoole\Process::kill](swoole-process.kill.md) - Надсилає
сигнал дочірньому процесу
- [Swoole\Process::name](swoole-process.name.md) - Встановлює
назва процесу
- [Swoole\Process::pop](swoole-process.pop.md) - Читає та
витягує дані з черги повідомлень
- [Swoole\Process::push](swoole-process.push.md) - Записує та
поміщає дані в чергу повідомлень
- [Swoole\Process::read](swoole-process.read.md) — Читає дані
відправки у процес
- [Swoole\Process::signal](swoole-process.signal.md) — Надсилає
сигнал дочірнім процесам
- [Swoole\Process::start](swoole-process.start.md) - Запускає
процес
- [Swoole\Process::statQueue](swoole-process.statqueue.md) -
Отримує статистику черги повідомлень, яка використовується як
методу зв'язку між процесами
- [Swoole\Process::useQueue](swoole-process.usequeue.md) -
Створює чергу повідомлень як метод зв'язку між
батьківським процесом та дочірніми процесами
- [Swoole\Process::wait](swoole-process.wait.md) - Очікує
подій дочірніх процесів
- [Swoole\Process::write](swoole-process.write.md) - Записує
дані в канал і зв'язується з батьківським процесом або
дочірніми процесами
- [Swoole\Redis\Server](class.swoole-redis-server.md) - Клас
Swoole\Redis\Server
- [Swoole\Redis\Server::format](swoole-redis-server.format.md) -
Опис
- [Swoole\Redis\Server::setHandler](swoole-redis-server.sethandler.md)
- Опис
- [Swoole\Redis\Server::start](swoole-redis-server.start.md) -
Опис
- [Swoole\Serialize](class.swoole-serialize.md) - Клас
Swoole\Serialize
- [Swoole\Serialize::pack](swoole-serialize.pack.md) -
Серіалізувати дані
- [Swoole\Serialize::unpack](swoole-serialize.unpack.md) -
Десеріалізувати дані
- [Swoole\Server](class.swoole-server.md) - Клас Swoole\Server
- [Swoole\Server::addlistener](swoole-server.addlistener.md) -
Додає нового слухача на сервер
- [Swoole\Server::addProcess](swoole-server.addprocess.md) -
Додає певний користувачем swoole_process на сервер
- [Swoole\Server::after](swoole-server.after.md) — Запускає
callback-функцію після закінчення певного періоду часу
- [Swoole\Server::bind](swoole-server.bind.md) - Прив'язує
з'єднання до вказаного ідентифікатора користувача
- [Swoole\Server::clearTimer](swoole-server.cleartimer.md) -
Зупиняє та знищує таймер
- [Swoole\Server::close](swoole-server.close.md) - Закриває
з'єднання з клієнтом
- [Swoole\Server::confirm](swoole-server.confirm.md) — Перевіряє
стан з'єднання
- [Swoole\Server::connection_info](swoole-server.connection-info.md)
— Отримує інформацію про з'єднання з описом файлу
- [Swoole\Server::connection_list](swoole-server.connection-list.md)
— Отримує всі встановлені з'єднання
- [Swoole\Server::\_\_construct](swoole-server.construct.md) -
Створює сервер Swoole
- [Swoole\Server::defer](swoole-server.defer.md) — Відкладає
виконання callback-функції в кінці поточного EventLoop
- [Swoole\Server\Port::\_\_construct](swoole-server-port.construct.md)
- Створює порт сервера
- [Swoole\Server\Port::\_\_destruct](swoole-server-port.destruct.md)
— Знищує порт сервера
- [Swoole\Server\Port::on](swoole-server-port.on.md) -
Реєструє callback-функції події
- [Swoole\Server\Port::set](swoole-server-port.set.md) -
Встановлює протокол порту сервера
- [Swoole\Server::exist](swoole-server.exist.md) — Перевіряє,
чи існує з'єднання
- [Swoole\Server::finish](swoole-server.finish.md) -
Використовується в процесі завдання для надсилання результату в робітник
процес після завершення завдання
- [Swoole\Server::getClientInfo](swoole-server.getclientinfo.md)
— Отримує інформацію про з'єднання з описом файлу
- [Swoole\Server::getClientList](swoole-server.getclientlist.md)
— Отримує всі встановлені з'єднання
- [Swoole\Server::getLastError](swoole-server.getlasterror.md) -
Отримує код останньої помилки
- [Swoole\Server::heartbeat](swoole-server.heartbeat.md) -
Перевіряє всі з'єднання на сервері
- [Swoole\Server::listen](swoole-server.listen.md) — Слухає по
заданому IP та порту, тип сокету
- [Swoole\Server::on](swoole-server.on.md) — Реєструє
callback-функцію на ім'я події
- [Swoole\Server::pause](swoole-server.pause.md) - Припиняє
отримання даних від з'єднання
- [Swoole\Server::protect](swoole-server.protect.md) -
Встановлює підключення до захищеного режиму
- [Swoole\Server::reload](swoole-server.reload.md) -
Перезапускає всі робочі процеси
- [Swoole\Server::resume](swoole-server.resume.md) - Починає
отримувати дані із з'єднання
- [Swoole\Server::send](swoole-server.send.md) — Відправляє
дані клієнту
- [Swoole\Server::sendfile](swoole-server.sendfile.md) -
Надсилає файл на з'єднання
- [Swoole\Server::sendMessage](swoole-server.sendmessage.md) -
Надсилає повідомлення робочим процесам за ідентифікатором
- [Swoole\Server::sendto](swoole-server.sendto.md) - Відправляє
дані на віддалену UDP-адресу
- [Swoole\Server::sendwait](swoole-server.sendwait.md) -
Відправляє дані у віддалений сокет блокуючим способом
- [Swoole\Server::set](swoole-server.set.md) — Встановлює
налаштування часу виконання сервера swoole
- [Swoole\Server::shutdown](swoole-server.shutdown.md) -
Завершує процес головного сервера, функцію можна викликати в
робочих процесах
- [Swoole\Server::start](swoole-server.start.md) — Запускає
сервер Swoole
- [Swoole\Server::stats](swoole-server.stats.md) — Отримує
статистику сервера Swoole
- [Swoole\Server::stop](swoole-server.stop.md) - Зупиняє
сервер Swoole
- [Swoole\Server::task](swoole-server.task.md) - Відправляє
дані у робочі процеси задачі
- [Swoole\Server::taskwait](swoole-server.taskwait.md)
Посилає дані робочим процесам завдання блокуючим способом
- [Swoole\Server::taskWaitMulti](swoole-server.taskwaitmulti.md)
— Виконує кілька завдань одночасно
- [Swoole\Server::tick](swoole-server.tick.md) — Повторює
цю функцію у кожний заданий інтервал часу
- [Swoole\Table](class.swoole-table.md) - Клас Swoole\Table
- [Swoole\Table::column](swoole-table.column.md) — Встановлює
тип даних та розмір стовпців
- [Swoole\Table::\_\_construct](swoole-table.construct.md) -
Створює таблицю пам'яті Swoole із фіксованим розміром
- [Swoole\Table::count](swoole-table.count.md) - Підраховує
рядки в таблиці або підраховує всі елементи в таблиці, якщо
$mode u003d 1
- [Swoole\Table::create](swoole-table.create.md) - Створює
таблицю пам'яті swoole
- [Swoole\Table::current](swoole-table.current.md) - Отримує
поточний рядок
- [Swoole\Table::decr](swoole-table.decr.md) - Зменшує
значення в таблиці Swoole за $row_key та $column_key
- [Swoole\Table::del](swoole-table.del.md) — Видаляє рядок у
таблиці Swoole за $row_key
- [Swoole\Table::destroy](swoole-table.destroy.md) - Знищує
таблицю Swoole
- [Swoole\Table::exist](swoole-table.exist.md) — Перевіряє,
чи існує рядок за $row_key
- [Swoole\Table::get](swoole-table.get.md) — Отримує значення в
таблиці Swoole за $row_key та $column_key
- [Swoole\Table::incr](swoole-table.incr.md) - Збільшує
значення за $row_key та $column_key
- [Swoole\Table::key](swoole-table.key.md) — Отримує ключ
поточного рядка
- [Swoole\Table::next](swoole-table.next.md) — Переміщує
ітератор на наступний рядок
- [Swoole\Table::rewind](swoole-table.rewind.md) - Перемотує
ітератор
- [Swoole\Table::set](swoole-table.set.md) — Оновлює рядок
таблиці за $row_key
- [Swoole\Table::valid](swoole-table.valid.md) — Перевіряє,
чи є поточний рядок коректним
- [Swoole\Timer](class.swoole-timer.md) - Клас Swoole\Timer
- [Swoole\Timer::after](swoole-timer.after.md) - Запускає
callback-функцію через певний проміжок часу
- [Swoole\Timer::clear](swoole-timer.clear.md) — Видаляє таймер
за ідентифікатором
- [Swoole\Timer::exists](swoole-timer.exists.md) — Перевіряє,
чи існує таймер
- [Swoole\Timer::tick](swoole-timer.tick.md) - Повторює цю
функцію у кожний заданий інтервал часу
- [Swoole\WebSocket\Frame](class.swoole-websocket-frame.md) - Клас
Swoole\WebSocket\Frame
- [Swoole\WebSocket\Server](class.swoole-websocket-server.md) -
Клас Swoole\WebSocket\Server
- [Swoole\WebSocket\Server::exist](swoole-websocket-server.exist.md)
— Перевіряє, чи є опис файлу
- [Swoole\WebSocket\Server::on](swoole-websocket-server.on.md) -
Зареєструвати callback-функцію події
- [Swoole\WebSocket\Server::pack](swoole-websocket-server.pack.md)
— Отримання пакета двійкових даних для надсилання в одній групі
даних (frame)
- [Swoole\WebSocket\Server::push](swoole-websocket-server.push.md)
— Надіслати дані віддаленому клієнту
- [Swoole\WebSocket\Server::unpack](swoole-websocket-server.unpack.md)
- Розпакувати двійкові дані, отримані від клієнта
