
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import type { PaletteMode } from '@mui/material/styles';
import {createTheme} from '@mui/material/styles'; 
import { createContext, useContext, useEffect, useMemo, useState, type ReactElement } from 'react';

const BRAND_COLORS = {
    primaryLight: '#3f51b5',
    primaryDark: '#7986cb',
    secondaryLight: '#f50057',
    secondaryDark: '#ff4081',
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    info: '#2196f3',
};

declare module '@mui/material/styles' {
  interface Palette {
    cardDarker: string; 
  }

  interface PaletteOptions {
    cardDarker?: string; 
  }
}


export const getTheme = (mode: PaletteMode) => {
    return createTheme({
    // --- PALETTE CONFIGURATION (COLORS) ---
    palette: {
        mode, // Automatically switches core MUI defaults between 'light' and 'dark'
        primary: {
            main: mode === 'dark' ? BRAND_COLORS.primaryDark : BRAND_COLORS.primaryLight,
            contrastText: '#ffffff',
        },
        secondary: {
            main: mode === 'dark' ? BRAND_COLORS.secondaryDark : BRAND_COLORS.secondaryLight,
        },
        success: { main: BRAND_COLORS.success },
        warning: { main: BRAND_COLORS.warning },
        error: { main: BRAND_COLORS.error },
        info: { main: BRAND_COLORS.info },
        background: {
            default: mode === 'dark' ? '#0f1521' : '#f8f9fa', // Main layout backdrop
            paper: mode === 'dark' ? '#161c24' : '#ffffff',   // Cards, Modals, Drawers
        },
        text: {
            primary: mode === 'dark' ? '#f4f6f8' : '#1c252e',
            secondary: mode === 'dark' ? '#919eab' : '#637381',
        },
        cardDarker: mode === 'dark' ? '#1b3353' : '#e9ecf1',
        
    },

    // --- TYPOGRAPHY CONFIGURATION (FONTS & SCALING) ---
    typography: {
        fontFamily: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        
        htmlFontSize: 16, // Base browser font size reference (defaults to 16px)

        // Styling specific headline/text blocks
        h1: {
            fontSize: '3rem',         // 32px
            fontWeight: 700,
            lineHeight: 1.3,
        },
        h2: {
            fontSize: '1.3rem',         // 32px
            fontWeight: 700,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: '1rem',         // 32px
            fontWeight: 700,
            lineHeight: 1.3,
        },
        body1: {

        },
        body2: {

        },
        button: {
            textTransform: 'none', // Prevents MUI buttons to be ALL CAPS
        },
    },

    // --- GLOBAL COMPONENT OVERRIDES ---
    // components: {
    //     MuiButton: {
    //         styleOverrides: {
    //             root: {
    //                 borderRadius: 8, // Soft rounded borders for buttons globally
    //                 padding: '6px 16px',
    //             },
    //         },
    //     },
    //     MuiCard: {
    //         styleOverrides: {
    //             root: {
    //                 borderRadius: 12,
    //                 boxShadow: mode === 'dark' 
    //                 ? '0px 4px 20px rgba(0, 0, 0, 0.4)' 
    //                 : '0px 4px 20px rgba(145, 158, 171, 0.15)',
    //             },
    //         },
    //     },
    // },
  });
}

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function MyThemeProvider({ children }: {children: ReactElement}) {
    // Initialize state from LocalStorage or system default
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('themeMode');
        if (savedMode) return savedMode;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // 2. Persist state changes
    useEffect(() => {
        localStorage.setItem('themeMode', mode);
    }, [mode]);

    // 3. Memoize the toggle function
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );

    // 4. Generate the MUI theme based on the current mode
    const theme = useMemo(() => getTheme(mode as PaletteMode), [mode]);

    return (
        <ColorModeContext value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </ColorModeContext>
    );
}

// 5. Custom hook for easy consumption anywhere in your app
export const useColorMode = () => useContext(ColorModeContext);
