- [« Використання бібліотеки PHP для MongoDB
(PHPLIB)](mongodb.tutorial.library.md)
- [Архітектура та внутрішній пристрій драйвера
»](mongodb.architecture.md)

- [PHP Manual](index.md)
- [Навчальні матеріали](mongodb.tutorial.md)
- Моніторинг продуктивності програми (Application Performance
Monitoring або APM)

# Моніторинг продуктивності програми (Application Performance Monitoring або APM)

Драйвер MongoDB містить API передплатника подій, що дозволяє
додатків відстежувати команди та внутрішню активність, що відноситься до
[» Специфікації виявлення та моніторингу
серверів](https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst).
У цьому посібнику буде продемонстровано моніторинг команд за допомогою
інтерфейсу
[MongoDB\Driver\Monitoring\CommandSubscriber](class.mongodb-driver-monitoring-commandsubscriber.md).

Інтерфейс
[MongoDB\Driver\Monitoring\CommandSubscriber](class.mongodb-driver-monitoring-commandsubscriber.md)
визначає три методи: `commandStarted`, `commandSucceeded` та
`commandFailed`. Кожен із них приймає один параметр `event` класу,
відповідної потрібної події. Наприклад, `commandSucceeded`
приймає аргумент `$event` класу
[MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md).

У цьому посібнику ви реалізуємо передплатника, який створює список
профілювань всіх запитів та середнього часу їх виконання.

## Клас передплатник Scaffolding

Ми почнемо з шаблону для нашого передплатника:

` <?phpclass QueryTimeCollector implements \MongoDB\Driver\Monitoring\CommandSubscriber{    public function commandStarted( \MongoDB\Driver\Monitoring\CommandStartedEvent $event )    {    }    public function commandSucceeded( \MongoDB\Driver\Monitoring\CommandSucceededEvent $event )    {    }    public function commandFailed( \MongoDB\Driver\Monitoring\CommandFailedEvent $event )   {    }}?> `

## Реєстрація передплатника

Як тільки об'єкт передплатник створено, необхідно його зареєструвати в
драйвері у системі моніторингу. Реєстрація здійснюється методом
[MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md)
або
[MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md)
для реєстрації передплатника глобально або за допомогою певного класу
Manager відповідно.

` <?php\MongoDB\Driver\Monitoring ddSubscriber( new QueryTimeCollector() );?> `

## Реалізуємо логіку

Тепер займемося реалізацією логіки класу передплатника. Для порівняння
двох подій, що відносяться до успішно виконаної команди (commandStarted
and commandSucceeded), кожен об'єкт події надає поле
`requestId`.

Для запису середнього часу виконання запиту ми почнемо з відстеження
команди `find` у події commandStarted. Ми будемо додавати елемент у
масив `pendingCommands` з індексом відповідним `requestId` та
значенням, що відповідає запиту.

Коли ми отримаємо відповідну подію commandSucceeded з
відповідним `requestId`, ми додамо час виконання (з
`durationMicros`) до загального часу та збільшимо лічильник операцій.

Якщо ми отримаємо подію commandFailed, ми просто видалимо відповідну
запис із `pendingCommands`.

`<?phpclass QueryTimeCollector implements \MongoDB\Driver\Monitoring\CommandSubscriber{    private $pendingCommands u003d []; private $queryShapeStats u003d []; /* Створює форму запиту з аргументу фільтра. В даний момент враховуються тільки поля верхнього рівня. */    private function createQueryShape( array $filter )    {        return json_encode( array_keys( $filter ) )); }    public function commandStarted( \MongoDB\Driver\Monitoring\CommandStartedEvent $event )    {        if ( array_key_exists( 'find', (array) $event->getCommand() ) )        {            $queryShape u003d $this->createQueryShape( (array) $event->getCommand()->filter ); $this->pendingCommands[$event->getRequestId()] u003d $queryShape; }    }    public function commandSucceeded( \MongoDB\Driver\Monitoring\CommandSucceededEvent $event )   {        $requestId >||| if ( array_key_exists($requestId,$this->pendingCommands ) )       {            $this->queryShapeStats$'' $this->queryShapeStats[$this->pendingCommands[$requestId]]['duration'] +u003d $event->getDurationMicros(); unset( $this->pendingCommands[$requestId] ); }    }    public function commandFailed( \MongoDB\Driver\Monitoring\CommandFailedEvent $event )    {        if ( array_key_exists( $event->getRequestId(), $this->pendingCommands ) )        {            unset( $this->pendingCommands[$event-> getRequestId()] ); }    }    public function __destruct()    {        foreach( $this->queryShapeStats as $shape u003d> $stats )        {            echo "Shape: ", $shape, " (", $stats['count'], ")
",                  $stats['duration'] / $stats['count'], "µs

";        }    }}$m u003d new \MongoDB\Driver\Manager( 'mongodb://localhost:27016' );/* Добавляємо підписника */\MongoDB\ Запускаємо пачку запитів */$query u003d new \MongoDB\Driver\Query( [   'region_slug' u003d> 'scotland-highlands', 'age' u003d> [ '$gte' $$$$$$$$$$$$$$$$$$) ->executeQuery( 'dramio.whisky', $query );$query u003d new \MongoDB\Driver\Query( [    'region_slug' u003d> 'scotland-lowlands', 'age' u003d> > ]] );$cursor u003d $m->executeQuery( 'dramio.whisky', $query );$query u003d new \MongoDB\Driver\Query( [ 'region_slug' u003d> 'scotland-lowland'; u003d $m->executeQuery( 'dramio.whisky', $query );?> `
