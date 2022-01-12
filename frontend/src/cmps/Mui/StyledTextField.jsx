import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


export const StyledTextField = styled(TextField)(
  {
    '& label.Mui-focused': {
      color: '#F5F5F5',
    },
    '& .MuiInput-underline': {
      color: '#F5F5F5'
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#F5F5F5',
    },
    '& label': {
      color: '#F5F5F5',
    }
  }
)