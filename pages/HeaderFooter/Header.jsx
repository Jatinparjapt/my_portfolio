import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import logo from "@/public/logo.jpg"
import Image from 'next/image';

const drawerWidth = 240;


function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box  onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div className="flex justify-center">
      <Image src={logo} alt='PortFolio' width={40} height={45} className='rounded-full' />
      </div>
      </Typography>
      <Divider />
      <List>
       
          <ListItem  disablePadding>
            <ListItemButton  className='flex flex-col space-y-3 align-center' >
            <Link href={"/"}  >
             Home
             </Link>
             <Link href={"/Routes/About"} >
            About Me
             </Link > 
             <Link href={"/Routes/Portfolio"} >
            Portfolio
             </Link > 
             <Link href={"/Routes/Blog"} >
            Blog
             </Link>
             <Link href={"/Routes/Skills"} >
            Skills
             </Link>
             <Link href={"/Routes/Resume"} >
            Resume/CV
             </Link>
             <Link href={"/Routes/Contact"} >
            Contact
             </Link>
             
            </ListItemButton>
          </ListItem>
       
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          > 
          <div className='flex' >
          <Image src={logo} alt='PortFolio' width={40} height={45} className='rounded-full ' />
          <span className='ml-2' >Portfolio</span>
          </div>
          </Typography>
          <Box className="hidden space-x-4  sm:flex " >
             <Link href={"/"}  >
             Home
             </Link>
             <Link href={"/Routes/About"} >
            About Me
             </Link > 
             <Link href={"/Routes/Portfolio"} >
            Portfolio
             </Link > 
             <Link href={"/Routes/Blog"} >
            Blog
             </Link>
             <Link href={"/Routes/Skills"} >
            Skills
             </Link>
             <Link href={"/Routes/Resume"} >
            Resume/CV
             </Link>
             <Link href={"/Routes/Contact"} >
            Contact
             </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}



export default Header;