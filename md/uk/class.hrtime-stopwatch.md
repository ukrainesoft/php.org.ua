- [«
HRTime\PerformanceCounter::getTicksSince](hrtime-performancecounter.gettickssince.md)
- [HRTime\StopWatch::getElapsedTicks
»](hrtime-stopwatch.getelapsedticks.md)

- [PHP Manual](index.md)
- [HRTime](book.hrtime.md)
- Клас HRTime\StopWatch

# Клас HRTime\StopWatch

(PECL hrtime \>u003d 0.4.3)

## Вступ

## Огляд класів

class **HRTime\StopWatch** extends
[HRTime\PerformanceCounter](class.hrtime-performancecounter.md) {

/\* Методи \*/

public [getElapsedTicks](hrtime-stopwatch.getelapsedticks.md)(): int

public [getElapsedTime](hrtime-stopwatch.getelapsedtime.md)(int
`$unit` u003d ?): float

public
[getLastElapsedTicks](hrtime-stopwatch.getlastelapsedticks.md)(): int

public
[getLastElapsedTime](hrtime-stopwatch.getlastelapsedtime.md)(int
`$unit` u003d ?): float

public [isRunning](hrtime-stopwatch.isrunning.md)(): bool

public [start](hrtime-stopwatch.start.md)(): void

public [stop](hrtime-stopwatch.stop.md)(): void

/\* Наслідувані методи \*/

public static
[HRTime\PerformanceCounter::getFrequency](hrtime-performancecounter.getfrequency.md)():
int

public static
[HRTime\PerformanceCounter::getTicks](hrtime-performancecounter.getticks.md)():
int

public static
[HRTime\PerformanceCounter::getTicksSince](hrtime-performancecounter.gettickssince.md)(int
`$start`): int

}

## Зміст

- [HRTime\StopWatch::getElapsedTicks](hrtime-stopwatch.getelapsedticks.md)
— Отримати кількість тиків для всіх інтервалів.
- [HRTime\StopWatch::getElapsedTime](hrtime-stopwatch.getelapsedtime.md)
— Отримати сумарний минулий час усіх інтервалів
- [HRTime\StopWatch::getLastElapsedTicks](hrtime-stopwatch.getlastelapsedticks.md)
— Отримати кількість тиків за останній інтервал
- [HRTime\StopWatch::getLastElapsedTime](hrtime-stopwatch.getlastelapsedtime.md)
— Отримати минулий час для останнього інтервалу
- [HRTime\StopWatch::isRunning](hrtime-stopwatch.isrunning.md) -
Перевірити, чи виконується вимір
- [HRTime\StopWatch::start](hrtime-stopwatch.start.md) — Запустити
вимір часу
- [HRTime\StopWatch::stop](hrtime-stopwatch.stop.md) — Зупинити
вимір
