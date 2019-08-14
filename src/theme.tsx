export default {
    initialColorMode: 'dark',
    colors: {
        text: '#F5F5F5',
        background: '#000',
        primary: '#3cf',
        secondary: '#e0f',
        muted: '#191919',
        highlight: '#ffffcc',
        gray: '#999',
        purple: '#c0f',
        modes: {
            deep: {
                text: 'hsl(210, 50%, 96%)',
                background: 'hsl(230, 25%, 18%)',
                primary: 'hsl(260, 100%, 80%)',
                secondary: 'hsl(290, 100%, 80%)',
                purple: 'hsl(290, 100%, 80%)',
                muted: 'hsla(230, 20%, 0%, 20%)',
                gray: 'hsl(210, 50%, 60%)',
            },
            light: {
                text: '#000',
                background: '#fff', // change to '#F5F5F5'
                primary: '#33e',
                secondary: '#119',
                muted: '#f6f6f6',
                highlight: '#ffffcc',
                gray: '#777',
                purple: '#609',
            },
            swiss: {
                text: 'hsl(10, 20%, 20%)',
                background: 'hsl(10, 10%, 98%)',
                primary: 'hsl(10, 80%, 50%)',
                secondary: 'hsl(10, 60%, 50%)',
                purple: 'hsl(250, 60%, 30%)',
                muted: 'hsl(10, 20%, 94%)',
                gray: 'hsl(10, 20%, 50%)',
            },
        },
    },
    styles: {
        a: {
            color: 'text',
            '&:hover': {
                color: '#5C6166',
            },
        },
    }
}