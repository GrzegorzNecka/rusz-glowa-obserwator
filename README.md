# rusz-glowa-obserwator

### założenie:
- Obiekt dane pogodowe, wie w jaki sposób należy komuniikować się z fizyczną stacją meteorologiczną, tak abyotrzymać aktualne odczyty danych. 
- Po otryzmaniu danych obiekt aktualizuje wyświetlane informacje dla trzech głównych trybów pracy:
  - warunki bierzące - tryb ten pokazuje informacje na temat temperatury otoczenia, wilgotności oraz ciśnienia atmosferycznego.
  - statystyka,
  prognoza

### zadanie:
- stwórz aplikację, która będzie wykorzystywała obiekt dane pogodowe do aktualizacji informacji wyświetlanych w trzech głównych trybach pracy
- zadanie polega na implementacji metody odczytZmiana() tak aby była ona w stanie automatycznie aktualizować informacje wyświetlane w trybach "warunki bierzące", "statystyka" oraz "prognoza"

## wskazówki
 - metoda odczytZmiana jest wywoływana za każdym razem, kiedy zostaną zaktualizowane odczyty z czujników pogody
 - zadainplementuj obsługę trzech trybów wyświetlania wykorzystujących dane o pogodzie:trybów:
    - warunki bierzące
    - statystyka
    - prognoza
  - dane wyświetlane w poszczególnych trybach muszą być aktualizowane