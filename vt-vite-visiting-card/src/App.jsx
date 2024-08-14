import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import { Download as DownloadIcon, AutoAwesome as AutoAwesomeIcon } from '@mui/icons-material';

const defaultTheme = createTheme();

function App() {

  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    email: '',
    phone: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const downloadCard = () => {
    toPng(document.getElementById('v-card'))
      .then((dataUrl) => {
        saveAs(dataUrl, 'visiting-card.png');
      })
      .catch((err) => {
        console.error('Oops, something went wrong!', err);
      });
  }

  return (
    <>
      <div>
        <ThemeProvider theme={defaultTheme}>
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
              <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
                Visiting Card Generator
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="occupation"
                  label="Occupation"
                  name="occupation"
                  autoComplete="off"
                  value={formData.occupation}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  id="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  startIcon={<AutoAwesomeIcon />}
                >
                  Generate Card
                </Button>
              </Box>
            </Box>
            {submittedData && (
              <>
                <Box className="v-card" id="v-card">
                  <div className="left">
                    <img src="user.png" alt="User Avatar" />
                  </div>

                  <div className="right">
                    <p className="name">{submittedData.name}</p>
                    <p className="occupation">{submittedData.occupation}</p>
                    <p className="phone">{submittedData.phone}</p>
                    <p className="email">{submittedData.email}</p>
                  </div>
                </Box>
                <Box>
                  <Button
                    fullWidth
                    color="secondary"
                    variant="contained"
                    onClick={() => downloadCard()}
                    sx={{ mt: 3, mb: 2 }}
                    startIcon={<DownloadIcon />}
                  >
                    Download Card
                  </Button>
                </Box>
              </>
            )}
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App
