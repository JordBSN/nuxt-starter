import {
    format
} from 'date-fns'

import fr from 'date-fns/locale/fr'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            dateFormat: (date, outputFormat) => {
                if (!date) return '';
                date = date.toString();
                return format(new Date(date), outputFormat, {
                    locale: fr
                })
            }
        }
    }
})