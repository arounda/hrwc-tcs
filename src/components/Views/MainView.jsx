'use client';

import React, { useEffect, useState } from 'react'
import Loading from '@/components/Common/Loading';
import { createTheme, ThemeProvider } from '@mui/material';

const customTheme = createTheme({
  typography: {
  },
  palette: {
    primary: {
      // main: '#2D34FF',
      main: 'rgba(0, 0, 0, 0.6)',
    },
    error: {
      main: '#F00',
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '1.6rem',
          fontFamily: 'var(--inter)',
          backgroundColor: '#FAFAFB',
          borderRadius: '12px',

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderWidth: '1px',
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderWidth: '1px',
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--primary)",
            borderWidth: '1px',
          },
          "&.Mui-focused .MuiSelect-select ~ .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderWidth: '1px',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1.6rem',
          fontFamily: 'var(--font-inter)'
        }
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          border: '1px solid #EBEBEB',
          borderRadius: '8px',
          fontFamily: 'var(--font-inter)',
          fontSize: '1.4rem',
          lineHeight: 'normal',
          color: 'black',
          gap: '.8rem',
          height: '32px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '& .MuiChip-label': {
            paddingInline: '.8rem',
          },
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0px',
          boxShadow: 'none',
          backgroundColor: '#FAFAFB',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '1.4rem',
          display: 'flex',
          gap: '.8rem',
          color: 'black',
          fontFamily: 'var(--font-inter)',
          padding: '6px 16px',
          '&.Mui-selected': {
            backgroundColor: 'transparent',
          },
        }
      }
    }
  }
})

const MainView = ({ children }) => {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, []);

  return (isLoading ?
    <Loading />
    : <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
  )
};

export default MainView;
