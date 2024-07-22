import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate()
    const handliclick=()=>{
    navigate('/SignUp')
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(data:image/jpeg;base64,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)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button onClick={handliclick}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}