import { createTheme, ThemeProvider, Theme, } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

const InputTheme = () =>
  createTheme({

    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#CED4DA',
            '--TextField-brandBorderHoverColor': '#A4B0BD',
            '--TextField-brandBorderFocusedColor': '#6C757D',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
            '& .MuiInputLabel-root': {
                color: 'white', // تعديل لون النص في label
              },
              '& .MuiInputBase-input': {
                color: 'white', // تعديل لون النص داخل ال input
              },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
            
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },

          },
        },
      },
    },
  });


  export default InputTheme ;