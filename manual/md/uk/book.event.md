- [«CURLStringFile::\_\_construct](curlstringfile.construct.md)
- [Вступ »](intro.event.md)

- [PHP Manual](index.md)
- [Інші служби](refs.remote.other.md)
- Event

# Event

- [Вступ](intro.event.md)
- [Встановлення та налаштування](event.setup.md)
- [Вимоги](event.requirements.md)
- [Установка](event.installation.md)
- [Налаштування під час виконання](event.configuration.md)
- [Типи ресурсів](event.resources.md)
- [Приклади](event.examples.md)
- [Прапори подій](event.flags.md)
- [Про постійні(persistent) події](event.persistence.md)
- [Callback-функції](event.callbacks.md)
- [Створення подій для
сигналів](event.constructing.signal.events.md)
- [Event](class.event.md) - Клас Event
- [Event::add](event.add.md) — Перевести подію у стан
очікування
- [Event::addSignal](event.addsignal.md) - Псевдонім Event::add
- [Event::addTimer](event.addtimer.md) - Псевдонім Event::add
- [Event::\_\_construct](event.construct.md) - Конструктор
об'єкта Event
- [Event::del](event.del.md) — Перевести подію на пасивну
стан
- [Event::delSignal](event.delsignal.md) - Псевдонім Event::del
- [Event::delTimer](event.deltimer.md) - Псевдонім Event::del
- [Event::free](event.free.md) — Перевести подію на пасивну
стан та звільнити всі виділені для нього ресурси
- [Event::getSupportedMethods](event.getsupportedmethods.md) -
Отримати масив з іменами методів, що підтримуються в поточній
версії Libevent
- [Event::pending](event.pending.md) — Перевірити, що подія
перебуває в стані очікування або що воно заплановане
- [Event::set](event.set.md) — Переконфігурувати подію
- [Event::setPriority](event.setpriority.md) — Вказати пріоритет
події
- [Event::setTimer](event.settimer.md) — Переконфігурація
події таймера
- [Event::signal](event.signal.md) — Створити об'єкт події
сигналу
- [Event::timer](event.timer.md) — Створити об'єкт події
таймера
- [EventBase](class.eventbase.md) - Клас EventBase
- [EventBase::\_\_construct](eventbase.construct.md) -
Конструктор об'єкту EventBase
- [EventBase::dispatch](eventbase.dispatch.md) - Відправляє
очікуючі події
- [EventBase::exit](eventbase.exit.md) — Припиняє надсилання
подій
- [EventBase::free](eventbase.free.md) - Визволяє ресурси,
виділені для цієї бази подій
- [EventBase::getFeatures](eventbase.getfeatures.md) -
Повертає бітову маску підтримуваних функцій
- [EventBase::getMethod](eventbase.getmethod.md) - Повертає
використовуваний метод події
- [EventBase::getTimeOfDayCached](eventbase.gettimeofdaycached.md)
— Повертає поточний час базовий подій
- [EventBase::gotExit](eventbase.gotexit.md) — Перевіряє, чи був він
цикл обробки подій завершено
- [EventBase::gotStop](eventbase.gotstop.md) — Перевіряє, чи був він
цикл обробки подій завершено
- [EventBase::loop](eventbase.loop.md) — Надсилання тих, хто чекає
подій
- [EventBase::priorityInit](eventbase.priorityinit.md) -
Встановлює кількість пріоритетів на основі подій
- [EventBase::reInit](eventbase.reinit.md) - Повторна
ініціалізація бази подій (після розгалуження)
- [EventBase::stop](eventbase.stop.md) — Повідомляє event_base
припинити надсилання подій
- [EventBuffer](class.eventbuffer.md) - Клас EventBuffer
- [EventBuffer::add](eventbuffer.add.md) — Додає дані до
кінець буфера подій
- [EventBuffer::addBuffer](eventbuffer.addbuffer.md) -
Переміщує всі дані з буфера екземпляру EventBuffer
- [EventBuffer::appendFrom](eventbuffer.appendfrom.md) -
Переміщує вказану кількість байтів з вихідного буфера
кінець поточного буфера
- [EventBuffer::\_\_construct](eventbuffer.construct.md) -
Створює об'єкт EventBuffer
- [EventBuffer::copyout](eventbuffer.copyout.md) — Копіює
вказана кількість байтів з початку буфера
- [EventBuffer::drain](eventbuffer.drain.md) — Видаляє вказане
кількість байтів з початку буфера, нікуди не копіюючи
- [EventBuffer::enableLocking](eventbuffer.enablelocking.md) -
Опис
- [EventBuffer::expand](eventbuffer.expand.md) - Резервує
простір у буфері
- [EventBuffer::freeze](eventbuffer.freeze.md) — Запобігає
виклики, які змінюють буфер подій у разі успішного
виконання
- [EventBuffer::lock](eventbuffer.lock.md) — Отримує блокування
буфера
- [EventBuffer::prepend](eventbuffer.prepend.md) - Записує
дані на початок буфера
- [EventBuffer::prependBuffer](eventbuffer.prependbuffer.md) -
Переміщує всі дані з вихідного буфера на початок поточного
буфера
- [EventBuffer::pullup](eventbuffer.pullup.md) - Лінеаризує
дані в буфері та повертає їх вміст у вигляді рядка
- [EventBuffer::read](eventbuffer.read.md) — Читає дані з
evbuffer і виснажує прочитані байти
- [EventBuffer::readFrom](eventbuffer.readfrom.md) - Читає
дані з файлу до кінця буфера
- [EventBuffer::readLine](eventbuffer.readline.md) - Витягує
рядок із початку буфера
- [EventBuffer::search](eventbuffer.search.md) - Сканує буфер
на наявність рядка
- [EventBuffer::searchEol](eventbuffer.searcheol.md) - Сканує
буфер на наявність кінця рядка
- [EventBuffer::substr](eventbuffer.substr.md) — Обрізає частину
даних буфера
- [EventBuffer::unfreeze](eventbuffer.unfreeze.md) - Повторно
включає дзвінки, які змінюють буфер подій
- [EventBuffer::unlock](eventbuffer.unlock.md) - Знімає
блокування, встановлене EventBuffer::lock
- [EventBuffer::write](eventbuffer.write.md) - Записує
вміст буфера у файл або сокет
- [EventBufferEvent](class.eventbufferevent.md) - Клас
EventBufferEvent
- [EventBufferEvent::close](eventbufferevent.close.md) -
Закриває дескриптор файлу, пов'язаний із поточною подією буфера
- [EventBufferEvent::connect](eventbufferevent.connect.md) -
Підключає файловий дескриптор події буфера до зазначеного
адресою або сокетом UNIX
- [EventBufferEvent::connectHost](eventbufferevent.connecthost.md)
— Підключається на ім'я хоста з можливістю асинхронного
дозволу DNS
- [EventBufferEvent::\_\_construct](eventbufferevent.construct.md)
— Створює об'єкт EventBufferEvent
- [EventBufferEvent::createPair](eventbufferevent.createpair.md)
— Створює дві буферні події, пов'язані один з одним
- [EventBufferEvent::disable](eventbufferevent.disable.md) -
Відключає читання, запис або те й інше у події буфера
- [EventBufferEvent::enable](eventbufferevent.enable.md) -
Включає читання, запис або те й інше в події буфера
- [EventBufferEvent::free](eventbufferevent.free.md) -
Звільняє подію буфера
- [EventBufferEvent::getDnsErrorString](eventbufferevent.getdnserrorstring.md)
— Повертає рядок, що описує останню невдалу спробу
пошуку DNS
- [EventBufferEvent::getEnabled](eventbufferevent.getenabled.md)
— Повертає бітову маску подій, які зараз
активовані для буферної події
- [EventBufferEvent::getInput](eventbufferevent.getinput.md) -
Повертає базовий вхідний буфер, пов'язаний із поточним буферним
подією
- [EventBufferEvent::getOutput](eventbufferevent.getoutput.md) -
Повертає базовий вихідний буфер, пов'язаний із поточним буферним
подією
- [EventBufferEvent::read](eventbufferevent.read.md) - Читає
дані буфера
- [EventBufferEvent::readBuffer](eventbufferevent.readbuffer.md)
— Зливає весь вміст буфера введення та поміщає його у буфер
- [EventBufferEvent::setCallbacks](eventbufferevent.setcallbacks.md)
— Призначає callback-функції для читання, запису та події
(стану)
- [EventBufferEvent::setPriority](eventbufferevent.setpriority.md)
- Надає пріоритет bufferevent
- [EventBufferEvent::setTimeouts](eventbufferevent.settimeouts.md)
— Встановлює час очікування та запису для події
буфера
- [EventBufferEvent::setWatermark](eventbufferevent.setwatermark.md)
— Регулює водяні знаки читання та/або запису
- [EventBufferEvent::sslError](eventbufferevent.sslerror.md) -
Повертає останню помилку OpenSSL, повідомлену буферному
події
- [EventBufferEvent::sslFilter](eventbufferevent.sslfilter.md)
Створює нову подію буфера SSL для надсилання даних через
інша подія буфера
- [EventBufferEvent::sslGetCipherInfo](eventbufferevent.sslgetcipherinfo.md)
— Повертає текстовий опис шифру
- [EventBufferEvent::sslGetCipherName](eventbufferevent.sslgetciphername.md)
— Повертає поточне ім'я шифру з'єднання SSL
- [EventBufferEvent::sslGetCipherVersion](eventbufferevent.sslgetcipherversion.md)
— Повертає версію шифру, який використовує поточне SSL-з'єднання.
- [EventBufferEvent::sslGetProtocol](eventbufferevent.sslgetprotocol.md)
— Повертає ім'я протоколу, який використовується для поточного
з'єднання SSL
- [EventBufferEvent::sslRenegotiate](eventbufferevent.sslrenegotiate.md)
— Повідомляє про буферну подію почати перегляд SSL
- [EventBufferEvent::sslSocket](eventbufferevent.sslsocket.md)
Створює нову буферну подію SSL для надсилання даних
через SSL у сокет
- [EventBufferEvent::write](eventbufferevent.write.md)
Додає дані до буфера виводу буферної події
- [EventBufferEvent::writeBuffer](eventbufferevent.writebuffer.md)
— Додає вміст буфера в буфер виводу буферного
події
- [Про callback-функції подійного
буфера](eventbufferevent.about.callbacks.md)
- [EventConfig](class.eventconfig.md) - Клас EventConfig
- [EventConfig::avoidMethod](eventconfig.avoidmethod.md) -
Попросити libevent не використати певний метод події
- [EventConfig::\_\_construct](eventconfig.construct.md) -
Створити об'єкт EventConfig
- [EventConfig::requireFeatures](eventconfig.requirefeatures.md)
— Ввести потрібні додатком властивості методу події
- [EventConfig::setFlags](eventconfig.setflags.md) -
Встановлює один або кілька прапорів для налаштування можливого
ініціалізації EventBase
- [EventConfig::setMaxDispatchInterval](eventconfig.setmaxdispatchinterval.md)
— Запобігти інверсії пріоритетів
- [EventDnsBase](class.eventdnsbase.md) - Клас EventDnsBase
- [EventDnsBase::addNameserverIp](eventdnsbase.addnameserverip.md)
— Додає сервер імен до бази DNS
- [EventDnsBase::addSearch](eventdnsbase.addsearch.md) -
Додає домен до списку пошукових доменів
- [EventDnsBase::clearSearch](eventdnsbase.clearsearch.md) -
Видаляє всі поточні суфікси пошуку
- [EventDnsBase::\_\_construct](eventdnsbase.construct.md) -
Конструктор об'єкту EventDnsBase
- [EventDnsBase::countNameservers](eventdnsbase.countnameservers.md)
— Отримує кількість налаштованих серверів імен
- [EventDnsBase::loadHosts](eventdnsbase.loadhosts.md) -
Завантажує файл hosts (у тому ж форматі, що і /etc/hosts) з
файлу hosts
- [EventDnsBase::parseResolvConf](eventdnsbase.parseresolvconf.md)
— Сканує файл у форматі resolv.conf
- [EventDnsBase::setOption](eventdnsbase.setoption.md) -
Встановлює значення параметра конфігурації
- [EventDnsBase::setSearchNdots](eventdnsbase.setsearchndots.md)
— Встановлює 'ndots' для пошуку
- [EventHttp](class.eventhttp.md) - Клас EventHttp
- [EventHttp::accept](eventhttp.accept.md) - Примушує
HTTP-сервер приймати з'єднання із зазначеним потоком сокету або
ресурсом
- [EventHttp::addServerAlias](eventhttp.addserveralias.md) -
Додає псевдонім сервера до об'єкта HTTP-сервера
- [EventHttp::bind](eventhttp.bind.md) — Прив'язує HTTP-сервер
до вказаної адреси та порту
- [EventHttp::\_\_construct](eventhttp.construct.md) - Створює
об'єкт EventHttp (HTTP-сервер)
- [EventHttp::removeServerAlias](eventhttp.removeserveralias.md)
— Видаляє псевдонім сервера
- [EventHttp::setAllowedMethods](eventhttp.setallowedmethods.md)
— Встановлює, які методи HTTP підтримуються у запитах,
прийнятих цим сервером та переданих callback-функції
користувача
- [EventHttp::setCallback](eventhttp.setcallback.md) -
Встановлює callback-функцію для зазначеного URI
- [EventHttp::setDefaultCallback](eventhttp.setdefaultcallback.md)
— Встановлює callback-функцію за замовчуванням для обробки
запитів, які не перехоплюються конкретними
callback-функціями
- [EventHttp::setMaxBodySize](eventhttp.setmaxbodysize.md) -
Встановлює максимальний розмір запиту
- [EventHttp::setMaxHeadersSize](eventhttp.setmaxheaderssize.md)
— Встановлює максимальний розмір заголовка HTTP
- [EventHttp::setTimeout](eventhttp.settimeout.md) -
Встановлює час очікування для запиту HTTP
- [EventHttpConnection](class.eventhttpconnection.md) - Клас
EventHttpConnection
- [EventHttpConnection::\_\_construct](eventhttpconnection.construct.md)
- Конструктор об'єкта EventHttpConnection
- [EventHttpConnection::getBase](eventhttpconnection.getbase.md)
— Повертає базу подій, пов'язану зі з'єднанням
- [EventHttpConnection::getPeer](eventhttpconnection.getpeer.md)
— Отримує віддалену адресу та порт, пов'язаний зі з'єднанням
- [EventHttpConnection::makeRequest](eventhttpconnection.makerequest.md)
— Робить HTTP-запит із зазначеного з'єднання
- [EventHttpConnection::setCloseCallback](eventhttpconnection.setclosecallback.md)
— Встановлює callback-функцію при закритті з'єднання
- [EventHttpConnection::setLocalAddress](eventhttpconnection.setlocaladdress.md)
— Встановлює IP-адресу, з якої відбуваються HTTP-з'єднання
- [EventHttpConnection::setLocalPort](eventhttpconnection.setlocalport.md)
— Встановлює локальний порт, з якого виробляються
з'єднання
- [EventHttpConnection::setMaxBodySize](eventhttpconnection.setmaxbodysize.md)
— Встановлює максимальний розмір тіла для підключення
- [EventHttpConnection::setMaxHeadersSize](eventhttpconnection.setmaxheaderssize.md)
— Встановлює максимальний розмір заголовка
- [EventHttpConnection::setRetries](eventhttpconnection.setretries.md)
— Встановлює максимальну кількість повторів для підключення
- [EventHttpConnection::setTimeout](eventhttpconnection.settimeout.md)
— Встановлює час очікування для підключення
- [EventHttpRequest](class.eventhttprequest.md) - Клас
EventHttpRequest
- [EventHttpRequest::addHeader](eventhttprequest.addheader.md) -
Додає заголовок HTTP до заголовків запиту
- [EventHttpRequest::cancel](eventhttprequest.cancel.md) -
Скасує очікування HTTP-запиту
- [EventHttpRequest::clearHeaders](eventhttprequest.clearheaders.md)
— Видаляє всі вихідні заголовки зі списку заголовків запиту
- [EventHttpRequest::closeConnection](eventhttprequest.closeconnection.md)
— Закриває зв'язане з'єднання HTTP
- [EventHttpRequest::\_\_construct](eventhttprequest.construct.md)
- Конструктор об'єкта EventHttpRequest
- [EventHttpRequest::findHeader](eventhttprequest.findheader.md)
— Отримує значення заголовка
- [EventHttpRequest::free](eventhttprequest.free.md) -
Звільняє об'єкт та видаляє пов'язані події
- [EventHttpRequest::getBufferEvent](eventhttprequest.getbufferevent.md)
— Повертає об'єкт EventBufferEvent
- [EventHttpRequest::getCommand](eventhttprequest.getcommand.md)
- Повертає команду запиту (метод)
- [EventHttpRequest::getConnection](eventhttprequest.getconnection.md)
— Повертає об'єкт EventHttpConnection
- [EventHttpRequest::getHost](eventhttprequest.gethost.md) -
Повертає хост запиту
- [EventHttpRequest::getInputBuffer](eventhttprequest.getinputbuffer.md)
- Повертає вхідний буфер
- [EventHttpRequest::getInputHeaders](eventhttprequest.getinputheaders.md)
- Повертає асоціативний масив вхідних заголовків
- [EventHttpRequest::getOutputBuffer](eventhttprequest.getoutputbuffer.md)
— Повертає вихідний буфер запиту
- [EventHttpRequest::getOutputHeaders](eventhttprequest.getoutputheaders.md)
— Повертає асоціативний масив вихідних заголовків
- [EventHttpRequest::getResponseCode](eventhttprequest.getresponsecode.md)
- Повертає код відповіді
- [EventHttpRequest::getUri](eventhttprequest.geturi.md) -
Повертає URI запиту
- [EventHttpRequest::removeHeader](eventhttprequest.removeheader.md)
— Видаляє заголовок HTTP із заголовків запиту
- [EventHttpRequest::sendError](eventhttprequest.senderror.md) -
Надсилає HTML-повідомлення про помилку клієнту
- [EventHttpRequest::sendReply](eventhttprequest.sendreply.md) -
Відправляє HTML-відповідь клієнту
- [EventHttpRequest::sendReplyChunk](eventhttprequest.sendreplychunk.md)
— Відправляє блок даних як частину поточного фрагментованого
відповіді
- [EventHttpRequest::sendReplyEnd](eventhttprequest.sendreplyend.md)
— Заповнює фрагментарну відповідь, звільняючи запит
відповідним чином
- [EventHttpRequest::sendReplyStart](eventhttprequest.sendreplystart.md)
— Ініціює фрагментарну відповідь
- [EventListener](class.eventlistener.md) - Клас EventListener
- [EventListener::\_\_construct](eventlistener.construct.md) -
Створити новий слухач з'єднання, пов'язаний з базою подій
- [EventListener::disable](eventlistener.disable.md) — Вимикає
подія підключення до об'єкта слухача
- [EventListener::enable](eventlistener.enable.md) — Включає
подія підключення до об'єкта слухача
- [EventListener::getBase](eventlistener.getbase.md) -
Повертає базу подій, пов'язану із слухачем подій
- [EventListener::getSocketName](eventlistener.getsocketname.md)
— Отримує поточну адресу, до якої прив'язаний сокет слухача
- [EventListener::setCallback](eventlistener.setcallback.md) -
Ціль setCallback
- [EventListener::setErrorCallback](eventlistener.seterrorcallback.md)
- Встановлює callback-функцію помилки слухача подій
- [EventSslContext](class.eventsslcontext.md) - Клас
EventSslContext
- [EventSslContext::\_\_construct](eventsslcontext.construct.md)
— Конструктор контексту OpenSSL для використання у класах
Event
- [EventUtil](class.eventutil.md) - Клас EventUtil
- [EventUtil::\_\_construct](eventutil.construct.md) -
Абстрактний конструктор
- [EventUtil::getLastSocketErrno](eventutil.getlastsocketerrno.md)
— Отримати номер останньої помилки сокету, що виникла.
- [EventUtil::getLastSocketError](eventutil.getlastsocketerror.md)
— Отримати останню помилку сокету.
- [EventUtil::getSocketFd](eventutil.getsocketfd.md) — Отримати
числовий файловий дескриптор сокету чи потоку
- [EventUtil::getSocketName](eventutil.getsocketname.md) -
Отримати поточну адресу, до якої прив'язаний сокет
- [EventUtil::setSocketOption](eventutil.setsocketoption.md) -
Встановити опції сокету
- [EventUtil::sslRandPoll](eventutil.sslrandpoll.md) -
Згенерувати ентропію за допомогою RAND_poll() із OpenSSL
