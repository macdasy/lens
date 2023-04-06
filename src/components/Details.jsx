import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const theme = createTheme();

export default function Details(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [fname, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [tone, setTone] = React.useState('');
  const [disabled, isDisabled] = React.useState(true);

  const handleName = (event) => {
    props.handleName(event.target.value);
    setName(event.target.value);
  };  

  const handleChange = (event) => {
    setAge(event.target.value);
    props.handleShape(event.target.value)
  };

  const handleTone = (event) => {
    setTone(event.target.value);
  };

  React.useEffect(()=>{
    if( (fname!== '') && (tone!== '') && (age!== '') ){ 
        props.setDisabled(false);
        isDisabled(false);
    } else {
        isDisabled(true);
        props.setDisabled(true);
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Enter the required details
          </Typography>
          {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
          <Box component="form" noValidate sx={{ mt: 3 }}>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="Name"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  value={fname}
                  onChange={handleName}
                  autoFocus
                />
              </Grid>
             
              <Grid item xs={12} sm={6}>
                <FormControl sx={{minWidth: 190}} md={{minWidth:300}} required>
                    <InputLabel id="demo-simple-select-autowidth-label">Face Shape</InputLabel>
                    <Select
                        required
                        style={{width:'100%'}}
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        label="Face Shape"
                    >
                        <MenuItem value='r'> Round  </MenuItem>
                        <MenuItem value='o'> Oval   </MenuItem>
                        <MenuItem value='s'> Square </MenuItem>
                    </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl sx={{minWidth: 190}} required>
                        <InputLabel id="demo-simple-select-autowidth-label">Skin Tone</InputLabel>
                        <Select
                            required
                            style={{width:'100%'}}
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={tone}
                            onChange={handleTone}
                            autoWidth
                            label="Skin Tone"
                        >
                            <MenuItem value='bl'> Black </MenuItem>
                            <MenuItem value='br'> Brown </MenuItem>
                            <MenuItem value='w'> White </MenuItem>
                        </Select>
                    </FormControl>
              </Grid>
            </Grid>

            {/* <Button
              type="submit"
              variant="filled"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: 'black' , color:'yellow', textTransform:'none', opacity: disabled ? 0.7 : 1, cursor: disabled ? 'default' : 'pointer' }}
              disabled = {disabled}
            >
              Submit
            </Button> */}
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}