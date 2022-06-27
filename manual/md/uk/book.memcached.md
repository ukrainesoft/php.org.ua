- [«memcache_debug](function.memcache-debug.md)
- [Вступ »](intro.memcached.md)

- [PHP Manual](index.md)
- [Інші служби](refs.remote.other.md)
- Memcached

# Memcached

- [Вступ](intro.memcached.md)
- [Встановлення та налаштування](memcached.setup.md)
- [Вимоги](memcached.requirements.md)
- [Установка](memcached.installation.md)
- [Налаштування під час виконання](memcached.configuration.md)
- [Типи ресурсів](memcached.resources.md)
- [Предвизначені константи](memcached.constants.md)
- [Час зберігання об'єкта](memcached.expiration.md)
- [Функції зворотного дзвінка](memcached.callbacks.md)
- [Функції зворотного виклику для результуючого
набору](memcached.callbacks.result.md)
- [Функції зворотного виклику наскрізного читання
кеша](memcached.callbacks.read-through.md)
- [Підтримка сесій](memcached.sessions.md)
- [Memcached](class.memcached.md) - Клас Memcached
- [Memcached::add](memcached.add.md) — Додає елемент із новим
ключем
- [Memcached::addByKey](memcached.addbykey.md) — Додає новий
елемент на заданий сервер
- [Memcached::addServer](memcached.addserver.md) — Додає
сервер у пул
- [Memcached::addServers](memcached.addservers.md) — Додає
кілька серверів у пул
- [Memcached::append](memcached.append.md) — Додає дані до
існуючого запису
- [Memcached::appendByKey](memcached.appendbykey.md) — Додає
дані до існуючого запису на заданому сервері
- [Memcached::cas](memcached.cas.md) - Порівнює та
встановлює значення для запису
- [Memcached::casByKey](memcached.casbykey.md) — Порівнює та
встановлює значення для запису на конкретному сервері
- [Memcached::\_\_construct](memcached.construct.md) - Створює
екземпляр класу Memcached
- [Memcached::decrement](memcached.decrement.md) — Зменшує
числове значення запису
- [Memcached::decrementByKey](memcached.decrementbykey.md) -
Зменшує числове значення запису, що зберігається на певному
сервері
- [Memcached::delete](memcached.delete.md) — Видалення запису
- [Memcached::deleteByKey](memcached.deletebykey.md) — Видаляє
запис із зазначеного сервера
- [Memcached::deleteMulti](memcached.deletemulti.md) — Видаляє
кілька записів
- [Memcached::deleteMultiByKey](memcached.deletemultibykey.md) -
Видаляє кілька записів із вказаного сервера
- [Memcached::fetch](memcached.fetch.md) — Витягує наступний
результат
- [Memcached::fetchAll](memcached.fetchall.md) — Витягує все
отримані записи
- [Memcached::flush](memcached.flush.md) — Анулює всі записи
у кеші
- [Memcached::get](memcached.get.md) — Отримання запису
- [Memcached::getAllKeys](memcached.getallkeys.md) — Отримує
всі ключі, що зберігаються на серверах
- [Memcached::getByKey](memcached.getbykey.md) — Отримує запис
з певного сервера
- [Memcached::getDelayed](memcached.getdelayed.md) — Запитує
кілька записів
- [Memcached::getDelayedByKey](memcached.getdelayedbykey.md) -
Запитує кілька записів із вказаного сервера
- [Memcached::getMulti](memcached.getmulti.md) — Отримує
кілька записів
- [Memcached::getMultiByKey](memcached.getmultibykey.md) -
Отримує кілька записів із вказаного сервера
- [Memcached::getOption](memcached.getoption.md) — Отримує
значення Memcached параметра
- [Memcached::getResultCode](memcached.getresultcode.md)
Повертає результуючий код останньої виконаної операції
- [Memcached::getResultMessage](memcached.getresultmessage.md) -
Повертає повідомлення, що описує результат виконання останньої
операції
- [Memcached::getServerByKey](memcached.getserverbykey.md) -
Отримує інформацію про сервер по ключу
- [Memcached::getServerList](memcached.getserverlist.md) -
Отримує список серверів у пулі
- [Memcached::getStats](memcached.getstats.md) — Отримує
статистику про сервери в пулі
- [Memcached::getVersion](memcached.getversion.md) — Отримує
інформацію про версію серверів у пулі
- [Memcached::increment](memcached.increment.md) — Збільшує
числове значення запису
- [Memcached::incrementByKey](memcached.incrementbykey.md) -
Збільшує числове значення запису, що зберігається на вказаному
сервері
- [Memcached::isPersistent](memcached.ispersistent.md)
Перевіряє, чи використовується стійке з'єднання з сервером
memcache
- [Memcached::isPristine](memcached.ispristine.md) — Перевіряє
чи вже створено екземпляр класу Memcached
- [Memcached::prepend](memcached.prepend.md) — Додає дані
на початок існуючого запису
- [Memcached::prependByKey](memcached.prependbykey.md) -
Додає дані на початок існуючого запису на вказаному
сервері
- [Memcached::quit](memcached.quit.md) — Закриває всі відкриті
з'єднання
- [Memcached::replace](memcached.replace.md) — Замінює
існуючий запис із зазначеним ключем
- [Memcached::replaceByKey](memcached.replacebykey.md)
Замінює існуючий запис із заданим ключем на вказаному
сервері
- [Memcached::resetServerList](memcached.resetserverlist.md)
Очищає список серверів
- [Memcached::set](memcached.set.md) — Зберігає запис
- [Memcached::setByKey](memcached.setbykey.md) — Зберігає
запис на вказаному сервері
- [Memcached::setMulti](memcached.setmulti.md) — Зберігає
кілька записів
- [Memcached::setMultiByKey](memcached.setmultibykey.md) -
Зберігає кілька записів на вказаному сервері
- [Memcached::setOption](memcached.setoption.md) — Встановлює
значення параметра для Memcached
- [Memcached::setOptions](memcached.setoptions.md) -
Встановлює кілька параметрів Memcached
- [Memcached::setSaslAuthData](memcached.setsaslauthdata.md)
Встановлює облікові дані для автентифікації
- [Memcached::touch](memcached.touch.md) — Встановлює новий
термін зберігання для запису
- [Memcached::touchByKey](memcached.touchbykey.md)
Встановлює новий термін зберігання для запису на вказаному
сервері
- [MemcachedException](class.memcachedexception.md) - Клас
MemcachedException
