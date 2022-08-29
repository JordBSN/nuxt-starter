import filesize from 'filesize'


export default defineNuxtPlugin(() => {
    return {
        provide: {
            size: (size, options) => {
                return filesize(size,options)
            }
        }
    }
})