import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const StyledTextFieldDark = styled(TextField)(
  {
    '& label.Mui-focused': {
      color: '#3E3E3E',
    },
    '& .MuiInput-underline': {
      color: '#3E3E3E'
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#3E3E3E',
    },
    '& label': {
      color: '#3E3E3E',
    }
  }
)

