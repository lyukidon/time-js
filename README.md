# time-js

- usage

```javascript
import {Date, Time} from '@kidon/time-get'

Date(string)
Date('YY.MM.DD') // 23.02.06
Date('YYYY.MM.DD') // 2023.02.06

Time(string , militaryTime : boolean);
Time('HH:MM:SS') // 00:50:40
Time('HH:MM:SS', true) // 00:50:40
Time('HH:MM:SS', false) // AM 0:50:40
```

- Data format
    - Date
        - YEAR length : 4 or 2
        - MONTH length : 2
        - DAY length : 2
    - Time
        - HOUR length : 2
        - MINUTE length : 2
        - SECOND length : 2
