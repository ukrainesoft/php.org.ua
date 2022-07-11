- [«eio_write](function.eio-write.md)
- [Вступ »](intro.ev.md)

- [PHP Manual](index.md)
- [Модулі для управління процесами
програм](refs.fileprocess.process.md)
- Ev

# Ev

- [Вступ](intro.ev.md)
- [Встановлення та налаштування](ev.setup.md)
- [Вимоги](ev.requirements.md)
- [Установка](ev.installation.md)
- [Налаштування під час виконання](ev.configuration.md)
- [Типи ресурсів](ev.resources.md)
- [Предвизначені константи](ev.global.constants.md)
- [Приклади](ev.examples.md)
- [Спостерігачі](ev.watchers.md)
- [Watcher callbacks](ev.watcher-callbacks.md)
- [Режими роботи періодичних спостерігачів](ev.periodic-modes.md)
- [Ev](class.ev.md) - Клас Ev
- [Ev::backend](ev.backend.md) - Повертає ціле число,
описує бекенд, використовуваний libev
- [Ev::depth](ev.depth.md) — Здобути глибину рекурсії
- [Ev::embeddableBackends](ev.embeddablebackends.md) -
Повертає набір бекендів, які можна вбудувати в інші
подієві цикли
- [Ev::feedSignal](ev.feedsignal.md) — Передаємо подію сигналу
в Ev
- [Ev::feedSignalEvent](ev.feedsignalevent.md) — Надіслати подію
сигналу в цикл за замовчуванням
- [Ev::iteration](ev.iteration.md) — Отримати кількість
проведених опитувань циклу за умовчанням щодо нових
подій
- [Ev::now](ev.now.md) — Отримати час запуску останньої
ітерації циклу за замовчуванням
- [Ev::nowUpdate](ev.nowupdate.md) — Встановлює поточний час
шляхом запиту до ядра в процесі оновлюючи час, що повертається
Ev::now
- [Ev::recommendedBackends](ev.recommendedbackends.md) -
Отримати бітову маску рекомендованих бекендів для даної
платформи
- [Ev::resume](ev.resume.md) — Відновити виконання
призупиненого раніше циклу подій за умовчанням
- [Ev::run](ev.run.md) — Розпочати перевірку наявності подій та виклик
callback-функцій циклу за замовчуванням
- [Ev::sleep](ev.sleep.md) — Блокувати заданий процес
кількість секунд
- [Ev::stop](ev.stop.md) — Зупинити цикл подій
замовчуванням
- [Ev::supportedBackends](ev.supportedbackends.md) — Повертає
набір бекендів, що підтримуються поточною конфігурацією libev
- [Ev::suspend](ev.suspend.md) — Призупинити цикл подій
за замовчуванням
- [Ev::time](ev.time.md) — Повертає поточний час до
секундах (дрібне число) минуле з початку епохи Unix
- [Ev::verify](ev.verify.md) — Виконує внутрішню перевірку
цілісності (для налагодження)
- [EvCheck](class.evcheck.md) - Клас EvCheck
- [EvCheck::\_\_construct](evcheck.construct.md) - Конструктор
об'єкту EvCheck
- [EvCheck::createStopped](evcheck.createstopped.md) — Створює
зупинений екземпляр спостерігача EvCheck
- [EvChild](class.evchild.md) - Клас EvChild
- [EvChild::\_\_construct](evchild.construct.md) - Створює
об'єкт спостерігач EvChild
- [EvChild::createStopped](evchild.createstopped.md) — Створює
зупинений екземпляр спостерігача EvCheck
- [EvChild::set](evchild.set.md) — Налаштування спостерігача
- [EvEmbed](class.evembed.md) - Клас EvEmbed
- [EvEmbed::\_\_construct](evembed.construct.md) - Конструктор
об'єкту EvEmbed
- [EvEmbed::createStopped](evembed.createstopped.md) — Створює
зупинений об'єкт спостерігач EvEmbed
- [EvEmbed::set](evembed.set.md) — Налаштування спостерігача
- [EvEmbed::sweep](evembed.sweep.md) - Робить одиночну,
неблокуючу розгортку за вбудованим циклом
- [EvFork](class.evfork.md) - Клас EvFork
- [EvFork::\_\_construct](evfork.construct.md) - Конструктор
спостерігача EvFork
- [EvFork::createStopped](evfork.createstopped.md) — Створити
об'єкт класу EvFork, але не стартувати його
- [EvIdle](class.evidle.md) - Клас EvIdle
- [EvIdle::\_\_construct](evidle.construct.md) - Конструктор
спостерігача EvIdle
- [EvIdle::createStopped](evidle.createstopped.md) — Створити
об'єкт класу EvIdle, але не стартувати його
- [EvIo](class.evio.md) - Клас EvIo
- [EvIo::\_\_construct](evio.construct.md) — Створює об'єкт
спостерігач EvIo
- [EvIo::createStopped](evio.createstopped.md) - Створює
зупинений об'єкт спостерігача EvIo
- [EvIo::set](evio.set.md) - Конфігурування спостерігача
- [EvLoop](class.evloop.md) - Клас EvLoop
- [EvLoop::backend](evloop.backend.md) — Повертає ціле число,
описує бекенд, використовуваний libev
- [EvLoop::check](evloop.check.md) — Створює об'єкт EvCheck,
пов'язаний з поточним екземпляром циклу подій
- [EvLoop::child](evloop.child.md) — Створює об'єкт EvChild,
пов'язаний із поточним циклом подій
- [EvLoop::\_\_construct](evloop.construct.md) - Конструктор
об'єкта циклу подій
- [EvLoop::defaultLoop](evloop.defaultloop.md) — Повертає або
створює цикл подій за умовчанням
- [EvLoop::embed](evloop.embed.md) — Створює екземпляр
спостерігача EvEmbed, пов'язаний із поточним об'єктом EvLoop
- [EvLoop::fork](evloop.fork.md) — Створює об'єкт спостерігача
EvFork, пов'язаний з поточним екземпляром циклу подій
- [EvLoop::idle](evloop.idle.md) — Створює об'єкт спостерігача
EvIdle, пов'язаний з поточним екземпляром циклу подій
- [EvLoop::invokePending](evloop.invokepending.md) — Викликає
всіх спостерігачів, що очікують, при скиданні їх відкладеного стану
- [EvLoop::io](evloop.io.md) — Створює об'єкт спостерігача EvIo,
пов'язаний з поточним екземпляром циклу подій
- [EvLoop::loopFork](evloop.loopfork.md) — Викликається після
розгалуження
- [EvLoop::now](evloop.now.md) — Повертає поточний "event loop"
time"
- [EvLoop::nowUpdate](evloop.nowupdate.md) - Встановлює
поточний час, запитуючи ядро, оновлюючи час, що повертається
EvLoop::now у процесі
- [EvLoop::periodic](evloop.periodic.md) — Створює об'єкт
спостерігача EvPeriodic, пов'язаний з поточним екземпляром циклу
подій
- [EvLoop::prepare](evloop.prepare.md) — Створює об'єкт
спостерігача EvPrepare, пов'язаний з поточним екземпляром циклу
подій
- [EvLoop::resume](evloop.resume.md) — Поновлює раніше
призупинений цикл подій
- [EvLoop::run](evloop.run.md) — Перевіряє події та викликає
callback-функції у циклі
- [EvLoop::signal](evloop.signal.md) — Створює об'єкт
спостерігача EvSignal, пов'язаний з поточним екземпляром циклу
подій
- [EvLoop::stat](evloop.stat.md) — Створює об'єкт спостерігача
EvStat, пов'язаний з поточним екземпляром циклу подій
- [EvLoop::stop](evloop.stop.md) — Зупиняє цикл подій
- [EvLoop::suspend](evloop.suspend.md) — Припиняє цикл
- [EvLoop::timer](evloop.timer.md) — Створення об'єкта спостерігача
EvTimer, пов'язаний з поточним екземпляром циклу подій
- [EvLoop::verify](evloop.verify.md) — Виконує внутрішні
перевірки узгодженості (для налагодження)
- [EvPeriodic](class.evperiodic.md) - Клас EvPeriodic
- [EvPeriodic::again](evperiodic.again.md) - Зупиняє та
знову запускає періодичний спостерігач
- [EvPeriodic::at](evperiodic.at.md) - Повертає абсолютне
час, коли спостерігач запуститься наступного разу
- [EvPeriodic::\_\_construct](evperiodic.construct.md) -
Конструктор об'єкта спостерігача EvPeriodic
- [EvPeriodic::createStopped](evperiodic.createstopped.md) -
Створює зупинений спостерігач EvPeriodic
- [EvPeriodic::set](evperiodic.set.md) — Налаштовує спостерігача
- [EvPrepare](class.evprepare.md) - Клас EvPrepare
- [EvPrepare::\_\_construct](evprepare.construct.md) -
Конструктор спостерігача EvPrepare
- [EvPrepare::createStopped](evprepare.createstopped.md) -
Створити об'єкт класу EvPrepare, але не стартувати його
- [EvSignal](class.evsignal.md) - Клас EvSignal
- [EvSignal::\_\_construct](evsignal.construct.md) - Конструктор
об'єкта спостерігача EvSignal
- [EvSignal::createStopped](evsignal.createstopped.md) - Create
stopped EvSignal watcher object
- [EvSignal::set](evsignal.set.md) — Налаштування спостерігача
- [EvStat](class.evstat.md) - Клас EvStat
- [EvStat::attr](evstat.attr.md) — Повертає значення нещодавно
виявлені Ev
- [EvStat::\_\_construct](evstat.construct.md) — Створює об'єкт
спостерігача EvStat
- [EvStat::createStopped](evstat.createstopped.md) — Створює
зупинений об'єкт спостерігача EvStat
- [EvStat::prev](evstat.prev.md) — Повертає попередній набір
значень, що повертаються EvStat::attr
- [EvStat::set](evstat.set.md) — Налаштовує спостерігача
- [EvStat::stat](evstat.stat.md) - Ініціює виклик статистики
- [EvTimer](class.evtimer.md) - Клас EvTimer
- [EvTimer::again](evtimer.again.md) — Перезапускає таймер
спостерігача
- [EvTimer::\_\_construct](evtimer.construct.md) - Конструктор
об'єкта спостерігача EvTimer
- [EvTimer::createStopped](evtimer.createstopped.md) — Створює
зупинений спостерігач EvTimer
- [EvTimer::set](evtimer.set.md) — Налаштовує спостерігача
- [EvWatcher](class.evwatcher.md) - Клас EvWatcher
- [EvWatcher::clear](evwatcher.clear.md) — Очистити статус
очікування спостерігача
- [EvWatcher::\_\_construct](evwatcher.construct.md) -
Анотація конструктор об'єкта спостерігача
- [EvWatcher::feed](evwatcher.feed.md) — Подає вказані
події у цикл подій
- [EvWatcher::getLoop](evwatcher.getloop.md) - Повертає цикл,
відповідальний за спостерігача
- [EvWatcher::invoke](evwatcher.invoke.md) - Викликає
callback-функцію спостерігача із заданою бітовою маскою прийнятих
подій
- [EvWatcher::keepalive](evwatcher.keepalive.md) — Налаштовує,
чи повертатиметься цикл
- [EvWatcher::setCallback](evwatcher.setcallback.md) -
Встановлює нову callback-функцію для спостерігача
- [EvWatcher::start](evwatcher.start.md) — Запускає спостерігача
- [EvWatcher::stop](evwatcher.stop.md) - Зупиняє
спостерігача
