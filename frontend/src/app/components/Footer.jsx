import { Box, Typography, TextField, Button, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "var(--navigation)" }}>
      <Box className="mx-auto max-w-screen-xl px-4 py-10">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="mb-2 flex items-center space-x-2 text-2xl font-bold">
              <span>E</span>
              <span className="text-blue-600">Commerce</span>
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a officia ea expedita!
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" className="mt-4 mb-2 font-medium">
              Address
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              35 Remida Heights,
              <br />
              45 Street,
              <br />
              South Caroline, US
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" className="mt-4 mb-2 font-medium">
              Links
            </Typography>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-3">
                {['Pricing', 'Demo', 'Press', 'Support Hub', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-500 hover:text-blue-600 hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" className="mt-4 mb-2 font-medium">
              Subscribe to our Newsletter
            </Typography>
            <div className="flex flex-col">
              <div className="mb-4">
                <TextField
                  variant="outlined"
                  className="mb-2 w-full rounded-xl bg-gray-200 focus:ring-1 focus:ring-blue-600"
                  placeholder="Enter your email"
                  size="small"
                />
                <Button
                  variant="contained"
                  className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ backgroundColor: "var(--background)" }}>
        <Box className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <Typography variant="body2">© {new Date().getFullYear()} My Website. All rights reserved.</Typography>
          <div>
            <Link href="#" className="text-gray-500 hover:underline">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="#" className="text-gray-500 hover:underline">
              Terms of Service
            </Link>
          </div>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
