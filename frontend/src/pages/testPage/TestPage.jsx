import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function () {
  return (
    <>
      <h1>Página teste...</h1>

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <FormControl variant='standard'>
          <InputLabel htmlFor='input-teste'>Teste de ícone</InputLabel>

          <Input
            id='input-teste'
            startAdornment={
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>

        <TextField
          id='input-with-icon-textfield'
          label='TextField'
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          variant='standard'
        />
      </Box>
    </>
  )
}
